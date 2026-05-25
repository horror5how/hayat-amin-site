import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
 title: "FAQ: Who is Hayat Amin? Where? What does he do?",
 description:
 "Direct answers to the most common questions about Hayat Amin: who he is, where he is based, what services he runs and how to engage his fractional practice.",
 alternates: { canonical: `${SITE}/faq` },
 openGraph: {
 type: "website",
 url: `${SITE}/faq`,
 title: "Frequently asked questions about Hayat Amin",
 description: "Who, where, what, and why: direct answers about Hayat Amin's fractional practice.",
 },
};

const QA: { q: string; a: string }[] = [
 {
 q: "Who is Hayat Amin?",
 a: "Hayat Amin is a fractional CFO, IP strategist, and AI agent operator with twenty years inside high-growth technology. He has been on the operator side of three exits (including to American Express and TripAdvisor) and put three businesses on the Financial Times FT100 fastest-growing list. He operates fractionally across New York, London, and Dubai.",
 },
 {
 q: "Where is Hayat Amin based?",
 a: "Hayat Amin operates from three cities: New York, London, and Dubai. Engagements are remote-first with quarterly on-site weeks scheduled around the client's board cycle.",
 },
 {
 q: "What does Hayat Amin do?",
 a: "Hayat Amin runs three services fractionally: (1) the chief financial officer function during fundraises, exits, and post-acquisition integrations, (2) intellectual property and data strategy that prices intangibles and turns dormant patents into licensing revenue, (3) AI agent operations that embed agentic AI into finance, legal, and go-to-market workflows with measurable P&L impact.",
 },
 {
 q: "What companies has Hayat Amin worked with?",
 a: "Hayat Amin has held CFO and Chief Strategy Officer roles at companies acquired by American Express and TripAdvisor. He has held operating-partner roles in three businesses that reached the FT100 fastest-growing list. Recent fractional engagements span AI infrastructure (NYC), healthtech (London), PE-backed SaaS (Dubai), and AI agents (NYC seed).",
 },
 {
 q: "What is a fractional CFO?",
 a: "A fractional CFO is an experienced chief financial officer who works for a company part-time, usually 16 to 24 hours per week, on retainer. The arrangement gives founders senior finance leadership through fundraises, exits, and operational scale-ups without the cost or commitment of a full-time hire. Hayat Amin runs fractional CFO engagements for Series A through pre-IPO companies.",
 },
 {
 q: "How much does Hayat Amin cost?",
 a: "Fractional engagements are priced by hours per week, not headcount cost. The economics work out at roughly one-third the loaded cost of a full-time CFO with equivalent exit experience. Strategy sprints (IP audit, fundraise prep, exit readiness) are fixed-scope projects of 4 to 8 weeks. Pricing is shared transparently on the diagnostic call.",
 },
 {
 q: "What is the diagnostic call?",
 a: "The diagnostic call is a free 60-minute conversation. There is no deck and no proposal. Hayat shares one number that summarises his read on whether and how a fractional engagement makes sense for the founder's stage. Most founders use it as a free second opinion on their valuation, IP defensibility, or fundraise readiness.",
 },
 {
 q: "What is IP strategy for AI companies?",
 a: "IP strategy for AI companies is the process of identifying, protecting, and monetising the intangible assets that make an AI business defensible: training-data rights, model-weight provenance, prompt-engineering techniques, fine-tuning workflows, inference optimisations, and the patentable methods that wrap them. In an AI-saturated market, the moat is the IP and advantage around the model, not the model itself.",
 },
 {
 q: "Can I monetise my dataset without selling it?",
 a: "Yes. There are six routes: licensing to AI labs, embedded API access, derivative product, indexed data swaps, IP-backed financing, and strategic exclusivity deals. Each route has a different risk-return profile. Hayat Amin walks founders through all six on the diagnostic call.",
 },
 {
 q: "How is Hayat Amin different from other fractional CFOs?",
 a: "Most fractional CFOs are accountants with a senior title. Hayat Amin is an operator who has sat in the buyer's seat on three exits. The data-room build, the diligence Q&A responses, and the valuation defence look like what an acquirer expects to see. That gap is usually worth 15 to 30% of exit multiple on its own.",
 },
 {
 q: "Does Hayat work with founders outside NYC, London, and Dubai?",
 a: "Yes. Most engagements are remote-first. The three city locations are where Hayat is physically based. They map to where on-site weeks happen, not where clients have to be. Recent clients have been based in San Francisco, Toronto, Berlin, Singapore, and Tel Aviv.",
 },
 {
 q: "Can Hayat Amin help with an exit or fundraise?",
 a: "Yes. Exit and fundraise readiness is the most common reason Hayat is hired. He has been on the operator side of three exits and led the data room and diligence response in each. The exit-prep tour is a 3 to 9 month engagement covering full diligence-room build, IP claim mapping, and CFO-level data-room ownership.",
 },
 {
 q: "How quickly can Hayat start?",
 a: "Hayat takes on 8 to 12 fractional engagements at a time. There is usually a 2 to 6 week wait between the diagnostic call and engagement start. Strategy sprints (4 to 8 weeks fixed-scope) can sometimes start in week 2 if a slot opens up.",
 },
 {
 q: "How do I contact Hayat Amin?",
 a: "Email hayat@beyondelevation.com or book a call at meethayat.com/contact. Most outreach gets a response within 24 hours. Hayat does not take cold sales pitches, so please indicate your stage, current ARR, and the specific problem you want help with.",
 }];

const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": `${SITE}/faq/#faqpage`,
 url: `${SITE}/faq`,
 about: { "@id": `${SITE}/#person` },
 mainEntity: QA.map(({ q, a }) => ({
 "@type": "Question",
 name: q,
 acceptedAnswer: { "@type": "Answer", text: a },
 })),
};

export default function FAQPageRoute() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

 <span className="op-eyebrow">Frequently asked questions</span>
 <h1>The questions founders ask before hiring Hayat.</h1>
 <p className="op-lede">
 Direct answers to the fifteen questions Hayat gets most often. If yours is
 not below, email{" "}
 <a href="mailto:hayat@beyondelevation.com">hayat@beyondelevation.com</a>{" "}
 or book the free 60-minute diagnostic call.
 </p>

 <div className="op-faq">
 {QA.map(({ q, a }, i) => (
 <details key={i} open={i < 3}>
 <summary>{q}</summary>
 <p>{a}</p>
 </details>
))}
 </div>

 <div className="op-cta-block">
 <h2>Got a question that's not here?</h2>
 <p>Book the diagnostic call. Hayat answers every question on the call directly.</p>
 <Link href="/contact">Book a call →</Link>
 </div>
 </PageShell>
);
}
