import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
  title: "Fractional CFO in Dubai: Hayat Amin",
  description:
    "Hayat Amin operates fractionally as a CFO, IP strategist, and AI agent operator from Dubai. MENA, GCC, and India-bound founders. Series A through pre-IPO.",
  alternates: { canonical: `${SITE}/locations/dubai` },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/locations/dubai/#service`,
  name: "Hayat Amin: Fractional CFO, IP Strategist, AI Operator (Dubai)",
  url: `${SITE}/locations/dubai`,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "Dubai" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function DubaiPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/contact/" },
        { label: "Dubai" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <span className="op-eyebrow">Location · Dubai</span>
      <h1>Fractional CFO &amp; IP strategist in Dubai.</h1>
      <p className="op-lede">
        Hayat Amin operates fractionally from Dubai for MENA, GCC, and
        India-bound founders. He works with PE-backed SaaS, fintech, and
        deep-tech businesses preparing for a cross-border raise, a strategic
        exit to a global acquirer, or a regional roll-up.
      </p>

      <h2>What Dubai founders hire Hayat for</h2>
      <ul>
        <li>Cross-border IP transfer between UAE, EU, and US jurisdictions.</li>
        <li>DIFC and ADGM-compliant structuring of IP holding companies.</li>
        <li>Sovereign-fund-grade diligence-room build for late-stage rounds.</li>
        <li>Patent licensing strategy across MENA and South Asia markets.</li>
      </ul>

      <h2>Where in Dubai</h2>
      <p>
        Hayat operates out of DIFC and meets clients across Downtown, Business
        Bay, and ADGM (Abu Dhabi) when relevant. On-site weeks are scheduled
        around board cycles and major regional fundraise events.
      </p>

      <h2>Other locations</h2>
      <ul>
        <li><Link href="/locations/new-york">New York</Link></li>
        <li><Link href="/locations/london">London</Link></li>
      </ul>

      <div className="op-cta-block">
        <h2>Book the diagnostic</h2>
        <p>Free 60-minute call. Available GST hours from Dubai.</p>
        <Link href="/contact">Book a call →</Link>
      </div>
    </PageShell>
  );
}
