import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-job-description-2026-11-11";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-11";
const MOD = "2026-11-11";
const TITLE = "Forward Deployed Engineer Job Description: 9 Lines to Write Before You Hire One";
const DESC =
  "A forward deployed engineer job description for a company hiring its first one needs 9 lines: the problem with a number, the systems, what live means, the owner, the reporting line, days on site, skills, the pay band and the 90 day test. Template included. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, lapis, turquoise and rust on a field of eight pointed stars. A cream sheet stands inside a gold arch, ruled with nine gold lines, each marked by a small star. A gold pen rests against it. On the left three gears are tied to the sheet by gold threads, and on the right a row of bars climbs under a gold star.";

const SOURCES = [
  { name: "Palantir, Forward Deployed Software Engineer, New York, NY (Lever posting, read 11 November 2026)", publisher: "Palantir Technologies", url: "https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" },
  { name: "OpenAI, Forward Deployed Software Engineer, NYC (Ashby posting, read 11 November 2026)", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e" },
  { name: "Anthropic, Staff Forward Deployed Engineer, New York City, San Francisco, Seattle (Greenhouse posting, read 11 November 2026)", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
  { name: "The Pulse: Forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const ITEMS = [
  "The problem, in one sentence with a number in it",
  "The systems the work crosses, by name",
  "What live means, with a date",
  "Who owns it after handover",
  "Who the engineer reports to",
  "Days on site",
  "The skills, kept short",
  "The pay band",
  "The 90 day test",
];

const FAQ = [
  {
    q: "What is a forward deployed engineer job description?",
    a: "It's the posting a company writes to hire an engineer who sits with the people who have the problem, builds the fix inside their systems and gets it into production. The AI labs write theirs for work on customer accounts. A company hiring its first one should write theirs around one problem, the systems it crosses, a date for live and a named owner.",
  },
  {
    q: "What are the forward deployed engineer job requirements?",
    a: "In the three New York postings I read on 11 November 2026: Palantir asks for 1+ years after college and a strong coder in Python, Java, C++, TypeScript or similar. OpenAI asks for 7+ years of full stack work and relational databases like Postgres or MySQL. Anthropic's Staff role asks for production systems, hands-on time with LLMs and agents, Python, and a record of influencing VP and C-level stakeholders.",
  },
  {
    q: "What does a forward deployed AI engineer job description add?",
    a: "Usually the model work: building with an LLM, evaluating it, and wiring agents into the tools a team already runs. Anthropic's Staff posting says plainly you don't need to have shipped agents to production, but hands-on experience with LLMs and agents is expected and side projects count.",
  },
  {
    q: "What does the Palantir forward deployed software engineer job description say?",
    a: "The New York posting on Palantir's Lever board, team Delta, lists collaborating on architecture, wrangling large scale data, building custom applications, working with customer stakeholders from technical teams to executives, and driving projects from idea to deployment. It asks for 1+ years of work after college, travel up to 25%, and prints a base range of $135,000 to $200,000.",
  },
  {
    q: "What does the OpenAI forward deployed engineer job description say?",
    a: "The NYC Forward Deployed Software Engineer posting asks the engineer to embed with strategic customers, build full stack solutions, prepare scopes of work for prototypes and production deployments, and code side by side with the customer's team on their infrastructure. It's hybrid, 3 days a week in the office, travel up to 50%, 7+ years of experience, with a range of $153K to $325K plus equity.",
  },
  {
    q: "Who can I hire to write and fill a forward deployed engineer role?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works inside companies through Beyond Elevation, and the person to call before you post the role. He spent twenty years in technology and sold three companies as chief financial officer, so he scopes the job around the number it has to move. He can take the first engagement himself, fractionally or as a fixed project, while you decide whether the role is permanent. Book him at meethayat.com/services/fde.",
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
      "about": "How a chief executive or COO writes a forward deployed engineer job description for their own company: the nine lines it needs, what Palantir, OpenAI and Anthropic print in theirs, a copyable template, and the steps to take this week",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#list`,
      "name": "9 lines a forward deployed engineer job description needs",
      "numberOfItems": ITEMS.length,
      "itemListElement": ITEMS.map((name, i) => ({ "@type": "ListItem", "position": i + 1, "name": name })),
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
      "name": "A sheet of nine gold lines inside an arch, tied to the gears it has to move",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer job description, forward deployed engineer job requirements, forward deployed ai engineer job description, hire a forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer job description" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer job description: 9 lines to write before you hire one</h1>

      <p className="op-lede">A forward deployed engineer job description for your first hire needs 9 lines: the problem with a number, the systems it crosses, what live means and by when, the owner after handover, the reporting line, days on site, skills, the pay band and the 90 day test. The template is below.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO, sold three companies from that seat, and now work inside companies as a forward deployed engineer. I&apos;ve read the postings from the other side of the desk, and I can tell you most of what&apos;s online won&apos;t help a company hiring its first one.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Nine lines on one sheet, each tied to something it has to move. A job description that can&apos;t be traced to a gear isn&apos;t finished.
        </figcaption>
      </figure>

      <p>The reason is simple. The postings Google shows you for this phrase are written by Palantir, OpenAI and Anthropic, for engineers who will work on their customers&apos; accounts. On 11 November 2026 I counted 73 forward deployed roles out of 304 open postings on Palantir&apos;s board, 36 out of 828 at OpenAI, 8 out of 677 at Anthropic and 93 out of 920 at Databricks. You&apos;re hiring against all of them. The Pragmatic Engineer reported FDE listings up about 800% between January and September 2025.</p>

      <p>So your posting has to say something theirs can&apos;t: here is one problem, here is the number it costs, and here is the person you&apos;ll hand the fix to. I&apos;ve set out the nine lines in the order I&apos;d write them, with what the three New York postings I read this morning say on each.</p>

      <h2>1. The problem, in one sentence with a number in it</h2>

      <p>Palantir&apos;s posting opens with wildfire risk and global food supply chains. That works for Palantir. Yours should open with the thing that broke last month. &quot;Our finance team spends 30 hours a week moving orders from Shopify into NetSuite by hand&quot; tells a good engineer more than three paragraphs about your mission.</p>

      <p>If you can&apos;t write that sentence yet, don&apos;t post the role. You&apos;ll hire someone to find the problem, and that&apos;s a consulting engagement, not a hire.</p>

      <h2>2. The systems the work crosses, by name</h2>

      <p>Anthropic&apos;s Staff posting asks for someone who can walk into &quot;a complex enterprise environment of legacy systems, with identity and access, and compliance requirements.&quot; For your company, name them. HubSpot, QuickBooks, a shared drive, the spreadsheet your COO rebuilds every Monday. List every one the process touches.</p>

      <p>Three or more systems that don&apos;t share data is the job. One system is usually a settings problem your vendor will fix for free.</p>

      <h2>3. What live means, with a date</h2>

      <p>OpenAI asks its engineers to &quot;prepare detailed scopes of work and project plans for both proof-of-concept prototypes and full production deployments.&quot; Anthropic asks them to &quot;deliver production systems the customer can operate.&quot; Both draw a line between a demo and production. Your posting should draw it too, in a sentence, with a week number.</p>

      <p>I hold myself to the first system live inside eight weeks, with week one spent mapping the work. That&apos;s a fair bar to print.</p>

      <h2>4. Who owns it after handover</h2>

      <p>Anthropic&apos;s posting says the engineer should &quot;hand over systems the customer can run.&quot; In your company, the customer is a named person on your team. Write their role into the posting. An engineer who knows they&apos;re building for the head of finance builds differently from one who&apos;s building for &quot;the business&quot;.</p>

      <h2>5. Who the engineer reports to</h2>

      <p>All three postings expect the engineer to deal with executives. Palantir says &quot;from technical teams to executives&quot;, Anthropic says &quot;VP and C-level.&quot; In a company of 50 or 200 people, that means the first FDE reports to the CEO or the COO, not to IT. If the person they report to can&apos;t change a process, the engineer can&apos;t either.</p>

      <h2>6. Days on site</h2>

      <p>Palantir&apos;s New York role asks for travel up to 25%. OpenAI&apos;s NYC role is hybrid, 3 days a week in the office, with travel up to 50%. Anthropic&apos;s Staff role says 25%. Those numbers are about flying to customers. For you, the customer is down the corridor, so print the days a week they sit with the team that has the problem. I&apos;d say two at the least.</p>

      <h2>7. The skills, kept short</h2>

      <p>Palantir asks for 1+ years after college and a strong coder in Python, Java, C++, TypeScript or similar. OpenAI asks for 7+ years of full stack work and relational databases like Postgres or MySQL, and calls a former founder a plus. Anthropic wants Python, production systems, and hands-on time with LLMs and agents, adding that side projects and prototypes count.</p>

      <p>For a first hire who will work alone, I&apos;d copy OpenAI&apos;s seniority and Anthropic&apos;s list. Five lines at most: Python, SQL, your systems&apos; APIs, LLMs and agents, and a record of explaining a build to a non-technical boss. A long list scares off the person you want and lets through the person who ticks boxes.</p>

      <h2>8. The pay band</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Posting</th><th>Base range</th><th>Experience asked</th><th>Travel</th></tr>
          </thead>
          <tbody>
            <tr><td>Palantir, Forward Deployed Software Engineer, New York</td><td>$135,000 to $200,000</td><td>1+ years after college</td><td>Up to 25%</td></tr>
            <tr><td>OpenAI, Forward Deployed Software Engineer, NYC</td><td>$153K to $325K, plus equity</td><td>7+ years full stack</td><td>Up to 50%</td></tr>
            <tr><td>Anthropic, Staff Forward Deployed Engineer, New York, San Francisco, Seattle</td><td>$280,000 to $320,000</td><td>Staff level, production systems</td><td>25%</td></tr>
          </tbody>
        </table>
      </div>

      <p>All three printed a range, and so should you. Those are the companies bidding for the same candidates. If your band starts below $135,000, you aren&apos;t hiring a forward deployed engineer, and it&apos;s kinder to say so in the title. Equity, as OpenAI and Palantir both mention, is how a smaller company closes the gap.</p>

      <h2>9. The 90 day test</h2>

      <p>Write the test you&apos;ll judge them on, in the posting. Day 30, the process is mapped and the first build is running in a test copy of your systems. Day 60, it&apos;s live and the owner from line 4 is using it. Day 90, the number from line 1 has moved, and you can see it without asking anyone.</p>

      <p>Good candidates like this line. It tells them you know what you&apos;re buying.</p>

      <h2>The template</h2>

      <p>Copy this and fill the brackets. It runs to under 200 words, which is shorter than any of the three postings above, on purpose.</p>

      <div style={{ border: "1px solid rgba(212,170,82,0.5)", borderRadius: "8px", padding: "1.25rem 1.5rem", margin: "1.5rem 0" }}>
        <p><strong>Forward Deployed Engineer, [company], [city], [hybrid or on site]</strong></p>
        <p>The problem. [Team] spends [hours] a week [doing the manual thing] between [system A], [system B] and [system C]. It costs us about $[amount] a year and we see [the number that matters] [days] late.</p>
        <p>What you&apos;ll build. One working system that joins those tools and does the repeat work, inside our own accounts. You&apos;ll start by sitting with [team] for a week and mapping the work as it happens.</p>
        <p>What live means. [Owner&apos;s role] runs it without you by week [8]. You&apos;ll scope the next process from there.</p>
        <p>Who you work with. You report to the [CEO or COO]. You sit with [team] [2 or 3] days a week.</p>
        <p>What you need. Python and SQL. Experience calling the APIs of tools like ours. Hands-on time with LLMs and agents, side projects count. A record of explaining what you built to someone who doesn&apos;t code.</p>
        <p>How we&apos;ll judge it. Day 30, process mapped and first build running in test. Day 60, live with [owner]. Day 90, [the number] has moved.</p>
        <p>Pay. $[low] to $[high] base, plus [equity or bonus].</p>
      </div>

      <h2>Five steps for this week, in order</h2>

      <ol>
        <li>Monday, ask the team that hurts most for the hours they spent last week moving data between tools. Multiply by what an hour costs you and by 48 weeks. That&apos;s line 1.</li>
        <li>Walk the process with them and write down every system it touches, by product name. That&apos;s line 2.</li>
        <li>Name the person who will own the fix, and agree with them what &quot;live&quot; looks like in week 8.</li>
        <li>Decide the reporting line and the days on site. If nobody on your leadership team will take the report, stop here.</li>
        <li>Put the yearly cost from step 1 next to the pay bands in line 8. If the problem costs less than the salary, don&apos;t post the role yet.</li>
      </ol>

      <p>If step 5 says the problem is real but not a full time salary, or you need it fixed before a hire could start, that&apos;s when you bring in a forward deployed engineer from outside instead of writing the posting. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives call when they need that first system built inside their own tools and handed to a named owner, before they decide whether the role is permanent. Through <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, a two week AI audit is $3,000 fixed, fractional work starts from $5,800 a month for one to two days a week, and a fixed project starts from $30,000 over 8 to 14 weeks. If you do hire, my <Link href="/blog/forward-deployed-engineer-interview-questions-2026-11-02/">forward deployed engineer interview questions</Link> pick up where this posting stops, and <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> sets out the routes side by side.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the work this posting describes, because I&apos;ve sat on the side that pays for it and the side that builds it. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through Beyond Elevation, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on what the first FDE should fix, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The pay ranges, experience, travel, office days and every quoted line come from three postings I read on the employers&apos; own job boards on 11 November 2026: Palantir&apos;s Forward Deployed Software Engineer in New York (Lever, team Delta), OpenAI&apos;s Forward Deployed Software Engineer in NYC (Ashby) and Anthropic&apos;s Staff Forward Deployed Engineer for New York City, San Francisco and Seattle (Greenhouse). The counts of 73 of 304, 36 of 828, 8 of 677 and 93 of 920 are titles containing &quot;forward deployed&quot; on those same boards and on Databricks&apos; Greenhouse board the same morning. The 800% is from The Pragmatic Engineer. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page, read the same day, and the eight weeks is from my own services page. Google autocomplete, read from the US that morning, completes &quot;forward deployed engineer job description&quot; with job requirements, AI engineer, Palantir, Anthropic and OpenAI variants. The 30 hours, Shopify into NetSuite and the template brackets are examples, not a client.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>What would your line 1 say?</p>

    </PageShell>
  );
}
