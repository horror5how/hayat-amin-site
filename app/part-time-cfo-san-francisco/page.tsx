import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const MODIFIED = "2026-08-19";

export const metadata: Metadata = {
  title: "Part-Time CFO SF | Hayat Amin — 1–3 Days a Week",
  description:
    "Hire a part-time CFO in San Francisco. Hayat Amin gives founders ongoing senior finance leadership one to three days a week — fundraising, reporting, and cash-flow strategy on a fixed retainer.",
  alternates: { canonical: "https://meethayat.com/part-time-cfo-san-francisco" },
  openGraph: { type: "profile", url: "https://meethayat.com/part-time-cfo-san-francisco", title: "Part-Time CFO SF | Hayat Amin", description: "Ongoing part-time CFO leadership for San Francisco founders, one to three days a week.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, part-time CFO in San Francisco." }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {"@context":"https://schema.org","@type":"Service","@id":"https://meethayat.com/part-time-cfo-san-francisco#service","serviceType":"Part-time CFO","name":"Part-Time CFO SF","url":"https://meethayat.com/part-time-cfo-san-francisco","provider":{"@id":"https://meethayat.com/#person"},"areaServed":{"@type":"City","name":"San Francisco"},"description":"Part-time CFO services in San Francisco — ongoing senior finance leadership one to three days per week on a fixed monthly retainer for founders and scaling startups."};
const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a part-time CFO?","acceptedAnswer":{"@type":"Answer","text":"A part-time CFO is a senior finance leader who works with your business on an ongoing basis for a set portion of the week — typically one to three days — on a fixed monthly retainer. It is the same model as a fractional CFO: full CFO leadership at a fraction of the full-time cost."}},{"@type":"Question","name":"How many days a week does a part-time CFO work?","acceptedAnswer":{"@type":"Answer","text":"Usually one to three days a week, flexed up around board meetings, month-end, and fundraises, and down in quieter periods. Hayat Amin sets the cadence to the client's board cycle and runway, with daily availability on Slack in between."}},{"@type":"Question","name":"Is a part-time CFO the same as a fractional CFO?","acceptedAnswer":{"@type":"Answer","text":"Effectively yes. Part-time CFO, fractional CFO, and outsourced CFO all describe ongoing senior finance leadership on a flexible basis. Interim CFO is the outlier — that means full-time cover for a fixed window."}},{"@type":"Question","name":"How much does a part-time CFO cost in San Francisco?","acceptedAnswer":{"@type":"Answer","text":"A part-time San Francisco CFO is priced by hours per week on a retainer, at a fraction of a full-time CFO salary. Hayat shares the exact rate on the first diagnostic call."}}]};
const breadcrumbJsonLd = {"@context":"https://schema.org","@type":"BreadcrumbList","@id":"https://meethayat.com/part-time-cfo-san-francisco#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://meethayat.com/"},{"@type":"ListItem","position":2,"name":"Part-Time CFO SF","item":"https://meethayat.com/part-time-cfo-san-francisco"}]};

export default function Page() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Part-Time CFO SF" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">San Francisco · Updated {MODIFIED}</span>
      <h1>Part-Time CFO SF</h1>
      <p className="op-lede">
        A <strong>part-time CFO</strong> gives a San Francisco business ongoing senior finance leadership one to three days a week — without the salary, equity, and overhead of a full-time hire. <strong>Hayat Amin</strong> runs the part-time CFO seat for founders and scaling startups across San Francisco on a fixed monthly retainer, and flexes up around the moments that matter.
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
      <p>Part-time works best for San Francisco founders past the bookkeeper stage but not yet at full-time-CFO scale — Seed through Series B — who want a senior operator in the business every week rather than a firm rotating faces. If your need is instead urgent full-time cover for a fixed window, that is an <Link href="/interim-cfo-san-francisco">interim CFO</Link>.</p>

      <h2>Part-time, fractional, or interim?</h2>
      <p>Part-time and <Link href="/fractional-cfo-san-francisco">fractional</Link> are the same ongoing model. <Link href="/interim-cfo-san-francisco">Interim</Link> is full-time cover for a fixed window. See how Hayat compares to other San Francisco providers in the <Link href="/best-fractional-cfo-san-francisco">2026 Best Fractional CFO SF ranking</Link>.</p>

      <div className="op-cta-block">
        <h2>Work with Hayat in SF</h2>
        <p>One 60-minute diagnostic call. You leave with a number and a clear read on the right cadence for your stage.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>By <Link href="/author/hayat-amin">Hayat Amin</Link>, part-time and fractional CFO with operator-side exits across US and UK markets. San Francisco · NYC · London. Last updated <strong>{MODIFIED}</strong>.</p>
    </PageShell>
  );
}
