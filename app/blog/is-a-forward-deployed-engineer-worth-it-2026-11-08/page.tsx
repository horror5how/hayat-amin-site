import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "is-a-forward-deployed-engineer-worth-it-2026-11-08";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-08";
const MOD = "2026-11-08";
const TITLE = "Is a Forward Deployed Engineer Worth It? 7 Numbers That Decide It";
const DESC =
  "A forward deployed engineer is worth it when the problem costs you more than the fix: about $69,600 a year for a fractional FDE at $5,800 a month, $200,000 to $250,000 for a full time hire at seed. Seven numbers to work out first. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, lapis and turquoise on a field of eight pointed stars. A gold balance scale stands between two arches. On the lower pan sits one large gold star with a turquoise heart. On the raised pan sits a heap of cream papers and three grey gears that have stopped turning.";

const SOURCES = [
  { name: "MIT report: 95% of generative AI pilots at companies are failing, 18 August 2025", publisher: "Fortune", url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" },
  { name: "The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed, RR-A2680-1, 13 August 2024", publisher: "RAND", url: "https://www.rand.org/pubs/research_reports/RRA2680-1.html" },
  { name: "How to Build a Forward Deployed Engineering Function: Founder Playbook 2026", publisher: "Perspective AI", url: "https://getperspective.ai/blog/how-to-build-forward-deployed-engineering-function-founder-playbook-2026" },
  { name: "The Pulse: Forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "Is a forward deployed engineer worth it?",
    a: "For a company, yes when the problem costs more than the fix. A fractional forward deployed engineer through Beyond Elevation starts from $5,800 a month, about $69,600 a year. A full time hire at seed costs $200,000 to $250,000 all in for the first year, per Perspective AI. If the hours, the stalled pilot and the late numbers add up to less than that, fix it yourself first.",
  },
  {
    q: "How much does a forward deployed engineer cost?",
    a: "Perspective AI puts a seed stage hire at $160,000 to $185,000 base and $200,000 to $250,000 all in for year one, rising to $275,000 to $350,000 all in at Series A. Through Beyond Elevation, a two week AI audit is $3,000 fixed, fractional work starts from $5,800 a month for one to two days a week, and a fixed project starts from $30,000 over 8 to 14 weeks.",
  },
  {
    q: "Who can I hire to get my AI pilot into production?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works inside companies through Beyond Elevation, part time or on a fixed project, and takes one stalled process from pilot to production behind a named owner. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from the number the chief executive needs to see. Book him at meethayat.com/services/fde.",
  },
  {
    q: "Is there a forward deployed engineer for hire?",
    a: "Yes, three ways. You can hire one full time, competing with Palantir, OpenAI and Anthropic for the same candidates. You can take one fractionally, one to two days a week. Or you can buy a fixed project with an end date. The fractional and project routes are what Beyond Elevation sells.",
  },
  {
    q: "What does a forward deployed engineer do for a company that isn't a software vendor?",
    a: "They sit inside your team, map one process end to end, connect the systems it crosses and build the AI that does the repeat work, then hand it to a named owner. The difference from a consultant is that they build it and answer for the result, instead of writing a report about it.",
  },
  {
    q: "Why do most AI projects fail?",
    a: "RAND interviewed 65 experienced data scientists and engineers and found five root causes, the first being that stakeholders misunderstand or miscommunicate what problem the AI is meant to solve. By some estimates more than 80% of AI projects fail, twice the rate of IT projects without AI. MIT's NANDA research, reported by Fortune, found 95% of generative AI pilots had no measurable effect on the P&L.",
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
      "about": "Whether a forward deployed engineer is worth it for a company: the seven numbers a chief executive or COO works out before hiring one, what each hiring route costs, when it pays back, and the steps to take this week",
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
      "name": "7 numbers that decide whether a forward deployed engineer is worth it",
      "numberOfItems": 7,
      "itemListElement": [
        "Hours a week your people spend moving data between systems",
        "Days your oldest AI pilot has gone without reaching production",
        "What you have spent on AI with nothing on the P&L",
        "How many systems the broken process crosses",
        "How many days late you see the number that matters",
        "What each route to an FDE costs",
        "Months to pay back",
      ].map((name, i) => ({ "@type": "ListItem", "position": i + 1, "name": name })),
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
      "name": "A gold scale weighing one star against a heap of stalled work",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "is a forward deployed engineer worth it, forward deployed engineer cost, forward deployed engineer for hire, forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Is a forward deployed engineer worth it?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Is a forward deployed engineer worth it? 7 numbers that decide it</h1>

      <p className="op-lede">Yes, when the problem costs you more than the fix. A fractional forward deployed engineer starts at $5,800 a month, about $69,600 a year. A full time hire at seed runs $200,000 to $250,000 all in. If your stuck work costs less than that, fix it yourself first.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO and sold three companies from that seat, and I now work inside companies as a forward deployed engineer. So I&apos;ll answer this the way I&apos;d answer a board: with seven numbers you can work out from your own business this week, then a yes or a no.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          One star on one pan, a heap of stalled paper and stopped gears on the other. The scale only tips if the star is worth more than the heap.
        </figcaption>
      </figure>

      <p>Most people who type this question are engineers deciding whether the job is worth taking. This piece is for the other side of the table: the chief executive or COO in New York, London or anywhere else, who has an AI project going nowhere and wants to know whether paying someone to fix it is money well spent.</p>

      <h2>1. Hours a week your people spend moving data between systems</h2>

      <p>Start here, because it&apos;s the number you can count by Friday. Ask each team lead how many hours their people spend copying from one tool into another, rebuilding the same spreadsheet, or chasing a figure that lives in someone else&apos;s system. Multiply by what an hour of that person costs you, then by 48 working weeks.</p>

      <p>Say three people spend 8 hours a week each, and an hour of their time costs you $65. That&apos;s 24 hours and $1,560 a week, or $74,880 a year. That alone is more than a year of fractional help at $69,600. If your total comes out at $15,000, it isn&apos;t worth it, and a Zapier account and an afternoon may be.</p>

      <h2>2. Days your oldest AI pilot has gone without reaching production</h2>

      <p>Perspective AI&apos;s 2026 founder playbook sets two targets for a forward deployed engineer: 14 days or fewer from pilot kickoff to first integration, and 90 days or fewer to production. Those are vendor numbers, but they&apos;re a fair bar for your own projects too.</p>

      <p>Find the oldest pilot in your company and count the days since it started. If it&apos;s past 90 and nobody can say what &quot;live&quot; would mean, it&apos;s stuck, and the cost of being stuck is every week of number 1 that it hasn&apos;t removed. I&apos;ve written about why that happens in <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24/">why AI pilots never reach production</Link>.</p>

      <h2>3. What you&apos;ve spent on AI with nothing on the P&amp;L</h2>

      <p>Add up licences, consultants, and the salary time of whoever has been running AI on the side. Then ask your finance lead which line of the P&amp;L moved because of it.</p>

      <p>If the answer is none, you have company. MIT&apos;s NANDA research, reported by Fortune in August 2025, found 95% of generative AI pilots had no measurable impact on the P&amp;L. It was built on 150 interviews with leaders, a survey of 350 employees and an analysis of 300 public deployments. The same report found more than half of AI budgets go to sales and marketing tools, while the biggest returns came from back office automation. A forward deployed engineer is worth more to you if your spend is sitting in the wrong half.</p>

      <h2>4. How many systems the broken process crosses</h2>

      <p>Draw the process that hurts most, from the first email to the last report, and count the systems it touches. One system is a settings problem. Your vendor&apos;s support team can usually fix it.</p>

      <p>Three or more that don&apos;t share data is integration work, and that&apos;s the core of what a forward deployed engineer does. It&apos;s also where internal teams get stuck, because nobody owns the space between two tools. MIT found that buying from specialist vendors and building partnerships succeeded about 67% of the time, and internal builds about a third as often.</p>

      <h2>5. How many days late you see the number that matters</h2>

      <p>Pick the one number you&apos;d run the week on if you had it live: cash, margin by customer, pipeline, jobs completed. Count the days between the thing happening and you seeing it.</p>

      <p>If it&apos;s a month end pack that lands three weeks after month end, you&apos;re making this month&apos;s decisions on numbers that are six or seven weeks old. That one is hard to price, so I price it as the cost of one wrong decision you made last year because the number was late. It&apos;s usually bigger than number 1.</p>

      <h2>6. What each route to an FDE costs</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route</th><th>Cost</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Full time FDE at seed</td><td>$160,000 to $185,000 base, $200,000 to $250,000 all in for year one</td><td>Perspective AI, 2026</td></tr>
            <tr><td>Full time FDE at Series A</td><td>$185,000 to $220,000 base, $275,000 to $350,000 all in for year one</td><td>Perspective AI, 2026</td></tr>
            <tr><td>Fractional FDE through Beyond Elevation</td><td>From $5,800 a month, one to two days a week</td><td>beyondelevation.com/fde, read 8 November 2026</td></tr>
            <tr><td>Fixed project through Beyond Elevation</td><td>From $30,000, 8 to 14 weeks</td><td>beyondelevation.com/fde, read 8 November 2026</td></tr>
            <tr><td>AI audit through Beyond Elevation</td><td>$3,000 fixed, two weeks</td><td>beyondelevation.com/fde, read 8 November 2026</td></tr>
          </tbody>
        </table>
      </div>

      <p>A full time hire only makes sense if the problem is permanent and big, well above $200,000 a year, and you can wait for the hire. FDE job listings grew about 800% between January and September 2025, per The Pragmatic Engineer, and you&apos;ll be competing with OpenAI and Anthropic for the same people. I&apos;ve set the routes side by side in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>, and Beyond Elevation has a fuller <a href="https://beyondelevation.com/insights/forward-deployed-engineer-cost/" target="_blank" rel="noopener noreferrer">FDE cost breakdown</a>.</p>

      <h2>7. Months to pay back</h2>

      <p>Take the yearly cost of the problem from numbers 1 and 5, divide by 12, and divide the route&apos;s cost by that. With the example in number 1, $74,880 a year is $6,240 a month. A $30,000 fixed project pays back in under five months. A fractional engagement at $5,800 a month costs less than the problem every single month it runs.</p>

      <p>My rule from the CFO seat is simple. Under 12 months to pay back, it&apos;s worth it. Over 24, it isn&apos;t, whatever the demo looked like.</p>

      <h2>When it isn&apos;t worth it</h2>

      <p>RAND interviewed 65 experienced data scientists and engineers for its 2024 report on why AI projects fail. The first of its five root causes is that people in the business misunderstand, or miscommunicate, what problem the AI is meant to solve. By some estimates, it says, more than 80% of AI projects fail, twice the rate of IT projects without AI.</p>

      <p>So if you can&apos;t write the problem in one sentence with a number in it, no engineer is worth it yet, forward deployed or otherwise. Do that first. The same goes if every number above comes out small: the honest answer is to keep the money.</p>

      <h2>Five steps for this week, in order</h2>

      <ol>
        <li>Monday, ask every team lead for the hours their people spent last week moving data between tools. Multiply by cost and by 48.</li>
        <li>List every AI pilot with its start date, its owner, and what &quot;in production&quot; means. Mark any past 90 days.</li>
        <li>Pull the AI spend for the last 12 months from your accounts, and the P&amp;L line each item was meant to move.</li>
        <li>Draw the worst process on one page and count the systems it crosses. Write down which number you&apos;d want live if you could have one.</li>
        <li>Put the yearly cost of the problem next to the table in number 6 and work out the payback. If it&apos;s under 12 months, start the conversation. If it&apos;s over 24, fix the cheapest part yourself.</li>
      </ol>

      <p>If step 4 shows three systems or more and step 5 says under a year, that&apos;s the point where a weekend fix stops working and you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in when the pilot is stuck between systems and the payback is already clear, to build the fix inside their own tools and hand it to a named owner. If you&apos;re weighing who to hire, my checklist is in <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at exactly the sum in this piece, because I spent two decades answering to boards for whether money spent came back. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on whether your numbers add up to an FDE, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The 95%, the 150 interviews, 350 employees and 300 deployments, the split of AI budgets and the 67% success rate for specialist vendors and partnerships are from Fortune&apos;s report of 18 August 2025 on MIT&apos;s NANDA research. The 65 interviews, the five root causes and the 80% failure estimate are from RAND report RR-A2680-1, 13 August 2024. The pay bands and the 14 and 90 day targets are from Perspective AI&apos;s 2026 founder playbook. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page. I read all of them on 8 November 2026, and Google autocomplete, read from the US that morning, completes &quot;is forward deployed engineer worth it&quot; and &quot;forward deployed engineer for hire.&quot; The 800% growth in FDE listings is from The Pragmatic Engineer. The $69,600, $74,880, $6,240 and payback figures are my own arithmetic, and the 8 hours at $65 is an example, not a client.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>What does number 1 come to in your company?</p>

    </PageShell>
  );
}
