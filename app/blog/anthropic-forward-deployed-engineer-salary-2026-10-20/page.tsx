import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "anthropic-forward-deployed-engineer-salary-2026-10-20";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-20";
const MOD = "2026-10-20";
const TITLE = "Anthropic Forward Deployed Engineer Salary: Every Band on the Board, and What It Tells a Founder";
const DESC =
  "The Anthropic forward deployed engineer salary in the US is $280,000 to $320,000 a year for the Staff Forward Deployed Engineer in New York, San Francisco and Seattle, read on 20 October 2026. London pays £225,000 to £255,000. Every FDE band on Anthropic's board, next to OpenAI and Palantir, and what the numbers mean for a founder. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript scene in the golden age of Islamic art, lapis and turquoise strapwork with gold leaf framing a royal treasury hall. A white bearded vizier in a blue robe and turban stands beside a tall brass balance. One pan holds a stack of gold coins, the other a glowing lantern and a builder's brass instruments. Behind him seven arched alcoves hold piles of gold of different sizes, the largest in the centre, and two young apprentices wait by a carved wooden door with bundles of rods.";

const SOURCES = [
  { name: "Anthropic, Staff Forward Deployed Engineer, New York City, San Francisco, Seattle", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
  { name: "Anthropic, Forward Deployed Engineer, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Anthropic, Manager, Forward Deployed Engineering, New York City", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5099753008" },
  { name: "Anthropic, Manager, Forward Deployed Engineering, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5385634008" },
  { name: "Anthropic, GTM Strategy & Operations, FDE", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5427938008" },
  { name: "Anthropic, Applied AI Engineer, Enterprise Tech", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5057647008" },
  { name: "Anthropic, Technical Deployment Lead", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5017903008" },
  { name: "OpenAI, Forward Deployed Engineer (FDE), Financial Services, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/7f76be3a-38d0-4ff4-b997-9f1672e78bc0" },
  { name: "OpenAI, Forward Deployed Software Engineer, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e" },
  { name: "OpenAI, Manager, Forward Deployed Engineering, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/5bbc43df-558a-4e4b-a0cf-83f185c664d7" },
  { name: "Palantir, Forward Deployed Software Engineer, New York", publisher: "Palantir", url: "https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" },
];

const FAQ = [
  {
    q: "What is the Anthropic forward deployed engineer salary?",
    a: "On 20 October 2026 the US role, Staff Forward Deployed Engineer in New York City, San Francisco or Seattle, printed $280,000 to $320,000 a year. The London Forward Deployed Engineer printed £225,000 to £255,000. The Paris and Munich FDE postings print no band. Each figure is the band on Anthropic's own posting, a range across levels, not an offer.",
  },
  {
    q: "What is the Anthropic forward deployed engineer salary in London?",
    a: "£225,000 to £255,000 a year for the Forward Deployed Engineer in London, the same band Anthropic prints for its London Applied AI Engineer roles on Enterprise and Startups. The London Manager, Forward Deployed Engineering prints £255,000 to £325,000.",
  },
  {
    q: "What is Anthropic FDE pay compared with OpenAI?",
    a: "OpenAI's US Forward Deployed Engineer postings in New York, San Francisco and Seattle print $185K to $300K and say they offer equity. Its Forward Deployed Software Engineer roles print $153K to $325K in New York and Seattle and $185K to $325K in San Francisco. Anthropic's one US individual FDE role is Staff level, at $280,000 to $320,000, so the fair comparison is with the top of OpenAI's bands.",
  },
  {
    q: "Does the Anthropic FDE salary include equity?",
    a: "The Staff FDE posting prints an annual salary band and does not describe an equity grant. It says that for sales roles the range is on target earnings, base plus commission target. The general text mentions optional equity donation matching. If equity matters to you, ask the recruiter, because the posting does not answer it.",
  },
  {
    q: "How much do Anthropic forward deployed engineer managers make?",
    a: "Manager, Forward Deployed Engineering in New York City prints $320,000 to $405,000. The same role in London prints £255,000 to £325,000.",
  },
  {
    q: "Is there an Anthropic forward deployed engineer job in the US?",
    a: "Yes, as of this month. When I counted on 12 October 2026 there was no individual FDE posting in the US. On 20 October there was one: Staff Forward Deployed Engineer, across New York City, San Francisco and Seattle, last updated 14 October.",
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
      "about": "Anthropic forward deployed engineer salary, read from all 666 live postings on Anthropic's own Greenhouse job board on 20 October 2026, compared with the bands OpenAI and Palantir print for forward deployed roles the same morning",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
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
      "name": "The vizier weighs a builder's lantern against a stack of gold in the treasury hall",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "anthropic forward deployed engineer salary, anthropic fde salary, anthropic fde pay, anthropic forward deployed engineer salary london, staff forward deployed engineer, Anthropic, OpenAI, Palantir, Hayat Amin, Beyond Elevation, New York, San Francisco, Seattle, London"
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
        { label: "Anthropic forward deployed engineer salary" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Anthropic forward deployed engineer salary</h1>

      <p className="op-lede">The Anthropic forward deployed engineer salary in the US is $280,000 to $320,000 a year. That&apos;s the band on the one US role, Staff Forward Deployed Engineer in New York, San Francisco or Seattle, read on 20 October 2026. London pays £225,000 to £255,000. Paris and Munich print no band.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer and sold three companies in that seat, so I&apos;ve signed off a lot of salary bands, and now I do forward deployed work myself. This morning I read all 666 live postings on Anthropic&apos;s own Greenhouse board, then the forward deployed bands at OpenAI and Palantir. Below is every number, what it buys, and what a founder should take from it.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The vizier weighs a builder&apos;s lantern and instruments against a stack of gold, with seven alcoves of the treasury behind him.
        </figcaption>
      </figure>

      <h2>Every forward deployed band on Anthropic&apos;s board</h2>

      <p>Seven of the 666 postings carry Forward Deployed or FDE in the title. Another 23 mention forward deployed engineers in the text, 30 in all. Here are the seven, with the band each one prints:</p>

      <ul>
        <li>Staff Forward Deployed Engineer, New York City, San Francisco, Seattle: $280,000 to $320,000.</li>
        <li>Manager, Forward Deployed Engineering, New York City: $320,000 to $405,000.</li>
        <li>GTM Strategy &amp; Operations, FDE, San Francisco or New York City: $270,000 to $310,000.</li>
        <li>Forward Deployed Engineer, London: £225,000 to £255,000.</li>
        <li>Manager, Forward Deployed Engineering, London: £255,000 to £325,000.</li>
        <li>Forward Deployed Engineer, Paris: no band printed.</li>
        <li>Forward Deployed Engineer, Munich: no band printed.</li>
      </ul>

      <p>A band is a range across levels, not an offer. The Staff posting says that for sales roles the range is on target earnings, base plus the commission target. It doesn&apos;t say whether the FDE counts as one, and it doesn&apos;t describe an equity grant. If you&apos;re weighing an offer, those are the two questions to ask.</p>

      <h2>What changed since 12 October</h2>

      <p>Eight days ago I counted this board for <Link href="/blog/anthropic-forward-deployed-engineer-2026-10-12/">Anthropic forward deployed engineer</Link>, and the US had no individual FDE job, only a New York manager. Now there&apos;s one, last updated on 14 October. It&apos;s Staff level, and it reads like it.</p>

      <p>The posting asks you to own technical strategy for a key account or vertical, review designs and unblock other FDEs, and lead engagements delivered with partners where you set the quality bar for work you don&apos;t build yourself. You&apos;ll represent Anthropic to VPs and C-level, and travel about 25% of the time. It says you don&apos;t need to have shipped agents to production, but you do need deep experience running production systems and hands-on time with agents. Python is the named language. Former technical founders are told to apply.</p>

      <p>London is a different level. The London FDE posting is the individual role, with travel at 25 to 50 percent. It shares its £225,000 to £255,000 band with Anthropic&apos;s London Applied AI Engineer roles, so in London the two titles are paid the same.</p>

      <h2>The roles around it, same board</h2>

      <p>If you can&apos;t get the FDE title, these are the nearest seats, with the US bands Anthropic prints:</p>

      <ul>
        <li>Applied AI Engineer, Enterprise Tech, San Francisco or New York: $200,000 to $320,000.</li>
        <li>Applied AI Engineer, Public Sector, Washington DC: $280,000 to $320,000.</li>
        <li>Applied AI Architect, Startups, San Francisco or New York: $240,000 to $315,000.</li>
        <li>Technical Deployment Lead, Boston, New York, San Francisco, Seattle: $275,000 to $380,000.</li>
        <li>Manager, Technical Deployment (Financial Services), New York: $240,000 to $450,000.</li>
      </ul>

      <p>The Enterprise Tech band starts $80,000 below the Staff FDE floor and tops out at the same $320,000. That&apos;s the level gap in one line. I wrote up how the two jobs differ in <Link href="/blog/forward-deployed-engineer-vs-applied-ai-engineer-2026-10-10/">forward deployed engineer vs applied AI engineer</Link>.</p>

      <h2>Anthropic next to OpenAI and Palantir</h2>

      <p>Same morning, the forward deployed bands at the other two big hirers:</p>

      <ul>
        <li>OpenAI, Forward Deployed Engineer (FDE), New York, San Francisco, Seattle, including the Healthcare, Legal and Financial Services roles: $185K to $300K, offers equity.</li>
        <li>OpenAI, Forward Deployed Software Engineer, New York and Seattle: $153K to $325K. San Francisco: $185K to $325K. Both offer equity.</li>
        <li>OpenAI, Manager, Forward Deployed Engineering, New York: $302K to $385K, offers equity.</li>
        <li>OpenAI, Deployment Lead, FDE, New York or San Francisco: $230K to $294K, offers equity.</li>
        <li>Palantir, Forward Deployed Software Engineer, New York: $135,000 to $200,000, and total pay may also include restricted stock units and a sign-on bonus.</li>
      </ul>

      <p>Read it as levels. Anthropic&apos;s only US FDE job is Staff, and its floor of $280,000 sits near the top of OpenAI&apos;s FDE band. Palantir&apos;s New York top of $200,000 is $80,000 under that floor, and its board also lists new grad and internship FDE roles, so it&apos;s a different ladder. OpenAI&apos;s London FDE prints no band, so of the two AI labs only Anthropic gives London a number. The Palantir side of the role is in <Link href="/blog/what-is-a-forward-deployed-engineer-at-palantir-2026-09-19/">what is a forward deployed engineer at Palantir</Link>.</p>

      <h2>What the salary tells a founder</h2>

      <p>Here&apos;s the CFO read. Take the Staff band midpoint, $300,000. Divide by 52 and it&apos;s about $5,770 a week in base salary, before payroll tax, benefits or anything else on top. That&apos;s what the market leader pays for one senior person who can walk in with a business problem and leave with a production system.</p>

      <p>You aren&apos;t competing with that number to hire one. You couldn&apos;t keep one busy if you did, unless you have a dozen workflows that need rebuilding. What you need is the work, a few weeks at a time, from someone who has done it before. Anthropic&apos;s own GTM Strategy &amp; Operations posting says demand for FDE is well ahead of the team&apos;s capacity, and that part of the job is moving more of the work to partners. Even the company paying $320,000 can&apos;t hire fast enough to serve everyone itself.</p>

      <p>An Anthropic FDE also works on Claude, for Anthropic&apos;s most strategic customers. If you run a company of 30 or 300 people in New York, Chicago or London, none of them is coming to connect your CRM to your accounting system.</p>

      <p>That is the gap I fill through Beyond Elevation, my firm. I sit inside your business, connect the systems that don&apos;t talk to each other, build the agents and the live dashboard on top, and stay until your team runs on it. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>. The pay picture for the product side of this job is in <Link href="/blog/forward-deployed-product-manager-salary-2026-10-16/">forward deployed product manager salary</Link>.</p>

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

      <p>Anthropic&apos;s figures come from its public Greenhouse job board, read on 20 October 2026, which returned 666 live postings. A title counts as forward deployed if it contains Forward Deployed or FDE. The 30 is a plain text match on the full posting. OpenAI&apos;s bands are from its Ashby job board and Palantir&apos;s from its Lever board, read the same morning. Every band is as printed on the posting. The weekly figure is my own arithmetic on the Staff midpoint. Google autocomplete, read from the US the same morning, completes anthropic forward deployed engineer with salary ahead of interview, certification and course, and anthropic fde salary with london and pay.</p>

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
