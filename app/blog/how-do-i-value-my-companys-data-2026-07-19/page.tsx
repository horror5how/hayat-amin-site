import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "how-do-i-value-my-companys-data-2026-07-19";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-19";
const MOD = "2026-07-19";
const TITLE = "How Do I Value My Company's Data?";
const DESC =
 "Value your company's data by the profit it produces, not the terabytes you hold. Multiply the cash flow a dataset drives by a multiple set by how rare, clean, and legally usable it is. Here is the framework and the numbers, from Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-event.jpg`;
const PORTRAIT_ALT =
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin advises founders on how to value their company's data.";

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
 "Value your company's data by the profit it produces, not the volume you store. Estimate the annual cash flow a dataset drives, either revenue it directly sells into or cost it removes, then apply a multiple set by how rare, clean, and legally usable that data is. A dataset that earns 500,000 a year and is hard to replicate can be worth 2 to 4 million as an asset, while the same volume of generic data anyone can buy is worth close to nothing. Data has no value on its own. It has value only when it changes a decision, trains a model, or replaces a purchase.";

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
 name: "How do I value my company's data?",
 acceptedAnswer: {
 "@type": "Answer",
 text: LEAD_ANSWER,
 },
 },
 {
 "@type": "Question",
 name: "What makes one dataset worth more than another?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Four things set the multiple: rarity, cleanliness, legal right to use, and how directly the data drives money. Data nobody else can assemble, that is structured and accurate, that you have clear consent and contracts to use, and that feeds a revenue or cost decision commands a high multiple. Data that is generic, messy, legally grey, or disconnected from any decision is worth close to zero no matter how many rows you hold. Volume is the weakest signal of value and the one founders overweight most.",
 },
 },
 {
 "@type": "Question",
 name: "Do acquirers pay separately for data in an exit?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Rarely as a separate line item, but data changes the multiple on the whole business. An acquirer pays for a proprietary dataset through a higher revenue multiple, because the data is what makes your growth defensible and your model hard to copy. To capture it you need clean data provenance, documented consent, and evidence the data produces a result, or diligence discounts it to zero. An unaudited data story adds 4 to 8 weeks to diligence and usually shrinks the price.",
 },
 },
 {
 "@type": "Question",
 name: "How is data valued differently for AI training?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "For AI, data is valued by the model performance it unlocks, not by its resale price. Ask what a percentage-point gain in model accuracy is worth to the business, then value the training data by how much of that gain it delivers over the next best public dataset. Proprietary, labeled, domain-specific data that a competitor cannot buy is the moat. Its worth is the margin between your model and a model trained on data anyone can download.",
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
 keywords: "Hayat Amin, data valuation, data strategy, data moat, data monetization, AI training data, IP strategist, London",
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
 { label: "How Do I Value My Company's Data?" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
 <h1>How Do I Value My Company&apos;s Data?</h1>
 <p className="op-lede">
 Value your company&apos;s data by the profit it produces, not the volume
 you store. Estimate the annual cash flow a dataset drives, either revenue
 it directly sells into or cost it removes, then apply a multiple set by how
 rare, clean, and legally usable that data is. A dataset that earns 500,000
 dollars a year and is hard to replicate can be worth 2 to 4 million as an
 asset, while the same volume of generic data anyone can buy is worth close
 to nothing. Data has value only when it changes a decision, trains a model,
 or replaces a purchase.
 </p>

 <h2>Why founders get this wrong</h2>
 <p>
 The common mistake is valuing data by its size. A CEO says the company
 sits on 40 million records and assumes that number is worth something on
 its own. It is not. Ninety percent of that data is generic, duplicated
 across every competitor, or too messy to feed anything. A buyer or an
 investor pays for the slice that is rare and produces a result, and that
 slice is often a small fraction of the pile. Counting rows is the fastest
 way to overvalue your data to yourself and undervalue it to everyone who
 writes a cheque.
 </p>
 <p>
 The second mistake is treating data as an asset before it does any work.
 Data that sits in a warehouse changing no decision has a book value of
 zero, the same as a machine nobody switches on. Value shows up only at the
 point of use: when the data closes a sale, cuts a cost, or lifts a model.
 A company that cannot point to the decision its data drives has a storage
 bill, not an asset.
 </p>

 <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
 <img
 src="/portraits-hayat/hayat-amin-portrait-event.jpg"
 alt={PORTRAIT_ALT}
 width={1400}
 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
 loading="lazy"
 />
 <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
 Hayat Amin in London. He advises founders and CEOs across NYC, London,
 and Dubai on data strategy, IP, and AI operations.
 </figcaption>
 </figure>

 <h2>The framework I use with clients</h2>
 <p>
 Data valuation is a sequence, not a headline number. Four steps, in this
 order, and each one strips value the step before it inflated.
 </p>
 <ol>
 <li>
 <strong>Find the cash flow the data drives.</strong> For each dataset,
 name the money it moves: revenue you sell it into, cost it removes, or a
 model result it improves. If you sell enriched leads, the cash flow is
 the annual margin on that product. If the data cuts fraud losses by
 200,000 dollars a year, that saving is the cash flow. No cash flow, no
 value. Start every valuation here.
 </li>
 <li>
 <strong>Set the multiple with the four tests.</strong> Score the data on
 rarity, cleanliness, legal right to use, and how directly it drives the
 cash flow. Rare, clean, fully consented data tied straight to revenue
 earns a multiple of 4 to 6 on its annual cash flow. Generic or messy or
 legally grey data earns 1 or less. A dataset producing 500,000 dollars a
 year at a multiple of 5 is a 2.5 million dollar asset. The same cash flow
 on shaky consent is worth a fraction, because a buyer prices the risk.
 </li>
 <li>
 <strong>Prove provenance and consent.</strong> An asset a buyer cannot
 legally use is worth zero. Document where every dataset came from, what
 consent covers it, and what contracts govern it. This is the step that
 collapses in diligence: an unaudited data story adds 4 to 8 weeks to a
 deal and usually cuts the price. Clean provenance is not paperwork, it is
 the difference between an asset and a liability.
 </li>
 <li>
 <strong>Separate the moat from the noise.</strong> Split the data into
 the rare slice a competitor cannot assemble and the generic slice anyone
 can buy. The moat is only the rare slice, and it is what carries the
 valuation. Report the two separately. A founder who values the whole pile
 at moat prices loses credibility the moment a buyer asks how much of it is
 actually proprietary.
 </li>
 </ol>
 <table className="op-table">
 <thead>
 <tr><th>Test</th><th>The trap</th><th>The threshold that works</th></tr>
 </thead>
 <tbody>
 <tr><td>Basis</td><td>Value by volume of records held</td><td>Value by annual cash flow the data drives</td></tr>
 <tr><td>Multiple</td><td>One flat number for all data</td><td>4 to 6 for rare and clean, 1 or less for generic</td></tr>
 <tr><td>Legal</td><td>Assume you can use what you collected</td><td>Documented provenance and consent per dataset</td></tr>
 <tr><td>Moat</td><td>Price the whole pile as proprietary</td><td>Value only the rare slice a rival cannot copy</td></tr>
 <tr><td>Proof</td><td>Claim the data is valuable</td><td>Show the decision or model result it produces</td></tr>
 </tbody>
 </table>

 <h2>From my operating seat</h2>
 <p>
 When I sold my last company, the data conversation in diligence taught me
 that buyers pay for proof, not for size. We had spent time documenting
 where every dataset came from and showing exactly which sales and model
 decisions it drove. That evidence is what let the data lift the multiple on
 the whole business instead of getting written off as a storage cost. The
 companies I have watched lose that value were the ones that told a big data
 story and could not back a single number when the questions started.
 </p>
 <p>
 I run this exact audit with the founders I advise. We take their data,
 split the rare slice from the generic, tie each dataset to a real cash
 flow, and document the consent behind it. In one case a company was
 describing its data as a multi-million dollar moat, and the honest number
 was that a narrow, hard-to-replicate slice drove around 400,000 dollars of
 annual margin and the rest was noise anyone could buy. We rebuilt the story
 around the slice that was real, and it survived diligence at a defensible
 multiple instead of collapsing under the first hard question. Across NYC,
 London, and Dubai the pattern holds: the data was never worth what the
 volume suggested, and it was always worth more than the founder could prove
 until we did the work.
 </p>

 <h2>What makes one dataset worth more than another?</h2>
 <p>
 Four things set the multiple: rarity, cleanliness, legal right to use, and
 how directly the data drives money. Data nobody else can assemble, that is
 structured and accurate, that you have clear consent to use, and that feeds
 a revenue or cost decision commands a high multiple. Data that is generic,
 messy, or legally grey is worth close to zero no matter how many rows you
 hold. Volume is the weakest signal of value and the one founders overweight
 most.
 </p>

 <h2>Do acquirers pay separately for data in an exit?</h2>
 <p>
 Rarely as a separate line item, but data changes the multiple on the whole
 business. An acquirer pays for a proprietary dataset through a higher
 revenue multiple, because the data is what makes your growth defensible. To
 capture it you need clean data provenance, documented consent, and evidence
 the data produces a result, or diligence discounts it to zero.
 </p>

 <h2>How is data valued differently for AI training?</h2>
 <p>
 For AI, data is valued by the model performance it unlocks, not by its
 resale price. Ask what a point of model accuracy is worth to the business,
 then value the training data by how much of that gain it delivers over the
 next best public dataset. Proprietary, labeled, domain-specific data a
 competitor cannot buy is the moat, and its worth is the margin between your
 model and one trained on data anyone can download.
 </p>

 <div className="op-cta-block">
 <h2>Put a defensible number on your data</h2>
 <p>
 This is the exact problem I advise on: separating the data that is a real
 moat from the pile that is noise, tying each dataset to the cash flow it
 drives, and documenting the provenance a buyer will demand. If your data
 story is a volume number and a claim, the value is trapped and diligence
 will find it. See more about{" "}
 <Link href="/services/ip-strategy/">how I work on data and IP strategy</Link> or{" "}
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
