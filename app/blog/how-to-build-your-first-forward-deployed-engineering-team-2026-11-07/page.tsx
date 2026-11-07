import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-to-build-your-first-forward-deployed-engineering-team-2026-11-07";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-07";
const MOD = "2026-11-07";
const TITLE = "How to Build Your First Forward Deployed Engineering Team";
const DESC =
  "Build your first forward deployed engineering team one engineer at a time: hire after three repeatable enterprise pilots, report into engineering, pay $160,000 to $185,000 base at seed, and measure pilot to production in 90 days. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, lapis and turquoise on a field of eight pointed stars. Under the left arch a workshop of gold gears and a cream workbench, with three small turquoise stars waiting beside it. A gold bridge crosses the middle with one large gold star walking over it, towards a cream house with turquoise columns and a turquoise roof under the right arch.";

const SOURCES = [
  { name: "So You Want to Hire a Forward Deployed Engineer, 24 February 2026", publisher: "First Round Review", url: "https://review.firstround.com/so-you-want-to-hire-a-forward-deployed-engineer/" },
  { name: "How to Build a Forward Deployed Engineering Function: Founder Playbook 2026, 14 May 2026", publisher: "Perspective AI", url: "https://getperspective.ai/blog/how-to-build-forward-deployed-engineering-function-founder-playbook-2026" },
  { name: "How to Build a Forward Deployment Engineering Team at Scale (2026), 25 June 2026", publisher: "Recruiting from Scratch", url: "https://www.recruitingfromscratch.com/blog/how-to-build-a-forward-deployment-engineering-team-at-scale-2026" },
  { name: "The Pulse: Forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "How do you build a forward deployed engineering team?",
    a: "One engineer at a time. Hire the first forward deployed engineer once you have about three enterprise pilots that look alike, put them in engineering with a dotted line to product, write down the deployment as it happens, and only hire the second when the first is turning work away. Recruiting from Scratch puts the next stage at 2 to 5 engineers and a dedicated manager at 4 to 5.",
  },
  {
    q: "When should a startup hire its first forward deployed engineer?",
    a: "Perspective AI's rule of thumb is after three repeatable enterprise pilots with contracts above roughly $50,000 a year, and not at all if you sell self serve or your contracts are under $25,000. Ironclad hired its first dedicated post sales engineer before it reached $1M ARR, according to First Round Review.",
  },
  {
    q: "Who should forward deployed engineers report to?",
    a: "Engineering, with a dotted line to product. Both Perspective AI and Recruiting from Scratch say so, and Perspective AI calls putting them under sales the most common structural mistake. If they report to sales, they get measured on deals, and you've hired a sales engineer.",
  },
  {
    q: "How much does a forward deployed engineer cost at a startup?",
    a: "Perspective AI gives $160,000 to $185,000 base at seed, $200,000 to $250,000 all in for the first year. Recruiting from Scratch gives $170,000 to $220,000 base for a first level FDE at Series B, with 0.1% to 0.25% equity. A fractional forward deployed engineer through Beyond Elevation starts from $5,800 a month.",
  },
  {
    q: "Who can help me set up our first forward deployed engineering team?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works inside companies through Beyond Elevation, part time or on a fixed project, and writes the deployment down as he builds it so the first full time hire inherits a method. He spent twenty years in technology and sold three companies as chief financial officer, so he scopes the work against the number the chief executive has to hit. Book him at meethayat.com/services/fde.",
  },
  {
    q: "How do you measure a forward deployed engineering team?",
    a: "Four numbers from Perspective AI's scorecard: days from pilot kickoff to production (target 90 or fewer), days to first integration (14 or fewer), features fed back into the core product per engagement (at least one), and net revenue retention on the accounts they touch (130% or more).",
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
      "about": "How a founder or chief executive of a software or AI company builds a first forward deployed engineering team: when to hire the first engineer, where the team reports, what it costs, how to measure it, the first 90 days, and the steps to take this week",
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
      "name": "One gold star crossing a bridge from the workshop to the customer's house, three more waiting",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "how to build your first forward deployed engineering team, forward deployed engineering team, first forward deployed engineer, forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "How to build your first forward deployed engineering team" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>How to build your first forward deployed engineering team</h1>

      <p className="op-lede">Start with one engineer, not a team. Hire them after about three enterprise pilots that look alike, put them in engineering with a dotted line to product, pay $160,000 to $185,000 base at seed, and judge them on one number: days from pilot kickoff to production, with 90 as the target.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO, sold three companies from that seat, and now work inside companies as a forward deployed engineer. I&apos;ve seen the cost line of a services team that was meant to be a product team, so I&apos;ll give you the numbers I read this week, the order to do things in, and the six steps I&apos;d take before you post a single job ad.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          One star crosses the bridge to the customer&apos;s house first. The other three wait in the workshop until the road is mapped.
        </figcaption>
      </figure>

      <h2>Check you need one at all</h2>

      <p>Forward deployed engineering is an expensive way to win customers, and it only pays where each customer is worth a lot. James Honsa, who ran legal engineering at Ironclad, told First Round Review in February 2026 that FDEs are &quot;definitionally an upmarket motion&quot; and &quot;a pretty blunt instrument to try to use for your entire business.&quot; If you think your product ends up as a self serve, freemium product, he says don&apos;t do it.</p>

      <p>Perspective AI&apos;s founder playbook, published on 14 May 2026, puts numbers on it. Hire the first one after three repeatable enterprise pilots with contracts above roughly $50,000 a year. Skip the function if you sell self serve to small businesses, your contracts are under $25,000, or you have fewer than three signed enterprise pilots.</p>

      <p>There&apos;s one more test I&apos;d add from the finance chair. If your founder or your CTO is spending two days a week wiring your product into customer systems, that&apos;s the role already, done by the most expensive person in the company. Write down how many hours it took last month. That number is your business case.</p>

      <h2>Where the team reports</h2>

      <p>Put them in engineering, with a dotted line to product. Perspective AI and Recruiting from Scratch both say engineering, and Perspective AI calls putting the team under sales the most common structural mistake. Tiffany Siu, First Round&apos;s head of talent, gives the test: if you want your FDE to &quot;have closed X deals or run X number of demos,&quot; you probably want someone closer to sales.</p>

      <p>The reason is the product. A forward deployed engineer who ships fixes inside one customer and never feeds them back is a consultant on your payroll. Perspective AI&apos;s warning sign is more than 40% of recent engineering hires being FDEs. Past that, you&apos;re building a services firm. I&apos;ve explained why that line matters in <Link href="/blog/what-is-forward-deployed-engineering-model-2026-10-04/">the forward deployed engineering model</Link>.</p>

      <h2>Who to hire first</h2>

      <p>A generalist who has shipped to production and can sit with a customer. Perspective AI asks for five or more years of shipping experience, at least one customer facing integration built end to end, and at least 10 customer discovery conversations. Its interview test is a vague customer email: the strong candidate asks questions before scoping anything.</p>

      <p>Shilpa Balaji, a former Palantir FDE and recruiting lead, told First Round the best ones had a &quot;willingness to eat pain&quot; and called them &quot;compulsive builders.&quot; She also flagged more than 10 years at a FAANG company as a warning, and an overly dogmatic candidate as a red flag. The interview loop I&apos;d run is in <Link href="/blog/forward-deployed-engineer-interview-questions-2026-11-02/">forward deployed engineer interview questions</Link>.</p>

      <h2>What it costs</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Stage or level</th><th>Base salary</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>First FDE at seed</td><td>$160,000 to $185,000 base, $200,000 to $250,000 all in for year one</td><td>Perspective AI, May 2026</td></tr>
            <tr><td>FDE level 1 to 2, Series B</td><td>$170,000 to $220,000, 0.1% to 0.25% equity</td><td>Recruiting from Scratch, June 2026</td></tr>
            <tr><td>Senior FDE, Series B</td><td>$230,000 to $300,000, 0.2% to 0.45% equity</td><td>Recruiting from Scratch, June 2026</td></tr>
            <tr><td>FDE lead, Series B</td><td>$285,000 to $375,000, 0.3% to 0.6% equity</td><td>Recruiting from Scratch, June 2026</td></tr>
            <tr><td>Fractional FDE through Beyond Elevation</td><td>From $5,800 a month, one to two days a week</td><td>beyondelevation.com/fde, read 7 November 2026</td></tr>
          </tbody>
        </table>
      </div>

      <p>Two seed hires at the top of Perspective AI&apos;s all in band cost $500,000 a year before travel. Recruiting from Scratch notes engineers who travel 50% to 60% of the time should be paid for it. The fuller pay picture is in <Link href="/blog/fde-salary-2026-10-29/">FDE salary</Link>.</p>

      <h2>How the team grows</h2>

      <p>Recruiting from Scratch lays out four stages: one person, then 2 to 5, then 5 to 15, then 15 or more. Its staffing ratio is one FDE per major customer at the start of a deployment, rising to two or three for a large enterprise. Palantir once had three or four on a single customer, according to First Round. You add a dedicated FDE manager at four to five engineers, or when a senior FDE spends more than 30% of their time coordinating.</p>

      <p>Don&apos;t hire the second engineer until the first is turning work away and has written down how a deployment runs. The playbook is what lets number two start on day one instead of month three.</p>

      <h2>The first 90 days</h2>

      <p>Perspective AI&apos;s plan is the clearest I&apos;ve read, and I&apos;d follow it close to as written.</p>

      <ol>
        <li>Days 1 to 10 are internal. The new FDE writes an evaluation harness, ships one production bug fix and reads your customer call transcripts.</li>
        <li>Days 11 to 30, they pair with the founder or an existing FDE on a live engagement.</li>
        <li>By day 31 they own one engagement end to end, with a production deployment, an evaluation report and a memo on what to productise.</li>
        <li>By day 90, at least one feature from that engagement is in the core product. If nothing has come back, the function is drifting into consulting.</li>
      </ol>

      <p>Before day one, give them a staging environment they can break, a shared channel per customer, and a place on the on call rotation.</p>

      <h2>What to measure</h2>

      <p>Perspective AI&apos;s scorecard has four targets: 14 days or fewer from pilot kickoff to first integration, 90 days or fewer to production, at least one feature productised per engagement, and 130% or more net revenue retention on the accounts the team touches. I&apos;d put the first two on the board pack from month one. They&apos;re the ones you can see weekly.</p>

      <h2>Six steps for this week, in order</h2>

      <ol>
        <li>List every enterprise pilot you&apos;ve signed, with the annual contract value. If fewer than three clear $50,000, stop here and keep the founder on deployments for one more quarter.</li>
        <li>For each pilot, write the days from kickoff to first integration and to production. That&apos;s your baseline.</li>
        <li>Count the hours your founder, CTO or senior engineers spent inside customer systems last month. Multiply by what their time costs.</li>
        <li>Write the one page you&apos;d hand a new FDE: the three systems your customers always ask you to connect to, the steps of a deployment, and who signs off on the customer side.</li>
        <li>Decide the reporting line now. Engineering, dotted line to product, and write it in the job description.</li>
        <li>Pick the one customer the first engineer will own by day 31, and tell the customer.</li>
      </ol>

      <p>If step 4 comes out blank, that&apos;s the real problem. You can&apos;t hand a method to a new hire when nobody has written one, and that&apos;s when you bring in a forward deployed engineer before you hire one. Hayat Amin is the forward deployed engineer and AI operations specialist founders bring in to run the next deployment inside the customer and write the method down as he goes, so the first full time hire inherits a playbook instead of a blank page. If you&apos;re deciding between a full time hire and part time help, I&apos;ve compared them in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link> and <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the deployment work a forward deployed engineering team exists to do, because the finance seat taught me to start from the number the customer&apos;s chief executive has to see. I connect systems that were never built to talk to each other, put live dashboards in place of month end packs, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on whether you&apos;re ready for your first FDE hire, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The hiring trigger, the $25,000 and $50,000 contract thresholds, the seed pay band, the 40% warning sign, the scorecard targets and the 90 day plan are from Perspective AI&apos;s founder playbook of 14 May 2026. The team stages, the Series B pay and equity bands, the staffing ratios, the manager trigger and the travel note are from Recruiting from Scratch, 25 June 2026. The quotes from James Honsa, Shilpa Balaji and Tiffany Siu, the Ironclad and Palantir details are from First Round Review, 24 February 2026. Fractional pricing is from the Beyond Elevation forward deployed engineering page. I read all of them on 7 November 2026, and Google autocomplete, read from the US the same morning, completes &quot;how to build your first forward deployed engineering team.&quot; The $500,000 figure for two hires is my own arithmetic. FDE job listings grew about 800% between January and September 2025, per The Pragmatic Engineer, which is why good candidates are hard to find.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Pay bands move fast in this market, so open the links before you rely on mine. How many of your enterprise pilots reached production inside 90 days?</p>

    </PageShell>
  );
}
