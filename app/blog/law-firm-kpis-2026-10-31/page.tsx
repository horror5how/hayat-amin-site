import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "law-firm-kpis-2026-10-31";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-31";
const MOD = "2026-10-31";
const TITLE = "Law Firm KPIs: The 8 Numbers a Managing Partner Should See Live, and the System Each One Is Stuck In";
const DESC =
  "The 8 law firm KPIs a managing partner in the US should see live: utilization by lawyer, unbilled time, realization by matter, aged receivables, trust reconciliation, enquiries to signed matters, stalled matters and effective hourly rate. Benchmarked on Clio's 2026 figures (42% utilization, 90% realization, 92% collection, 88 days median lockup) by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript page in the golden age of Islamic art, gold leaf, lapis and turquoise on aged cream paper. Under a pointed arch a seated scholar in a turban holds a large gold astrolabe, a small balance hanging from his hand. Six arched gold panels surround him, holding an hourglass, a bird with a sealed scroll, a key over an open book, a scroll with a wax seal, a locked chest and a quill, each tied to the astrolabe by a fine gold thread.";

const SOURCES = [
  { name: "Clio, Law Firm Key Performance Indicators (2026 utilization, realization, collection and lockup)", publisher: "Clio", url: "https://www.clio.com/resources/legal-trends/benchmarks/" },
  { name: "Clio, 2026 Legal Trends Report", publisher: "Clio", url: "https://www.clio.com/resources/legal-trends/" },
  { name: "Clio, Compare Average Lawyer Hourly Rate by State (2026 Data)", publisher: "Clio", url: "https://www.clio.com/resources/legal-trends/compare-lawyer-rates/" },
  { name: "Clio, How much should I charge as a lawyer in New York (2026)", publisher: "Clio", url: "https://www.clio.com/resources/legal-trends/compare-lawyer-rates/ny/" },
  { name: "Clio App Directory, QuickBooks Online", publisher: "Clio", url: "https://www.clio.com/app-directory/quickbooks-online/" },
  { name: "Lawmatics, Integrations", publisher: "Lawmatics", url: "https://www.lawmatics.com/integrations/" },
];

const NUMBERS = [
  "Utilization by lawyer, this week",
  "Unbilled time by matter, in dollars and days",
  "Realization by matter and by partner",
  "Receivables by age, with the client's name on them",
  "Trust balances and the date of the last three-way reconciliation",
  "Enquiries to signed matters, by source",
  "Open matters with nothing recorded in 30 days",
  "Effective hourly rate by practice area",
];

const FAQ = [
  {
    q: "What are KPIs for law firms?",
    a: "Law firm KPIs are the numbers that show whether lawyers' time is turning into cash. Clio measures three in a chain: utilization (the share of an eight hour day recorded as billable, 42% for 2026), realization (the share of billable work that gets invoiced, 90%) and collection (the share of invoiced work that gets paid, 92%). I'd add unbilled time, aged receivables, trust reconciliation, enquiry conversion, stalled matters and effective hourly rate.",
  },
  {
    q: "What should a law firm KPI dashboard show?",
    a: "The 8 numbers that change a decision this week: utilization by lawyer, unbilled time by matter, realization by matter and partner, receivables by age with client names, trust balances and the last three-way reconciliation date, enquiries to signed matters by source, matters with nothing recorded in 30 days, and effective hourly rate by practice area. Refreshed daily, not in the month end pack.",
  },
  {
    q: "What are the most important law firm key performance indicators?",
    a: "If you only watch one, watch lockup: how many days of work sit unbilled or unpaid. Clio's 2026 medians are 44 days of realization lockup, 27 days of collection lockup and 88 days in total. Lockup is where utilization, realization and collection show up as cash, or don't.",
  },
  {
    q: "What are the key law firm financial metrics?",
    a: "Realization rate, collection rate, realization lockup, collection lockup and effective hourly rate. Clio puts the 2026 average lawyer rate at $362 an hour in the US and $440 in New York. Effective rate is what you collect divided by the hours you record, and on Clio's averages it's a fraction of the standard rate.",
  },
  {
    q: "How do you calculate law firm profitability metrics like lockup?",
    a: "Clio's formulas: realization lockup is the value of unbilled work divided by annual revenue, times 365 days. Collection lockup is the value of unpaid invoices divided by annual revenue, times 365. A firm billing $5,000,000 a year at the 44 day median has about $602,740 of work done and not yet billed.",
  },
  {
    q: "Can I build a law firm Power BI dashboard?",
    a: "Yes, if the data under it is connected first. The hard part isn't the chart. It's that intake, matters, billing, payments and the general ledger sit in different systems, and a dashboard that reads one of them shows you a fifth of the firm. Connect them, then pick the tool.",
  },
  {
    q: "What KPI examples work for individual lawyers?",
    a: "Hours recorded against an eight hour day, the share of those hours that reach an invoice, and the share of invoices paid. In New York, Clio's 2026 averages are 35%, 81% and 92%, so about 2.1 hours of an eight hour day ends up as cash.",
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
      "about": "Law firm KPIs: the eight numbers a managing partner of a US law firm should see live, benchmarked on Clio's 2026 Legal Trends figures, and the system each number is stuck in",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#kpis`,
      "name": "The 8 law firm KPIs a managing partner should see live",
      "author": { "@id": "https://meethayat.com/#person" },
      "numberOfItems": NUMBERS.length,
      "itemListElement": NUMBERS.map((n, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": n,
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
      "name": "A scholar reading one gold astrolabe tied by threads to six instruments",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "law firm kpis, law firm kpi dashboard, law firm key performance indicators, law firm financial metrics, law firm profitability metrics, utilization rate, realization rate, collection rate, lockup, Clio, Hayat Amin, Beyond Elevation, New York"
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
        { label: "Law firm KPIs" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>Law firm KPIs: the 8 numbers a managing partner should see live</h1>

      <p className="op-lede">The law firm KPIs worth watching are the 8 that show hours turning into cash: utilization, unbilled time, realization, aged receivables, trust reconciliation, enquiry conversion, stalled matters and effective hourly rate. Each one should be live by Monday, not in a month end pack.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer and sold three companies from that seat, so cash tied up in work nobody has billed is the number I look for first. Now I build the plumbing that puts it on a screen, as a forward deployed engineer. This piece is for the managing partner of a US firm of 10 to 100 lawyers, in New York, Chicago or Dallas, who runs the week on Clio or MyCase and sees most of these numbers only after month end.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          One instrument, six measures of the house tied to it by gold thread. He reads them all in one glance instead of opening each casket.
        </figcaption>
      </figure>

      <h2>Why month end is too late for a law firm</h2>

      <p>Clio&apos;s 2026 benchmarks put it in one chain. In an eight hour day the average US lawyer records 3.4 billable hours, a utilization rate of 42%. Of that, 90% gets invoiced, which is about 3.0 hours. Of that, 92% gets paid, about 2.8 hours. Every step of the chain leaks, and none of the leaks shows up until an invoice goes out.</p>

      <p>New York is worse at the first two steps. Clio&apos;s New York page puts utilization at 35% and realization at 81%, with collection level with the country at 92%. Run that through and a New York lawyer turns about 2.1 hours of an eight hour day into cash. That&apos;s my arithmetic on Clio&apos;s averages, and it&apos;s 26% of the day.</p>

      <p>Then there&apos;s the wait. Clio calls it lockup: the days of work sitting unbilled or unpaid. The 2026 medians are 44 days of realization lockup, 27 days of collection lockup and 88 days in total (the medians are taken separately, so they don&apos;t add up). A firm with an 88 day lockup is reading about work done three months ago in its month end pack. By then the write-down has happened, the client has moved on and the associate has forgotten what the hours were for.</p>

      <h2>How I chose these eight</h2>

      <p>A number makes the list only if it changes a decision inside the week, comes from records the firm already keeps, and can be refreshed daily without anyone typing it. Where Clio publishes a 2026 benchmark, I give it. I also name the system the number is stuck in, because that&apos;s the real reason nobody sees it live. Partner compensation, headcount and marketing spend are left off. They matter, but they&apos;re quarterly decisions, and a live number doesn&apos;t change them.</p>

      <h2>1. Utilization by lawyer, this week</h2>

      <p>Clio defines utilization as the share of an eight hour day put towards billable work. Its 2026 Legal Trends Report projects 42%, up from 39% in 2025 and 28% in 2016. In New York the figure is 35%.</p>

      <p>The firm average hides the people. What I&apos;d put on the screen is each lawyer&apos;s recorded hours for the week so far, against their own last eight weeks. It lives in the time entries in Clio Manage or MyCase, and most firms see it as a monthly report. A live line tells you on Wednesday that someone is light, while there&apos;s still time to move a matter to them, or to find out they&apos;re doing the work and not recording it.</p>

      <h2>2. Unbilled time by matter, in dollars and days</h2>

      <p>Clio&apos;s formula for realization lockup is the value of unbilled work divided by annual revenue, times 365 days. The 2026 median is 44 days. For a firm billing $5,000,000 a year, that&apos;s about $602,740 of work done and not yet on an invoice. That&apos;s my arithmetic, and it&apos;s an interest free loan to your clients.</p>

      <p>Unbilled time is in the practice management system, but sorted by matter and age, with a dollar value, it&apos;s a report someone has to run. On a live screen, the partner sees the 10 matters carrying the most unbilled time and how long each has been sitting. Billing the oldest one this week is a cash decision, and it&apos;s the cheapest money the firm will ever raise.</p>

      <h2>3. Realization by matter and by partner</h2>

      <p>Realization is the share of billable work that gets invoiced. Clio puts the 2026 US average at 90% and New York at 81%. In a New York firm that&apos;s nearly one hour in five written off before the client sees it.</p>

      <p>The write-down happens at pre-bill review, inside Clio or MyCase, and the reason for it usually lives in a partner&apos;s head. A live view by matter shows which engagements are being written down while they&apos;re still running, so a fixed fee that&apos;s going over budget gets a scope conversation now, not after the fourth invoice. By partner, it shows who discounts by habit.</p>

      <h2>4. Receivables by age, with the client&apos;s name on them</h2>

      <p>Clio&apos;s 2026 collection rate is 92%, and the median collection lockup is 27 days. The formula is the value of unpaid invoices divided by annual revenue, times 365. At $5,000,000 of revenue, 27 days is about $369,863 waiting to be paid.</p>

      <p>An aged debt report with totals in four columns changes nothing. With names on it, it&apos;s a call list. The trouble is that the invoice sits in the practice management system, the card or bank payment comes through LawPay or the bank, and the ledger is in QuickBooks Online. A payment that lands in one and isn&apos;t matched in the other makes a client look late who isn&apos;t, and that&apos;s an awkward phone call to get wrong.</p>

      <h2>5. Trust balances and the date of the last three-way reconciliation</h2>

      <p>This is the number with the most at stake, and in most firms it&apos;s still checked once a month. Clio&apos;s QuickBooks Online page says Clio keeps trust and operating funds separate and produces the reports for three-way reconciliation, where the bank balance, the trust journal and the client ledgers all have to agree.</p>

      <p>On a managing partner&apos;s screen I&apos;d put 2 things: any client ledger below zero, and the number of days since the last reconciliation that balanced. Neither needs a dashboard to be calculated. It needs one so that nobody has to remember to look. Your state bar sets the rules on how trust money is held, and the screen doesn&apos;t replace your bookkeeper. It tells you on the day something stops agreeing.</p>

      <h2>6. Enquiries to signed matters, by source</h2>

      <p>Clio&apos;s 2026 report says 46% of consumers would consult AI before contacting a lawyer, and 24% of US adults have already used AI to answer a legal question. Where enquiries come from is moving, and a firm that can&apos;t see conversion by source is guessing where to spend.</p>

      <p>This number is stuck between 2 systems by design. Lawmatics, a legal intake and CRM tool, syncs matter data to Clio, MyCase, Filevine, PracticePanther and Smokeball upon lead conversion, in its own words. So the practice management system only ever sees the enquiries that signed. The ones that didn&apos;t stay in the intake tool, and the conversion rate lives in neither. Clio Grow sits in the same seat for firms on Clio. Joining the two is what turns intake into a number the partners can argue about.</p>

      <h2>7. Open matters with nothing recorded in 30 days</h2>

      <p>A matter with no time entry, no document and no message for 30 days is either finished and not closed, or stuck and nobody has said so. Both cost money. The first is unbilled time waiting for a final invoice. The second is a client about to complain.</p>

      <p>Every practice management system holds the activity dates. Few firms put them on one list. A daily count of quiet matters, by responsible lawyer, takes 5 minutes to read and has more client service in it than most satisfaction surveys.</p>

      <h2>8. Effective hourly rate by practice area</h2>

      <p>Clio&apos;s 2026 averages put the US lawyer rate at $362 an hour and the New York lawyer rate at $440. The effective rate is what you collect divided by the hours you work, and it&apos;s the KPI that ties the other seven together.</p>

      <p>On Clio&apos;s averages, a US lawyer at $362 collects about $1,007 for an eight hour day, against $2,896 if every hour reached cash. A New York lawyer at $440 collects about $918 against $3,520. Both are my arithmetic on Clio&apos;s published rates and ratios. By practice area, the number shows which work pays once the write-downs and slow payers are counted, and that&apos;s a decision about which matters to take.</p>

      <h2>What it takes to make these live</h2>

      <p>None of the 8 needs new software. They need the systems a firm already pays for to talk to each other. Clio&apos;s own QuickBooks Online integration syncs contacts, bills, payments, and trust and operating transactions to the ledger. Lawmatics pushes signed matters into the practice management system. What&apos;s missing in most firms is the layer that reads all of them every morning, matches what doesn&apos;t match and puts 8 numbers on one screen. People search for a law firm Power BI dashboard, and Power BI can draw it, but the chart is the last 10% of the job.</p>

      <p>That joining up is forward deployed work, and it&apos;s what I do through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm. I sit inside the business, connect the practice management system to intake, payments and the ledger, build the live screen and the agents that chase what it flags, and stay until your team runs it without me. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>. If the term is new, I wrote up <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">what a forward deployed engineer is</Link>, and the same exercise for other industries is in <Link href="/blog/property-management-kpis-2026-10-17/">property management KPIs</Link> and <Link href="/blog/saas-kpi-dashboard-2026-10-03/">the SaaS KPI dashboard</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the work in this piece because the finance seat taught me where cash hides before anyone writes code. I connect the systems that were never built to talk to each other, put a live dashboard in front of the person running the firm instead of a month end pack, and value and monetise the intellectual property and data a business already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on which of your firm&apos;s numbers to make live first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>Every benchmark is from Clio, read on 31 October 2026. The utilization, realization, collection and lockup figures are from its Law Firm Key Performance Indicators page and the 2026 Legal Trends Report. The hourly rates and New York ratios are from its rate pages, updated October 2026. The integration descriptions are from Clio&apos;s QuickBooks Online listing and Lawmatics&apos; integrations page. The cash per day, the 26%, and the $5,000,000 firm&apos;s lockup in dollars are my own arithmetic on those figures, and the $5,000,000 firm is an example, not a client. Google autocomplete, read from the US the same morning, completes law firm kpis with law firm kpi dashboard and law firm key performance indicators, and the questions above use those phrasings.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Clio updates these figures through the year. If you&apos;re reading this in a few months, open the links and check the numbers before you quote mine.</p>

    </PageShell>
  );
}
