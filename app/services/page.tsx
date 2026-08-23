import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";

export const metadata: Metadata = {
  title: "Services: Tech CFO & Strategist, AI Agent Operator",
  description:
    "Two services Hayat Amin runs fractionally: the tech CFO and strategy function during fundraises and exits, and AI agent operations run by an ex-C-suite operator.",
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    type: "website",
    url: `${SITE}/services`,
    title: "Services by Hayat Amin",
    description:
      "Tech CFO & strategy and AI agent operations for Series A through pre-IPO founders.",
  },
};

export default function ServicesPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}>
      <span className="op-eyebrow">Services</span>
      <h1>Two services. One operator. Hire fractionally.</h1>
      <p className="op-lede">
        Hayat Amin runs two services fractionally for founders of Series A
        through pre-IPO companies: the tech CFO &amp; strategy function, and
        AI agent operations. Engagements last 4 weeks to 18 months. Defaults are
        16 to 24 hours per week, remote-first, with quarterly on-site weeks in NYC,
        London, or Dubai.
      </p>

      <h2>The two services in one sentence each</h2>
      <ul>
        <li>
          <strong>Tech CFO &amp; Strategist.</strong> Run finance and strategy
          through a fundraise, exit, or post-acquisition integration without a
          full-time hire; includes IP &amp; data strategy that prices and
          monetises the assets you already own.{" "}
          <Link href="/services/fractional-cfo">Read the service spec →</Link>
        </li>
        <li>
          <strong>AI agent operator.</strong> An ex-operator and C-suite
          executive, not a developer: processes, automations, AI agents, agentic
          workflows, live databases, and real-time reports, deployed with
          measured cost-to-serve reduction and revenue lift.{" "}
          <Link href="/services/ai-agent-operator">Read the service spec →</Link>
        </li>
      </ul>

      <h2>Who hires Hayat</h2>
      <ul>
        <li>Founders raising a Series A through Series D.</li>
        <li>CEOs of pre-IPO companies preparing exit diligence.</li>
        <li>PE-backed CEOs running operational improvement plans pre-resale.</li>
        <li>AI startups that need to price model-weight IP for their first major contract.</li>
        <li>CEOs who want AI running real processes without hiring a dev team or agency.</li>
      </ul>

      <h2>How engagements run</h2>
      <p>
        The default starting point is a 60-minute diagnostic. No deck, no
        proposal. One call, one plan. After that, engagements take one of these
        shapes:
      </p>

      <div className="op-card-grid">
        <div className="op-card">
          <span className="op-card-eyebrow">Format A</span>
          <h3>Fractional retainer</h3>
          <p>16 to 24 hrs/week. 6-month minimum. Full operating presence on Slack, Notion, and weekly board reviews.</p>
        </div>
        <div className="op-card">
          <span className="op-card-eyebrow">Format B</span>
          <h3>Strategy sprint</h3>
          <p>4 to 8 weeks. Fixed scope: IP audit, valuation, or fundraise readiness. Deliverable + handover.</p>
        </div>
        <div className="op-card">
          <span className="op-card-eyebrow">Format C</span>
          <h3>Exit-prep tour</h3>
          <p>3 to 9 months. Full diligence-room build, IP claim mapping, and CFO-level data-room ownership.</p>
        </div>
        <div className="op-card">
          <span className="op-card-eyebrow">Format D</span>
          <h3>Board advisory</h3>
          <p>Quarterly board attendance plus monthly 1:1 with the CEO and lead investor.</p>
        </div>
      </div>

      <h2>What you get in the first 30 days</h2>
      <ul>
        <li>A finance function audit: where the money leaks and what to fix first.</li>
        <li>A map of the processes AI should be running, ranked by P&amp;L impact.</li>
        <li>The first automation or agent live inside your business.</li>
        <li>A 90-day operating plan signed off by you and your lead investor.</li>
      </ul>

      <h2>Geographies</h2>
      <p>
        Hayat operates from{" "}
        <Link href="/locations/new-york">New York</Link>,{" "}
        <Link href="/locations/london">London</Link>, and{" "}
        <Link href="/locations/dubai">Dubai</Link>. Most engagements are remote with
        quarterly on-site weeks scheduled around your board cycle.
      </p>

      <div className="op-cta-block">
        <h2>Start with the 60-minute diagnostic</h2>
        <p>One call. One number. Then decide if a longer engagement makes sense.</p>
        <Link href="/contact">Book the diagnostic →</Link>
      </div>
    </PageShell>
  );
}
