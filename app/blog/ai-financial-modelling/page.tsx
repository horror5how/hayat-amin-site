import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-financial-modelling";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-12";
const MOD = "2026-11-12";
const TITLE = "AI Financial Modelling: Where It Helps and Where It Lies";
const DESC =
  "Where AI helps in financial modelling and where it lies: let it build the structure from a one page spec, write and audit formulas, draft the assumptions book and run scenarios on a copy, but never let it supply an assumption without a source or do arithmetic in chat. Four checks before anyone opens the file, and a 12 month backtest before the board sees it.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look5-sidelight-4.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for ai financial modelling: where it helps and where it lies";

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
  "AI helps in financial modelling when it builds the structure, writes and audits the formulas and drafts the assumptions book, while every input comes from a source you can name and every sum is done by the spreadsheet. It lies when you let it invent an assumption or do arithmetic in a chat window, so I give it a copy of the model, a one page spec and 4 checks it must pass before anyone opens the file.";

const FAQ_EXCEL =
  "Yes, and Excel is where I'd keep it. Give the AI a one page spec and it will lay out the tabs, the time axis and the formulas for a 3 statement model in about an hour, against 2 to 3 days by hand. It still gets 1 or 2 links wrong in most builds, so the balance check, the cash tie out and a person reading every formula on the input and output tabs stay in place.";

const FAQ_CLAUDE =
  "Claude can build one, and it is the model I use most for this work because it reads a long workbook and explains it back well. Give it the spec and a copy of the file, never the live one. Ask it to write formulas, not values, and to list every cell it changed. If it hands you a finished number in the chat, rebuild that number in the sheet before you trust it.";

const FAQ_JOBS =
  "It will replace the typing, not the judgement. The hours an analyst spends wiring tabs, fixing ranges and formatting will drop by half or more inside 2 years in most finance teams I see. The person who decides what growth rate is defensible, who signs the model a lender relies on and who answers the buyer's questions in due diligence is still needed, and is worth more.";

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
        { "@type": "Thing", name: "AI financial modelling" },
        { "@type": "Thing", name: "Three statement financial model" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does AI help in financial modelling, and where does it get it wrong?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "Can AI build a financial model in Excel?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_EXCEL },
        },
        {
          "@type": "Question",
          name: "Can Claude build a financial model?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_CLAUDE },
        },
        {
          "@type": "Question",
          name: "Will AI replace financial modelling jobs?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_JOBS },
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
      keywords: "Hayat Amin, AI financial modelling, financial model, three statement model, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
        { label: "AI Financial Modelling" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Financial Modelling: Where It Helps and Where It Lies</h1>
      <p className="op-lede">
        AI helps in financial modelling when it builds the structure, writes
        and audits the formulas and drafts the assumptions book, while every
        input comes from a source you can name and every sum is done by the
        spreadsheet. It lies when you let it invent an assumption or do
        arithmetic in a chat window, so I give it a copy of the model, a one
        page spec and 4 checks it must pass before anyone opens the file.
      </p>

      <h2>Why most AI models fail the first review</h2>
      <p>
        The common first try is a prompt like &quot;build me a 5 year model
        for a 120 person SaaS company&quot;. Ten minutes later there&apos;s a
        tidy workbook with 30% growth, 8% churn and a 72% gross margin. Nobody
        asked where those numbers came from. The model picked figures that
        look like a SaaS company, and they look right because they&apos;re
        average. Your company isn&apos;t average, and a lender or a buyer will
        ask for the source of each one in the first hour.
      </p>
      <p>
        The second failure is quieter. Someone pastes 36 months of revenue
        into a chat and asks for the total or the growth rate. The answer
        comes back to the decimal place, and it&apos;s wrong often enough
        that I never use one. A language model predicts the next
        word. It doesn&apos;t add. When a wrong total goes into a board deck,
        the CFO loses more trust in one meeting than the AI saved in a
        quarter.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look5-sidelight-4.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds AI into finance teams&apos; models
          and forecasts, and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five rules I use for AI in a financial model</h2>

      <h3>1. Write a one page spec before the AI touches anything</h3>
      <p>
        The spec says what the model is for, who reads it and what decision it
        supports. Then it lists the tabs, the time axis (monthly for 24
        months, then annual to year 5 is my default), the revenue drivers by
        name, the cost lines and the 3 outputs that matter, usually cash
        low point, EBITDA and covenant headroom. It takes me 45 minutes with
        the CFO. Without it, the AI designs the model it has seen most often,
        and you spend 2 days pulling it back to your business.
      </p>

      <h3>2. Let the AI build structure and formulas, never values</h3>
      <p>
        This is where it earns its place. From the spec it lays out the
        inputs tab, the calculation tabs and the 3 statements, and writes
        every formula, in about an hour against 2 to 3 days by hand. The rule
        is strict: it writes formulas that point at input cells, and it
        types no number into a calculation cell. Every hardcode it adds goes
        on the inputs tab with a label, and it lists every cell it changed at
        the end of each session.
      </p>

      <h3>3. Every assumption carries a source and an owner</h3>
      <p>
        The assumptions book is a table: the input, its value, where it came
        from and the person who signs it off. The AI drafts this table well.
        It reads the last 24 months of the ledger, the CRM and the payroll
        file, and proposes each value with the query behind it. What it may
        not do is fill a gap with a plausible guess. If there&apos;s no
        source, the cell says &quot;owner to set&quot; and turns red. In a
        typical build that&apos;s 6 to 10 inputs, and they&apos;re the ones
        the CFO should be thinking about anyway.
      </p>

      <h3>4. Run 4 checks before a person opens the file</h3>
      <p>
        The balance sheet balances in every period. Opening cash ties to the
        bank to the penny. The last 12 actual months rebuild to the
        management accounts within 1%. No formula on a calculation tab
        contains a typed number. The AI runs these and reports pass or fail
        with the cell reference. If any fail, it fixes and reruns, and it
        never adds a plug line to make the balance sheet close. A plug is how
        a model lies in a way nobody spots until due diligence.
      </p>

      <h3>5. Use it hardest on review and scenarios</h3>
      <p>
        The best use I&apos;ve found is the model you inherited. Give the AI
        a 40 tab workbook and it will map every input to every output, find
        ranges that stop one row short and explain the logic in plain English
        in an afternoon. Scenarios work the same way. It runs downside, base
        and upside on a copy, changes only the inputs you name, and writes
        one paragraph on what moved the cash low point. The live model never
        changes without a person.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Modelling task</th>
            <th style={th}>AI&apos;s role</th>
            <th style={th}>Where it lies</th>
            <th style={th}>Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Structure and tabs</td>
            <td style={td}>Builds from the spec</td>
            <td style={td}>Copies a generic layout</td>
            <td style={td}>Spec signed before the build</td>
          </tr>
          <tr>
            <td style={td}>Formulas</td>
            <td style={td}>Writes all of them</td>
            <td style={td}>1 or 2 broken links per build</td>
            <td style={td}>Balance and cash tie out every period</td>
          </tr>
          <tr>
            <td style={td}>Assumptions</td>
            <td style={td}>Drafts from ledger and CRM</td>
            <td style={td}>Invents a typical number</td>
            <td style={td}>Source and owner on every input</td>
          </tr>
          <tr>
            <td style={td}>Arithmetic</td>
            <td style={td}>None, the sheet does it</td>
            <td style={td}>Wrong totals in chat</td>
            <td style={td}>Rebuild any chat number in the sheet</td>
          </tr>
          <tr>
            <td style={tdLast}>Review and scenarios</td>
            <td style={tdLast}>Maps, explains, runs copies</td>
            <td style={tdLast}>Rarely, if it can&apos;t edit</td>
            <td style={tdLast}>Live model changed by a person only</td>
          </tr>
        </tbody>
      </table>

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
        In a sale process, a buyer&apos;s team asks about the
        model&apos;s assumptions far more than its formulas. Every growth rate
        has to trace to a contract, a pipeline report or a cohort. That&apos;s
        why I run the assumptions book as a source table. In the setup I
        build, the AI rebuilds the 24 month model each month from the closed
        ledger, flags any input that drifted more than 10% from actuals, and
        the CFO decides whether to change it. The model got faster to build.
        The judgement stayed with a person who signs it.
      </p>

      <h2>Can AI build a financial model in Excel?</h2>
      <p>{FAQ_EXCEL}</p>

      <h2>Can Claude build a financial model?</h2>
      <p>{FAQ_CLAUDE}</p>

      <h2>Will AI replace financial modelling jobs?</h2>
      <p>{FAQ_JOBS}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we write the spec and the assumptions table for
        the model you rely on most, and within 2 weeks the AI is rebuilding it
        on a copy with the 4 checks running. The forecasting side is in{" "}
        <Link href="/blog/ai-financial-forecasting">AI financial forecasting</Link>,
        the commentary that sits on top is in{" "}
        <Link href="/blog/ai-fp-and-a">AI for FP&amp;A</Link>, and the cash
        view it feeds is in{" "}
        <Link href="/blog/ai-cash-flow-forecasting">AI cash flow forecasting</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. Which input in
        your model has no source written next to it? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
