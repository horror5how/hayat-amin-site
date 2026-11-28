import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-finance-stack";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-28";
const MOD = "2026-11-28";
const TITLE = "The CFO's AI Stack in 2026: Ledger First, Model Second";
const DESC =
  "A CFO's AI stack in 2026 has five layers, built in this order: a clean ledger, read only access to it, one approved model workspace, a few agents with named owners, and a log under all of it. Buy the model first and it fails on a ledger with 400 unmatched lines. The gates, the tools and what it costs a 100 person company. By Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-dubai-2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for the cfo's ai stack in 2026: ledger first, model second";

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
  "A CFO's AI stack in 2026 has five layers, built in this order: a clean ledger, read only access to it, one approved model workspace, a few agents with named owners, and a log under all of it. The model is the cheapest and least important layer, so I don't buy it until the ledger has had its first 60 days of work.";

const FAQ_TOOLS =
  "Fewer than the vendors tell you. A ledger you already own, such as Xero, NetSuite or Sage Intacct. A read only route into it, which can be the ledger's own API or a nightly copy into a warehouse. One business model workspace, Claude or ChatGPT on a team or enterprise plan, behind your company login. Then 1 to 5 agents built on top. Most finance teams I meet are paying for 3 or 4 AI add-ons they could cancel.";

const FAQ_BEST =
  "The one your ledger can talk to and your IT team can put behind single sign on. I use Claude for most finance drafting because it handles long documents like contracts and board packs well, and I compare the two in my Claude for finance piece. The choice matters less than people think. A good model on a messy ledger gives wrong answers in good English.";

const FAQ_COST =
  "In the 100 person companies I work with, the AI layers add £1,500 to £4,000 a month on top of the ledger. Model seats for the finance team are £25 to £60 each a month, agent usage runs a few hundred pounds, and a warehouse, if you need one, starts around £300. The bigger cost is the 40 to 80 hours of clean up on the ledger before any of it works.";

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
        { "@type": "Thing", name: "AI finance stack" },
        { "@type": "Thing", name: "AI tools for CFOs" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should a CFO's AI stack look like in 2026?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "What AI tools does a CFO need?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_TOOLS },
        },
        {
          "@type": "Question",
          name: "What is the best AI for finance and accounting?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_BEST },
        },
        {
          "@type": "Question",
          name: "How much does an AI finance stack cost a 100 person company?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_COST },
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
      keywords: "Hayat Amin, AI finance stack, AI tools for CFOs, finance systems, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
        { label: "The CFO's AI Stack" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>The CFO&apos;s AI Stack in 2026: Ledger First, Model Second</h1>
      <p className="op-lede">
        A CFO&apos;s AI stack in 2026 has five layers, built in this order: a
        clean ledger, read only access to it, one approved model workspace, a
        few agents with named owners, and a log under all of it. The model is
        the cheapest and least important layer, so I don&apos;t buy it until
        the ledger has had its first 60 days of work.
      </p>

      <h2>Why most finance AI stacks are built upside down</h2>
      <p>
        I see the same order in nearly every finance team I&apos;m asked into.
        Someone buys model seats for the whole team. Then a forecasting add-on,
        then an AP tool with AI in the name, then a board pack plugin. Four
        subscriptions in, the CFO asks the model what cash will look like in
        March and gets a confident answer built on a bank account with 400
        unmatched lines.
      </p>
      <p>
        The model didn&apos;t fail. It read what was there. If the chart of
        accounts has 900 codes, 3 of them called &quot;sundry&quot;, and
        the close takes 15 working days, every AI tool on top inherits that
        mess and writes it up in good English. I&apos;ve watched companies
        spend £30,000 a year on AI add-ons and still close the month by hand,
        because nothing underneath was ready to be read.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-portrait-dubai-2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds AI into finance operations from the
          ledger up and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five layers, in the order I build them</h2>
      <p>
        Each layer has a gate. I don&apos;t start the next one until the gate
        is passed, and in a 100 person company the whole stack takes 4 to 6
        months to stand up properly.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Layer</th>
            <th style={th}>What it is</th>
            <th style={th}>Gate before the next layer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>1. Ledger</td>
            <td style={td}>Xero, NetSuite, Sage Intacct or similar</td>
            <td style={td}>Close in 10 working days or fewer, no unmatched bank lines over 30 days old</td>
          </tr>
          <tr>
            <td style={td}>2. Access</td>
            <td style={td}>Read only API user, or a nightly copy to a warehouse</td>
            <td style={td}>The 20 board pack numbers come out of saved queries, not spreadsheets</td>
          </tr>
          <tr>
            <td style={td}>3. Model</td>
            <td style={td}>One business workspace, Claude or ChatGPT, behind company login</td>
            <td style={td}>Every finance user on it, no personal accounts, data classes written down</td>
          </tr>
          <tr>
            <td style={td}>4. Agents</td>
            <td style={td}>Bank match, commentary, collections, board pack draft</td>
            <td style={td}>One agent stable for 30 days before the next goes live</td>
          </tr>
          <tr>
            <td style={tdLast}>5. Log</td>
            <td style={tdLast}>Every input, output and approval, kept 12 months</td>
            <td style={tdLast}>Any number traces back to its source in under 5 minutes</td>
          </tr>
        </tbody>
      </table>

      <h3>1. The ledger is the stack</h3>
      <p>
        I spend the first 30 to 60 days here and nowhere else. I cut the chart
        of accounts to under 200 codes, give every entity the same mapping,
        and clear the bank reconciliation to zero. I also write down the 6 or
        7 judgements the team makes every month, such as accrual cut off and
        how prepayments are spread, because an agent can only follow rules
        that exist on paper. This usually takes 40 to 80 hours of a
        controller&apos;s time. It&apos;s the best money in the whole build.
      </p>

      <h3>2. A read only door into it</h3>
      <p>
        Agents and models never log in as a person. I set up a separate read
        only user on the ledger&apos;s API, and where there are 2 or more
        ledgers or a CRM to join in, a nightly copy into a small warehouse.
        Then I write saved queries for the 20 numbers the board looks at
        every month. Once revenue, gross margin, cash and debtor days come out
        of a query, the model can quote them and never has to work them out.
      </p>

      <h3>3. One model workspace, bought only after layer 2</h3>
      <p>
        One company workspace, on a business plan that doesn&apos;t train on
        your data, behind single sign on. I don&apos;t run two. Every extra
        tool is another place restricted data can leak to and another login
        to audit. The model drafts, reads contracts, writes commentary and
        explains variances. It doesn&apos;t do the sums, because the sums
        already came out of layer 2. The rules for what goes in are in{" "}
        <Link href="/blog/chatgpt-for-cfos">ChatGPT for CFOs</Link>.
      </p>

      <h3>4. A small number of agents with names on them</h3>
      <p>
        I start with the bank match, because it runs every day and the result
        is easy to check. Then variance commentary, then the collections
        chaser, then the board pack draft. One goes live, runs 30 days without
        a correction the owner had to make twice, and then the next one
        starts. By month 6 most clients have 3 to 5. The build order for the
        first five is in{" "}
        <Link href="/blog/ai-agents-for-finance">AI agents for finance</Link>.
      </p>

      <h3>5. The log under everything</h3>
      <p>
        Every agent run writes what it read, what it proposed, who approved it
        and when. I keep that for 12 months at minimum. It&apos;s what lets
        an auditor or a buyer&apos;s diligence team pick any journal and follow
        it to the bank line in 5 minutes. The four rules it sits under are in{" "}
        <Link href="/blog/ai-finance-governance">AI governance for finance</Link>.
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
        When I sold my last company, the diligence team asked for the same
        30 numbers in four different cuts, and we rebuilt each one by hand.
        Today, inside one client, a single read only user feeds every agent.
        The bank match runs at 5am, the live cash runway lands in the
        CFO&apos;s inbox before 7, and the controller approves the
        day&apos;s journals at 9. The model on top of that could be swapped
        in an afternoon. Rebuilding the ledger underneath took 7 weeks.
      </p>

      <h2>What AI tools does a CFO need?</h2>
      <p>{FAQ_TOOLS}</p>

      <h2>What is the best AI for finance and accounting?</h2>
      <p>
        The one your ledger can talk to and your IT team can put behind single
        sign on. I use Claude for most finance drafting because it handles
        long documents like contracts and board packs well, and I compare the
        two in{" "}
        <Link href="/blog/claude-for-finance">Claude for finance teams</Link>.
        The choice matters less than people think. A good model on a messy
        ledger gives wrong answers in good English.
      </p>

      <h2>How much does an AI finance stack cost a 100 person company?</h2>
      <p>{FAQ_COST}</p>

      <h2>Where I come in</h2>
      <p>
        This is the stack I build inside finance teams and teach CFOs to build
        themselves. In the first session we score your ledger against the
        layer 1 gate, and you leave with the clean up list and the order of
        the next four layers. What the stack does at month end is in{" "}
        <Link href="/blog/ai-month-end-close">AI month end close</Link>. The
        map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. How many unmatched
        bank lines are sitting in your ledger today? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me the number.
      </p>
    </PageShell>
  );
}
