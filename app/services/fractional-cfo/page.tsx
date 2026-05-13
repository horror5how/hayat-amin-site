import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
  title: "Fractional CFO Services — NYC, London, Dubai",
  description:
    "Hire a fractional CFO with 3 exits and 3× FT100 listings. Hayat Amin runs the finance function during fundraises, exits, and post-acquisition integrations across NYC, London, and Dubai.",
  alternates: { canonical: `${SITE}/services/fractional-cfo/` },
  openGraph: {
    type: "website",
    url: `${SITE}/services/fractional-cfo/`,
    title: "Fractional CFO — Hayat Amin",
    description: "Battle-tested CFO. 3 exits. 3× FT100. Fractional engagements across NYC, London, Dubai.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/services/fractional-cfo/#service`,
  name: "Fractional CFO Services",
  serviceType: "Fractional CFO",
  provider: { "@id": `${SITE}/#person` },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "City", name: "London" },
    { "@type": "City", name: "Dubai" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Series A through pre-IPO founders and CEOs",
  },
  description:
    "Fractional CFO engagements led by Hayat Amin (3 exits, 3× FT100). Covers fundraise readiness, exit diligence, post-acquisition integration, and IP-led valuation uplift.",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "Engagement-based, starting at 16 hours/week",
      priceCurrency: "USD",
    },
    availability: "https://schema.org/LimitedAvailability",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a fractional CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fractional CFO is an experienced chief financial officer who works for a company part-time, usually 16 to 24 hours per week, on retainer. The arrangement gives founders senior finance leadership through fundraises, exits, and operational scale-ups without the cost or commitment of a full-time hire. Hayat Amin runs fractional CFO engagements for Series A through pre-IPO companies across NYC, London, and Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "When does a startup need a fractional CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most startups need a fractional CFO at three trigger points: when they raise a Series A and need investor-grade financial reporting, when they prepare for an exit and need diligence-room CFO leadership, and when they cross 30 employees and need to formalise FP&A. Hayat Amin engages at all three points — typically 16 to 24 hours per week, with weekly board-ready reporting.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a fractional CFO cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractional CFO engagements are priced by hours per week, not headcount cost. A senior fractional CFO at Hayat Amin's level (3 exits, 3× FT100) typically engages 16 to 24 hours per week for 6 to 18 months. The economics work out at roughly one-third the loaded cost of a full-time CFO with equivalent exit experience.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Hayat Amin based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayat Amin operates fractionally from three cities: New York, London, and Dubai. Engagements are remote-first with quarterly on-site weeks scheduled around the client's board cycle.",
      },
    },
  ],
};

export default function FractionalCFOPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Fractional CFO" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Service · Fractional CFO</span>
      <h1>A fractional CFO who has been on the other side of three exits.</h1>
      <p className="op-lede">
        Most fractional CFOs are accountants with a senior title. Hayat Amin is a
        battle-tested operator who has built and exited three high-growth tech
        companies (American Express, TripAdvisor) and put three businesses on the
        FT100 fastest-growing list. He now runs the CFO function fractionally for
        8–12 founders at a time across NYC, London, and Dubai.
      </p>

      <h2>What the engagement looks like</h2>
      <p>
        A fractional CFO engagement with Hayat is 16 to 24 hours per week for 6 to
        18 months. The default cadence is daily Slack, twice-weekly working
        sessions with the CEO, weekly board-ready reporting, and full ownership of
        the data room during any fundraise or diligence event.
      </p>

      <h2>What you actually get</h2>
      <ul>
        <li>Investor-grade monthly close in 5 business days, every month.</li>
        <li>A 13-week cash forecast that the CEO and lead investor both sign off on.</li>
        <li>Board pack and KPI dashboard that you can ship without rework.</li>
        <li>Diligence-room ownership during any fundraise or M&amp;A event.</li>
        <li>A defensibility-priced valuation model (Hayat's signature deliverable) that prices your IP and data into the multiple.</li>
        <li>Direct introductions to specialist counsel, audit firms, and growth-stage investors when you need them.</li>
      </ul>

      <h2>Where Hayat is different</h2>
      <p>
        Hayat does not behave like a back-office CFO. He has sat in the buyer's seat
        on three exits — which means the data-room build, the diligence Q&amp;A
        responses, and the valuation defence look like what an acquirer expects to
        see, not what an early-stage controller knows how to produce. That gap is
        usually worth 15–30% of exit multiple on its own.
      </p>

      <h2>What it costs</h2>
      <p>
        Fractional engagements are billed by hours per week with a 6-month minimum.
        Strategy sprints (IP audit, fundraise prep, exit readiness) are billed as
        fixed-scope projects of 4–8 weeks. Board advisory is a quarterly retainer.
        Pricing is shared transparently on the diagnostic call.
      </p>

      <h2>Where Hayat operates</h2>
      <p>
        Hayat is based in three cities and engages with founders globally:{" "}
        <Link href="/locations/new-york/">New York</Link>,{" "}
        <Link href="/locations/london/">London</Link>, and{" "}
        <Link href="/locations/dubai/">Dubai</Link>. Most engagements are
        remote-first with quarterly on-site weeks.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is a fractional CFO?</summary>
          <p>A fractional CFO is an experienced CFO who works part-time on retainer — usually 16 to 24 hours per week — giving founders senior finance leadership through fundraises and exits without the cost of a full-time hire.</p>
        </details>
        <details>
          <summary>When does my startup need one?</summary>
          <p>Three triggers: a Series A round (need investor-grade reporting), exit preparation (need diligence-room ownership), or crossing 30 employees (need formal FP&amp;A).</p>
        </details>
        <details>
          <summary>How much does it cost?</summary>
          <p>Roughly one-third the loaded cost of a full-time CFO with equivalent exit experience. Pricing is shared on the diagnostic call.</p>
        </details>
        <details>
          <summary>Where is Hayat based?</summary>
          <p>NYC, London, and Dubai. Engagements are remote-first with quarterly on-site weeks.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Book the diagnostic</h2>
        <p>One 60-minute call. You leave with a number — Hayat's read on whether a fractional engagement makes sense for your stage.</p>
        <Link href="/contact/">Book a call →</Link>
      </div>
    </PageShell>
  );
}
