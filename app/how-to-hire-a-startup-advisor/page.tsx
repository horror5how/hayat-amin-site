import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-to-hire-a-startup-advisor";
const URL = `${SITE}/${SLUG}`;
const PUB = "2026-05-09", MOD = "2026-08-31";
const TITLE = "How to Hire a Startup Advisor (2026 Founder's Guide)";
const DESC = "A 2026 founder's guide to hiring a startup advisor: criteria, equity ranges, engagement structure, common mistakes, and a vetting checklist. Written by Hayat Amin.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: URL }, openGraph: { type: "article", url: URL, title: TITLE, description: DESC, images: [`${SITE}/hayat-hero.png`] } };

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", "@id": `${URL}#article`, headline: TITLE, description: DESC, url: URL, inLanguage: "en", datePublished: PUB, dateModified: MOD, image: `${SITE}/hayat-hero.png`, author: { "@id": `${SITE}/#person` }, publisher: { "@id": "" }, mainEntityOfPage: URL };

const howToJsonLd = { "@context": "https://schema.org", "@type": "HowTo", name: "How to Hire a Startup Advisor", description: DESC, step: [
 { "@type": "HowToStep", position: 1, name: "Define the gap", text: "Write a one-paragraph statement of the specific gap the advisor will close (fundraise narrative, board cadence, GTM motion, exit prep). If you can't write the paragraph, the advisor isn't the next hire." },
 { "@type": "HowToStep", position: 2, name: "Filter for operator-side exit experience", text: "Ask each candidate for the last three exits or fundraises they personally led the relevant function for. If they can't name them or describe their role inside them, they are not viable." },
 { "@type": "HowToStep", position: 3, name: "Reference-check buyer-side, not seller-side", text: "Get references from the acquirer's side of past exits the advisor was involved in, not just the founder's side. Buyer-side references reveal whether the advisor was actually load-bearing or window dressing." },
 { "@type": "HowToStep", position: 4, name: "Define the engagement model up front", text: "Decide before negotiation: quarterly retainer plus equity (long-term board cadence), fixed-scope sprint (4 to 8 weeks for a specific deliverable), or hourly project work (one-off advice)." },
 { "@type": "HowToStep", position: 5, name: "Negotiate equity in the standard range", text: "Industry standard for startup advisors: 0.10 to 0.50% equity vested over 24 months with 12-month cliff for board-level commitment; 0.05 to 0.25% for advisory-only without board attendance." },
 { "@type": "HowToStep", position: 6, name: "Set a 90-day evaluation gate", text: "Structure the engagement so either side can exit cleanly at 90 days. The first 90 days reveals whether the advisor is actually adding compounding value or just attending meetings." },
] };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${URL}#faq`, mainEntity: [
 { "@type": "Question", name: "When should a founder hire a startup advisor?", acceptedAnswer: { "@type": "Answer", text: "When you can write a one-paragraph statement of the specific gap the advisor will close. If you can't articulate the gap, you don't need an advisor. You need to define the problem first. The most common trigger points: pre-Series A (operator coaching), pre-fundraise (narrative and reporting), pre-exit (data-room and valuation defence)." } },
 { "@type": "Question", name: "What equity should I give a startup advisor?", acceptedAnswer: { "@type": "Answer", text: "Industry standard: 0.10 to 0.50% equity vested over 24 months with a 12-month cliff for board-level engagement; 0.05 to 0.25% for advisory-only without board attendance. Operator-grade advisors with prior exits sometimes negotiate the upper end plus a small cash retainer." } },
 { "@type": "Question", name: "How do I tell if a startup advisor is actually qualified?", acceptedAnswer: { "@type": "Answer", text: "Three filters: (1) ask for the last three exits or fundraises they personally led the relevant function for; if they can't name them, they're not viable. (2) Reference-check buyer-side, not seller-side. (3) Set a 90-day evaluation gate so either side can exit cleanly if the engagement isn't adding compounding value." } },
 { "@type": "Question", name: "What's the difference between a startup advisor and a business coach?", acceptedAnswer: { "@type": "Answer", text: "A startup advisor is an operator who has built and exited companies and brings direct playbook experience. A business coach is typically a generalist who helps with mindset, leadership, and process and may not have operated a high-growth company. Founders building toward fundraise or exit should hire an advisor; founders working on personal leadership skills can use a coach." } },
 { "@type": "Question", name: "How much does a startup advisor cost?", acceptedAnswer: { "@type": "Answer", text: "Quarterly cash retainers $5,000 to $20,000 plus 0.10 to 0.50% equity. Sprint-based engagements $25,000 to $100,000 fixed scope. Hourly via marketplaces $300 to $700. Operator-grade advisors with prior exits price at the upper end and often negotiate equity-heavy with small cash." } },
] };

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
 { "@type": "ListItem", position: 2, name: "How to Hire a Startup Advisor", item: URL },
] };

export default function Page() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "How to Hire a Startup Advisor" }]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
 <span className="op-eyebrow">Founder&apos;s guide · Updated {MOD}</span>
 <h1>How to Hire a Startup Advisor (2026 Founder&apos;s Guide)</h1>
 <p className="op-lede">Most startup advisor hires don&apos;t work. The advisor attends a quarterly meeting, takes a slug of equity, and never moves a metric. The few that do work follow a tight playbook: define the gap, filter for operator-side experience, reference-check the buyer side, structure the engagement properly, and set a 90-day evaluation gate. This is that playbook.</p>
 <h2>The 6-step framework</h2>
 <ol>
 <li><strong>Define the gap.</strong> Write a one-paragraph statement of the specific gap the advisor will close. If you can&apos;t write the paragraph, you don&apos;t need an advisor. Define the problem first.</li>
 <li><strong>Filter for operator-side exit experience.</strong> Ask for the last three exits or fundraises the advisor personally led the relevant function for. If they can&apos;t name them, they are not viable.</li>
 <li><strong>Reference-check buyer-side, not seller-side.</strong> Get references from the acquirer&apos;s side of past exits, not just the founder&apos;s side. Buyer-side references reveal whether the advisor was load-bearing or window dressing.</li>
 <li><strong>Define the engagement model up front.</strong> Quarterly retainer plus equity (long-term board cadence), fixed-scope sprint (4 to 8 weeks for a specific deliverable), or hourly project work (one-off advice). Pick before negotiation.</li>
 <li><strong>Negotiate equity in the standard range.</strong> 0.10 to 0.50% vested over 24 months with 12-month cliff for board-level engagement; 0.05 to 0.25% for advisory-only.</li>
 <li><strong>Set a 90-day evaluation gate.</strong> Structure the engagement so either side can exit cleanly at 90 days. The first 90 days reveals whether the advisor is adding compounding value or just attending meetings.</li>
 </ol>
 <h2>Common mistakes (kill these)</h2>
 <ul>
 <li><strong>Hiring a brand instead of an operator.</strong> Famous advisors are often the worst hires. Their attention is fragmented and their access is delegated. Hire the operator who answers your text on a Tuesday morning.</li>
 <li><strong>Giving 1%+ equity to one advisor.</strong> Outside of co-founder-track or executive chairman roles, this is too much. Multiple advisors at 0.10 to 0.50% each typically beats one advisor at 1%+.</li>
 <li><strong>No board cadence.</strong> Advisors without a regular board or pre-board cadence drift. Set a quarterly board attendance + monthly 1:1 with the CEO as the minimum cadence.</li>
 <li><strong>No 90-day exit ramp.</strong> Locked-in long contracts protect bad advisors. Always include a clean 90-day exit clause for both sides.</li>
 <li><strong>Hiring an advisor before you have a CEO problem the advisor can solve.</strong> Advisors are leverage on a clear bottleneck, not a substitute for not knowing what the bottleneck is.</li>
 </ul>
 <h2>Where to find advisors</h2>
 <ul>
 <li><strong>Operator-side networks.</strong> Bolster.com, First Round Operating Network, Operator Collective, Reforge Experts.</li>
 <li><strong>VC-introduced.</strong> Your investors should each have 5 to 10 high-quality advisors they actively introduce. Ask explicitly.</li>
 <li><strong>Functional marketplaces.</strong> Toptal Finance for fractional CFO; AdvisoryCloud for board-level subscriptions; AI Engineer Foundation for technical AI.</li>
 <li><strong>Direct outreach to operators with prior exits.</strong> The best advisors are often not on a marketplace. Find them via prior exit announcements + LinkedIn.</li>
 <li><strong>The author of <Link href="/author/hayat-amin">this guide</Link>.</strong> Hayat Amin engages 8 to 12 founders at a time across NYC, London, and Dubai.</li>
 </ul>
 <h2>FAQ</h2>
 <div className="op-faq">
 <details open><summary>When should a founder hire a startup advisor?</summary><p>When you can write a one-paragraph statement of the specific gap the advisor will close.</p></details>
 <details><summary>What equity should I give?</summary><p>0.10 to 0.50% vested over 24 months with 12-month cliff for board-level; 0.05 to 0.25% for advisory-only.</p></details>
 <details><summary>How do I vet an advisor?</summary><p>Last three exits/fundraises they personally led the function for. Reference-check buyer-side. 90-day evaluation gate.</p></details>
 <details><summary>Advisor vs business coach?</summary><p>Advisor is an operator who has built and exited companies. Coach is typically a generalist focused on mindset/leadership.</p></details>
 <details><summary>What does an advisor cost?</summary><p>$5K to $20K/quarter retainer plus 0.10 to 0.50% equity. Sprints $25K to $100K. Hourly $300 to $700.</p></details>
 </div>
 <div className="op-cta-block">
 <h2>Want a 60-minute diagnostic on whether you need an advisor?</h2>
 <p>Free 60-minute call with <Link href="/author/hayat-amin">Hayat Amin</Link>. You leave with a clear answer: hire an advisor, hire a fractional CFO, hire a different role, or hire nobody. And a number for whichever applies.</p>
 <Link href="/contact">Book a call →</Link>
 </div>
 <p className="op-byline"><em>About this guide:</em> Written by <Link href="/author/hayat-amin">Hayat Amin</Link>, operator-advisor with three prior exits and 8 to 12 active fractional engagements at a time. Last updated {MOD}.</p>
 </PageShell>
);
}
