// Click VERIFY in the open GSC dialog, then submit sitemap.
import { chromium } from "playwright";
import path from "node:path";
import os from "node:os";

const PROFILE_DIR = path.join(os.homedir(), ".playwright-profiles", "hayat-gsc");
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
  headless: false,
  viewport: { width: 1440, height: 900 },
  args: ["--disable-blink-features=AutomationControlled"],
});
const page = ctx.pages()[0] || (await ctx.newPage());
const shot = (n) => page.screenshot({ path: `/tmp/gsc-v-${n}.png` });

log("Open GSC home (it should auto-route to last property)…");
await page.goto("https://search.google.com/search-console", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(5000);
await shot("home");

// Open property switcher and pick the unverified meethayat property
log("Open property switcher…");
await page.mouse.click(135, 98);
await page.waitForTimeout(2000);
await shot("dropdown");

log("Click meethayat row…");
const meet = page.locator('text=/meethayat\\.com/i').first();
await meet.waitFor({ state: "visible", timeout: 10000 });
await meet.click();
await page.waitForTimeout(5000);
await shot("after-pick");

// If it routes us to a verification page, click VERIFY.
log("Look for VERIFY button…");
const verifyBtns = page.locator('button:has-text("VERIFY"), button:has-text("Verify")');
const vN = await verifyBtns.count();
log("Verify buttons:", vN);
if (vN > 0) {
  await verifyBtns.first().click({ timeout: 8000 });
  log("Clicked VERIFY.");
  await page.waitForTimeout(15000);
  await shot("after-verify");
} else {
  // Maybe the dialog never re-appeared. Try the property in unverified state.
  log("No VERIFY button visible. Try ownership verification URL directly…");
  // GSC stores unverified properties; clicking them shows the verification dialog.
  // Try finding 'Verify' link or 'Verify ownership' text
  const verifyLink = page.locator('text=/Verify/i').first();
  if (await verifyLink.isVisible({ timeout: 4000 }).catch(() => false)) {
    await verifyLink.click();
    await page.waitForTimeout(15000);
    await shot("after-verify-link");
  }
}

// Look for success indicators
const body = await page.locator('body').textContent();
const verified = /Ownership verified|Property verified|verified successfully/i.test(body || "");
log("Verified text on page:", verified);
await shot("final");

console.log(JSON.stringify({ verified, url: page.url() }, null, 2));
process.exit(0);
