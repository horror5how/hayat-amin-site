import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-for-professional-services-firms-2026-11-25";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-25";
const MOD = "2026-11-25";
const TITLE = "AI for Professional Services Firms: 7 Jobs to Hand to a Forward Deployed Engineer First";
const DESC =
  "AI for professional services firms pays first in the back office: time capture, the handoff from a won deal to a staffed project, billing, and a live view of unbilled time. The 7 jobs I'd fix first, the systems each one crosses, and when to bring in a forward deployed engineer. By Hayat Amin.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, turquoise, cream and rust on a lapis field of small eight pointed stars. One wide gold arch stands on a gold base with a small star at its crown. Inside it, seven round medallions hang in a shallow curve, each holding a gold or cream star, and a fine gold thread runs from every medallion up to one large gold and turquoise star in a ring at the centre.";

const SOURCES = [
  { name: "AI in professional services report 2026 (read 25 November 2026)", publisher: "Thomson Reuters Institute", url: "https://www.thomsonreuters.com/en/institute/articles/ai-in-professional-services-report-2026" },
  { name: "AI is ready, but firms are not (press release, 22 June 2026, read 25 November 2026)", publisher: "Thomson Reuters", url: "https://www.thomsonreuters.com/en/press-releases/2026/june/ai-is-ready-but-firms-are-not-how-falling-behind-on-ai-implementation-is-costing-clients-and-talent.html" },
  { name: "Harvest, time tracking, invoicing and expenses", publisher: "Harvest", url: "https://www.getharvest.com/" },
  { name: "BigTime PSA", publisher: "BigTime", url: "https://www.bigtime.net/" },
  { name: "Kantata, professional services automation platform", publisher: "Kantata", url: "https://www.kantata.com/" },
  { name: "Certinia, cloud PSA and financial management built on Salesforce", publisher: "Certinia", url: "https://certinia.com/" },
  { name: "HubSpot free CRM", publisher: "HubSpot", url: "https://www.hubspot.com/products/crm" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const ITEMS = [
  "Time captured where the work happened, not chased on Friday",
  "A won deal that becomes a staffed project without retyping",
  "Who is free next month, answered in a minute",
  "Unbilled time and WIP, live by partner",
  "Invoices and expenses built from the time, not beside it",
  "Proposals drafted from past work, inside each client's AI rules",
  "The return on all of it, written down",
];

const FAQ = [
  {
    q: "How is AI used in professional services?",
    a: "Mostly by individuals so far. Thomson Reuters' 2026 report puts organisation wide AI use at 40%, up from 22% in 2025, and its June survey found 74% of professionals use AI tools every week. The firm level wins I see first are in the back office: time capture, the deal to project handoff, resourcing, billing and a live view of unbilled time.",
  },
  {
    q: "What are the best AI tools for professional services firms?",
    a: "Start with the system you already run. BigTime ships an assistant called AVA plus expense, resourcing and insights agents. Certinia sells a suite of AI agents called Veda on Salesforce. Kantata lists MCP connectivity. The gain usually comes from joining those to your CRM and your books, rather than from adding a new tool.",
  },
  {
    q: "What is professional services automation (PSA)?",
    a: "PSA software runs the project side of a services firm in one place: scoping, time and expense, resourcing, project delivery, invoicing and reporting. BigTime, Kantata and Certinia are three examples. Harvest covers time, invoicing and expenses for smaller firms that don't need full resourcing.",
  },
  {
    q: "Are AI agents for professional services ready to use?",
    a: "Some are. Thomson Reuters found 15% of organisations have adopted some type of agentic AI tool and another 53% are planning or considering it. In my experience an agent works when it does one narrow job against clean data, like matching expense receipts or flagging a project burning hours faster than its budget.",
  },
  {
    q: "Who can I hire to put AI into a professional services firm?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who builds this inside your own systems, through Beyond Elevation. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from utilisation, realisation and unbilled time, the numbers a partnership lives on. Book him at meethayat.com/services/fde.",
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
      "about": "AI for professional services firms: the seven back office jobs a managing partner or COO of a consulting, accounting, engineering or agency firm should fix first, the systems each one crosses (Harvest, BigTime, Kantata, Certinia, HubSpot, Salesforce, QuickBooks Online), what Thomson Reuters' 2026 research found, and when to bring in a forward deployed engineer",
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
      "name": "7 jobs in a professional services firm to hand to a forward deployed engineer first",
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
      "name": "Seven medallions under one gold arch, each tied by a thread to one central star",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "ai for professional services firms, ai in professional services, ai agents for professional services, professional services automation, forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "AI for professional services firms" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>AI for professional services firms: 7 jobs to hand to a forward deployed engineer first</h1>

      <p className="op-lede">AI for professional services firms pays first in the back office: time capture, the handoff from a won deal to a staffed project, billing, and a live view of unbilled time. Those are the hours a partnership loses every week. Below are the 7 jobs I&apos;d fix first, the systems each one crosses, and what to check this week.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years in technology as a chief financial officer and sold three companies from that seat, so I read a services firm the way its partners do, by utilisation, realisation and unbilled time. Now I build the AI operations behind those numbers myself, as a forward deployed engineer.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Seven medallions under one arch, each tied by its own thread to one star. Seven jobs, one live view.
        </figcaption>
      </figure>

      <p>The people in your firm already use AI. Thomson Reuters surveyed 1,816 professionals in law, tax, audit, accounting, compliance, risk and global trade in March and April 2026: 74% use AI tools every week, and 91% think their organisation falls short of what AI can deliver. Its 2026 report puts organisation wide use at 40%, up from 22% a year earlier. Only 18% said their firm tracks the return on its AI tools.</p>

      <p>So the gap I see in a 50 or 200 person firm in New York or London isn&apos;t enthusiasm. It&apos;s that every consultant has a chatbot open while the firm still runs on a Friday timesheet chase and a spreadsheet nobody trusts. The seven jobs below are firm level, and each one crosses at least two systems.</p>

      <h2>1. Time captured where the work happened, not chased on Friday</h2>

      <p>Every missing hour is an hour you can&apos;t bill. Most firms collect time once a week from memory, and the partner spends Monday chasing the gaps.</p>

      <p>Harvest already lets people log hours from a timer, a weekly timesheet or their calendar. BigTime covers time and expense as one of its modules. The job here is a draft timesheet built from what people did: calendar meetings, client email threads and documents opened, each matched to a project code, then sent to the person to confirm in two minutes. I&apos;d check one thing first: does every client and project carry the same name in your calendar, your CRM and your time tool? If not, fix the names before anything else.</p>

      <h2>2. A won deal that becomes a staffed project without retyping</h2>

      <p>In most firms I walk into, a deal marked won in the CRM is typed again, by hand, into the project tool: client, scope, rate card, budget hours, start date. Call it 20 minutes a deal, and one field typed wrong is enough to bill the wrong rate.</p>

      <p>Where you sit decides how hard this is. Kantata sells a version on Salesforce, and Certinia is built on the Salesforce platform, so a Salesforce firm on either has the handoff half solved. A firm on HubSpot&apos;s free CRM (two users, 1,000 contacts on the free tier) with Harvest or BigTime alongside has two systems that don&apos;t share a record. That&apos;s a small connector: the won deal creates the project, with the budget and rate card copied across and a link back to the deal.</p>

      <h2>3. Who is free next month, answered in a minute</h2>

      <p>Ask a managing partner who&apos;s free from the 1st and most will open a spreadsheet, or message three people. That costs you the next deal if the answer comes back on Thursday.</p>

      <p>Kantata matches people to work by scope, availability and skills. BigTime ships a Resourcing Agent. If you run one of those, the job is to keep it fed: skills current, holidays in, the pipeline from your CRM showing as tentative demand. If you don&apos;t, a simple model of booked hours against capacity, rebuilt every night from the time tool and the CRM, answers the question in a minute.</p>

      <h2>4. Unbilled time and WIP, live by partner</h2>

      <p>This is the number I&apos;d want on a partner&apos;s phone every morning, and in most firms it arrives after month end. By then a fixed fee project has already burned through its budget.</p>

      <p>BigTime says its work in progress accounting syncs to the general ledger. Whatever you run, the live view needs four numbers by partner and by project: utilisation, realisation, unbilled hours and budget burned against budget agreed. I&apos;ve written about the same idea for <Link href="/blog/law-firm-kpis-2026-10-31/">law firm KPIs</Link>, and the logic carries to consulting, accounting, engineering and agencies.</p>

      <h2>5. Invoices and expenses built from the time, not beside it</h2>

      <p>Billing should be the last step of the time record, not a second job. Harvest builds invoices from logged time and expenses, sends overdue reminders, and names QuickBooks Online and Stripe among its integrations. BigTime creates invoices from project data and ships an Expense Agent.</p>

      <p>The work is closing the loop to your books: invoice raised, payment received, both landing in the ledger without someone exporting a CSV. I&apos;d start with the overdue list. Pull every invoice over 30 days, check who chased it and when, and you&apos;ll see whether the reminders are running at all.</p>

      <h2>6. Proposals drafted from past work, inside each client&apos;s AI rules</h2>

      <p>Your last 50 statements of work are the best proposal template you own. A model can draft the next one from the closest three, with your rate card and your terms, for a senior person to edit rather than write.</p>

      <p>The catch is the client. Thomson Reuters found 40% of firm respondents have received orders both to use AI and not to use AI on matters, from different clients. 96% of professionals in its June survey want their AI to protect confidential data. So before any drafting, add one field to the client record in your CRM: may we use AI on this client&apos;s work, yes or no, and with which tools. The drafting tool reads that field first and refuses where it says no.</p>

      <h2>7. The return on all of it, written down</h2>

      <p>Only 18% of the Thomson Reuters respondents knew their firm tracked the return on AI tools, about the same share as the year before. Meanwhile, its June survey found 78% of corporate clients see AI improvements in quality as very important or essential, and only 6% say most of their providers deliver them.</p>

      <p>For each of jobs 1 to 6, write today&apos;s number before anything gets built: hours lost to the timesheet chase, minutes per handoff, days to close a month, invoices over 30 days. Then measure the same number 90 days later. My <Link href="/blog/ai-readiness-assessment-2026-11-12/">AI readiness assessment</Link> uses the same rule as its sixth check.</p>

      <h2>The seven jobs side by side</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Job</th><th>Systems it crosses</th><th>First thing to check</th></tr>
          </thead>
          <tbody>
            <tr><td>1. Time capture</td><td>Calendar, email, Harvest or BigTime</td><td>Client and project names match across all three</td></tr>
            <tr><td>2. Deal to project</td><td>HubSpot or Salesforce, then the PSA</td><td>How many fields are retyped per won deal</td></tr>
            <tr><td>3. Resourcing</td><td>PSA, CRM pipeline, holiday calendar</td><td>Whether skills and holidays are current</td></tr>
            <tr><td>4. Unbilled time and WIP</td><td>Time tool, PSA, general ledger</td><td>Can you see last week&apos;s unbilled hours today</td></tr>
            <tr><td>5. Invoices and expenses</td><td>Harvest or BigTime, QuickBooks Online, Stripe</td><td>Every invoice over 30 days and who chased it</td></tr>
            <tr><td>6. Proposals</td><td>Shared drive, CRM, rate card</td><td>A yes or no AI field on every client record</td></tr>
            <tr><td>7. The return</td><td>All of the above</td><td>Today&apos;s number, written before the build</td></tr>
          </tbody>
        </table>
      </div>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Monday, list every system the firm runs by product name: CRM, time tool, PSA, accounting package, shared drive, and the spreadsheets that sit between them.</li>
        <li>Tuesday, take one won deal from last month and follow it to its first invoice. Count every time a person typed something that already existed in another system.</li>
        <li>Wednesday, pull last week&apos;s unbilled hours and every invoice over 30 days. Note how long each pull took and who had to do it.</li>
        <li>Thursday, add the yes or no AI field to every active client record, and ask each partner to fill in their own clients.</li>
        <li>Friday, pick the one job above with the biggest weekly cost in hours, write today&apos;s number, and decide who builds the fix.</li>
      </ol>

      <p>If the fix lives inside one tool, a settings change in Harvest or BigTime, do it yourself this month. If it crosses three systems and nobody in the firm has built between them before, that&apos;s when you bring in a forward deployed engineer rather than another report. Hayat Amin is the forward deployed engineer and AI operations specialist managing partners bring in to connect the CRM, the PSA and the books, and to put a live view of unbilled time in front of them, built inside their own tools. Through <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, the AI audit is two weeks at $3,000 fixed and ends with a roadmap and your three fastest wins. Fractional work starts from $5,800 a month for one to two days a week, and a fixed project starts from $30k over 8 to 14 weeks. You keep the code, agents, accounts and docs. If you&apos;d rather hire, <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> sets out the routes side by side.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at this work because I&apos;ve sat on the finance side of the partner meeting, and now I build the systems behind it as a forward deployed engineer. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a managing partner can run the week on, and value and monetise the intellectual property and data a firm already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through Beyond Elevation, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on which of the seven to start with, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The 40% against 22%, the 18%, the 15% and 53% on agentic AI, and the 40% of firms with conflicting client orders are from the Thomson Reuters Institute&apos;s AI in professional services report 2026, read on 25 November 2026. The 1,816 professionals, the 74%, 91%, 96%, 78% and 6% are from the Thomson Reuters press release of 22 June 2026, read the same day. Product details for Harvest, BigTime, Kantata, Certinia and HubSpot are from each vendor&apos;s own page, read that morning, and no vendor price is quoted because I didn&apos;t read one. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page. Google autocomplete, read from the US that morning, completes &quot;ai for professional services&quot; with firms, tools, agents and best. The 20 minute handoff, the 50 statements of work and the 30 day invoice line are my examples, not a client.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which of the seven costs your firm the most hours this week?</p>

    </PageShell>
  );
}
