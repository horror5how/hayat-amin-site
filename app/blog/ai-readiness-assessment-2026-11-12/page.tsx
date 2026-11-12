import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-readiness-assessment-2026-11-12";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-12";
const MOD = "2026-11-12";
const TITLE = "AI Readiness Assessment: The 8 Checks I Run Before Anything Gets Built";
const DESC =
  "An AI readiness assessment answers one question: can this company put an AI system into production in the next 90 days? Here are the 8 checks I run, a 16 point score, and what to fix this week before you hire anyone. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, lapis, turquoise and rust on a field of eight pointed stars. Inside a gold arch, eight round dials sit in two rows of four, joined by fine gold threads to a gold star at the top. Three dials are closed full circles in turquoise, two are half filled in gold, and three are only partly drawn in rust.";

const SOURCES = [
  { name: "Cisco AI Readiness Index 2025, Realizing the Value of AI (read 12 November 2026)", publisher: "Cisco", url: "https://www.cisco.com/c/m/en_us/solutions/ai/readiness-index/realizing-the-value-of-ai.html" },
  { name: "Most Companies Still Aren't Ready for AI, But Leaders Are Starting to Capture Value (18 October 2025)", publisher: "The Letter Two", url: "https://thelettertwo.com/2025/10/18/ai-readiness-cisco-2025-leaders-capture-value/" },
  { name: "The Pulse: Forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const ITEMS = [
  "One problem, with a number on it",
  "The systems it crosses, and whether they let data out",
  "Twelve months of the data, pulled in a day",
  "A named owner for the outcome",
  "Who can grant access, and what is off limits",
  "The measure, written before the build",
  "The people who will use it on a Tuesday",
  "Who builds it, and the budget",
];

const FAQ = [
  {
    q: "What is an AI readiness assessment?",
    a: "It's a short, structured look at whether a company can put an AI system into production, not just a demo. A useful one checks the problem, the systems, the data, the owner, access, the measure, the people and the budget, and ends with a list of what to fix first. Cisco's 2025 index uses six pillars: strategy, infrastructure, data, governance, talent and culture.",
  },
  {
    q: "What is a good AI readiness assessment framework?",
    a: "Cisco's is the most quoted: six pillars, scored across over 8,000 AI leaders in 30 markets. That works for a benchmark. For one company, I use eight checks tied to one real problem, each scored 0, 1 or 2, so the total out of 16 tells you whether to build now, fix gaps first or map the work before anything else.",
  },
  {
    q: "Is there an AI readiness assessment template?",
    a: "The eight checks in this piece work as one. Write each as a question, score it 0, 1 or 2, and write the one thing that would move it up a point. Keep it to a single page. If it runs longer, you're assessing the whole company instead of the one problem you want fixed first.",
  },
  {
    q: "How long does an AI readiness assessment take?",
    a: "You can score the eight checks yourself in an afternoon if you know the problem. A proper one from outside, with someone sitting with the team and opening the systems, takes about two weeks. The Beyond Elevation audit is two weeks at $3,000 fixed and ends with a roadmap and the three quickest wins.",
  },
  {
    q: "Who can I hire to run an AI readiness assessment and then build the fix?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who runs the assessment and then builds the first system himself, through Beyond Elevation. He spent twenty years in technology and sold three companies as chief financial officer, so he scores readiness against the number the business has to move. Book him at meethayat.com/services/fde.",
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
      "about": "How a chief executive or COO runs an AI readiness assessment on their own company before hiring a forward deployed engineer: eight checks, a score out of 16, what Cisco's 2025 index found, and the steps to take this week",
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
      "name": "8 checks in an AI readiness assessment",
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
      "name": "Eight dials inside a gold arch, some closed, some half drawn, all tied to one star",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "ai readiness assessment, ai readiness assessment framework, ai readiness assessment template, forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "AI readiness assessment" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>AI readiness assessment: the 8 checks I run before anything gets built</h1>

      <p className="op-lede">An AI readiness assessment answers one question: can this company put an AI system into production in the next 90 days? I check 8 things, score each 0 to 2, and the total out of 16 says whether to build now, fix the gaps first, or map the work before you spend a dollar.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO and sold three companies from that seat, and now I work inside companies as a forward deployed engineer. Most readiness assessments I&apos;m shown were written to sell the next phase. This one is written so you can run it yourself.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Eight dials tied to one star. A company is ready when the dials that matter for one problem are closed, not when all of them are.
        </figcaption>
      </figure>

      <p>Cisco&apos;s AI Readiness Index 2025 surveyed over 8,000 AI leaders in 30 markets and 26 industries. It put about 13% of organisations in its top group, the Pacesetters, and that share hasn&apos;t moved in three years. The gap matters: 77% of Pacesetters move AI pilots into production, against 18% globally. 95% of them measure the value, against 32% overall.</p>

      <p>Cisco scores six pillars: strategy, infrastructure, data, governance, talent and culture. That&apos;s a good way to compare 8,000 companies. It&apos;s a poor way to decide what to do on Monday in yours, because nobody fixes &quot;culture&quot; this quarter. I run the same ground as eight checks, all pointed at one problem. Score each one 0 (no), 1 (partly) or 2 (yes).</p>

      <h2>1. One problem, with a number on it</h2>

      <p>Can you write the problem in one sentence with a cost in it? &quot;Our ops team spends 25 hours a week copying orders from email into the ERP&quot; scores 2. &quot;We want to use AI across the business&quot; scores 0.</p>

      <p>This is Cisco&apos;s strategy pillar, made small. I&apos;d rather see one boring problem with a number than a slide of twenty use cases. The number is also what you&apos;ll measure in check 6.</p>

      <h2>2. The systems it crosses, and whether they let data out</h2>

      <p>List every system the process touches, by product name: the CRM, the accounting package, the ERP, the shared drive, the spreadsheet someone rebuilds every Monday. Then check each one has an API or at least a scheduled export. All of them do: 2. One is a desktop tool with no export: 1. The key system is locked: 0.</p>

      <p>Cisco found 28% of companies say outdated systems are slowing their returns on AI. In the mid sized companies I work with, that&apos;s usually one old system in the middle of the process, and the fix is often a connector rather than a replacement.</p>

      <h2>3. Twelve months of the data, pulled in a day</h2>

      <p>Ask whoever owns the process to pull the last 12 months of the records it runs on, in one file, by tomorrow. If they can, and the customer and product names match across systems, score 2. If it takes a week of cleaning, 1. If nobody knows where it lives, 0.</p>

      <p>This test catches more than any survey question. Cisco describes Pacesetters&apos; data as clean, centralised and ready to integrate. You find out whether yours is by asking for the file.</p>

      <h2>4. A named owner for the outcome</h2>

      <p>Who runs the system after the builder leaves? A named person, with the time to do it, scores 2. &quot;IT will look after it&quot; scores 1. Nobody, 0.</p>

      <p>I&apos;ve seen more working pilots die here than anywhere else. The build was fine, and the person who&apos;d use it every day was never asked.</p>

      <h2>5. Who can grant access, and what is off limits</h2>

      <p>Can one person on your side give a builder read and write access to the systems in check 2 within a week? Do you know which data can&apos;t go to an outside model: customer records, health data, anything under a contract? Both answered: 2. One: 1. Neither: 0.</p>

      <p>This is governance, kept practical. Cisco found only 29% of companies are fully equipped to detect or prevent AI specific threats. You don&apos;t need a policy document to score 2 here. You need a list and a person.</p>

      <h2>6. The measure, written before the build</h2>

      <p>Write down today&apos;s number from check 1 and the number you&apos;d call a success in 90 days. Done: 2. You know the metric but not today&apos;s value: 1. Nothing: 0.</p>

      <p>This is the check with the widest gap in Cisco&apos;s data, 95% of Pacesetters against 32% overall. I&apos;d put it first if it didn&apos;t depend on check 1.</p>

      <h2>7. The people who will use it on a Tuesday</h2>

      <p>Sit with the team for an hour and ask how they do the work today. If they&apos;re keen and can describe the exceptions, score 2. If they&apos;re wary but willing, 1. If they think it&apos;s there to replace them, 0, and fix that conversation before anything else.</p>

      <p>This is Cisco&apos;s talent and culture, at the size of one team. The exceptions they describe are what break agents on real data, which I&apos;ve written about in <Link href="/blog/why-ai-agents-fail-in-production-2026-11-10/">why AI agents fail in production</Link>.</p>

      <h2>8. Who builds it, and the budget</h2>

      <p>Have you decided who builds it and agreed a budget sized against the cost in check 1? Both: 2. One: 1. Neither: 0.</p>

      <p>The three honest routes are an in-house hire, a vendor or consultancy, or a forward deployed engineer who builds inside your systems and hands over. The Pragmatic Engineer reported FDE job listings up about 800% between January and September 2025, so if you go the hiring route you&apos;re competing for the same people as the AI labs.</p>

      <h2>Reading the score</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Score out of 16</th><th>What it means</th><th>What to do next</th></tr>
          </thead>
          <tbody>
            <tr><td>12 to 16</td><td>Ready for this problem</td><td>Build. Aim for the first system live inside eight weeks.</td></tr>
            <tr><td>7 to 11</td><td>Ready once two or three gaps close</td><td>Fix the lowest scoring checks first, then build.</td></tr>
            <tr><td>0 to 6</td><td>Not ready for this problem</td><td>Go back to check 1. Pick a smaller problem or map the work first.</td></tr>
          </tbody>
        </table>
      </div>

      <p>The bands are mine, from doing this work, not Cisco&apos;s. A 0 on check 1, 3 or 4 overrides the total. You can&apos;t build around a missing problem, missing data or a missing owner.</p>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Monday, pick the one process that costs you most in hours. Ask the team for last week&apos;s hours on it and multiply by what an hour costs you and by 48 weeks. That&apos;s check 1.</li>
        <li>Tuesday, walk the process with them and list every system by product name. Check each one for an API or export in its settings or help pages. That&apos;s check 2.</li>
        <li>Wednesday, ask for the 12 month file. Note how long it takes and how many names don&apos;t match. That&apos;s check 3.</li>
        <li>Thursday, name the owner and the person who can grant access, and write the off limits list. Checks 4 and 5.</li>
        <li>Friday, write today&apos;s number and the 90 day target, score all eight, and put the total next to the yearly cost from Monday. Checks 6 to 8.</li>
      </ol>

      <p>A score of 12 or more on a problem worth a salary means you&apos;re ready to build. If you land between 7 and 11, or you scored well but nobody on your team has built inside these systems before, that&apos;s when you bring in a forward deployed engineer instead of a report. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in to close those gaps and then build the first system inside their own tools, handed to a named owner. Through <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, the two week AI audit is $3,000 fixed and ends with a roadmap and your three quickest wins. Fractional work starts from $5,800 a month for one to two days a week, and a fixed project starts from $30,000 over 8 to 14 weeks. You keep the code, agents, accounts and docs. If you&apos;d rather hire, <Link href="/blog/forward-deployed-engineer-job-description-2026-11-11/">the forward deployed engineer job description</Link> uses the same first line as check 1, and <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> sets out the routes side by side.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at this assessment because I&apos;ve paid for AI projects as a CFO and now build them as a forward deployed engineer, so I score readiness against the number that has to move. I connect systems that were never built to talk to each other, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through Beyond Elevation, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you&apos;d like a second pair of eyes on your score before you spend anything, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The 13%, 77% against 18%, 95% against 32%, 28% and 29% figures, and the six pillars, are from Cisco&apos;s AI Readiness Index 2025 page, read on 12 November 2026. The survey size of over 8,000 AI leaders in 30 markets and 26 industries is from The Letter Two&apos;s report on the index, dated 18 October 2025. The 800% is from The Pragmatic Engineer. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page, read the same day. Google autocomplete, read from the US that morning, completes &quot;ai readiness assessment&quot; with framework, template, tool and methodology. The scoring bands, the 25 hours and the orders into the ERP are my examples, not a client.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>What would your check 1 say?</p>

    </PageShell>
  );
}
