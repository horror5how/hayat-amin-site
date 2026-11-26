import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-hourly-rate-2026-11-26";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-26";
const MOD = "2026-11-26";
const TITLE = "Forward Deployed Engineer Hourly Rate: What a CEO Actually Pays in 2026";
const DESC =
  "A forward deployed engineer costs $95 to $235 an hour on contract in the US, by Second Talent's November 2026 rate card. Salaried at OpenAI, the base works out at $89 to $144 an hour before benefits and equity. Every route priced per hour, from real job posts, and what to do this week. By Hayat Amin.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, turquoise, cream and rust on a lapis field of small eight pointed stars. A tall gold arch holds a balance scale. A stack of gold and cream coins sits in the left pan, an hourglass with gold sand sits in the right, and a turquoise jewel marks the pivot. Nine star medallions follow the curve of the arch, with one gold star above its crown.";

const SOURCES = [
  { name: "OpenAI, Forward Deployed Engineer (FDE), NYC (read 26 November 2026)", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/9471b38b-f65c-4a01-9626-bd33fca90f1d" },
  { name: "OpenAI, Forward Deployed Engineering Manager, Financial Services, NYC (read 26 November 2026)", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/8e7ba2dd-d632-4a8b-b95b-e2592f77a679" },
  { name: "OpenAI, Forward Deployed Software Engineer, NYC (read 26 November 2026)", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e" },
  { name: "Anthropic, Staff Forward Deployed Engineer, New York City, San Francisco, Seattle (read 26 November 2026)", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
  { name: "Ramp, Software Engineer, Forward Deployed, AI Solutions, New York (read 26 November 2026)", publisher: "Ramp", url: "https://jobs.ashbyhq.com/ramp/b614563f-3ce6-4dca-b5ba-0e5a6c8bda27" },
  { name: "Harvey, Forward Deployed Finance Engineer, Buyout, New York (read 26 November 2026)", publisher: "Harvey", url: "https://jobs.ashbyhq.com/harvey/fb3ecf9e-9379-4839-817c-f620a3e6034d" },
  { name: "Cohere, Forward Deployed Engineer, Inference, United States (read 26 November 2026)", publisher: "Cohere", url: "https://jobs.ashbyhq.com/cohere/8df498e9-aba8-487f-80ba-362b492bad09" },
  { name: "Employer Costs for Employee Compensation, June 2026 (released 9 September 2026)", publisher: "US Bureau of Labor Statistics", url: "https://www.bls.gov/news.release/ecec.nr0.htm" },
  { name: "Cost to hire a freelance forward deployed engineer, rate card dated November 2026", publisher: "Second Talent", url: "https://www.secondtalent.com/cost-to-hire/forward-deployed-engineer/" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "What is a forward deployed engineer's hourly rate?",
    a: "On contract in the US, $95 to $235 an hour by seniority, according to Second Talent's rate card dated November 2026, with mid level at $119 to $185. Salaried at OpenAI in New York, the posted base of $185K to $300K works out at $89 to $144 an hour over 2,080 hours, before benefits, bonus and equity.",
  },
  {
    q: "How much does a forward deployed engineer cost?",
    a: "It depends on the route. Full time FDE roles at OpenAI, Ramp and Harvey in New York post a base of $185K to $350K between them, and Anthropic's staff role posts $280K to $320K. A fractional engagement through Beyond Elevation starts from $5,800 a month for one to two days a week, and a fixed project starts from $30k over 8 to 14 weeks.",
  },
  {
    q: "What is the forward deployed engineer salary in the US?",
    a: "The postings I read on 26 November 2026 run from $153K at the bottom of OpenAI's NYC software band to $415K at the top of Cohere's US inference band. Most individual contributor roles sit between $185K and $330K base, with equity on top. I break the bands down by company in my FDE salary piece.",
  },
  {
    q: "Is a contract forward deployed engineer cheaper than hiring one?",
    a: "Per hour, often not. A mid level contractor at $119 to $185 an hour costs about the same as a $185K to $300K employee once you add the 30% that benefits add to private sector pay, per the BLS. Contract wins when the work has an end date, because you stop paying when it ships.",
  },
  {
    q: "Who can I hire as a forward deployed engineer for my company?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who builds AI operations inside your own systems, through Beyond Elevation. He spent twenty years in technology and sold three companies as chief financial officer, so he prices the work the way a CFO would, per process shipped rather than per hour. Book him at meethayat.com/services/fde.",
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
      "about": "Forward deployed engineer hourly rate in 2026: salaried FDE pay from OpenAI, Anthropic, Ramp, Harvey and Cohere job postings converted to an hourly figure, the employer load from the BLS Employer Costs for Employee Compensation release, contract rates from Second Talent's rate card, fractional pricing from Beyond Elevation, and the steps a CEO or COO should take before paying for an FDE",
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
      "name": "A balance scale under a gold arch, coins on one pan and an hourglass on the other",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer hourly rate, forward deployed engineer rate, forward deployed engineer cost, forward deployed engineer salary, fractional forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer hourly rate" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer hourly rate: what a CEO actually pays in 2026</h1>

      <p className="op-lede">A forward deployed engineer costs $95 to $235 an hour on contract in the US, by Second Talent&apos;s November 2026 rate card. Salaried at OpenAI in New York, the posted base works out at $89 to $144 an hour, before benefits and equity. Fractional through a firm works out at about $84 to $167 an hour.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years in technology as a chief financial officer and sold three companies from that seat, so I read an engineering quote the way a finance director does. Now I build AI operations inside companies as a forward deployed engineer. Below is every route priced per hour, from postings I read this morning, and what I&apos;d do this week before paying anyone.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Coins on one pan, an hourglass on the other. The rate only means something next to the hours it buys.
        </figcaption>
      </figure>

      <h2>The hourly rate by route, side by side</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route</th><th>What is published</th><th>Per hour</th></tr>
          </thead>
          <tbody>
            <tr><td>Salaried FDE, OpenAI, New York</td><td>$185K to $300K base, plus equity</td><td>$89 to $144 base, about $127 to $206 with benefits</td></tr>
            <tr><td>Salaried staff FDE, Anthropic</td><td>$280K to $320K base</td><td>$135 to $154 base, about $192 to $220 with benefits</td></tr>
            <tr><td>Contract FDE, US, junior</td><td>1 to 3 years</td><td>$95 to $142</td></tr>
            <tr><td>Contract FDE, US, mid level</td><td>3 to 6 years</td><td>$119 to $185</td></tr>
            <tr><td>Contract FDE, US, senior</td><td>7 to 10 years</td><td>$155 to $235</td></tr>
            <tr><td>Fractional, Beyond Elevation</td><td>From $5,800 a month, 1 to 2 days a week</td><td>About $84 to $167 at the starting price</td></tr>
          </tbody>
        </table>
      </div>

      <p>The salaried rows are my arithmetic on the posted base, divided by 2,080 hours, which is 40 hours for 52 weeks. The contract rows are Second Talent&apos;s. The fractional row is my arithmetic on Beyond Elevation&apos;s published price. I show the working for each below.</p>

      <h2>What a salaried FDE costs per hour, from real job posts</h2>

      <p>New York pay transparency means the AI labs print their bands. These are the ones I read on 26 November 2026, with the base turned into an hourly figure:</p>

      <ul>
        <li>OpenAI, Forward Deployed Engineer, NYC: $185K to $300K, so $89 to $144 an hour.</li>
        <li>Ramp, Software Engineer, Forward Deployed, AI Solutions, New York: $189K to $330K, so $91 to $159.</li>
        <li>Cohere, Forward Deployed Engineer, Inference, United States: $240K to $415K, so $115 to $200.</li>
        <li>Harvey, Forward Deployed Finance Engineer, Buyout, New York: $254.6K to $350K, so $122 to $168.</li>
        <li>Anthropic, Staff Forward Deployed Engineer: $280K to $320K, so $135 to $154.</li>
        <li>OpenAI, Forward Deployed Engineering Manager, Financial Services, NYC: $302K to $385K, so $145 to $185.</li>
      </ul>

      <p>Base pay isn&apos;t what the employer pays. The Bureau of Labor Statistics put private industry compensation at $46.89 an hour in June 2026, with wages at $32.82, or 70.0%, and benefits at $14.07, the other 30.0%. Divide a base by 0.7 and you get a rough cost to the company. OpenAI&apos;s $185K becomes about $264K, or $127 an hour. Its $300K becomes about $429K, or $206 an hour. That&apos;s an average across all private employers, and it leaves out equity, bonus, recruiting fees, a laptop and the months it takes to hire, so I&apos;d treat it as the floor.</p>

      <p>One more thing a CFO notices. You pay those 2,080 hours whether the FDE is shipping or waiting for your IT team to grant database access. I&apos;ve set out the full salary picture by company in <Link href="/blog/fde-salary-2026-10-29/">FDE salary</Link>.</p>

      <h2>What a contract FDE charges per hour</h2>

      <p>Second Talent publishes a rate card for freelance and contract forward deployed engineers in the US, updated quarterly, with the tables dated November 2026. It gives $95 to $142 an hour for juniors with 1 to 3 years, $119 to $185 for mid level with 3 to 6, and $155 to $235 for seniors with 7 to 10. It builds those from a US employee median of $189,500 a year, loaded for the payroll, insurance and leave a contractor pays for themselves, and it cites the BLS for the load.</p>

      <p>Its arithmetic and mine agree. $189,500 over 2,080 hours is $91. Divide by 0.7 and it&apos;s $130, inside its mid level band. So a contract rate is close to the employee&apos;s loaded cost, billed by the hour. Two cautions. This is one vendor&apos;s estimate, not a survey of invoices. And outside the US the same card is far lower: it puts mid level Western Europe at $63 to $98 and South Asia at $26 to $41.</p>

      <h2>What fractional works out to per hour</h2>

      <p>Beyond Elevation, my firm, prints its prices. Fractional starts from $5,800 a month for one to two days a week. One day a week is about 4.3 days a month, or 35 hours at 8 hours a day, which comes to about $167 an hour. Two days a week is about 69 hours, or $84 an hour. A fixed project starts from $30k over 8 to 14 weeks, and the AI audit is two weeks at $3,000 fixed.</p>

      <p>I wouldn&apos;t turn the project price into an hourly rate. A fixed price moves the risk of the work running long from you to the firm, and that&apos;s worth more to a CEO than any rate. I&apos;ve written the longer case for the part time route in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h2>Why the hourly rate is the wrong number to negotiate</h2>

      <p>Most quotes are priced in hours, and a board asks what the company got for them. The number that matters is cost per process in production: what you paid, divided by the workflows that now run without a person retyping data between systems.</p>

      <p>A $235 an hour senior who ships a working invoice match in three weeks is cheaper than a $95 an hour junior who&apos;s still building the demo in month three. So before you compare rates, write down the process, the hours a week it eats today, and the date you need it live. Then ask each option what it costs to get there.</p>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Monday, write one process you want fixed and the hours a week it costs today. Use real names: the CRM, the accounting package, the spreadsheet in between.</li>
        <li>Tuesday, put a price on those hours. Take the salary of the people doing the work, divide by 2,080, then by 0.7. That&apos;s what the problem costs you per hour, and the ceiling for what the fix is worth.</li>
        <li>Wednesday, pick the route by how long the work lasts. One process with an end date suits a fixed project or a contractor. One to two days a week for six months or more suits fractional. Full time, for years, across many processes, suits a hire.</li>
        <li>Thursday, ask every quote the same four questions. Who writes the code? Does it run in your systems or theirs? Do you own the code and the accounts at the end? What is the cap, in hours or dollars?</li>
        <li>Friday, cap the first engagement. A fixed price or a hard hour limit, with Monday&apos;s number written down as the thing to beat in 90 days.</li>
      </ol>

      <p>If the process sits inside one tool, a settings change or an off the shelf automation, a contractor at an hourly rate is fine and you should do it this month. If it crosses three systems that have never talked to each other, and nobody in the company has built between them, that&apos;s when you bring in a forward deployed engineer on a capped engagement rather than an open timesheet. Hayat Amin is the forward deployed engineer and AI operations specialist CEOs bring in for exactly that: connecting the systems, shipping the agent into production and putting the number on a live dashboard, inside their own tools. Through <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, you keep the code, agents, accounts and docs. If you&apos;d rather hire, <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> sets out the routes side by side.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at pricing this work because I&apos;ve sat on the finance side of it as a CFO, and now I build it myself as a forward deployed engineer. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through Beyond Elevation, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on which route fits your first process, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The salary bands are from each company&apos;s own job posting, read through its Ashby or Greenhouse job board on 26 November 2026. The $46.89, $32.82, $14.07, 70.0% and 30.0% are from the BLS Employer Costs for Employee Compensation release of 9 September 2026, for June 2026. The contract bands, the regional bands and the $189,500 median are from Second Talent&apos;s rate card, read the same day. The fractional, project and audit prices are from the Beyond Elevation forward deployed engineering page, read the same day. Every per hour figure on salaried and fractional work is my own arithmetic on those numbers, rounded to the dollar: base divided by 2,080 hours, loaded by dividing by 0.7, and fractional days at 52 weeks over 12 months and 8 hours a day. Google autocomplete, read from the US that morning, completes &quot;forward deployed engineer cost&quot; with rate, hourly rate and salary.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which process would you put on the scale first?</p>

    </PageShell>
  );
}
