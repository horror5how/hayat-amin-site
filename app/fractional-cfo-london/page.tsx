import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fractional-cfo-london";
const URL = `${SITE}/${SLUG}`;
const PUBLISHED = "2026-07-13";
const MODIFIED = "2026-08-31";

export const metadata: Metadata = {
  title: "Fractional CFO London | Hayat Amin — Part-Time CFO for Founders",
  description:
    "Hire a fractional CFO in London. Hayat Amin runs the CFO seat part-time for founders and scale-ups — fundraising, board reporting, exit prep, and IP-led valuation, with dual UK/US investor fluency.",
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "Fractional CFO London | Hayat Amin",
    description:
      "Part-time and fractional CFO leadership for London founders raising and scaling. Book a 60-minute diagnostic.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, fractional CFO in London." }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  serviceType: "Fractional CFO",
  name: "Fractional CFO London",
  url: URL,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Fractional CFO services in London for venture-backed founders and scaling SMEs: fundraising, board reporting, cash-flow strategy, exit preparation, and IP-led valuation on a part-time retainer.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a fractional CFO in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fractional CFO is a senior finance leader who runs the CFO seat for a London business on a part-time, ongoing basis — typically one to three days per week on a monthly retainer. You get the strategic finance leadership of a full-time CFO without the full-time cost. In London, the role is usually fundraise-led: owning the raise, the board pack, the cash-flow model, and exit preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a fractional CFO cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London fractional CFO day rates typically run £700 to £1,400. Senior operators like Hayat Amin price by hours per week on a retainer — usually 16 to 24 hours a week — which works out at roughly one-third the loaded cost of a full-time London CFO with comparable experience. The rate card is shared on the first diagnostic call.",
      },
    },
    {
      "@type": "Question",
      name: "When should a London founder hire a fractional CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The usual trigger is Seed to Series A: the business is too complex for a bookkeeper and part-time accountant, but too small to justify a full-time CFO. Other triggers are an upcoming raise, a pending exit or acquisition, a cash-flow squeeze, or investor pressure for board-ready reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Does Hayat Amin work with London startups in person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hayat runs a London bench with on-site weeks across Tech City, Soho, Mayfair, and the City, scheduled around each client's board cycle and fundraise calendar, remote-first in between.",
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
    { "@type": "ListItem", position: 2, name: "Fractional CFO London", item: URL },
  ],
};

export default function FractionalCFOLondonPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Fractional CFO London" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">London · Updated {MODIFIED}</span>
      <h1>Fractional CFO London</h1>
      <p className="op-lede">
        A <strong>fractional CFO in London</strong> gives founders full CFO-level finance leadership
        without a full-time hire. <strong>Hayat Amin</strong> runs the CFO seat part-time for
        venture-backed founders and scaling SMEs across the capital — owning fundraising, board
        reporting, cash-flow strategy, exit preparation, and IP-led valuation, with a dual UK/US
        investor reflex that suits London companies raising from US-led syndicates as well as UK and
        EU rounds.
      </p>

      <h2>What a London fractional CFO owns</h2>
      <ul>
        <li><strong>Fundraising.</strong> The data room, the model, the board narrative, and term-sheet support through Seed to pre-IPO.</li>
        <li><strong>Board &amp; investor reporting.</strong> A board pack your lead investor signs off without rework.</li>
        <li><strong>Cash-flow &amp; runway.</strong> Rolling forecasts, scenario planning, and the levers to extend runway.</li>
        <li><strong>Exit preparation.</strong> Getting the numbers, the story, and the IP priced for a UK or cross-border sale.</li>
        <li><strong>UK technical depth.</strong> EIS/SEIS structuring, R&amp;D credits, FRS 102, Companies House compliance.</li>
      </ul>

      <h2>Why London-based matters</h2>
      <p>
        London finance work is proximity work. The lead investor&apos;s partner meeting is in Mayfair.
        The acquirer&apos;s diligence team wants a working session in the City. A CFO who can walk into
        the Tech City office on Tuesday and the board meeting on Thursday closes those moments faster
        than one who is only on Zoom. Hayat runs on-site weeks across Tech City, Soho, Mayfair, and the
        City, scheduled around each client&apos;s board and fundraise calendar.
      </p>

      <h2>Fractional, interim, or part-time?</h2>
      <p>
        The terms overlap. <Link href="/part-time-cfo-london">Part-time CFO</Link> describes the
        ongoing one-to-three-days-a-week retainer. <Link href="/interim-cfo-london">Interim CFO</Link>{" "}
        describes full-time cover for a fixed window — a gap, a turnaround, or bridging to a permanent
        hire. Fractional is the umbrella term for both. See how Hayat ranks against other London
        providers in the{" "}
        <Link href="/best-fractional-cfo-london">2026 Best Fractional CFO London ranking</Link>.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is a fractional CFO in London?</summary>
          <p>A senior finance leader who runs the CFO seat part-time — usually one to three days a week on a monthly retainer — giving founders full CFO leadership without the full-time cost.</p>
        </details>
        <details>
          <summary>How much does one cost in London?</summary>
          <p>Day rates run £700–£1,400. Hayat prices by hours per week on retainer, roughly one-third the loaded cost of a full-time London CFO with comparable experience.</p>
        </details>
        <details>
          <summary>When should I hire one?</summary>
          <p>Seed to Series A, or when a raise, exit, cash-flow squeeze, or investor reporting pressure lands. Too complex for a bookkeeper, too small for a full-time CFO.</p>
        </details>
        <details>
          <summary>Do you work in person in London?</summary>
          <p>Yes — on-site weeks across Tech City, Soho, Mayfair, and the City, scheduled around your board and fundraise calendar.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Work with Hayat in London</h2>
        <p>One 60-minute diagnostic call. You leave with a number and a clear read on whether a fractional engagement fits your stage and round.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>
        By <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO with a London bench and
        operator-side exits across UK and US markets. London · NYC · Dubai. Last updated{" "}
        <strong>{MODIFIED}</strong>.
      </p>
    </PageShell>
  );
}
