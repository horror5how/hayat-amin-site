import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-to-create-an-ai-agent-2026-10-13";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-13";
const MOD = "2026-10-13";
const TITLE = "How to Create an AI Agent: 7 Steps, and the 6 Places to Build One";
const DESC =
  "To create an AI agent, pick one job with a clear finish line, write its rules down, connect it to your systems with read access first, test it on last month's real cases, then run it beside a person before it acts alone. Below are the 7 steps on a property management example, and Copilot Studio, Claude, ChatGPT, Gemini, n8n and code compared. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript page in the spirit of the golden age of Islamic art, gold leaf and lapis arabesque framing a central scene. A craftsman in a white turban sits at a workbench of gears and tools, holding a small brass automaton with a scroll and a ring of keys. Behind him a second automaton carries a lantern out through an arch into a moonlit courtyard of stone apartment buildings, past a fountain that is dripping.";

const SOURCES = [
  { name: "A practical guide to building agents", publisher: "OpenAI", url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf" },
  { name: "Building effective agents (19 December 2024)", publisher: "Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents" },
  { name: "What is the Model Context Protocol (MCP)?", publisher: "Model Context Protocol", url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
  { name: "Agent SDK overview", publisher: "Anthropic", url: "https://code.claude.com/docs/en/agent-sdk/overview" },
  { name: "Quickstart: Create and deploy an agent", publisher: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started" },
  { name: "Microsoft Copilot Studio pricing", publisher: "Microsoft", url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio" },
  { name: "Agent Builder guide", publisher: "OpenAI", url: "https://developers.openai.com/api/docs/guides/agent-builder" },
  { name: "Deprecations", publisher: "OpenAI", url: "https://developers.openai.com/api/docs/deprecations" },
  { name: "OpenAI Agents SDK", publisher: "OpenAI", url: "https://openai.github.io/openai-agents-python/" },
  { name: "Use Gems in Gemini Apps", publisher: "Google", url: "https://support.google.com/gemini/answer/15146780" },
  { name: "Create an agent in Gemini Enterprise", publisher: "Google Cloud", url: "https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/create-agent" },
  { name: "Community Edition features", publisher: "n8n", url: "https://docs.n8n.io/hosting/community-edition-features/" },
  { name: "AI Agent node", publisher: "n8n", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/" },
  { name: "LangGraph overview", publisher: "LangChain", url: "https://docs.langchain.com/oss/python/langgraph/overview" },
  { name: "Realm-X Performers demo", publisher: "AppFolio", url: "https://www.appfolio.com/product-demos/realm-x-performers" },
  { name: "Buildium pricing", publisher: "Buildium", url: "https://www.buildium.com/pricing/" },
  { name: "Rent Manager software customization", publisher: "Rent Manager", url: "https://www.rentmanager.com/software-customization/" },
];

const FAQ = [
  {
    q: "How do I create an AI agent for free?",
    a: "Self-host n8n. Its Community Edition is the free edition, the one n8n runs without a licence key, and it includes the AI Agent node, which needs at least one tool connected. You still pay for the model the agent calls and for the server it runs on. Google's help page for Gems names no paid plan, but from November 2026 Google is turning Gems on personal accounts into skills.",
  },
  {
    q: "How do I create an AI agent in Copilot?",
    a: "In Microsoft Copilot Studio you describe the agent in up to 1,024 characters, and the AI drafts its name, description and instructions, then suggests triggers, knowledge sources and tools. You add or change those, test it and select Publish. A trial licence can't publish. Copilot Credit packs are $200.00 a month for 25,000 credits, and Microsoft says an Azure subscription is required to use agents.",
  },
  {
    q: "How do I create an AI agent in Claude?",
    a: "Use the Claude Agent SDK. It gives you the same tools, agent loop and context management that run Claude Code, in Python and TypeScript. Connect it to your systems through MCP servers, write its rules into the instructions it loads every run, and run it on a schedule. It suits someone who can read code, or who has someone who can.",
  },
  {
    q: "How do I create an AI agent in ChatGPT?",
    a: "Not with Agent Builder. OpenAI told developers on 3 June 2026 that Agent Builder is deprecated, and it is scheduled to shut down on 30 November 2026. OpenAI's migration path is the Agents SDK or ChatGPT Workspace Agents. If you start this month, start on one of those.",
  },
  {
    q: "How do I create an AI agent in Gemini?",
    a: "On a personal account, open Gems, choose New Gem, give it a name and instructions, and add files if it needs them. That gives you an assistant with standing instructions, which is the first step of an agent. For a company, Gemini Enterprise has a Workflow Builder on its Standard, Plus, Pay-as-you-go and Frontline editions, where you describe the agent in a prompt or build it in designer mode.",
  },
  {
    q: "How do I create an AI agent from scratch?",
    a: "Pick a framework and a model, and write the loop yourself. OpenAI's Agents SDK describes itself as a lightweight package with very few abstractions. LangGraph is a low-level runtime for stateful, long running agents that mix hand-coded logic with model driven steps. Anthropic's own advice is to start with the model's API directly and add complexity only when you need it.",
  },
  {
    q: "How do I create an AI agent for my company?",
    a: "Start with one process that costs a named person hours every week and has a clear finish line, then follow the 7 steps above. Check first whether the software you already pay for ships the agent. AppFolio's Maintenance Performer, for example, already writes work orders and routes vendors. Build your own only where your rules are the reason you win.",
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
      "about": "How to create an AI agent, in 7 steps worked through a property management maintenance request agent, with Microsoft Copilot Studio, Claude, ChatGPT, Gemini, n8n and code frameworks compared from their own documentation and pricing pages read on 13 October 2026",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#steps`,
      "name": "7 steps to create an AI agent",
      "numberOfItems": 7,
      "itemListElement": [
        "Pick one job with a finish line",
        "Write down the rules your best person follows",
        "Decide whether it needs to be an agent at all",
        "Connect its tools, read access first",
        "Choose where to build it",
        "Test it on last month's real cases",
        "Run it in shadow, then give a named person its exceptions",
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
      "name": "The clockmaker gives his automaton a scroll of rules and a ring of keys, and it walks out to the fountain that needs fixing",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "how to create an ai agent, how to create an ai agent for free, how to create an ai agent in copilot, how to create an ai agent in claude, how to create an ai agent in chatgpt, how to create an ai agent in gemini, how to create an ai agent from scratch, Hayat Amin, Beyond Elevation, New York"
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
        { label: "How to create an AI agent" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>How to create an AI agent</h1>

      <p className="op-lede">To create an AI agent, pick one job with a clear finish line, write its rules down, connect it to your systems with read access first, test it on last month&apos;s real cases, then run it beside a person before it acts alone. The tool you build it in is step 5 of 7, not step 1.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now build agents inside companies myself as a forward deployed engineer. Most of the agents I see fail weren&apos;t badly coded. They were pointed at a job nobody had written down. Below are the 7 steps I follow, worked through one example, then the 6 places Google suggests you build one, read from each vendor&apos;s own pages on 13 October 2026.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The clockmaker hands his automaton a scroll of rules and a ring of keys. The one already walking out carries its own lantern to the fountain that needs fixing.
        </figcaption>
      </figure>

      <h2>The example: a maintenance request agent</h2>

      <p>Say you run a property management company in New York. A tenant texts at 11pm that the kitchen sink is leaking. Today someone reads that in the morning, opens the property system, writes a work order, decides how urgent it is, picks a plumber and texts the tenant back. That&apos;s 6 jobs, 4 systems and one person who can&apos;t be off sick. It&apos;s a good first agent because the finish line is plain: a correct work order with the right vendor on it. I&apos;ll use it through every step.</p>

      <h2>7 steps to create an AI agent</h2>

      <h3>1. Pick one job with a finish line</h3>

      <p>An agent needs a job you could hand to a new hire on day one with a checklist. &quot;Handle maintenance&quot; is a department. &quot;Turn every inbound repair message into a work order with an urgency and a vendor&quot; is a job. If you can&apos;t say what done looks like in one sentence, you can&apos;t test it, and step 6 will never end.</p>

      <h3>2. Write down the rules your best person follows</h3>

      <p>OpenAI&apos;s practical guide to building agents says an agent has 3 parts: a model, tools, and instructions, the explicit guidelines and guardrails for how it behaves. The instructions are the part companies skip. Sit with the person who does the job well and write down what they do. A leak under a sink is urgent, a dripping tap isn&apos;t. No heat in January is an emergency. Never send a vendor over a set amount without a manager&apos;s yes. That document is the agent. The model only reads it.</p>

      <h3>3. Decide whether it needs to be an agent at all</h3>

      <p>Anthropic&apos;s engineering team draws the line in their post on building effective agents. A workflow is a system where models and tools run through predefined code paths. An agent is one where the model directs its own process and decides which tools to use. Their advice is to find the simplest solution possible and add complexity only when you need it. I agree with them. Writing the work order is a workflow. Troubleshooting with a tenant who isn&apos;t sure which pipe is leaking needs an agent, because the next question depends on the last answer.</p>

      <h3>4. Connect its tools, read access first</h3>

      <p>This is where most of the work is, and it&apos;s the part I&apos;d spend your budget on. The agent has to read the tenant&apos;s message, look up the unit, check the vendor list and write the work order. The Model Context Protocol, MCP, is an open source standard for connecting AI applications to outside systems. Your property system has to let it in. Buildium includes its Open API only on its Premium plan, from $400 a month, against $62 on Essential. Rent Manager offers a web services connection with both read and write access to your database. Give the agent read access for the first weeks. Write access comes after it has earned it.</p>

      <h3>5. Choose where to build it</h3>

      <p>Pick the place your team can maintain, not the one with the best demo. The 6 options are compared in the next section. If you&apos;re on AppFolio, check first whether you need to build anything. Its Realm-X Maintenance Performer already troubleshoots with residents, writes the work order, classifies the urgency and routes the vendor, under human monitoring and supervision. Buying that beats building it. I wrote about where that line sits in <Link href="/blog/should-my-company-build-or-buy-its-ai-agents-2026-10-07/">should my company build or buy its AI agents</Link>.</p>

      <h3>6. Test it on last month&apos;s real cases</h3>

      <p>Pull 50 real requests from last month, with the work orders your team actually wrote. Run the agent on them and compare. Count where it picked a different urgency or a different vendor, and read why. Every miss is either a rule you forgot to write in step 2 or a system it couldn&apos;t see in step 4. Fix those and run the same 50 again. Don&apos;t move on until the misses are ones your best person would also argue about.</p>

      <h3>7. Run it in shadow, then give a named person its exceptions</h3>

      <p>For 2 to 4 weeks the agent drafts every work order and a person approves or corrects it. Then it sends the routine ones alone and passes anything it isn&apos;t sure of to a queue. Put one name on that queue. An agent with nobody owning its exceptions turns into a second inbox nobody reads. I covered the controls I put around that in <Link href="/blog/how-do-i-make-ai-agents-safe-enough-to-run-real-operations-2026-08-31/">how do I make AI agents safe enough to run real operations</Link>.</p>

      <h2>Where to create an AI agent: 6 places compared</h2>

      <p>These are the 6 that Google completes when you type the question, in the order it suggests them, with free and from scratch at the end. I read each vendor&apos;s own documentation and pricing page on 13 October 2026. Prices are only where the vendor prints them.</p>

      <h3>1. Microsoft Copilot Studio</h3>

      <p>You describe what the agent should do in up to 1,024 characters, and the AI drafts its name, description and instructions, then suggests triggers, knowledge sources and tools. You add tools, test it and publish. It&apos;s good for a company that already lives in Microsoft 365 and wants the agent in Teams. It&apos;s wrong for anyone who wants to try it on the trial, because a trial licence can&apos;t publish. Microsoft prints Copilot Credit packs at $200.00 a month for 25,000 credits and says an Azure subscription is required to use agents.</p>

      <h3>2. Claude</h3>

      <p>The Claude Agent SDK gives you the same tools, agent loop and context management that run Claude Code, in Python and TypeScript. It connects to your systems over MCP. It&apos;s good for an agent that runs on a schedule and does real work across several systems, which is most back office work. It&apos;s wrong for a team with nobody who can read code. I set out how I run it day to day in <Link href="/blog/how-do-i-use-claude-agents-to-run-business-operations-2026-10-12/">how do I use Claude agents to run business operations</Link>.</p>

      <h3>3. ChatGPT</h3>

      <p>Check the date before you start here. OpenAI told developers on 3 June 2026 that Agent Builder, its visual canvas for multi-step agents, is deprecated, and it&apos;s scheduled to shut down on 30 November 2026. OpenAI points builders to the Agents SDK or ChatGPT Workspace Agents instead. It&apos;s good for a company already on a ChatGPT business workspace. It&apos;s wrong for anyone who builds on Agent Builder this month and has to move it again in 7 weeks.</p>

      <h3>4. Gemini</h3>

      <p>On a personal account you open Gems, choose New Gem, give it a name and instructions and add files. That&apos;s a helper with standing instructions, and it can&apos;t act in your property system. Google says that from November 2026, Gems on personal accounts go away and turn into skills. For a company, Gemini Enterprise has a Workflow Builder on its Standard, Plus, Pay-as-you-go and Frontline editions, where you describe the agent in a prompt or build it in designer mode. It&apos;s good for a team on Google Workspace. A Gem is wrong for anything that has to write to another system.</p>

      <h3>5. n8n, for free</h3>

      <p>n8n&apos;s Community Edition is the free edition, the one it runs without a licence key, and its AI Agent node lets you build an agent that needs at least one tool connected. It&apos;s good for the step 3 workflow, because you can see every path drawn on a canvas. It&apos;s wrong if you can&apos;t run a server, and the free edition leaves out SSO, sharing and Git version control. Free means free software. You still pay for the model and the hosting.</p>

      <h3>6. From scratch, with a framework</h3>

      <p>OpenAI&apos;s Agents SDK calls itself a lightweight package with very few abstractions. LangGraph calls itself a low-level runtime for stateful, long running agents that mix hand-coded logic with model driven steps. Both are good for an engineer who wants full control of the loop. Both are wrong as a first project for a company with no engineer, because you&apos;re signing up to maintain the code.</p>

      <h2>What I&apos;d do this week</h2>

      <p>Pick the one job in your company that eats a named person&apos;s Monday. Write its rules on one page. Then check whether your existing software already ships the agent before you build one. If it doesn&apos;t, the build is mostly step 4, joining the systems, and that&apos;s the work I do through Beyond Elevation, my firm. I sit inside the company, connect the systems the agent needs, write its rules with the person who knows them and stay until it runs without me. The scope is at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on which job to give your first agent, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of those companies in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at creating agents that survive contact with a real company, because the finance seat taught me where the week breaks before anyone writes code. I connect the systems that were never built to talk to each other, write the rules down with the people who know them, and put a live dashboard in front of the chief executive instead of a month end pack. I also value and monetise the intellectual property and data a company already owns, and sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these facts come from</h2>

      <p>Every product fact and price on this page is from the vendor&apos;s own documentation or pricing page, read on 13 October 2026. The 6 places are the completions Google suggested in the US that morning for how to create an AI agent. The property management company is an example, not a client, and the 50 cases and 2 to 4 weeks are how I run tests, not a published benchmark. OpenAI&apos;s help pages on custom GPTs refused my request, so I haven&apos;t said anything about which plans can make them.</p>

      <p>The sources named on this page:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Vendors change plans and retire products quickly in this market, so if you&apos;re reading this months later, open the links before you trust a price.</p>

    </PageShell>
  );
}
