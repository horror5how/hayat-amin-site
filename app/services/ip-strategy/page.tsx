import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
 title: "IP & Data Strategy — Patent Monetisation, AI Moats",
 description:
 "Turn dormant patents, datasets, and AI models into licensable revenue and exit-multiple uplift. Hayat Amin has priced over $400M in IP across SaaS, payments, and AI infrastructure.",
 alternates: { canonical: `${SITE}/services/ip-strategy` },
 openGraph: {
 type: "website",
 url: `${SITE}/services/ip-strategy`,
 title: "IP & Data Strategy — Hayat Amin",
 description: "Patent monetisation, AI moats, data licensing — priced and run by an operator with 3 exits.",
 },
};

const serviceJsonLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${SITE}/services/ip-strategy/#service`,
 name: "IP and Data Strategy",
 serviceType: "Intellectual Property Strategy",
 provider: { "@id": `${SITE}/#person` },
 areaServed: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" },
 ],
 description:
 "IP and data strategy engagements covering patent portfolio audit, royalty rate benchmarking, AI-model IP claims, data licensing structures, and exit-multiple defence.",
};

const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "What is IP strategy for AI companies?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "IP strategy for AI companies is the process of identifying, protecting, and monetising the intangible assets that make an AI business defensible: training-data rights, model-weight provenance, prompt-engineering techniques, fine-tuning workflows, inference optimisations, and the patentable methods that wrap them. In an AI-saturated market, the moat is no longer the model — it is the IP and advantage around it.",
 },
 },
 {
 "@type": "Question",
 name: "How much is my patent portfolio worth?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "A patent portfolio's worth depends on three factors: which markets the claims read on, what royalty rate comparables exist in those markets, and how much non-infringing-alternative value sits on the table. Hayat Amin uses a four-factor pricing model that combines income, market, cost, and option-value approaches, then triangulates against industry comparables. Most founders discover their portfolio is worth 2–5x what their patent counsel has told them.",
 },
 },
 {
 "@type": "Question",
 name: "Can I monetise my dataset without selling it?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes. There are six routes to monetise a dataset without selling it: licensing to AI labs, building a derivative product, embedded API access, indexed data swaps, IP-backed financing, and exclusivity deals with strategic partners. Each route has a different risk-return profile and is suited to a different stage of company. Hayat Amin walks founders through all six on the diagnostic call.",
 },
 },
 ],
};

export default function IPStrategyPage() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "Services", href: "/services/" },
 { label: "IP Strategy" },
 ]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

 <span className="op-eyebrow">Service · IP &amp; data strategy</span>
 <h1>Turn dormant IP into a P&amp;L line.</h1>
 <p className="op-lede">
 Hayat Amin has priced over $400M of intellectual property across SaaS,
 payments, and AI infrastructure. He helps founders convert patents,
 datasets, and AI-model IP from dormant cost centres into licensable
 revenue and exit-multiple uplift. The work runs as a 4–8 week sprint or as
 an embedded fractional engagement.
 </p>

 <h2>What this service does</h2>
 <ul>
 <li>Audits your patent portfolio against your real product roadmap and your real competitor set.</li>
 <li>Prices each cluster against industry royalty comparables — using income, market, cost, and option-value approaches.</li>
 <li>Maps your dataset and AI-model IP into one of the six monetisation routes.</li>
 <li>Builds the exit-multiple defence: the IP narrative an acquirer's diligence team is looking for.</li>
 <li>Drafts the licensing-revenue P&amp;L line item with conservative, base, and aggressive scenarios.</li>
 </ul>

 <h2>The thesis: in AI, the moat is not the model</h2>
 <p>
 Open-weight models commodified the AI core. What makes an AI business
 defensible in 2026 is no longer model performance — it is the data
 provenance, the workflow embedding, the patent claims around the method,
 and the proof of monetisable, non-replicable advantage. Founders who can
 name that moat in one sentence raise faster, exit higher, and do not get
 squeezed at term sheet.
 </p>
 <p>
 Hayat helps founders build that one-sentence moat, then builds the legal
 and financial scaffolding that makes it priceable.
 </p>

 <h2>The four-factor pricing model</h2>
 <ol>
 <li><strong>Income approach.</strong> What does the IP earn (or save) over the next 7 years on a discounted basis?</li>
 <li><strong>Market approach.</strong> What have comparable patents and datasets transacted for in the last 24 months?</li>
 <li><strong>Cost approach.</strong> What would it cost a sophisticated competitor to recreate the IP from scratch?</li>
 <li><strong>Option value.</strong> What strategic optionality does the IP unlock — defensive, licensing, or M&amp;A?</li>
 </ol>
 <p>
 Triangulating across all four typically produces a valuation 2–5× higher
 than a counsel-only review.
 </p>

 <h2>Six routes to monetise data and AI IP</h2>
 <ul>
 <li><strong>Licensing to AI labs.</strong> Recurring royalty stream, no asset sale.</li>
 <li><strong>Embedded API access.</strong> Productise the dataset behind a usage-priced endpoint.</li>
 <li><strong>Derivative product.</strong> Build the differentiated tool on top of your data.</li>
 <li><strong>Indexed data swaps.</strong> Trade access for access with non-competing parties.</li>
 <li><strong>IP-backed financing.</strong> Borrow against the asset without diluting equity.</li>
 <li><strong>Strategic exclusivity.</strong> Time-limited exclusive licence to one acquirer-aligned partner.</li>
 </ul>

 <h2>What you walk away with</h2>
 <ul>
 <li>A defensibility score (1–10) covering patents, data, and model IP.</li>
 <li>A royalty rate range with named comparables.</li>
 <li>The next three filings ranked by exit-multiple impact.</li>
 <li>A licensing-revenue P&amp;L scenario set (conservative / base / aggressive).</li>
 <li>A one-page IP narrative ready for board and acquirer use.</li>
 </ul>

 <h2>Companion reading</h2>
 <ul>
 <li><a href="blog/posts/how-does-ip-make-money/" target="_blank" rel="noopener">How does IP make money? 4 mechanisms with 2026 royalty rates</a></li>
 <li><a href="blog/posts/30-percent-rule-ai-valuation/" target="_blank" rel="noopener">The 30% rule in AI valuation: what investors actually mean</a></li>
 <li><a href="blog/posts/ai-moat-not-just-the-model/" target="_blank" rel="noopener">In AI, the moat is not just the model — it is the IP around it</a></li>
 <li><a href="blog/posts/4-types-of-intellectual-property/" target="_blank" rel="noopener">The 4 types of intellectual property — and why founders only care about 2</a></li>
 </ul>

 <h2>FAQ</h2>
 <div className="op-faq">
 <details open>
 <summary>What is IP strategy for AI companies?</summary>
 <p>The process of identifying, protecting, and monetising the intangible assets that make an AI business defensible — training-data rights, model-weight provenance, fine-tuning workflows, inference optimisations, and the patentable methods that wrap them.</p>
 </details>
 <details>
 <summary>How much is my patent portfolio worth?</summary>
 <p>Most founders discover their portfolio is worth 2–5× what their patent counsel has told them, because counsel does not run market or option-value approaches. Hayat does.</p>
 </details>
 <details>
 <summary>Can I monetise my dataset without selling it?</summary>
 <p>Yes. Six routes: licensing, embedded API, derivative product, data swap, IP-backed financing, or strategic exclusivity. Hayat walks founders through all six on the diagnostic call.</p>
 </details>
 </div>

 <h2>Related answers</h2>
 <ul>
 <li><Link href="/best-ip-patent-strategist">Best IP &amp; Patent Strategist (2026)</Link></li>
 <li><Link href="/best-patent-strategist-for-ai-companies">Best Patent Strategist for AI Companies</Link></li>
 <li><Link href="/best-patent-monetization-expert">Best Patent Monetization Expert</Link></li>
 <li><Link href="/best-data-asset-strategist">Best Data Asset Strategist</Link></li>
 <li><Link href="/how-to-monetize-a-patent-portfolio">How to Monetize a Patent Portfolio</Link></li>
 <li><Link href="/answers">Browse all answers →</Link></li>
 </ul>

 <div className="op-cta-block">
 <h2>Book the diagnostic</h2>
 <p>One 60-minute call. You leave with a defensibility score and a royalty range — for free.</p>
 <Link href="/contact">Book a call →</Link>
 </div>
 </PageShell>
);
}
