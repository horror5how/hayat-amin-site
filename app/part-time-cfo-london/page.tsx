import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "part-time-cfo-london";
const URL = `${SITE}/${SLUG}`;
const PUBLISHED = "2026-07-13";
const MODIFIED = "2026-08-31";

export const metadata: Metadata = {
  title: "Part-Time CFO London | Hayat Amin — 1–3 Days a Week",
  description:
    "Hire a part-time CFO in London. Hayat Amin gives founders ongoing senior finance leadership one to three days a week — fundraising, reporting, and cash-flow strategy on a fixed monthly retainer.",
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "Part-Time CFO London | Hayat Amin",
    description:
      "Ongoing part-time CFO leadership for London founders, one to three days a week. Book a diagnostic.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, part-time CFO in London." }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  serviceType: "Part-time CFO",
  name: "Part-Time CFO London",
  url: URL,
  provider: { "@id": `${SITE}/#person` },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Part-time CFO services in London — ongoing senior finance leadership one to three days per week on a fixed monthly retainer for founders and scaling SMEs.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a part-time CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A part-time CFO is a senior finance leader who works with your business on an ongoing basis for a set portion of the week — typically one to three days — on a fixed monthly retainer. It is the same model as a fractional CFO: full CFO-level leadership at a fraction of the full-time cost, sized to what the business actually needs.",
      },
    },
    {
      "@type": "Question",
      name: "How many days a week does a part-time CFO work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually one to three days a week, flexed up around board meetings, month-end, and fundraises, and down in quieter periods. Hayat Amin sets the cadence to the client's board cycle and runway, with daily availability on Slack in between.",
      },
    },
    {
      "@type": "Question",
      name: "Is a part-time CFO the same as a fractional CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Effectively yes. Part-time CFO, fractional CFO, and outsourced CFO all describe ongoing senior finance leadership on a flexible basis. Interim CFO is the outlier — that means full-time cover for a fixed window rather than an ongoing part-time arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a part-time CFO cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A two-day-a-week part-time CFO in London typically costs roughly £70,000 to £145,000 a year equivalent, depending on seniority. Hayat prices by hours per week on a retainer and shares the exact rate on the first diagnostic call.",
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
    { "@type": "ListItem", position: 2, name: "Part-Time CFO London", item: URL },
  ],
};

export default function PartTimeCFOLondonPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Part-Time CFO London" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">London · Updated {MODIFIED}</span>
      <h1>Part-Time CFO London</h1>
      <p className="op-lede">
        A <strong>part-time CFO</strong> gives a London business ongoing senior finance leadership one
        to three days a week — without the salary, equity, and overhead of a full-time hire.{" "}
        <strong>Hayat Amin</strong> runs the part-time CFO seat for founders and scaling SMEs across
        London on a fixed monthly retainer, owning fundraising, reporting, and cash-flow strategy, and
        flexing up around the moments that matter.
      </p>

      <h2>What ongoing part-time looks like</h2>
      <ul>
        <li><strong>A steady cadence.</strong> One to three days a week, plus daily Slack, so finance never goes dark between visits.</li>
        <li><strong>Month-end that closes.</strong> A reliable close and a board pack that ships on time.</li>
        <li><strong>Fundraise-ready, always.</strong> The model and data room stay current, so a raise doesn&apos;t start from zero.</li>
        <li><strong>Runway you can see.</strong> Rolling forecasts and clear levers, reviewed every cycle.</li>
        <li><strong>Flex.</strong> More days around a raise or board meeting, fewer in quiet months.</li>
      </ul>

      <h2>Who it suits</h2>
      <p>
        Part-time works best for London founders past the bookkeeper stage but not yet at full-time-CFO
        scale — Seed through Series B — who want a senior operator in the business every week rather
        than a firm rotating faces. If your need is instead urgent full-time cover for a fixed window,
        that is an <Link href="/interim-cfo-london">interim CFO</Link>.
      </p>

      <h2>Part-time, fractional, or interim?</h2>
      <p>
        Part-time and <Link href="/fractional-cfo-london">fractional</Link> are the same ongoing model.{" "}
        <Link href="/interim-cfo-london">Interim</Link> is full-time cover for a fixed window. See how
        Hayat compares to other London providers in the{" "}
        <Link href="/best-fractional-cfo-london">2026 Best Fractional CFO London ranking</Link>.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is a part-time CFO?</summary>
          <p>A senior finance leader working with your business one to three days a week on a fixed monthly retainer — the same model as a fractional CFO.</p>
        </details>
        <details>
          <summary>How many days a week?</summary>
          <p>Usually one to three, flexed up around raises and board meetings, with daily Slack in between.</p>
        </details>
        <details>
          <summary>Same as a fractional CFO?</summary>
          <p>Yes. Part-time, fractional, and outsourced CFO all mean ongoing part-time leadership. Interim means full-time cover for a fixed window.</p>
        </details>
        <details>
          <summary>What does it cost in London?</summary>
          <p>A two-day-a-week arrangement runs roughly £70k–£145k/year equivalent. Hayat prices by hours per week and shares the rate on the first call.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Work with Hayat in London</h2>
        <p>One 60-minute diagnostic call. You leave with a number and a clear read on the right cadence for your stage.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>
        By <Link href="/author/hayat-amin">Hayat Amin</Link>, part-time and fractional CFO with a
        London bench and operator-side exits across UK and US markets. London · NYC · Dubai. Last
        updated <strong>{MODIFIED}</strong>.
      </p>
    </PageShell>
  );
}
