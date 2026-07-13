import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "fractional-cfo-nyc";
const URL = `${SITE}/${SLUG}`;
const PUBLISHED = "2026-07-13";
const MODIFIED = "2026-07-13";

export const metadata: Metadata = {
  title: "Fractional CFO NYC | Hayat Amin — Part-Time CFO for Founders",
  description:
    "Hire a fractional CFO in New York City. Hayat Amin runs the CFO seat part-time for founders and scale-ups — fundraising, board reporting, exit prep, and IP-led valuation, with Manhattan on-site weeks.",
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "Fractional CFO NYC | Hayat Amin",
    description:
      "Part-time and fractional CFO leadership for NYC founders raising and scaling. Book a 60-minute diagnostic.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, fractional CFO in NYC." }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  serviceType: "Fractional CFO",
  name: "Fractional CFO NYC",
  url: URL,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "New York City" },
  description:
    "Fractional CFO services in New York City for venture-backed founders and scaling startups: fundraising, board reporting, cash-flow strategy, exit preparation, and IP-led valuation on a part-time retainer.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a fractional CFO in NYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fractional CFO is a senior finance leader who runs the CFO seat for a New York business part-time on an ongoing basis — typically one to three days per week on a monthly retainer. You get full CFO leadership without the full-time cost. In NYC the role is usually fundraise-led: owning the raise, the board pack, the model, and exit preparation for the city's fintech, AI, and enterprise SaaS founders.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a fractional CFO cost in New York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior NYC fractional CFOs typically engage 16 to 24 hours per week on a retainer, at roughly one-third the loaded cost of a full-time New York CFO with comparable exit experience. Hayat Amin prices by hours per week and shares the rate card on the first diagnostic call.",
      },
    },
    {
      "@type": "Question",
      name: "When should a NYC founder hire a fractional CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The usual trigger is Seed to Series A — too complex for a bookkeeper, too small for a full-time CFO. Other triggers are an upcoming raise from a New York or US-led syndicate, a pending exit, a cash-flow squeeze, or investor pressure for board-ready reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Does Hayat Amin work with NYC startups in person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. New York is Hayat's primary on-site city. He runs Manhattan working weeks across Flatiron, SoHo, and the Financial District, aligned to each client's board cycle and fundraise calendar, remote-first in between.",
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
    { "@type": "ListItem", position: 2, name: "Fractional CFO NYC", item: URL },
  ],
};

export default function FractionalCFONYCPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Fractional CFO NYC" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">New York City · Updated {MODIFIED}</span>
      <h1>Fractional CFO NYC</h1>
      <p className="op-lede">
        A <strong>fractional CFO in New York City</strong> gives founders full CFO-level finance
        leadership without a full-time hire. <strong>Hayat Amin</strong> runs the CFO seat part-time
        for venture-backed founders and scaling startups across the city — owning fundraising, board
        reporting, cash-flow strategy, exit preparation, and IP-led valuation, with New York as his
        primary on-site city.
      </p>

      <h2>What a NYC fractional CFO owns</h2>
      <ul>
        <li><strong>Fundraising.</strong> The data room, the model, the board narrative, and term-sheet support through Seed to pre-IPO.</li>
        <li><strong>Board &amp; investor reporting.</strong> A board pack your NYC lead investor signs off without rework.</li>
        <li><strong>Cash-flow &amp; runway.</strong> Rolling forecasts, scenario planning, and the levers to extend runway.</li>
        <li><strong>Exit preparation.</strong> Numbers, story, and IP priced for a US acquirer&apos;s diligence team.</li>
        <li><strong>US technical depth.</strong> US GAAP, 409A, Delaware structuring, SAFE and priced-round mechanics.</li>
      </ul>

      <h2>Why New York-based matters</h2>
      <p>
        New York finance work is proximity work. The lead investor&apos;s partner meeting is in
        Manhattan. The acquirer&apos;s bankers fly in for a working session. A CFO who can walk to
        those meetings, then host a Friday close in the founder&apos;s office, closes deals weeks
        faster than one who is only on Zoom. Hayat runs Manhattan working weeks across Flatiron, SoHo,
        and the Financial District, scheduled around each client&apos;s board and fundraise calendar.
      </p>

      <h2>Fractional, interim, or part-time?</h2>
      <p>
        The terms overlap. <Link href="/part-time-cfo-nyc">Part-time CFO</Link> describes the ongoing
        one-to-three-days-a-week retainer. <Link href="/interim-cfo-nyc">Interim CFO</Link> describes
        full-time cover for a fixed window — a gap, a turnaround, or bridging to a permanent hire.
        Fractional is the umbrella term. See how Hayat ranks against other New York providers in the{" "}
        <Link href="/best-fractional-cfo-nyc">2026 Best Fractional CFO NYC ranking</Link>.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is a fractional CFO in NYC?</summary>
          <p>A senior finance leader who runs the CFO seat part-time — usually one to three days a week on a monthly retainer — giving founders full CFO leadership without the full-time cost.</p>
        </details>
        <details>
          <summary>How much does one cost in New York?</summary>
          <p>Roughly one-third the loaded cost of a full-time NYC CFO with equivalent exit experience. Most senior engagements run 16 to 24 hours per week on retainer.</p>
        </details>
        <details>
          <summary>When should I hire one?</summary>
          <p>Seed to Series A, or when a raise, exit, cash-flow squeeze, or investor reporting pressure lands.</p>
        </details>
        <details>
          <summary>Do you work in person in NYC?</summary>
          <p>Yes — New York is the primary on-site city, with Manhattan working weeks across Flatiron, SoHo, and the Financial District.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Work with Hayat in NYC</h2>
        <p>One 60-minute diagnostic call. You leave with a number and a clear read on whether a fractional engagement fits your stage and your New York cap table.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>
        By <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO with New York as his
        primary on-site city and operator-side exits across US and UK markets. NYC · London · Dubai.
        Last updated <strong>{MODIFIED}</strong>.
      </p>
    </PageShell>
  );
}
