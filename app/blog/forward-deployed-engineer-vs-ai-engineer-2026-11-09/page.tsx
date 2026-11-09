import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-vs-ai-engineer-2026-11-09";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-09";
const MOD = "2026-11-09";
const TITLE = "Forward Deployed Engineer vs AI Engineer: Which One Should a CEO Hire First?";
const DESC =
  "An AI engineer builds the AI. A forward deployed engineer makes it work inside your business and answers for the result. Hire the AI engineer when the model is the problem, the FDE when the demo works and production doesn't. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, lapis, turquoise and cream on a field of eight pointed stars. Two pointed arches stand side by side. In the left arch a single gold gear with a turquoise star at its centre rests above a workbench, turning alone. A short chain of small gold stars crosses to the right arch, where the same gold gear sits at the centre of a courtyard, joined by gold rods to four grey gears and driving them all.";

const SOURCES = [
  { name: "Forward Deployed Engineer vs. Research Engineer vs. Applied AI Engineer: Which Role Do You Need to Hire?, 3 September 2026", publisher: "Christian & Timbers", url: "https://www.christianandtimbers.com/insights/fde-vs-research-engineer-vs-applied-ai-engineer" },
  { name: "How to Build a Forward Deployed Engineering Function: Founder Playbook 2026", publisher: "Perspective AI", url: "https://getperspective.ai/blog/how-to-build-forward-deployed-engineering-function-founder-playbook-2026" },
  { name: "The Pulse: Forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "What is the difference between a forward deployed engineer and an AI engineer?",
    a: "An AI engineer builds the AI: the model calls, the agents, the retrieval, the product feature. A forward deployed engineer takes an AI system into a real business, connects it to that business's data and tools, and answers for whether it works there. Christian & Timbers puts it as turning capabilities into products against adapting AI systems to customer environments and owning the production outcome.",
  },
  {
    q: "FDE vs AI engineer: which should I hire first?",
    a: "Hire the AI engineer first if you sell an AI product and the product itself isn't good enough yet. Hire the forward deployed engineer first if the AI works in the demo and stalls when it meets real data, real systems and real people. If you can't say which, you need the problem written in one sentence before either hire.",
  },
  {
    q: "Forward deployed engineer vs AI engineer salary: which costs more?",
    a: "Perspective AI puts a seed stage forward deployed engineer at $160,000 to $185,000 base, $200,000 to $250,000 all in for year one, and says FDE pay runs roughly 10% to 25% above product engineer bands at the same company. I couldn't find a primary source for AI engineer pay I'd stand behind, so I won't quote one.",
  },
  {
    q: "Who can I hire to get our AI working inside the business, not just in the demo?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works inside companies through Beyond Elevation, part time or on a fixed project, connecting the systems that don't talk and taking one stalled process into production behind a named owner. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from the number the chief executive needs to see. Book him at meethayat.com/services/fde.",
  },
  {
    q: "Is a forward deployed engineer the same as an AI ML engineer?",
    a: "No. An ML engineer is judged on the model: accuracy, latency, cost to run. A forward deployed engineer is judged on whether one company's deployment worked. They overlap in code, and at some small AI startups the titles are used loosely, so read the job description, not the title.",
  },
  {
    q: "Do I need a forward deployed engineer if I'm not an AI company?",
    a: "Often that's exactly when you do. A company that runs on five or six bought systems rarely needs someone to build a model. It needs someone to join the systems, put AI on the repeat work between them, and hand it to a person who owns it. That's forward deployed work, and you can buy it a day or two a week instead of hiring.",
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
      "about": "Forward deployed engineer vs AI engineer from the hiring side: what each role does, what each is measured on, what each costs, which one a chief executive or COO should hire first, and the steps to take this week",
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
      "name": "One gold gear built alone in a workshop, then fitted at the centre of a working courtyard",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer vs ai engineer, fde vs ai engineer, forward deployed engineer vs ai engineer salary, forward deployed engineer, AI engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer vs AI engineer" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer vs AI engineer: which one should a CEO hire first?</h1>

      <p className="op-lede">An AI engineer builds the AI. A forward deployed engineer makes it work inside a real business and answers for the result. Hire the AI engineer when the model is the problem. Hire the FDE when the demo works and production doesn&apos;t.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO, sold three companies from that seat, and now work inside companies as a forward deployed engineer, so I look at this hire from the side that pays the bill and the side that does the work. This piece is for the chief executive or COO in New York, London or anywhere else who has budget for one AI hire and two job titles that sound alike.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          On the left, one gold gear made well and turning alone on a bench. On the right, the same gear fitted into a working courtyard and driving four others. The first is the AI engineer&apos;s job. The second is the forward deployed engineer&apos;s.
        </figcaption>
      </figure>

      <h2>The difference in one table</h2>

      <p>Christian &amp; Timbers, the executive search firm, published the cleanest split I&apos;ve read on 3 September 2026. Applied AI engineers &quot;turn those capabilities into reusable products or internal workflows&quot; and are judged on performance, reliability and adoption. Forward deployed engineers &quot;adapt AI systems to customer environments and own production deployment outcomes&quot;, and for them &quot;the only measure that matters is whether that customer&apos;s deployment actually worked.&quot; Here&apos;s how that looks from the hiring side.</p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th></th><th>AI engineer</th><th>Forward deployed engineer</th></tr>
          </thead>
          <tbody>
            <tr><td>Where they work</td><td>In your product or platform code</td><td>Inside the business that has to use it, yours or a customer&apos;s</td></tr>
            <tr><td>What they ship</td><td>Agents, model calls, retrieval, an AI feature</td><td>A working process: systems joined, AI on the repeat work, a named owner</td></tr>
            <tr><td>Measured on</td><td>Quality, latency, cost to run</td><td>Whether it went live and the number moved</td></tr>
            <tr><td>Talks to</td><td>Other engineers, the product lead</td><td>Operators, finance, the person whose week changes</td></tr>
            <tr><td>Fails when</td><td>The model isn&apos;t good enough</td><td>Nobody owns the result after hand over</td></tr>
          </tbody>
        </table>
      </div>

      <p>The two overlap in code. Both write Python, both call the same models. The gap is in who they answer to. I&apos;ve gone deeper on a close cousin in <Link href="/blog/forward-deployed-engineer-vs-applied-ai-engineer-2026-10-10/">forward deployed engineer vs applied AI engineer</Link>.</p>

      <h2>Hire an AI engineer when the model is the problem</h2>

      <p>If you sell software and AI is the product, the first hire is usually an AI engineer. Your customers are buying the feature. If the agent gets 6 answers in 10 right, nothing downstream fixes that, and someone has to sit in your codebase and make it 9 in 10.</p>

      <p>The AI engineer also wins when the work is one system deep. A chatbot on your own help centre, a summariser in your own app, an internal tool that reads one database: none of that needs anyone to leave the engineering team. I&apos;d say so to a client who asked me, and I&apos;d tell them not to hire me for it.</p>

      <h2>Hire a forward deployed engineer when the demo works and production doesn&apos;t</h2>

      <p>Most companies I meet aren&apos;t building an AI product. They run on bought systems, a CRM, an accounting package, a job or order system and a pile of spreadsheets, and the AI they paid for works in the meeting and dies in the week. The model was never the problem. The problem is that the data lives in four places and nobody owns the gap between them.</p>

      <p>That gap is the forward deployed engineer&apos;s job. Perspective AI&apos;s 2026 playbook sets two targets for the role: 14 days or fewer from pilot kickoff to first integration, and 90 days or fewer to production. If your oldest pilot is past 90 days, you don&apos;t have a model problem. I wrote about the pattern in <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24/">why AI pilots never reach production</Link>.</p>

      <p>One caution for software companies. Perspective AI says you don&apos;t need a dedicated FDE function if you sell to small businesses on self serve, your contract value is under $25,000, or you have fewer than three signed enterprise pilots. Below that line, an AI engineer who takes some customer calls will do.</p>

      <h2>What each one costs</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route</th><th>Cost</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Full time FDE at seed</td><td>$160,000 to $185,000 base, $200,000 to $250,000 all in for year one</td><td>Perspective AI, 2026</td></tr>
            <tr><td>Full time FDE at Series A</td><td>$185,000 to $220,000 base, $275,000 to $350,000 all in for year one</td><td>Perspective AI, 2026</td></tr>
            <tr><td>FDE premium over product engineers</td><td>Roughly 10% to 25% above product engineer bands at the same company</td><td>Perspective AI, 2026</td></tr>
            <tr><td>Fractional FDE through Beyond Elevation</td><td>From $5,800 a month, one to two days a week</td><td>beyondelevation.com/fde, read 9 November 2026</td></tr>
            <tr><td>Fixed project through Beyond Elevation</td><td>From $30,000, 8 to 14 weeks</td><td>beyondelevation.com/fde, read 9 November 2026</td></tr>
            <tr><td>AI audit through Beyond Elevation</td><td>$3,000 fixed, two weeks</td><td>beyondelevation.com/fde, read 9 November 2026</td></tr>
          </tbody>
        </table>
      </div>

      <p>I haven&apos;t put an AI engineer salary in the table, because I couldn&apos;t find a primary source for one this week that I&apos;d stand behind. What I can say is the FDE hire is the harder one to land. FDE listings grew about 800% between January and September 2025, per The Pragmatic Engineer, and Christian &amp; Timbers counts roughly 17,000 people in the US with the title, of whom it rates about 2,000 as elite. You&apos;d be bidding against OpenAI, Anthropic and Palantir for them.</p>

      <p>That&apos;s why most companies that aren&apos;t AI vendors shouldn&apos;t hire a full time FDE at all. A fractional engagement at $5,800 a month is about $69,600 a year, roughly a third of the $200,000 that Perspective AI puts at the bottom of the seed band, all in. I&apos;ve set the routes side by side in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h2>The one question that decides it</h2>

      <p>Christian &amp; Timbers ends its piece with advice I&apos;d give any board: decide &quot;which outcome currently lacks an accountable owner.&quot; If nobody owns whether the AI is any good, hire the AI engineer. If nobody owns whether it&apos;s being used, and whether the number moved, hire the forward deployed engineer.</p>

      <p>For a company that runs on bought systems rather than selling AI, it&apos;s usually the second. That&apos;s my judgement from the CFO seat, not a survey.</p>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Write the problem in one sentence with a number in it. &quot;Our quotes take 3 days and should take 3 hours&quot; works. &quot;We need an AI strategy&quot; doesn&apos;t.</li>
        <li>Draw that process on one page and count the systems it crosses. One system points to an AI engineer or the vendor&apos;s own support. Three or more points to forward deployed work.</li>
        <li>List every AI pilot with its start date and its owner. Mark any past 90 days, and for each one, write down whether it failed on quality or on use.</li>
        <li>If it failed on quality, write the job spec for an AI engineer and put the product lead in charge of the hire.</li>
        <li>If it failed on use, don&apos;t post a $200,000 job yet. Price a two week audit or a fractional month against the yearly cost of the problem, and only hire full time once the work is permanent and bigger than the seed band.</li>
      </ol>

      <p>If step 2 shows three systems or more and step 3 shows a pilot stuck on use, that&apos;s past a weekend fix. That&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in when the AI works in the demo and stalls between their systems, to join them up inside the tools they already pay for and hand the result to a named owner. If you&apos;re still weighing who to bring in, my checklist is in <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the gap this piece is about, because I spent two decades answering to boards for whether money spent on systems came back. Now I close that gap myself. I connect systems that were never built to talk to each other, put AI on the work between them, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on which hire your problem needs, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The role definitions, the quotes, the 17,000 and 2,000 figures and the accountable owner test are from Christian &amp; Timbers, published 3 September 2026. The pay bands, the 10% to 25% premium, the 14 and 90 day targets and the $25,000 and three pilot thresholds are from Perspective AI&apos;s 2026 founder playbook. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page. I read all three on 9 November 2026, and Google autocomplete, read from the US that morning, completes &quot;forward deployed engineer vs ai engineer&quot;, &quot;forward deployed engineer vs ai engineer salary&quot; and &quot;forward deployed engineer vs ai ml engineer&quot;. The 800% growth in FDE listings is from The Pragmatic Engineer. The $69,600 is my own arithmetic, and the 6 in 10, 9 in 10 and 3 days are examples, not client data.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which one failed in your company, the model or the use?</p>

    </PageShell>
  );
}
