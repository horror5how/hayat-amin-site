#!/usr/bin/env node
/**
 * notify-indexing.js — meethayat.com post-deploy indexer.
 *
 * After each Vercel deploy it pings search engines so new/updated pages get
 * crawled fast:
 *   1. IndexNow (Bing/Yandex/Seznam/Naver) — batch, instant, unmetered.
 *      Deduped against .indexing-cache.json so only NEW urls are pushed.
 *   2. Search Console sitemap resubmit — the only Google-side nudge that is
 *      actually recorded. Runs every deploy, not just for new urls.
 *
 * Google's Indexing API is deliberately NOT used: it only queues JobPosting and
 * BroadcastEvent, and answers 200 for everything else without recording it.
 *
 * meethayat.com's sitemap is generated dynamically (app/sitemap.ts), so we fetch
 * the LIVE sitemap rather than read a file from disk.
 *
 * Modes:
 *   default   — only NEW urls (vs .indexing-cache.json)
 *   --all     — every URL in the sitemap (first run / backfill)
 *   --dry     — print the plan but call no APIs
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const CACHE = path.join(ROOT, '.indexing-cache.json');
const GCP_KEY_PATH = path.join(ROOT, '.gcp-indexing-key.json');
// Canonical host moved to the naked domain 2026-08-23. meethayat.com fronts
// the meethayat-fde landing project; this estate's pages reach the public via
// its fallback proxy. /sitemap.xml on the domain is the landing site's small
// sitemap; this estate's full sitemap is exposed as /sitemap-pages.xml.
const SITE = 'https://meethayat.com';
const HOST = 'meethayat.com';
const INDEXNOW_KEY = 'be8a1f3c2d4e5f6a7b8c9d0e1f2a3b4c';
const TIMEOUT_MS = 10000;
const SITEMAP_RETRIES = 3;
const URL_SITEMAPS = [`${SITE}/sitemap.xml`, `${SITE}/sitemap-pages.xml`];
const SITEMAPS = [`${SITE}/sitemap.xml`, `${SITE}/sitemap-pages.xml`, `${SITE}/image-sitemap.xml`];

const args = new Set(process.argv.slice(2));
const FORCE_ALL = args.has('--all');
const DRY = args.has('--dry');

function httpGet(url) {
  return new Promise((resolve) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET',
      headers: { 'User-Agent': 'notify-indexing/1.0' }, timeout: TIMEOUT_MS,
    }, (res) => { let buf = ''; res.on('data', (c) => (buf += c)); res.on('end', () => resolve({ status: res.statusCode, body: buf })); });
    req.on('timeout', () => { req.destroy(new Error('timeout')); resolve({ status: 0, body: '' }); });
    req.on('error', () => resolve({ status: 0, body: '' }));
    req.end();
  });
}

function postJson(url, body) {
  return new Promise((resolve) => {
    const data = JSON.stringify(body);
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) },
      timeout: TIMEOUT_MS,
    }, (res) => { let buf = ''; res.on('data', (c) => (buf += c)); res.on('end', () => resolve({ status: res.statusCode, body: buf })); });
    req.on('timeout', () => { req.destroy(new Error('timeout')); resolve({ status: 0, body: 'timeout' }); });
    req.on('error', (e) => resolve({ status: 0, body: e.message }));
    req.write(data); req.end();
  });
}

function extractUrls(xml) {
  const out = []; const re = /<loc>(.*?)<\/loc>/g; let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

async function fetchSitemapUrls() {
  const all = [];
  for (const sm of URL_SITEMAPS) {
    for (let i = 0; i < SITEMAP_RETRIES; i++) {
      const r = await httpGet(sm);
      if (r.status === 200 && r.body) { all.push(...extractUrls(r.body)); break; }
      await new Promise((s) => setTimeout(s, 4000));
    }
  }
  return [...new Set(all)];
}

function loadCache() { try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return { urls: [], lastRun: null }; } }
function saveCache(urls) { fs.writeFileSync(CACHE, JSON.stringify({ urls, lastRun: new Date().toISOString() }, null, 2)); }

async function submitIndexNow(urls) {
  if (!urls.length) return;
  const payload = { host: HOST, key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList: urls };
  const r = await postJson('https://api.indexnow.org/indexnow', payload);
  console.log(`  IndexNow: ${r.status} — ${urls.length} URLs (${r.body?.slice(0, 80) || 'no body'})`);
}

// Google has no working "recrawl this URL" API for ordinary pages. The Indexing
// API (urlNotifications:publish) only records JobPosting and BroadcastEvent —
// for these pages it answers 200 with an empty urlNotificationMetadata and the
// metadata GET then 404s, i.e. nothing was queued. It used to be called here and
// reported ok=N, which was a false success. Removed 2026-08-17.
//
// Resubmitting the sitemap through the Search Console API is the one Google-side
// nudge that is actually recorded, so that is what runs now. Verify with
// sitemaps.get: lastSubmitted moves and errors/warnings come back.
const b64url = (b) => Buffer.from(b).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

// Service-account JWT -> OAuth token, by hand. Avoids pulling googleapis (~50MB)
// into every deploy for two HTTP calls, and lets this run locally with no install.
async function gscToken() {
  const key = JSON.parse(fs.readFileSync(GCP_KEY_PATH, 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  };
  const input = `${b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))}.${b64url(JSON.stringify(claim))}`;
  const sig = crypto.createSign('RSA-SHA256').update(input).sign(key.private_key);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${input}.${b64url(sig)}`,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${(await res.text()).slice(0, 120)}`);
  return (await res.json()).access_token;
}

async function resubmitSitemaps() {
  if (!fs.existsSync(GCP_KEY_PATH)) { console.log('  gsc-sitemap: no service account key — skipping'); return; }
  let token;
  try { token = await gscToken(); }
  catch (e) { console.log(`  gsc-sitemap: auth FAILED — ${String(e.message).slice(0, 140)}`); return; }

  const base = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(`${SITE}/`)}/sitemaps`;
  const auth = { Authorization: `Bearer ${token}` };
  for (const feedpath of SITEMAPS) {
    const url = `${base}/${encodeURIComponent(feedpath)}`;
    try {
      const put = await fetch(url, { method: 'PUT', headers: auth });
      if (!put.ok) throw new Error(`submit ${put.status}: ${(await put.text()).slice(0, 120)}`);
      // Read it back — a 2xx on the PUT alone does not prove Google recorded it.
      const got = await fetch(url, { headers: auth });
      const d = got.ok ? await got.json() : {};
      console.log(`  gsc-sitemap: ${feedpath} — lastSubmitted ${d.lastSubmitted || '?'}, errors ${d.errors ?? 0}, warnings ${d.warnings ?? 0}`);
    } catch (e) {
      console.log(`  gsc-sitemap: ${feedpath} FAILED — ${String(e.message).slice(0, 140)}`);
    }
  }
}

async function main() {
  const allUrls = await fetchSitemapUrls();
  if (!allUrls.length) { console.log('No sitemap URLs fetched — skipping'); return; }
  const cache = loadCache();
  const prev = new Set(cache.urls);
  const newUrls = FORCE_ALL ? allUrls : allUrls.filter((u) => !prev.has(u));
  console.log(`Indexing: ${allUrls.length} total, ${newUrls.length} ${FORCE_ALL ? '(forced --all)' : 'new'}`);
  if (DRY) { console.log('DRY — exiting'); return; }
  // Sitemaps are resubmitted on every deploy, not just when URLs are new — a
  // changed page needs the recrawl nudge as much as a brand-new one does.
  await resubmitSitemaps();
  if (!newUrls.length) { console.log('No new URLs for IndexNow.'); saveCache(allUrls); return; }
  await submitIndexNow(newUrls);
  saveCache(allUrls);
  console.log(`Done. Cache updated with ${allUrls.length} URLs.`);
}

if (require.main === module) main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
module.exports = { main };
