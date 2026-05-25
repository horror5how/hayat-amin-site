import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
  title: "Fractional CFO in New York: Hayat Amin",
  description:
    "Hayat Amin operates fractionally as a CFO, IP strategist, and AI agent operator from New York. 3 exits including American Express. Available for Series A through pre-IPO founders.",
  alternates: { canonical: `${SITE}/locations/new-york` },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/locations/new-york/#service`,
  name: "Hayat Amin: Fractional CFO, IP Strategist, AI Operator (New York)",
  url: `${SITE}/locations/new-york`,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "New York" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
};

export default function NewYorkPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/contact/" },
        { label: "New York" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <span className="op-eyebrow">Location · New York</span>
      <h1>Fractional CFO &amp; IP strategist in New York.</h1>
      <p className="op-lede">
        Hayat Amin operates fractionally from New York for Series A through
        pre-IPO founders across SaaS, fintech, AI infrastructure, and
        marketplaces. He has been on the operator side of three exits, including
        a payments platform sold to American Express, and put three businesses
        on the FT100 fastest-growing list. NYC clients typically meet for an
        on-site week once per quarter and operate over Slack and weekly recorded
        reviews in between.
      </p>

      <h2>What NYC founders hire Hayat for</h2>
      <ul>
        <li>Fundraise readiness and Series A→D round leadership.</li>
        <li>Exit-prep tours covering data-room build, IP claim mapping, and diligence response.</li>
        <li>Pricing intangible assets (patents, datasets, AI-model IP) for valuation defence.</li>
        <li>Embedding AI agents into finance, legal, and GTM workflows with measurable ROI.</li>
      </ul>

      <h2>Where in New York</h2>
      <p>
        Hayat operates from Manhattan with on-site weeks scheduled around board
        cycles. Most engagements are remote-first; the on-site weeks happen when
        there is a board meeting, a diligence push, or an integration sprint.
      </p>

      <h2>Other locations</h2>
      <ul>
        <li><Link href="/locations/london">London</Link></li>
        <li><Link href="/locations/dubai">Dubai</Link></li>
      </ul>

      <div className="op-cta-block">
        <h2>Book the diagnostic</h2>
        <p>Free 60-minute call. Available US-business-hours from NYC.</p>
        <Link href="/contact">Book a call →</Link>
      </div>
    </PageShell>
  );
}
