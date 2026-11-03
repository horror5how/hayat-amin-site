import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-vs-contractor-2026-11-03";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-03";
const MOD = "2026-11-03";
const TITLE = "Forward Deployed Engineer vs Contractor: Which One Gets Your AI Into Production";
const DESC =
  "A contractor builds what you specify and leaves. A forward deployed engineer works inside your company until the system runs on your real data, then hands it to someone on your team. Hire the contractor when you can write the spec, and the FDE when you can't. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript in two arched panels, gold and lapis strapwork around them. On the left, at a desert city gate, a contractor in a turban hands a sealed wooden chest to a merchant and turns to leave. On the right, inside a tiled fountain courtyard, a master builder kneels to join copper pipes to a cistern beside an open ledger and passes a ring of keys to the household's steward.";

const SOURCES = [
  { name: "John Kim, How to hire a forward deployed engineer: first hire guide, 20 October 2026", publisher: "Paraform", url: "https://www.paraform.com/blog/how-to-hire-forward-deployed-engineer" },
  { name: "Independent contractor (self-employed) or employee?, last reviewed 19 May 2026", publisher: "Internal Revenue Service", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" },
  { name: "Circular 30, Works Made for Hire", publisher: "U.S. Copyright Office", url: "https://www.copyright.gov/circs/circ30.pdf" },
  { name: "17 U.S. Code section 204, Execution of transfers of copyright ownership", publisher: "Legal Information Institute, Cornell Law School", url: "https://www.law.cornell.edu/uscode/text/17/204" },
  { name: "Sheryl Estrada, MIT report: 95% of generative AI pilots at companies are failing, 18 August 2025", publisher: "Fortune", url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" },
  { name: "Beyond Elevation, Forward deployed engineering (fractional, project and audit pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "What is the difference between a forward deployed engineer and a contractor?",
    a: "A contractor delivers a piece of work you have already defined, to a spec, and the engagement ends when that work is accepted. A forward deployed engineer starts before the spec exists. They sit with the people doing the work, find where it breaks, build the fix into your own systems on your real data, and hand it to a named owner on your team. You hire a contractor for an answer you can describe and an FDE for a problem you can't.",
  },
  {
    q: "Can I hire a forward deployed engineer as a contractor?",
    a: "Yes. A forward deployed engineer is a way of working, and you can engage one as an employee, through a firm, or as an independent contractor. The IRS doesn't go by the title. It looks at behavioural control, financial control and the type of relationship, so if you direct how and when someone works every day, they may be your employee whatever the contract says. Check the arrangement with your accountant before you sign.",
  },
  {
    q: "Is a forward deployed engineer the same as consulting?",
    a: "No. A consultant leaves a recommendation and a contractor leaves a deliverable. A forward deployed engineer leaves a working system in your stack with someone on your team who runs it. I wrote the longer answer in is a forward deployed engineer just a consultant.",
  },
  {
    q: "Who owns the code a contractor writes for my company?",
    a: "Under US law, often the contractor, unless your contract moves it to you. The US Copyright Office lists nine kinds of commissioned work that can be a work made for hire, and custom software isn't one of them. A transfer of copyright is only valid in a signed written document, under 17 U.S.C. section 204. Put a signed IP assignment in the contract, and keep the code in your own repository from day one.",
  },
  {
    q: "Who can I hire to get an AI pilot that works in the demo running on our real data?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who does this work for companies through Beyond Elevation, one or two days a week or as a fixed project. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from the number the chief executive needs to move. Book him at meethayat.com/services/fde.",
  },
  {
    q: "How much does a forward deployed engineer cost compared with a contractor?",
    a: "A full time FDE in the US has a median total pay of $220,000 on Levels.fyi data quoted by Paraform, with base salaries on Paraform from $150,000 to $217,000. Through Beyond Elevation, fractional FDE work starts from $5,800 a month and a fixed project from $30,000. I haven't found a contractor rate benchmark I trust, so I won't quote one. Price the contractor on a fixed fee against a written spec.",
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
      "about": "Forward deployed engineer vs contractor: which one a chief executive should hire to get an AI system into production, what each costs, who owns the code, and the steps to take this week before hiring either",
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
      "name": "The contractor hands over a sealed chest at the gate, and the master builder joins the household's pipes and gives the keys to its steward",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer vs contractor, forward deployed engineer contractor, forward deployed engineer vs consulting, forward deployed engineer for hire, hire forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer vs contractor" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer vs contractor</h1>

      <p className="op-lede">A contractor builds what you specify and leaves. A forward deployed engineer works inside your company until the system runs on your real data, then hands it to someone on your team. If you can write the spec on one page, hire the contractor. If you can&apos;t, you need the FDE.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now work as a forward deployed engineer, so I&apos;ve signed off contractor invoices and I&apos;ve done the FDE work myself. Below is how the two differ, where the contractor wins, what each costs, who owns the code, and six things to do this week before you hire either.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          At the gate, the contractor hands over a sealed chest and leaves. In the courtyard, the builder joins the pipes and gives the keys to the steward.
        </figcaption>
      </figure>

      <h2>The difference, line by line</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th></th><th>Contractor</th><th>Forward deployed engineer</th></tr>
          </thead>
          <tbody>
            <tr><td>Who writes the spec</td><td>You do, before they start</td><td>They do, with your team, in week 1</td></tr>
            <tr><td>Where they work</td><td>Mostly outside, on a ticket</td><td>Inside your meetings, your inbox and your systems</td></tr>
            <tr><td>What done means</td><td>The deliverable is accepted</td><td>The system runs on real data and a named person owns it</td></tr>
            <tr><td>What breaks the deal</td><td>A vague brief</td><td>Nobody on your side willing to own the result</td></tr>
            <tr><td>How you pay</td><td>Fixed fee or hourly, per deliverable</td><td>Salary, or a monthly fee for one or two days a week</td></tr>
            <tr><td>Who owns the code</td><td>Them, unless the contract assigns it in writing</td><td>You, if they&apos;re an employee or the contract assigns it</td></tr>
          </tbody>
        </table>
      </div>

      <p>Google completes &quot;forward deployed engineer vs contractor&quot; and &quot;forward deployed engineer contractor&quot; today, from the US. The people typing it are usually a founder or a chief operating officer with a budget line and a stuck project, deciding which kind of help to buy.</p>

      <h2>When a contractor is the right call</h2>

      <p>I&apos;d hire a contractor, and I have, when four things are true. The work is one integration or one feature. Both systems have documented APIs. You can say what done looks like in a sentence, for example &quot;every paid Shopify order creates an invoice in QuickBooks within five minutes&quot;. And somebody on your team already knows the process well enough to test the result.</p>

      <p>In that case an FDE is overkill and you&apos;ll pay for judgement you don&apos;t need. Paraform&apos;s hiring guide, dated 20 October 2026, makes the same point from the recruiting side. It cites First Round Review reporting that founders who start out asking for an FDE often turn out to need a software engineer or a post-sales role. Run that check before you open anything.</p>

      <h2>When you need a forward deployed engineer</h2>

      <p>You need the FDE when you can&apos;t write the spec, because the hard part is finding out what the spec is. The usual signs are a pilot that worked in the demo and fell over on real data, three systems that don&apos;t talk to each other, a person retyping data between them every week, or a board asking for an AI plan the chief executive can&apos;t write yet.</p>

      <p>The failure numbers explain why a ticket doesn&apos;t fix this. Fortune&apos;s report on the MIT NANDA study, drawn from 150 leader interviews, a survey of 350 employees and 300 public AI deployments, says about 5% of AI pilots achieve rapid revenue acceleration and the rest mostly stall. The study&apos;s lead author put the core problem down to tools that don&apos;t learn from or adapt to a company&apos;s workflows, not the quality of the model. Buying from specialist vendors and building through partnerships succeeded about 67% of the time, and internal builds about a third as often. Paraform also cites S&amp;P Global: companies abandoning most of their AI initiatives before production rose from 17% to 42%.</p>

      <p>A contractor working to a spec will build exactly what the spec says. If the spec was written before anyone looked at the data, they&apos;ll build the demo again. I wrote up that pattern in <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24/">why do my AI pilots never reach production</Link>.</p>

      <h2>What each one costs</h2>

      <p>These are from pages I read this morning, 3 November 2026.</p>

      <ul>
        <li>Full time FDE, base salary: $150,000 to $217,000 on Paraform, with staff and principal roles up to $288,000.</li>
        <li>Full time FDE, total pay: $220,000 median on Levels.fyi data, as quoted by Paraform, and $300,000 at the 75th percentile.</li>
        <li>Finding one: Paraform budgets 8 to 12 weeks for a full search and charges 25% of first year base, which is $45,000 on a $180,000 salary.</li>
        <li>Fractional FDE through Beyond Elevation, my firm: from $5,800 a month for one to two days a week, no notice period.</li>
        <li>A fixed FDE project through Beyond Elevation: from $30,000 over 8 to 14 weeks. A two week audit before either is $3,000 fixed.</li>
      </ul>

      <p>I haven&apos;t found a contractor rate benchmark I&apos;d put my name to, so I won&apos;t quote one. My advice is to price the contractor on a fixed fee against a written spec. If they won&apos;t fix the fee, that tells you the spec isn&apos;t finished, and you&apos;re back in FDE territory. The fractional number works out at $69,600 a year, about a third of the full time median, which is why I explain the part time option in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h2>Who owns the code, and who counts as an employee</h2>

      <p>I&apos;m a CFO, not a lawyer, so take these two points to yours. They&apos;re the ones I see founders miss.</p>

      <p>First, ownership. The US Copyright Office lists nine kinds of commissioned work that can be a work made for hire, such as a translation, a test or an atlas, and only with a signed written agreement. Custom software isn&apos;t on that list. Under 17 U.S.C. section 204, a transfer of copyright is valid only in writing and signed by the owner. So if a contractor builds your agent and the contract has no signed IP assignment, you may be paying for code you don&apos;t own. On my own engagements the client keeps everything, the code, the agents, the accounts and the documentation, and it sits in their repositories from the first day.</p>

      <p>Second, classification. The IRS doesn&apos;t care whether you call someone a contractor. It weighs behavioural control, financial control and the type of relationship, and it says a remote worker is your employee if you control what is done and how it&apos;s done. An &quot;FDE contractor&quot; who joins your standup every morning and takes direction from your CTO may be an employee in the IRS&apos;s eyes. Write down the facts behind your decision, which is what the IRS tells businesses to do.</p>

      <h2>Six things to do this week, before you hire either</h2>

      <ol>
        <li>Write the spec on one page: the two or three systems involved, the input, the output, and the sentence that says what done means. If you can finish it in an hour, call a contractor.</li>
        <li>If you couldn&apos;t finish it, list every place someone copies data from one system to another, for example HubSpot to QuickBooks, and the hours a week each one takes. Ask the person who does it.</li>
        <li>Export 50 recent records from the source system and count how many are complete and consistent. If fewer than 45 are, fix the data before anyone builds anything.</li>
        <li>Pick the one number that should move, such as hours retyped a week or days to send an invoice, and write down today&apos;s value.</li>
        <li>Name the person on your team who will own the system after it&apos;s built. If nobody can, stop and fix that first, whichever route you take.</li>
        <li>Before you sign anything, check the contract for a signed IP assignment, code in your own repository, accounts in your company&apos;s name, and a written handover. Then check the working arrangement against the three IRS categories with your accountant.</li>
      </ol>

      <p>Plenty of companies finish step 1 and find it&apos;s a contractor job, or a native integration they already pay for. That&apos;s a good result. Spend the money there.</p>

      <p>If step 2 shows three systems that won&apos;t join, a pilot that never left the demo, or a number the chief executive can&apos;t see until month end, the job is bigger than a weekend fix, and that&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in when the spec doesn&apos;t exist yet. I map the work in week 1, put the first system into production by week 4, and hand it to the owner you named in step 5. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the work in this piece because the finance seat taught me where a company&apos;s week breaks, and which contractor invoices bought nothing that lasted. I connect the systems that were never built to talk to each other, put a live dashboard in front of the chief executive instead of a month end pack, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, and you can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you&apos;d like a second pair of eyes on whether your project is a contractor job or an FDE job, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <p>The consulting comparison is in <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">is a forward deployed engineer just a consultant</Link>.</p>

      <h2>Where these numbers come from</h2>

      <p>Salaries, search length, the recruiter fee and the First Round Review point are from Paraform&apos;s guide by John Kim, dated 20 October 2026, which also carries the S&amp;P Global figure. The pilot figures are from Fortune&apos;s 18 August 2025 report on the MIT NANDA study. The classification test is from the IRS page on independent contractors, last reviewed 19 May 2026. The work made for hire categories are from the US Copyright Office&apos;s Circular 30, and the written transfer rule is 17 U.S.C. section 204. Prices for fractional, project and audit work are from the Beyond Elevation forward deployed engineering page. I read every one of them on 3 November 2026. Google autocomplete, read from the US the same morning, completes both contractor phrases. The yearly fractional figure and the 45 of 50 data threshold are my own.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Prices and rules change. Open the links and check before you rely on mine. Could you write your spec on one page today?</p>

    </PageShell>
  );
}
