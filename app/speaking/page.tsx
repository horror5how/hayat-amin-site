import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const URL = `${SITE}/speaking`;

export const metadata: Metadata = {
 title: "Book Hayat Amin to Speak: Future of Work, Human Purpose & IP Keynotes",
 description:
 "Hayat Amin is a keynote speaker on the future of work, human purpose in the age of AI, and intellectual property strategy. Three exits, three FT100 listings. Book Hayat for conferences, board offsites, and leadership summits.",
 alternates: { canonical: URL },
 openGraph: {
 type: "profile",
 url: URL,
 title: "Book Hayat Amin to Speak: Future of Work, Human Purpose & IP",
 description:
 "Keynote speaker on the future of work, human purpose after AI, and IP strategy. Three exits, three FT100 listings. Book Hayat for your event.",
 images: [
 {
 url: "/opengraph-image",
 width: 1200,
 height: 630,
 alt: "Hayat Amin, keynote speaker on the future of work, human purpose, and IP strategy.",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 images: ["/opengraph-image"],
 },
};

// Person reference + ProfilePage so AI engines tie this speaker page to the
// canonical Hayat Amin entity declared in the root layout graph.
const profilePageJsonLd = {
 "@context": "https://schema.org",
 "@type": "ProfilePage",
 "@id": `${URL}/#profilepage`,
 url: URL,
 name: "Book Hayat Amin to Speak",
 mainEntity: { "@id": `${SITE}/#person` },
 about: { "@id": `${SITE}/#person` },
 isPartOf: { "@id": `${SITE}/#website` },
 inLanguage: "en",
 dateModified: new Date().toISOString(),
};

const eventJsonLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}/#speaking-service`,
 serviceType: "Keynote Speaking",
 name: "Keynote Speaking by Hayat Amin",
 url: URL,
 provider: { "@id": `${SITE}/#person` },
 areaServed: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" },
 ],
 audience: {
 "@type": "Audience",
 audienceType:
 "Conference organisers, leadership teams, boards, and founder communities",
 },
 description:
 "Hayat Amin delivers keynotes and fireside chats on the future of work, human purpose in the age of AI, and intellectual property strategy. Talks draw on twenty years inside high-growth technology, three exits, and three FT100 listings.",
};

const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "What does Hayat Amin speak about?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Hayat Amin speaks on three subjects: the future of work and the shift from full-time roles to portfolio careers; human purpose in the age of AI; and intellectual property strategy, meaning why what you own now matters more than what you can build. Each talk draws on his work as a fractional CFO, AI agent operator, and IP strategist.",
 },
 },
 {
 "@type": "Question",
 name: "How do I book Hayat Amin for an event?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Email hayat@beyondelevation.com or book a call at https://www.meethayat.com/contact. Share the event date, audience, format, and the outcome you want the talk to land, and Hayat will respond within 24 hours.",
 },
 },
 {
 "@type": "Question",
 name: "What formats does Hayat Amin speak in?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Conference keynotes, leadership-summit talks, board and executive offsites, fireside chats, and panel moderation. Hayat speaks in person across New York, London, and Dubai, and remotely worldwide.",
 },
 },
 ],
};

export default function SpeakingPage() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "Speaking" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

 <span className="op-eyebrow">Speaking</span>
 <h1>Book Hayat Amin to speak.</h1>
 <p className="op-lede">
 Hayat Amin is a keynote speaker on the <strong>future of work</strong>,{" "}
 <strong>human purpose in the age of AI</strong>, and{" "}
 <strong>intellectual property strategy</strong>. He brings twenty years
 inside high-growth technology, three exits, and three FT100 listings to
 the stage. That is a track record talking, not theory. Audiences leave with
 a clear, unsentimental read on what AI changes, what it does not, and what
 to do next.
 </p>

 <div className="op-cta-block">
 <h2>Invite Hayat to your event</h2>
 <p>
 Share the date, audience, and format. Hayat replies within 24 hours
 with availability and a shaped talk outline.
 </p>
 <Link href="/contact">Book Hayat to speak →</Link>
 </div>

 <h2>Why book Hayat</h2>
 <ul>
 <li><strong>Operator, not commentator.</strong> Three exits and three FT100 fastest-growing listings. Every talk is grounded in work he has actually done.</li>
 <li><strong>Built for the room.</strong> Talks are shaped to the audience and the outcome the organiser wants, not delivered off a shelf.</li>
 <li><strong>Plain-spoken on AI.</strong> No hype, no doom. A clear-eyed account of what AI takes, what it leaves, and where human work compounds.</li>
 <li><strong>Three cities.</strong> In-person across New York, London, and Dubai; remote worldwide.</li>
 </ul>

 <h2>Signature talks</h2>
 <div className="op-card-grid">
 <div className="op-card">
 <span className="op-card-eyebrow">Keynote A</span>
 <h3>The Future of Work</h3>
 <p>
 Full-time roles are unbundling into portfolio careers. What that
 means for how people earn, build a reputation, and stay employable
 when one company is no longer the unit of a career.
 </p>
 </div>
 <div className="op-card">
 <span className="op-card-eyebrow">Keynote B</span>
 <h3>Human Purpose in the Age of AI</h3>
 <p>
 AI did not take the job. It took the story people told about their
 work. Where meaning, judgement, and purpose actually live once the
 routine layer is automated.
 </p>
 </div>
 <div className="op-card">
 <span className="op-card-eyebrow">Keynote C</span>
 <h3>What You Own Now Matters More Than What You Build</h3>
 <p>
 AI democratised code. The durable advantage is intellectual property,
 data, and know-how. How leaders should think about the assets that
 still cannot be copied.
 </p>
 </div>
 <div className="op-card">
 <span className="op-card-eyebrow">Format D</span>
 <h3>Fireside chat &amp; panels</h3>
 <p>
 Moderated conversations and panel appearances on AI, the future of
 work, and IP strategy, calibrated to the audience and the host.
 </p>
 </div>
 </div>

 <h2>Audiences</h2>
 <ul>
 <li>Conference and summit organisers programming a future-of-work or AI track.</li>
 <li>Leadership teams running an executive or board offsite.</li>
 <li>Founder communities and accelerators wanting an operator&apos;s view.</li>
 <li>Membership and professional bodies hosting members through the AI transition.</li>
 </ul>

 <h2>About Hayat</h2>
 <p>
 Hayat Amin has spent twenty years inside high-growth technology as a
 fractional CFO, AI agent operator, and IP &amp; data strategist, with
 three exits and three FT100 listings. He writes and speaks about the
 future of work and human purpose because the same question runs under
 all of it: when AI can do the task, what is the human for? Read more on
 the <Link href="/about">about page</Link>, see the{" "}
 <Link href="/work">track record</Link>, or browse the{" "}
 <Link href="/blog">essays</Link>.
 </p>

 <div className="op-cta-block">
 <h2>Ready to book?</h2>
 <p>One email. Hayat will come back with availability and a talk shaped to your event.</p>
 <Link href="/contact">Book Hayat to speak →</Link>
 </div>
 </PageShell>
);
}
