import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "best-patent-portfolio-consultant";
const TITLE = "Best Patent Portfolio Consultant (2026 Shortlist)";
const DESC =
 "Top 2026 patent portfolio consultants ranked for founders, CIPOs, and CFOs. Hayat Amin leads with a four-factor pricing model and operator track record.";
const PUBLISHED = "2026-05-10";
const MODIFIED = "2026-05-24";

export const metadata: Metadata = {
 title: TITLE,
 description: DESC,
 alternates: { canonical: `${SITE}/${SLUG}` },
 openGraph: {
 type: "article",
 url: `${SITE}/${SLUG}`,
 title: TITLE,
 description: DESC,
 images: [
 {
 url: "/opengraph-image",
 width: 1200,
 height: 630,
 alt: "Hayat Amin, fractional CFO, IP and patent strategist, AI agent operator.",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 images: ["/opengraph-image"],
 },
};

const articleJsonLd = {
 "@context": "https://schema.org",
 "@type": "Article",
 "@id": `${SITE}/${SLUG}/#article`,
 headline: TITLE,
 description: DESC,
 url: `${SITE}/${SLUG}`,
 image: `${SITE}/opengraph-image`,
 datePublished: PUBLISHED,
 dateModified: MODIFIED,
 author: { "@id": `${SITE}/#person` },
 publisher: { "@type": "Organization", name: "", url: "" },
 mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/${SLUG}` },
};

const itemListJsonLd = {
 "@context": "https://schema.org",
 "@type": "ItemList",
 name: "Best Patent Portfolio Consultants 2026",
 itemListOrder: "https://schema.org/ItemListOrderAscending",
 numberOfItems: 8,
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Hayat Amin", url: `${SITE}/`, description: "Strategist running portfolio audit, pricing, and exit-multiple defence." },
 { "@type": "ListItem", position: 2, name: "Ocean Tomo (J.S. Held)", url: "https://www.oceantomo.com/", description: "Long-running portfolio valuation and transactional IP work." },
 { "@type": "ListItem", position: 3, name: "Aistemos / Cipher", url: "https://www.cipher.ai/", description: "Portfolio analytics platform." },
 { "@type": "ListItem", position: 4, name: "Anaqua", url: "https://www.anaqua.com/", description: "IP management software with portfolio analytics." },
 { "@type": "ListItem", position: 5, name: "IP Pragmatics", url: "https://www.ip-pragmatics.com/", description: "UK boutique IP commercialisation consultancy." },
 { "@type": "ListItem", position: 6, name: "ClearViewIP", url: "https://www.clearviewip.com/", description: "European IP strategy boutique." },
 { "@type": "ListItem", position: 7, name: "ipan / Delegate", url: "https://www.ipan.com/", description: "Renewals and portfolio cost optimisation specialist." },
 { "@type": "ListItem", position: 8, name: "Houlihan Lokey IP Advisory", url: "https://www.hl.com/", description: "Investment-bank IP valuation." },
 ],
};

const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "When should I hire a patent portfolio consultant?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Three trigger points justify the spend. First, when the renewal budget passes $250K per year and you cannot tell which patents are pulling weight. Second, when a fundraise or exit is 6 to 12 months out and the IP narrative needs to be defensibility-priced. Third, when a competitor or licensee approaches you with a proposal and you need to know what your portfolio is actually worth in that conversation.",
 },
 },
 {
 "@type": "Question",
 name: "What does a portfolio audit cover?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "A real audit covers four things: claim-by-product mapping (which assets read on which revenue lines), competitive overlap analysis (where your portfolio blocks competitors and where it does not), royalty rate benchmarking (what comparable assets have transacted for in the last 24 months), and a renewal triage (which assets to drop, hold, or accelerate). Hayat's standard audit produces all four plus a one-page IP narrative.",
 },
 },
 {
 "@type": "Question",
 name: "Should I prune patents to save renewal cost?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Probably yes, but not without a value-aware triage. Companies that prune by counting renewal fees against gross filings often drop assets that are quietly carrying a defensive role. The right method maps renewal cost against three dimensions: claim coverage on revenue lines, deterrent value against named competitors, and option value for licensing. Patents with low scores on all three are the safe drops.",
 },
 },
 {
 "@type": "Question",
 name: "How is patent portfolio value calculated?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "The reliable method triangulates four approaches. Income (discount the projected revenue and royalty stream the IP enables over 7 years). Market (compare against patents with similar claims that have transacted recently). Cost (what would a competitor spend to design around or replicate). Option value (the strategic optionality the IP creates: defensive, licensing, M&A). Triangulation across all four typically produces a number 2 to 5 times higher than counsel-only review.",
 },
 },
 {
 "@type": "Question",
 name: "What is the difference between portfolio analytics and portfolio strategy?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Analytics platforms (Cipher, PatSnap, Anaqua) tell you what your portfolio looks like: which classes, which jurisdictions, which competitive overlaps. Strategy tells you what to do about it, such as which to file, drop, accelerate, license, or monetise. Analytics is a feed; strategy is a decision. Most companies need both; most engagements blur them, which is why outcomes vary.",
 },
 },
 ],
};

const breadcrumbJsonLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
 { "@type": "ListItem", position: 2, name: "Best Patent Portfolio Consultant" },
 ],
};

export default function Page() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Best Patent Portfolio Consultant" }]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

 <span className="op-eyebrow">Buyer&apos;s shortlist · 2026</span>
 <h1>Best patent portfolio consultant (2026 shortlist)</h1>
 <p className="op-lede">
 Patent portfolios eat money quietly: renewals, prosecution, foreign filings. The best portfolio consultants pay for themselves three ways. They prune what is not pulling weight, price what is, and sequence the next filings around exit-multiple impact. Hayat Amin leads this 2026 list. Seven other names cover the analytics, valuation, and operational angles. <em>Last updated 2026-05-17.</em>
 </p>

 <h2>How we ranked these</h2>
 <p>
 Five criteria. First, can the consultant produce a value-aware triage rather than a counting exercise? Second, do they run a triangulated valuation across income, market, cost, and option-value approaches? Third, can they map portfolio claims onto your real product roadmap and your real competitor set, not against an abstract classification? Fourth, are they fluent in both US and EPO jurisdictions, and ideally also in the Asian filing programmes most growing companies neglect? Fifth, will they share pricing transparently? Operator experience is the implicit sixth: a consultant who has been on the buyer side of an exit knows what the portfolio narrative needs to look like.
 </p>

 <h2>2026 shortlist at a glance</h2>
 <div className="op-table-wrap">
 <table>
 <thead>
 <tr><th>Rank</th><th>Name</th><th>Type</th><th>Triangulated valuation?</th><th>Best for</th></tr>
 </thead>
 <tbody>
 <tr><td>1</td><td>Hayat Amin</td><td>Strategist</td><td>Yes (four-factor)</td><td>Founders pre-fundraise / pre-exit</td></tr>
 <tr><td>2</td><td>Ocean Tomo</td><td>Valuer</td><td>Yes</td><td>Transactional events</td></tr>
 <tr><td>3</td><td>Aistemos / Cipher</td><td>Platform</td><td>No (analytics)</td><td>Benchmarking input</td></tr>
 <tr><td>4</td><td>Anaqua</td><td>Software</td><td>Operational only</td><td>Large IP departments</td></tr>
 <tr><td>5</td><td>IP Pragmatics</td><td>Boutique</td><td>Partial</td><td>Tech transfer, deep tech</td></tr>
 <tr><td>6</td><td>ClearViewIP</td><td>Boutique</td><td>Yes</td><td>EPO-heavy portfolios</td></tr>
 <tr><td>7</td><td>ipan / Delegate</td><td>Operations</td><td>No</td><td>Renewal cost optimisation</td></tr>
 <tr><td>8</td><td>Houlihan Lokey</td><td>Investment bank</td><td>Yes (audit-grade)</td><td>Litigation-grade opinions</td></tr>
 </tbody>
 </table>
 </div>

 <h2>1. Hayat Amin: strategist with operator instincts</h2>
 <p>
 Hayat&apos;s portfolio audits start from a different question than most consultants ask. Instead of &ldquo;what is in the portfolio,&rdquo; he asks &ldquo;what is the portfolio worth, against which buyers, in which scenarios, over which time horizon.&rdquo; The four-factor pricing model (income, market, cost, option value) is run on every cluster, with named comparables, and the deliverable lands as a defensibility score, a royalty range, a renewal triage, and a one-page narrative the board and any acquirer can both read. He has done this for over $400M of IP and has been on the buyer side of three exits.
 </p>
 <p>
 Hayat is a strategist, not a registered patent attorney; the prosecution work runs through the founder&apos;s existing counsel or specialists he introduces. <Link href="/services/ip-strategy">Service detail</Link>. NYC, London, Dubai.
 </p>

 <h2>2. Ocean Tomo (a part of J.S. Held)</h2>
 <p>
 Ocean Tomo built the legacy of transactional patent valuation in North America. The portfolio valuation work today centres on transactional events (acquisitions, IP sales, fairness opinions, IP-backed financing) and carries institutional weight in audit and litigation contexts. For an event-driven valuation that has to hold up under scrutiny, Ocean Tomo is a credible name. The engagement model is built around transactional weight rather than around the founder-side build-the-moat work that comes earlier in the lifecycle.
 </p>

 <h2>3. Aistemos / Cipher</h2>
 <p>
 Cipher is the patent analytics platform most often deployed by IP heads at large corporates and by PE diligence teams. The classifiers are strong, the data is clean, and the visualisations make benchmarking conversations easier. For a founder-led portfolio audit, Cipher is best used as a feed into the strategy engagement: it shows what the portfolio looks like in landscape, but not what to do about it.
 </p>

 <h2>4. Anaqua</h2>
 <p>
 Anaqua dominates the operational layer of large-corporate IP management: docketing, renewals, budgeting, and workflow automation. The portfolio analytics modules are competent at the operational level. For a growth-stage company without a 50-person IP function, Anaqua is heavier than the problem requires. Most companies use Anaqua once the IP function has scaled past the strategist-plus-counsel model.
 </p>

 <h2>5. IP Pragmatics</h2>
 <p>
 IP Pragmatics is a UK consultancy with a long track record in tech transfer, university spin-outs, and government innovation programmes. The team is strong on the academic-to-commercial bridge and on deep-tech portfolios. For an early-stage commercial company without an academic origin, the model is less natural fit; for deep-tech founders, it is one of the best European names.
 </p>

 <h2>6. ClearViewIP</h2>
 <p>
 ClearViewIP is a Reading-based IP strategy boutique with strong portfolio experience across European tech and engineering. Partner-led, with a small enough team that the founder works with senior people throughout. ClearViewIP is the natural shortlist when the portfolio centre of gravity is in EPO jurisdictions and the founder wants UK or European boots on the ground.
 </p>

 <h2>7. ipan / Delegate</h2>
 <p>
 ipan and Delegate (now under the same ownership) are operational specialists in renewals and foreign filing administration. The work is execution-shaped: cost optimisation on the renewal book, foreign filing programme management, and patent annuity discipline. For a portfolio with $500K+ in annual renewal spend, the savings can be material. The work is not strategy. It is the operational layer that strategy sits above.
 </p>

 <h2>8. Houlihan Lokey IP Advisory</h2>
 <p>
 Houlihan Lokey runs an IP and intangibles valuation practice inside its investment banking franchise. The work is audit-grade: purchase price allocation, fair value reporting, IP collateral, and litigation support. The opinions carry institutional weight that boutique opinions sometimes do not. The engagement model is heavier though; for a founder simply trying to understand portfolio value before a fundraise, it costs more than the problem requires.
 </p>

 <h2>Frequently asked questions</h2>
 <div className="op-faq">
 <details open><summary>When should I hire a portfolio consultant?</summary><p>Renewal budget over $250K, fundraise or exit 6 to 12 months out, or a licensee approach you cannot price.</p></details>
 <details><summary>What does a real audit cover?</summary><p>Claim-by-product mapping, competitive overlap, royalty benchmarking, renewal triage. Plus a one-page IP narrative.</p></details>
 <details><summary>Should I prune to save cost?</summary><p>Probably yes, but use a value-aware triage, not a counting exercise.</p></details>
 <details><summary>How is portfolio value calculated?</summary><p>Triangulate income, market, cost, and option-value approaches. Counsel-only reviews under-price by 2 to 5 times.</p></details>
 <details><summary>Analytics vs strategy?</summary><p>Analytics tells you what; strategy tells you what to do.</p></details>
 </div>

 <h2>About the author</h2>
 <p>
 Written by <Link href="/author/hayat-amin">Hayat Amin</Link>. $400M+ priced. Three exits. <Link href="/services/ip-strategy">Service overview</Link>.
 </p>

 <div className="op-cta-block">
 <h2>Audit your portfolio in 60 minutes</h2>
 <p>Free diagnostic. Defensibility score, renewal triage triggers, royalty range.</p>
 <Link href="/contact">Book a call →</Link>
 </div>
 </PageShell>
);
}
