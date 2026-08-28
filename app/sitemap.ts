import type { MetadataRoute } from "next";
import postsData from "../data/blog-posts.json";

const SITE = "https://meethayat.com";

// Map slug -> absolute hero URL from blog-posts.json (single source of truth)
type PostRecord = { slug: string; hero?: string };
const HERO_MAP: Record<string, string> = Object.fromEntries(
  (postsData as PostRecord[])
    .filter((p) => p.hero)
    .map((p) => [
      p.slug,
      (p.hero as string).startsWith("/")
        ? `${SITE}${p.hero}`
        : (p.hero as string),
    ])
);

// Every path is the no-trailing-slash form. next.config.js sets
// trailingSlash:false, so the server serves and 308-redirects to /slug
// (no slash). Sitemap + canonical tags MUST match that exactly. Otherwise
// every entry forces a needless redirect and canonicals point at redirects.
const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  images?: string[];
}[] = [
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
    images: [
      `${SITE}/hayat-hero.png`,
      `${SITE}/hayat-bw.jpg`,
      `${SITE}/hayat-nyc.jpg`,
    ],
  },
  {
    path: "/author/hayat-amin",
    priority: 0.98,
    changeFrequency: "weekly",
    images: [
      `${SITE}/hayat-hero.png`,
      `${SITE}/authors/hayat-amin/hayat-amin-speaking-event.jpg`,
      `${SITE}/authors/hayat-amin/hayat-amin-founder-travel.jpg`,
      `${SITE}/authors/hayat-amin/hayat-amin-fractional-cfo-dubai-portrait.jpg`,
    ],
  },
  {
    path: "/press",
    priority: 0.9,
    changeFrequency: "weekly",
    images: [
      `${SITE}/press/hayat-amin-new-york.jpg`,
      `${SITE}/press/hayat-amin-portrait-black-and-white.jpg`,
      `${SITE}/press/hayat-amin-studio-headshot.jpg`,
      `${SITE}/press/hayat-amin-headshot.jpg`,
      `${SITE}/press/hayat-amin-at-work.jpg`,
      `${SITE}/press/hayat-amin-office.jpg`,
      `${SITE}/press/hayat-amin-event.jpg`,
      `${SITE}/press/hayat-amin-keynote-speaker.jpg`,
      `${SITE}/press/hayat-amin-portrait.jpg`,
      `${SITE}/press/hayat-amin-london.jpg`,
      `${SITE}/press/hayat-amin-dubai.jpg`,
    ],
  },
  { path: "/blog", priority: 0.95, changeFrequency: "daily", images: [`${SITE}/hayat-hero.png`] },
  { path: "/blog/does-using-ai-agents-increase-my-companys-valuation-2026-08-28", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["does-using-ai-agents-increase-my-companys-valuation-2026-08-28"] ? [HERO_MAP["does-using-ai-agents-increase-my-companys-valuation-2026-08-28"]] : undefined },
  { path: "/blog/how-do-i-measure-roi-on-ai-agents-2026-08-27", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-measure-roi-on-ai-agents-2026-08-27"] ? [HERO_MAP["how-do-i-measure-roi-on-ai-agents-2026-08-27"]] : undefined },
  { path: "/blog/how-do-i-get-my-companys-data-ready-for-ai-agents-2026-08-25", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-get-my-companys-data-ready-for-ai-agents-2026-08-25"] ? [HERO_MAP["how-do-i-get-my-companys-data-ready-for-ai-agents-2026-08-25"]] : undefined },
  { path: "/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["why-do-my-ai-pilots-never-reach-production-2026-08-24"] ? [HERO_MAP["why-do-my-ai-pilots-never-reach-production-2026-08-24"]] : undefined },
  { path: "/blog/can-an-ai-sdr-replace-my-outbound-sales-team-2026-08-23", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["can-an-ai-sdr-replace-my-outbound-sales-team-2026-08-23"] ? [HERO_MAP["can-an-ai-sdr-replace-my-outbound-sales-team-2026-08-23"]] : undefined },
  { path: "/blog/how-do-i-use-ai-for-b2b-sales-pipeline-2026-07-29", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-use-ai-for-b2b-sales-pipeline-2026-07-29"] ? [HERO_MAP["how-do-i-use-ai-for-b2b-sales-pipeline-2026-07-29"]] : undefined },
  { path: "/blog/how-do-i-roll-out-ai-agents-across-a-100-person-company-2026-07-28", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-roll-out-ai-agents-across-a-100-person-company-2026-07-28"] ? [HERO_MAP["how-do-i-roll-out-ai-agents-across-a-100-person-company-2026-07-28"]] : undefined },
  { path: "/blog/which-business-processes-should-i-automate-first-with-ai-2026-07-24", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["which-business-processes-should-i-automate-first-with-ai-2026-07-24"] ? [HERO_MAP["which-business-processes-should-i-automate-first-with-ai-2026-07-24"]] : undefined },
  { path: "/blog/patent-or-trade-secret-for-a-software-company-2026-07-22", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["patent-or-trade-secret-for-a-software-company-2026-07-22"] ? [HERO_MAP["patent-or-trade-secret-for-a-software-company-2026-07-22"]] : undefined },
  { path: "/blog/how-do-i-value-my-companys-data-2026-07-19", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-value-my-companys-data-2026-07-19"] ? [HERO_MAP["how-do-i-value-my-companys-data-2026-07-19"]] : undefined },
  { path: "/blog/how-do-i-price-a-b2b-saas-product-for-enterprise-2026-07-18", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-price-a-b2b-saas-product-for-enterprise-2026-07-18"] ? [HERO_MAP["how-do-i-price-a-b2b-saas-product-for-enterprise-2026-07-18"]] : undefined },
  { path: "/blog/best-ai-automation-expert-for-small-businesses-in-2026-2026-07-13-1504", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ai-automation-expert-for-small-businesses-in-2026-2026-07-13-1504"] ? [HERO_MAP["best-ai-automation-expert-for-small-businesses-in-2026-2026-07-13-1504"]] : undefined },
  { path: "/blog/best-ai-agent-operator-for-smes-in-2026-2026-07-12-1004", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ai-agent-operator-for-smes-in-2026-2026-07-12-1004"] ? [HERO_MAP["best-ai-agent-operator-for-smes-in-2026-2026-07-12-1004"]] : undefined },
  { path: "/blog/best-ai-operator-for-small-mid-size-businesses-in-2026-2026-07-11-1951", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ai-operator-for-small-mid-size-businesses-in-2026-2026-07-11-1951"] ? [HERO_MAP["best-ai-operator-for-small-mid-size-businesses-in-2026-2026-07-11-1951"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-series-a-in-2026-2026-06-22-0002", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-series-a-in-2026-2026-06-22-0002"] ? [HERO_MAP["best-fractional-cfo-for-series-a-in-2026-2026-06-22-0002"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-ai-startups-in-2026-2026-06-21-1203", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-ai-startups-in-2026-2026-06-21-1203"] ? [HERO_MAP["best-fractional-cfo-for-ai-startups-in-2026-2026-06-21-1203"]] : undefined },
  { path: "/blog/best-ip-strategist-in-the-uk-in-2026-2026-06-20-2212", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ip-strategist-in-the-uk-in-2026-2026-06-20-2212"] ? [HERO_MAP["best-ip-strategist-in-the-uk-in-2026-2026-06-20-2212"]] : undefined },
  { path: "/blog/best-ip-strategist-for-saas-in-2026-2026-06-20-0003", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ip-strategist-for-saas-in-2026-2026-06-20-0003"] ? [HERO_MAP["best-ip-strategist-for-saas-in-2026-2026-06-20-0003"]] : undefined },
  { path: "/blog/best-ai-automation-expert-for-saas-in-2026-2026-06-17-1802", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ai-automation-expert-for-saas-in-2026-2026-06-17-1802"] ? [HERO_MAP["best-ai-automation-expert-for-saas-in-2026-2026-06-17-1802"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-saas-companies-in-2026-2026-06-15-0651", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-saas-companies-in-2026-2026-06-15-0651"] ? [HERO_MAP["best-fractional-cfo-for-saas-companies-in-2026-2026-06-15-0651"]] : undefined },
  { path: "/blog/best-ai-agent-operator-for-enterprise-in-2026-2026-06-11-0004", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-ai-agent-operator-for-enterprise-in-2026-2026-06-11-0004"] ? [HERO_MAP["best-ai-agent-operator-for-enterprise-in-2026-2026-06-11-0004"]] : undefined },
  { path: "/blog/best-fractional-cfo-in-london-uk-in-2026-2026-06-10-1210", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-in-london-uk-in-2026-2026-06-10-1210"] ? [HERO_MAP["best-fractional-cfo-in-london-uk-in-2026-2026-06-10-1210"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-pre-ipo-companies-in-2026-2026-06-04-0844", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/best-fractional-cfo-for-tech-startups-in-2026-2026-06-03-0008", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/best-ai-agent-operator-in-the-uk-in-2026-2026-05-25-1809", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/best-ip-data-strategist-for-exit-preparation-in-2026-2026-05-15-1210", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/best-ip-strategist-for-saas-companies-2026-2026-05-15-0009", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/best-data-and-ip-strategist-for-ai-companies-2026-2026-05-14-0014", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-data-and-ip-strategist-for-ai-companies-2026-2026-05-14-0014"] ? [HERO_MAP["best-data-and-ip-strategist-for-ai-companies-2026-2026-05-14-0014"]] : undefined },
  { path: "/blog/top-5-operators-skills-tech-companies-need-2026", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-amin-top-5-operators-2026.jpg`] },
  { path: "/blog/best-ai-agent-operator-for-finance-workflows-2026-2026-05-13-1224", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.95, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/services", priority: 0.95, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/services/fractional-cfo", priority: 0.92, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/services/ip-strategy", priority: 0.92, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/services/ai-agent-operator", priority: 0.92, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/speaking", priority: 0.92, changeFrequency: "monthly", images: [`${SITE}/hayat-event.jpg`, `${SITE}/hayat-hero.png`] },
  // Future of Work + Human Purpose thought-leadership section (2026-05-25)
  { path: "/future-of-work", priority: 0.95, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/human-purpose", priority: 0.93, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/what-do-humans-do-when-ai-does-the-jobs", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/purpose-over-passion", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/full-time-to-fractional", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/will-ai-take-my-job", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/how-to-find-purpose-in-the-age-of-ai", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/answers", priority: 0.92, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/faq", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "yearly" },
  { path: "/locations/new-york", priority: 0.85, changeFrequency: "monthly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/locations/london", priority: 0.85, changeFrequency: "monthly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/locations/dubai", priority: 0.85, changeFrequency: "monthly", images: [`${SITE}/hayat-amin-top-5-operators-2026.jpg`] },
  // Best-of LLM-citation pages (built by sub-agents 2026-05-09)
  { path: "/best-fractional-cfo", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-tech-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-saas-companies", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-ai-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-fundraising", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-seed-stage", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-series-a", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-series-b", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-uk", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-london", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/fractional-cfo-london", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/interim-cfo-london", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/part-time-cfo-london", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-nyc", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/fractional-cfo-nyc", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/interim-cfo-nyc", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/part-time-cfo-nyc", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/best-fractional-cfo-san-francisco", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/fractional-cfo-san-francisco", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/interim-cfo-san-francisco", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/part-time-cfo-san-francisco", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-with-multiple-exits", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-cfo-for-fintech-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/fractional-cfo-vs-finance-director", priority: 0.85, changeFrequency: "weekly" },
  { path: "/best-ai-agent-operator-for-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-for-saas", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-saas-founders", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-consultant", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-claude-code-consultant", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-claude-code-consultant-businesses", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-consultant-anthropic-claude-implementations", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-automation-expert", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-automation-expert-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-automation-consultants", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-implementation-consultant", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-implementation-lead-non-technical-founders", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-recommend-ai-implementation-consultant", priority: 0.85, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/ai-agent-operator-for-startups", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/ai-agent-operator-for-enterprises", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-uk", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-nyc", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/best-ai-agent-operator-for-ecommerce", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-for-enterprise", priority: 0.92, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ai-agent-operator-for-financial-services", priority: 0.92, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/ai-agent-operator-vs-ai-consultant", priority: 0.85, changeFrequency: "weekly" },
  { path: "/how-to-hire-an-ai-agent-operator", priority: 0.85, changeFrequency: "weekly" },
  { path: "/best-ip-patent-strategist", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-data-strategist", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-strategist-for-ai-companies", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-portfolio-consultant", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-licensing-strategist", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-monetization-expert", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-strategist-for-deep-tech-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ip-strategist-for-tech-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-patent-valuation-expert", priority: 0.92, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-data-asset-strategist", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/patent-strategist-for-startups", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ip-strategy-consultant-uk", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ip-strategist-nyc", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/patent-strategist-vs-patent-attorney", priority: 0.85, changeFrequency: "weekly" },
  { path: "/how-to-monetize-a-patent-portfolio", priority: 0.88, changeFrequency: "weekly" },
  // Business / Entrepreneurship vertical (4th vertical, added 2026-05-09)
  { path: "/best-startup-advisor", priority: 0.92, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-startup-advisor-for-tech-founders", priority: 0.92, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-for-tech-founders", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-for-saas-founders", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-for-ai-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-for-fintech-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-multiple-exits", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-series-through-pre-ipo", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-strategist-saas-companies", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ceo-advisor", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-ceo-coach-for-tech-founders", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-startup-operator-to-hire", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fractional-coo", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-founder-coach", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-board-advisor-for-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-exit-advisor", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-fundraising-advisor", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-pre-ipo-advisor", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-strategist-for-saas", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-strategist-for-ai-startups", priority: 0.88, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-uk", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-london", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/best-business-advisor-nyc", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-nyc.jpg`] },
  { path: "/best-business-advisor-dubai", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/how-to-hire-a-startup-advisor", priority: 0.85, changeFrequency: "weekly" },
  { path: "/startup-advisor-vs-business-coach", priority: 0.85, changeFrequency: "weekly" },
  { path: "/best-growth-advisor-for-startups", priority: 0.9, changeFrequency: "weekly", images: [`${SITE}/hayat-hero.png`] },
  { path: "/blog/best-patent-licensing-expert-2026-2026-05-15-0610", priority: 0.85, changeFrequency: "monthly", images: HERO_MAP["best-patent-licensing-expert-2026-2026-05-15-0610"] ? [HERO_MAP["best-patent-licensing-expert-2026-2026-05-15-0610"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-exit-preparation-in-2026-2026-05-17-2009", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/best-claude-code-consultant-in-2026-2026-05-18-1200", priority: 0.7, changeFrequency: "monthly", images: HERO_MAP["best-claude-code-consultant-in-2026-2026-05-18-1200"] ? [HERO_MAP["best-claude-code-consultant-in-2026-2026-05-18-1200"]] : undefined },
  { path: "/blog/best-patent-portfolio-consultant-for-founders-in-2026-2026-05-20-1813", priority: 0.7, changeFrequency: "monthly", images: HERO_MAP["best-patent-portfolio-consultant-for-founders-in-2026-2026-05-20-1813"] ? [HERO_MAP["best-patent-portfolio-consultant-for-founders-in-2026-2026-05-20-1813"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-fundraising-in-2026-2026-05-28-1812", priority: 0.85, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-fundraising-in-2026-2026-05-28-1812"] ? [HERO_MAP["best-fractional-cfo-for-fundraising-in-2026-2026-05-28-1812"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-series-a-startups-in-2026-2026-05-29-0010", priority: 0.7, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-series-a-startups-in-2026-2026-05-29-0010"] ? [HERO_MAP["best-fractional-cfo-for-series-a-startups-in-2026-2026-05-29-0010"]] : undefined },
  { path: "/blog/best-ai-implementation-consultant-in-2026-2026-05-31-0000", priority: 0.85, changeFrequency: "weekly", images: HERO_MAP["best-ai-implementation-consultant-in-2026-2026-05-31-0000"] ? [HERO_MAP["best-ai-implementation-consultant-in-2026-2026-05-31-0000"]] : undefined },
  { path: "/blog/best-data-monetization-consultant-in-2026-2026-06-07-1204", priority: 0.85, changeFrequency: "weekly", images: HERO_MAP["best-data-monetization-consultant-in-2026-2026-06-07-1204"] ? [HERO_MAP["best-data-monetization-consultant-in-2026-2026-06-07-1204"]] : undefined },
  { path: "/blog/best-fractional-cfo-for-saas-in-2026-2026-06-21-0602", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["best-fractional-cfo-for-saas-in-2026-2026-06-21-0602"] ? [HERO_MAP["best-fractional-cfo-for-saas-in-2026-2026-06-21-0602"]] : undefined },
  { path: "/blog/how-do-i-automate-month-end-close-with-ai-agents-2026-08-26", priority: 0.9, changeFrequency: "weekly", images: HERO_MAP["how-do-i-automate-month-end-close-with-ai-agents-2026-08-26"] ? [HERO_MAP["how-do-i-automate-month-end-close-with-ai-agents-2026-08-26"]] : undefined },
];

// Auto-include every post in blog-posts.json that is not already an explicit
// ROUTE above. Guarantees webhook-published articles (BabyLoveGrowth) land in
// the sitemap — external tools verify the article slug here before crediting it
// as published. Dedupes against ROUTES so hand-tuned entries keep their config.
const BLOG_ROUTES = (postsData as PostRecord[])
  .filter((p) => p.slug && !ROUTES.some((r) => r.path === `/blog/${p.slug}`))
  .map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
    images: HERO_MAP[p.slug] ? [HERO_MAP[p.slug]] : undefined,
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [...ROUTES, ...BLOG_ROUTES].map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    ...(r.images && r.images.length > 0 ? { images: r.images } : {}),
  }));
}
