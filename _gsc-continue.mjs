// Continue from current state: dialog already shows URL prefix filled with meethayat.com.
// Just click the dark Continue button (right card) by coordinates.
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const PROFILE_DIR = path.join(os.homedir(), ".playwright-profiles", "hayat-gsc");
const STATE_FILE = "/tmp/gsc-run-state.json";
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
  headless: false,
  viewport: { width: 1440, height: 900 },
  args: ["--disable-blink-features=AutomationControlled"],
});
const page = ctx.pages()[0] || (await ctx.newPage());
const shot = (n) => page.screenshot({ path: `/tmp/gsc-c-${n}.png` });

log("Open GSC…");
await page.goto("https://search.google.com/search-console", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(5500);

// Re-open dropdown + add-property because navigation closed the dialog.
log("Open property switcher…");
await page.mouse.click(135, 98);
await page.waitForTimeout(2000);

log("Click Add property…");
await page.locator('text=/Add property/i').first().click({ timeout: 8000 });
await page.waitForTimeout(4000);

log("Fill URL prefix (visible input)…");
const all = await page.locator('input[aria-label="https://www.example.com"]').all();
let filled = false;
for (const inp of all) {
  if (await inp.isVisible().catch(() => false)) {
    await inp.click({ clickCount: 3 });
    await inp.fill("https://www.meethayat.com/");
    filled = true;
    break;
  }
}
log("Filled:", filled);
await page.waitForTimeout(800);
await shot("filled");

// Click Continue by coordinates (URL-prefix card Continue is at ~910, 621 in 1440x900 layout)
log("Click Continue at (910, 621)…");
await page.mouse.click(910, 621);
await page.waitForTimeout(15000);
await shot("after-continue");

log("Look for verification token in body…");
const t = await page.locator('body').textContent();
let token = null;
const m = t && t.match(/google-site-verification[^A-Za-z0-9]+([A-Za-z0-9_\-]{30,})/);
if (m) token = m[1];
log("Token (first pass):", token);

if (!token) {
  // Probably auto-verified or need to expand HTML tag. Look at all inputs/textareas.
  log("Scan readonly inputs/textareas for meta-tag…");
  const ros = await page.locator('input, textarea').all();
  for (const r of ros) {
    const v = (await r.inputValue().catch(() => "")) || "";
    const m2 = v.match(/google-site-verification[^A-Za-z0-9]+([A-Za-z0-9_\-]{30,})/);
    if (m2) { token = m2[1]; break; }
  }
}

if (!token) {
  // Try expanding HTML tag method
  log("Try expanding 'HTML tag' method…");
  for (const sel of ['text=/HTML tag/i', 'text=/Other verification methods/i']) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 }).catch(() => false)) {
        await el.click();
        await page.waitForTimeout(2000);
      }
    } catch {}
  }
  await shot("after-expand");
  const t2 = await page.locator('body').textContent();
  const m3 = t2 && t2.match(/google-site-verification[^A-Za-z0-9]+([A-Za-z0-9_\-]{30,})/);
  if (m3) token = m3[1];
}

await shot("final");
const state = {
  capturedAt: new Date().toISOString(),
  token,
  finalUrl: page.url(),
};
fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
log("State →", STATE_FILE);
console.log(JSON.stringify(state, null, 2));
process.exit(0);
