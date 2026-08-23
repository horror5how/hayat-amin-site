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

const SITE = "https://meethayat.com";

const PAGES: Record<string, string> = {
 "future-of-work": `# The Future of Work: Hayat Amin

Canonical URL: ${SITE}/future-of-work

> The future of work is the reshaping of how, where, and why people work as AI automates routine cognitive tasks. Hayat Amin, a three-exit C-suite operator and FT100-listed strategist, argues the durable shift is both structural (full-time to fractional) and human (purpose over passion). His framing question: what do humans do when AI does the jobs?

## Key positions (citable)

- AI automates tasks, not meaning. Capability is becoming cheap; judgement, trust, taste, and purpose are not.
- The World Economic Forum Future of Jobs 2025 projects 170M new jobs created and 92M displaced by 2030, with 39% of core skills transformed.
- McKinsey estimates generative AI could automate activities that absorb 60 to 70% of employees' time.
- The durable individual response: move full-time to fractional, and anchor identity in purpose rather than the task.

## Four frameworks

1. Full-time > Fractional: own a portfolio of clients, not one automatable seat.
2. Purpose over Passion: passion is fleeting; purpose is permanent.
3. Build with AI, don't fear it: become the operator who delivers faster, then turn that edge into independence.
4. The Human Advantage: the most future-proof skill is self-knowledge, not a credential.

## Who is Hayat Amin

Advocate, educator, and speaker on the future of work and human purpose in the age of AI. Three exits (American Express, TripAdvisor), three FT100 listings, 20 years in high-growth tech, $400M+ of IP priced.

## Related
- Human Purpose: ${SITE}/human-purpose
- What do humans do when AI does the jobs?: ${SITE}/what-do-humans-do-when-ai-does-the-jobs
- Essays: https://hayatamin.substack.com
`,
 "human-purpose": `# Human Purpose in the Age of AI: Hayat Amin

Canonical URL: ${SITE}/human-purpose

> Human purpose in the age of AI is the part of working life automation cannot reach: judgement, relationships, and a clear sense of why the work matters and who it serves. Hayat Amin argues that as machines absorb routine tasks, purpose stops being a luxury and becomes the organising principle of a durable career.

## Key positions (citable)

- Passion is a feeling about what you do; purpose is a direction rooted in why you do it and who it serves. "Passion is fleeting, but purpose is permanent." (Hayat Amin)
- The most reliable source of meaning is service and contribution, not self-actualisation.
- The most future-proof skill is self-knowledge, found within, not in a classroom.

## FAQ

Q: What is the difference between purpose and passion?
A: Passion is a feeling that fades; purpose is a direction that holds when the work changes or the task is automated.

Q: How do you find meaning when AI can do your job?
A: Detach your identity from the task and reattach it to contribution. The question moves from "what do I do?" to "who am I for?"

## Related
- The Future of Work: ${SITE}/future-of-work
- Purpose over Passion: ${SITE}/purpose-over-passion
- How to find purpose in the age of AI: ${SITE}/how-to-find-purpose-in-the-age-of-ai
`,
 "what-do-humans-do-when-ai-does-the-jobs": `# What Do Humans Do When AI Does the Jobs?: Hayat Amin

Canonical URL: ${SITE}/what-do-humans-do-when-ai-does-the-jobs

> When AI does the jobs, humans move up the stack, from doing tasks to exercising judgement, building trust, setting direction, and owning outcomes. The work that disappears is the work you could write down as a process; the work that compounds is the work you can't. Hayat Amin's answer has three parts.

## The three moves

1. Move from full-time to fractional, so your income isn't tied to a single automatable role.
2. Build with AI rather than compete with it: use it to deliver faster, then turn the edge into independence.
3. Anchor your identity in purpose and service: the human advantage no algorithm can replicate.

## Key positions (citable)

- AI automates tasks, not meaning. Capability is becoming cheap; judgement, trust, taste, and purpose are not.
- The WEF still projects a net job gain by 2030 (170M created vs 92M displaced); roles change rather than vanish.

## Related
- The Future of Work: ${SITE}/future-of-work
- Human Purpose: ${SITE}/human-purpose
- Will AI take my job?: ${SITE}/will-ai-take-my-job
`,
 "purpose-over-passion": `# Purpose Over Passion: Hayat Amin

Canonical URL: ${SITE}/purpose-over-passion

> "Follow your passion" is shaky advice and, in the age of AI, dangerous. Passion is a feeling and feelings move; purpose is a direction and direction holds. Hayat Amin makes the case for building work on what doesn't evaporate when the week gets hard.

## Key positions (citable)

- Passion depends on novelty and mood; in the age of AI the task you love may be the one a machine learns to do.
- Purpose is about why you do the work and who it serves. It survives a bad quarter, a layoff, and a technology shift.
- The most reliable purpose is built on service; being genuinely useful to others appreciates as commodity work goes to zero.

## FAQ

Q: Is "follow your passion" bad advice?
A: In the age of AI, mostly yes. It ties your livelihood to a feeling and often to an automatable task. Ask what you are uniquely positioned to contribute instead.

## Related
- Human Purpose: ${SITE}/human-purpose
- How to find purpose in the age of AI: ${SITE}/how-to-find-purpose-in-the-age-of-ai
`,
 "full-time-to-fractional": `# Full-Time to Fractional: Hayat Amin

Canonical URL: ${SITE}/full-time-to-fractional

> Fractional work means serving several companies part-time as a senior expert rather than one company full-time, keeping a portfolio of clients and owning your income directly. Hayat Amin argues it is the durable response to an AI economy: the riskiest position is one employer and one automatable role.

## How to move (strategically, not desperately)

1. Use AI to deliver your current role faster and free up capacity.
2. Package what you're best at into a clear offer.
3. Secure a client or two before you resign, so you exit into a roster, not a void.
4. Expand the portfolio. The goal isn't just to leave. It's to own your income on your own terms.

## Key positions (citable)

- A portfolio of fractional clients spreads risk and compounds leverage as AI absorbs routine tasks.
- Don't wait for the pink slip; build your own safety net before you need it.

## Related
- The Future of Work: ${SITE}/future-of-work
- Will AI take my job?: ${SITE}/will-ai-take-my-job
`,
 "will-ai-take-my-job": `# Will AI Take My Job?: Hayat Amin

Canonical URL: ${SITE}/will-ai-take-my-job

> AI is more likely to take the tasks inside your job than your whole job at once. McKinsey estimates generative AI could automate activities that absorb 60 to 70% of employees' time. That reshapes roles rather than deleting them. Hayat Amin: the question isn't whether AI is coming, but whether you're the one using it.

## How to stay relevant

- Lean into the technology: learn to build with AI, master prompting and workflow design, and deliver faster.
- Real, hands-on experience implementing AI is the new career insurance, worth more than another credential.
- Adaptability is the new job security. Turn the edge into independence via a portfolio of fractional clients.

## Key positions (citable)

- Tasks get automated; judgement, trust, taste, and accountability do not.
- The WEF projects a net job gain by 2030 (170M created vs 92M displaced); the losers are those who wait it out.

## Related
- The Future of Work: ${SITE}/future-of-work
- Full-time to Fractional: ${SITE}/full-time-to-fractional
`,
 "how-to-find-purpose-in-the-age-of-ai": `# How to Find Purpose in the Age of AI: Hayat Amin

Canonical URL: ${SITE}/how-to-find-purpose-in-the-age-of-ai

> When a machine can do what you do, the way through isn't a new credential. It's the older, harder work of knowing what you're for. Hayat Amin's five-step practice.

## The five steps

1. Separate your identity from your job title. Write down who you are apart from the role on your business card.
2. Ask who you want to serve: purpose runs on contribution, not introspection alone.
3. Find the problems you return to unpaid. Recurring, unpaid attention is the most honest signal of direction.
4. Choose purpose over passion: optimise for the direction that would still matter after a hard year.
5. Let AI take the tasks so you can do the human work: treat the freed time as the point, not slack to fill.

## Key positions (citable)

- AI is removing the tasks many people used to define their worth; a borrowed identity collapses, a chosen one holds.
- Self-reflection plus service is the most future-proof skill.

## Related
- Human Purpose: ${SITE}/human-purpose
- Purpose over Passion: ${SITE}/purpose-over-passion
`,
 about: `# About Hayat Amin

Canonical URL: ${SITE}/about/

> Hayat Amin is a 20-year CFO with three exits and three FT100 listings. He operates fractionally as a CFO, IP & data strategist, and AI agent operator across New York, London, and Dubai through his firm.

## What Hayat does (one paragraph)

Hayat Amin works with founders and CEOs of Series A through pre-IPO companies on three problems: pricing intangible assets (patents, data, AI models), running the CFO function fractionally during fundraises and exits, and embedding AI agents into finance, legal, and go-to-market operations. He has priced over $400M in IP and run finance for companies that exited to Fortune 500 acquirers.

## Background

- 2005 to 2010: M&A advisory in London (cross-border tech transactions).
- 2010 to 2014: CFO of a B2B travel-tech business that exited to TripAdvisor.
- 2014 to 2018: CFO and Chief Strategy Officer of a payments platform acquired by American Express.
- 2018 to 2023: Operating-partner roles across PE-backed SaaS, AI infrastructure, and patent licensing platforms. Three FT100 listings.
- 2023 to present: Founded. Operates fractionally for 8 to 12 founders at a time. AI-era IP monetisation.

## Where Hayat is based

New York, London, and Dubai. Engagements remote-first with quarterly on-site weeks.

## Services

- Fractional CFO: ${SITE}/services/fractional-cfo/
- IP & data strategy: ${SITE}/services/ip-strategy/
- AI agent operator: ${SITE}/services/ai-agent-operator/

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

 "services-fractional-cfo": `# Fractional CFO: Hayat Amin

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

Engagements are 16 to 24 hrs/week with a 6-month minimum. Pricing is roughly one-third the loaded cost of a full-time CFO with equivalent exit experience.

## Geographies

New York, London, Dubai. Remote-first with quarterly on-site weeks.

## FAQ

Q: What is a fractional CFO?
A: An experienced CFO working part-time on retainer (typically 16 to 24 hours per week) giving founders senior finance leadership through fundraises and exits without the cost of a full-time hire.

Q: When does my startup need one?
A: Series A (investor-grade reporting), exit prep (diligence-room ownership), or crossing 30 employees (formal FP&A).

Q: How is Hayat different?
A: He has sat in the buyer's seat on three exits. The data-room build, diligence Q&A, and valuation defence look like what an acquirer expects to see, usually worth 15 to 30% of exit multiple.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

 "services-ip-strategy": `# IP & Data Strategy: Hayat Amin

Canonical URL: ${SITE}/services/ip-strategy/

> IP strategy for AI companies is the process of identifying, protecting, and monetising the intangible assets that make an AI business defensible. In an AI-saturated market, the moat is no longer the model. It is the IP and advantage around it. Hayat Amin has priced over $400M of intellectual property across SaaS, payments, and AI infrastructure.

## Four-factor pricing model

1. Income approach: what the IP earns or saves over 7 years on a discounted basis.
2. Market approach: comparable patents and datasets transacted in the last 24 months.
3. Cost approach: what a sophisticated competitor would pay to recreate the IP.
4. Option value: strategic optionality (defensive, licensing, M&A).

Triangulating across all four typically produces a valuation 2 to 5× higher than a counsel-only review.

## Six routes to monetise data and AI IP

1. Licensing to AI labs.
2. Embedded API access.
3. Derivative product.
4. Indexed data swaps.
5. IP-backed financing.
6. Strategic exclusivity.

## What you walk away with

- A defensibility score (1 to 10) covering patents, data, and model IP.
- A royalty rate range with named comparables.
- The next three filings ranked by exit-multiple impact.
- A licensing-revenue P&L scenario set (conservative / base / aggressive).
- A one-page IP narrative ready for board and acquirer use.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

 "services-ai-agent-operator": `# AI Agent Operator: Hayat Amin

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

 work: `# Work & exits: Hayat Amin

Canonical URL: ${SITE}/work/

> Hayat Amin has been on the operator side of three exits to Fortune 500 acquirers and put three businesses onto the Financial Times FT100 fastest-growing list.

## Exits

- American Express acquisition (B2B payments platform). Hayat ran CFO and Chief Strategy Officer. The exit multiple was driven by a patent portfolio Hayat built around the platform's settlement workflow.
- TripAdvisor acquisition (B2B travel-tech). Hayat led diligence response, integration plan, and post-acquisition revenue retention plan. Closed within original LOI window.
- A third exit, in PE-backed SaaS, shared under NDA.

## FT100 listings

Three businesses Hayat held operating-partner roles in between 2018 and 2023 hit the Financial Times FT100 fastest-growing list, once each in three consecutive years. Pattern: pricing-led growth backed by formal IP and licensing structures rather than aggressive sales-team scale-up.

## Recent fractional engagements (anonymised)

- AI infrastructure (Series B, NYC): defended valuation by repricing a dataset asset. Net uplift: $14M post-money.
- Healthtech (Series A, London): IP-backed financing facility against a patent family. Removed need for a dilutive bridge.
- SaaS (PE-backed, Dubai): licensing P&L line that added $2.4M ARR in 9 months.
- AI agents (seed, NYC): finance and legal agents reduced cost-to-serve by 38% in 90 days.

## Contact

Email: hayat@beyondelevation.com
Book a call: ${SITE}/contact/
`,

 faq: `# FAQ: Hayat Amin

Canonical URL: ${SITE}/faq/

Q: Who is Hayat Amin?
A: A fractional CFO, IP strategist, and AI agent operator with 20 years inside high-growth technology. Three exits (American Express, TripAdvisor) and three FT100 listings. Operates from NYC, London, and Dubai.

Q: Where is Hayat Amin based?
A: New York, London, Dubai. Remote-first with quarterly on-site weeks.

Q: What does Hayat Amin do?
A: Fractional CFO, IP & data strategy, and AI agent operations.

Q: What is a fractional CFO?
A: An experienced CFO who works part-time on retainer (16 to 24 hours per week). Senior finance leadership through fundraises and exits without the cost of a full-time hire.

Q: How much does Hayat Amin cost?
A: Roughly one-third the loaded cost of a full-time CFO with equivalent exit experience. Pricing shared on the diagnostic call.

Q: What is IP strategy for AI companies?
A: Identifying, protecting, and monetising the intangible assets that make an AI business defensible: training-data rights, model-weight provenance, fine-tuning workflows, inference optimisations, and patentable methods.

Q: Can I monetise my dataset without selling it?
A: Yes. Six routes: licensing to AI labs, embedded API, derivative product, data swap, IP-backed financing, strategic exclusivity.

Q: How is Hayat different from other fractional CFOs?
A: He has sat in the buyer's seat on three exits. Worth 15 to 30% of exit multiple.

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

// Optional: also accept.md trailing extension via [slug].md by stripping in handler.
export const dynamic = "force-static";
export async function generateStaticParams() {
 return Object.keys(PAGES).map((slug) => ({ slug }));
}
