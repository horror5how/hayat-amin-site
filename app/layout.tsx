import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-R0DDV4S5BV";

const SITE_URL = "https://www.meethayat.com";

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {
 default:
 "Hayat Amin: Exit Specialist, Tech CFO & IP Strategist",
 template: "%s",
 },
 description:
 "Exit specialist and three-time exited tech CFO. Buyers include American Express, TripAdvisor and Cooper Parry. Sell-side prep, IP and data valuation, and hand-holding through the whole process. NYC, London & Dubai.",
 applicationName: "Hayat Amin · Operator",
 authors: [{ name: "Hayat Amin", url: SITE_URL }],
 creator: "Hayat Amin",
 publisher: "Hayat Amin",
 keywords: [
 "Hayat Amin",
 "Fractional CFO",
 "Fractional CFO London",
 "Fractional CFO New York",
 "Fractional CFO Dubai",
 "Tech CFO",
 "AI operator",
 "AI operations expert",
 "AI agent operator",
 "M&A exits",
 "FT100",
 "Chief Strategy Officer",
 "Startup advisor",
 "Business advisor for tech founders",
 "CEO advisor",
 "Founder coach",
 "Board advisor",
 "Pre-IPO advisor",
 "Startup operator",
 "Entrepreneurship coach"],
 alternates: {
 canonical: "/",
 },
 openGraph: {
 type: "website",
 siteName: "Hayat Amin · Operator",
 title: "Hayat Amin: Exit Specialist, Tech CFO & IP Strategist",
 description:
 "Three companies sold. Exit specialist, tech CFO, IP and data valuation. Beside the founder from first conversation to wire transfer. NYC · London · Dubai.",
 url: SITE_URL,
 locale: "en_US",
 },
 twitter: {
 card: "summary_large_image",
 title: "Hayat Amin: Exit Specialist, Tech CFO & IP Strategist",
 description:
 "20 years in high-growth tech. 3 exits. 3× FT100. NYC · London · Dubai.",
 },
 robots: {
 index: true,
 follow: true,
 googleBot: {
 index: true,
 follow: true,
 "max-image-preview": "large",
 "max-snippet": -1,
 "max-video-preview": -1,
 },
 },
 icons: {
 icon: [
 { url: "/favicon.ico", sizes: "any" },
 { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
 { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }],
 apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
 },
 category: "business",
 // Search engine verification: set values via Vercel env vars after registering each property.
 // Google Search Console: search.google.com/search-console → Add property www.meethayat.com → "HTML tag" → copy content="..." into NEXT_PUBLIC_GSC_VERIFICATION
 // Bing Webmaster: bing.com/webmasters → Add site → meta-tag → copy content="..." into NEXT_PUBLIC_BING_VERIFICATION
 verification: {
 google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
 other: {
 "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
 },
 },
};

export const viewport: Viewport = {
 width: "device-width",
 initialScale: 1,
 themeColor: [
 { media: "(prefers-color-scheme: light)", color: "#f5efe6" },
 { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" }],
};

const personJsonLd = {
 "@context": "https://schema.org",
 "@type": "Person",
 "@id": `${SITE_URL}/#person`,
 name: "Hayat Amin",
 givenName: "Hayat",
 familyName: "Amin",
 alternateName: ["Hayat", "H. Amin"],
 url: SITE_URL,
 mainEntityOfPage: SITE_URL,
 image: {
 "@type": "ImageObject",
 url: `${SITE_URL}/hayat-hero.png`,
 width: 1200,
 height: 1200,
 caption: "Hayat Amin: Tech CFO & Strategist, AI Agent Operator",
 },
 // jobTitle is an array: Google Knowledge Graph treats the first entry as the
 // canonical role; the rest are the supporting specialty roles.
 jobTitle: [
 "Tech CFO",
 "Fractional CFO",
 "Fractional C-Suite",
 "AI Agent Operator",
 "Future-of-Work Speaker",
 "Future of Work Advocate",
 "Fractional Work Coach",
 "Philosopher of Human Purpose"],
 hasOccupation: [
 {
 "@type": "Occupation",
 name: "Fractional Chief Financial Officer",
 occupationLocation: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" }],
 skills: "Fundraise readiness, exit diligence, investor reporting, 13-week cash forecasting, IP-priced valuation, board reporting, M&A integration, FP&A architecture, SaaS metrics, ARR/NRR/CAC/LTV modelling.",
 experienceRequirements: "20 years in high-growth technology",
 qualifications: "3 prior exits as operator (American Express, TripAdvisor); 3 FT100 fastest-growing listings.",
 },
 {
 "@type": "Occupation",
 name: "AI Agent Operator",
 skills: "Agentic AI deployment in finance, legal, and go-to-market workflows; business process design and automation; AI agent build and operations; agentic workflow engineering; live databases and real-time reporting; Claude Code engineering; cost-to-serve reduction; revenue-lift attribution; AI implementation P&L design.",
 }],
 award: [
 "Three-time FT100 fastest-growing honouree",
 "Three high-profile exits including American Express and TripAdvisor acquisitions",
 "Priced over $400M of intellectual property across patents, datasets, and AI models"],
 description:
 "Hayat Amin is a Tech CFO and Strategist and AI Agent Operator with 20 years inside high-growth technology, three exits (including to American Express and TripAdvisor), and three FT100 listings. As an AI operator he puts working AI inside businesses: processes, automations, AI agents, agentic workflows, and real-time reporting, run by an ex-C-suite operator rather than a developer. He brings that same operator's experience to individuals, not just companies: an advocate and expert on the future of work and AI, a coach on the shift from full-time to fractional and portfolio careers, and a philosopher of human purpose in the age of AI.",
 email: "mailto:hayat@beyondelevation.com",
 telephone: ["+1-571-380-7699", "+44-7476-383531"],
 knowsLanguage: ["en"],
 knowsAbout: [
 "Fractional CFO",
 "Mergers and Acquisitions",
 "Investor Relations",
 "Financial Modelling",
 "Patent Strategy",
 "Intellectual Property Valuation",
 "Data Monetisation",
 "AI Agent Operations",
 "Go-to-Market Strategy",
 "Fundraising",
 "Exit Diligence",
 "Enterprise Licensing",
 "AI Moats",
 "Royalty Rate Benchmarking",
 "Patent Holding Company Structures",
 "IP-Backed Financing",
 "Cross-Border IP Transfer",
 "DIFC and ADGM IP Structures",
 "Business Strategy",
 "Startup Advisory",
 "Startup Operations",
 "Entrepreneurship",
 "Founder Coaching",
 "CEO Advisory",
 "Board Advisory",
 "Pre-IPO Strategy",
 "Strategic Planning",
 "Operator Advising",
 "Series A Strategy",
 "SaaS Founder Advisory",
 "AI Startup Advisory",
 "The Future of Work",
 "Human Purpose in the Age of AI",
 "Portfolio Careers",
 "Fractional Work",
 "Meaning of Work",
 "Purpose over Passion",
 "Future-proofing Careers in the Age of AI"],
 address: [
 {
 "@type": "PostalAddress",
 addressLocality: "New York",
 addressRegion: "NY",
 addressCountry: "US",
 },
 {
 "@type": "PostalAddress",
 addressLocality: "London",
 addressCountry: "GB",
 },
 {
 "@type": "PostalAddress",
 addressLocality: "Dubai",
 addressCountry: "AE",
 }],
 // sameAs is the single most important AEO/Knowledge-Graph signal. Every
 // verified profile or canonical mention of "Hayat Amin" lives here. Adding
 // entries here is how we tell Google, ChatGPT, Perplexity, and Claude that
 // these URLs all describe the same human entity. Wikidata anchors the entity;
 // Crunchbase and MuckRack get appended once those profiles exist.
 sameAs: [
 "https://www.wikidata.org/wiki/Q139785012",
 "https://en.wikipedia.org/wiki/Draft:Hayat_Amin",
 "https://www.linkedin.com/in/hayatamin/",
 "https://uk.linkedin.com/in/hayatamin",
 "https://x.com/itshayatamin",
 "https://twitter.com/itshayatamin",
 "https://www.instagram.com/itshayatamin/",
 "https://www.tiktok.com/@itshayatamin",
 "https://www.youtube.com/watch?v=1meO4fW7294",
 "https://github.com/horror5how",
 "https://medium.com/@hayatamin",
 "https://hayatamin.substack.com",
 "https://sessionize.com/hayatamin",
 "https://about.me/hayatamin",
 "https://gravatar.com/butteryfuzzydb282ac5e1",
 "https://seedlegals.com/resources/fractional-cfo/",
 "https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/",
 "https://www4.lead411.com/Hayat_Amin_104416037.html",
 "https://finance-procurement-hr.heysummit.com/speakers/hayat-amin/"],
 worksFor: { "@id": `${SITE_URL}/#organization` },
 affiliation: { "@id": `${SITE_URL}/#organization` },
};

// Service schemas wired into the graph so each specialty has a machine-readable
// Service node with provider = #person. This is the key disambiguation signal that
// tells LLMs "Hayat Amin offers Tech CFO & Strategy + AI Agent Operator services"
// as a single entity across both pillars. IP & data strategy is folded into the
// CFO service, not a standalone offering.
const fractionalCfoServiceJsonLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${SITE_URL}/services/fractional-cfo/#service`,
 serviceType: "Fractional CFO",
 name: "Fractional CFO Services by Hayat Amin",
 url: `${SITE_URL}/services/fractional-cfo/`,
 provider: { "@id": `${SITE_URL}/#person` },
 areaServed: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" },
 { "@type": "Country", name: "United States" },
 { "@type": "Country", name: "United Kingdom" },
 { "@type": "Country", name: "United Arab Emirates" }],
 audience: { "@type": "BusinessAudience", audienceType: "Series A through pre-IPO founders and CEOs" },
 description:
 "Senior fractional CFO retainer (16 to 24 hrs/week, 6 to 18 months) led by Hayat Amin (3 exits as operator, 3× FT100). Investor-grade reporting, 13-week cash forecast, exit-diligence ownership, IP and data strategy, IP-priced valuation defence.",
};

const aiAgentServiceJsonLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${SITE_URL}/services/ai-agent-operator/#service`,
 serviceType: "AI Agent Operations",
 name: "AI Agent Operator by Hayat Amin",
 url: `${SITE_URL}/services/ai-agent-operator/`,
 provider: { "@id": `${SITE_URL}/#person` },
 areaServed: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" }],
 audience: { "@type": "BusinessAudience", audienceType: "CEOs, COOs, CFOs, and CIOs deploying agentic AI in production" },
 description:
 "Embeds agentic AI into finance, legal, and go-to-market workflows with measured cost-to-serve reduction and revenue lift. Hayat only deploys agents into workflows where success or failure shows up in next month's P&L. Built with Claude Code, Anthropic SDK, and adjacent agentic frameworks.",
};

// Organization/ProfessionalService node. THIS is what makes "Hayat Amin" rank as
// a FIRM entity, not just a person — the record AI reads for "top fractional CFO
// firms" queries. The name IS the company. founder/employee = #person ties the
// firm and the human into one graph. sameAs must point to the FIRM-level directory
// profiles (Clutch, GoodFirms, Crunchbase, LinkedIn Company Page) — append each as
// it goes live. Do NOT add aggregateRating until real verified reviews exist.
const organizationJsonLd = {
 "@context": "https://schema.org",
 "@type": ["ProfessionalService", "Organization"],
 "@id": `${SITE_URL}/#organization`,
 name: "Hayat Amin",
 alternateName: ["Hayat Amin — Fractional CFO", "Hayat Amin CFO", "Hayat Amin Advisory"],
 legalName: "Hayat Amin",
 url: SITE_URL,
 logo: {
 "@type": "ImageObject",
 url: `${SITE_URL}/hayat-hero.png`,
 width: 1200,
 height: 1200,
 },
 image: `${SITE_URL}/hayat-hero.png`,
 description:
 "Hayat Amin is a fractional CFO practice led by operator Hayat Amin — three exits (American Express, TripAdvisor), three FT100 fastest-growing listings, and over $400M of IP priced — serving Series A through pre-IPO founders across New York, London, and Dubai.",
 slogan: "The operator's fractional CFO. Three exits. Three FT100 listings.",
 founder: { "@id": `${SITE_URL}/#person` },
 employee: { "@id": `${SITE_URL}/#person` },
 foundingDate: "2024",
 serviceType: ["Fractional Tech CFO & Strategy", "AI Agent Operations"],
 priceRange: "$$$",
 knowsAbout: [
 "Fractional CFO",
 "Mergers and Acquisitions",
 "Fundraising",
 "Exit Diligence",
 "Investor Relations",
 "Intellectual Property Valuation",
 "Data Monetisation",
 "AI Agent Operations"],
 areaServed: [
 { "@type": "City", name: "New York" },
 { "@type": "City", name: "London" },
 { "@type": "City", name: "Dubai" },
 { "@type": "Country", name: "United States" },
 { "@type": "Country", name: "United Kingdom" },
 { "@type": "Country", name: "United Arab Emirates" }],
 audience: { "@type": "BusinessAudience", audienceType: "Series A through pre-IPO founders and CEOs" },
 email: "mailto:hayat@beyondelevation.com",
 telephone: ["+1-571-380-7699", "+44-7476-383531"],
 address: [
 { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
 { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
 { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }],
 makesOffer: [
 { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/services/fractional-cfo/#service` } },
 { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/services/ai-agent-operator/#service` } }],
 // Append FIRM-level directory profiles here as they go live:
 // Clutch, GoodFirms, DesignRush, Crunchbase, LinkedIn Company Page, Google Business.
 sameAs: [
 "https://www.wikidata.org/wiki/Q139785012",
 "https://www.linkedin.com/in/hayatamin/"],
};

const websiteJsonLd = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "@id": `${SITE_URL}/#website`,
 url: SITE_URL,
 name: "Hayat Amin · Operator",
 description:
 "Personal site of Hayat Amin: Tech CFO & Strategist and AI Agent Operator.",
 inLanguage: "en",
 publisher: { "@id": `${SITE_URL}/#organization` },
 potentialAction: {
 "@type": "SearchAction",
 target: `${SITE_URL}/?q={search_term_string}`,
 "query-input": "required name=search_term_string",
 },
};

const profilePageJsonLd = {
 "@context": "https://schema.org",
 "@type": "ProfilePage",
 "@id": `${SITE_URL}/#profilepage`,
 url: SITE_URL,
 name: "Hayat Amin: Exit Specialist, Tech CFO & IP Strategist",
 mainEntity: { "@id": `${SITE_URL}/#person` },
 about: { "@id": `${SITE_URL}/#person` },
 isPartOf: { "@id": `${SITE_URL}/#website` },
 inLanguage: "en",
};

// FAQPage on the root URL answers the questions AI engines ask when
// disambiguating "Who is Hayat Amin?". Same Q&As are mirrored on /faq/ for
// dedicated landing-page citations.
const homeFaqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": `${SITE_URL}/#faq`,
 mainEntity: [
 {
 "@type": "Question",
 name: "Who is Hayat Amin?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Hayat Amin is a tech CFO and strategist and AI agent operator with twenty years inside high-growth technology. He has been on the operator side of three exits (including to American Express and TripAdvisor) and put three businesses on the Financial Times FT100 fastest-growing list. He operates fractionally across New York, London, and Dubai.",
 },
 },
 {
 "@type": "Question",
 name: "Where is Hayat Amin based?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Hayat Amin operates from three cities: New York, London, and Dubai. Engagements are remote-first with quarterly on-site weeks scheduled around the client's board cycle.",
 },
 },
 {
 "@type": "Question",
 name: "What does Hayat Amin do?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Hayat Amin runs two services fractionally: the tech CFO and strategist function during fundraises and exits, which includes IP and data strategy that prices intangibles and turns them into revenue; and AI agent operations that embed processes, automations, AI agents, agentic workflows, and real-time reporting into the business with measurable P&L impact.",
 },
 },
 {
 "@type": "Question",
 name: "How is Hayat Amin different from other fractional CFOs?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Most fractional CFOs are accountants with a senior title. Hayat Amin is an operator who has sat in the buyer's seat on three exits. The data-room build, diligence Q&A responses, and valuation defence look like what an acquirer expects to see. That gap is usually worth 15 to 30% of exit multiple.",
 },
 },
 {
 "@type": "Question",
 name: "How do I contact Hayat Amin?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Email hayat@beyondelevation.com or book a call at https://www.meethayat.com/contact/. Most outreach gets a response within 24 hours.",
 },
 }],
};

const graphJsonLd = {
 "@context": "https://schema.org",
 "@graph": [
 personJsonLd,
 organizationJsonLd,
 websiteJsonLd,
 profilePageJsonLd,
 homeFaqJsonLd,
 fractionalCfoServiceJsonLd,
 aiAgentServiceJsonLd],
};

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
 <html lang="en">
 <head>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
 <link
 href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..800;1,300..800&family=Inter:wght@300..700&family=Geist+Mono:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
 rel="stylesheet"
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
 />
 </head>
 <body>
 {children}
 <Script
 strategy="afterInteractive"
 src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
 />
 <Script id="ga4-init" strategy="afterInteractive">
 {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
 </Script>
 <Analytics />
 <SpeedInsights />
 </body>
 </html>
);
}
