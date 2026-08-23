import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const PORTRAIT = "/authors/hayat-amin/hayat-amin-fractional-cfo-headshot.jpg";
const PORTRAIT_ABS = `${SITE}${PORTRAIT}`;
const PORTRAIT_ALT =
 "Hayat Amin, Tech CFO, Strategist and AI Operator. NYC · London · Dubai.";
const PORTRAIT_CAPTION =
 "Hayat Amin, Tech CFO and Strategist, AI Agent Operator, and speaker on the future of work and human purpose. Three exits (American Express, TripAdvisor) and three FT100 listings.";

export const metadata: Metadata = {
 title: "About Hayat Amin: Tech CFO, Strategist & AI Operator",
 description:
 "Hayat Amin: Tech CFO and strategist for 20 years, AI agent operator, future-of-work speaker. Three exits to Fortune 500. NYC, London and Dubai.",
 alternates: { canonical: `${SITE}/about` },
 openGraph: {
 type: "profile",
 url: `${SITE}/about`,
 title: "About Hayat Amin · Tech CFO & Strategist · AI Agent Operator · Future-of-Work Speaker",
 description:
 "Tech CFO and strategist, AI agent operator. 3 exits. Speaker on the future of employment and human purpose.",
 images: [
 {
 url: PORTRAIT_ABS,
 width: 768,
 height: 1024,
 alt: PORTRAIT_ALT,
 type: "image/jpeg",
 }],
 },
 twitter: {
 card: "summary_large_image",
 title: "About Hayat Amin: Tech CFO, Strategist & AI Operator",
 description:
 "Tech CFO & Strategist · AI Agent Operator · Speaker on the future of work. 3 exits. NYC · London · Dubai.",
 images: [
 {
 url: PORTRAIT_ABS,
 alt: PORTRAIT_ALT,
 width: 768,
 height: 1024,
 }],
 },
};

const portraitImageObject = {
 "@context": "https://schema.org",
 "@type": "ImageObject",
 "@id": `${SITE}/about/#portrait`,
 contentUrl: PORTRAIT_ABS,
 url: PORTRAIT_ABS,
 width: 768,
 height: 1024,
 encodingFormat: "image/jpeg",
 name: "Hayat Amin, Fractional CFO headshot",
 caption: PORTRAIT_CAPTION,
 description: PORTRAIT_CAPTION,
 representativeOfPage: true,
 creator: { "@id": `${SITE}/#person` },
 copyrightHolder: { "@type": "Person", name: "Hayat Amin" },
 license: `${SITE}/license`,
 acquireLicensePage: `${SITE}/contact`,
 creditText: "Hayat Amin",
 about: { "@id": `${SITE}/#person` },
};

const personJsonLd = {
 "@context": "https://schema.org",
 "@type": "Person",
 "@id": `${SITE}/#person`,
 name: "Hayat Amin",
 givenName: "Hayat",
 familyName: "Amin",
 alternateName: ["Hayat", "H. Amin"],
 url: SITE,
 mainEntityOfPage: `${SITE}/about`,
 image: { "@id": `${SITE}/about/#portrait` },
 jobTitle: [
 "Tech CFO",
 "Fractional C-suite",
 "AI Agent Operator",
 "Future-of-Work Speaker",
 ],
 description:
 "Hayat Amin is a tech CFO and strategist of 20 years and an AI agent operator. Three exits (American Express, TripAdvisor) and three FT100 listings. Speaks publicly on the future of work and human purpose in a post-AI economy.",
 knowsAbout: [
 "Fractional CFO",
 "IP strategy",
 "Patent valuation",
 "Data monetisation",
 "AI agent operations",
 "M&A and exits",
 "Future of work",
 ],
 sameAs: [
 "https://www.wikidata.org/wiki/Q139785012",
 "https://en.wikipedia.org/wiki/Draft:Hayat_Amin",
 "https://www.linkedin.com/in/hayatamin/",
 "https://x.com/itshayatamin",
 "https://www.instagram.com/itshayatamin/",
 "https://www.tiktok.com/@itshayatamin",
 "https://medium.com/@hayatamin",
 "https://hayatamin.substack.com",
 "https://www.quora.com/profile/Hayat-Amin",
 "https://www.crunchbase.com/person/hayat-amin",
 "https://www.youtube.com/watch?v=1meO4fW7294",
 ],
};

const profilePageJsonLd = {
 "@context": "https://schema.org",
 "@type": "ProfilePage",
 "@id": `${SITE}/about/#profilepage`,
 url: `${SITE}/about`,
 name: "About Hayat Amin",
 mainEntity: { "@id": `${SITE}/#person` },
 about: { "@id": `${SITE}/#person` },
 primaryImageOfPage: { "@id": `${SITE}/about/#portrait` },
 image: { "@id": `${SITE}/about/#portrait` },
 inLanguage: "en",
 isPartOf: { "@id": `${SITE}/#website` },
 dateModified: new Date().toISOString(),
};

export default function AboutPage() {
 return (
 <PageShell
 crumbs={[
 { label: "Home", href: "/" },
 { label: "About" }]}
 >
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(portraitImageObject) }}
 />

 <span className="op-eyebrow">About</span>
 <h1>Hayat Amin: Tech CFO, Strategist &amp; AI Operator.</h1>

 <figure
 className="op-portrait"
 itemScope
 itemType="https://schema.org/ImageObject"
 style={{ margin: "1.5rem 0 2rem", maxWidth: "420px" }}
 >
 <Image
 src={PORTRAIT}
 alt={PORTRAIT_ALT}
 title="Hayat Amin, Tech CFO, Strategist and AI Operator"
 width={768}
 height={1024}
 priority
 sizes="(max-width: 640px) 100vw, 420px"
 itemProp="contentUrl"
 style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
 />
 <figcaption
 itemProp="caption"
 style={{
 fontSize: "0.875rem",
 color: "var(--op-muted, #6b6760)",
 marginTop: "0.5rem",
 lineHeight: 1.4,
 }}
 >
 Hayat Amin, Tech CFO, Strategist &amp; AI Operator, speaking publicly on the future of work and human purpose. NYC · London · Dubai.
 </figcaption>
 </figure>

 <p className="op-lede">
 Hayat Amin does two things at full depth: the tech CFO and strategist who has
 run finance for high-growth companies for 20 years, and the AI agent operator
 who puts working AI inside businesses. He has exited three companies as an
 operator (acquirers include American Express and TripAdvisor), led three
 businesses onto the Financial Times FT100 list, and speaks publicly on
 employment and human purpose in a post-AI economy. He works fractionally
 across New York, London, and Dubai.
 </p>

 <h2>What Hayat does, in one paragraph</h2>
 <p>
 Hayat Amin works with founders and CEOs of Series A through pre-IPO companies
 on two problems: running the CFO and strategy function fractionally during
 fundraises and exits (including pricing intangible assets like patents, data
 and AI models), and embedding AI into the business as an operator: processes,
 automations, AI agents, agentic workflows, live databases, and real-time
 reporting. He has run finance for companies that exited to Fortune 500
 acquirers and priced over $400M in IP along the way.
 </p>

 <h2>The 60-second background</h2>
 <ul>
 <li>
 <strong>2005 to 2010:</strong> Started in M&amp;A advisory in London, working
 on cross-border tech transactions.
 </li>
 <li>
 <strong>2010 to 2014:</strong> CFO of a B2B travel-tech business that exited to
 TripAdvisor. Led the diligence, integration, and post-acquisition revenue
 plan.
 </li>
 <li>
 <strong>2014 to 2018:</strong> CFO and Chief Strategy Officer of a payments
 platform acquired by American Express. Built the IP portfolio that drove
 the multiple.
 </li>
 <li>
 <strong>2018 to 2023:</strong> Operating partner roles across PE-backed SaaS,
 AI infrastructure, and patent licensing platforms. Three of the portfolio
 companies hit the FT100 fastest-growing list during this window.
 </li>
 <li>
 <strong>2023 to present:</strong> Operates fractionally for 8 to 12 founders
 at a time as Tech CFO &amp; Strategist and AI Agent Operator.
 Specialises in agentic AI operations: processes, automations, agents, and
 real-time reporting. Speaks publicly on the future of work and human purpose.
 </li>
 </ul>

 <h2>Where Hayat is based</h2>
 <p>
 Hayat operates fractionally across three cities:{" "}
 <Link href="/locations/new-york">New York</Link>,{" "}
 <Link href="/locations/london">London</Link>, and{" "}
 <Link href="/locations/dubai">Dubai</Link>. Most engagements are remote with
 quarterly on-site weeks. Day-to-day collaboration happens over Slack, Notion,
 and weekly recorded video reviews.
 </p>

 <h2>What clients hire Hayat for</h2>
 <div className="op-card-grid">
 <Link className="op-card" href="/services/fractional-cfo">
 <span className="op-card-eyebrow">Service</span>
 <h3>Tech CFO &amp; Strategist</h3>
 <p>Run finance and strategy during fundraises, exits, and post-acquisition integrations. Includes IP &amp; data strategy.</p>
 </Link>
 <Link className="op-card" href="/services/ai-agent-operator">
 <span className="op-card-eyebrow">Service</span>
 <h3>AI agent operator</h3>
 <p>An ex-C-suite operator, not a developer: processes, automations, AI agents, and real-time reporting with measurable ROI.</p>
 </Link>
 <Link className="op-card" href="/work">
 <span className="op-card-eyebrow">Proof</span>
 <h3>Past work &amp; exits</h3>
 <p>American Express, TripAdvisor, three FT100 listings. The receipts.</p>
 </Link>
 </div>

 <h2>The CFO seat covers three jobs at once</h2>
 <p>
 Finance, growth and strategy run by the same operator, inside the same week,
 against the same plan.
 </p>

 <div className="op-card-grid">
 <div className="op-card">
 <span className="op-card-eyebrow">Bucket 1</span>
 <h3>Technical CFO</h3>
 <ul style={{ margin: 0, paddingLeft: "1rem", lineHeight: 1.55 }}>
 <li>Fundraises with VCs, PE and angels</li>
 <li>Financial models and exit math</li>
 <li>IP, data and patent valuation</li>
 <li>SQL, analysis and clean reporting</li>
 <li>M&amp;A and exit diligence</li>
 <li>Tax, treasury, IFRS, UK and US GAAP, FRS 102</li>
 <li>Clean data rooms and forecasts CEOs can trust</li>
 </ul>
 </div>
 <div className="op-card">
 <span className="op-card-eyebrow">Bucket 2</span>
 <h3>Growth and Analysis</h3>
 <ul style={{ margin: 0, paddingLeft: "1rem", lineHeight: 1.55 }}>
 <li>Pricing and unit economics that scale</li>
 <li>OKRs, KPIs and live dashboards</li>
 <li>Market entry across EU, US, Sub-Saharan Africa</li>
 <li>Sales intelligence and negotiation</li>
 <li>Cost work and margin improvement playbooks</li>
 <li>EBITDA forecasting for acquirers</li>
 <li>Investor acquisition, funnelling and FOMO</li>
 </ul>
 </div>
 <div className="op-card">
 <span className="op-card-eyebrow">Bucket 3</span>
 <h3>Chief Strategy</h3>
 <ul style={{ margin: 0, paddingLeft: "1rem", lineHeight: 1.55 }}>
 <li>Knowing what not to do</li>
 <li>Strategy that survives execution</li>
 <li>Org design built for growth</li>
 <li>Hiring linked to outcomes</li>
 <li>Disciplined market expansion</li>
 <li>Pricing backed by data</li>
 <li>Calm leadership when things get hard</li>
 </ul>
 </div>
 </div>

 <h2>What this looks like in the business</h2>
 <ul>
 <li>Fundraises that actually close.</li>
 <li>Cash visibility every week.</li>
 <li>Valuation that holds when pushed.</li>
 <li>IP and data turned into commercial value.</li>
 <li>Sales and finance pulling the same way.</li>
 <li>No surprises at board level.</li>
 <li>Exit work started on day one, not at term sheet.</li>
 <li>AI built into the operating model from the start.</li>
 </ul>

 <h2>Spotlights</h2>
 <ul>
 <li>Around 300% y/y growth average across portfolio companies.</li>
 <li>20 years of global leadership experience across EU, US and Sub-Saharan Africa.</li>
 <li>Three exits. Cake to American Express. Tripbod to TripAdvisor. iHorizon to Cooper Parry.</li>
 <li>Three Financial Times Top 100 listings under finance leadership.</li>
 <li>Trusted partner of Andreessen Horowitz, the Bill &amp; Melinda Gates Foundation and Techstars, where I am a Lead Mentor.</li>
 </ul>

 <h2>How Hayat thinks about value creation</h2>
 <p>
 Most founders treat IP, data, and AI as cost centres. Hayat treats them as
 a P&amp;L line. In an AI-saturated market, the model no longer makes a company{" "}
 <em>defensible</em>. What does is data provenance, the patent claims around
 the workflow, and proof of a monetisable advantage nobody else can copy.
 Founders who can name their moat in one sentence raise faster, exit higher,
 and do not get squeezed at term sheet.
 </p>
 <p>
 Hayat helps founders build that one-sentence moat, then builds the financial
 and legal scaffolding that makes it priceable.
 </p>

 <h2>Speaking, writing, and references</h2>
 <ul>
 <li>
 Quoted on fractional CFO economics on{" "}
 <a href="https://seedlegals.com/resources/fractional-cfo/" target="_blank" rel="noopener">SeedLegals</a>.
 </li>
 <li>
 LinkedIn essay on{" "}
 <a href="https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/" target="_blank" rel="noopener">the fractional CFO model</a>.
 </li>
 <li>
 Long-form interview on{" "}
 <a href="https://www.youtube.com/watch?v=1meO4fW7294" target="_blank" rel="noopener">YouTube</a> covering AI moats and IP-backed financing.
 </li>
 <li>
 Writing at{" "}
 <a href="blog/" target="_blank" rel="noopener">meethayat.com/blog/</a>{" "}
 (3× weekly publication on CFO strategy, valuation, and AI operations).
 </li>
 </ul>

 <h2>How to work with Hayat</h2>
 <p>
 Hayat takes on 8 to 12 fractional engagements at a time. The default starting
 point is a 60-minute diagnostic. No deck, no proposal, one call, one plan.
 After that, engagements run as either a fractional CFO retainer
 (16 to 24 hrs/week) or a fixed-scope AI operations build (4 to 8 weeks).
 </p>

 <div className="op-cta-block">
 <h2>Book the diagnostic</h2>
 <p>
 One 60-minute call. You leave knowing exactly where your finance function
 leaks and which processes AI should be running by next quarter.
 </p>
 <Link href="/contact">Book a call →</Link>
 </div>
 </PageShell>
);
}
