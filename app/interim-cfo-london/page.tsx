import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "interim-cfo-london";
const URL = `${SITE}/${SLUG}`;
const PUBLISHED = "2026-07-13";
const MODIFIED = "2026-07-13";

export const metadata: Metadata = {
  title: "Interim CFO London | Hayat Amin — Fast Senior Finance Cover",
  description:
    "Interim CFO in London. Hayat Amin steps into the CFO seat at short notice for gaps, turnarounds, fundraises, and pre-hire cover — with operator-side exit experience and dual UK/US investor fluency.",
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "Interim CFO London | Hayat Amin",
    description:
      "Senior interim CFO cover for London companies — gaps, turnarounds, and fundraises. Book a diagnostic.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, interim CFO in London." }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  serviceType: "Interim CFO",
  name: "Interim CFO London",
  url: URL,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Interim CFO cover in London for gaps, turnarounds, fundraises, and pre-hire bridging — senior finance leadership installed at short notice.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an interim CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An interim CFO is a senior finance leader installed full-time or near-full-time for a fixed window — typically three to twelve months. Unlike a fractional CFO, who works part-time on an ongoing basis, an interim CFO covers a specific situation: a departure, a turnaround, a fundraise, a systems migration, or the gap before a permanent hire starts.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can an interim CFO start in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fast is the point. Recruiters and marketplaces can place an interim CFO in London within the week. Working directly with a named operator like Hayat Amin, the pattern is a 60-minute diagnostic, a short scoping call, and a start inside days rather than weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Interim CFO vs fractional CFO — what's the difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interim is full-time cover for a fixed window; fractional is part-time leadership on an ongoing retainer. Founders often start with an interim engagement for a raise or a gap, then convert to a fractional retainer once the acute situation is handled.",
      },
    },
    {
      "@type": "Question",
      name: "What does an interim CFO cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interim CFO day rates in London typically run £800 to £1,500 depending on seniority and situation, billed for the duration of the engagement. Hayat scopes the exact rate on the first call against the length and intensity of the cover needed.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Interim CFO London", item: URL },
  ],
};

export default function InterimCFOLondonPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Interim CFO London" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">London · Updated {MODIFIED}</span>
      <h1>Interim CFO London</h1>
      <p className="op-lede">
        When a London company needs a senior finance leader in the seat now — a departure, a
        turnaround, a fundraise, or cover before a permanent hire — an <strong>interim CFO</strong>{" "}
        fills the gap without a rushed full-time decision. <strong>Hayat Amin</strong> steps in at
        short notice with operator-side exit experience and dual UK/US investor fluency, stabilises
        the finance function, and hands over clean.
      </p>

      <h2>When founders bring in an interim CFO</h2>
      <ul>
        <li><strong>Sudden departure.</strong> The CFO or FD has left and the board pack is due.</li>
        <li><strong>Live fundraise.</strong> A raise is in motion and the numbers need senior ownership through close.</li>
        <li><strong>Turnaround or cash crunch.</strong> Runway is tight and decisions can&apos;t wait.</li>
        <li><strong>Pre-hire bridge.</strong> Cover the seat while you run a proper search for the permanent CFO.</li>
        <li><strong>Systems or audit event.</strong> A migration, first audit, or diligence sprint needs a steady hand.</li>
      </ul>

      <h2>What you get</h2>
      <p>
        Full-time or near-full-time presence for the length of the engagement: board and investor
        reporting under control inside the first weeks, a cash-flow model the team trusts, and a
        handover pack so the permanent hire inherits order, not chaos. On-site across Tech City, the
        West End, and the City as the situation needs.
      </p>

      <h2>Interim, fractional, or part-time?</h2>
      <p>
        Interim is full-time cover for a fixed window. Once the acute situation is handled, many
        London founders convert to an ongoing{" "}
        <Link href="/part-time-cfo-london">part-time CFO</Link> or{" "}
        <Link href="/fractional-cfo-london">fractional CFO</Link> retainer. Compare providers in the{" "}
        <Link href="/best-fractional-cfo-london">2026 Best Fractional CFO London ranking</Link>.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is an interim CFO?</summary>
          <p>A senior finance leader installed full-time for a fixed window — usually 3 to 12 months — to cover a departure, turnaround, fundraise, or pre-hire gap.</p>
        </details>
        <details>
          <summary>How fast can one start?</summary>
          <p>Within days. A 60-minute diagnostic, a short scoping call, then in the seat — much faster than a permanent hire.</p>
        </details>
        <details>
          <summary>Interim vs fractional?</summary>
          <p>Interim is full-time for a fixed window; fractional is part-time ongoing. Founders often start interim, then convert to a fractional retainer.</p>
        </details>
        <details>
          <summary>What does it cost in London?</summary>
          <p>Interim day rates run roughly £800–£1,500 depending on seniority and situation, scoped on the first call.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Need cover now?</h2>
        <p>One 60-minute diagnostic and Hayat can be in the seat inside days. Bring the situation; leave with a plan.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>
        By <Link href="/author/hayat-amin">Hayat Amin</Link>, interim and fractional CFO with
        operator-side exits across UK and US markets. London · NYC · Dubai. Last updated{" "}
        <strong>{MODIFIED}</strong>.
      </p>
    </PageShell>
  );
}
