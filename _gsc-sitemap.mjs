import { chromium } from "playwright";
import path from "node:path";
import os from "node:os";
const PROFILE_DIR = path.join(os.homedir(), ".playwright-profiles", "hayat-gsc");
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
  headless: false, viewport: { width: 1440, height: 900 },
});
const page = ctx.pages()[0] || (await ctx.newPage());
const shot = (n) => page.screenshot({ path: `/tmp/gsc-s3-${n}.png` });

const url = "https://search.google.com/search-console/sitemaps?resource_id=" + encodeURIComponent("https://www.meethayat.com/");
log("Open:", url);
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(6000);

// The sitemap form input has placeholder "Enter sitemap URL"
log("Find sitemap input by placeholder…");
const inp = page.locator('input[placeholder="Enter sitemap URL"]').or(page.locator('input[aria-label*="sitemap" i]')).first();
await inp.waitFor({ state: "visible", timeout: 10000 });
await inp.click({ clickCount: 3 });
await inp.fill("sitemap.xml");
await page.waitForTimeout(500);
await shot("filled");

log("Click SUBMIT by coords (1284, 239)…");
await page.mouse.click(1284, 239);
await page.waitForTimeout(8000);
await shot("after");

// Look for the new sitemap row with status
const body = await page.locator('body').textContent();
const ok = body && /Success|Sitemap submitted/i.test(body);
console.log(JSON.stringify({ submitted: ok, url: page.url() }, null, 2));
process.exit(0);
