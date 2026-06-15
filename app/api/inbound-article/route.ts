import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "inbound-article", method: "POST" });
}

export async function POST(req: NextRequest) {
  const expected = process.env.INBOUND_ARTICLE_TOKEN;
  if (!expected) {
    return NextResponse.json({ ok: false, error: "server-not-configured" }, { status: 500 });
  }

  // Accept the token three ways so any webhook UI can connect:
  // Authorization: Bearer <t>, ?token=<t> query param, or x-inbound-token / x-webhook-secret header.
  const auth = req.headers.get("authorization") || "";
  const headerToken = auth.replace(/^Bearer\s+/i, "").trim();
  const queryToken = (new URL(req.url).searchParams.get("token") || "").trim();
  const altToken = (req.headers.get("x-inbound-token") || req.headers.get("x-webhook-secret") || "").trim();
  const token = headerToken || queryToken || altToken;
  if (token !== expected) return unauthorized();

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  // Brand guard: meethayat.com never mentions "Beyond Elevation" (per Hayat 2026-05-14).
  // hayat@beyondelevation.com email is allowed because it's a functional contact.
  const banned = /beyond[\s\-]?elevation/i;
  const haystack = JSON.stringify(payload).replace(/hayat@beyondelevation\.com/gi, "");
  if (banned.test(haystack)) {
    return NextResponse.json(
      { ok: false, error: "blocked-brand-mention", message: "Payload contains banned phrase 'Beyond Elevation'. meethayat.com is personal brand only." },
      { status: 422 },
    );
  }

  const title: string = payload?.title || payload?.heading || "untitled";
  const rawSlug: string = payload?.slug || payload?.url || title;
  const slug = slugify(rawSlug) || `article-${Date.now()}`;
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const key = `inbound-articles/${ts}__${slug}.json`;

  const record = {
    received_at: new Date().toISOString(),
    source: req.headers.get("x-source") || "webhook",
    title,
    slug,
    payload,
  };

  // Durable storage: save the article as a secret GitHub Gist. (Vercel Blob was
  // suspended for writes; the available token has `gist` scope.) Gist writes don't
  // push to the repo, so no deploy is triggered.
  // ponytail: one gist per article — fine at BLG's low volume; move to a DB if it ever bursts.
  let stored = false;
  let storedUrl: string | null = null;
  let storeError: string | null = null;
  const ghToken = process.env.INBOUND_GITHUB_TOKEN;
  if (!ghToken) {
    storeError = "no-INBOUND_GITHUB_TOKEN";
  } else {
    try {
      const res = await fetch("https://api.github.com/gists", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ghToken}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "meethayat-inbound-webhook",
        },
        body: JSON.stringify({
          description: `inbound article: ${slug} (${record.received_at})`,
          public: false,
          files: { [`${ts}__${slug}.json`]: { content: JSON.stringify(record, null, 2) } },
        }),
      });
      if (res.ok) {
        const j: any = await res.json();
        stored = true;
        storedUrl = j?.html_url ?? null;
      } else {
        storeError = `gist ${res.status}: ${(await res.text()).slice(0, 150)}`;
      }
    } catch (e: any) {
      storeError = e?.message ? String(e.message).slice(0, 200) : "store-failed";
    }
  }

  return NextResponse.json({ ok: true, slug, key, stored, url: storedUrl, store_error: storeError });
}
