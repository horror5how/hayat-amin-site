import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "fde-vs-agentic-ai-2026-10-14";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-14";
const MOD = "2026-10-14";
const TITLE = "FDE vs Agentic AI: One Is a Person, the Other Is What the Person Builds";
const DESC =
  "An FDE is a person, a forward deployed engineer who works inside your company and writes the software. Agentic AI is software, a model that plans and takes actions with little human input. On 14 October 2026 OpenAI, Anthropic and Cresta were all hiring FDEs to build agents for customers. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated miniature in the spirit of the golden age of Islamic art, framed in gold arabesque on lapis and turquoise. In a tiled courtyard under a starry sky, a bearded craftsman in a white turban kneels and lays blue and gold tiles to make a winding path. A small golden clockwork figure, holding a key and a bound ledger, walks along the finished part of the path on its own, tied to the craftsman's hand by a fine gold thread. A domed pavilion and an ornate gate stand behind them.";

const SOURCES = [
  { name: "What is agentic AI? (last updated 16 September 2026)", publisher: "Google Cloud", url: "https://cloud.google.com/discover/what-is-agentic-ai" },
  { name: "Building effective agents (19 December 2024)", publisher: "Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents" },
  { name: "Over 40 percent of Agentic AI projects could face the axe by end of 2027: Gartner (27 June 2025)", publisher: "W.Media", url: "https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/" },
  { name: "OpenAI, Forward Deployed Engineer (FDE), Healthcare, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/2a931dd1-5002-47d1-a367-ec1a19ef7e9e" },
  { name: "OpenAI, Forward Deployed Software Engineer, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e" },
  { name: "Anthropic, Forward Deployed Engineer, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Cresta, Senior Forward Deployed Engineer (AI Agent), Canada remote", publisher: "Cresta", url: "https://job-boards.greenhouse.io/cresta/jobs/4595480008" },
];

const FAQ = [
  {
    q: "FDE vs agentic AI: what is the difference?",
    a: "An FDE, a forward deployed engineer, is a person who works inside a customer's company and builds software on its real systems. Agentic AI is a kind of software that, in Google Cloud's words, can set goals, plan and execute tasks with minimal human intervention. They aren't alternatives. In 2026 the companies that sell agentic AI, OpenAI, Anthropic and Cresta among them, hire FDEs to build and connect it.",
  },
  {
    q: "What is a forward deployed engineer (agentic AI)?",
    a: "It's a forward deployed engineer whose job is building AI agents for customers. Cresta's Senior Forward Deployed Engineer (AI Agent) posting asks the person to develop, configure, deploy and optimise AI agents and to build integrations with APIs, databases and CRMs. Three of OpenAI's 26 live FDE postings on 14 October 2026 name agentic systems in the job.",
  },
  {
    q: "What is agentic FDE?",
    a: "It's shorthand for the same thing, a forward deployed engineer who builds agents. The work is the usual FDE work, embedded with one customer, on that customer's systems, with an agent as the thing being shipped. Anthropic's London FDE posting lists MCP servers, sub-agents and agent skills as the artefacts its FDEs deliver.",
  },
  {
    q: "Forward deployed engineer AI agent: will agents replace FDEs?",
    a: "Not on the evidence in the job feeds. The companies that sell the agents are the ones hiring the most FDEs. OpenAI had 26 FDE titles live on 14 October 2026 and its New York healthcare FDE pays $185,000 to $300,000 plus equity. Anthropic's own guidance warns that agents bring higher costs and the potential for compounding errors, which is the gap a person on site closes.",
  },
  {
    q: "What is agentic AI?",
    a: "Google Cloud defines it as an advanced form of artificial intelligence focused on autonomous decision making and action, which can set goals, plan and execute tasks with minimal human intervention. Anthropic draws a narrower line. Workflows run models and tools through predefined code paths, and agents are systems where the model directs its own process and tool use.",
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
      "about": "FDE vs agentic AI, the forward deployed engineer compared with agentic AI software, from the definitions published by Google Cloud and Anthropic, Gartner's 2025 forecast and the live FDE job postings at OpenAI, Anthropic and Cresta on 14 October 2026",
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
      "name": "The craftsman lays the path and holds the thread, the golden automaton walks it on its own",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "fde vs agentic ai, forward deployed engineer agentic ai, agentic fde, forward deployed engineer ai agent, agentic ai, ai agents, forward deployed engineer, OpenAI, Anthropic, Cresta, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "FDE vs agentic AI" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>FDE vs agentic AI</h1>

      <p className="op-lede">An FDE is a person, a forward deployed engineer who works inside your company and writes the software. Agentic AI is software, a model that plans and takes actions with little human input. In 2026 the companies that sell agentic AI are hiring FDEs to build it.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer and sold three companies in that seat, and I now build agents inside companies myself as a forward deployed engineer, so I sit on both sides of this search. This morning, 14 October 2026, I typed fde vs agentic ai into Google from the US and it completed as a phrase of its own. So did forward deployed engineer (agentic ai), which is now a job title, and agentic fde. The search reads as if the two were rival purchases. They aren&apos;t, and treating them that way is how a company ends up paying for an agent nobody can run.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The craftsman kneels and lays the path one tile at a time. The golden automaton walks the finished part on its own, still tied to his hand by a gold thread.
        </figcaption>
      </figure>

      <h2>The two definitions</h2>

      <p>Google Cloud&apos;s page on agentic AI, last updated on 16 September 2026, says it&apos;s focused on autonomous decision making and action, and that it can set goals, plan, and execute tasks with minimal human intervention. Anthropic drew a tighter line in December 2024. A workflow is a system where models and tools run through predefined code paths. An agent is a system where the model directs its own process and decides which tools to use.</p>

      <p>A forward deployed engineer is a job. The title started at Palantir, and it means an engineer who sits with one customer and builds on that customer&apos;s real systems until the thing works. FDE job listings grew by about 800% between January and September 2025. One of the two words names a worker. The other names what that worker increasingly ships.</p>

      <h2>What the FDE job postings say they build</h2>

      <p>I read the live job feeds of three companies that sell agents this morning. OpenAI had 808 open roles and 26 with forward deployed in the title. Its three healthcare FDE postings, in Seattle, New York and San Francisco, ask the engineer to design and implement production AI applications and agentic systems that integrate with electronic health records, claims systems and operational tools. The New York one pays $185,000 to $300,000 plus equity.</p>

      <p>Anthropic had 647 open roles and 5 FDE titles. The London posting says its FDEs deliver MCP servers, sub-agents and agent skills that will be used in production workflows. Cresta, which builds AI agents on its own platform, is hiring a Senior Forward Deployed Engineer (AI Agent), remote in Canada, to build AI agent integrations with external systems, APIs, databases and CRMs among them. It asks for 3 or more years in software or consulting, plus Python and Golang.</p>

      <p>If agentic AI were about to replace the FDE, these three would be the first to stop hiring them. They are the ones hiring. I covered the Anthropic side in more detail in <Link href="/blog/anthropic-forward-deployed-engineer-2026-10-12/">what an Anthropic forward deployed engineer does</Link>.</p>

      <h2>Why an agent doesn&apos;t deploy itself</h2>

      <p>The vendors say it plainly. Anthropic&apos;s guidance on building agents says the autonomous nature of agents means higher costs and the potential for compounding errors. It tells builders to put as much effort into the agent-computer interface, the tools and their documentation, as they would into a human one. It also says the right answer might be not building agentic systems at all.</p>

      <p>Gartner put a number on the failure in June 2025. It forecast that more than 40 percent of agentic AI projects could be cancelled by the end of 2027, for escalating costs, unclear business value or inadequate risk controls. It also said only about 130 of the thousands of agentic AI vendors are real, and called the rest agent washing, old chatbots and automation tools with a new label.</p>

      <p>That&apos;s the same charge Hacker News makes about my own job title, that the FDE is a consultant rebranded. I answered it in <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">is a forward deployed engineer just a consultant</Link>. From the finance chair, the cancelled projects I&apos;d expect are the ones where nobody wrote down, before the agent ran, what one correct answer was worth and what one wrong one cost. Writing that down is FDE work. No agent will do it for you.</p>

      <h2>FDE vs agentic AI, side by side</h2>

      <ul>
        <li>What it is. An FDE is a person on a contract or a payroll. Agentic AI is software running on a model.</li>
        <li>What it decides. The FDE decides which problem, which systems and when to stop. The agent decides the next step inside a job someone else defined.</li>
        <li>What you pay for. With an FDE, time, and OpenAI&apos;s New York band of $185,000 to $300,000 shows the market rate at the top. With an agent, the vendor&apos;s usage bill plus whoever builds and maintains it.</li>
        <li>How it fails. An FDE fails slowly and visibly, by being expensive or leaving. An agent fails by compounding errors and cost, which is the 40 percent Gartner expects to be cancelled.</li>
        <li>Who answers for it. An FDE is a named person. An agent has an owner only if you name one.</li>
      </ul>

      <h2>Which one you need, if you run a company</h2>

      <p>If you have one repeatable job with a clear finish line, and the systems involved already talk to each other, you may need neither. Buy an agent product built for that job, or follow the steps in <Link href="/blog/how-to-create-an-ai-agent-2026-10-13/">how to create an AI agent</Link> and build one yourself. Anthropic&apos;s own advice is to start with the simplest thing that works.</p>

      <p>If the job runs across three or four systems that were never built to talk, an accounting package, a CRM and a spreadsheet someone in operations keeps by hand, you need a person first. Someone has to connect them, decide what the agent may touch, test it on last month&apos;s real cases and stay until your team trusts it. In a company of 20 to 500 people that person is rarely on staff, which is why the question gets typed into Google.</p>

      <p>That&apos;s the work I do through Beyond Elevation, my firm. I come in as the FDE, connect the systems inside your own accounts, build the agent that runs on them and leave your team owning it. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at deciding what an agent should do before anyone builds it, because the finance seat taught me to price the work first. I connect the systems in a company that were never built to talk to each other, build the AI operations on top of them myself, and turn what comes out into a live dashboard a chief executive can run the week on instead of a month end pack. I also value and monetise the intellectual property and data a company already owns, and I sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on what to automate first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The role counts come from OpenAI&apos;s public Ashby job board and Anthropic&apos;s public Greenhouse board, both read on 14 October 2026, counting titles that contain forward deployed. The OpenAI pay band is as printed on the posting. The Cresta quotes are from its own Greenhouse posting the same day. The definitions are quoted from Google Cloud and Anthropic. The Gartner forecast is from its June 2025 release as reported by W.Media, because Gartner&apos;s own newsroom blocked my fetch. The 800% hiring growth is from The Pragmatic Engineer, Perspective AI and Paraform, read for my August 2026 research. Google autocomplete was read from the US this morning.</p>

      <p>The sources named on this page:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Postings come down and bands get edited, so if you&apos;re reading this weeks later, open the links and recount rather than trusting my tally.</p>

    </PageShell>
  );
}
