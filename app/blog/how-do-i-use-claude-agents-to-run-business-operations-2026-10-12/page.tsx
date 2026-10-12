import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-use-claude-agents-to-run-business-operations-2026-10-12";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-12";
const MOD = "2026-10-12";
const TITLE = "How Do I Use Claude Agents to Run Business Operations?";
const DESC =
  "Use Claude agents on one back office process at a time: run each one on a schedule through Claude Code or the Agent SDK, connect it to your systems over MCP with read access first, write its rules into files it loads every run, and give a named person its exception queue. Expect 6 to 8 weeks per process from shadow to live.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-pick1-founder-goldenhour-whitetee.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for how do i use claude agents to run business operations";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESC,
    images: [
      {
        url: PORTRAIT,
        width: 1400,
        height: 1400,
        alt: PORTRAIT_ALT,
      }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [{ url: PORTRAIT, alt: PORTRAIT_ALT }],
  },
};

const LEAD_ANSWER =
  "You use Claude agents to run operations one process at a time: each agent runs on a schedule through Claude Code or the Claude Agent SDK, reads your systems over MCP, follows written rules it loads on every run, and sends anything it isn't sure about to a named person's exception queue. Start with one high volume, rule heavy process such as invoice coding or pipeline research, run it in shadow for 4 weeks, and expect 6 to 8 weeks per process before it works unsupervised.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESC,
      url: URL,
      inLanguage: "en",
      datePublished: PUB,
      dateModified: MOD,
      image: [{ "@id": `${URL}#portrait` }],
      author: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      mainEntityOfPage: URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I use Claude agents to run business operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Do I need developers to build Claude agents for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For the first agent, no. A scheduled Claude Code run with a rules file and two or three MCP connections needs someone who can read a log and edit a config file, not an engineering team. Once an agent has to sit inside your own product or run at volume on the Agent SDK, you want one engineer, part time, who owns the code and the credentials.",
          },
        },
        {
          "@type": "Question",
          name: "Are Claude agents worth it for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if there's a process with enough volume to measure. Below about 200 transactions a month the hours saved won't cover the time to set the agent up and check it. Above that, a 20 to 50 person company can run one or two agents with the founder or finance lead as the owner, about 2 hours a week each.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop Claude agents running up a large bill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Put a cap in front of every agent before it starts, not a report after it finishes. I give each agent a weekly limit on runs and on tokens, and the agent checks the ledger and stops itself when it's over. Raising a cap is a decision for the person who owns the budget, never for the agent.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption: PORTRAIT_ALT,
      name: "Hayat Amin, New York City",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, Claude agents for business, Claude Agent SDK, Claude Code, MCP, AI agents for business operations, AI operator, New York City",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: TITLE, item: URL }],
    }],
};

const th = { textAlign: "left" as const, borderBottom: "1px solid rgba(128,128,128,0.4)", padding: "0.5rem 0.4rem" };
const td = { padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" };

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "How Do I Use Claude Agents to Run Business Operations?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Use Claude Agents to Run Business Operations?</h1>
      <p className="op-lede">
        You use Claude agents to run operations one process at a time: each
        agent runs on a schedule through Claude Code or the Claude Agent SDK,
        reads your systems over MCP, follows written rules it loads on every
        run, and sends anything it isn't sure about to a named person's
        exception queue. Start with one high volume, rule heavy process such as
        invoice coding or pipeline research, run it in shadow for 4 weeks, and
        expect 6 to 8 weeks per process before it works unsupervised.
      </p>

      <h2>Why most companies get stuck in the chat window</h2>
      <p>
        Most companies I walk into bought Claude seats for 30 or 40 people and
        called it an AI rollout. Six months later the seats are used for emails
        and meeting notes. Nothing in operations has changed, because a chat
        window waits for a person to type. An operations agent has to start on
        its own at 6am, read the bank feed, and finish before anyone logs in.
      </p>
      <p>
        The second mistake is the opposite. A keen engineer wires Claude into
        the ERP with full write access in a weekend demo. It works on the
        happy path. Then it posts 40 invoices to the wrong cost centre in one
        night because a supplier renamed itself, and the finance director
        switches the whole thing off. I've seen that kill a programme for a
        year.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-pick1-founder-goldenhour-whitetee.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in New York City. He builds and runs the Claude agents
          that run finance and operations inside companies in London, NYC and
          Dubai.
        </figcaption>
      </figure>

      <h2>Pick the Claude surface by who runs the agent</h2>
      <p>
        Claude comes in four forms that matter for operations, and the choice
        decides who maintains the agent. I pick by one question: who starts the agent, and where
        does it live?
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Surface</th>
            <th style={th}>Who starts it</th>
            <th style={th}>Where I use it in operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Claude app with Projects</td>
            <td style={td}>A person, by typing</td>
            <td style={td}>Drafting, analysis, one-off questions. Not operations</td>
          </tr>
          <tr>
            <td style={td}>Claude Code, run headless on a schedule</td>
            <td style={td}>A scheduler, such as a nightly job</td>
            <td style={td}>The first 1 to 5 back office agents in most companies</td>
          </tr>
          <tr>
            <td style={td}>Claude Agent SDK, Python or TypeScript</td>
            <td style={td}>Your own application</td>
            <td style={td}>Agents inside your product or at volume, once you have an engineer</td>
          </tr>
          <tr>
            <td style={td}>Managed Agents</td>
            <td style={td}>Anthropic hosts the loop</td>
            <td style={{ ...td, borderBottom: "none" }}>When nobody in the company wants to run servers</td>
          </tr>
        </tbody>
      </table>
      <p>
        The Agent SDK gives you the same tools and agent loop as Claude Code,
        so an agent that starts as a scheduled Claude Code job can move into
        your own code later without a rewrite of its rules.
      </p>

      <h2>The five steps I use inside a client</h2>
      <h3>1. One process, one owner, one number</h3>
      <p>
        I choose the process by volume times rule density. Invoice coding at
        800 a month with a written chart of accounts beats contract review at
        12 a month with no playbook. The process gets a named owner, usually
        the person who does it today, and one number we'll judge it on, such
        as hours per week or error rate. I baseline that number for 4 weeks
        before the agent touches anything.
      </p>
      <h3>2. Connect over MCP, read only for the first month</h3>
      <p>
        Claude reaches your systems through MCP, the Model Context Protocol.
        Each connection is a door you choose: the accounting ledger, the CRM,
        the shared drive, the ticket queue. For the first 4 weeks every door is
        read only. The agent proposes, writes its answer to a review sheet, and
        a person compares it with what they did. I want 95% agreement over 2
        straight weeks before any write access is switched on.
      </p>
      <h3>3. Write the rules into files, not into prompts</h3>
      <p>
        Claude Code and the Agent SDK load skills, commands and memory from a
        project folder on every run. That folder is the agent's operating
        manual: the chart of accounts, the approval limits, the supplier
        aliases, what goes to the exception queue. When the business changes,
        the owner edits one file and the next run picks it up. A rule that only
        lives in someone's chat history doesn't exist.
      </p>
      <h3>4. Permissions and hooks do the policing</h3>
      <p>
        The SDK lets you set which tools run on their own and which need
        approval, and hooks run your own code at fixed points in each run. I
        use a hook to block any payment, any email to a customer and any
        delete. The agent prepares a payment run, a named person releases it.
        That line doesn't move after 6 good months.
      </p>
      <h3>5. A budget gate before every run</h3>
      <p>
        Every agent I run checks a ledger before it starts: runs this week and
        tokens this week, against a cap. Over the cap, it stops and says so. It
        never raises its own limit. That one check is the difference between a
        predictable monthly cost and a surprise on the card statement.
      </p>

      <h2>From my operating seat</h2>
      <p>
        I'm Hayat Amin, an AI-native CFO, AI operator and AI coach for CFOs
        who teaches finance leaders how to build AI into finance operations.
        I spent twenty years in the C-suite, with three exits and three FT100
        listings, and now I build and run Claude agents inside companies:
        finance, sales pipeline, onboarding and compliance evidence. I coach
        CFOs one to one on the same work. The starting point for that is{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>.
      </p>
      <p>
        My own business runs this way. The article you're reading was
        researched, drafted and checked by a scheduled Claude Code run that
        read its rules from a file, passed a weekly run and token cap before it
        started, and was blocked from naming anything on my banned list. Inside
        one client I run, an agent researches the sales pipeline overnight and
        the team has a ranked account list by the morning. The person who owns it
        spends 20 to 30 minutes a morning on the exceptions. That's the whole
        human cost.
      </p>

      <h2>Do I need developers to build Claude agents for my business?</h2>
      <p>
        For the first agent, no. A scheduled Claude Code run with a rules file
        and two or three MCP connections needs someone who can read a log and
        edit a config file, not an engineering team. Once an agent has to sit
        inside your own product or run at volume on the Agent SDK, you want
        one engineer, part time, who owns the code and the credentials.
      </p>

      <h2>Are Claude agents worth it for a small business?</h2>
      <p>
        Yes, if there's a process with enough volume to measure. Below about
        200 transactions a month the hours saved won't cover the time to set
        the agent up and check it. Above that, a 20 to 50 person company can
        run one or two agents with the founder or finance lead as the owner,
        about 2 hours a week each.
      </p>

      <h2>How do I stop Claude agents running up a large bill?</h2>
      <p>
        Put a cap in front of every agent before it starts, not a report after
        it finishes. I give each agent a weekly limit on runs and on tokens,
        and the agent checks the ledger and stops itself when it's over.
        Raising a cap is a decision for the person who owns the budget, never
        for the agent.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is what I build and run inside companies. I pick the first
        process, wire the Claude agent to your systems with read access, write
        its rulebook with the person who owns the work, and hand it over once
        it has held its number for a month. Then we do the next one. Which
        process in your company would you hand to an agent first? See{" "}
        <Link href="/services/ai-agent-operator/">how I work as your AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
