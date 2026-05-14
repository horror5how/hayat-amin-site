#!/usr/bin/env node
/**
 * Real-photo hero selector for meethayat.com blog pipeline.
 *
 * HARD RULE: No AI-generated faces of Hayat. Real photos only.
 * See HERO_PHOTO_POLICY.md.
 *
 * Usage:
 *   node scripts/select-hero-photo.mjs <slug> "<post title>"
 *
 * Writes the chosen real-photo JPG to public/<slug>.jpg (1600x893) by
 * fetching the manifest at:
 *   https://raw.githubusercontent.com/horror5how/hayat-soul-refs/main/meethayat-blog/manifest.json
 *
 * Picks the photo whose topic_keywords have the most overlap with the
 * slug + title (case-insensitive substring match). Falls back to manifest.default.
 *
 * Runs cloud-native — only deps are `fetch` (built into Node 18+) and `fs`.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const MANIFEST_URL =
  "https://raw.githubusercontent.com/horror5how/hayat-soul-refs/main/meethayat-blog/manifest.json";

const [, , slugArg, titleArg] = process.argv;
if (!slugArg) {
  console.error("Usage: node scripts/select-hero-photo.mjs <slug> \"<post title>\"");
  process.exit(1);
}

const haystack = `${slugArg} ${titleArg || ""}`.toLowerCase();

async function pickAndWrite() {
  const manifestRes = await fetch(MANIFEST_URL, { cache: "no-store" });
  if (!manifestRes.ok) throw new Error(`manifest fetch failed: ${manifestRes.status}`);
  const manifest = await manifestRes.json();

  let bestUrl = manifest.default;
  let bestScore = -1;
  let bestId = "default";

  for (const photo of manifest.photos || []) {
    const score = (photo.topic_keywords || []).reduce(
      (n, kw) => (haystack.includes(kw.toLowerCase()) ? n + 1 : n),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestUrl = photo.url;
      bestId = photo.id;
    }
  }

  console.log(`[hero] slug="${slugArg}" → picked=${bestId} score=${bestScore}`);
  console.log(`[hero] url=${bestUrl}`);

  const imgRes = await fetch(bestUrl, { cache: "no-store" });
  if (!imgRes.ok) throw new Error(`image fetch failed: ${imgRes.status} ${bestUrl}`);
  const buf = Buffer.from(await imgRes.arrayBuffer());

  const outPath = resolve(`public/${slugArg}.jpg`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buf);
  console.log(`[hero] wrote ${outPath} (${buf.length} bytes)`);
}

pickAndWrite().catch((err) => {
  console.error("[hero] FAILED:", err);
  process.exit(2);
});
