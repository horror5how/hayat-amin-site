import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "set-up-an-fde-function-in-india-or-the-middle-east-2026-11-24";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-24";
const MOD = "2026-11-24";
const TITLE = "Set Up an FDE Function in India or the Middle East: What a US CEO Should Do First";
const DESC =
  "You can set up an FDE function in India or the Middle East, but not first. Get one system live near the problem, write the method down, then add Bengaluru for build capacity and Dubai for Gulf customers. Real pay bands, the arithmetic and the steps for this week. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, turquoise and cream on a lapis field of eight pointed stars. Three pointed gold arches stand on one gold base. The first holds three cream towers, the second a turquoise eight petal rosette on a gold stem, the third a turquoise dome on a cream drum. A gold thread joins the tops of the three arches to one large gold star above the middle arch.";

const SOURCES = [
  { name: "Forward Deployed Software Engineer, New York (job listing)", publisher: "Palantir Technologies via Built In", url: "https://builtin.com/job/forward-deployed-software-engineer/9562637" },
  { name: "Forward Deployed Engineer (UAE), Dubai (job listing, closed)", publisher: "Fairmarkit via Insight Partners jobs", url: "https://jobs.insightpartners.com/companies/fairmarkit/jobs/65373137-forward-deployed-engineer-uae" },
  { name: "Forward Deployed Engineer, Cloud Applied AI, Bengaluru (job listing, closed)", publisher: "Google via AnitaB.org jobs", url: "https://jobs.anitab.org/companies/google-24698/jobs/70592921-forward-deployed-engineer-cloud-applied-ai" },
  { name: "Forward Deployed Engineer Salary India, updated 14 September 2026", publisher: "Second Talent", url: "https://www.secondtalent.com/developer-rate-card/forward-deployed-engineer-india/" },
  { name: "Foreign exchange rates, October 2026 (US dollar at 3.6725 dirhams)", publisher: "Central Bank of the UAE", url: "https://centralbank.ae/media/lufbjnxr/fx_oct26_en.pdf" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "What is the forward deployed engineer salary in India?",
    a: "Second Talent's rate card, updated 14 September 2026, puts mid level FDEs in India at 14 to 28 lakh rupees a year and senior FDEs at 28 to 65 lakh. It quotes international clients $42 to $100 an hour for a senior one. It's a staffing firm's card and cites no outside survey, so treat it as a range to test, not a market price.",
  },
  {
    q: "How much does a forward deployed engineer earn in Dubai?",
    a: "Fairmarkit's Dubai posting offered AED 404,030 to 495,855 a year on target earnings, for 5 years or more in a technical customer facing role, and the person had to be based in the UAE. At the Central Bank of the UAE's rate of 3.6725 dirhams to the dollar, that's about $110,000 to $135,000. The posting is now closed.",
  },
  {
    q: "Should my first forward deployed engineer be offshore?",
    a: "I wouldn't do it. The first FDE's job is discovery: sitting with the person who runs the broken process and finding the number that changes. That needs the room and the working day. Put the first one near the problem, get one system live and handed over, then add offshore build capacity behind a lead who owns the discovery.",
  },
  {
    q: "Who can I hire to set up an FDE function for my company?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who sets up the first system and the method a team can copy, through Beyond Elevation in New York, London and Dubai. He spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers, so the cost case is part of the build. Book him at meethayat.com/services/fde.",
  },
  {
    q: "Can a forward deployed engineer work remotely?",
    a: "For the build, yes. For discovery, mostly no. Fairmarkit required its Dubai FDE to be based in the UAE, and Palantir lists its New York role as hybrid. Both put the engineer within reach of the customer. A remote FDE works when someone on the ground owns the conversation with the people whose week the system changes.",
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
      "about": "How a US chief executive or COO should set up a forward deployed engineering function in India or the Middle East: what to do before going offshore, what FDEs are paid in Bengaluru, Dubai and New York, what each location is good for, and the steps to take this week",
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
      "name": "Three arches, three cities, one method joining them",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "set up an fde function in india or the middle east, forward deployed engineer india, forward deployed engineer salary india, forward deployed engineer dubai, offshore forward deployed engineering team, Hayat Amin, Beyond Elevation, New York, Bengaluru, Dubai"
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
        { label: "Set up an FDE function in India or the Middle East" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Set up an FDE function in India or the Middle East: what a US CEO should do first</h1>

      <p className="op-lede">You can set up an FDE function in India or the Middle East, but don&apos;t start there. Get one system live near the problem, write the method down, then add Bengaluru for build capacity and Dubai or Abu Dhabi when your customers are in the Gulf.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO, sold three companies from that seat, and now build AI operations inside companies as a forward deployed engineer through my firm, which works in New York, London and Dubai. I&apos;ve read the offshore question from both sides, the budget and the build, and this is the order I&apos;d do it in if I ran a US company today.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Three arches on one base: towers for New York, a rosette for Bengaluru, a dome for Dubai. The gold thread over them is the method, and it has to be written before the second arch goes up.
        </figcaption>
      </figure>

      <h2>Why the first FDE shouldn&apos;t sit offshore</h2>

      <p>A forward deployed engineer earns the title by sitting with the people whose week is broken. The first one on your payroll has to find the process, the 3 systems it crosses and the number that changes when it&apos;s fixed. That&apos;s discovery, and it doesn&apos;t travel well across most of a working day of time difference.</p>

      <p>The companies hiring FDEs abroad put them next to customers, not next to cheap desks. Fairmarkit&apos;s Dubai posting said the engineer had to be based in the UAE and would lead &quot;technical discovery, solution design, configuration, and data onboarding&quot; with customers. Palantir lists its New York role as hybrid. Google&apos;s Bengaluru FDE role, Cloud Applied AI, was written to &quot;design, build jointly, troubleshoot, and launch AI agents&quot; with major clients there. Each one sits where its customer sits.</p>

      <p>So if your problem is in Ohio, your first FDE belongs in Ohio, or at least on a plane to it. The offshore team comes second, once there&apos;s a method to hand them.</p>

      <h2>What FDEs cost in New York, Dubai and Bengaluru</h2>

      <p>I read these on 24 November 2026. The Dubai and Bengaluru postings are closed, and I&apos;ve kept them because they&apos;re the clearest printed numbers I could find.</p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Location</th><th>Printed pay</th><th>What they asked for</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>New York, Palantir</td><td>$135,000 to $200,000 a year</td><td>Forward Deployed Software Engineer, hybrid</td><td>Built In listing, reposted about 3 months ago</td></tr>
            <tr><td>Dubai, Fairmarkit</td><td>AED 404,030 to 495,855 on target earnings, about $110,000 to $135,000</td><td>5 years or more in a technical customer facing role, UAE based</td><td>Fairmarkit posting, closed</td></tr>
            <tr><td>Bengaluru, Google</td><td>Not printed</td><td>Mid level, 2 years of software development, GenAI experience</td><td>Google posting, closed</td></tr>
            <tr><td>India, mid level</td><td>14 to 28 lakh rupees a year</td><td>3 to 6 years</td><td>Second Talent rate card, 14 September 2026</td></tr>
            <tr><td>India, senior</td><td>28 to 65 lakh rupees a year, or $42 to $100 an hour to an international client</td><td>6 to 10 years</td><td>Second Talent rate card, 14 September 2026</td></tr>
          </tbody>
        </table>
      </div>

      <p>Two things fall out of that table. The first is that the Gulf isn&apos;t the cheap option. Fairmarkit&apos;s Dubai band, converted at the Central Bank of the UAE&apos;s 3.6725 dirhams to the dollar, starts below Palantir&apos;s New York floor and tops out at about $135,000. You go to Dubai or Abu Dhabi to be near Gulf customers, not to save on salary.</p>

      <p>The second is that India is cheaper on a salary and much less so through an agency. Second Talent builds its hourly rates on 2,080 hours a year. At their top senior rate of $100 an hour, that&apos;s $208,000 a year billed to you, which is above Palantir&apos;s New York ceiling. At $42 an hour it&apos;s $87,360. The spread is the whole story, and Second Talent cites no outside survey for it, so test the range with two or three real quotes before you budget on it.</p>

      <h2>What each location is good for</h2>

      <ul>
        <li><strong>Bengaluru, or anywhere in India.</strong> Build depth behind a lead. The data pipelines, the integrations between systems, the test sets that prove an agent is right. Google hired its Bengaluru FDE at mid level with 2 years of software development, which tells you the pool is deep at that level. Give them a written method and a named owner on your side.</li>
        <li><strong>Dubai or Abu Dhabi.</strong> Customers in the Gulf. If you sell into the UAE or Saudi Arabia and your product needs deploying inside the buyer, an FDE on the ground does the discovery your New York team can&apos;t do from a video call. Budget for it like a US hire.</li>
        <li><strong>The US.</strong> The first FDE, and the lead after that. Discovery, the executive conversation and the handover stay here until the method is written down and a second system has gone live without them.</li>
      </ul>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Write the one problem in a sentence with a number in it. &quot;Customer onboarding takes 21 days and should take 5&quot; works. If you can&apos;t write that sentence, you&apos;re not ready to hire anywhere.</li>
        <li>List the systems that process crosses and who owns each one. If it&apos;s three or more, the first hire needs to be strong on joining systems, and that person sits near the process.</li>
        <li>Decide what the offshore team would build in month 3, not month 1. Integrations, data pipelines and test sets go offshore well. Discovery and handover don&apos;t.</li>
        <li>Get three real quotes from India for a senior FDE: one direct hire through an employer of record, one agency, one freelancer. Compare them to the $87,360 to $208,000 spread above.</li>
        <li>If you sell into the Gulf, ask your two biggest Gulf customers whether they&apos;d want an engineer in the room. Their answer decides Dubai, not the salary band.</li>
        <li>Write the method as you go: how you scope, how you test, how you hand over. That document is the thing you&apos;re really exporting.</li>
      </ol>

      <p>If you can&apos;t get one system live inside a quarter, or nobody on your team can write the method in step 6, that&apos;s past a weekend fix, and it&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in to build the first system, write the method and set up the team that copies it, in New York, London or Dubai. I&apos;ve covered the team itself in <Link href="/blog/how-to-build-your-first-forward-deployed-engineering-team-2026-11-07/">how to build your first forward deployed engineering team</Link>, and the part time route in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h2>What it costs to do it this way</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route through Beyond Elevation</th><th>Price</th><th>Length</th></tr>
          </thead>
          <tbody>
            <tr><td>AI audit</td><td>$3,000 fixed</td><td>Two weeks</td></tr>
            <tr><td>Fractional FDE leader</td><td>From $5,800 a month</td><td>1 to 2 days a week, stop any time</td></tr>
            <tr><td>Fixed project, one function made AI ready</td><td>From $30,000</td><td>8 to 14 weeks</td></tr>
          </tbody>
        </table>
      </div>

      <p>Prices are from beyondelevation.com/fde, read 24 November 2026. A fractional lead for 12 months comes to $69,600, which is below the bottom of both the Dubai band and Palantir&apos;s New York band. That&apos;s the lead who owns discovery and the method, with the offshore build team behind them. For the full salary picture see <Link href="/blog/fde-salary-2026-10-29/">FDE salary</Link>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the part of an offshore build that goes wrong first, the method and the cost case, because I spent two decades answering to boards for whether money spent on teams and systems came back. Now I build it myself. I connect systems that were never built to talk to each other, put AI on the work between them, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on what to build before you hire abroad, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The Palantir band is from its New York listing on Built In. The Fairmarkit band, requirements and quote are from its Dubai posting, and the Google requirements and quote from its Bengaluru posting. Both of those are closed. The India bands, hourly rates and the 2,080 hour basis are from Second Talent&apos;s rate card, updated 14 September 2026. The dirham rate is the Central Bank of the UAE&apos;s published 3.6725 to the dollar. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page. I read all of them on 24 November 2026. The dollar conversions, the $87,360 and $208,000, and the $69,600 are my own arithmetic. The 21 days and 5 days are an example, not client data.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which part of your first system would you trust to a team you&apos;ve never met?</p>

    </PageShell>
  );
}
