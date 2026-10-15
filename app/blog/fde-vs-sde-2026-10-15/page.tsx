import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fde-vs-sde-2026-10-15";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-15";
const MOD = "2026-10-15";
const TITLE = "FDE vs SDE: 9 Differences in Amazon's Own Job Postings";
const DESC =
  "An SDE, a software development engineer, builds and runs software for their own employer. An FDE, a forward deployed engineer, builds production software inside a customer's company and travels to do it. At Amazon, which posts both titles, the base pay band is the same at each level. On 15 October 2026 I read 14 US forward deployed engineer postings and 919 US software development engineer postings on amazon.jobs. All 14 FDE postings mention travel, against 16 of the 919. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript triptych in the spirit of the golden age of Islamic art, gold leaf, lapis and turquoise borders of arabesque and geometric ornament on cream parchment. In the left arch a craftsman sits at his own bench in a palace workshop, fitting brass gears into the palace's great clock by lamplight while other guild craftsmen work behind him. In the right arch the same kind of craftsman kneels in travelling robes inside a merchant's busy counting house, fitting brass gears into the merchant's own scales while the merchant reads his ledger and a camel waits in the street outside. In the narrow centre arch a single balance scale hangs level, with an equal pile of gold coins in each pan.";

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

const SOURCES: { name: string; url: string }[] = [
  { name: "Amazon, Forward Deployed Engineer, AWS Forward Deployed Engineering, Arlington", url: "https://www.amazon.jobs/en/jobs/10576500/forward-deployed-engineer-aws-forward-deployed-engineering" },
  { name: "Amazon, Senior Forward Deployed Engineer, AWS Forward Deployed Engineering, New York", url: "https://www.amazon.jobs/en/jobs/10576484/senior-forward-deployed-engineer-aws-forward-deployed-engineering" },
  { name: "Amazon, Principal Forward Deployed Engineer, AWS Forward Deployed Engineering, Arlington", url: "https://www.amazon.jobs/en/jobs/10521876/principal-forward-deployed-engineer-aws-forward-deployed-engineering" },
  { name: "Amazon, Forward Deployed Engineer, AWS Forward Deployed Engineering, US Government, Arlington", url: "https://www.amazon.jobs/en/jobs/10517550/forward-deployed-engineer-aws-forward-deployed-engineering-us-government" },
  { name: "Amazon, Software Development Engineer II, Hosted Execution (HEX), Seattle", url: "https://www.amazon.jobs/en/jobs/10544701/software-development-engineer-ii-hosted-execution-hex" },
  { name: "Amazon, Senior Software Development Engineer, Fauna, New York", url: "https://www.amazon.jobs/en/jobs/10555499/senior-software-development-engineer-fauna" },
  { name: "Amazon, Sr. Software Development Engineer, AWS Forward Deployed Engineering, New York (June 15 posting)", url: "https://www.amazon.jobs/en/jobs/10449376/sr-software-development-engineer-aws-forward-deployed-engineering" },
  { name: "Amazon, Sr Software Development Engineer, AWS Forward Deployed Engineering, New York (June 26 posting)", url: "https://www.amazon.jobs/en/jobs/10460379/sr-software-development-engineer-aws-forward-deployed-engineering" },
];

const LIST: { name: string; url: string }[] = [
  { name: "Where the work sits: inside a customer vs inside Amazon", url: SOURCES[0].url },
  { name: "Travel: 30 to 50 percent vs almost never", url: SOURCES[1].url },
  { name: "Base pay: the same band at every level", url: SOURCES[4].url },
  { name: "Years of experience: the same ladder", url: SOURCES[0].url },
  { name: "What success is measured by: customer business outcomes vs your own service", url: SOURCES[0].url },
  { name: "On call: workstream production vs a service rotation", url: SOURCES[5].url },
  { name: "What gets built: AI agents and integration vs anything Amazon runs", url: SOURCES[1].url },
  { name: "Who Amazon wants: founders and startup builders", url: SOURCES[2].url },
  { name: "The SDE inside the forward deployed team", url: SOURCES[6].url },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "FDE vs SDE: what is the difference?",
    a: "An SDE, a software development engineer, builds and runs software for their own employer's product. An FDE, a forward deployed engineer, embeds inside a customer's company and builds production software there. Amazon's own FDE posting describes the role as combining the technical rigor of an AWS SDE with the urgency and ownership to deliver measurable customer business outcomes. On 15 October 2026 all 14 of Amazon's US FDE postings mentioned travel, 12 of them at 30 to 50 percent, against 16 of 919 US SDE postings.",
  },
  {
    q: "FDE vs SDE salary: which pays more?",
    a: "At Amazon, neither. The Forward Deployed Engineer II posting carries $143,700 to $194,400 in Arlington, Boston and Seattle and $158,100 to $213,800 in New York. 71 Software Development Engineer II postings in Seattle carry the same $143,700 to $194,400. The Senior Forward Deployed Engineer in New York is $184,900 to $250,200, the same band as 17 Senior Software Development Engineer postings in New York. Both packages add sign-on payments and restricted stock units, per the postings.",
  },
  {
    q: "Is FDE better than SDE?",
    a: "Neither is better. They suit different people. Pick the FDE seat if you want to sit with a customer, learn how their business runs and are happy on the road 30 to 50 percent of the time. Pick the SDE seat if you want to own one service for years, go deep on it and take its on-call rotation. Amazon pays both the same base band at the same level, so the choice is about the work, not the money.",
  },
  {
    q: "What is an SDE at Amazon?",
    a: "SDE is Amazon's title for a software engineer, short for software development engineer, and it runs in levels. On 15 October 2026 Amazon had 919 US postings with Software Development Engineer in the title. Most entry level and SDE II postings asked for 3 or more years of non-internship professional software development, and most senior postings asked for 5 or more. One senior posting calls the senior level SDE 3.",
  },
  {
    q: "Forward deployed engineer vs SDE: do FDEs write code?",
    a: "Yes. Amazon's FDE II posting says FDEs write production-grade software and own delivery of complete AI workstreams from requirements through production deployment, and asks for 3 or more years of professional software development, the same bar as most SDE II postings. The difference is where the code runs: in the customer's systems, not Amazon's.",
  },
];

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
      "about": "FDE vs SDE, forward deployed engineer vs software development engineer, compared from 14 US forward deployed engineer postings and 919 US software development engineer postings on amazon.jobs on 15 October 2026",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": "Amazon" },
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
        "https://www.linkedin.com/in/hayatamin",
      ],
      "description": "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation.",
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      "url": HERO,
      "contentUrl": HERO,
      "width": 1408,
      "height": 768,
      "caption": HERO_ALT,
      "name": "Same purse, two rooms: one craftsman fits the palace clock at his own bench, the other fits the merchant's scales in the merchant's house",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "fde vs sde, sde vs fde, fde vs sde salary, is fde better than sde, forward deployed engineer vs sde, what is sde at amazon, forward deployed engineer vs software development engineer, Amazon, AWS Forward Deployed Engineering, Hayat Amin, Beyond Elevation, New York, Seattle, Arlington",
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#differences`,
      "name": "Nine differences between a forward deployed engineer and a software development engineer in Amazon's own US job postings on 15 October 2026",
      "numberOfItems": LIST.length,
      "itemListElement": LIST.map((l, i) => ({ "@type": "ListItem", "position": i + 1, "name": l.name, "url": l.url })),
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
        { "@type": "ListItem", "position": 3, "name": TITLE, "item": URL },
      ],
    },
  ],
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "FDE vs SDE" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>FDE vs SDE</h1>

      <p className="op-lede">An SDE, a software development engineer, builds and runs software for their own employer. An FDE, a forward deployed engineer, builds production software inside a customer&apos;s company and travels to do it. At Amazon, which posts both titles, the base pay is the same at each level.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now do forward deployed work myself inside other people&apos;s systems. SDE is Amazon&apos;s word for a software engineer, so I went to the one employer that uses both titles. This morning, 15 October 2026, I read every US posting on amazon.jobs titled forward deployed engineer, 14 of them, and 919 US postings titled software development engineer. Here are the 9 differences the postings show, and the one place they don&apos;t differ at all.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Same purse, two rooms. On the left the craftsman fits gears into the palace clock at his own bench. On the right the same craft goes on the road and into the merchant&apos;s scales, with the camel waiting outside. The scale in the middle hangs level, because Amazon pays the two the same.
        </figcaption>
      </figure>

      <h2>Why people type fde vs sde</h2>

      <p>Google completes fde vs sde as its own suggestion, then fde vs sde salary. Type it the other way round and you get sde vs fde, sde vs fde salary and sde or fde. I think most of those searches come from software engineers wondering whether to move across, and from founders who&apos;ve heard the new title and want to know if it&apos;s a real job or a rebrand.</p>

      <p>Amazon answers the rebrand question in its own words. Its Forward Deployed Engineer II posting says the role combines &quot;the technical rigor of an AWS SDE with the urgency and ownership required to deliver measurable customer business outcomes&quot;. The company that made SDE a household title defines the FDE as an SDE who works for a customer. The 9 points below are what that means in practice.</p>

      <h2>The 9 differences, from Amazon&apos;s own postings</h2>

      <h3>1. Where the work sits</h3>

      <p>The FDE II posting in Arlington, Virginia opens with an FDE who &quot;embeds directly inside a strategic enterprise customer&quot; and builds AI production systems alongside the customer&apos;s own engineering team. Compare the Software Development Engineer II posting for Hosted Execution in Seattle. That engineer builds infrastructure for internal Amazon services, the compute behind Stores, Kindle, Alexa, Pharmacy and Payments. One works inside somebody else&apos;s company. The other works inside Amazon on something Amazon owns.</p>

      <h3>2. Travel</h3>

      <p>All 14 US forward deployed engineer postings mention travel. 12 say 30 to 50 percent. The Principal FDE and the senior US Government FDE say up to 25 percent. Of the 919 SDE postings, 16 contain the word travel at all, and 5 of those are a line about Amazon&apos;s products helping you plan travel to exotic places. A handful of data centre roles ask you to visit network sites. If you don&apos;t want to be away from home a third of the month or more, this point decides it. I wrote more on that in <Link href="/blog/do-forward-deployed-engineers-travel-2026-09-17/">do forward deployed engineers travel</Link>.</p>

      <h3>3. Base pay, where there is no difference</h3>

      <p>This is the surprise. Amazon pays the two titles the same base band at the same level. The FDE II posting is $143,700 to $194,400 in Arlington, Boston and Seattle and $158,100 to $213,800 in New York. 71 SDE II postings in Seattle carry the same $143,700 to $194,400. The senior FDE in New York is $184,900 to $250,200, the same band as 17 senior SDE postings in New York, including the Fauna robotics team. The Principal FDE goes to $220,100 to $297,700 in New York. Both sets of postings say the package adds sign-on payments and restricted stock units on top.</p>

      <h3>4. Years of experience</h3>

      <p>Same ladder again. The FDE II asks for 3 or more years of non-internship professional software development, and 119 of 132 SDE II postings ask for the same 3. The senior FDE asks for 5 or more, as do 138 of 157 senior SDE postings. Amazon even numbers the FDE the way it numbers the SDE: Forward Deployed Engineer II, and SDE 3 for the senior grade in one of its own postings.</p>

      <h3>5. What success is measured by</h3>

      <p>All 14 FDE postings use the phrase business outcome, against 9 of 919 SDE postings. All 14 ask for experience explaining technical ideas to non-technical audiences, against 6 of 919. An SDE&apos;s posting talks about the service, its scale, its latency and its cost. An FDE&apos;s posting talks about the customer&apos;s processes, their constraints and what changes in their business. You&apos;re judged on whether the customer&apos;s week got better, which is the part I find most interesting.</p>

      <h3>6. On call</h3>

      <p>168 of the 919 SDE postings mention on-call, like the Hosted Execution team&apos;s on-call rotation or the Fauna senior posting that asks you to join the rotation for the services you own. None of the 14 FDE postings uses the word. The FDE still owns production. The FDE II posting says &quot;own production for your workstream&quot; and troubleshoot incidents across models, distributed systems and application services. The difference is that it&apos;s the customer&apos;s production, for as long as the engagement runs.</p>

      <h3>7. What gets built</h3>

      <p>All 14 FDE postings mention AI agents or agentic work, against 223 of 919 SDE postings. The FDE II lists what it builds: retrieval pipelines, workflow automation, API orchestration layers and data integration, joined to foundation models and the customer&apos;s existing applications. An SDE at Amazon builds whatever the team owns, which might be search ranking, storage, robotics telemetry or advertising. The FDE&apos;s job is narrower in subject and wider in systems. It&apos;s AI work that has to plug into a stack nobody at Amazon designed.</p>

      <h3>8. Who Amazon wants in the seat</h3>

      <p>13 of 14 FDE postings list a background &quot;as a founder, engineering lead, or startup builder with high ownership and urgency&quot; as a preferred qualification. One SDE posting of 919 mentions founders at all. On the other side, 868 of 919 SDE postings mention code review, against 4 of 14 FDE postings. Amazon is hiring the FDE for ownership and judgement in a room it doesn&apos;t control, and the SDE for engineering discipline inside a team that does.</p>

      <h3>9. The SDE inside the forward deployed team</h3>

      <p>AWS Forward Deployed Engineering also hires SDEs, and those postings draw the line for you. A Sr. Software Development Engineer posting in New York says &quot;You&apos;ll build, not consult&quot;, calls the team a product engineering org inside Professional Services and says &quot;This is not billable-hours consulting&quot;. That engineer builds the agent platform Amazon&apos;s own consultants use for cloud migrations, travels about 5 percent and writes production code daily. A second senior SDE posting in the same organisation travels about 20 percent. Both pay $184,900 to $250,200 in New York, the senior FDE band. Inside one team, the SDE builds the tools and the FDE takes them into the customer.</p>

      <h2>Which one should you pick</h2>

      <p>If you&apos;re an engineer choosing, ask two things. How many nights a month do you want in hotels, and do you want to own one service for years or one customer outcome for months? The money won&apos;t decide it at Amazon. If you&apos;re hiring, I&apos;d say the opposite of what most job boards imply. You don&apos;t need a better SDE. Amazon&apos;s own definition is an SDE pointed at a customer&apos;s business, and the hard part is the customer half. My longer comparison of the two, for founders, is on my firm&apos;s site at <a href="https://beyondelevation.com/insights/forward-deployed-engineer-vs-software-engineer" {...ext}>forward deployed engineer vs software engineer</a>, and <Link href="/blog/do-forward-deployed-engineers-code-2026-09-16/">do forward deployed engineers code</Link> covers how much of the week is code.</p>

      <h2>What this means if you run a company</h2>

      <p>If you run a company of 20 to 500 people, you won&apos;t get an AWS FDE. Amazon sends them to strategic enterprise customers. What you can have is the same shape of work: somebody who learns how your week runs, connects the finance system, the CRM and the spreadsheets that don&apos;t talk to each other, and builds against your live data until it runs without them. That&apos;s what I do through Beyond Elevation, on a fixed scope, inside your own systems, set out at <a href="https://meethayat.com/services/fde" {...ext}>meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems could carry. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way. I read a job posting the way I read a set of accounts: the band, the years and the travel line tell you what a company thinks the job is.</p>

      <p>I&apos;m exceptional at the forward deployed half of this comparison, because I do it from the finance side. I connect the systems in a company that were never built to talk to each other, I turn what comes out of them into a live number a chief executive can run the week on instead of a month end pack, and I value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" {...ext}>Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on what to automate first, I do a free audit call, at <a href="https://beyondelevation.com/call/hayat" {...ext}>beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>Every count comes from Amazon&apos;s own job search at amazon.jobs, read on 15 October 2026. A search for forward deployed engineer returned 54 postings worldwide. 19 are titled forward deployed engineer at some level, leaving out managers, security engineers, product managers and SDEs, and 14 of those are in the United States. A search for software development engineer filtered to the United States returned 1,176 postings, 919 with software development engineer in the title and nothing forward deployed in it. Word counts are plain text matches on each posting&apos;s description and qualifications, so a posting that says travel once counts the same as one that says it five times. Bands are the base salary ranges each posting publishes by city. A band is a range across a level, not an offer. The autocomplete phrases were pulled from Google the same morning.</p>

      <p>The postings quoted above:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}><a href={s.url} {...ext}>{s.name}</a></li>
        ))}
      </ul>

      <p>Postings come down and bands get edited, so if you&apos;re reading this weeks later, open the links and recount rather than trusting my tally.</p>

    </PageShell>
  );
}
