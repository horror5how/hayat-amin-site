// Playwright QA — runs against URL passed via TARGET_URL env, defaults to localhost:3041
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = process.env.TARGET_URL || 'http://localhost:3041';
const OUT = process.env.OUT || '/tmp/hayat-qa';
fs.mkdirSync(OUT, { recursive: true });

const errors = [];
const consoleMessages = [];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') consoleMessages.push(m.text()); });
page.on('response', (r) => { if (r.status() >= 400) errors.push(`HTTP ${r.status()} ${r.url()}`); });

await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.screenshot({ path: `${OUT}/desktop.png`, fullPage: true });

// Mobile
await page.setViewportSize({ width: 375, height: 812 });
await page.reload({ waitUntil: 'networkidle' });
await page.screenshot({ path: `${OUT}/mobile.png`, fullPage: true });

// Critical content checks
await page.setViewportSize({ width: 1440, height: 900 });
await page.reload({ waitUntil: 'networkidle' });
const html = await page.content();
const required = [
  'Hayat Amin',
  'Three pillars',
  'Modern, rogue CFO',
  'Patent, IP & data strategist',
  'AI agent operator',
  'Cake → American Express',
  'Tripbod → TripAdvisor',
  'Mat Westergreen',
  'Seedlegals',
  'Gross Profit',
  'hayat@beyondelevation.com',
];
const missing = required.filter((s) => !html.includes(s));

const out = {
  url: URL,
  pageErrors: errors,
  consoleErrors: consoleMessages,
  missingContent: missing,
  ok: errors.length === 0 && missing.length === 0,
};
fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
await browser.close();
process.exit(out.ok ? 0 : 1);
