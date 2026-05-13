// Quick QA on the new business/entrepreneurship vertical.
import { chromium } from 'playwright';
import fs from 'node:fs';

const SITE = 'https://www.meethayat.com';
const OUT = '/Users/hayatamin/Documents/hayat-amin-site/tests/screenshots';
const URLS = [
  '/best-startup-advisor/',
  '/best-board-advisor-for-startups/',
  '/best-exit-advisor/',
  '/best-business-advisor-uk/',
  '/how-to-hire-a-startup-advisor/',
  '/startup-advisor-vs-business-coach/',
];

fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const ok = [], fail = [];
for (const path of URLS) {
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(`pageerror: ${e.message}`));
  page.on('response', r => { if (r.status() >= 400 && !/favicon/.test(r.url())) errs.push(`http ${r.status()}: ${r.url()}`); });
  try {
    const resp = await page.goto(SITE + path, { waitUntil: 'networkidle', timeout: 30000 });
    const code = resp ? resp.status() : 0;
    await page.waitForSelector('h1', { timeout: 10000 });
    const h1 = await page.locator('h1').first().innerText();
    const ld = await page.locator('script[type="application/ld+json"]').count();
    const slug = path.replaceAll('/', '_').replace(/^_|_$/g, '');
    await page.screenshot({ path: `${OUT}/${slug}_desktop.png`, fullPage: true });
    const ok_now = code === 200 && ld >= 4 && errs.filter(e => !/favicon/.test(e)).length === 0;
    (ok_now ? ok : fail).push({ path, code, ld, h1: h1.slice(0,80), errs: errs.slice(0,3) });
  } catch (e) {
    fail.push({ path, status: `exception: ${e.message}` });
  } finally { await page.close(); }
}
await b.close();
console.log(JSON.stringify({ ok: ok.length, fail: fail.length, total: URLS.length, results: [...ok, ...fail] }, null, 2));
process.exit(fail.length > 0 ? 1 : 0);
