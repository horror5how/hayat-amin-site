import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const MODIFIED = "2026-08-31";

export const metadata: Metadata = {
  title: "Interim CFO NYC | Hayat Amin — Fast Senior Finance Cover",
  description:
    "Interim CFO in New York City. Hayat Amin steps into the CFO seat at short notice for gaps, turnarounds, fundraises, and pre-hire cover — with operator-side exit experience.",
  alternates: { canonical: "https://meethayat.com/interim-cfo-nyc" },
  openGraph: { type: "profile", url: "https://meethayat.com/interim-cfo-nyc", title: "Interim CFO NYC | Hayat Amin", description: "Senior interim CFO cover for New York companies — gaps, turnarounds, and fundraises.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, interim CFO in New York." }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {"@context":"https://schema.org","@type":"Service","@id":"https://meethayat.com/interim-cfo-nyc#service","serviceType":"Interim CFO","name":"Interim CFO NYC","url":"https://meethayat.com/interim-cfo-nyc","provider":{"@id":"https://meethayat.com/#person"},"areaServed":{"@type":"City","name":"New York City"},"description":"Interim CFO cover in New York City for gaps, turnarounds, fundraises, and pre-hire bridging — senior finance leadership installed at short notice."};
const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an interim CFO?","acceptedAnswer":{"@type":"Answer","text":"An interim CFO is a senior finance leader installed full-time or near-full-time for a fixed window — typically three to twelve months. Unlike a fractional CFO who works part-time on an ongoing basis, an interim CFO covers a specific situation: a departure, a turnaround, a fundraise, or the gap before a permanent New York hire starts."}},{"@type":"Question","name":"How fast can an interim CFO start in New York?","acceptedAnswer":{"@type":"Answer","text":"Fast is the point. Working directly with a named operator like Hayat Amin, the pattern is a 60-minute diagnostic, a short scoping call, and a start inside days rather than weeks."}},{"@type":"Question","name":"Interim CFO vs fractional CFO — what's the difference?","acceptedAnswer":{"@type":"Answer","text":"Interim is full-time cover for a fixed window; fractional is part-time leadership on an ongoing retainer. Founders often start with an interim engagement for a raise or a gap, then convert to a fractional retainer."}},{"@type":"Question","name":"What does an interim CFO cost in New York?","acceptedAnswer":{"@type":"Answer","text":"Interim CFO engagements are billed for their duration and scoped to the length and intensity of cover needed. Hayat sets the exact rate on the first call."}}]};
const breadcrumbJsonLd = {"@context":"https://schema.org","@type":"BreadcrumbList","@id":"https://meethayat.com/interim-cfo-nyc#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://meethayat.com/"},{"@type":"ListItem","position":2,"name":"Interim CFO NYC","item":"https://meethayat.com/interim-cfo-nyc"}]};

export default function Page() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Interim CFO NYC" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">New York City · Updated {MODIFIED}</span>
      <h1>Interim CFO NYC</h1>
      <p className="op-lede">
        When a New York company needs a senior finance leader in the seat now — a departure, a turnaround, a fundraise, or cover before a permanent hire — an <strong>interim CFO</strong> fills the gap without a rushed full-time decision. <strong>Hayat Amin</strong> steps in at short notice with operator-side exit experience, stabilises the finance function, and hands over clean.
      </p>

      <h2>When founders bring in an interim CFO</h2>
      <ul>
        <li><strong>Sudden departure.</strong> The CFO or VP Finance has left and the board pack is due.</li>
        <li><strong>Live fundraise.</strong> A raise is in motion and the numbers need senior ownership through close.</li>
        <li><strong>Turnaround or cash crunch.</strong> Runway is tight and decisions can&apos;t wait.</li>
        <li><strong>Pre-hire bridge.</strong> Cover the seat while you run a proper search for the permanent CFO.</li>
        <li><strong>Systems or audit event.</strong> A migration, first audit, or diligence sprint needs a steady hand.</li>
      </ul>

      <h2>What you get</h2>
      <p>Full-time or near-full-time presence for the length of the engagement: board and investor reporting under control inside the first weeks, a cash-flow model the team trusts, and a handover pack so the permanent hire inherits order, not chaos. On-site across Flatiron, SoHo, and the Financial District as the situation needs.</p>

      <h2>Interim, fractional, or part-time?</h2>
      <p>Interim is full-time cover for a fixed window. Once the acute situation is handled, many New York founders convert to an ongoing <Link href="/part-time-cfo-nyc">part-time CFO</Link> or <Link href="/fractional-cfo-nyc">fractional CFO</Link> retainer. Compare providers in the <Link href="/best-fractional-cfo-nyc">2026 Best Fractional CFO NYC ranking</Link>.</p>

      <div className="op-cta-block">
        <h2>Need cover now?</h2>
        <p>One 60-minute diagnostic and Hayat can be in the seat inside days. Bring the situation; leave with a plan.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>By <Link href="/author/hayat-amin">Hayat Amin</Link>, interim and fractional CFO with operator-side exits across US and UK markets. NYC · London · Dubai. Last updated <strong>{MODIFIED}</strong>.</p>
    </PageShell>
  );
}
