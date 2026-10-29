import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fde-salary-2026-10-29";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-29";
const MOD = "2026-10-29";
const TITLE = "FDE Salary: What 10 Companies Pay Forward Deployed Engineers in the USA and London";
const DESC =
  "FDE salary in the US runs from $117,200 to $330,000 base on the postings of 10 companies read on 29 October 2026: Ramp, Cohere, OpenAI, Anthropic, Scale AI, Google, Salesforce, Databricks, Cresta and Palantir. In London, 2 of 31 FDE postings print a band, both Anthropic at £225,000 to £255,000. Ranked by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated panel in the golden age of Islamic art, lapis, turquoise and gold leaf on cream. Two tall pointed arches stand side by side under a star medallion that holds a small balance. The left arch is filled with ten rows of gilded lapis and turquoise bands, each one painted in full. The right arch repeats the same ten rows, drawn only as empty gold outlines on bare paper.";

const SOURCES = [
  { name: "Ramp, Software Engineer, Forward Deployed AI Solutions, New York", publisher: "Ramp", url: "https://jobs.ashbyhq.com/ramp/b614563f-3ce6-4dca-b5ba-0e5a6c8bda27" },
  { name: "Ramp, Software Engineer, Forward Deployed, New York", publisher: "Ramp", url: "https://jobs.ashbyhq.com/ramp/29a5da77-37f0-402a-92bc-072778e77ed8" },
  { name: "Cohere, Forward Deployed Engineer, Inference", publisher: "Cohere", url: "https://jobs.ashbyhq.com/cohere/8df498e9-aba8-487f-80ba-362b492bad09" },
  { name: "OpenAI, Forward Deployed Software Engineer, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e" },
  { name: "OpenAI, Forward Deployed Engineer (FDE), Financial Services, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/7f76be3a-38d0-4ff4-b997-9f1672e78bc0" },
  { name: "OpenAI, Forward Deployed Engineer, London", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/cf83e70e-6949-480f-ad97-df0f22cd0283" },
  { name: "Anthropic, Staff Forward Deployed Engineer, New York City, San Francisco, Seattle", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
  { name: "Anthropic, Forward Deployed Engineer, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Scale AI, Staff Frontier Agents Engineer (Forward Deployed Engineering)", publisher: "Scale AI", url: "https://job-boards.greenhouse.io/scaleai/jobs/4694865005" },
  { name: "Scale AI, Frontier Agents Engineer (Forward Deployed Engineering)", publisher: "Scale AI", url: "https://job-boards.greenhouse.io/scaleai/jobs/4694861005" },
  { name: "Google, Forward Deployed Engineer, State and Local Government, Google Public Sector", publisher: "Google", url: "https://www.google.com/about/careers/applications/jobs/results/82191516277056198" },
  { name: "Google, Forward Deployed Engineer, Generative AI, Geo", publisher: "Google", url: "https://www.google.com/about/careers/applications/jobs/results/134016342943507142" },
  { name: "Salesforce, Forward Deployment Engineer LMTS", publisher: "Salesforce", url: "https://salesforce.wd12.myworkdayjobs.com/External_Career_Site/job/California---San-Francisco/Value-Acceleration-Engineer-LMTS_JR360491" },
  { name: "Salesforce, Forward Deployment Engineer MTS", publisher: "Salesforce", url: "https://salesforce.wd12.myworkdayjobs.com/External_Career_Site/job/California---San-Francisco/Value-Acceleration-Engineer-MTS_JR360493-1" },
  { name: "Databricks, Sr. Forward Deployed Engineer, New York City", publisher: "Databricks", url: "https://databricks.com/company/careers/open-positions/job?gh_jid=8739462002" },
  { name: "Cresta, Senior Forward Deployed Engineer (AI Agent), United States", publisher: "Cresta", url: "https://job-boards.greenhouse.io/cresta/jobs/4759347008" },
  { name: "Palantir, Forward Deployed Software Engineer, New York", publisher: "Palantir", url: "https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" },
  { name: "Palantir, Forward Deployed Software Engineer, London", publisher: "Palantir", url: "https://jobs.lever.co/palantir/5168e8fd-fec1-4fea-b7a1-81bdaea65850" },
  { name: "Harvey, Forward Deployed Finance Engineer, Buyout, New York", publisher: "Harvey", url: "https://jobs.ashbyhq.com/harvey/fb3ecf9e-9379-4839-817c-f620a3e6034d" },
  { name: "NYC Commission on Human Rights, Salary Transparency in Job Advertisements", publisher: "City of New York", url: "https://www.nyc.gov/site/cchr/media/pay-transparency.page" },
];

const FAQ = [
  {
    q: "What is the FDE salary range?",
    a: "On the postings of 10 US employers read on 29 October 2026, base pay for an individual forward deployed engineer runs from $117,200 (the bottom of Salesforce's typical MTS band) to $330,000 (the top of Ramp's Forward Deployed AI Solutions band in New York). Most senior bands top out between $250,000 and $325,000. Equity and bonus come on top where the posting says so.",
  },
  {
    q: "What is the FDE salary in NYC?",
    a: "New York bands read on 29 October 2026: Ramp $189K to $330K, OpenAI $153K to $325K for the Forward Deployed Software Engineer, Cohere $265K to $325K, Anthropic $280,000 to $320,000 at Staff level, Google $207,000 to $300,000 plus a 20% bonus target for the State and Local Government role, Databricks $182,000 to $250,208 and Palantir $135,000 to $200,000.",
  },
  {
    q: "What is the FDE salary in London?",
    a: "Mostly unpublished. I read 31 London forward deployed postings across Palantir, Databricks, Scale AI, OpenAI, Anthropic, ElevenLabs and Harvey, and 2 printed a band. Both were Anthropic: £225,000 to £255,000 for the Forward Deployed Engineer and £255,000 to £325,000 for the manager.",
  },
  {
    q: "What is the FDE salary at Palantir?",
    a: "The Forward Deployed Software Engineer in New York, Chicago and Washington DC prints $135,000 to $200,000 a year, and total pay may also include restricted stock units and a sign on bonus. New grad roles print $135,000 to $145,000. Palantir's 12 London forward deployed postings print no figure.",
  },
  {
    q: "What is the FDE salary at OpenAI?",
    a: "The Forward Deployed Engineer (FDE) roles in New York and San Francisco print $185K to $300K and offer equity. The Forward Deployed Software Engineer prints $153K to $325K in New York and Seattle and $185K to $325K in San Francisco. Manager, Forward Deployed Engineering in New York prints $302K to $385K. The London roles print no band.",
  },
  {
    q: "What is the FDE salary at Google?",
    a: "Forward Deployed Engineer, Generative AI, Geo prints $152,000 to $221,000 plus a 15% bonus target, equity and benefits, across Mountain View, New York, San Francisco and Seattle. Forward Deployed Engineer, State and Local Government, Google Public Sector in New York prints $207,000 to $300,000 plus a 20% bonus target, equity and benefits.",
  },
  {
    q: "What is the FDE salary at Databricks?",
    a: "Sr. Forward Deployed Engineer in New York City and San Francisco prints $182,000 to $250,208, the same in all four of Databricks' pay zones, and the posting says total pay may include bonus and equity. None of the 9 London forward deployed postings print a figure.",
  },
  {
    q: "What is the FDE salary at Salesforce?",
    a: "Salesforce calls it Forward Deployment Engineer. The MTS level prints a typical base of $117,200 to $176,700, or $141,200 to $194,200 in select San Francisco and New York City areas. The LMTS level prints $172,500 to $260,100, or $207,800 to $285,800 in those cities.",
  },
  {
    q: "What is the FDE salary at Anthropic?",
    a: "Staff Forward Deployed Engineer in New York City, San Francisco and Seattle prints $280,000 to $320,000. The London Forward Deployed Engineer prints £225,000 to £255,000. I wrote the full Anthropic breakdown on 20 October.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESC,
    publishedTime: PUB,
    modifiedTime: MOD,
    images: [{ url: HERO, width: 1408, height: 768, alt: HERO_ALT }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [HERO] },
};

const RANKED = [
  { name: "Ramp", band: "$189K to $330K" },
  { name: "Cohere", band: "$265K to $325K" },
  { name: "OpenAI", band: "$153K to $325K" },
  { name: "Anthropic", band: "$280,000 to $320,000" },
  { name: "Scale AI", band: "$252,000 to $315,000" },
  { name: "Google", band: "$207,000 to $300,000" },
  { name: "Salesforce", band: "$207,800 to $285,800" },
  { name: "Databricks", band: "$182,000 to $250,208" },
  { name: "Cresta", band: "$185,000 to $235,000" },
  { name: "Palantir", band: "$135,000 to $200,000" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      "headline": TITLE,
      "description": DESC,
      "url": URL,
      "inLanguage": "en",
      "datePublished": PUB,
      "dateModified": MOD,
      "image": [{ "@id": `${URL}#hero` }],
      "author": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "mainEntityOfPage": URL,
      "about": "FDE salary: the base pay bands 10 US employers print on their own forward deployed engineer postings, read on 29 October 2026, and how many London postings print a band at all",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#ranking`,
      "name": "FDE salary by company, ranked by the top of the highest US individual contributor band, 29 October 2026",
      "author": { "@id": "https://meethayat.com/#person" },
      "numberOfItems": RANKED.length,
      "itemListElement": RANKED.map((r, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${r.name}: ${r.band}`,
      })),
    },
    {
      "@type": "Person",
      "@id": "https://meethayat.com/#person",
      "name": "Hayat Amin",
      "jobTitle": "Forward Deployed Engineer and Fractional Chief Financial Officer",
      "url": "https://meethayat.com",
      "sameAs": [
        "https://meethayat.com",
        "https://beyondelevation.com",
        "https://www.linkedin.com/in/hayatamin"
      ],
      "description": "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation."
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      "url": HERO,
      "contentUrl": HERO,
      "width": 1408,
      "height": 768,
      "caption": HERO_ALT,
      "name": "Two arches under a balance, one filled with gilded rows and one left in outline",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "fde salary, forward deployed engineer salary, fde salary nyc, fde salary london, fde salary range, fde salary palantir, fde salary openai, fde salary google, fde salary databricks, fde salary salesforce, fde salary anthropic, Hayat Amin, Beyond Elevation, New York, San Francisco, London"
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": FAQ.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://meethayat.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://meethayat.com/blog" },
        { "@type": "ListItem", "position": 3, "name": TITLE, "item": URL }
      ]
    }
  ]
};

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "FDE salary" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>FDE salary</h1>

      <p className="op-lede">An FDE salary in the US runs from $117,200 to $330,000 base, on the postings 10 companies carried on 29 October 2026. Most senior bands top out between $250,000 and $325,000. London barely publishes: 2 of 31 postings print a band, both Anthropic, at £225,000 to £255,000.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer and sold three companies in that seat, so I&apos;ve set and signed off a lot of pay bands, and now I do forward deployed work myself. This morning I read the forward deployed postings on the job boards of 16 companies. Below are the 10 US employers that print a number, ranked, then London, then what a founder should take from it.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Two arches under one balance: the left painted in full, the right left in outline, the way US and London postings print their pay.
        </figcaption>
      </figure>

      <h2>How I ranked them</h2>

      <p>Each company is ranked by the top of the highest band it prints for an individual forward deployed engineer in the US, not a manager. Ties go to the higher floor. Every figure is base salary as printed on the company&apos;s own posting, unless I say it isn&apos;t. A band is a range across levels and locations. It isn&apos;t an offer, and equity sits on top at almost all of them.</p>

      <p>New York has required a good faith pay range in every job advertisement since 1 November 2022, under the NYC Human Rights Law. That&apos;s why the US side of this list exists at all.</p>

      <h2>The 10 companies, ranked by the top of their US band</h2>

      <h3>1. Ramp: $189K to $330K</h3>
      <p>Software Engineer, Forward Deployed AI Solutions, New York, prints $189K to $330K and offers equity. The plainer Software Engineer, Forward Deployed role, also New York, prints $168K to $285K. Ramp builds software for finance teams, and the AI Solutions engineer co-leads each customer engagement with a strategist who owns the business case, so you own the technical side and they own the room. It suits an engineer who wants the highest printed ceiling on this list. It&apos;s wrong for you if you&apos;d rather not spend significant time with customers, which the posting says you will.</p>

      <h3>2. Cohere: $265K to $325K</h3>
      <p>Forward Deployed Engineer, Inference, prints a base of $265K to $325K in California, New York and Washington, and $240K to $295K in every other US state, with equity. That $265K floor is second only to Anthropic&apos;s Staff role. The posting asks for a Staff level FDE to own customer inference problems from multi-tenant model serving to multi-datacenter disaster recovery. If you&apos;ve never run model serving in production, this band isn&apos;t yours yet.</p>

      <h3>3. OpenAI: $153K to $325K</h3>
      <p>Forward Deployed Software Engineer prints $153K to $325K in New York and Seattle and $185K to $325K in San Francisco. The Forward Deployed Engineer (FDE) roles for Healthcare, Legal, Financial Services and AI Infra print $185K to $300K. All of them offer equity. The government role in Washington DC prints $145.8K to $280K. OpenAI has the widest band on the list, $172K from floor to ceiling, so where you land inside it is the negotiation.</p>

      <h3>4. Anthropic: $280,000 to $320,000</h3>
      <p>The one US individual role is Staff Forward Deployed Engineer, in New York City, San Francisco and Seattle, at $280,000 to $320,000. It&apos;s the narrowest band in the top five because it&apos;s one level. It suits someone who has run production systems for years and can lead an account. It&apos;s wrong for anyone earlier in their career, since there&apos;s no junior FDE seat on the US board. My full read of Anthropic&apos;s board is in <Link href="/blog/anthropic-forward-deployed-engineer-salary-2026-10-20/">Anthropic forward deployed engineer salary</Link>.</p>

      <h3>5. Scale AI: $252,000 to $315,000</h3>
      <p>Scale prints three levels of Frontier Agents Engineer (Forward Deployed Engineering), each with the same band across San Francisco, New York and Seattle. Base is $180,000 to $225,000, then $216,000 to $270,000 at Senior, then $252,000 to $315,000 at Staff. That&apos;s the clearest level ladder on the list. If you want to know what a promotion is worth before you join, Scale tells you.</p>

      <h3>6. Google: $207,000 to $300,000</h3>
      <p>Forward Deployed Engineer, State and Local Government, Google Public Sector, New York, prints $207,000 to $300,000 plus a 20% bonus target, equity and benefits. Forward Deployed Engineer, Generative AI, Geo, across Mountain View, New York, San Francisco and Seattle, prints $152,000 to $221,000 plus a 15% bonus target. Google prints the bonus as a percentage, so its real number is higher than the band looks. At a 20% target, the top of the public sector band is $360,000 before equity.</p>

      <h3>7. Salesforce: $207,800 to $285,800</h3>
      <p>Salesforce calls the job Forward Deployment Engineer and prints two levels. MTS is $117,200 to $176,700 typical base, or $141,200 to $194,200 in select San Francisco and New York City areas. LMTS is $172,500 to $260,100, or $207,800 to $285,800 in those cities. The city gap is the useful part. At LMTS, living in New York is worth $25,700 a year at the top of the band.</p>

      <h3>8. Databricks: $182,000 to $250,208</h3>
      <p>Sr. Forward Deployed Engineer prints $182,000 to $250,208 in New York City and San Francisco, and in all four of Databricks&apos; pay zones the number is identical. The posting says total pay may also include an annual bonus and equity. It suits a data engineer who wants to move closer to the customer, and the industry teams (financial services, healthcare, manufacturing, media) all print that same band.</p>

      <h3>9. Cresta: $185,000 to $235,000</h3>
      <p>Senior Forward Deployed Engineer (AI Agent), remote in the United States, prints a base of $185,000 to $235,000 plus an annual bonus and equity. It&apos;s the only fully remote US band on this list. Cresta sells AI agents and conversation intelligence for customer service, so it&apos;s a good fit if you like one product and many deployments of it.</p>

      <h3>10. Palantir: $135,000 to $200,000</h3>
      <p>Forward Deployed Software Engineer prints $135,000 to $200,000 in New York, Chicago and Washington DC, and total pay may also include restricted stock units and a sign on bonus. New grad roles print $135,000 to $145,000, and the commercial internship in New York prints $10,000 a month. Palantir is last on base and has the most entry seats: new grad and intern FDE roles in New York, Chicago and Washington DC. I wrote up the Palantir version of the job in <Link href="/blog/what-is-a-forward-deployed-engineer-at-palantir-2026-09-19/">what is a forward deployed engineer at Palantir</Link>.</p>

      <p>One more that doesn&apos;t fit the ranking. Harvey&apos;s Forward Deployed Finance Engineer roles in New York print $254.6K to $350K, with equity, but that&apos;s on target earnings with a 75/25 split, so a quarter of it is variable. It isn&apos;t comparable with the base bands above.</p>

      <h2>FDE salary in London</h2>

      <p>I counted 31 London postings with forward deployed in the title, across 7 of the same companies: Palantir 12, Databricks 9, Scale AI 4, OpenAI 2, Anthropic 2, ElevenLabs 1 and Harvey 1. Two print a band. Both are Anthropic: £225,000 to £255,000 for the Forward Deployed Engineer and £255,000 to £325,000 for Manager, Forward Deployed Engineering.</p>

      <p>So the honest answer on a London FDE salary is that the employers mostly won&apos;t say. Palantir prints $135,000 to $200,000 for its New York FDE and nothing for the same title in London. OpenAI, Databricks and Scale AI do the same. If you&apos;re hiring in London, the Anthropic band is the only published number you can benchmark against, and it&apos;s a frontier lab number, not a market one.</p>

      <h2>What the salary tells a founder</h2>

      <p>Here&apos;s the CFO read. Take the middle of the list, Databricks, and the midpoint of its band is $216,104. That&apos;s base only, before payroll tax, benefits, bonus or equity, for one senior engineer who can sit with your team and ship a working system. Nine of the ten print a ceiling above it.</p>

      <p>If you run a company of 30 or 300 people in New York, Chicago or London, you probably don&apos;t need one full time. You need the work done well for a few weeks, then your own team running it. That&apos;s what I do through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm. I sit inside the business, connect the systems that don&apos;t talk to each other, build the agents and the live dashboard on top, and stay until it runs without me. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>. The pay picture for the product side of the job is in <Link href="/blog/forward-deployed-product-manager-salary-2026-10-16/">forward deployed product manager salary</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the work these postings pay for, because the finance seat taught me where a company&apos;s week breaks before anyone writes code. I connect the systems that were never built to talk to each other, put a live dashboard in front of the chief executive instead of a month end pack, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on what to automate first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>I read the public job boards on 29 October 2026: Palantir&apos;s is on Lever. OpenAI, Cohere, Ramp, Harvey, ElevenLabs, Rogo, Sierra, Decagon and Writer use Ashby. Anthropic, Databricks, Scale AI and Cresta use Greenhouse, Salesforce uses Workday and Google runs its own careers site. Sierra, Decagon and Writer had no forward deployed titles, and Rogo&apos;s are bankers and investors, not engineers. A posting counts if forward deployed, forward deployment or FDE is in the title. The London count is every such posting with London as its location, and a band counts only if the posting prints a figure. The Databricks midpoint, the Google bonus sum and the Salesforce city gap are my own arithmetic on the printed bands. Google autocomplete, read from the US the same morning, completes fde salary with palantir, range, google, openai, databricks, nyc, anthropic and salesforce, and fde salary london with palantir, openai, anthropic, google and databricks.</p>

      <p>The sources named on this page:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Bands get edited and postings come down. If you&apos;re reading this in a month, open the links and check the numbers before you quote mine.</p>

    </PageShell>
  );
}
