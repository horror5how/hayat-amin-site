import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "claude-for-finance";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-21";
const MOD = "2026-10-21";
const TITLE = "Claude for Finance Teams: How I Use It to Run Close, Cash and Reporting";
const DESC =
  "How a finance team should use Claude: write the finance rulebook as a skill first, then run three jobs on a schedule against the ledger (overnight bank matching for close, one cash runway figure every morning, variance commentary with every number tagged to its source line), read only for 30 days and a named person on every journal and payment.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-alt-office-heavier-v2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for claude for finance teams: how i use it to run close, cash and reporting";

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
  "A finance team gets the most from Claude when it stops treating it as a chat window and gives it three scheduled jobs against the ledger: matching the bank overnight during close, posting one cash runway figure every morning, and drafting variance commentary where every number points to its source line. Write your finance rules into a skill Claude loads every time, keep every connection read only for the first 30 days, and put a named person on every journal and every payment.";

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
      about: [
        { "@type": "Thing", name: "Claude for finance teams" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How should a finance team use Claude to run close, cash and reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Is Claude good for financial analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for reading, explaining and writing about numbers, and Anthropic has sold a financial services package since July 2025. It's weak as the source of a number. Give it the ledger export or a read only connection, ask it to show which lines each figure came from, and tick those lines before anything leaves the team. Analysis it can trace, you can trust.",
          },
        },
        {
          "@type": "Question",
          name: "What are Claude skills, and should a CFO write them?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skills are folders of instructions, scripts and files that Claude loads when a task needs them. Anthropic launched them in October 2025. A CFO should write the first one, because it holds the rules only finance knows: the chart of accounts, materiality, the close calendar and what never goes in. It takes about 2 hours, and it stops every person writing their own prompt every month.",
          },
        },
        {
          "@type": "Question",
          name: "Should a finance team use Claude Cowork or Claude Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Cowork when a person hands off a task and reviews the result, like turning 40 supplier statements in a folder into one reconciliation sheet. Use Claude Code when the job runs on a schedule with nobody watching, like overnight bank matching. Most finance teams I work with start in Cowork for 30 days and move the jobs that repeat every day into scheduled agents.",
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
      keywords: "Hayat Amin, Claude for finance, Claude for finance teams, Claude for CFOs, AI for CFOs, AI coach for CFOs, AI-native CFO, New York City",
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
        { label: "Claude for Finance" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>Claude for Finance Teams: How I Use It to Run Close, Cash and Reporting</h1>
      <p className="op-lede">
        A finance team gets the most from Claude when it stops treating it as
        a chat window and gives it three scheduled jobs against the ledger:
        matching the bank overnight during close, posting one cash runway
        figure every morning, and drafting variance commentary where every
        number points to its source line. Write your finance rules into a
        skill Claude loads every time, keep every connection read only for
        the first 30 days, and put a named person on every journal and every
        payment.
      </p>

      <h2>Why most finance teams stall after the first month</h2>
      <p>
        The pattern I see is the same in a 20 person company and a 400 person
        one. The team buys seats, everyone opens a chat, and for 4 weeks the
        board commentary gets better. Then it plateaus. Close still takes 9
        or 10 working days, because nothing about close has changed. People
        are typing better sentences about the same late numbers.
      </p>
      <p>
        The second problem is that the rules live in people&apos;s heads.
        The controller writes a prompt for accruals, the FP&amp;A analyst
        writes a different one for variances, and each prompt forgets
        materiality, the cost centre mapping and the board&apos;s preferred
        format. Twelve people means twelve versions of the finance function.
        Claude is only as consistent as the rules you load into it, and most
        teams load none.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-alt-office-heavier-v2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in New York City. He builds and runs Claude agents inside
          finance teams and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>Pick the Claude surface by who presses go</h2>
      <p>
        Claude comes in several forms, and finance teams waste weeks arguing
        about them. I use one question: does a person start the job and
        review it, or does it run while everyone is asleep?
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Surface</th>
            <th style={th}>Who starts it</th>
            <th style={th}>Finance job it suits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Chat with a project</td>
            <td style={td}>One person, live</td>
            <td style={td}>Board and investor drafts, formula checks, contract summaries</td>
          </tr>
          <tr>
            <td style={td}>Skills</td>
            <td style={td}>Loaded on every task</td>
            <td style={td}>The finance rulebook: accounts, materiality, close calendar</td>
          </tr>
          <tr>
            <td style={td}>Cowork</td>
            <td style={td}>A person hands off, then reviews</td>
            <td style={td}>A folder of 40 supplier statements turned into one reconciliation</td>
          </tr>
          <tr>
            <td style={{ ...td, borderBottom: "none" }}>Claude Code on a schedule</td>
            <td style={{ ...td, borderBottom: "none" }}>A clock, at 02:00</td>
            <td style={{ ...td, borderBottom: "none" }}>Bank matching, cash runway, commentary drafts</td>
          </tr>
        </tbody>
      </table>

      <h2>The five steps I run inside a finance team</h2>

      <h3>1. Write the rulebook as a skill before any agent</h3>
      <p>
        Anthropic launched skills in October 2025: folders of instructions,
        scripts and files that Claude loads when a task needs them. The first
        one I write with a CFO is the finance rulebook. It holds the chart of
        accounts, the cost centre map, the materiality line (I start at
        £5,000 or 5% of the budget line, whichever is bigger), the close
        calendar, and the red list of what never goes in. It takes about 2
        hours with the controller in the room. After that, every person and
        every agent works from the same rules.
      </p>

      <h3>2. Close: match the bank overnight, read only</h3>
      <p>
        The first scheduled job is bank matching. From day 1 of close, an
        agent reads the bank feed and the ledger at 02:00, matches what it
        can, and sends the controller a list of exceptions by 08:00. It
        can&apos;t post anything. A person clears the exceptions and posts the
        journals. On a clean ledger, I expect close to drop from 10 working
        days to about 6 within 3 closes. Most of that gain is the team
        starting each morning on the 30 lines that need a human, instead of
        the 3,000 that didn&apos;t.
      </p>

      <h3>3. Cash: one runway figure every morning</h3>
      <p>
        The second job reads every bank balance and the 13 week cash forecast
        each morning and posts one number: weeks of runway at the current burn,
        with yesterday&apos;s figure beside it. If the number moves by more
        than 1 week overnight, it names the 3 transactions that moved it. The
        CEO reads it in 10 seconds. Claude reads the accounts. It never moves
        money, and no bank connection gets write access, ever.
      </p>

      <h3>4. Reporting: commentary where every number has a source</h3>
      <p>
        The third job drafts the variance commentary for the management pack.
        The rule in the skill is strict: every figure in the draft carries a
        tag pointing to the ledger lines it came from. A paragraph with 6
        numbers arrives with 6 tags, and the reviewer ticks each one. The
        draft lands on day 3 or 4 of close instead of day 8, and the FP&amp;A
        lead spends the saved time on the 2 variances the board will ask
        about.
      </p>

      <h3>5. Controls and cost before you widen anything</h3>
      <p>
        For the first 30 days every connector is read only. After that, the
        bar to add a write permission is a named owner, a written reason and a
        log of what the agent did. A person signs every journal and every
        payment, with no exceptions. Each agent also gets a monthly spend cap
        that stops the run when it&apos;s reached, because an agent stuck in a
        loop at 03:00 will spend whatever you let it.
      </p>

      <h2>From my operating seat</h2>
      <p>
        I&apos;m Hayat Amin, an AI-native CFO, AI operator and AI coach for
        CFOs who teaches finance leaders how to build AI into finance
        operations. I spent twenty years in the C-suite, with three exits and
        three FT100 listings. Now I build and run AI agent systems inside
        companies, across finance, sales pipeline, onboarding and compliance
        evidence, and I coach CFOs one to one on the same work.
      </p>
      <p>
        I build my own finance agents on Claude because of the rules file.
        Every run loads the same rulebook, so the agent at 02:00 on a Sunday
        behaves like the one I tested on Tuesday. Inside the companies I run,
        the cash runway figure is waiting before the finance team logs in,
        and the bank exceptions list is the first thing the controller opens.
        In a sale process, the question a buyer&apos;s diligence team keeps
        asking is where a number came from. A tagged commentary draft answers
        it every month, long before anyone asks.
      </p>

      <h2>Is Claude good for financial analysis?</h2>
      <p>
        Yes, for reading, explaining and writing about numbers, and Anthropic
        has sold a financial services package since July 2025. It&apos;s weak
        as the source of a number. Give it the ledger export or a read only
        connection, ask it to show which lines each figure came from, and
        tick those lines before anything leaves the team. Analysis it can
        trace, you can trust.
      </p>

      <h2>What are Claude skills, and should a CFO write them?</h2>
      <p>
        Skills are folders of instructions, scripts and files that Claude
        loads when a task needs them. Anthropic launched them in October 2025.
        A CFO should write the first one, because it holds the rules only
        finance knows: the chart of accounts, materiality, the close calendar
        and what never goes in. It takes about 2 hours, and it stops every
        person writing their own prompt every month.
      </p>

      <h2>Should a finance team use Claude Cowork or Claude Code?</h2>
      <p>
        Use Cowork when a person hands off a task and reviews the result, like
        turning 40 supplier statements in a folder into one reconciliation
        sheet. Use Claude Code when the job runs on a schedule with nobody
        watching, like overnight bank matching. Most finance teams I work with
        start in Cowork for 30 days and move the jobs that repeat every day
        into scheduled agents.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we write your rulebook skill, and by the next
        close the bank matching agent is running read only. If you&apos;re
        still choosing a tool, read{" "}
        <Link href="/blog/chatgpt-for-cfos">ChatGPT for CFOs</Link> first, and
        for the full build order see{" "}
        <Link href="/blog/ai-agents-for-finance">the first five finance agents</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. Which part of
        your close would you hand to Claude first? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
