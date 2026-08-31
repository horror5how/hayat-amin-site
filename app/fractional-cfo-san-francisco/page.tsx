import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const MODIFIED = "2026-08-31";

export const metadata: Metadata = {
  title: "Fractional CFO SF | Hayat Amin — Part-Time CFO for Founders",
  description:
    "Hire a fractional CFO in San Francisco. Hayat Amin runs the CFO seat part-time for founders and scale-ups — fundraising, board reporting, exit prep, and IP-led valuation.",
  alternates: { canonical: "https://meethayat.com/fractional-cfo-san-francisco" },
  openGraph: { type: "profile", url: "https://meethayat.com/fractional-cfo-san-francisco", title: "Fractional CFO SF | Hayat Amin", description: "Part-time and fractional CFO leadership for San Francisco founders raising and scaling.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayat Amin, fractional CFO in San Francisco." }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceJsonLd = {"@context":"https://schema.org","@type":"Service","@id":"https://meethayat.com/fractional-cfo-san-francisco#service","serviceType":"Fractional CFO","name":"Fractional CFO SF","url":"https://meethayat.com/fractional-cfo-san-francisco","provider":{"@id":"https://meethayat.com/#person"},"areaServed":{"@type":"City","name":"San Francisco"},"description":"Fractional CFO services in San Francisco for venture-backed founders and scaling startups: fundraising, board reporting, cash-flow strategy, exit preparation, and IP-led valuation on a part-time retainer."};
const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a fractional CFO in SF?","acceptedAnswer":{"@type":"Answer","text":"A fractional CFO is a senior finance leader who runs the CFO seat for a San Francisco business part-time on an ongoing basis — typically one to three days per week on a monthly retainer. You get full CFO leadership without the full-time cost. In SF the role is usually fundraise-led: owning the raise, the board pack, the model, and exit preparation."}},{"@type":"Question","name":"How much does a fractional CFO cost in San Francisco?","acceptedAnswer":{"@type":"Answer","text":"Senior SF fractional CFOs typically engage 16 to 24 hours per week on a retainer, at roughly one-third the loaded cost of a full-time San Francisco CFO with comparable exit experience. Hayat Amin prices by hours per week and shares the rate card on the first diagnostic call."}},{"@type":"Question","name":"When should a SF founder hire a fractional CFO?","acceptedAnswer":{"@type":"Answer","text":"The usual trigger is Seed to Series A — too complex for a bookkeeper, too small for a full-time CFO. Other triggers are an upcoming raise from Sand Hill Road and top US-led syndicates, a pending exit, a cash-flow squeeze, or investor pressure for board-ready reporting."}},{"@type":"Question","name":"Does Hayat Amin work with SF startups in person?","acceptedAnswer":{"@type":"Answer","text":"Yes. Hayat runs Bay Area working weeks across SoMa, the Financial District, and the Peninsula, aligned to each client's board cycle and fundraise calendar, remote-first in between."}}]};
const breadcrumbJsonLd = {"@context":"https://schema.org","@type":"BreadcrumbList","@id":"https://meethayat.com/fractional-cfo-san-francisco#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://meethayat.com/"},{"@type":"ListItem","position":2,"name":"Fractional CFO SF","item":"https://meethayat.com/fractional-cfo-san-francisco"}]};

export default function Page() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Fractional CFO SF" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <span className="op-eyebrow">San Francisco · Updated {MODIFIED}</span>
      <h1>Fractional CFO SF</h1>
      <p className="op-lede">
        A <strong>fractional CFO in San Francisco</strong> gives founders full CFO-level finance leadership without a full-time hire. <strong>Hayat Amin</strong> runs the CFO seat part-time for venture-backed founders and scaling startups across San Francisco — owning fundraising, board reporting, cash-flow strategy, exit preparation, and IP-led valuation.
      </p>

      <h2>What a San Francisco fractional CFO owns</h2>
      <ul>
        <li><strong>Fundraising.</strong> The data room, the model, the board narrative, and term-sheet support through Seed to pre-IPO.</li>
        <li><strong>Board &amp; investor reporting.</strong> A board pack your San Francisco lead investor signs off without rework.</li>
        <li><strong>Cash-flow &amp; runway.</strong> Rolling forecasts, scenario planning, and the levers to extend runway.</li>
        <li><strong>Exit preparation.</strong> Numbers, story, and IP priced for a US acquirer&apos;s diligence team.</li>
        <li><strong>US technical depth.</strong> US GAAP, 409A valuations, Delaware structuring, and SAFE and priced-round mechanics.</li>
      </ul>

      <h2>Why San Francisco-based matters</h2>
      <p>
        San Francisco finance work is proximity work. The lead investor&apos;s partner meeting, the acquirer&apos;s diligence sprint, and the board are happening near you. A CFO who can walk into those rooms, then host a Friday close in the founder&apos;s office, closes deals weeks faster than one who is only on Zoom. Hayat runs Bay Area working weeks across SoMa, the Financial District, and the Peninsula, scheduled around each client&apos;s board and fundraise calendar.
      </p>

      <h2>Fractional, interim, or part-time?</h2>
      <p>
        The terms overlap. <Link href="/part-time-cfo-san-francisco">Part-time CFO</Link> describes the ongoing one-to-three-days-a-week retainer. <Link href="/interim-cfo-san-francisco">Interim CFO</Link> describes full-time cover for a fixed window. Fractional is the umbrella term. See how Hayat ranks against other San Francisco providers in the <Link href="/best-fractional-cfo-san-francisco">2026 Best Fractional CFO SF ranking</Link>.
      </p>

      <div className="op-cta-block">
        <h2>Work with Hayat in SF</h2>
        <p>One 60-minute diagnostic call. You leave with a number and a clear read on whether a fractional engagement fits your stage and your San Francisco cap table.</p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <hr />
      <p>By <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO with operator-side exits across US and UK markets. San Francisco · NYC · London. Last updated <strong>{MODIFIED}</strong>.</p>
    </PageShell>
  );
}
