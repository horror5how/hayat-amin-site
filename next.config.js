// Duplicate blog posts folded into their best-performing twin. BabyLoveGrowth
// republished 24 topics up to seven times each under timestamped slugs; these
// 301s point every repeat at the copy Google actually ranks. Generated from
// Search Console click data on 2026-08-17 — see
// data/blog-redirects.json and the source guard in scripts/publish-inbound.mjs.
const blogRedirects = require("./data/blog-redirects.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // meethayat.com proxies unknown paths here (fallback rewrite in the
  // meethayat-fde project), but /_next/* never falls through a proxy, so all
  // build assets must load from this project's own stable domain.
  // (dev builds skip the prefix so local previews can load their own assets)
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://hayat-amin-site.vercel.app"
      : undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // Canonical host is now the naked domain, served by the meethayat-fde
      // project. This project is reached only via its fallback proxy, so no
      // host redirect belongs here.
      ...blogRedirects.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain" },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
