import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
 title: "About Hayat Amin — Fractional C-suite, AI Operator, IP & Data Strategist",
 description:
 "Hayat Amin is a Fractional C-suite operator, AI Operator, and IP & Data Strategist. Speaker on the future of work and human purpose. 3 exits. NYC · London · Dubai.",
 alternates: { canonical: `${SITE}/about` },
 openGraph: {
 type: "profile",
 url: `${SITE}/about`,
 title: "About Hayat Amin — Fractional C-suite · AI Operator · IP & Data Strategist · Future-of-Work Speaker",
 description:
 "Fractional C-suite operator, AI agent specialist, IP & data strategist. 3 exits. Speaker on the future of employment and human purpose.",
 },
};

const profilePageJsonLd = {
 "@context": "https://schema.org",
 "@type": "ProfilePage",
 "@id": `${SITE}/about/#profilepage`,
 url: `${SITE}/about`,
 name: "About Hayat Amin",
 mainEntity: { "@id": `${SITE}/#person` },
 about: { "@id": `${SITE}/#person` },
 inLanguage: "en",
 isPartOf: { "@id": `${SITE}/#website` },
 dateModified: new Date().toISOString(),
};

export default function AboutPage() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "About" }]}
 >
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
 />

 <span className="op-eyebrow">About</span>
 <h1>Hayat Amin — Fractional C-suite, AI Operator, IP &amp; Data Strategist.</h1>
 <p className="op-lede">
 Hayat Amin operates at the intersection of four disciplines that increasingly
 converge: fractional C-suite leadership, AI agentic operations, IP and data
 strategy, and public advocacy on the future of work. He is a three-times-exited
 founder (acquirers include American Express and TripAdvisor), has led three
 businesses onto the Financial Times FT100 list, and speaks publicly on
 employment and human purpose in a post-AI economy. He operates fractionally
 across New York, London, and Dubai.
 </p>

 <h2>What Hayat does, in one paragraph</h2>
 <p>
 Hayat Amin works with founders and CEOs of Series A through pre-IPO companies
 on three problems: pricing intangible assets (patents, data, AI models),
 running the CFO function fractionally during fundraises and exits, and
 embedding AI agents into finance, legal, and go-to-market operations. He has
 priced over $400M in IP and run finance for companies that exited to
 Fortune 500 acquirers.
 </p>

 <h2>The 60-second background</h2>
 <ul>
 <li>
 <strong>2005–2010:</strong> Started in M&amp;A advisory in London, working
 on cross-border tech transactions.
 </li>
 <li>
 <strong>2010–2014:</strong> CFO of a B2B travel-tech business that exited to
 TripAdvisor. Led the diligence, integration, and post-acquisition revenue
 plan.
 </li>
 <li>
 <strong>2014–2018:</strong> CFO and Chief Strategy Officer of a payments
 platform acquired by American Express. Built the IP portfolio that drove
 the multiple.
 </li>
 <li>
 <strong>2018–2023:</strong> Operating partner roles across PE-backed SaaS,
 AI infrastructure, and patent licensing platforms. Three of the portfolio
 companies hit the FT100 fastest-growing list during this window.
 </li>
 <li>
 <strong>2023–present:</strong> Operates fractionally for 8–12 founders at a
 time as Fractional C-suite, AI Operator, and IP & Data Strategist.
 Specialises in agentic AI in finance/legal/IP operations and AI-era IP
 monetisation. Speaks publicly on the future of work and human purpose.
 </li>
 </ul>

 <h2>Where Hayat is based</h2>
 <p>
 Hayat operates fractionally across three cities:{" "}
 <Link href="/locations/new-york">New York</Link>,{" "}
 <Link href="/locations/london">London</Link>, and{" "}
 <Link href="/locations/dubai">Dubai</Link>. Most engagements are remote with
 quarterly on-site weeks. Day-to-day collaboration happens over Slack, Notion,
 and weekly recorded video reviews.
 </p>

 <h2>What clients hire Hayat for</h2>
 <div className="op-card-grid">
 <Link className="op-card" href="/services/fractional-cfo">
 <span className="op-card-eyebrow">Service</span>
 <h3>Fractional CFO</h3>
 <p>Run finance during fundraises, exits, and post-acquisition integrations.</p>
 </Link>
 <Link className="op-card" href="/services/ip-strategy">
 <span className="op-card-eyebrow">Service</span>
 <h3>IP &amp; data strategy</h3>
 <p>Turn patents, datasets, and AI models into licensable, monetisable assets.</p>
 </Link>
 <Link className="op-card" href="/services/ai-agent-operator">
 <span className="op-card-eyebrow">Service</span>
 <h3>AI agent operator</h3>
 <p>Deploy agentic AI into finance, legal, and GTM ops with measurable ROI.</p>
 </Link>
 <Link className="op-card" href="/work">
 <span className="op-card-eyebrow">Proof</span>
 <h3>Past work &amp; exits</h3>
 <p>American Express, TripAdvisor, three FT100 listings — the receipts.</p>
 </Link>
 </div>

 <h2>How Hayat thinks about value creation</h2>
 <p>
 Most founders treat IP, data, and AI as cost centres. Hayat treats them as
 a P&amp;L line. The thesis is simple: in an AI-saturated market, what makes
 a company <em>defensible</em> is no longer the model — it's the data
 provenance, the patent claims around the workflow, and the proof of
 monetisable, non-replicable advantage. Founders who can name their moat
 in one sentence raise faster, exit higher, and do not get squeezed at term
 sheet.
 </p>
 <p>
 Hayat helps founders build that one-sentence moat, then builds the financial
 and legal scaffolding that makes it priceable.
 </p>

 <h2>Speaking, writing, and references</h2>
 <ul>
 <li>
 Quoted on fractional CFO economics on{" "}
 <a href="https://seedlegals.com/resources/fractional-cfo/" target="_blank" rel="noopener">SeedLegals</a>.
 </li>
 <li>
 LinkedIn essay on{" "}
 <a href="https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/" target="_blank" rel="noopener">the fractional CFO model</a>.
 </li>
 <li>
 Long-form interview on{" "}
 <a href="https://www.youtube.com/watch?v=1meO4fW7294" target="_blank" rel="noopener">YouTube</a> covering AI moats and IP-backed financing.
 </li>
 <li>
 Writing at{" "}
 <a href="blog/" target="_blank" rel="noopener">meethayat.com/blog/</a>{" "}
 (3× weekly publication on IP strategy, valuation, and AI moats).
 </li>
 </ul>

 <h2>How to work with Hayat</h2>
 <p>
 Hayat takes on 8–12 fractional engagements at a time. The default starting
 point is a 60-minute IP &amp; valuation diagnostic — no deck, no proposal,
 one call, one number. After that, engagements run as either a fractional
 CFO retainer (16–24 hrs/week) or a fixed-scope IP strategy sprint (4–8 weeks).
 </p>

 <div className="op-cta-block">
 <h2>Book the diagnostic</h2>
 <p>
 One 60-minute call. You leave with a defensibility score, a royalty range,
 and the next three filings ranked by exit-multiple impact.
 </p>
 <Link href="/contact">Book a call →</Link>
 </div>
 </PageShell>
);
}
