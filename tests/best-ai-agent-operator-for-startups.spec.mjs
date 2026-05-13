import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";

const URL = "https://www.meethayat.com/best-ai-agent-operator-for-startups/";
const OUT = "/Users/hayatamin/Documents/hayat-amin-site/tests/screenshots";

const errors = [];
const consoleErrors = [];
const networkErrors = [];

async function shoot(label, ctx) {
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(`${label}: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(`${label}: ${m.text()}`); });
  page.on("response", (r) => { if (r.status() >= 400) networkErrors.push(`${label}: ${r.status()} ${r.url()}`); });
  const resp = await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
  if (!resp || resp.status() >= 400) throw new Error(`${label}: HTTP ${resp ? resp.status() : "no response"}`);
  await page.waitForSelector("h1");
  const h1 = await page.textContent("h1");
  if (!/Best AI Agent Operator for Startups/i.test(h1)) throw new Error(`${label}: H1 mismatch — got "${h1}"`);
  await page.screenshot({ path: `${OUT}/best-ai-agent-operator-for-startups-${label}.png`, fullPage: true });
  await page.close();
  return h1;
}

(async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const mobile = await browser.newContext({ ...devices["iPhone 13"] });
  const h1d = await shoot("desktop", desktop);
  const h1m = await shoot("mobile", mobile);
  await browser.close();
  console.log(JSON.stringify({
    ok: true,
    url: URL,
    h1_desktop: h1d,
    h1_mobile: h1m,
    pageerrors: errors,
    console_errors: consoleErrors,
    network_errors: networkErrors,
    screenshots: [`${OUT}/best-ai-agent-operator-for-startups-desktop.png`, `${OUT}/best-ai-agent-operator-for-startups-mobile.png`],
  }, null, 2));
  if (errors.length || networkErrors.length) process.exit(1);
})();
