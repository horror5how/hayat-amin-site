import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "how-do-i-price-a-b2b-saas-product-for-enterprise-2026-07-18";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-18";
const MOD = "2026-08-19";
const TITLE = "How Do I Price a B2B SaaS Product for Enterprise?";
const DESC =
 "Price enterprise B2B SaaS on the value the buyer captures, not your cost or your self-serve tier. Anchor to a business metric, publish a floor, and never quote a number before discovery. Here is the framework and the numbers, from Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-dubai-4.jpg`;
const PORTRAIT_ALT =
 "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin advises founders on how to price a b2b saas product for enterprise.";

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
 "Price enterprise B2B SaaS on the value the buyer captures, not on your cost and not on your self-serve list price. Pick one business metric the buyer already tracks, such as revenue influenced, seats replaced, or hours saved, tie your price to that metric, and set a published floor so nobody buys enterprise for the price of a team plan. Then never quote a number before discovery, because the right enterprise price is a range you narrow once you know what the deal is worth to them.";

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
 name: "How do I price a B2B SaaS product for enterprise?",
 acceptedAnswer: {
 "@type": "Answer",
 text: LEAD_ANSWER,
 },
 },
 {
 "@type": "Question",
 name: "Should enterprise SaaS pricing be public or hidden?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Publish the floor, hide the ceiling. Put a starting number or a clear qualifier next to the enterprise tier, such as starts at 30,000 per year, so you filter out buyers who were never going to fund a real deal and you anchor the ones who can. Keep the full price private, because the final number depends on scope, seats, and the value at stake, and a fixed public figure caps your largest deals at your smallest customer's budget.",
 },
 },
 {
 "@type": "Question",
 name: "What is the difference between usage-based and seat-based enterprise pricing?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Seat-based pricing charges per user and is simple to forecast, but it breaks when the product's value does not track headcount, and it punishes the buyer for rolling the tool out widely. Usage-based pricing charges on consumption, such as API calls or documents processed, and it grows with the account, but it makes budgets unpredictable and can scare a CFO. Most enterprise deals land on a hybrid: a committed platform fee for predictability plus a usage component that captures upside as the account expands.",
 },
 },
 {
 "@type": "Question",
 name: "How much should I discount an enterprise SaaS deal?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Give a discount only in exchange for something you want: a multi-year commitment, an annual prepay, a case study, or a reference. A discount handed over for nothing teaches the buyer that your list price was fake and trains procurement to grind you every renewal. Cap standard discounting at 15 to 20 percent, put anything larger through a real approval, and always trade the concession for term length or cash up front rather than shaving the number to close this quarter.",
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
 keywords: "Hayat Amin, B2B SaaS pricing, enterprise pricing, value-based pricing, usage-based pricing, fractional CFO, Dubai",
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
 { label: "How Do I Price a B2B SaaS Product for Enterprise?" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
 <h1>How Do I Price a B2B SaaS Product for Enterprise?</h1>
 <p className="op-lede">
 Price enterprise B2B SaaS on the value the buyer captures, not on your
 cost and not on your self-serve list price. Pick one business metric the
 buyer already tracks, such as revenue influenced, seats replaced, or hours
 saved, tie your price to that metric, and set a published floor so nobody
 buys enterprise for the price of a team plan. Then never quote a number
 before discovery, because the right enterprise price is a range you narrow
 once you know what the deal is worth to them.
 </p>

 <h2>Why founders get this wrong</h2>
 <p>
 The common mistake is pricing the enterprise tier off the self-serve one.
 A team plan sits at 40 dollars per seat, so the founder decides enterprise
 is the same number with a volume discount and a logo wall. Now a buyer
 who would have paid 120,000 dollars a year signs for 18,000, and the
 company leaves six figures on the table on a single deal. Enterprise is
 not a bigger version of your small plan. It is a different buyer solving a
 different problem, with a budget set by the value at stake, not by your
 cost to serve.
 </p>
 <p>
 The second mistake is quoting too early. A prospect asks &quot;what does
 this cost&quot; on the first call, the founder blurts a number to seem
 easy to work with, and that number becomes the ceiling for the entire
 negotiation. You anchored the deal before you knew what it was worth. In
 enterprise, the price is the last thing you say, not the first, and every
 number you give before discovery is a number working against you.
 </p>

 <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
 <img
 src="/portraits-hayat/hayat-amin-portrait-dubai-4.jpg"
 alt={PORTRAIT_ALT}
 width={1400}
 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
 loading="lazy"
 />
 <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
 Hayat Amin in Dubai. He advises founders and CEOs across NYC, London,
 and Dubai on pricing, finance, and AI operations.
 </figcaption>
 </figure>

 <h2>The framework I use with clients</h2>
 <p>
 Enterprise pricing is a sequence, not a number you pick once. Five steps,
 in this order, and each one fails without the one before it.
 </p>
 <ol>
 <li>
 <strong>Anchor to a value metric, not a cost metric.</strong> Find the
 one number the buyer already reports to their own board that your
 product moves: pipeline generated, agents replaced, close rate, hours
 returned to the team. Price against that. If your tool lets a
 200-person company retire 30,000 dollars a month of manual work, a
 60,000 dollar annual price is an easy yes. The same price framed as
 &quot;per seat&quot; sounds expensive for no reason.
 </li>
 <li>
 <strong>Publish a floor, hide the ceiling.</strong> Put a real starting
 number on the enterprise tier, for example starts at 30,000 per year.
 The floor filters out buyers who were never going to fund a serious
 deal and anchors the ones who can. The ceiling stays private because it
 moves with scope. A fixed public enterprise price caps your biggest
 deals at your smallest enterprise buyer's budget.
 </li>
 <li>
 <strong>Build three tiers, sell the middle.</strong> A good, better,
 best structure does the persuading for you. The top tier makes the
 middle look reasonable, and the middle is where you want most deals to
 land. Most buyers reject the cheapest option and refuse the most
 expensive, so design the tier you actually want to sell as the one in
 the center, and let the anchors on either side carry it.
 </li>
 <li>
 <strong>Never quote before discovery.</strong> Hold the number until you
 know three things: what problem they are funding, what it costs them
 today, and who signs. When someone asks price early, answer with a
 range and a question: &quot;Enterprise deals run 30,000 to 150,000 a
 year depending on scale. Where do you sit on seats and volume?&quot;
 That keeps the ceiling open and turns the pricing question into a
 discovery question.
 </li>
 <li>
 <strong>Trade every discount for term or cash.</strong> Never discount
 for free. A concession given for nothing tells procurement your list
 price was fiction and guarantees a fight at renewal. Cap normal
 discounts at 15 to 20 percent, and only give more in exchange for a
 multi-year commitment, an annual prepay, or a named reference. The
 discount is currency. Spend it on something you want back.
 </li>
 </ol>
 <table className="op-table">
 <thead>
 <tr><th>Lever</th><th>The trap</th><th>The threshold that works</th></tr>
 </thead>
 <tbody>
 <tr><td>Basis</td><td>Cost plus a margin, or your self-serve seat price</td><td>A value metric the buyer reports to their own board</td></tr>
 <tr><td>Visibility</td><td>A fixed public enterprise price</td><td>Published floor, private ceiling</td></tr>
 <tr><td>Structure</td><td>One flat enterprise number</td><td>Three tiers, engineered to sell the middle</td></tr>
 <tr><td>Timing</td><td>Quote on the first call</td><td>Range early, number after discovery</td></tr>
 <tr><td>Discount</td><td>Shave the price to close this quarter</td><td>15 to 20 percent, only traded for term or prepay</td></tr>
 </tbody>
 </table>

 <h2>From my operating seat</h2>
 <p>
 When I sold my last company, the pricing lesson that stuck was that the
 buyers who paid the most were rarely the ones who negotiated the hardest.
 They were the ones who could see the value clearly, because we had done
 the work to frame the price against a number they already cared about. The
 deals that turned into a grind were the ones where we quoted early and
 anchored ourselves low before the buyer had felt the problem.
 </p>
 <p>
 I run this exact exercise with the founders I advise. We take their real
 win data, find the business metric the product moves, and rebuild the
 enterprise tier around it. In one case a company was selling a 24,000
 dollar flat plan to buyers who were saving several times that in staff
 cost. We moved to a value-anchored floor of 30,000 with a usage component,
 held the number until after discovery, and average enterprise deal size
 roughly doubled inside two quarters without a single lost logo. Across
 NYC, London, and Dubai the pattern repeats: the price was never the
 problem, the framing was.
 </p>

 <h2>Should enterprise SaaS pricing be public or hidden?</h2>
 <p>
 Publish the floor, hide the ceiling. Put a starting number or a clear
 qualifier next to the enterprise tier, such as starts at 30,000 per year,
 so you filter out buyers who were never going to fund a real deal and you
 anchor the ones who can. Keep the full price private, because the final
 number depends on scope, seats, and the value at stake. A fixed public
 figure caps your largest deals at your smallest customer's budget.
 </p>

 <h2>Usage-based or seat-based pricing for enterprise?</h2>
 <p>
 Seat-based pricing is simple to forecast but breaks when value does not
 track headcount, and it punishes the buyer for rolling the tool out
 widely. Usage-based pricing grows with the account but makes budgets
 unpredictable and can scare a CFO. Most enterprise deals land on a hybrid:
 a committed platform fee for predictability plus a usage component that
 captures upside as the account expands.
 </p>

 <h2>How much should I discount an enterprise deal?</h2>
 <p>
 Give a discount only in exchange for something you want: a multi-year
 commitment, an annual prepay, a case study, or a reference. A discount
 handed over for nothing teaches the buyer that your list price was fake
 and trains procurement to grind you every renewal. Cap standard
 discounting at 15 to 20 percent, put anything larger through a real
 approval, and always trade the concession for term length or cash up
 front.
 </p>

 <div className="op-cta-block">
 <h2>Rebuild your pricing around the value you create</h2>
 <p>
 This is the exact problem I advise on: finding the metric your buyer
 already cares about, engineering the tier structure that sells the deal
 you want, and holding the number until discovery is done. If your
 enterprise pricing is a discounted version of your small plan, the value
 is trapped in the framing. See more about{" "}
 <Link href="/services/fractional-cfo/">how I work on pricing and finance</Link> or{" "}
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
