import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-agents-vs-workflows-2026-10-22";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-22";
const MOD = "2026-10-22";
const TITLE = "AI Agents vs Workflows: Which One Your Company Needs, From Someone Who Builds Both";
const DESC =
  "A workflow runs a model and tools through steps a person wrote in advance. An AI agent lets the model choose its own next step and its own tools. Most company work needs the workflow. Anthropic, OpenAI and LangChain definitions, plus 33 live FDE postings read on 22 October 2026. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated miniature in the spirit of the golden age of Islamic art, gold leaf on lapis and turquoise, set on aged parchment as two arched panels under a pair of golden scales. In the left panel a single tiled path of blue and gold geometric pattern runs past a row of arched doors marked with a gear, a scroll, a clock and a padlock. In the right panel, under a domed night sky with a crescent moon, a figure in a turban and blue robe stands in an open courtyard where many patterned paths branch out around him, with a compass, a quill, dividers and a brush floating within reach.";

const SOURCES = [
  { name: "Building effective agents (19 December 2024)", publisher: "Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents" },
  { name: "A practical guide to building agents", publisher: "OpenAI", url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf" },
  { name: "Workflows and agents", publisher: "LangChain", url: "https://docs.langchain.com/oss/python/langgraph/workflows-agents" },
  { name: "OpenAI, Forward Deployed Engineer (FDE), Legal, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/51977acc-b1f8-48af-bde6-95ddba936d65" },
  { name: "OpenAI, Forward Deployed Engineer (FDE), Financial Services, NYC", publisher: "OpenAI", url: "https://jobs.ashbyhq.com/openai/7f76be3a-38d0-4ff4-b997-9f1672e78bc0" },
  { name: "Anthropic, Forward Deployed Engineer, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Anthropic, Staff Forward Deployed Engineer, New York, San Francisco, Seattle", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
];

const FAQ = [
  {
    q: "AI agent vs workflow automation: what is the difference?",
    a: "Workflow automation follows steps a person wrote down in advance, and the same input takes the same path every time. An AI agent is given a goal and a set of tools, and the model decides the next step itself until it judges the job done. Anthropic's guidance says workflows offer predictability and consistency for well defined tasks, and agents suit work that needs flexibility and model driven decisions.",
  },
  {
    q: "AI agent vs workflow, Anthropic: how does Anthropic define them?",
    a: "In Building effective agents, published on 19 December 2024, Anthropic calls workflows systems where models and tools are orchestrated through predefined code paths, and agents systems where the model dynamically directs its own process and tool usage. It names 5 workflow patterns: prompt chaining, routing, parallelisation, orchestrator workers and evaluator optimiser.",
  },
  {
    q: "Agentic workflow vs AI agent: are they the same thing?",
    a: "No. An agentic workflow is a workflow with model calls inside it, where the path is still fixed and the model does a step such as reading, sorting or drafting. An AI agent owns the path. LangChain's documentation puts the line at autonomy: agents can make decisions about the tools they use and how to solve problems, workflows operate in a certain order.",
  },
  {
    q: "AI workflow vs AI agent example?",
    a: "A workflow example: every supplier invoice is read by a model, matched to its purchase order and routed to the right approver, in that order, every time. An agent example from OpenAI's guide is refund approval in customer service, where the right answer depends on judgement, exceptions and context, so the model has to choose what to check next.",
  },
  {
    q: "Should I start with an AI agent or a workflow?",
    a: "Start with the workflow. Anthropic recommends finding the simplest solution possible and adding complexity only when it is needed, and says a single model call with retrieval will often do the job. OpenAI's guide says that if a use case does not clearly need an agent, a deterministic solution may suffice. Build the agent when the steps cannot be written down.",
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
      "about": "AI agents vs workflows, the difference between an AI workflow that follows predefined steps and an AI agent that chooses its own steps and tools, from the definitions published by Anthropic, OpenAI and LangChain and the live forward deployed engineer postings at OpenAI and Anthropic on 22 October 2026",
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
      "name": "One fixed tiled path on the left, a courtyard of branching paths on the right, weighed under golden scales",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "ai agents vs workflows, ai agent vs workflow, ai agent vs workflow automation, agentic workflow vs ai agent, ai workflow vs ai agent example, ai agent vs workflow anthropic, agents vs workflows, forward deployed engineer, Anthropic, OpenAI, LangChain, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "AI agents vs workflows" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>AI agents vs workflows</h1>

      <p className="op-lede">A workflow runs a model and its tools through steps a person wrote in advance. An AI agent is handed a goal and chooses its own next step and its own tools. Most of the work inside a company needs the workflow, and an agent earns its cost only where the steps can&apos;t be written down.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies from that seat, and I now build both of these inside companies myself as a forward deployed engineer. On 22 October 2026 I typed ai agents vs workflows into Google from the US. It completed as a phrase of its own, along with ai agent vs workflow automation, ai agent vs workflow reddit and ai agent vs workflow anthropic. The Reddit version of the question is blunter: do AI agents exist, or are we building fancy workflows and calling them agents? It&apos;s a fair question, and the answer decides what you pay for.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          On the left, one tiled path past doors that open in order. On the right, a courtyard where the traveller picks his own path and his own instruments. The scales above weigh the two.
        </figcaption>
      </figure>

      <h2>The definitions the model makers use</h2>

      <p>Anthropic wrote the line most people now quote, in a post called Building effective agents on 19 December 2024. Workflows are systems where models and tools are orchestrated through predefined code paths. Agents are systems where the model dynamically directs its own processes and tool usage, and keeps control over how it does the job.</p>

      <p>OpenAI&apos;s guide to building agents puts it from the other end. A workflow is the sequence of steps needed to meet a goal, and an agent is a system that runs that sequence on your behalf with a high degree of independence. It also says what isn&apos;t one. Simple chatbots, single turn models and sentiment classifiers that don&apos;t control the workflow are not agents. LangChain&apos;s documentation agrees in plainer words: workflows have predetermined code paths and run in a certain order, agents define their own process and tool use.</p>

      <p>Three companies, one line. The question is who decides the next step. If a person decided it when the system was built, it&apos;s a workflow, however many model calls are inside it. If the model decides it at run time, it&apos;s an agent.</p>

      <h2>The 5 workflow patterns, so you can name what you&apos;re buying</h2>

      <p>Most of what gets sold to companies as an agent is one of the 5 workflow patterns Anthropic lists. There&apos;s nothing wrong with that. They&apos;re the right tool most of the time, and knowing the name tells you what to test.</p>

      <ul>
        <li>Prompt chaining. Each model call works on the output of the one before, for example draft, then check, then format.</li>
        <li>Routing. The input is sorted first, then sent down the path built for its type, for example a refund email to one flow and a delivery complaint to another.</li>
        <li>Parallelisation. Several model calls run at once, either on separate pieces of a job or on the same job several times to vote on the answer.</li>
        <li>Orchestrator workers. One model splits the job into parts, hands each to a worker and stitches the results together.</li>
        <li>Evaluator optimiser. One model writes, a second marks it, and the loop repeats until the mark is good enough.</li>
      </ul>

      <p>An orchestrator that decides how many parts a job has is already halfway to an agent. The line is a slope, and you want to know where on it you&apos;re standing before you sign anything.</p>

      <h2>When an agent earns its cost</h2>

      <p>The model makers are clear that agents cost more. Anthropic says agentic systems often trade latency and cost for better task performance, and that the autonomous nature of agents means higher costs and the potential for compounding errors. Its first recommendation is to find the simplest solution possible and add complexity only when it&apos;s needed. For many jobs, it says, one model call with retrieval and a few examples is enough.</p>

      <p>OpenAI gives 3 tests for when an agent is worth building, each with an example:</p>

      <ul>
        <li>Complex decision making, where the job turns on judgement, exceptions and context. Its example is refund approval in customer service.</li>
        <li>Rules that have become too hard to maintain, where the rulebook is so long and tangled that every update is costly or breaks something. Its example is vendor security reviews.</li>
        <li>Heavy reliance on unstructured data, meaning documents, free text and conversation. Its example is processing a home insurance claim.</li>
      </ul>

      <p>Then it adds the sentence I&apos;d put on the wall of every board meeting about AI: if your use case doesn&apos;t clearly meet those tests, a deterministic solution may suffice. When an agent is right, it says to start with a single agent and add more only when needed, and to hand control back to a person in 2 cases, when the agent passes a set number of failed attempts and before any high risk action such as cancelling an order, authorising a large refund or making a payment.</p>

      <h2>What the people who build them are measured on</h2>

      <p>I read the job feeds this morning, 22 October 2026, because a job posting says what a company pays for. OpenAI had 813 open roles and 27 with forward deployed in the title. 19 of those 27 use the word workflow. Only 3 mention agents at all, the healthcare roles, which ask for agentic systems that integrate with electronic health records and claims systems. 15 of the 27 measure success on measurable workflow impact. Its New York legal FDE, paid $185,000 to $300,000 plus equity, says early engagements may focus on creating a hero workflow.</p>

      <p>Anthropic had 678 open roles and 6 forward deployed titles. Its London FDE delivers MCP servers, sub-agents and agent skills that will be used in production workflows, so the agent sits inside a workflow there too. Its Staff FDE posting for New York, San Francisco and Seattle says: you don&apos;t need to have shipped agents to production. It asks for deep experience running production systems instead.</p>

      <p>Two of the companies selling the models are paying engineers to make workflows work. That tells you where the value is landing in 2026. I covered the Anthropic role in more detail in <Link href="/blog/anthropic-forward-deployed-engineer-2026-10-12/">what an Anthropic forward deployed engineer does</Link>, and the person versus software question in <Link href="/blog/fde-vs-agentic-ai-2026-10-14/">FDE vs agentic AI</Link>.</p>

      <h2>AI agents vs workflows, side by side</h2>

      <ul>
        <li>Who picks the next step. In a workflow, the person who built it. In an agent, the model, at run time.</li>
        <li>Same input, same path. A workflow, yes. An agent, not guaranteed.</li>
        <li>Cost per run. A workflow costs a fixed number of model calls. An agent costs as many as it decides to make, which Anthropic flags as the price of flexibility.</li>
        <li>How it fails. A workflow fails at a known step and you can see which. An agent can fail by compounding small errors across many steps.</li>
        <li>Testing. A workflow is tested step by step. An agent needs a set of real past cases and a mark for each, run again after every change.</li>
        <li>Best at. Workflows suit invoices, onboarding, reporting and routing. Agents suit refunds, claims and reviews, the 3 kinds of work in OpenAI&apos;s tests.</li>
      </ul>

      <h2>How I decide on a real job</h2>

      <p>I ask one question first. Can the person who does the job today write the steps on a single page? If they can, I build a workflow, with a model inside it wherever a step means reading or sorting text. Month end matching, invoice routing and the Monday report all land here. They&apos;re cheaper to run, and when one breaks your team can see which step broke.</p>

      <p>If they can&apos;t, because the answer turns on exceptions they handle from memory, I look at OpenAI&apos;s 3 tests and whether the job touches money. Anything that pays, refunds or cancels gets a person on the final step, whatever the model is capable of. That&apos;s the CFO in me. I&apos;ve never seen a buyer care how clever a system was, only whether the numbers coming out of it held up.</p>

      <p>The real work in either case is connecting the systems first. A workflow or an agent is only as good as the accounting package, the CRM and the spreadsheet it can read, and in most companies of 20 to 500 people those three were never built to talk. That&apos;s what I do through Beyond Elevation, my firm. I come in as the forward deployed engineer, connect the systems inside your own accounts, build the workflow or the agent the job needs and leave your team owning it. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at telling a company which of its jobs needs a workflow and which needs an agent, because the finance seat taught me to price a job before anyone automates it. I connect the systems that were never built to talk to each other, build the AI operations on top of them myself, and turn the output into a live dashboard a chief executive can run the week on instead of waiting for the month end pack. I also value and monetise the intellectual property and data a company already owns, and I sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on which of your jobs needs an agent and which only needs a workflow, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The definitions and the 5 patterns are quoted from Anthropic&apos;s Building effective agents and LangChain&apos;s workflows and agents page. The 3 tests, the single agent advice and the 2 human intervention triggers are from OpenAI&apos;s practical guide to building agents. The role counts come from OpenAI&apos;s public Ashby job board and Anthropic&apos;s public Greenhouse board, both read on 22 October 2026, counting titles that contain forward deployed and then the postings whose text contains workflow or agent. The OpenAI pay band is as printed on the posting. Google autocomplete was read from the US the same morning.</p>

      <p>The sources named on this page:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Postings come down and get edited, so if you&apos;re reading this weeks later, open the links and recount rather than trusting my tally.</p>

    </PageShell>
  );
}
