#!/usr/bin/env node
/**
 * Publish inbound BabyLoveGrowth articles → live /blog pages on meethayat.com.
 *
 * Pipeline: the /api/inbound-article webhook stores each received article as a
 * secret GitHub Gist (description "inbound article: <slug>"). This script (run on
 * a schedule) drains those gists into real blog posts:
 *   1. list unpublished inbound gists (gist-scoped PAT)
 *   2. for each: build app/blog/<slug>/page.tsx + a real-photo hero + a
 *      data/blog-posts.json entry
 *   3. mark the gist "[published]" so it is never re-published
 *   4. commit + push to main → deploy.yml ships it
 *
 * No repo write happens from the webhook (its token is gist-scoped only), so the
 * repo→live step lives here where local git credentials can push.
 *
 * Token: read from ~/.config/agents/master.env (GITHUB_TOKEN, gist scope) or the
 * INBOUND_GIST_TOKEN env var. Brand guard: skips any article mentioning the banned
 * phrase (defense in depth — the webhook already blocks it at ingest).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { execSync, execFileSync } from "node:child_process";
import { homedir } from "node:os";

const REPO = resolve(new URL("..", import.meta.url).pathname); // repo root
const SITE = "https://www.meethayat.com";
const BANNED = /beyond[\s-]?elevation/i;

function log(...a) { console.log("[publish-inbound]", ...a); }

function readToken() {
  if (process.env.INBOUND_GIST_TOKEN) return process.env.INBOUND_GIST_TOKEN.trim();
  // master.env is NOT shell-sourceable — extract the one key by hand.
  const p = `${homedir()}/.config/agents/master.env`;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*(?:export\s+)?GITHUB_TOKEN\s*=\s*(.+)$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  throw new Error("no GITHUB_TOKEN in master.env or INBOUND_GIST_TOKEN env");
}

async function gh(token, path, method = "GET", body) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "meethayat-inbound-publisher",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`github ${method} ${path} → ${res.status} ${(await res.text()).slice(0, 160)}`);
  return res.status === 204 ? null : res.json();
}

function slugify(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 70);
}

// De-AI per meethayat house style: no em/en dashes used as punctuation.
function deDash(html) {
  return String(html || "").replace(/\s*[—–]\s*/g, ", ");
}

function firstParaText(html) {
  const m = String(html || "").match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const txt = (m ? m[1] : String(html || "")).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return txt.slice(0, 200);
}

function pageTsx({ slug, title, desc, date, bodyHtml }) {
  const J = (v) => JSON.stringify(v);
  const url = `${SITE}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`,
    headline: title, description: desc, url, inLanguage: "en",
    datePublished: date, dateModified: date,
    image: { "@type": "ImageObject", url: `${SITE}/${slug}.jpg`, width: 1600, height: 893 },
    author: { "@id": `${SITE}/#person` }, mainEntityOfPage: url,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  return `import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = ${J(slug)};
const URL = \`\${SITE}/blog/\${SLUG}\`;
const MOD = ${J(date)};
const TITLE = ${J(title)};
const DESC = ${J(desc)};
const HERO = \`\${SITE}/\${SLUG}.jpg\`;
const BODY = ${J(bodyHtml)};

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article", url: URL, title: TITLE, description: DESC,
    images: [{ url: HERO, width: 1600, height: 893, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [HERO] },
};

const articleJsonLd = ${J(articleJsonLd)};
const breadcrumbJsonLd = ${J(breadcrumbJsonLd)};

export default function Page() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: TITLE }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <span className="op-eyebrow">Blog · {MOD}</span>
      <h1>{TITLE}</h1>
      <figure style={{ margin: "1.5rem 0", maxWidth: "100%" }}>
        <img src={\`/\${SLUG}.jpg\`} alt={TITLE} width={1600} height={893}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }} loading="eager" />
      </figure>
      <div className="op-article" dangerouslySetInnerHTML={{ __html: BODY }} />
      <p className="op-byline">
        <em>By</em> <Link href="/author/hayat-amin">Hayat Amin</Link>. Last updated {MOD}.
      </p>
    </PageShell>
  );
}
`;
}

async function main() {
  const token = readToken();
  const gists = await gh(token, "/gists?per_page=100");
  const inbound = gists.filter(
    (g) => /^inbound article:/i.test(g.description || "") && !/\[published\]/i.test(g.description || ""),
  );
  log(`found ${inbound.length} unpublished inbound gist(s)`);
  if (!inbound.length) return;

  const postsPath = resolve(REPO, "data/blog-posts.json");
  const posts = JSON.parse(readFileSync(postsPath, "utf8"));
  const existing = new Set(posts.map((p) => p.slug));
  const written = [];

  for (const g of inbound) {
    try {
      const full = await gh(token, `/gists/${g.id}`);
      const file = Object.values(full.files)[0];
      const record = JSON.parse(file.content);
      const payload = record.payload || record;

      if (BANNED.test(JSON.stringify(record).replace(/hayat@beyondelevation\.com/gi, ""))) {
        log(`SKIP ${g.id} — banned brand mention`);
        continue;
      }

      const title = payload.title || record.title || "Untitled";
      // BabyLoveGrowth sends the article body as `content_html` and repeats the
      // title as a leading <h1>. The template already renders the title as the
      // page <h1>, so strip the first <h1> to avoid a duplicate heading.
      const rawHtml = payload.content_html || payload.contentHtml || payload.content || payload.html || payload.body || payload.body_html || "";
      const bodyHtml = deDash(rawHtml.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/i, "").trim());
      if (!bodyHtml || bodyHtml.replace(/<[^>]+>/g, "").trim().length < 40) {
        log(`SKIP ${g.id} — no usable content (keys: ${Object.keys(payload).join(",")})`);
        continue;
      }
      const desc = (payload.metaDescription || payload.description || payload.excerpt || payload.summary || firstParaText(bodyHtml)).slice(0, 300);
      const when = new Date(payload.createdAt || payload.publishedAt || payload.date || record.received_at || Date.now());
      const date = when.toISOString().slice(0, 10);
      // Use BabyLoveGrowth's exact slug. The published URL must match the slug
      // BLG expects in the sitemap or it never credits the article as published.
      const slug = slugify(record.slug || payload.slug || title);
      if (existing.has(slug) || existsSync(resolve(REPO, "app/blog", slug))) {
        log(`SKIP ${g.id} — slug already published: ${slug}`);
        await gh(token, `/gists/${g.id}`, "PATCH", { description: `${g.description} [published]` });
        continue;
      }

      // hero: real photo per HERO_PHOTO_POLICY (no AI faces)
      try {
        execFileSync("node", ["scripts/select-hero-photo.mjs", slug, title], { cwd: REPO, stdio: "inherit" });
      } catch (e) {
        log(`hero selector failed for ${slug}, copying default`, e.message);
        // fall back to an existing hero so the build never breaks on a missing image
        const fallback = posts.find((p) => p.hero)?.hero?.replace(/^\//, "");
        if (fallback && existsSync(resolve(REPO, "public", fallback))) {
          writeFileSync(resolve(REPO, "public", `${slug}.jpg`), readFileSync(resolve(REPO, "public", fallback)));
        }
      }

      const dir = resolve(REPO, "app/blog", slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, "page.tsx"), pageTsx({ slug, title, desc, date, bodyHtml }));
      posts.push({ slug, title, description: desc, date, hero: `/${slug}.jpg` });
      existing.add(slug);
      written.push({ slug, gistId: g.id, description: g.description });
      log(`BUILT ${slug}`);
    } catch (e) {
      log(`ERROR on gist ${g.id}: ${e.message}`);
    }
  }

  if (!written.length) { log("nothing new to publish"); return; }

  writeFileSync(postsPath, JSON.stringify(posts, null, 2) + "\n");

  if (process.env.DRY_RUN) {
    log(`DRY_RUN — generated ${written.length} page(s) locally, skipping git + gist mark`);
    written.forEach((w) => log(`  app/blog/${w.slug}/page.tsx`));
    return;
  }

  // commit + push → deploy.yml ships it
  execSync(`git -C ${JSON.stringify(REPO)} add app/blog data/blog-posts.json public`, { stdio: "inherit" });
  const msg = `feat(blog): publish ${written.length} inbound article(s)\n\n${written.map((w) => `- ${w.slug}`).join("\n")}\n\nCo-Authored-By: claude-flow <ruv@ruv.net>`;
  execSync(`git -C ${JSON.stringify(REPO)} commit -m ${JSON.stringify(msg)}`, { stdio: "inherit" });
  try { execSync(`git -C ${JSON.stringify(REPO)} pull --rebase --autostash origin main`, { stdio: "inherit" }); } catch {}
  execSync(`git -C ${JSON.stringify(REPO)} push origin main`, { stdio: "inherit" });

  // Mark gists published only after the push succeeds. The article has ALREADY
  // shipped at this point, so a gist-PATCH failure (e.g. a GitHub rate-limit)
  // must NEVER fail the run. Retry 3x with backoff, then warn and move on.
  for (const w of written) {
    let marked = false;
    for (let attempt = 1; attempt <= 3 && !marked; attempt++) {
      try {
        await gh(token, `/gists/${w.gistId}`, "PATCH", { description: `${w.description} [published]` });
        marked = true;
      } catch (e) {
        log(`WARN mark gist ${w.gistId} attempt ${attempt}/3 failed: ${e.message}`);
        if (attempt < 3) await new Promise((r) => setTimeout(r, attempt * 3000 + Math.floor(Math.random() * 2000)));
      }
    }
    if (!marked) log(`WARN could not mark gist ${w.gistId} published after 3 tries; article already live, will retry next run`);
  }
  log(`DONE — published ${written.length}, pushed to main (deploy.yml will ship)`);
}

main().catch((e) => { console.error("[publish-inbound] FATAL", e); process.exit(1); });
