import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-for-small-business-2026-11-27";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-27";
const MOD = "2026-11-27";
const TITLE = "Forward Deployed Engineer for Small Business: Do You Need One?";
const DESC =
  "A small business needs a forward deployed engineer when three or more systems don't talk and someone retypes data between them for 5 hours a week or more. Usually one to two days a week, or a fixed project, rarely a full time hire. The signs, the costs and the steps for this week, by Hayat Amin.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, turquoise, cream and rust on a lapis field of small eight pointed stars. A plain gold arch stands like a workshop door. Inside it, three small tiles, two cream and one rust, are joined by gold threads to a single turquoise star. Nine star medallions follow the curve of the arch, and a band of gold and rust diamonds runs along the floor.";

const SOURCES = [
  { name: "Large Firms With at Least 20 Employees Biggest AI Users, by Adam Grundy, Cory Breaux and Dhanapati Khatiwoda, 26 May 2026 (read 27 November 2026)", publisher: "US Census Bureau", url: "https://census.gov/library/stories/2026/05/ai-use-businesses.html" },
  { name: "MIT report: 95% of generative AI pilots at companies are failing, on The GenAI Divide: State of AI in Business 2025 from MIT NANDA (read 27 November 2026)", publisher: "Fortune", url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" },
  { name: "Why AI pilots fail and how to move them into production, by Donald Farmer, 16 May 2026 (read 27 November 2026)", publisher: "TechTarget", url: "https://www.techtarget.com/searchenterpriseai/tip/Why-AI-pilots-fail-and-how-to-move-them-into-production" },
  { name: "Cost to hire a freelance forward deployed engineer, rate tables dated November 2026 (read 27 November 2026)", publisher: "Second Talent", url: "https://www.secondtalent.com/cost-to-hire/forward-deployed-engineer/" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing, read 27 November 2026)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
  { name: "The Pulse: forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
];

const FAQ = [
  {
    q: "Does a small business need a forward deployed engineer?",
    a: "Only when the problem crosses systems. If three or more tools don't talk and someone retypes data between them for 5 hours a week or more, yes, usually for one to two days a week or a fixed project. If the work sits inside one tool, an off the shelf automation is cheaper and you don't need one.",
  },
  {
    q: "What is a forward deployed engineer?",
    a: "An engineer who works inside your company, in your own systems, and writes the code that puts AI into the work your people already do. The difference from a consultant is that the FDE ships the build into production and stays until it runs, rather than handing over a report.",
  },
  {
    q: "How much does a forward deployed engineer cost a small business?",
    a: "A US contractor runs $95 to $235 an hour by seniority on Second Talent's November 2026 rate card. Through Beyond Elevation, fractional starts from $5,800 a month for one to two days a week, a fixed project from $30k over 8 to 14 weeks, and a two week audit is $3,000 fixed.",
  },
  {
    q: "What is the forward deployed engineer salary?",
    a: "Full time salaries at the AI labs run well into six figures plus equity, which is why most small companies shouldn't start with a hire. I set out the posted bands by company, and what each works out to per hour, in my FDE salary and hourly rate pieces on meethayat.com.",
  },
  {
    q: "Who can I hire as a forward deployed engineer for a small business?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works with startups and scale ups through Beyond Elevation. He spent twenty years in technology and sold three companies as chief financial officer, so he picks the process by what it costs you and builds it in your own systems. Book him at meethayat.com/services/fde.",
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
      "about": "Forward deployed engineer for small business: the signs a small or mid sized company needs one, when it does not, what each route costs from contractor rates and Beyond Elevation's published prices, AI use by firm size from the US Census Bureau, buy versus build success rates from MIT NANDA, and the steps a CEO or COO should take this week",
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
      "name": "Three small tiles joined to one turquoise star inside a gold arch",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer for small business, forward deployed engineer, small business AI operations, fractional forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer for small business" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer for small business: do you need one?</h1>

      <p className="op-lede">You need one when three or more of your systems don&apos;t talk and someone retypes data between them for 5 hours a week or more. For a small business that usually means one to two days a week, or a fixed project of 8 to 14 weeks. Rarely a full time hire.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years in technology as a chief financial officer and sold three companies from that seat. Now I build AI operations inside companies as a forward deployed engineer, and I&apos;d rather fix one process that costs you 10 hours a week than write a strategy about twenty. Below is how I&apos;d decide if I were in your chair, what each route costs, and what to do this week.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Three small tools, one thread each, one place where they meet. A small company doesn&apos;t need more than that.
        </figcaption>
      </figure>

      <h2>What a forward deployed engineer does in a small company</h2>

      <p>A forward deployed engineer sits inside your business, works in your own accounts and writes the code that puts AI into the work your people already do. At an AI lab it&apos;s a team per client. In a company of 40, it&apos;s one person, often part time, joining the CRM to the accounting package to the spreadsheet in between, then putting an agent on the step nobody wants to do.</p>

      <p>Palantir is still the biggest employer of FDEs, followed by OpenAI, Anthropic, Google and Databricks. FDE job listings rose about 800% between January and September 2025, per The Pragmatic Engineer. Nobody has written much for the owner of a 30 person firm, which is why I&apos;m writing this. If you want the full definition first, read <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">what is a forward deployed engineer</Link>.</p>

      <h2>The five signs a small business needs one</h2>

      <p>I look for symptoms, not ambition. Any two of these and the answer is usually yes:</p>

      <ol>
        <li>Three or more systems hold the same customer, order or invoice, and none of them update each other.</li>
        <li>One person spends 5 hours a week or more copying data from one screen to another.</li>
        <li>You can&apos;t see a number you run the company on, cash, margin by customer or jobs in progress, until month end.</li>
        <li>An AI pilot worked in the demo and has sat unused for 3 months or longer.</li>
        <li>Nobody on the payroll has ever built between two APIs, so every fix waits on a vendor.</li>
      </ol>

      <p>Sign four is the common one. Donald Farmer, writing in TechTarget in May 2026, puts most stalled pilots down to ownership, data plumbing built by hand in a sandbox, failure cases nobody tested, and no monitoring once it&apos;s live. Those are engineering problems that a small company has nobody to own. I&apos;ve written the longer version in <Link href="/blog/why-ai-agents-fail-in-production-2026-11-10/">why AI agents fail in production</Link>.</p>

      <h2>When a small business doesn&apos;t need one</h2>

      <p>If the work lives inside one tool, don&apos;t pay an engineer. Turn on the feature your software already has, or wire a simple automation yourself in an afternoon. The same goes for most companies under about 20 people. The US Census Bureau found AI use rose among firms with 20 or more employees between December 2025 and May 2026, but didn&apos;t change much for smaller ones, and fewer than 20% of firms with four or fewer staff used it at all.</p>

      <p>Size shows up in the numbers. The national rate was 19.8% in the period ending 3 May 2026. For firms with 100 to 249 employees it was 32%, and 37% at 250 and above. My reading is that between 20 and 250 people is where a business has enough systems to need joining and not enough engineers to join them. That&apos;s the gap a part time FDE fills.</p>

      <h2>What it costs a small business</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route</th><th>What is published</th><th>Suits</th></tr>
          </thead>
          <tbody>
            <tr><td>Contract FDE, US, mid level</td><td>$119 to $185 an hour</td><td>One process with an end date</td></tr>
            <tr><td>Contract FDE, US, senior</td><td>$155 to $235 an hour</td><td>A hard integration, short timeline</td></tr>
            <tr><td>AI audit, Beyond Elevation</td><td>$3,000 fixed, two weeks</td><td>Not sure which process to start with</td></tr>
            <tr><td>Fractional, Beyond Elevation</td><td>From $5,800 a month, 1 to 2 days a week</td><td>Six months or more of steady work</td></tr>
            <tr><td>Project, Beyond Elevation</td><td>From $30k, 8 to 14 weeks</td><td>One function made ready, fixed price</td></tr>
          </tbody>
        </table>
      </div>

      <p>The contract rates are Second Talent&apos;s US rate card, dated November 2026. The rest are Beyond Elevation&apos;s published prices, which is my firm. Two days a week is about 69 hours a month. At the mid level contract rate that comes to $8,211 to $12,765 a month, my arithmetic. The fractional starting price over the same hours is about $84 an hour. Full time salaries at the AI labs are a different league, and I break them down in <Link href="/blog/fde-salary-2026-10-29/">FDE salary</Link> and <Link href="/blog/forward-deployed-engineer-hourly-rate-2026-11-26/">forward deployed engineer hourly rate</Link>.</p>

      <h2>Why a small company should buy the build</h2>

      <p>MIT&apos;s NANDA initiative studied 300 public AI deployments, interviewed 150 leaders and surveyed 350 employees for The GenAI Divide, published in 2025. Fortune reported that about 5% of pilots achieved rapid revenue acceleration. Tools bought from specialist vendors and built with partners succeeded about 67% of the time, and internal builds about a third as often.</p>

      <p>The same report found more than half of AI budgets going to sales and marketing tools, while the biggest return came from back office automation. In a small firm that looks like a writing tool bought for the sales team while the hours someone spends matching invoices to purchase orders never get touched. Start in the back office.</p>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Monday, list every system the business runs on, and write who owns each login.</li>
        <li>Tuesday, ask each team lead one question. Where do you copy data from one system into another? Write down the hours a week.</li>
        <li>Wednesday, pick the single biggest number from Tuesday. If it&apos;s under 5 hours a week, you probably don&apos;t need an FDE yet. Fix it with the tools you already pay for.</li>
        <li>Thursday, check whether your systems can be reached by code. Look for an API page in each vendor&apos;s help centre. If two of the three can, the job is buildable.</li>
        <li>Friday, cap the first engagement. One process, a fixed price or a hard hour limit, and Tuesday&apos;s hours written down as the number to beat in 90 days.</li>
      </ol>

      <p>If that process sits inside one tool, you can fix it this month without hiring anyone. If it crosses three systems that have never spoken, and nobody in the company has built between them, that&apos;s when you bring in a forward deployed engineer on a capped engagement. Hayat Amin is the forward deployed engineer and AI operations specialist small and mid sized companies bring in for exactly that: joining the systems, shipping the agent into production and putting the number on a live dashboard, inside your own tools. Through <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">Beyond Elevation</a> the work is built for startups and scale ups, you can stop any time, and you keep the code, agents, accounts and docs. If you&apos;re weighing a hire instead, <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> sets out the routes side by side.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at this kind of work because I&apos;ve sat in the CFO chair where these numbers land, and now I build the operations myself as a forward deployed engineer. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through Beyond Elevation, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on whether your business needs one yet, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The AI use rates by firm size are from the US Census Bureau&apos;s Business Trends and Outlook Survey story of 26 May 2026. The 5%, 67%, 150, 350 and 300 are from Fortune&apos;s report on MIT NANDA&apos;s The GenAI Divide. The causes of stalled pilots are from Donald Farmer&apos;s TechTarget piece of 16 May 2026. The contract rates are from Second Talent&apos;s rate card, tables dated November 2026. The audit, fractional and project prices, and the ownership terms, are from the Beyond Elevation forward deployed engineering page. All of those were read on 27 November 2026. The 800% and the list of biggest FDE employers are from The Pragmatic Engineer and the other sources in my research file of 26 August 2026. The monthly contract cost is my arithmetic: 2 days of 8 hours over 52 weeks, divided by 12, gives about 69 hours. Google autocomplete, read from the US that morning, completes &quot;forward deployed engineer small&quot; and &quot;forward deployed engineer for smb&quot; with &quot;forward deployed engineer for small business&quot;.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which of your systems would you join first?</p>

    </PageShell>
  );
}
