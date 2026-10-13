import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-training-for-cfos";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-13";
const MOD = "2026-10-13";
const TITLE = "AI Training for CFOs: What to Learn, in What Order";
const DESC =
  "AI training for a CFO is five things learned in order over about 12 weeks: the data rules, daily use of one model on your own numbers, a written rulebook the model loads, one scheduled agent with read access, and the controls and costs around it. Train on your own ledger, not sample data, at 3 to 4 hours a week.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-pick2-office-confident-charcoaltee.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for ai training for cfos: what to learn, in what order";

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
  "A CFO needs five pieces of AI training, in this order: the rules on what data goes into a model, daily use of one model on your own numbers, writing a rulebook the model loads every time, building one scheduled agent with read access to the ledger, and the controls and cost caps that sit around it. Do it on your own close and your own board pack, not on sample data, and it takes about 12 weeks at 3 to 4 hours a week to have one agent running.";

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
        { "@type": "Thing", name: "AI training for CFOs" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What AI training does a CFO need, and in what order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI course for a CFO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The one that runs on your own numbers and ends with something live. Judge any course or coach on three tests: you work on your own ledger and board pack from week one, you finish with a scheduled agent doing a real finance task, and someone checks its output against the books with you. A course that teaches tools on sample data passes none of them.",
          },
        },
        {
          "@type": "Question",
          name: "Do CFOs need to learn to code to use AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A CFO needs to read a run log, edit a plain text rules file and check a model's answer against the ledger. That's the same skill set as reviewing a reconciliation. Code matters once an agent sits inside your own product or runs at volume, and by then you hire one engineer part time to own it.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take a CFO to learn AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About 12 weeks to one agent running on a real finance task, at 3 to 4 hours a week. The first 2 weeks are the data rules and daily use. Weeks 3 to 8 are the rulebook and checking output. Weeks 9 to 12 are the first agent in shadow. Teaching your team takes another quarter.",
          },
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
      keywords: "Hayat Amin, AI training for CFOs, AI course for CFO, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
        { label: "AI Training for CFOs" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Training for CFOs: What to Learn, in What Order</h1>
      <p className="op-lede">
        A CFO needs five pieces of AI training, in this order: the rules on
        what data goes into a model, daily use of one model on your own
        numbers, writing a rulebook the model loads every time, building one
        scheduled agent with read access to the ledger, and the controls and
        cost caps that sit around it. Do it on your own close and your own
        board pack, not on sample data, and it takes about 12 weeks at 3 to 4
        hours a week to have one agent running.
      </p>

      <h2>Why most CFO AI training changes nothing in the close</h2>
      <p>
        Most CFOs I coach have already done a course. I ask one question: what
        changed in your month end afterwards? The usual answer is nothing. The
        course ran on a sample company, the exercises were prompts about
        imaginary invoices, and on Monday they went back to a 9 day close with
        the same spreadsheets.
      </p>
      <p>
        The second mistake is the order. People start with the clever part,
        building agents, before they've decided what data is allowed into a
        model. Then someone on the team pastes the payroll file into a free
        chat account, the audit committee hears about it, and AI gets banned
        in finance for a year. Learn the rules first and the rest is safe to
        try.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-pick2-office-confident-charcoaltee.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He coaches CFOs one to one on building AI into
          finance operations, and runs the agents himself inside companies.
        </figcaption>
      </figure>

      <h2>The 12 week order I use with a CFO</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Stage</th>
            <th style={th}>Weeks</th>
            <th style={th}>What you learn</th>
            <th style={th}>Proof you have it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>1. Data rules</td>
            <td style={td}>1</td>
            <td style={td}>What may go into which model, on which plan</td>
            <td style={td}>A one page policy your team has read</td>
          </tr>
          <tr>
            <td style={td}>2. Daily use</td>
            <td style={td}>1 to 4</td>
            <td style={td}>One model on your own numbers, every day</td>
            <td style={td}>20 real finance tasks done with it</td>
          </tr>
          <tr>
            <td style={td}>3. The rulebook</td>
            <td style={td}>3 to 8</td>
            <td style={td}>Writing rules the model loads, and checking its answers</td>
            <td style={td}>Variance commentary you'd send with light edits</td>
          </tr>
          <tr>
            <td style={td}>4. One agent</td>
            <td style={td}>9 to 12</td>
            <td style={td}>A scheduled run with read access to the ledger</td>
            <td style={td}>4 weeks in shadow at 95% agreement</td>
          </tr>
          <tr>
            <td style={td}>5. Controls and cost</td>
            <td style={td}>12 on</td>
            <td style={td}>Sign-off points, logs, run and token caps</td>
            <td style={{ ...td, borderBottom: "none" }}>An auditor could follow every action</td>
          </tr>
        </tbody>
      </table>

      <h3>1. The data rules, before any tool</h3>
      <p>
        Spend the first week on one page, not on prompts. It says which data
        can go into a model and on which plan: public filings anywhere, your
        own management accounts only on a business plan where the provider
        doesn't train on your inputs, payroll and personal data nowhere until
        you've had legal sign it off. I write this with the CFO in about 2
        hours. It's the page that lets the team say yes to everything else.
      </p>

      <h3>2. Daily use of one model on your own numbers</h3>
      <p>
        Pick one model, Claude or ChatGPT, and use it every working day for 4
        weeks. Use it on real work: last month's variance analysis, a first
        draft of the board pack narrative, a lender covenant you need to
        reread. I set a target of 20 real tasks. By task 20 you know where it
        saves an hour and where it makes up a number. You can't learn that
        from a course.
      </p>

      <h3>3. Write the rulebook, then check every answer</h3>
      <p>
        This is the skill that separates a CFO who uses AI from one who runs
        it. You write down what the model needs every time: the chart of
        accounts, your materiality threshold, how you describe a variance to
        this board, the five words the chair hates. It goes in a project or
        a rules file the model loads on every run. Then you check its output
        the way you'd check a junior's reconciliation, line by line against
        the ledger. Expect the first drafts to need 30 to 40 minutes of edits.
        By week 8 it should be under 10.
      </p>

      <h3>4. Build one agent, read only</h3>
      <p>
        Now you build. One agent, one task, on a schedule. My usual first one
        matches the bank feed to open invoices overnight and leaves a list of
        what it couldn't match. It reads the ledger and the bank, it writes
        nothing back. Run it in shadow for 4 weeks next to the person who does
        the job today. I want 95% agreement over 2 straight weeks before it
        posts anything. You don't need to write code for this. You need to
        read a log and edit a text file.
      </p>

      <h3>5. Controls and cost</h3>
      <p>
        The last piece is the one your auditor will ask about. Which actions
        does a person sign off? Where is the log of what the agent did and
        why? What's the weekly cap on runs and tokens, and who can raise it?
        My rule is that an agent prepares a payment and a named person
        releases it, and that line doesn't move after 6 good months. Once you
        can answer all of that, you're ready to teach your team, which takes
        another quarter.
      </p>

      <h2>From my operating seat</h2>
      <p>
        I'm Hayat Amin, an AI-native CFO, AI operator and AI coach for CFOs
        who teaches finance leaders how to build AI into finance operations.
        I spent twenty years in the C-suite, with three exits and three FT100
        listings. Now I build and run AI agent systems inside companies,
        across finance, sales pipeline, onboarding and compliance evidence,
        and I coach CFOs one to one on the same work.
      </p>
      <p>
        I teach it in this order because each stage needs the one before it.
        Inside one client I run, an agent posts a live cash runway figure
        before the finance team logs in each morning. I don't let anyone rely
        on that figure until they've checked it against the bank every morning
        for 4 weeks. That's the training: your numbers, your rules, and a
        check you'd sign.
      </p>

      <h2>What is the best AI course for a CFO?</h2>
      <p>
        The one that runs on your own numbers and ends with something live.
        Judge any course or coach on three tests: you work on your own ledger
        and board pack from week one, you finish with a scheduled agent doing
        a real finance task, and someone checks its output against the books
        with you. A course that teaches tools on sample data passes none of
        them.
      </p>

      <h2>Do CFOs need to learn to code to use AI?</h2>
      <p>
        No. A CFO needs to read a run log, edit a plain text rules file and
        check a model's answer against the ledger. That's the same skill set
        as reviewing a reconciliation. Code matters once an agent sits inside
        your own product or runs at volume, and by then you hire one engineer
        part time to own it.
      </p>

      <h2>How long does it take a CFO to learn AI?</h2>
      <p>
        About 12 weeks to one agent running on a real finance task, at 3 to 4
        hours a week. The first 2 weeks are the data rules and daily use.
        Weeks 3 to 8 are the rulebook and checking output. Weeks 9 to 12 are
        the first agent in shadow. Teaching your team takes another quarter.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs. We start with your data rules, use
        your last close as the training set, and finish with one agent running
        on your ledger that you've checked yourself. The full map is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, what the end state looks
        like is at <Link href="/ai-native-cfo">the AI-native CFO</Link>, and
        the one to one sessions are at{" "}
        <Link href="/coach">coaching for CFOs</Link>. Which part of your close
        would you want an agent on first? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
