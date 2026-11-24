import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-finance-governance";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-24";
const MOD = "2026-11-24";
const TITLE = "AI Governance for Finance: The Four Rules and the Policy Page";
const DESC =
  "AI governance for a finance team comes down to four rules and one page: every AI use has a named owner, restricted data never leaves the approved tools, the model never posts, pays or does the arithmetic, and every output carries its source and a log kept for 12 months. The policy page fits on one side of A4 and gets reviewed every quarter.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-picture-use-this-a-lot-its-nice.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for ai governance for finance: the four rules and the policy page";

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
  "AI governance for a finance team is four rules: every AI use has a named owner, restricted data stays inside the tools you've approved, the model never posts, pays or does the arithmetic, and every output carries its source and a log you keep for 12 months. Write those four rules on one page, put a name next to each, and review it every quarter, and you've got more working governance than most 50 page frameworks deliver.";

const FAQ_POLICY =
  "Six things, on one side of A4. The approved tools and the account each one runs under. The four data classes and which tools each class may enter. The list of actions no AI takes, which is posting, paying, filing and sending outside the company. Who owns each AI use. Where the logs live and for how long. Who reviews the page, and on what date. If it runs past one page, people stop reading it by month two.";

const FAQ_OWNER =
  "The CFO owns the page and signs it. Each AI use under it has its own owner, usually the person who owned that process before the AI arrived: the financial controller for the bank match, the FP&A lead for commentary, the credit controller for collections chasers. IT owns the accounts and access. A steering committee owns nothing, because when 6 people share a risk nobody fixes it on a Tuesday.";

const FAQ_AUDIT =
  "Hand them the log, not a slide. For every AI output that touched the books I keep the input, the source records it read, what it proposed, who approved it and when. An auditor can pick any journal or reconciliation and follow it back in minutes. Often the AI steps end up with a better trail than the manual ones they replaced, which usually have none.";

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
        { "@type": "Thing", name: "AI governance in finance" },
        { "@type": "Thing", name: "AI policy for finance teams" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does AI governance for a finance team need to cover?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "What should an AI policy for a finance team include?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_POLICY },
        },
        {
          "@type": "Question",
          name: "Who owns AI governance in the finance function?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_OWNER },
        },
        {
          "@type": "Question",
          name: "How do I show auditors what an AI agent did in finance?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_AUDIT },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption: PORTRAIT_ALT,
      name: "Hayat Amin, Dubai",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, AI governance for finance, AI policy for finance, finance controls, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
const tdLast = { ...td, borderBottom: "none" };

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "AI Governance for Finance" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Governance for Finance: The Four Rules and the Policy Page</h1>
      <p className="op-lede">
        AI governance for a finance team is four rules: every AI use has a
        named owner, restricted data stays inside the tools you&apos;ve
        approved, the model never posts, pays or does the arithmetic, and
        every output carries its source and a log you keep for 12 months.
        Write those four rules on one page, put a name next to each, and
        review it every quarter, and you&apos;ve got more working governance
        than most 50 page frameworks deliver.
      </p>

      <h2>Why finance teams get AI governance wrong</h2>
      <p>
        Most finance teams I meet sit at one of two ends. At one end there is
        no policy at all. Half the team is already pasting supplier invoices
        and payroll lines into a personal ChatGPT account, and the CFO finds
        out when someone mentions it in a month end review. At the other end
        there&apos;s a 40 page framework written by a consultant, signed by
        the audit committee and read by nobody in the team.
      </p>
      <p>
        Both end in the same place. The team uses AI with no rules, because
        the rules they were given were either missing or unreadable. The
        cost shows up 6 to 9 months later: a journal nobody can trace, a
        customer list sitting in a tool IT never approved, or a board number
        that came out of a chat window and was wrong by 3%. One of those in a
        due diligence data room costs more than every hour the AI saved.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-portrait-picture-use-this-a-lot-its-nice.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds AI into finance operations, writes the
          rules it runs under, and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The four rules I put in every finance team</h2>

      <h3>1. Every AI use has one named owner</h3>
      <p>
        I keep a register, one line per use. The bank match agent, the
        variance commentary drafter, the collections chaser, the board pack
        narrative. Each line has the tool, the account it runs under, the
        data it reads and one person&apos;s name. Usually that&apos;s whoever
        owned the process before the AI arrived, so the controller owns the
        bank match and the FP&amp;A lead owns commentary. A 100 person
        company typically has 5 to 12 lines by the end of year one. If a use
        isn&apos;t on the register, it doesn&apos;t run.
      </p>

      <h3>2. Data goes only where its class allows</h3>
      <p>
        I sort finance data into 4 classes and write down which tools each
        class may enter. Public covers the annual accounts and press
        releases. Internal covers budgets and management packs. Confidential
        covers customer and supplier ledgers and contracts. Restricted
        covers payroll, bank credentials, personal data and anything under a
        live deal NDA. Restricted data never goes into a chat tool at all. It
        stays in the ledger and the agents that read it there, under their
        own logins. The table below is the version I start from.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Class</th>
            <th style={th}>Examples</th>
            <th style={th}>Personal AI accounts</th>
            <th style={th}>Company AI workspace</th>
            <th style={th}>Agents on the ledger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Public</td>
            <td style={td}>Filed accounts, press releases</td>
            <td style={td}>Yes</td>
            <td style={td}>Yes</td>
            <td style={td}>Yes</td>
          </tr>
          <tr>
            <td style={td}>Internal</td>
            <td style={td}>Budgets, management packs</td>
            <td style={td}>No</td>
            <td style={td}>Yes</td>
            <td style={td}>Yes</td>
          </tr>
          <tr>
            <td style={td}>Confidential</td>
            <td style={td}>Customer and supplier ledgers, contracts</td>
            <td style={td}>No</td>
            <td style={td}>Named uses only</td>
            <td style={td}>Yes</td>
          </tr>
          <tr>
            <td style={tdLast}>Restricted</td>
            <td style={tdLast}>Payroll, bank logins, deal data</td>
            <td style={tdLast}>No</td>
            <td style={tdLast}>No</td>
            <td style={tdLast}>Read only, own login</td>
          </tr>
        </tbody>
      </table>

      <h3>3. The model never posts, pays, files or does the sums</h3>
      <p>
        This is the rule that keeps the books clean. An agent may read the
        ledger, match transactions, draft a journal, draft a chaser and
        draft commentary. It may not post the journal, release a payment,
        file a return or send anything outside the company without a person
        pressing the button. Every total comes from the ledger or the
        spreadsheet, never from the model, because a language model predicts
        words and gets sums wrong often enough to matter. I set the approval
        line in money too: anything over £10,000, or over 5% of the line it
        hits, goes to the owner by name rather than a shared queue.
      </p>

      <h3>4. Every output carries its source and a log</h3>
      <p>
        Each draft the AI produces points back at the records it used: the
        invoice numbers, the bank lines, the saved query behind a board
        figure. The log records what went in, what came out, who approved it
        and at what time. I keep it for 12 months as a minimum, and longer
        where the company&apos;s own record keeping rules ask for more. When
        a number is challenged, the controller can trace it in under 5
        minutes. Without the log, you&apos;re asking an auditor to trust a
        black box.
      </p>

      <h2>The policy page</h2>
      <p>
        The four rules go on one side of A4, with names. Mine has 6
        sections: approved tools and the accounts behind them, the 4 data
        classes and the table above, the list of actions no AI takes, the
        register of uses and owners, where logs live and for how long, and
        the review date. The CFO signs it. It gets reviewed every 90 days,
        and a new AI use is added by the owner writing one line and the CFO
        initialling it. That takes 10 minutes, so nobody routes round it.
      </p>
      <p>
        I&apos;d rather a finance team followed one page every day than
        filed a framework once a year. The page also answers the question
        every audit committee asks in its first meeting on AI, which is
        what you&apos;re doing and who is accountable. You hand them the
        sheet.
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
        In a sale process, the buyer&apos;s team asks how each number was
        produced as often as what it is. I wrote these rules so that question
        always has an answer. Inside one client I run an agent that
        matches every bank line at 5am and drafts the journals, and it has no
        permission to post a single one. The controller approves the batch
        at 9, and the log shows each approval with a time stamp. Any entry an
        auditor picks traces back to the bank line, the rule that matched it
        and the person who approved it.
      </p>

      <h2>What should an AI policy for a finance team include?</h2>
      <p>{FAQ_POLICY}</p>

      <h2>Who owns AI governance in the finance function?</h2>
      <p>{FAQ_OWNER}</p>

      <h2>How do I show auditors what an AI agent did in finance?</h2>
      <p>{FAQ_AUDIT}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we write the register and the data class table
        for your team, and within 2 weeks the policy page is signed and the
        first agent is running under it. The data rules for the rest of the
        company are in{" "}
        <Link href="/blog/what-data-governance-do-ai-agents-need-in-a-mid-size-company-2026-10-30">
          data governance for AI agents
        </Link>
        , what never goes into a chat tool is in{" "}
        <Link href="/blog/chatgpt-for-cfos">ChatGPT for CFOs</Link>, and the
        agent that runs under rule 3 every morning is in{" "}
        <Link href="/blog/ai-month-end-close">AI month end close</Link>. The
        map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the
        sessions are at <Link href="/coach">coaching for CFOs</Link>. Which
        AI use in your finance team has no name next to it today? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
