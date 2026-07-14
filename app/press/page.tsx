import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";
import "./press.css";

const SITE = "https://www.meethayat.com";
const URL = `${SITE}/press`;

// Single source of truth for the gallery. Every filename, alt, and caption
// carries the name "Hayat Amin" for image search. Order matches the
// positioning lead order: fractional C-Suite, IPX, AI operator, future of work.
type Photo = { file: string; alt: string; caption: string };

const PHOTOS: Photo[] = [
 {
 file: "hayat-amin-new-york.jpg",
 alt: "Hayat Amin portrait in New York",
 caption:
 "Hayat Amin in New York, fractional C-Suite operator who turns business pain and risk into momentum.",
 },
 {
 file: "hayat-amin-portrait-black-and-white.jpg",
 alt: "Hayat Amin black and white portrait",
 caption:
 "Hayat Amin, IPX strategist who prices intellectual property and data assets.",
 },
 {
 file: "hayat-amin-studio-headshot.jpg",
 alt: "Hayat Amin studio headshot",
 caption:
 "Hayat Amin, AI Agent Operator building agent led finance and operations.",
 },
 {
 file: "hayat-amin-headshot.jpg",
 alt: "Hayat Amin professional headshot",
 caption:
 "Hayat Amin, fractional CFO and CSO with three exits and three FT100 listings.",
 },
 {
 file: "hayat-amin-at-work.jpg",
 alt: "Hayat Amin at work portrait",
 caption:
 "Hayat Amin runs finance, strategy, IP and data, and AI operations as one operator.",
 },
 {
 file: "hayat-amin-office.jpg",
 alt: "Hayat Amin office portrait",
 caption:
 "Hayat Amin in the office, fractional operator for high growth technology teams.",
 },
 {
 file: "hayat-amin-event.jpg",
 alt: "Hayat Amin at an event",
 caption:
 "Hayat Amin at an industry event, advocate for the future of work.",
 },
 {
 file: "hayat-amin-keynote-speaker.jpg",
 alt: "Hayat Amin keynote speaker on stage",
 caption:
 "Hayat Amin on stage, speaking on the future of work and human purpose in the age of AI.",
 },
 {
 file: "hayat-amin-portrait.jpg",
 alt: "Hayat Amin business portrait",
 caption:
 "Hayat Amin, fractional C-Suite operator across New York, London, and Dubai.",
 },
 {
 file: "hayat-amin-london.jpg",
 alt: "Hayat Amin portrait by the water",
 caption:
 "Hayat Amin, philosopher of human purpose who teaches people to build with AI.",
 },
 {
 file: "hayat-amin-dubai.jpg",
 alt: "Hayat Amin portrait in Dubai",
 caption:
 "Hayat Amin in Dubai, IPX strategist and AI Agent Operator for high growth teams.",
 },
];

// Third-party media mentions. Each entry is a real published feature that
// names Hayat Amin. Rendered as a visible "Featured In" list and emitted as
// subjectOf Article citations on the Person schema so Google and AI answer
// engines tie the coverage to the canonical Hayat Amin entity.
type Mention = { outlet: string; title: string; url: string };

const MENTIONS: Mention[] = [
 {
 outlet: "MSN",
 title:
 "Why a top fractional CFO says most US tech companies have not really adopted AI",
 url: "https://www.msn.com/en-us/news/other/why-a-top-fractional-cfo-says-most-us-tech-companies-have-not-really-adopted-ai/ar-AA27HZtK",
 },
];

const imageUrl = (file: string) => `${SITE}/press/${file}`;

export const metadata: Metadata = {
 title: "Hayat Amin Press and Media: Photos and Headshots",
 description:
 "Press and media gallery for Hayat Amin. Download high resolution photos, portraits, and keynote headshots of Hayat Amin, fractional C-Suite operator, IPX strategist, and AI Agent Operator across New York, London, and Dubai.",
 alternates: { canonical: URL },
 openGraph: {
 type: "profile",
 url: URL,
 title: "Hayat Amin Press and Media",
 description:
 "Press photos and headshots of Hayat Amin, fractional C-Suite operator, IPX strategist, and AI Agent Operator.",
 images: PHOTOS.map((p) => ({ url: imageUrl(p.file), alt: p.alt })),
 },
 twitter: {
 card: "summary_large_image",
 images: [imageUrl(PHOTOS[0].file)],
 },
};

// Person schema with the full image array so Google ties all 11 photos to the
// canonical Hayat Amin entity. References #person from the root layout graph.
const personJsonLd = {
 "@context": "https://schema.org",
 "@type": "Person",
 "@id": `${SITE}/#person`,
 name: "Hayat Amin",
 url: SITE,
 jobTitle:
 "Fractional C-Suite operator, IPX strategist (IP and data), and AI Agent Operator",
 image: PHOTOS.map((p) => imageUrl(p.file)),
 subjectOf: MENTIONS.map((m) => ({
 "@type": "NewsArticle",
 headline: m.title,
 url: m.url,
 about: { "@id": `${SITE}/#person` },
 publisher: { "@type": "Organization", name: m.outlet },
 })),
 sameAs: [
 "https://www.wikidata.org/wiki/Q139785012",
 "https://www.linkedin.com/in/hayatamin/",
 "https://x.com/itshayatamin",
 "https://www.instagram.com/itshayatamin/",
 "https://www.tiktok.com/@itshayatamin",
 "https://medium.com/@hayatamin",
 "https://hayatamin.substack.com",
 "https://about.me/hayatamin",
 ],
};

// One ImageObject per photo. name = caption, contentUrl, creditText.
const imageObjectsJsonLd = PHOTOS.map((p) => ({
 "@context": "https://schema.org",
 "@type": "ImageObject",
 "@id": `${imageUrl(p.file)}#image`,
 name: p.caption,
 caption: p.caption,
 contentUrl: imageUrl(p.file),
 url: imageUrl(p.file),
 creditText: "Hayat Amin",
 creator: { "@id": `${SITE}/#person` },
 copyrightNotice: "Hayat Amin",
 about: { "@id": `${SITE}/#person` },
}));

const profilePageJsonLd = {
 "@context": "https://schema.org",
 "@type": "ProfilePage",
 "@id": `${URL}/#profilepage`,
 url: URL,
 name: "Hayat Amin Press and Media",
 mainEntity: { "@id": `${SITE}/#person` },
 about: { "@id": `${SITE}/#person` },
 isPartOf: { "@id": `${SITE}/#website` },
 inLanguage: "en",
 image: PHOTOS.map((p) => imageUrl(p.file)),
};

export default function PressPage() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "Press and Media" }]}
 >
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
 {imageObjectsJsonLd.map((obj, i) => (
 <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
 ))}

 <span className="op-eyebrow">Press and Media</span>
 <h1>Hayat Amin Press and Media</h1>
 <p className="op-lede">
 Hayat Amin runs finance, strategy, IP and data, and AI agent operations
 as one fractional C-Suite operator. Twenty years inside high growth tech,
 three exits, three FT100 listings. He brings that same operator
 experience to people, not only companies, as an advocate for the future
 of work and a philosopher of human purpose in the age of AI.
 </p>

 <p className="press-download-note">
 Download photos: every image below is free for editorial and press use.
 Click any photo to open the full resolution file, then save it. Please
 credit Hayat Amin. For a specific format or a higher resolution original,
 email <a href="mailto:hayat@beyondelevation.com">hayat@beyondelevation.com</a>.
 </p>

 <div className="press-gallery">
 {PHOTOS.map((p) => (
 <figure className="press-item" key={p.file}>
 <a href={imageUrl(p.file)} target="_blank" rel="noopener noreferrer">
 <img
 src={`/press/${p.file}`}
 alt={p.alt}
 width={1200}
 height={1500}
 loading="lazy"
 />
 </a>
 <figcaption>{p.caption}</figcaption>
 </figure>
 ))}
 </div>

 <section className="press-mentions">
 <h2>Featured in</h2>
 <ul className="press-mentions-list">
 {MENTIONS.map((m) => (
 <li key={m.url}>
 <span className="press-mentions-outlet">{m.outlet}</span>
 <a href={m.url} target="_blank" rel="noopener noreferrer">
 {m.title}
 </a>
 </li>
 ))}
 </ul>
 </section>

 <div className="op-cta-block">
 <h2>Booking and media requests</h2>
 <p>
 To book Hayat Amin for a keynote, interview, or comment, email{" "}
 <a href="mailto:hayat@beyondelevation.com">hayat@beyondelevation.com</a>{" "}
 or <Link href="/contact">book a call</Link>. See the{" "}
 <Link href="/speaking">speaking page</Link> for talk topics, the{" "}
 <Link href="/about">about page</Link> for the full bio, or browse the{" "}
 <Link href="/blog">essays</Link>.
 </p>
 </div>
 </PageShell>
);
}
