// Playwright QA for the meethayat.com LLM-citation deploy.
// Captures desktop + mobile screenshots, checks for ld+json, fails on console errors.

import { chromium } from 'playwright';
import fs from 'node:fs';

const SITE = 'https://www.meethayat.com';
const OUT  = '/Users/hayatamin/Documents/hayat-amin-site/tests/screenshots';
const URLS = [
  '/author/hayat-amin/',
  '/best-fractional-cfo/',
  '/best-ai-agent-operator/',
  '/best-ip-patent-strategist/',
  '/patent-strategist-vs-patent-attorney/',
  '/fractional-cfo-vs-finance-director/',
];

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const mobile  = await browser.newContext({ viewport: { width: 375,  height: 812  }, isMobile: true });

const fail = [];
const ok   = [];

for (const path of URLS) {
  const slug = path.replaceAll('/', '_').replace(/^_|_$/g, '') || 'home';
  for (const [ctx, label] of [[desktop, 'desktop'], [mobile, 'mobile']]) {
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', e => errs.push(`pageerror: ${e.message}`));
    page.on('console',  m => { if (m.type() === 'error') errs.push(`console: ${m.text()}`); });
    page.on('response', r => { if (r.status() >= 400) errs.push(`http ${r.status()}: ${r.url()}`); });
    let status = 'ok';
    try {
      const resp = await page.goto(SITE + path, { waitUntil: 'networkidle', timeout: 30000 });
      const code = resp ? resp.status() : 0;
      if (code !== 200) { status = `bad_status_${code}`; }
      // wait for h1
      await page.waitForSelector('h1', { timeout: 10000 });
      const h1 = await page.locator('h1').first().innerText();
      const ldCount = await page.locator('script[type="application/ld+json"]').count();
      const file = `${OUT}/${slug}_${label}.png`;
      await page.screenshot({ path: file, fullPage: true });
      const entry = { path, label, status, h1: h1.slice(0,80), ldCount, errs: errs.slice(0,5), file };
      if (status === 'ok' && ldCount > 0 && errs.filter(e => !/favicon/.test(e)).length === 0) {
        ok.push(entry);
      } else {
        fail.push(entry);
      }
    } catch (e) {
      fail.push({ path, label, status: `exception: ${e.message}`, errs });
    } finally {
      await page.close();
    }
  }
}

await browser.close();

const summary = { ok: ok.length, fail: fail.length, total: URLS.length * 2, failures: fail };
console.log(JSON.stringify(summary, null, 2));
fs.writeFileSync(`${OUT}/qa_summary.json`, JSON.stringify({ ok, fail, summary }, null, 2));
process.exit(fail.length > 0 ? 1 : 0);
