import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-agents-for-finance";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-15";
const MOD = "2026-10-15";
const TITLE = "AI Agents for Finance: The First Five a CFO Should Build";
const DESC =
  "The first five AI agents for a finance team, in build order: overnight bank matching, a daily cash runway figure, supplier invoice coding, collections chasers and variance commentary. Start read only, add one agent a month, and keep a named person on every payment and every number that leaves the building.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-pick-coffeeshop-candid-v2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for ai agents for finance: the first five a cfo should build";

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
  "The first five AI agents a CFO should build, in this order, are an overnight bank matching agent, a daily cash runway agent, a supplier invoice coding agent, a collections agent that drafts chasers, and a variance commentary agent for month end. Build them one a month, start with the two that only read the ledger, and keep a named person on every payment and every number that leaves the building.";

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
        { "@type": "Thing", name: "AI agents for finance" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which AI agents should a CFO build first for the finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What do AI agents do in finance and accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An agent in finance runs a task on a schedule without being asked: it reads the bank feed, the ledger or the invoice inbox, does the matching, coding or drafting a junior would do, and leaves the result plus a list of exceptions for a person. The useful ones don't chat. They run at 2am and you check their work at 8.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build finance agents with Claude?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I build most of mine on Claude, on a business plan where the provider doesn't train on your inputs. The model is the easy part. The work is the rules file it loads on every run, read access to the ledger and bank through their own connections, a schedule, and a log you'd be happy to hand an auditor.",
          },
        },
        {
          "@type": "Question",
          name: "Will AI agents replace my finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not the people who judge things. The five agents here take the matching, coding, chasing and first drafts, which is often half of a junior's week. What I build for is the same people closing faster and spending the hours on cash, pricing and the questions the board asks.",
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
      keywords: "Hayat Amin, AI agents for finance, finance AI agents, AI for CFOs, AI coach for CFOs, AI-native CFO, New York City",
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
        { label: "AI Agents for Finance" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Agents for Finance: The First Five a CFO Should Build</h1>
      <p className="op-lede">
        The first five AI agents a CFO should build, in this order, are an
        overnight bank matching agent, a daily cash runway agent, a supplier
        invoice coding agent, a collections agent that drafts chasers, and a
        variance commentary agent for month end. Build them one a month, start
        with the two that only read the ledger, and keep a named person on
        every payment and every number that leaves the building.
      </p>

      <h2>Why the first finance agent usually fails</h2>
      <p>
        Most CFOs I meet start with the agent that sounds best in a board
        update: a forecasting agent, or a chatbot over the whole ledger. Both
        need clean data, trusted rules and a team that already believes the
        output. On day one you have none of those. The pilot gives a wrong
        answer in week 2, someone senior sees it, and the finance team decides
        AI isn't for them.
      </p>
      <p>
        The other mistake is building five at once. Four pilots in one
        quarter with no owner on any of them means none reaches the close.
        One agent, one owner, one month each is slower on paper and it's the
        only order I've seen finish.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-pick-coffeeshop-candid-v2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in New York City. He builds and runs finance agents inside
          companies and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five, in the order I build them</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Agent</th>
            <th style={th}>Month</th>
            <th style={th}>Access</th>
            <th style={th}>Goes live when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>1. Bank matching</td>
            <td style={td}>1</td>
            <td style={td}>Reads bank and ledger</td>
            <td style={td}>95% agreement for 2 straight weeks</td>
          </tr>
          <tr>
            <td style={td}>2. Cash runway</td>
            <td style={td}>2</td>
            <td style={td}>Reads bank, ledger and payment runs</td>
            <td style={td}>Ties to the bank every morning for 4 weeks</td>
          </tr>
          <tr>
            <td style={td}>3. Invoice coding</td>
            <td style={td}>3</td>
            <td style={td}>Reads inbox, drafts bills</td>
            <td style={td}>Coding matches the team on 9 in 10 bills</td>
          </tr>
          <tr>
            <td style={td}>4. Collections</td>
            <td style={td}>4</td>
            <td style={td}>Reads aged debtors, drafts emails</td>
            <td style={td}>A person has sent 50 of its drafts unedited</td>
          </tr>
          <tr>
            <td style={td}>5. Variance commentary</td>
            <td style={td}>5</td>
            <td style={td}>Reads the closed month</td>
            <td style={{ ...td, borderBottom: "none" }}>Edits fall under 10 minutes a pack</td>
          </tr>
        </tbody>
      </table>

      <h3>1. Bank matching, overnight, read only</h3>
      <p>
        This is always first because the answer is checkable. Every
        transaction either matches an open invoice or it doesn't, and your
        team already knows which. The agent runs at 2am, matches the bank feed
        to open items in the ledger, and leaves a list of what it couldn't
        match with a reason for each. It writes nothing back. I run it in
        shadow for 4 weeks next to the person who does it today and want 95%
        agreement over 2 straight weeks before anyone relies on it. The full
        build is in{" "}
        <Link href="/blog/how-do-i-automate-month-end-close-with-ai-agents-2026-08-26">
          how I automate month end close with agents
        </Link>
        .
      </p>

      <h3>2. Cash runway, one figure every morning</h3>
      <p>
        Once the bank is matched you can trust a cash number. The second agent
        reads the bank balances, the payment run due this week and the
        receipts it expects, and posts one runway figure, in weeks, before
        the team logs in. It's still read only. The test is simple: for 4 weeks
        the controller ties it to the bank by 9am. When it holds, the CEO
        stops asking finance what cash is, and that question was costing
        somebody an hour a day.
      </p>

      <h3>3. Supplier invoice coding, drafts only</h3>
      <p>
        This is the first agent that writes, and it writes drafts. It reads
        the AP inbox, pulls supplier, amount, VAT and due date off each
        invoice, codes it to the nominal and cost centre the rules file says,
        and creates a draft bill. A person approves it. The rules file holds
        your top 40 suppliers and how each one is coded, and that's where most
        of the setup time goes, about 2 days with the AP lead. I want its
        coding to match the team on 9 bills in 10 before it drafts unwatched.
        It never pays anything.
      </p>

      <h3>4. Collections chasers, a person presses send</h3>
      <p>
        Every Monday the agent reads aged debtors, picks invoices past 7, 14
        and 30 days, and drafts a chaser for each in the tone your credit
        controller uses with that customer. It also flags the 5 largest
        overdue balances for a call, not an email. For the first 50 emails a
        person reads and sends each one. After that you can let the 7 day
        reminders go automatically and keep the 30 day ones human. Disputed
        invoices never get a chaser. The rules file lists them.
      </p>

      <h3>5. Variance commentary for month end</h3>
      <p>
        Last, because it needs the other four. Once the month is closed the
        agent reads actuals against budget, takes every line over your
        materiality threshold, and drafts the commentary in the words your
        board is used to. The first drafts need 30 to 40 minutes of edits. By
        month 3 they should need under 10. It never invents a reason. If the
        ledger doesn't show why a line moved, it writes "reason not in the
        ledger, ask the budget holder" and a person finds out.
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
        Inside one client I run, the cash runway figure is posted before the
        finance team logs in each morning. Nobody relies on it until it has
        tied to the bank every morning for 4 weeks, and after that nobody
        rebuilds the cash sheet on a Friday. I build in this
        order because each agent earns the trust the next one needs. If you
        skip to commentary, the first wrong reason in a board pack costs you
        the whole programme.
      </p>
      <p>
        One rule doesn't move. An agent prepares a payment and a named person
        releases it. I've kept that line after 6 good months on every client,
        and I'd keep it after 6 years.
      </p>

      <h2>What do AI agents do in finance and accounting?</h2>
      <p>
        An agent in finance runs a task on a schedule without being asked: it
        reads the bank feed, the ledger or the invoice inbox, does the
        matching, coding or drafting a junior would do, and leaves the result
        plus a list of exceptions for a person. The useful ones don't chat.
        They run at 2am and you check their work at 8.
      </p>

      <h2>Can I build finance agents with Claude?</h2>
      <p>
        Yes. I build most of mine on Claude, on a business plan where the
        provider doesn't train on your inputs. The model is the easy part. The
        work is the rules file it loads on every run, read access to the
        ledger and bank through their own connections, a schedule, and a log
        you'd be happy to hand an auditor.
      </p>

      <h2>Will AI agents replace my finance team?</h2>
      <p>
        Not the people who judge things. The five agents here take the
        matching, coding, chasing and first drafts, which is often half of a
        junior's week. What I build for is the same people closing faster and
        spending the hours on cash, pricing and the questions the board asks.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies and with CFOs one to one. We
        pick the first agent from your own close, build it on your ledger,
        and run it in shadow until you'd sign its output yourself. If you're
        earlier than that, start with{" "}
        <Link href="/blog/ai-training-for-cfos">AI training for CFOs</Link>.
        The full map is at <Link href="/ai-for-cfos">AI for CFOs</Link>, what
        the end state looks like is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the
        sessions are at <Link href="/coach">coaching for CFOs</Link>. Which of
        the five would save your team the most hours this month? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
