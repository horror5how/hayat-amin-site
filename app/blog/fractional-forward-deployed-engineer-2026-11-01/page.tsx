import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fractional-forward-deployed-engineer-2026-11-01";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-01";
const MOD = "2026-11-01";
const TITLE = "Fractional Forward Deployed Engineer: What You Get, What It Costs, and When It Beats a Full Time Hire";
const DESC =
  "A fractional forward deployed engineer is a senior engineer who works inside your company one or two days a week, builds the AI systems into your own stack and hands them to your team. Through Beyond Elevation that starts from $5,800 a month, against a full time FDE median of $220,000 in total pay and an 8 to 12 week search. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript in the golden age of Islamic art, gold leaf on lapis and turquoise strapwork. Inside a great gold circle a bearded master builder in a turban and turquoise robe strides across brass pipes holding a compass and a scroll of plans. The pipes join a book cabinet on the left to a fountain courtyard on the right, turning bronze gears and a set of scales on the way. In a small panel below he shakes hands with the household's steward beside a turning water wheel.";

const SOURCES = [
  { name: "Beyond Elevation, Forward deployed engineering (fractional, project and audit pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
  { name: "Hayat Amin, AI Operations (Forward Deployed Engineer) service and twelve week timeline", publisher: "meethayat.com", url: "https://meethayat.com/services/fde" },
  { name: "John Kim, How to hire a forward deployed engineer, 20 October 2026", publisher: "Paraform", url: "https://www.paraform.com/blog/how-to-hire-forward-deployed-engineer" },
  { name: "Sheryl Estrada, MIT report: 95% of generative AI pilots at companies are failing, 18 August 2025", publisher: "Fortune", url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" },
  { name: "Lindsey Wilkinson, report on the S&P Global Market Intelligence AI survey, 14 March 2025", publisher: "CIO Dive", url: "https://www.ciodive.com/news/AI-project-fail-data-SPGlobal/742590/" },
  { name: "30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025 (Gartner, Rita Sallam)", publisher: "MH&L", url: "https://mhlnews.com/technology-automation/article/55129131/30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025" },
];

const FAQ = [
  {
    q: "What is a fractional forward deployed engineer?",
    a: "A senior engineer who works inside your company part of the week, usually one or two days, on your real systems and data. They map one broken process, build the AI system that fixes it into your own stack, put a named person on your team in charge of it, then move to the next one. You pay for the days, not a salary, and you can stop when the work is done.",
  },
  {
    q: "What is a fractional AI forward deployed engineer?",
    a: "The same arrangement aimed at AI work: agents, model calls and the integrations around them, built into the tools you already run. The AI part is usually the smaller job. Most of the days go on joining the systems, cleaning the data the model reads, and making sure a person checks the output before it reaches a customer.",
  },
  {
    q: "How much does a fractional forward deployed engineer cost?",
    a: "Through Beyond Elevation, fractional work starts from $5,800 a month for one to two days a week, with no notice period. A fixed project starts from $30,000 over 8 to 14 weeks. For comparison, Paraform puts the Levels.fyi median total pay for a full time FDE at $220,000 a year, with a 25% recruiter fee on base salary if you hire through an agency.",
  },
  {
    q: "What is a forward deployed engineer hourly rate?",
    a: "I haven't found a published hourly benchmark I trust, so I won't quote one. I can give you the arithmetic instead. $5,800 a month at two days a week is about $670 a day. At one day a week it's about $1,340 a day. A full time FDE on the $220,000 median, spread over roughly 250 working days, is about $880 a day before payroll tax and benefits.",
  },
  {
    q: "Who can I hire as a fractional forward deployed engineer?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works fractionally through Beyond Elevation, one or two days a week, building the AI systems into a company's own stack. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from the number the chief executive needs to move. Book him at meethayat.com/services/fde.",
  },
  {
    q: "Is a fractional forward deployed engineer just a consultant?",
    a: "No, if they're doing the job. A consultant leaves a recommendation. A fractional FDE leaves a working system in your stack with a named owner on your team. Ask any candidate to show you something they built that is still running after they left.",
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
      "about": "Fractional forward deployed engineer: what the arrangement is, what it costs next to a full time FDE hire, when a chief executive should choose it, and the steps to take before hiring anyone",
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
      "name": "The master builder joins the household's pipes and ledgers, then hands the works to its steward",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "fractional forward deployed engineer, fractional ai forward deployed engineer, fractional fde, forward deployed engineer cost, forward deployed engineer hourly rate, hire forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Fractional forward deployed engineer" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Fractional forward deployed engineer</h1>

      <p className="op-lede">A fractional forward deployed engineer works inside your company one or two days a week, builds AI systems into the tools you already run, and hands each one to a named person on your team. You pay for the days, not a $220,000 salary, and you stop when the work is done.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer and sold three companies in that seat, and I now work as a fractional forward deployed engineer myself, so I&apos;ve looked at this decision from the budget side and from the build side. Below is what the arrangement gets you, what it costs next to a full time hire, when it&apos;s the wrong call, and what to do this week before you hire anyone.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The master builder joins the pipes between the book cabinet and the fountain court, then hands the works to the household&apos;s steward.
        </figcaption>
      </figure>

      <h2>The work a fractional forward deployed engineer does</h2>

      <p>The job is the same as the full time one. You sit with the people doing the work, find the step where the week breaks, and build the fix inside the company&apos;s own systems. I explained the full time role in <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">what is a forward deployed engineer</Link>. The fractional version changes three things: the hours, the contract and the exit.</p>

      <p>The hours are one or two days a week. The contract has no notice period and no equity. The exit is planned from day one, because the point is that your team runs the system after I leave. On my own engagements the timeline is written down before we start. Week 1 maps the process. By week 4 the first system is in production. Week 8 widens it to the next workflow, and week 12 hands it over, with me staying on only if there&apos;s more to build.</p>

      <p>Google completes &quot;fractional forward deployed engineer&quot; and &quot;fractional ai forward deployed engineer&quot; today. The demand behind it is real: forward deployed job listings grew about 800% between January and September 2025, and Anthropic launched Ode with Anthropic in July 2026 on top of its purchase of a company called Fractional AI. OpenAI set up The Deployment Company in May 2026 with $4 billion behind it.</p>

      <h2>The cost next to a full time hire</h2>

      <p>These are the numbers I&apos;d put in front of a board, each from a page I read this morning.</p>

      <ul>
        <li>Full time FDE, total pay: Paraform puts the Levels.fyi median at $220,000 a year and the 75th percentile at $300,000. Base salaries on Paraform run $150,000 to $217,000.</li>
        <li>Finding one: Paraform says a full search takes 8 to 12 weeks, and its fee is 25% of first year base, which is $45,000 on a $180,000 salary.</li>
        <li>Fractional through Beyond Elevation, my firm: from $5,800 a month for one to two days a week, stop any time.</li>
        <li>A fixed project through Beyond Elevation: from $30,000 for 8 to 14 weeks.</li>
        <li>A two week audit before either: $3,000 fixed.</li>
      </ul>

      <p>My arithmetic: $5,800 a month is $69,600 a year, about a third of the full time median, with no recruiter fee and no 8 to 12 week search. I&apos;ll be straight about the day rate, though. At the starting price and two days a week that&apos;s about $670 a day. At one day a week it&apos;s about $1,340 a day, more than the roughly $880 a day a $220,000 hire costs over 250 working days. You aren&apos;t buying cheaper days. You&apos;re not paying for the three or four days a week a company your size wouldn&apos;t fill.</p>

      <h2>Signs fractional is the right call</h2>

      <p>I&apos;d choose fractional when two or more of these are true:</p>

      <ul>
        <li>You have one to five workflows worth fixing, not twenty.</li>
        <li>An AI pilot worked in the demo and never reached production. You aren&apos;t alone: S&amp;P Global found the average company scrapped 46% of its AI proofs of concept before production, and 42% of companies abandoned most of their AI initiatives, up from 17% a year earlier.</li>
        <li>Your systems don&apos;t talk to each other, and someone on your team retypes data between them every week.</li>
        <li>The board wants an AI plan and you&apos;d rather show them a working system than a slide.</li>
        <li>You can&apos;t say yet whether there&apos;s a full time job here.</li>
      </ul>

      <p>The MIT NANDA study, reported by Fortune and drawn from 150 leader interviews, a survey of 350 employees and 300 public AI deployments, found that tools bought from specialist vendors and built through partnerships succeeded about 67% of the time, and internal builds about a third as often. It also found the biggest returns in back office automation, while more than half of AI budgets went to sales and marketing tools. MIT&apos;s own reading is that model quality is rarely the problem, because generic tools don&apos;t learn from or adapt to a company&apos;s workflows. My view, from the finance seat, is that the gap is usually data that wasn&apos;t ready and a system nobody on the team was told to own. I wrote up the full pattern in <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24/">why do my AI pilots never reach production</Link>.</p>

      <h2>Signs you should hire full time instead</h2>

      <p>If the AI work is your product, hire. A software company that ships AI features to its own customers needs someone in every standup, and two days a week will leave your engineers waiting. The same goes if you have more than about ten workflows queued, or if the systems you&apos;re joining change every week. Gartner put the cost of implementing an enterprise generative AI project at $5 million to $20 million, and at that size a full time team, usually with an FDE leading it, is the right shape. The pay for the full time role is in <Link href="/blog/fde-salary-2026-10-29/">FDE salary</Link>.</p>

      <h2>Six steps to take this week, before you hire anyone</h2>

      <p>You can do most of the scoping yourself, and it&apos;ll make any hire faster. In order:</p>

      <ol>
        <li>List every place someone copies data from one system to another. Name both systems, for example HubSpot to QuickBooks, or Shopify to a Google Sheet.</li>
        <li>Next to each, write the hours a week it takes and who does it. Ask them. Don&apos;t guess.</li>
        <li>Pick the one with the most hours and a single clear owner. That&apos;s your first system.</li>
        <li>Check the data before anyone writes code. Export 50 recent records from the source system and count how many are complete and consistent. If fewer than 45 are, fixing the data is the first job, because poor data quality is the first reason Gartner gives for abandoned proofs of concept.</li>
        <li>Write down the one number that should move, such as hours retyped a week, days to send an invoice, or quotes chased by hand, and its value today.</li>
        <li>Name the person on your team who will own the system after it&apos;s built. If nobody can, stop here and fix that first.</li>
      </ol>

      <p>Some companies finish that list and find the fix is a native integration they already pay for. That&apos;s a good outcome. Turn it on and keep the money.</p>

      <p>If the list shows three systems that won&apos;t join, a pilot that never left the demo, or a number the chief executive can&apos;t see until month end, the job is bigger than a weekend fix, and that&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in for this work, fractionally, through Beyond Elevation. I join the systems that don&apos;t talk, build the agents and the live dashboard on top, and hand them to the owner you named in step 6. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>Vetting a fractional forward deployed engineer</h2>

      <p>Ask for one system they built that is still running after they left, and ask to speak to the person who owns it now. If all they can show is decks, you&apos;re talking to a consultant. I covered the difference in <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">is a forward deployed engineer just a consultant</Link>. Ask what goes live in week 4. Ask whether there&apos;s a notice period, and walk away from a long lock in. A fractional engineer who is confident in the work doesn&apos;t need one.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at fractional forward deployed work because the finance seat taught me where a company&apos;s week breaks before anyone writes code. I connect the systems that were never built to talk to each other, put a live dashboard in front of the chief executive instead of a month end pack, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, and you can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you&apos;d like me to look at your list from step 1 and tell you which item to fix first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>Prices for fractional, project and audit work are from the Beyond Elevation forward deployed engineering page, and the twelve week timeline is from my own service page, both read on 1 November 2026. Full time pay, search length and the recruiter fee are from Paraform&apos;s guide by John Kim, dated 20 October 2026. The failure figures are from Fortune&apos;s report on the MIT NANDA study, CIO Dive&apos;s report on the S&amp;P Global survey of more than 1,000 respondents in North America and Europe, and MH&amp;L&apos;s report of Gartner&apos;s July 2024 forecast. The listing growth and the Ode with Anthropic launch are from my August 2026 research notes, drawn from The Pragmatic Engineer, Paraform and The New Stack. Google autocomplete, read from the US this morning, completes both fractional phrases. The yearly, daily and per-record figures are my own arithmetic.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Prices change. If you&apos;re reading this months from now, open the links and check before you quote mine. What&apos;s the one workflow on your list you&apos;d fix first?</p>

    </PageShell>
  );
}
