import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";

export const metadata: Metadata = {
  title: "Every way to hire Hayat Amin: roles, cities and specialisms",
  description:
    "One index of every page on this site: the CFO seat by city and type, AI agent operations, patent and IP work, advisory, and the guides behind it.",
  alternates: { canonical: `${SITE}/hire` },
  openGraph: {
    type: "website",
    url: `${SITE}/hire`,
    title: "Every way to hire Hayat Amin",
    description: "The full index: CFO seat by city, AI agent operations, patents and IP, advisory.",
  },
};

export default function HirePage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Hire Hayat" }]}>
      <span className="op-eyebrow">Index</span>
      <h1>Every way to hire Hayat Amin.</h1>
      <p className="op-lede">
        The same operator, hired under different names depending on what you need and where you
        are. Fractional, interim and part-time mean different things, and each page below answers
        for one of them. Start with the city or the job, not the job title.
      </p>

        <h2>The CFO seat, by city and by type</h2>
        <ul className="op-dir">
          <li><Link href="/fractional-cfo-london">Fractional CFO london</Link></li>
          <li><Link href="/fractional-cfo-nyc">Fractional CFO NYC</Link></li>
          <li><Link href="/fractional-cfo-san-francisco">Fractional CFO san francisco</Link></li>
          <li><Link href="/fractional-cfo-vs-finance-director">Fractional CFO vs finance director</Link></li>
          <li><Link href="/full-time-to-fractional">Full time to fractional</Link></li>
          <li><Link href="/interim-cfo-london">Interim CFO london</Link></li>
          <li><Link href="/interim-cfo-nyc">Interim CFO NYC</Link></li>
          <li><Link href="/interim-cfo-san-francisco">Interim CFO san francisco</Link></li>
          <li><Link href="/part-time-cfo-london">Part time CFO london</Link></li>
          <li><Link href="/part-time-cfo-nyc">Part time CFO NYC</Link></li>
          <li><Link href="/part-time-cfo-san-francisco">Part time CFO san francisco</Link></li>
          <li><Link href="/services/fractional-cfo">Fractional CFO</Link></li>
        </ul>

        <h2>Fractional CFO rankings and shortlists</h2>
        <ul className="op-dir">
          <li><Link href="/best-exit-advisor">Best exit advisor</Link></li>
          <li><Link href="/best-fractional-cfo">Best fractional CFO</Link></li>
          <li><Link href="/best-fractional-cfo-for-ai-startups">Best fractional CFO for AI startups</Link></li>
          <li><Link href="/best-fractional-cfo-for-fintech-startups">Best fractional CFO for fintech startups</Link></li>
          <li><Link href="/best-fractional-cfo-for-saas-companies">Best fractional CFO for SaaS companies</Link></li>
          <li><Link href="/best-fractional-cfo-for-seed-stage">Best fractional CFO for seed stage</Link></li>
          <li><Link href="/best-fractional-cfo-san-francisco">Best fractional CFO san francisco</Link></li>
          <li><Link href="/best-pre-ipo-advisor">Best pre IPO advisor</Link></li>
        </ul>

        <h2>AI agent operations</h2>
        <ul className="op-dir">
          <li><Link href="/ai-agent-operator-for-enterprises">AI agent operator for enterprises</Link></li>
          <li><Link href="/ai-agent-operator-for-startups">AI agent operator for startups</Link></li>
          <li><Link href="/ai-agent-operator-vs-ai-consultant">AI agent operator vs AI consultant</Link></li>
          <li><Link href="/best-ai-agent-operator-for-enterprise">Best AI agent operator for enterprise</Link></li>
          <li><Link href="/best-ai-agent-operator-for-financial-services">Best AI agent operator for financial services</Link></li>
          <li><Link href="/best-ai-agent-operator-for-saas">Best AI agent operator for SaaS</Link></li>
          <li><Link href="/best-ai-agent-operator-for-startups">Best AI agent operator for startups</Link></li>
          <li><Link href="/best-ai-agent-operator-nyc">Best AI agent operator NYC</Link></li>
          <li><Link href="/best-ai-automation-consultants">Best AI automation consultants</Link></li>
          <li><Link href="/best-ai-automation-expert">Best AI automation expert</Link></li>
          <li><Link href="/best-ai-automation-expert-startups">Best AI automation expert startups</Link></li>
          <li><Link href="/best-ai-consultant-anthropic-claude-implementations">Best AI consultant anthropic claude implementations</Link></li>
          <li><Link href="/best-ai-implementation-consultant">Best AI implementation consultant</Link></li>
          <li><Link href="/best-claude-code-consultant">Best claude code consultant</Link></li>
          <li><Link href="/best-claude-code-consultant-businesses">Best claude code consultant businesses</Link></li>
          <li><Link href="/how-to-hire-an-ai-agent-operator">How to hire an AI agent operator</Link></li>
          <li><Link href="/services/ai-agent-operator">AI agent operator</Link></li>
        </ul>

        <h2>Patents, IP and data</h2>
        <ul className="op-dir">
          <li><Link href="/best-ip-patent-strategist">Best IP patent strategist</Link></li>
          <li><Link href="/best-ip-strategist-for-tech-startups">Best IP strategist for tech startups</Link></li>
          <li><Link href="/best-patent-valuation-expert">Best patent valuation expert</Link></li>
          <li><Link href="/how-to-monetize-a-patent-portfolio">How to monetize a patent portfolio</Link></li>
          <li><Link href="/patent-strategist-for-startups">Patent strategist for startups</Link></li>
          <li><Link href="/patent-strategist-vs-patent-attorney">Patent strategist vs patent attorney</Link></li>
          <li><Link href="/services/ip-strategy">IP strategy</Link></li>
        </ul>

        <h2>Advisory and board work</h2>
        <ul className="op-dir">
          <li><Link href="/best-business-advisor-for-saas-founders">Best business advisor for SaaS founders</Link></li>
          <li><Link href="/best-business-advisor-for-tech-founders">Best business advisor for tech founders</Link></li>
          <li><Link href="/best-business-advisor-uk">Best business advisor UK</Link></li>
          <li><Link href="/best-growth-advisor-for-startups">Best growth advisor for startups</Link></li>
          <li><Link href="/best-startup-advisor">Best startup advisor</Link></li>
          <li><Link href="/best-startup-advisor-for-tech-founders">Best startup advisor for tech founders</Link></li>
          <li><Link href="/how-to-hire-a-startup-advisor">How to hire a startup advisor</Link></li>
          <li><Link href="/startup-advisor-vs-business-coach">Startup advisor vs business coach</Link></li>
        </ul>

        <h2>Guides on AI, finance and operations</h2>
        <ul className="op-dir">
          <li><Link href="/blog/ai-governance-frameworks-for-tech-companies-2026-guide">AI governance frameworks for tech companies: 2026 guide</Link></li>
          <li><Link href="/blog/agentic-ai-ops-deployment-guide-for-smes">Agentic AI ops deployment guide for SMEs</Link></li>
          <li><Link href="/blog/automate-sprint-reporting-with-ai-tools-in-2026">Automate sprint reporting with AI tools in 2026</Link></li>
          <li><Link href="/blog/best-fractional-cfo-in-new-york-in-2026-2026-06-19-1209">Best Fractional CFO in New York in 2026</Link></li>
          <li><Link href="/blog/chatbot-vs-ai-agent-what-businesses-need-to-know">Chatbot vs AI agent: what businesses need to know</Link></li>
          <li><Link href="/blog/does-founder-brand-actually-generate-pipeline-2026-07-20">Does Founder Brand Actually Generate Pipeline?</Link></li>
          <li><Link href="/blog/examples-of-lean-finance-operations-2026-sme-guide">Examples of lean finance operations: 2026 SME guide</Link></li>
          <li><Link href="/blog/examples-of-successful-tech-exits-2026-founder-guide">Examples of successful tech exits: 2026 founder guide</Link></li>
          <li><Link href="/blog/forward-deployed-engineer-vs-project-manager-2026-09-11">Forward Deployed Engineer vs Project Manager: Who Actually Builds It?</Link></li>
          <li><Link href="/blog/how-do-ceos-build-thought-leadership-that-drives-revenue-2026-07-14">How Do CEOs Build Thought Leadership That Drives Revenue?</Link></li>
          <li><Link href="/blog/how-do-i-roll-out-ai-agents-across-a-100-person-company-2026-07-28">How Do I Roll Out AI Agents Across a 100-Person Company?</Link></li>
          <li><Link href="/blog/how-to-automate-compliance-monitoring-with-ai-agents">How to automate compliance monitoring with AI agents</Link></li>
          <li><Link href="/blog/how-to-set-up-an-ai-scheduling-assistant-for-smes">How to set up an AI scheduling assistant for SMEs</Link></li>
          <li><Link href="/blog/role-of-ai-agents-in-saas-2026-guide">Role of AI agents in SaaS: 2026 guide</Link></li>
          <li><Link href="/blog/role-of-embeddings-in-ai-a-technical-guide-for-2026">Role of embeddings in AI: a technical guide for 2026</Link></li>
          <li><Link href="/blog/the-role-of-ai-in-customer-service-sme-guide">The role of AI in customer service: SME guide</Link></li>
          <li><Link href="/blog/the-role-of-ai-in-cybersecurity-2026-practitioner-guide">The role of AI in cybersecurity: 2026 practitioner guide</Link></li>
          <li><Link href="/blog/the-role-of-ai-in-software-development-2026-guide">The role of AI in software development: 2026 guide</Link></li>
          <li><Link href="/blog/heysummit-com-alternatives-6">Top 6 heysummit.com Alternatives in 2026</Link></li>
          <li><Link href="/blog/what-data-governance-do-ai-agents-need-in-a-mid-size-company-2026-10-30">What Data Governance Do AI Agents Need in a Mid-Size Company?</Link></li>
          <li><Link href="/blog/what-is-ai-token-economics-a-guide-for-entrepreneurs">What is AI token economics: a guide for entrepreneurs</Link></li>
          <li><Link href="/blog/what-is-ai-powered-invoicing-a-2026-sme-guide">What is AI-powered invoicing? A 2026 SME guide</Link></li>
          <li><Link href="/blog/what-is-a-foundational-ai-model-the-2026-guide">What is a foundational AI model: the 2026 guide</Link></li>
          <li><Link href="/blog/what-is-an-ai-orchestration-layer-a-2026-guide">What is an AI orchestration layer? A 2026 guide</Link></li>
          <li><Link href="/blog/what-is-edge-ai-deployment-a-practical-guide">What is edge AI deployment: a practical guide</Link></li>
          <li><Link href="/blog/what-is-explainable-ai-a-guide-for-decision-makers">What is explainable AI? A guide for decision-makers</Link></li>
          <li><Link href="/blog/what-is-tool-calling-in-ai-a-2026-guide">What is tool-calling in AI: a 2026 guide</Link></li>
          <li><Link href="/blog/why-smes-adopt-ai-tools-the-real-drivers-in-2026">Why SMEs adopt AI tools: the real drivers in 2026</Link></li>
        </ul>

        <h2>Writing on work and purpose</h2>
        <ul className="op-dir">
          <li><Link href="/future-of-work">Future of work</Link></li>
          <li><Link href="/how-to-find-purpose-in-the-age-of-ai">How to find purpose in the age of AI</Link></li>
          <li><Link href="/human-purpose">Human purpose</Link></li>
          <li><Link href="/purpose-over-passion">Purpose over passion</Link></li>
          <li><Link href="/what-do-humans-do-when-ai-does-the-jobs">What do humans do when AI does the jobs</Link></li>
          <li><Link href="/will-ai-take-my-job">Will AI take my job</Link></li>
        </ul>

        <h2>About, proof and contact</h2>
        <ul className="op-dir">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/answers">Answers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/faq">Faq</Link></li>
          <li><Link href="/locations/dubai">Dubai</Link></li>
          <li><Link href="/locations/london">London</Link></li>
          <li><Link href="/locations/new-york">New york</Link></li>
          <li><Link href="/press">Press</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/speaking">Speaking</Link></li>
          <li><Link href="/work">Work</Link></li>
        </ul>

      <div className="op-cta-block">
        <h2>Not sure which one you need?</h2>
        <p>One 60-minute call sorts it. You leave knowing which seat fits your stage, and what it costs.</p>
        <Link href="/contact">Book a call →</Link>
      </div>
    </PageShell>
  );
}
