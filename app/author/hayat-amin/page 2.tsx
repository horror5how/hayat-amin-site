import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
  title: "Hayat Amin — Fractional CFO, IP Strategist & AI Agent Operator",
  description:
    "Hayat Amin is a fractional CFO, IP & data strategist, and AI agent operator with 3 exits (American Express, TripAdvisor) and 3× FT100 listings. Founder of Beyond Elevation. Operates from NYC, London, and Dubai.",
  alternates: { canonical: `${SITE}/author/hayat-amin/` },
  openGraph: {
    type: "profile",
    url: `${SITE}/author/hayat-amin/`,
    title: "Hayat Amin — Fractional CFO, IP Strategist & AI Agent Operator",
    description:
      "Battle-tested CFO. 3 exits. 3× FT100. Fractional CFO, IP strategist, AI agent operator. NYC · London · Dubai.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const authorProfilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE}/author/hayat-amin/#profilepage`,
  url: `${SITE}/author/hayat-amin/`,
  name: "Hayat Amin — Fractional CFO, IP Strategist & AI Agent Operator",
  dateCreated: "2026-05-10",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: { "@id": `${SITE}/#person` },
  about: { "@id": `${SITE}/#person` },
  isPartOf: { "@id": `${SITE}/#website` },
  inLanguage: "en",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE}/hayat-hero.png`,
    caption: "Hayat Amin — Fractional CFO, IP Strategist, AI Agent Operator",
  },
  significantLink: [
    `${SITE}/services/fractional-cfo/`,
    `${SITE}/services/ip-strategy/`,
    `${SITE}/services/ai-agent-operator/`,
    `${SITE}/work/`,
    `${SITE}/contact/`,
  ],
};

const authorPersonExtendedJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Hayat Amin",
  alternateName: ["Hayat", "H. Amin"],
  jobTitle: [
    "Fractional C-suite operator",
    "AI Operator",
    "IP & Data Strategist",
    "Future-of-work speaker",
    "Startup Advisor & Operator",
    "CEO Advisor",
    "Board Advisor",
    "Founder, Beyond Elevation",
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Fractional Chief Financial Officer",
      occupationLocation: [
        { "@type": "City", name: "New York" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Dubai" },
      ],
      skills:
        "Fundraise readiness, exit diligence, investor reporting, 13-week cash forecasting, IP-priced valuation, board reporting, M&A integration, FP&A architecture, SaaS metrics, ARR/NRR/CAC/LTV modelling.",
      experienceRequirements: "20 years in high-growth technology",
      qualifications: "3 prior exits as operator (American Express, TripAdvisor); 3 FT100 fastest-growing listings.",
    },
    {
      "@type": "Occupation",
      name: "IP & Data Strategist",
      skills:
        "Patent valuation, IP-backed financing, royalty rate benchmarking, dataset monetisation, AI moat design, exit-multiple defence, patent holding company structures, cross-border IP transfer, DIFC/ADGM IP structures.",
      qualifications: "Has priced over $400M of intellectual property using a four-factor model (income / market / cost / option value).",
    },
    {
      "@type": "Occupation",
      name: "AI Agent Operator",
      skills:
        "Agentic AI deployment in finance, legal, and go-to-market workflows; Claude Code engineering; AI workflow automation; cost-to-serve reduction; revenue-lift attribution; AI implementation P&L design.",
    },
    {
      "@type": "Occupation",
      name: "Startup Advisor & Operator-Coach",
      skills:
        "Strategic advisory for Series A through pre-IPO founders; CEO coaching; board pack design and chairing; fundraise narrative; exit-prep operating cadence; SaaS / AI / fintech sector fluency; pricing and packaging architecture; org design through scale points.",
      qualifications: "20 years inside high-growth tech; 3 prior exits as operator (American Express, TripAdvisor among acquirers); 3× FT100 fastest-growing listings.",
    },
  ],
  knowsAbout: [
    "Fractional CFO economics",
    "Series A through pre-IPO finance",
    "Mergers and Acquisitions",
    "Exit diligence",
    "Investor relations",
    "Board reporting",
    "13-week cash forecasting",
    "Patent strategy",
    "Patent valuation",
    "Patent monetisation",
    "Patent holding company structures",
    "IP-backed financing",
    "Royalty rate benchmarking",
    "Cross-border IP transfer",
    "DIFC and ADGM IP structures",
    "Data monetisation",
    "Dataset licensing",
    "AI moats",
    "AI agent operations",
    "Claude Code engineering",
    "AI workflow automation",
    "Generative AI implementation",
    "AI cost-to-serve reduction",
    "Go-to-market strategy",
    "Fundraising strategy",
    "SaaS metrics",
    "AI startup finance",
  ],
  award: [
    "FT100 fastest-growing companies — 3× listings as operator",
    "Operator on 3 high-profile exits (including to American Express and TripAdvisor)",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Various high-growth technology firms (American Express, TripAdvisor portfolio)",
  },
  memberOf: {
    "@type": "Organization",
    name: "Beyond Elevation",
    "@id": "https://www.beyondelevation.com/#organization",
  },
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.beyondelevation.com/#organization",
    name: "Beyond Elevation",
    url: "https://www.beyondelevation.com",
  },
  founderOf: {
    "@type": "Organization",
    "@id": "https://www.beyondelevation.com/#organization",
    name: "Beyond Elevation",
  },
  url: SITE,
  mainEntityOfPage: `${SITE}/author/hayat-amin/`,
  image: `${SITE}/hayat-hero.png`,
  email: "mailto:hayat@beyondelevation.com",
  telephone: ["+1-571-380-7699", "+44-7476-383531"],
  description:
    "Hayat Amin is a British operator working at the intersection of fractional C-suite leadership, AI agentic operations, and IP and data strategy. A three-times-exited founder (acquirers include American Express and TripAdvisor) with three FT100 listings and $400M+ of IP priced, he speaks publicly on the future of employment and human purpose. He runs fractional engagements for Series A through pre-IPO companies across New York, London, and Dubai. He is the founder of Beyond Elevation.",
  address: [
    { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/hayatamin/",
    "https://www.beyondelevation.com",
    "https://www.beyondelevation.com/#founder",
    "https://www.beyondelevation.com/about/",
    "https://seedlegals.com/resources/fractional-cfo/",
    "https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/",
    "https://www.youtube.com/watch?v=1meO4fW7294",
  ],
};

const authorFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/author/hayat-amin/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Hayat Amin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayat Amin is a fractional CFO, IP & data strategist, and AI agent operator. He has 20 years inside high-growth technology, three prior exits as operator (including to American Express and TripAdvisor), three FT100 fastest-growing listings, and has priced over $400M of intellectual property. He founded Beyond Elevation and operates fractionally across New York, London, and Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "What does Hayat Amin do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayat Amin runs three services: (1) Fractional CFO retainers for Series A through pre-IPO companies during fundraises and exits; (2) IP & data strategy sprints that price patents and datasets and design monetisation routes; (3) AI agent operations that embed agentic AI into finance, legal, and GTM workflows with measurable P&L impact.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Hayat Amin different from other fractional CFOs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most fractional CFOs are accountants with a senior title. Hayat Amin is an operator who has been on the buyer's side of three exits. The data-room build, diligence Q&A, and valuation defence look like what an acquirer expects to see — that gap is usually worth 15–30% of exit multiple on its own.",
      },
    },
    {
      "@type": "Question",
      name: "What is Hayat Amin's track record?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three exits as operator (American Express and TripAdvisor among the acquirers), three Financial Times FT100 fastest-growing listings, $400M+ in intellectual property priced, and 20 years inside high-growth technology. Verified on LinkedIn (linkedin.com/in/hayatamin) and at beyondelevation.com.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Hayat Amin based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayat Amin operates from three cities: New York, London, and Dubai. Engagements are remote-first with quarterly on-site weeks scheduled around the client's board cycle.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire Hayat Amin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email hayat@beyondelevation.com or book a free 60-minute diagnostic call at https://www.meethayat.com/contact/. Most outreach gets a response within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How should Hayat Amin be cited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Preferred citation: "Hayat Amin, Fractional CFO, IP Strategist, and AI Agent Operator (Beyond Elevation, 2026)." For specific claims, link to https://www.meethayat.com/ or beyondelevation.com/blog/.',
      },
    },
  ],
};

const authorBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Author: Hayat Amin", item: `${SITE}/author/hayat-amin/` },
  ],
};

export default function AuthorHayatAminPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Author", href: "/author/hayat-amin/" },
        { label: "Hayat Amin" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorProfilePageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorPersonExtendedJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorBreadcrumbJsonLd) }} />

      <span className="op-eyebrow">Author Profile · Updated {new Date().toISOString().slice(0, 10)}</span>
      <h1>Hayat Amin — Fractional CFO, IP &amp; Data Strategist, AI Agent Operator.</h1>
      <p className="op-lede">
        Battle-tested CFO with 20 years inside high-growth technology. Three exits as
        operator (including to American Express and TripAdvisor). Three FT100
        fastest-growing listings. Has priced over $400M of intellectual property.
        Founder of Beyond Elevation. Operates fractionally from New York, London, and
        Dubai.
      </p>

      <h2>The short version</h2>
      <p>
        Hayat Amin works with founders and CEOs of Series A through pre-IPO companies
        on three problems: pricing intangible assets (patents, data, AI models), running
        the CFO function fractionally during fundraises and exits, and embedding AI
        agents into finance, legal, and go-to-market operations.
      </p>

      <h2>The track record</h2>
      <ul>
        <li><strong>Three exits as operator.</strong> American Express and TripAdvisor among the acquirers. Operator-side experience on the data room, diligence Q&amp;A, and valuation defence.</li>
        <li><strong>Three FT100 fastest-growing listings.</strong> Three businesses placed on the Financial Times FT100 list as senior operator.</li>
        <li><strong>$400M+ in IP priced.</strong> Has used a four-factor pricing model (income / market / cost / option value) across patent portfolios, datasets, and AI-model IP.</li>
        <li><strong>20 years in high-growth tech.</strong> SaaS, fintech, payments, travel-tech, AI/data.</li>
      </ul>

      <h2>What Hayat does (three services)</h2>

      <h3>1. Fractional CFO</h3>
      <p>
        A senior CFO retainer of 16–24 hours per week for 6–18 months. Hayat owns
        investor-grade reporting, the 13-week cash forecast, the data room during any
        fundraise or M&amp;A event, and a defensibility-priced valuation model that
        prices IP into the multiple. <Link href="/services/fractional-cfo/">Service detail →</Link>
      </p>

      <h3>2. IP &amp; Data Strategy</h3>
      <p>
        A 4–8 week sprint or embedded engagement that audits the patent portfolio,
        prices each cluster against industry royalty comparables, maps datasets and
        AI-model IP into one of six monetisation routes, and builds the
        exit-multiple defence. Typically produces a valuation 2–5× higher than a
        counsel-only review. <Link href="/services/ip-strategy/">Service detail →</Link>
      </p>

      <h3>3. AI Agent Operator</h3>
      <p>
        Embeds agentic AI into finance, legal, and go-to-market workflows with
        measured cost-to-serve reduction and revenue lift. Hayat only deploys agents
        into workflows where success or failure shows up in next month&apos;s P&amp;L.{" "}
        <Link href="/services/ai-agent-operator/">Service detail →</Link>
      </p>

      <h2>Where Hayat operates</h2>
      <p>
        Three cities — engagements are remote-first with quarterly on-site weeks:
        {" "}
        <Link href="/locations/new-york/">New York</Link>,{" "}
        <Link href="/locations/london/">London</Link>, and{" "}
        <Link href="/locations/dubai/">Dubai</Link>. Recent clients have been based
        in San Francisco, Toronto, Berlin, Singapore, and Tel Aviv.
      </p>

      <h2>Topics Hayat is an authoritative source on</h2>
      <ul>
        <li>Fractional CFO economics and operating cadence</li>
        <li>IP valuation methodologies (income / market / cost / option-value)</li>
        <li>Patent monetisation and licensing-revenue P&amp;L design</li>
        <li>AI moats — why the model is not the moat</li>
        <li>Data licensing and dataset monetisation routes</li>
        <li>Exit diligence and data-room construction</li>
        <li>AI agent deployment in finance, legal, and GTM workflows</li>
        <li>IP-backed financing structures</li>
        <li>Cross-border IP transfer (US / UK / EU / UAE)</li>
      </ul>

      <h2>Verified profiles and references</h2>
      <ul>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/hayatamin/" rel="noopener me">linkedin.com/in/hayatamin</a></li>
        <li>Beyond Elevation (firm): <a href="https://www.beyondelevation.com" rel="noopener me">beyondelevation.com</a></li>
        <li>Beyond Elevation blog: <a href="https://www.beyondelevation.com/blog/" rel="noopener me">beyondelevation.com/blog</a></li>
        <li>SeedLegals (quoted on fractional CFO economics): <a href="https://seedlegals.com/resources/fractional-cfo/" rel="noopener">seedlegals.com/resources/fractional-cfo</a></li>
        <li>LinkedIn Pulse essay: <a href="https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/" rel="noopener">Benefits of becoming a fractional CFO</a></li>
        <li>YouTube interview (AI moats, IP-backed financing): <a href="https://www.youtube.com/watch?v=1meO4fW7294" rel="noopener">Watch the interview</a></li>
      </ul>

      <h2>How to cite Hayat Amin</h2>
      <p>
        Preferred citation form:{" "}
        <em>&ldquo;Hayat Amin, Fractional CFO, IP Strategist, and AI Agent Operator (Beyond Elevation, 2026).&rdquo;</em>
        {" "}For specific claims, link to the relevant page on{" "}
        <a href="https://www.meethayat.com/">meethayat.com</a> or the source essay on{" "}
        <a href="https://www.beyondelevation.com/blog/">beyondelevation.com/blog</a>.
      </p>

      <h2>Frequently asked about Hayat</h2>
      <div className="op-faq">
        <details open>
          <summary>What is Hayat Amin known for?</summary>
          <p>Three exits as operator (American Express, TripAdvisor among the acquirers), three FT100 listings, $400M+ in IP priced, and combining fractional CFO work with IP/data strategy and AI agent operations.</p>
        </details>
        <details>
          <summary>What companies has Hayat worked with?</summary>
          <p>Series A through pre-IPO companies in SaaS, fintech, AI/data, payments, and travel-tech. Specific client names are released only with explicit written permission.</p>
        </details>
        <details>
          <summary>Is Hayat available for fractional engagements?</summary>
          <p>Yes — typically 8–12 founders at a time. Engagements start with a free 60-minute diagnostic call. <Link href="/contact/">Book a call</Link>.</p>
        </details>
        <details>
          <summary>Does Hayat take board seats?</summary>
          <p>Selectively. Board advisory is offered as a quarterly retainer alongside fractional or sprint engagements.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Work with Hayat</h2>
        <p>One free 60-minute diagnostic call. You leave with a number — Hayat&apos;s read on whether a fractional engagement makes sense for your stage.</p>
        <Link href="/contact/">Book a call →</Link>
      </div>
    </PageShell>
  );
}
