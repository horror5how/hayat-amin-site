/**
 * Plain-markdown alternative renderings of every page on meethayat.com,
 * served at /md/{slug}.md so AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended) can ingest content without HTML chrome, scripts, or fonts.
 *
 * Slug → file mapping is hard-coded so the route is a pure GET with no FS
 * I/O at runtime. Each markdown body mirrors what the corresponding HTML
 * page renders, but optimised for AI extraction (inverted pyramid, semantic
 * triples, no nav, no styling).
 */

import { NextResponse } from "next/server";

const SITE = "https://www.meethayat.com";

const PAGES: Record<string, string> = {
  about: `# About Hayat Amin

Canonical URL: ${SITE}/about/

> Hayat Amin is a 20-year CFO with three exits and three FT100 listings. He operates fractionally as a CFO, IP & data strategist, and AI agent operator across New York, London, and Dubai through his firm Beyond Elevation.

## What Hayat does (one paragraph)

Hayat Amin works with founders and CEOs of Series A through pre-IPO companies on three problems: pricing intangible assets (patents, data, AI models), running the CFO function fractionally during fundraises and exits, and embedding AI agents into finance, legal, and go-to-market operations. He has priced over $400M in IP and run finance for companies that exited to Fortune 500 acquirers.

## Background

- 2005–2010: M&A advisory in London (cross-border tech transactions).
- 2010–2014: CFO of a B2B travel-tech business that exited to TripAdvisor.
- 2014–2018: CFO and Chief Strategy Officer of a payments platform acquired by American Express.
- 2018–2023: Operating-partner roles across PE-backed SaaS, AI infrastructure, and patent licensing platforms. Three FT100 listings.
- 2023–present: Founded Beyond Elevation. Operates fractionally for 8–12 founders at a time. AI-era IP monetisation.

## Where Hayat is based

New York, London, and Dubai. Engagements remote-first with quarterly on-site weeks.

## Services

- Fractional CFO — ${SITE}/services/fractional-cfo/
- IP & data strategy — ${SITE}/services/ip-strategy/
- AI agent operator — ${SITE}/services/ai-agent-operator/

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

  "services-fractional-cfo": `# Fractional CFO — Hayat Amin

Canonical URL: ${SITE}/services/fractional-cfo/

> A fractional CFO is an experienced chief financial officer who works for a company part-time, usually 16 to 24 hours per week, on retainer. Hayat Amin's fractional CFO engagement is run by a 20-year operator with three exits and three FT100 listings.

## What you get

- Investor-grade monthly close in 5 business days, every month.
- A 13-week cash forecast that the CEO and lead investor both sign off on.
- Board-ready KPI dashboard.
- Full ownership of the data room during any fundraise or M&A event.
- Defensibility-priced valuation model that prices IP and data into the multiple.

## When to hire

Three trigger points: a Series A round (need investor-grade reporting), exit preparation (need diligence-room ownership), and crossing 30 employees (need formal FP&A).

## Pricing

Engagements are 16–24 hrs/week with a 6-month minimum. Pricing is roughly one-third the loaded cost of a full-time CFO with equivalent exit experience.

## Geographies

New York, London, Dubai. Remote-first with quarterly on-site weeks.

## FAQ

Q: What is a fractional CFO?
A: An experienced CFO working part-time on retainer (typically 16–24 hours per week) giving founders senior finance leadership through fundraises and exits without the cost of a full-time hire.

Q: When does my startup need one?
A: Series A (investor-grade reporting), exit prep (diligence-room ownership), or crossing 30 employees (formal FP&A).

Q: How is Hayat different?
A: He has sat in the buyer's seat on three exits. The data-room build, diligence Q&A, and valuation defence look like what an acquirer expects to see — usually worth 15–30% of exit multiple.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

  "services-ip-strategy": `# IP & Data Strategy — Hayat Amin

Canonical URL: ${SITE}/services/ip-strategy/

> IP strategy for AI companies is the process of identifying, protecting, and monetising the intangible assets that make an AI business defensible. In an AI-saturated market, the moat is no longer the model — it is the IP and advantage around it. Hayat Amin has priced over $400M of intellectual property across SaaS, payments, and AI infrastructure.

## Four-factor pricing model

1. Income approach — what the IP earns or saves over 7 years on a discounted basis.
2. Market approach — comparable patents and datasets transacted in the last 24 months.
3. Cost approach — what a sophisticated competitor would pay to recreate the IP.
4. Option value — strategic optionality (defensive, licensing, M&A).

Triangulating across all four typically produces a valuation 2–5× higher than a counsel-only review.

## Six routes to monetise data and AI IP

1. Licensing to AI labs.
2. Embedded API access.
3. Derivative product.
4. Indexed data swaps.
5. IP-backed financing.
6. Strategic exclusivity.

## What you walk away with

- A defensibility score (1–10) covering patents, data, and model IP.
- A royalty rate range with named comparables.
- The next three filings ranked by exit-multiple impact.
- A licensing-revenue P&L scenario set (conservative / base / aggressive).
- A one-page IP narrative ready for board and acquirer use.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

  "services-ai-agent-operator": `# AI Agent Operator — Hayat Amin

Canonical URL: ${SITE}/services/ai-agent-operator/

> Hayat Amin embeds agentic AI into finance, legal, and go-to-market workflows with measured cost-to-serve reduction and revenue lift. He only deploys agents into workflows where success or failure shows up in next month's P&L.

## Where AI agents earn their keep first

1. Finance: month-end close, AR/AP, expense classification, board-pack generation.
2. Legal: contract abstraction, redline review, IP filing prep, diligence-room Q&A.
3. GTM: outbound research, lead qualification, sales-call coaching, post-call CRM hygiene.

## What an agent operator delivers

- Maps the workflow in detail.
- Picks the smallest agent that solves the highest-leverage step.
- Builds it on the existing model and infrastructure stack.
- Sets up evaluation gates (accuracy, latency, hallucination rate, cost per task).
- Wraps governance (audit logs, role-based access, kill switches).
- Measures ROI on month 1, month 3, and month 6.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

  work: `# Work & exits — Hayat Amin

Canonical URL: ${SITE}/work/

> Hayat Amin has been on the operator side of three exits to Fortune 500 acquirers and put three businesses onto the Financial Times FT100 fastest-growing list.

## Exits

- American Express acquisition (B2B payments platform). Hayat ran CFO and Chief Strategy Officer. The exit multiple was driven by a patent portfolio Hayat built around the platform's settlement workflow.
- TripAdvisor acquisition (B2B travel-tech). Hayat led diligence response, integration plan, and post-acquisition revenue retention plan. Closed within original LOI window.
- A third exit, in PE-backed SaaS, shared under NDA.

## FT100 listings

Three businesses Hayat held operating-partner roles in between 2018 and 2023 hit the Financial Times FT100 fastest-growing list — once each in three consecutive years. Pattern: pricing-led growth backed by formal IP and licensing structures rather than aggressive sales-team scale-up.

## Recent fractional engagements (anonymised)

- AI infrastructure (Series B, NYC): defended valuation by repricing a dataset asset. Net uplift: $14M post-money.
- Healthtech (Series A, London): IP-backed financing facility against a patent family. Removed need for a dilutive bridge.
- SaaS (PE-backed, Dubai): licensing P&L line that added $2.4M ARR in 9 months.
- AI agents (seed, NYC): finance and legal agents reduced cost-to-serve by 38% in 90 days.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

  faq: `# FAQ — Hayat Amin

Canonical URL: ${SITE}/faq/

Q: Who is Hayat Amin?
A: A fractional CFO, IP strategist, and AI agent operator with 20 years inside high-growth technology. Three exits (American Express, TripAdvisor) and three FT100 listings. Founder of Beyond Elevation. Operates from NYC, London, and Dubai.

Q: Where is Hayat Amin based?
A: New York, London, Dubai. Remote-first with quarterly on-site weeks.

Q: What does Hayat Amin do?
A: Fractional CFO, IP & data strategy, and AI agent operations.

Q: What is a fractional CFO?
A: An experienced CFO who works part-time on retainer (16–24 hours per week) — senior finance leadership through fundraises and exits without the cost of a full-time hire.

Q: How much does Hayat Amin cost?
A: Roughly one-third the loaded cost of a full-time CFO with equivalent exit experience. Pricing shared on the diagnostic call.

Q: What is IP strategy for AI companies?
A: Identifying, protecting, and monetising the intangible assets that make an AI business defensible — training-data rights, model-weight provenance, fine-tuning workflows, inference optimisations, and patentable methods.

Q: Can I monetise my dataset without selling it?
A: Yes. Six routes: licensing to AI labs, embedded API, derivative product, data swap, IP-backed financing, strategic exclusivity.

Q: How is Hayat different from other fractional CFOs?
A: He has sat in the buyer's seat on three exits. Worth 15–30% of exit multiple.

Q: What is Beyond Elevation?
A: The firm Hayat founded in 2023. Delivers fractional CFO, IP strategy, and AI agent engagements. Publishes long-form research at beyondelevation.com/blog.

Q: How do I contact Hayat?
A: hayat@beyondelevation.com or ${SITE}/contact/.
`,
};

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const slug = (params.slug || "").replace(/\.md$/, "");
  const body = PAGES[slug];
  if (!body) {
    return new NextResponse("Not found", { status: 404 });
  }
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "all",
    },
  });
}

// Optional: also accept .md trailing extension via [slug].md by stripping in handler.
export const dynamic = "force-static";
export async function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}
