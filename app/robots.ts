import type { MetadataRoute } from "next";

const SITE = "https://meethayat.com";

export default function robots(): MetadataRoute.Robots {
  return {
    // /call/* are booking-link click trackers that 302 to Motion. Googlebot was
    // following the redirect, finding Motion's noindex, and filing /call/web
    // under "Excluded by 'noindex' tag" in Search Console. They are not content
    // and were never meant to be crawled, so keep crawlers out entirely.
    rules: [
      { userAgent: "*", allow: "/", disallow: "/call/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/image-sitemap.xml`],
    host: SITE,
  };
}
