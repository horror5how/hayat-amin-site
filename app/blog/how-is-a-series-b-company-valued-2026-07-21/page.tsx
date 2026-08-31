import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-is-a-series-b-company-valued-2026-07-21";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-21";
const MOD = "2026-08-31";
const TITLE = "How Is a Series B Company Valued?";
const DESC =
 "A Series B company is valued on a forward revenue multiple, most often 8 to 15 times next-twelve-months ARR in 2026, moved up or down by growth rate, net revenue retention, and gross margin. Here is the framework and the numbers, from Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-white-back-ground.jpg`;
const PORTRAIT_ALT =
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin advises founders on how a Series B company is valued.";

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
 "A Series B company is valued on a forward revenue multiple, most often 8 to 15 times next-twelve-months ARR in 2026, moved up or down by growth rate, net revenue retention, and gross margin. Take your forward ARR, apply the multiple your growth and retention earn, and that number is your enterprise value before the negotiation starts. A company growing 100 percent a year at 120 percent net retention sits at the top of that range or above it. A company growing 40 percent with churn dragging retention below 100 percent sits at the bottom, or gets priced on a discounted cash flow instead.";

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
 name: "How is a Series B company valued?",
 acceptedAnswer: {
 "@type": "Answer",
 text: LEAD_ANSWER,
 },
 },
 {
 "@type": "Question",
 name: "What revenue multiple do Series B investors use in 2026?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Most Series B software rounds in 2026 price at 8 to 15 times forward ARR, with the median closer to 10. The multiple is not a fixed number, it is a scorecard. Growth above 80 percent a year, net revenue retention above 115 percent, and gross margin above 75 percent push you toward and past the top of the range. Slowing growth, retention below 100 percent, or thin margin pull you to the floor. Efficiency now matters as much as growth: a burn multiple under 1.5 lifts the multiple, a burn multiple above 3 caps it no matter how fast you are growing.",
 },
 },
 {
 "@type": "Question",
 name: "What metrics drive a Series B valuation the most?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Four numbers move the price more than any story: growth rate, net revenue retention, gross margin, and burn multiple. Net revenue retention is the one founders underweight and investors weight most, because retention above 110 percent means the company grows even with no new logos, and that compounding is what a multiple pays for. Growth rate sets the ceiling, retention proves the growth is durable, gross margin sets how much of revenue is real, and burn multiple shows whether the growth was bought cheaply or expensively.",
 },
 },
 {
 "@type": "Question",
 name: "How do I defend a Series B valuation in a down market?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "In a soft market you defend price with proof of efficiency, not with growth alone. Come in with a burn multiple under 1.5, net revenue retention above 110 percent, and a clear path to default-alive, and you argue for a premium multiple while everyone around you is getting marked down. If the numbers will not support your last valuation, a structured flat round or a small extension at the old price beats a headline down round that resets your option pool and signals weakness to customers and staff. Price the round on the metrics you can prove, not the valuation you want to protect.",
 },
 }],
 },
 {
 "@type": "ImageObject",
 "@id": `${URL}#portrait`,
 url: PORTRAIT,
 contentUrl: PORTRAIT,
 caption:
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates)",
 name: "Hayat Amin, Dubai",
 about: { "@id": `${SITE}/#person` },
 creator: { "@id": `${SITE}/#person` },
 representativeOfPage: true,
 keywords: "Hayat Amin, Series B valuation, revenue multiple, ARR, net revenue retention, burn multiple, fractional CFO, fundraising, Dubai",
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
 { label: "How Is a Series B Company Valued?" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
 <h1>How Is a Series B Company Valued?</h1>
 <p className="op-lede">
 A Series B company is valued on a forward revenue multiple, most often 8
 to 15 times next-twelve-months ARR in 2026, moved up or down by growth
 rate, net revenue retention, and gross margin. Take your forward ARR,
 apply the multiple your growth and retention earn, and that number is your
 enterprise value before the negotiation starts. A company growing 100
 percent a year at 120 percent net retention sits at the top of that range
 or above it. A company growing 40 percent with churn dragging retention
 below 100 percent sits at the bottom, or gets priced on a discounted cash
 flow instead.
 </p>

 <h2>Why founders get this wrong</h2>
 <p>
 The common mistake is anchoring on a comparable that no longer applies.
 A founder reads that a rival raised at 25 times ARR in 2021 and walks into
 the room expecting the same. That number is gone. Software multiples reset
 hard, and by 2026 the median Series B prices closer to 10 times forward
 revenue, not 25 times trailing. Anchoring on the peak makes every term
 sheet look like an insult and burns weeks of a raise arguing about a
 number the market will not pay.
 </p>
 <p>
 The second mistake is selling growth and ignoring efficiency. In 2021 a
 board would fund growth at almost any burn. Now the first question after
 growth rate is the burn multiple: how many dollars you spent to add one
 dollar of net new ARR. A company adding 5 million dollars of ARR while
 burning 15 million has a burn multiple of 3, and that caps the valuation
 no matter how fast the top line moves. Growth gets you in the room.
 Efficient growth sets the price.
 </p>

 <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
 <img
 src="/portraits-hayat/hayat-amin-portrait-white-back-ground.jpg"
 alt={PORTRAIT_ALT}
 width={1400}
 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
 loading="lazy"
 />
 <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
 Hayat Amin in Dubai. He advises founders and CEOs across NYC, London,
 and Dubai on fundraising, valuation, and financial strategy.
 </figcaption>
 </figure>

 <h2>The framework I use with clients</h2>
 <p>
 A Series B valuation is built in four steps, in this order. Each step
 either earns or loses part of the multiple the step before it set.
 </p>
 <ol>
 <li>
 <strong>Start with forward ARR, not trailing.</strong> Investors price
 the next twelve months, not the last twelve. Build a bottom-up forecast
 you can defend line by line: current ARR, contracted expansion, pipeline
 weighted by real close rates, and churn. A company at 8 million dollars
 today with a credible path to 16 million in a year is valued off the 16,
 discounted for how believable the forecast is. A forecast you cannot back
 with pipeline gets marked down to trailing revenue.
 </li>
 <li>
 <strong>Set the base multiple from growth and retention.</strong> Map
 your growth rate and net revenue retention to the range. Above 80 percent
 growth and above 115 percent retention earns 12 to 15 times forward ARR.
 The 40 to 60 percent growth band with retention around 100 percent lands
 at 8 to 10. Below that you are no longer a multiple story, you are a
 discounted cash flow, and the number drops fast. Retention is the swing
 factor: it is the proof that the growth compounds.
 </li>
 <li>
 <strong>Adjust for efficiency and margin.</strong> Take the base multiple
 and move it on two numbers. Gross margin above 75 percent holds the
 multiple, below 65 percent cuts it because less of every revenue dollar
 is real. Burn multiple under 1.5 adds a premium, above 3 caps the price.
 This is the step that separated the 2021 market from 2026: efficiency now
 has its own line in the valuation alongside growth.
 </li>
 <li>
 <strong>Pressure-test against real comparables.</strong> Anchor the
 output on Series B rounds that closed in the last two quarters in your
 category, not headline rounds from the peak. Three to five recent, real
 comparables at your growth and margin profile are worth more than any
 formula. If your derived number sits far outside that cluster, the
 forecast or the multiple is wrong, and diligence will find it before you
 do.
 </li>
 </ol>
 <table className="op-table">
 <thead>
 <tr><th>Driver</th><th>The trap</th><th>The threshold that works</th></tr>
 </thead>
 <tbody>
 <tr><td>Revenue base</td><td>Value off trailing ARR</td><td>Value off defensible forward ARR</td></tr>
 <tr><td>Multiple</td><td>Anchor on 2021 peak comparables</td><td>8 to 15 times forward ARR, median near 10</td></tr>
 <tr><td>Retention</td><td>Lead with logo growth</td><td>Net revenue retention above 110 percent</td></tr>
 <tr><td>Efficiency</td><td>Sell growth at any burn</td><td>Burn multiple under 1.5</td></tr>
 <tr><td>Margin</td><td>Report revenue, hide margin</td><td>Gross margin above 75 percent</td></tr>
 </tbody>
 </table>

 <h2>From my operating seat</h2>
 <p>
 When I sold my last company, the valuation held up in diligence for one
 reason: every number in the forecast had a source a buyer could check.
 We were not selling a story about the market, we were showing contracted
 expansion, real close rates, and a retention curve that proved customers
 stayed and spent more. That is what let us defend the multiple when the
 questions got hard. The rounds I have watched fall apart were the ones
 built on a forecast nobody could back once diligence started pulling on
 it.
 </p>
 <p>
 I run this exact build with the founders I advise before they open a
 Series B. We start with the forward model, tie every line to pipeline and
 contracts, then stress the growth, retention, and burn until the number
 stops moving. In one case a founder wanted to raise at 14 times ARR on the
 strength of a fast growth rate, and the retention curve underneath it was
 barely 98 percent. The honest number was closer to 9 times, and walking in
 with that, plus a clean burn multiple and a defensible forecast, got the
 round done at a price that held. Across NYC, London, and Dubai the pattern
 repeats: the valuation you can prove beats the valuation you want, because
 the one you can prove is the one that survives the term sheet.
 </p>

 <h2>What revenue multiple do Series B investors use in 2026?</h2>
 <p>
 Most Series B software rounds in 2026 price at 8 to 15 times forward ARR,
 with the median closer to 10. The multiple is a scorecard, not a fixed
 number. Growth above 80 percent a year, net revenue retention above 115
 percent, and gross margin above 75 percent push you toward the top.
 Slowing growth, retention below 100 percent, or a burn multiple above 3
 pull you to the floor. Efficiency now carries as much weight as growth.
 </p>

 <h2>What metrics drive a Series B valuation the most?</h2>
 <p>
 Four numbers move the price more than any narrative: growth rate, net
 revenue retention, gross margin, and burn multiple. Retention is the one
 founders underweight and investors weight most, because retention above
 110 percent means the company grows even with no new logos, and that
 compounding is what a multiple pays for. Growth sets the ceiling,
 retention proves it is durable, and burn multiple shows whether the growth
 was bought cheaply or expensively.
 </p>

 <h2>How do I defend a Series B valuation in a down market?</h2>
 <p>
 In a soft market you defend price with efficiency, not growth alone. Walk
 in with a burn multiple under 1.5, retention above 110 percent, and a
 clear path to default-alive, and you argue for a premium while the market
 marks others down. If the numbers will not support your last valuation, a
 structured flat round beats a headline down round that resets your option
 pool and signals weakness to staff and customers. Price on what you can
 prove, not the number you want to protect.
 </p>

 <div className="op-cta-block">
 <h2>Build a Series B number that survives the term sheet</h2>
 <p>
 This is the exact problem I advise on: building the forward model,
 tying every line to pipeline and contracts, and stress-testing growth,
 retention, and burn until the valuation holds under diligence. If your
 number is a comparable and a hope, the round will find the gap. See more
 about{" "}
 <Link href="/services/fractional-cfo/">how I work as a fractional CFO</Link> or{" "}
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
