import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fde-vs-ai-architect-2026-11-05";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-05";
const MOD = "2026-11-05";
const TITLE = "FDE vs AI Architect: 7 Differences That Decide Which One You Hire";
const DESC =
  "An AI architect designs how your AI systems fit together and sets the standards. A forward deployed engineer goes inside your company and builds the first system until it runs on your real data. If nothing is in production yet, hire the FDE first. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "Two pointed arches side by side on a field of lapis eight pointed stars, framed in gold. In the left arch a gold geometric construction drawing, compass circles and a star plan with the dashed outline of an arcade beneath it, and a pair of dividers above. In the right arch the same arcade built, cream columns and turquoise arches under a tiled turquoise dome. A slender column topped with a gold star stands between them.";

const SOURCES = [
  { name: "Forward Deployed Engineer vs ML Engineer vs Solutions Architect: 2026 Role Comparison", publisher: "Perspective AI", url: "https://getperspective.ai/blog/forward-deployed-engineer-vs-ml-engineer-vs-solutions-architect-2026" },
  { name: "AI Architect Job Description, Responsibilities and Career Outlook 2026", publisher: "Interview Kickstart", url: "https://interviewkickstart.com/job-description/ai-architect" },
  { name: "The Pulse: forward deployed engineering", publisher: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering" },
  { name: "Hayat Amin, AI Operations (Forward Deployed Engineer) service and twelve week timeline", publisher: "meethayat.com", url: "https://meethayat.com/services/fde" },
];

const FAQ = [
  {
    q: "AI architect vs FDE: what is the difference?",
    a: "An AI architect designs the system on paper: which models, how the pieces connect, how it scales and what standards everyone builds to. A forward deployed engineer builds the system inside your company and stays until it runs on your real data. The architect hands you a blueprint. The FDE hands you a working system and the name of the person who owns it.",
  },
  {
    q: "What is an AI architect?",
    a: "A senior technical role that designs AI systems before they're built. Interview Kickstart lists the job as designing AI architectures, selecting machine learning models, overseeing implementation, evaluating new technology, ensuring scalability, writing architectural blueprints, and mentoring the teams who build. It asks for 5 to 10 or more years of experience in machine learning and AI.",
  },
  {
    q: "Should I hire an AI architect or a forward deployed engineer first?",
    a: "Count the AI systems you have running in production today, not in pilot. If the answer is zero, hire the forward deployed engineer first, because an architect gives you a better plan for something nobody has built. If you have three or more running and an engineering team building more, an architect stops them drifting apart.",
  },
  {
    q: "How much does it cost to hire an AI architect?",
    a: "Interview Kickstart puts US pay for a senior AI architect at $200,000 to $280,000 or more, with the top of the market above $300,000. Perspective AI estimates forward deployed engineer total pay at $250,000 to $400,000 at Series A and B companies. Both are full time salaries. A fractional engineer is the cheaper way to test the work first.",
  },
  {
    q: "Who can I hire to get our AI out of the pilot stage without building a whole team?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who builds the first system inside your company himself, puts it into production by week 4 and hands it to your team by week 12. He spent twenty years in technology and sold three companies as chief financial officer, so he starts from the number the chief executive needs to move. Book him at meethayat.com/services/fde.",
  },
  {
    q: "What is AI architecture?",
    a: "The design of how an AI system fits together: where the data comes from, which models do what, how the outputs reach the people and systems that use them, how it's monitored and how it scales. It's the drawing. Someone still has to build it into your CRM, your accounting system and the spreadsheets your team runs on.",
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
      "about": "FDE vs AI architect for the chief executive or chief operating officer deciding which to hire: seven differences in output, code, time, ownership, timing, cost and failure, and the steps to take this week",
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
      "name": "7 differences between a forward deployed engineer and an AI architect",
      "numberOfItems": 7,
      "itemListElement": [
        "What you have at the end",
        "Who writes the production code",
        "Where their week goes",
        "What they own",
        "When in your AI programme they fit",
        "Experience and cost",
        "How each one fails",
      ].map((name, i) => ({ "@type": "ListItem", "position": i + 1, "name": name })),
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
      "name": "The plan and the building",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "fde vs ai architect, ai architect vs fde, what is an ai architect, hire ai architect, what is ai architecture, forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "FDE vs AI architect" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>FDE vs AI architect</h1>

      <p className="op-lede">An AI architect designs how your AI systems fit together and sets the standards. A forward deployed engineer, or FDE, goes inside your company and builds the first system until it runs on your real data. If nothing is in production yet, hire the FDE first.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years in technology, sold three companies as a chief financial officer, and now work as a forward deployed engineer, building the AI operations inside companies myself. Below are the 7 differences I&apos;d want a chief executive to see before signing either offer letter, and what to do this week whichever way you go.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          On the left the plan, drawn in gold. On the right the same arcade, built and standing.
        </figcaption>
      </figure>

      <h2>Why the two titles get confused</h2>

      <p>The FDE title went mainstream fast. The Pragmatic Engineer counted forward deployed engineer listings up about 800% between January and September 2025, and OpenAI launched a $4 billion subsidiary, The Deployment Company, in May 2026, built on the role. Ask a recruiter for &quot;someone to own AI&quot; and you&apos;ll get AI architect CVs in the same inbox. Google now completes both &quot;fde vs ai architect&quot; and &quot;ai architect vs fde&quot;, so plenty of people are stuck on the same choice.</p>

      <p>One honest caveat. Nobody owns a settled definition of AI architect. I read Interview Kickstart&apos;s 2026 job description, which matches the postings I&apos;ve seen, and the closest published data on how the two roles spend their time is Perspective AI&apos;s comparison of forward deployed engineers and solutions architects. Where I quote that piece about solutions architects, I say so.</p>

      <h2>The 7 differences between an FDE and an AI architect</h2>

      <h3>1. What you have at the end</h3>

      <p>An AI architect hands you a design. Interview Kickstart lists &quot;creating architectural blueprints&quot; and &quot;selecting machine learning models&quot; among the core duties. A forward deployed engineer hands you a system that&apos;s running. Perspective AI&apos;s table puts it in one line each: the FDE&apos;s output is &quot;a live, in-production deployment owned by a named customer&quot;, the solutions architect&apos;s is a signed contract and &quot;a reference architecture diagram&quot;. Inside your own company, the named customer is your operations lead.</p>

      <h3>2. Who writes the production code</h3>

      <p>The FDE does. Perspective AI&apos;s survey of 1,500 forward deployed engineers puts the median at 30% of the week on &quot;deployment-specific code, glue, agents&quot;. The Interview Kickstart description has the architect &quot;overseeing implementation&quot; and never says they write it. If you hire an architect, you also need people to build what they draw.</p>

      <h3>3. Where their week goes</h3>

      <p>The same survey puts the FDE at 60% customer facing, 30% building and 10% internal. When the FDE works for you, customer facing means sitting beside the people doing the work: the person retyping orders into the ERP, the controller closing the month. The architect&apos;s week is design reviews, evaluating new technology and mentoring the teams who build. Both are useful. Only one of them sits next to your operations lead.</p>

      <h3>4. What they own</h3>

      <p>The architect owns the design and whether it scales. The FDE owns the outcome. I think of it as one number. If I can&apos;t tell you by week 4 which number moved, whether that&apos;s hours of retyping or days to close the month, I haven&apos;t done the job, however good the design looked.</p>

      <h3>5. When in your AI programme they fit</h3>

      <p>An architect is worth most when you already have systems to govern and engineers to build to a standard. Before that, you get a better plan for something nobody has built. Perspective AI says it about solutions architects: &quot;SAs scale a known motion; FDEs build the motion.&quot; The same logic carries over. Hire the person who builds the first working thing, then the person who keeps the tenth consistent with the first.</p>

      <h3>6. Experience and cost</h3>

      <p>Interview Kickstart asks for 5 to 10 or more years in machine learning and AI, and puts US pay for a senior AI architect at $200,000 to $280,000 or more, with the top of the market above $300,000. Perspective AI estimates FDE total pay at $250,000 to $400,000 at Series A and B companies, and $350,000 to $750,000 at the top AI labs. Those are their estimates, not a survey. Both are full time salaries. A fractional FDE, one or two days a week, is a cheaper way to test the work before committing to one. I wrote that comparison up in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h3>7. How each one fails</h3>

      <p>An architect fails quietly. The design gets approved, the slide goes to the board, and 6 months later nothing is in production. An FDE fails differently: the system works, but only the person who built it can fix it. That&apos;s why I hand over in week 12 to a named owner on your team, with the access and the notes they need. Ask any candidate, architect or engineer, how their last project ended and who owns it now.</p>

      <h2>Which one to hire</h2>

      <p>My rule is simple. Zero AI systems in production: hire the FDE. Three or more in production with an engineering team building more: hire the architect, because the risk has moved from &quot;nothing works&quot; to &quot;everything works differently&quot;. In between, start with the FDE and ask them to write the standards down as part of the handover. I covered the wider choice in <Link href="/blog/hire-forward-deployed-engineer-2026-11-04/">hire a forward deployed engineer</Link> and the build versus advise question in <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">is a forward deployed engineer just a consultant</Link>.</p>

      <h2>What to do this week, before you hire either</h2>

      <ol>
        <li>Count the AI systems running in production today, used every week by real staff on real data. Pilots and demos don&apos;t count. Write the number down.</li>
        <li>Pick the one process that eats the most hours. Write five lines: who does it, which systems it touches, how many hours a week it takes, what goes wrong. If two people spend 6 hours a week retyping orders, that&apos;s 12 hours a week, about 600 a year.</li>
        <li>Check what you already pay for. Many CRMs, accounting systems and ERPs ship native integrations. Look in the integrations page of each system before you hire anyone to build one.</li>
        <li>Export 50 to 100 real records from that process, with anything personal removed. Whoever you hire works on this, not a toy example.</li>
        <li>Name the owner on your team now. If nobody can own the system after it&apos;s built, neither hire will stick.</li>
        <li>Ask every candidate to show one system still running in someone else&apos;s company. If they show a diagram, you&apos;re talking to an architect, whatever the CV says.</li>
        <li>Apply the rule above. Zero in production, FDE. Three or more and a team, architect.</li>
      </ol>

      <p>If step 2 shows a process costing 3 hours a week, don&apos;t hire anyone. Turn on the integration you already pay for. If it shows a pilot that never left the demo, three systems that won&apos;t join, or a number you can&apos;t see until month end, the job is bigger than a weekend fix, and that&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in to do exactly this work: week 1 mapping the money and the work, week 4 the first system in production, week 8 widening it across finance, operations and sales, week 12 handing it to your team. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at forward deployed work because the finance seat taught me where a company&apos;s week breaks before anyone draws an architecture. I connect the systems that were never built to talk to each other, put a live dashboard in front of the chief executive instead of a month end pack, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, and you can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on whether you need the builder or the designer first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The FDE deliverable, the 60, 30 and 10 split from a survey of 1,500 forward deployed engineers, the solutions architect line and the FDE pay estimates are from Perspective AI&apos;s 2026 role comparison. The AI architect duties, the 5 to 10 years and the US pay bands are from Interview Kickstart&apos;s 2026 AI architect job description. Both were read on 5 November 2026. The 800% listings figure is from The Pragmatic Engineer, and The Deployment Company launch is from my August 2026 research on FDE demand. The week 1, 4, 8 and 12 milestones are from my own service page, read the same day. Google autocomplete, read from the US this morning, completes &quot;fde vs ai architect&quot;, &quot;ai architect vs fde&quot; and &quot;hire ai architect&quot;. The hours a year are my own arithmetic.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>How many AI systems does your company have in production today?</p>

    </PageShell>
  );
}
