import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "chatgpt-for-cfos";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-17";
const MOD = "2026-10-17";
const TITLE = "ChatGPT for CFOs: What It Is Good For and What Never Goes In";
const DESC =
  "What a CFO should use ChatGPT for (board and investor drafts, formula checks, contract summaries, pressure testing a decision) and the five things that never go in: personal data, price sensitive numbers, bank and customer details, credentials, and any figure nobody has tied back to the ledger.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-pick-office-talking-v3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for chatgpt for cfos: what it is good for and what never goes in";

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
  "ChatGPT is good for a CFO's words and checks: first drafts of board commentary and investor updates, explaining and fixing spreadsheet formulas, summarising contracts and long documents, and arguing against a decision before you take it. Five things never go in: personal data like payroll, price sensitive numbers before they're public, bank and customer details, passwords and keys, and any figure that leaves the building before a person has tied it back to the ledger.";

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
        { "@type": "Thing", name: "ChatGPT for CFOs" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ChatGPT good for as a CFO, and what should never go into it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What are the best ChatGPT prompts for a CFO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The prompts that work give it a role, the material and the shape of the answer. Paste last month's commentary and this month's variances, then ask for the same structure in under 300 words. Paste a formula and ask what it does, line by line. Paste your decision memo and ask for the three strongest objections a non-executive director would raise. A one line prompt with no material gets a generic answer.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to put financial data into ChatGPT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a personal account, treat it as leaving the company. Use a business or enterprise plan whose terms say in writing that your inputs aren't used for training, and read that clause yourself. That's the only kind of account I let a finance team use. Even then, aggregated management numbers are fine and the five red items are not: personal data, price sensitive results, bank and customer details, credentials and unchecked figures.",
          },
        },
        {
          "@type": "Question",
          name: "Should a CFO use ChatGPT or Claude?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For drafting and checking, either works, and the plan and the rules matter more than the brand. I build my finance agents on Claude because they run on a schedule against the ledger with a rules file loaded every time. For a CFO starting out, pick the one your company already pays for on a business plan and use it every day for a month.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption: PORTRAIT_ALT,
      name: "Hayat Amin, London",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, ChatGPT for CFOs, ChatGPT for finance, AI for CFOs, AI coach for CFOs, AI-native CFO, London",
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
        { label: "ChatGPT for CFOs" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>ChatGPT for CFOs: What It Is Good For and What Never Goes In</h1>
      <p className="op-lede">
        ChatGPT is good for a CFO&apos;s words and checks: first drafts of
        board commentary and investor updates, explaining and fixing
        spreadsheet formulas, summarising contracts and long documents, and
        arguing against a decision before you take it. Five things never go
        in: personal data like payroll, price sensitive numbers before
        they&apos;re public, bank and customer details, passwords and keys,
        and any figure that leaves the building before a person has tied it
        back to the ledger.
      </p>

      <h2>The two ways finance teams get ChatGPT wrong</h2>
      <p>
        The first is the ban. A CFO sends a memo saying nobody uses it, and
        within a month half the team is pasting supplier lists into a free
        personal account on their phone. A ban
        doesn&apos;t stop the use. It stops you seeing it.
      </p>
      <p>
        The second is using it as a calculator. Someone exports 4,000 ledger
        lines, pastes them in and asks for the gross margin by product. The
        answer comes back in 10 seconds, it looks right, and nobody can say
        how it was worked out. If that number reaches a board pack and
        it&apos;s wrong, you&apos;ve lost the board&apos;s trust in every AI
        number for a year. A chat window is a drafting tool. Your ledger is
        the calculator.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-pick-office-talking-v3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs AI inside finance teams and
          coaches CFOs one to one on how to use it.
        </figcaption>
      </figure>

      <h2>The one page list I give every finance team</h2>
      <p>
        Before anyone types a prompt, the team gets one page with three
        columns. It takes about an hour to agree with the controller and the
        head of FP&amp;A, and it replaces the memo.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Use freely</th>
            <th style={th}>Use with a check</th>
            <th style={th}>Never goes in</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Rewriting your own board commentary</td>
            <td style={td}>Summarising a customer contract</td>
            <td style={td}>Payroll, salaries, anything naming a person</td>
          </tr>
          <tr>
            <td style={td}>Explaining a formula or a macro</td>
            <td style={td}>Aggregated management accounts</td>
            <td style={td}>Results, deals or guidance before they&apos;re public</td>
          </tr>
          <tr>
            <td style={td}>Drafting a policy or a process note</td>
            <td style={td}>Variance explanations from your own notes</td>
            <td style={td}>Bank account numbers, card and customer details</td>
          </tr>
          <tr>
            <td style={td}>Objections to a decision memo</td>
            <td style={td}>First drafts of investor updates</td>
            <td style={td}>Passwords, API keys, system logins</td>
          </tr>
          <tr>
            <td style={td}>Plain English versions of tax or IFRS notes</td>
            <td style={td}>Benchmarks and market research</td>
            <td style={{ ...td, borderBottom: "none" }}>Any number going out unchecked against the ledger</td>
          </tr>
        </tbody>
      </table>

      <h3>1. A business account before the first prompt</h3>
      <p>
        Personal accounts are out from day one. Buy a business or enterprise
        plan, read the clause on training in its terms yourself, and make
        sure it says your inputs aren&apos;t used. You also want one admin
        who can see who has a seat. For a 12 person finance
        team that&apos;s 12 seats on one invoice. Buy them before the ban
        memo would have gone out.
      </p>

      <h3>2. The red column is a hard line</h3>
      <p>
        If you&apos;re listed, price sensitive results and deal terms
        don&apos;t go in until they&apos;re announced, whatever the plan
        says. I&apos;ve been through 3 FT100 listings and the rule I
        took from them still holds: if you wouldn&apos;t email it to an
        outside adviser without an NDA, it doesn&apos;t go in a chat window.
        Payroll is the one people slip on, because it&apos;s just a
        spreadsheet. It isn&apos;t. It&apos;s personal data, and UK GDPR
        cares where it went.
      </p>

      <h3>3. Every number is tied back before it leaves</h3>
      <p>
        ChatGPT can write a sentence about a number. It can&apos;t be the
        source of one. The rule I use is plain: any figure that reaches a
        board pack, a bank, an investor or HMRC is ticked against the ledger
        or the bank by a named person. A draft paragraph with 6 numbers in it
        gets 6 ticks. That takes 5 minutes and it&apos;s the cheapest control
        in the department.
      </p>

      <h3>4. Five tasks, 30 days, then decide</h3>
      <p>
        Don&apos;t roll it out to everything. Pick 5 tasks from the left
        column, one per person, and run them for 30 days. My usual 5 are
        month end commentary, the investor update draft, formula checks on
        the forecast model, contract summaries for the controller, and a
        devil&apos;s advocate pass on any spend over your approval limit.
        At day 30, ask each person how many hours it saved and keep the ones
        that saved more than 2 a week.
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
        I use a chat window every day, mostly for the writing. In a sale
        process or a board cycle, the slow part is turning numbers you already
        trust into words a buyer or a board will read. That&apos;s where chat
        earns its seat. The numbers themselves come from the
        ledger, and inside the companies I run they come from agents that
        read it overnight, like the one that posts a cash runway figure
        before the finance team logs in. Chat drafts the paragraph about the
        runway. It never calculates it.
      </p>
      <p>
        The CFOs I coach usually move through it in that order: 30 days of
        chat for drafting, then the first agent that reads the ledger on a
        schedule. Skipping the first month is how you end up with an agent
        nobody on the team trusts.
      </p>

      <h2>What are the best ChatGPT prompts for a CFO?</h2>
      <p>
        The prompts that work give it a role, the material and the shape of
        the answer. Paste last month&apos;s commentary and this month&apos;s
        variances, then ask for the same structure in under 300 words. Paste
        a formula and ask what it does, line by line. Paste your decision
        memo and ask for the three strongest objections a non-executive
        director would raise. A one line prompt with no material gets a
        generic answer.
      </p>

      <h2>Is it safe to put financial data into ChatGPT?</h2>
      <p>
        On a personal account, treat it as leaving the company. Use a business
        or enterprise plan whose terms say in writing that your inputs
        aren&apos;t used for training, and read that clause yourself.
        That&apos;s the only kind of account I let a finance team use. Even then, aggregated management numbers are fine and the
        five red items are not: personal data, price sensitive results, bank
        and customer details, credentials and unchecked figures.
      </p>

      <h2>Should a CFO use ChatGPT or Claude?</h2>
      <p>
        For drafting and checking, either works, and the plan and the rules
        matter more than the brand. I build my finance agents on Claude
        because they run on a schedule against the ledger with a rules file
        loaded every time. For a CFO starting out, pick the one your company
        already pays for on a business plan and use it every day for a month.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        We write your one page list in the first session, pick the 5 tasks,
        and at day 30 we decide which one becomes your first agent. If
        you&apos;re ready for that step, read{" "}
        <Link href="/blog/ai-agents-for-finance">the first five finance agents</Link>
        , and if you want the learning order first, start with{" "}
        <Link href="/blog/ai-training-for-cfos">AI training for CFOs</Link>.
        The full map is at <Link href="/ai-for-cfos">AI for CFOs</Link>, what
        the end state looks like is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the
        sessions are at <Link href="/coach">coaching for CFOs</Link>. What
        would go in your red column that isn&apos;t on mine? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
