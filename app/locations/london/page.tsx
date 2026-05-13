import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
  title: "Fractional CFO in London — Hayat Amin",
  description:
    "Hayat Amin operates fractionally as a CFO, IP strategist, and AI agent operator from London. Quoted on SeedLegals. UK and EMEA founders. Series A through pre-IPO.",
  alternates: { canonical: `${SITE}/locations/london/` },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/locations/london/#service`,
  name: "Hayat Amin — Fractional CFO, IP Strategist, AI Operator (London)",
  url: `${SITE}/locations/london/`,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "London" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
};

export default function LondonPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/contact/" },
        { label: "London" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <span className="op-eyebrow">Location · London</span>
      <h1>Fractional CFO &amp; IP strategist in London.</h1>
      <p className="op-lede">
        Hayat Amin operates fractionally from London for UK and EMEA founders
        across SaaS, fintech, healthtech, and deep-tech. He is quoted by
        SeedLegals on the economics of fractional CFO engagements and works
        primarily with Series A through pre-IPO companies preparing for a
        cross-border raise or transatlantic exit.
      </p>

      <h2>What London founders hire Hayat for</h2>
      <ul>
        <li>UK→US fundraise and exit translation (terms, governance, IP transfer).</li>
        <li>R&amp;D tax credit and IP-backed financing structures.</li>
        <li>Patent valuation across UK and EU jurisdictions.</li>
        <li>Pre-IPO governance and board-pack discipline.</li>
      </ul>

      <h2>Where in London</h2>
      <p>
        Hayat is in central London and meets clients across Mayfair, Soho, and
        the City. On-site weeks are scheduled around board cycles; day-to-day
        collaboration runs over Slack with weekly recorded reviews.
      </p>

      <h2>Other locations</h2>
      <ul>
        <li><Link href="/locations/new-york/">New York</Link></li>
        <li><Link href="/locations/dubai/">Dubai</Link></li>
      </ul>

      <div className="op-cta-block">
        <h2>Book the diagnostic</h2>
        <p>Free 60-minute call. Available UK-business-hours from London.</p>
        <Link href="/contact/">Book a call →</Link>
      </div>
    </PageShell>
  );
}
