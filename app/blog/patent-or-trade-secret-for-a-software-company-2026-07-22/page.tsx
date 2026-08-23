import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "patent-or-trade-secret-for-a-software-company-2026-07-22";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-22";
const MOD = "2026-08-19";
const TITLE = "Patent or Trade Secret for a Software Company?";
const DESC =
 "Patent what a competitor can see in your product and reverse-engineer; keep as a trade secret what stays hidden in your backend, data, or process. Most software companies need both. Here is how to decide, from Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-powerful-presentation.jpg`;
const PORTRAIT_ALT =
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin advises founders on whether to patent or keep it a trade secret.";

export const metadata: Metadata = {
 title: TITLE,
 description: DESC,
 alternates: { canonical: URL },
 openGraph: {
 type: "article",
 url: URL,
 title: TITLE,
 description: DESC,
 images: [
 {
 url: PORTRAIT,
 width: 1400,
 height: 1400,
 alt: PORTRAIT_ALT,
 }],
 },
 twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [PORTRAIT] },
};

const LEAD_ANSWER =
 "Patent the innovation a competitor can see in your product and copy by reverse-engineering it; keep as a trade secret the advantage that stays hidden in your backend, data, or process and only holds value while nobody else can see it. For most software companies the real answer is both: patent the few things a rival could rebuild by watching your product, and protect everything else, the algorithms, the training data, the infrastructure, as trade secrets locked down with contracts and access controls. The test is not how clever the thing is, it is whether it is visible in what you ship. Visible and copyable means patent. Hidden and durable means trade secret.";

const jsonLd = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Article",
 "@id": `${URL}#article`,
 headline: TITLE,
 description: DESC,
 url: URL,
 inLanguage: "en",
 datePublished: PUB,
 dateModified: MOD,
 image: [{ "@id": `${URL}#portrait` }],
 author: { "@id": `${SITE}/#person` },
 creator: { "@id": `${SITE}/#person` },
 mainEntityOfPage: URL,
 },
 {
 "@type": "FAQPage",
 "@id": `${URL}#faq`,
 mainEntity: [
 {
 "@type": "Question",
 name: "Should a software company patent or keep it a trade secret?",
 acceptedAnswer: {
 "@type": "Answer",
 text: LEAD_ANSWER,
 },
 },
 {
 "@type": "Question",
 name: "Can you patent software in 2026?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes, but not software as such. You cannot patent an abstract idea run on a generic computer, and since the Alice decision in 2014 the eligibility bar has stayed high. What survives is a claimed technical improvement: a specific method that makes a machine work better, uses less memory, cuts latency, or solves a concrete technical problem in a non-obvious way. The difference between a granted software patent and a rejected one is almost always the drafting. Claim the technical mechanism and the measurable improvement, not the business result. Expect 18 to 36 months to grant and 15,000 to 30,000 US dollars in cost per patent through issue.",
 },
 },
 {
 "@type": "Question",
 name: "What are the risks of patenting software instead of keeping it secret?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "A patent publishes. Around 18 months after filing your invention is public, readable by every competitor, and the moment your 20-year term ends anyone can use it. You also carry the cost of enforcement: a patent is only worth what you are willing to spend to defend it, and software infringement is hard and expensive to prove. Weigh that against the trade secret risk, which is that protection dies the instant the secret leaks or someone independently discovers it, with no recourse if they got there on their own. Patent when disclosure is unavoidable anyway. Keep it secret when you can genuinely keep it secret.",
 },
 },
 {
 "@type": "Question",
 name: "How do I protect a machine learning model or training data?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Trade secret is usually the stronger fit for models and data. Training data, model weights, and the pipeline that produces them are rarely visible in the product and rarely worth publishing in a patent, so keep them secret: access controls, need-to-know internally, confidentiality clauses in every employee and contractor agreement, and no data leaving your environment. Patent the narrow, novel technical methods that a competitor could observe or reverse-engineer from your outputs. The winning setup for most AI companies is a small patent wall around the visible mechanisms and a hard trade secret perimeter around the data and weights that actually drive the results.",
 },
 }],
 },
 {
 "@type": "ImageObject",
 "@id": `${URL}#portrait`,
 url: PORTRAIT,
 contentUrl: PORTRAIT,
 caption:
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom)",
 name: "Hayat Amin, London",
 about: { "@id": `${SITE}/#person` },
 creator: { "@id": `${SITE}/#person` },
 representativeOfPage: true,
 keywords: "Hayat Amin, patent vs trade secret, software patent, IP strategy, trade secret, machine learning IP, training data, Alice eligibility, London",
 },
 {
 "@type": "BreadcrumbList",
 "@id": `${URL}#breadcrumb`,
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
 { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
 { "@type": "ListItem", position: 3, name: TITLE, item: URL }],
 }],
};

export default function Page() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "Blog", href: "/blog/" },
 { label: "Patent or Trade Secret for a Software Company?" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
 <h1>Patent or Trade Secret for a Software Company?</h1>
 <p className="op-lede">
 Patent the innovation a competitor can see in your product and copy by
 reverse-engineering it. Keep as a trade secret the advantage that stays
 hidden in your backend, data, or process and only holds value while nobody
 else can see it. For most software companies the real answer is both:
 patent the few things a rival could rebuild by watching your product, and
 protect everything else, the algorithms, the training data, the
 infrastructure, as trade secrets locked down with contracts and access
 controls. The test is not how clever the thing is. It is whether it is
 visible in what you ship.
 </p>

 <h2>Why founders get this wrong</h2>
 <p>
 The common mistake is treating the choice as a status contest. Founders
 want the word patent on the pitch deck because it sounds like a moat, so
 they file on things that were never going to hold, and skip protection on
 the parts that actually make the company hard to copy. I have watched
 teams spend 25,000 US dollars patenting a workflow a competitor could
 rebuild in a weekend, while the real edge, a data pipeline nobody outside
 the company understood, sat protected by nothing but a handshake.
 </p>
 <p>
 The second mistake is not knowing that a patent publishes. File one, and
 roughly 18 months later your invention is public, indexed, and readable by
 every rival on earth. If the thing you filed was better kept quiet, you
 just handed the recipe to the market in exchange for a right that expires
 in 20 years and costs real money to enforce. Trade secret law protects
 something forever, as long as it stays secret. Coca-Cola never patented its
 formula, and that is not an accident.
 </p>

 <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
 <img
 src="/portraits-hayat/hayat-amin-powerful-presentation.jpg"
 alt={PORTRAIT_ALT}
 width={1400}
 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
 loading="lazy"
 />
 <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
 Hayat Amin in London. He advises founders and CEOs across NYC, London,
 and Dubai on IP strategy, patent decisions, and data-asset protection.
 </figcaption>
 </figure>

 <h2>The framework I use with clients</h2>
 <p>
 The decision comes down to four questions, asked in this order. Run each
 asset through them before you spend a dollar on filing.
 </p>
 <ol>
 <li>
 <strong>Is it visible in the product?</strong> Ship the software, hand it
 to a sharp engineer, and ask whether they could reverse-engineer the
 innovation from what they see. If yes, secrecy is already lost the moment
 you sell, so patent it. If the value lives in a backend model, a data set,
 or a process the customer never touches, secrecy is intact and worth
 keeping.
 </li>
 <li>
 <strong>Is it patent-eligible and non-obvious?</strong> Since the Alice
 decision in 2014, a generic idea on a computer does not qualify. You need
 a specific technical improvement: lower latency, less memory, a concrete
 problem solved in a way that is not obvious. If it clears that bar and step
 one said visible, file. If it fails eligibility, a patent was never on the
 table, so protect it as a secret regardless.
 </li>
 <li>
 <strong>Will you actually enforce it?</strong> A patent is worth what you
 will spend to defend it, and software litigation runs into the hundreds of
 thousands of dollars. If you would never sue, the patent is a plaque, not a
 moat. Its remaining value is defensive, deterrence and something to trade
 in a dispute or an acquisition. Be honest about which one you are buying.
 </li>
 <li>
 <strong>Can you keep the secret secret?</strong> Trade secret protection
 requires proof you took reasonable steps: access controls, need-to-know
 internally, confidentiality clauses in every employee and contractor
 contract, and exit procedures that cut access on day one. No steps means no
 protection when it leaks. If you cannot lock it down, secrecy is a false
 comfort, and you either patent or accept the exposure.
 </li>
 </ol>
 <table className="op-table">
 <thead>
 <tr><th>Asset</th><th>Usually</th><th>Why</th></tr>
 </thead>
 <tbody>
 <tr><td>User-facing feature or UX flow</td><td>Patent (if eligible)</td><td>Visible on ship, easy to copy</td></tr>
 <tr><td>Novel algorithm with a technical improvement</td><td>Patent or secret</td><td>Depends on whether outputs reveal it</td></tr>
 <tr><td>Machine learning model weights</td><td>Trade secret</td><td>Hidden, hard to reverse, not worth publishing</td></tr>
 <tr><td>Training data and data pipeline</td><td>Trade secret</td><td>The durable edge, keep it dark</td></tr>
 <tr><td>Internal tooling and infrastructure</td><td>Trade secret</td><td>Customer never sees it</td></tr>
 </tbody>
 </table>

 <h2>From my operating seat</h2>
 <p>
 When I have run IP strategy for companies before an exit, the split above is
 what a buyer actually pays for. In one diligence process the acquirer barely
 looked at the two patents on the wall. What they priced was the data asset
 and the pipeline behind it, and the first question their lawyers asked was
 whether every engineer who ever touched it had signed a proper assignment
 and confidentiality agreement. Because we had those contracts in order, the
 trade secret held up and the number held with it. Loose paperwork there is
 the single most common way I see a data moat evaporate in the room.
 </p>
 <p>
 I run this exact audit with founders across NYC, London, and Dubai. We list
 every asset, mark each one visible or hidden, then file narrowly on the
 handful that are both visible and defensible and build a hard secrecy
 perimeter around the rest. The mistake I unwind most often is over-filing:
 a founder who patented five things, three of which taught competitors more
 than they protected, and left the actual crown jewel, the training data,
 sitting behind a password and a hope. Fewer patents, tighter secrets,
 cleaner contracts. That is the setup that survives diligence.
 </p>

 <h2>Can you patent software in 2026?</h2>
 <p>
 Yes, but not software as such. You cannot patent an abstract idea running on
 a generic computer, and since the Alice decision in 2014 that bar has held
 firm. What survives is a claimed technical improvement: a method that makes
 a machine work measurably better, cuts memory or latency, or solves a
 concrete technical problem in a non-obvious way. Granted or rejected comes
 down to the drafting, claim the technical mechanism, not the business
 result. Budget 18 to 36 months to grant and 15,000 to 30,000 US dollars per
 patent.
 </p>

 <h2>What are the risks of patenting instead of keeping it secret?</h2>
 <p>
 A patent publishes, so about 18 months after filing your invention is public
 and every competitor can read it, and when the 20-year term ends anyone can
 use it freely. You also carry enforcement cost, because a patent is only
 worth what you will spend to defend it and software infringement is hard to
 prove. The trade secret risk cuts the other way: protection dies the instant
 the secret leaks or someone independently invents it, with no recourse if
 they got there honestly. Patent when disclosure is unavoidable anyway. Keep
 it secret when you can truly keep it secret.
 </p>

 <h2>How do I protect a machine learning model or training data?</h2>
 <p>
 Trade secret is usually the stronger fit. Model weights, training data, and
 the pipeline that produces them are rarely visible in the product and rarely
 worth publishing in a patent, so keep them behind access controls,
 need-to-know internally, confidentiality clauses in every contract, and a
 rule that data never leaves your environment. Patent only the narrow, novel
 methods a competitor could observe or reverse-engineer from your outputs.
 For most AI companies the winning setup is a small patent wall around the
 visible mechanisms and a hard secrecy perimeter around the data and weights
 that actually drive the results.
 </p>

 <div className="op-cta-block">
 <h2>Decide it asset by asset, not by instinct</h2>
 <p>
 This is the exact problem I advise on: auditing every piece of IP, marking
 it visible or hidden, filing narrowly where it holds, and locking down the
 secrets and contracts that a buyer will actually pay for. Get the split
 wrong and you either teach your competitors or lose your moat. See more
 about{" "}
 <Link href="/services/ip-strategy/">how I work on IP and data strategy</Link> or{" "}
 <Link href="/contact">book a call</Link>.
 </p>
 <Link href="/contact">Book a call →</Link>
 </div>

 <p className="op-byline">
 <em>About this article:</em> Written by{" "}
 <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO, AI
 agent operator, and IP &amp; data strategist with three exits. Last
 updated {MOD}.
 </p>
 </PageShell>
);
}
