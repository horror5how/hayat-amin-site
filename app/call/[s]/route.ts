import { NextRequest, NextResponse } from "next/server";

// Booking link source tracker. Logs the click to PostHog, then 302s to Motion.
// One handler serves every channel: /call/li, /call/web, /call/me.
// PostHog project key is public (write-only capture) — shared with beyondelevation so all bookings land in one dashboard.

export const dynamic = "force-dynamic";

const MOTION_URL = "https://usemotion.com/meet/hayat-amin/be";
const POSTHOG_KEY = "phc_CDKFjeVGfuEEid74UGx5CNwNFaqaijF8b6e9A6QhLruM";
const POSTHOG_CAPTURE = "https://us.i.posthog.com/capture/";
const SOURCES: Record<string, string> = { li: "LinkedIn", web: "Website", me: "Personal (Gmail)" };

export async function GET(req: NextRequest, { params }: { params: { s: string } }) {
  const code = (params.s || "unknown").toLowerCase().slice(0, 40);
  const source = SOURCES[code] || code;
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "anon";

  try {
    await fetch(POSTHOG_CAPTURE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: POSTHOG_KEY,
        event: "booking_link_click",
        distinct_id: ip,
        properties: {
          site: "meethayat",
          booking_source: source,
          source_code: code,
          referrer: req.headers.get("referer") || "",
          user_agent: req.headers.get("user-agent") || "",
        },
      }),
    });
  } catch (_) { /* tracking must never break the booking */ }

  return NextResponse.redirect(`${MOTION_URL}?ref=mh-${encodeURIComponent(code)}`, 302);
}
