// Drive GSC: open dropdown → Add property → fill URL prefix → continue → grab token.
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const SITE_PREFIX = "https://www.meethayat.com/";
const PROFILE_DIR = path.join(os.homedir(), ".playwright-profiles", "hayat-gsc");
const STATE_FILE = "/tmp/gsc-run-state.json";
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
  headless: false,
  viewport: { width: 1440, height: 900 },
  args: ["--disable-blink-features=AutomationControlled"],
});
const page = ctx.pages()[0] || (await ctx.newPage());
const shot = (n) => page.screenshot({ path: `/tmp/gsc-${n}.png` });

log("Open GSC…");
await page.goto("https://search.google.com/search-console", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(5500);

log("Click property switcher (top-left dropdown by coords)…");
await page.mouse.click(135, 98);
await page.waitForTimeout(2000);

log("Click + Add property…");
await page.locator('text=/Add property/i').first().click({ timeout: 8000 });
await page.waitForTimeout(4000);
await shot("typedialog");

log("Fill URL-prefix input via aria-label match…");
// Two dialogs may be stacked from prior runs; pick the LAST visible one (topmost).
const urlInputAll = page.locator('input[aria-label="https://www.example.com"]');
const uCount = await urlInputAll.count();
log("URL-prefix inputs (all):", uCount);
// Filter to visible ones
const urlInput = urlInputAll.locator('visible=true').first();
let visibleUrlInput;
if (await urlInput.count().catch(() => 0) > 0) {
  visibleUrlInput = urlInput;
} else {
  // Manual scan
  for (let i = 0; i < uCount; i++) {
    const cand = urlInputAll.nth(i);
    if (await cand.isVisible().catch(() => false)) {
      visibleUrlInput = cand;
      log("Picked visible input at index", i);
      break;
    }
  }
}
if (!visibleUrlInput) throw new Error("No visible URL-prefix input found");
await visibleUrlInput.waitFor({ state: "visible", timeout: 10000 });
await visibleUrlInput.click({ clickCount: 3 });
await visibleUrlInput.fill(SITE_PREFIX);
log("Filled URL prefix:", SITE_PREFIX);
await page.waitForTimeout(800);
await shot("filled");

log("Click Continue (right-side, URL-prefix card)…");
const card = visibleUrlInput.locator('xpath=ancestor::*[descendant::button[contains(., "CONTINUE") or contains(., "Continue")]][1]');
const cardContinue = card.locator('button:has-text("CONTINUE"), button:has-text("Continue")').first();
try {
  await cardContinue.click({ timeout: 5000 });
  log("Card-scoped Continue clicked.");
} catch (e) {
  log("Card-scoped failed; falling back to all buttons…", e.message);
  const all = page.locator('button:has-text("CONTINUE"), button:has-text("Continue")');
  const n = await all.count();
  log("Continue buttons (page):", n);
  if (n >= 2) await all.nth(1).click();
  else if (n === 1) await all.nth(0).click();
}
await page.waitForTimeout(15000);
await shot("verify");

log("Capture verification token from page body…");
let token = null;
const captureFromBody = async () => {
  const t = await page.locator('body').textContent();
  const m = t && t.match(/google-site-verification[^A-Za-z0-9]+([A-Za-z0-9_\-]{30,})/);
  return m ? m[1] : null;
};
token = await captureFromBody();
if (!token) {
  log("Expanding HTML tag method…");
  for (const sel of [
    'text=/Other verification methods/i',
    'div:has-text("HTML tag")',
    'text=/^HTML tag$/i',
    'text=/HTML tag/i',
  ]) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 }).catch(() => false)) {
        await el.click();
        await page.waitForTimeout(2500);
        token = await captureFromBody();
        if (token) break;
      }
    } catch {}
  }
}
// Fallback: also try to read input[readonly] containing the meta tag
if (!token) {
  try {
    const ros = await page.locator('input[readonly], textarea').all();
    for (const r of ros) {
      const v = (await r.inputValue().catch(() => "")) || "";
      const m = v.match(/google-site-verification[^A-Za-z0-9]+([A-Za-z0-9_\-]{30,})/);
      if (m) { token = m[1]; break; }
    }
  } catch {}
}
log("Token:", token);
await shot("token");

const state = {
  site: SITE_PREFIX,
  capturedAt: new Date().toISOString(),
  token,
  finalUrl: page.url(),
};
fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
log("Saved →", STATE_FILE);
console.log(JSON.stringify(state, null, 2));
process.exit(0);
