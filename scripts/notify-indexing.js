#!/usr/bin/env node
/**
 * notify-indexing.js — meethayat.com post-deploy indexer.
 *
 * Mirrors beyond-elevation/scripts/notify-indexing.js. After each Vercel
 * deploy it pings search engines so new/updated pages get crawled fast:
 *   1. IndexNow (Bing/Yandex/Seznam/Naver) — batch, instant, unmetered.
 *   2. Google Indexing API (service account) — per-URL POST.
 *      Shared 200/day quota with beyondelevation.com (GCP project be-indexing-2),
 *      so we dedupe against .indexing-cache.json and only push NEW urls.
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
const { google } = (() => { try { return require('googleapis'); } catch { return { google: null }; } })();

const ROOT = path.resolve(__dirname, '..');
const CACHE = path.join(ROOT, '.indexing-cache.json');
const GCP_KEY_PATH = path.join(ROOT, '.gcp-indexing-key.json');
const SITE = 'https://www.meethayat.com';
const HOST = 'www.meethayat.com';
const INDEXNOW_KEY = 'be8a1f3c2d4e5f6a7b8c9d0e1f2a3b4c';
const TIMEOUT_MS = 10000;
const INDEXING_API_QUOTA = 150; // safe ceiling (Google quota = 200/day, shared with BE)
const SITEMAP_RETRIES = 3;

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
  for (let i = 0; i < SITEMAP_RETRIES; i++) {
    const r = await httpGet(`${SITE}/sitemap.xml`);
    if (r.status === 200 && r.body) return extractUrls(r.body);
    await new Promise((s) => setTimeout(s, 4000));
  }
  return [];
}

function loadCache() { try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return { urls: [], lastRun: null }; } }
function saveCache(urls) { fs.writeFileSync(CACHE, JSON.stringify({ urls, lastRun: new Date().toISOString() }, null, 2)); }

async function submitIndexNow(urls) {
  if (!urls.length) return;
  const payload = { host: HOST, key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList: urls };
  const r = await postJson('https://api.indexnow.org/indexnow', payload);
  console.log(`  IndexNow: ${r.status} — ${urls.length} URLs (${r.body?.slice(0, 80) || 'no body'})`);
}

async function submitIndexingAPI(urls) {
  if (!google) { console.log('  google-indexing: googleapis not installed — skipping'); return; }
  if (!fs.existsSync(GCP_KEY_PATH)) { console.log('  google-indexing: no service account key — skipping'); return; }
  const auth = new google.auth.GoogleAuth({ keyFile: GCP_KEY_PATH, scopes: ['https://www.googleapis.com/auth/indexing'] });
  const idx = google.indexing({ version: 'v3', auth });
  const target = urls.slice(0, INDEXING_API_QUOTA);
  console.log(`  google-indexing: submitting ${target.length}/${urls.length} URLs (quota cap ${INDEXING_API_QUOTA})`);
  let ok = 0, fail = 0; const errs = new Set();
  const CONCURRENCY = 4;
  for (let i = 0; i < target.length; i += CONCURRENCY) {
    const batch = target.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(async (url) => {
      try { await idx.urlNotifications.publish({ requestBody: { url, type: 'URL_UPDATED' } }); ok++; }
      catch (e) { fail++; errs.add(String(e?.message || e).slice(0, 120)); }
    }));
    if ((i % 20) === 0) console.log(`    ...${i + batch.length}/${target.length}`);
  }
  console.log(`  google-indexing: ok=${ok} fail=${fail}`);
  if (errs.size) console.log(`    sample errors: ${Array.from(errs).slice(0, 3).join(' | ')}`);
}

async function main() {
  const allUrls = await fetchSitemapUrls();
  if (!allUrls.length) { console.log('No sitemap URLs fetched — skipping'); return; }
  const cache = loadCache();
  const prev = new Set(cache.urls);
  const newUrls = FORCE_ALL ? allUrls : allUrls.filter((u) => !prev.has(u));
  console.log(`Indexing: ${allUrls.length} total, ${newUrls.length} ${FORCE_ALL ? '(forced --all)' : 'new'}`);
  if (DRY) { console.log('DRY — exiting'); return; }
  if (!newUrls.length) { console.log('No new URLs.'); saveCache(allUrls); return; }
  await submitIndexNow(newUrls);
  await submitIndexingAPI(newUrls);
  saveCache(allUrls);
  console.log(`Done. Cache updated with ${allUrls.length} URLs.`);
}

if (require.main === module) main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
module.exports = { main };
