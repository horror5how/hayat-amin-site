import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-does-an-ai-native-finance-function-look-like-2026-10-05";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-05";
const MOD = "2026-10-05";
const TITLE = "What Does an AI-Native Finance Function Look Like?";
const DESC =
  "An AI-native finance function has agents doing the daily transaction work straight into the ledger, cash that's live every morning, a close that takes 3 to 5 working days, and a team of three owning exceptions, the forecast and the decisions.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-talk-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for what does an ai-native finance function look like";

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
  "An AI-native finance function is one where agents do the daily transaction work (supplier invoices, bank and card reconciliation, billing, expense coding) and write it straight into the ledger, while a small team owns the exceptions, the forecast and the decisions. In a 50 to 300 person company that usually means three people instead of six, cash that's live every morning instead of rebuilt at month end, and a close that takes 3 to 5 working days instead of 10 to 15.";

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
          name: "What does an AI-native finance function look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Which AI agents should a finance team start with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with bank and card reconciliation, then supplier invoice coding. Both run every day, both are decided by written rules for 80 percent or more of items, and both leave a clean trail in the ledger. Run each agent in shadow for four weeks against the person who does it today and promote it only when the two agree on 90 to 95 percent of items. Leave forecasting and board commentary until the ledger underneath is being kept by agents you trust.",
          },
        },
        {
          "@type": "Question",
          name: "Can an AI CFO agent replace a CFO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. An AI CFO agent can produce the numbers a CFO used to wait for: daily cash, variance against budget, a draft board pack. It can't decide whether to raise now or in nine months, sit across from a lender, or tell a founder the plan is wrong. In an AI-native finance function the CFO seat, often fractional at 1 to 2 days a week, spends almost all its time on those decisions because the agents have taken the reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an AI-native ERP to run finance on AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Agents work against the accounting system you already run through its API and a scoped service account. What you need is one ledger as the single source of truth, a clean chart of accounts, and bank feeds into it. Migrating the ERP before any agent goes live is the most common way to lose 6 to 12 months. Fix the chart of accounts first, then build the agents, then decide if the system is holding you back.",
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
      keywords: "Hayat Amin, AI-native finance function, AI finance team, AI agents for finance teams, AI CFO, finance automation, fractional CFO, AI operator, London",
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
        { label: "What Does an AI-Native Finance Function Look Like?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>What Does an AI-Native Finance Function Look Like?</h1>
      <p className="op-lede">
        An AI-native finance function is one where agents do the daily
        transaction work (supplier invoices, bank and card reconciliation,
        billing, expense coding) and write it straight into the ledger, while a
        small team owns the exceptions, the forecast and the decisions. In a 50
        to 300 person company that usually means three people instead of six,
        cash that's live every morning instead of rebuilt at month end, and a
        close that takes 3 to 5 working days instead of 10 to 15.
      </p>

      <h2>Why most finance teams get this wrong</h2>
      <p>
        The usual move is to buy an AI feature for each tool the team already
        uses. The expense app gets a receipt reader, the accounting system gets
        a chat box, someone builds a forecasting copilot in a spreadsheet. A
        year later the finance team is the same six people doing the same work,
        with four extra logins and a vendor bill.
      </p>
      <p>
        I see the same pattern every time. The features help a person do a task
        faster. None of them take the task away. An AI-native function is
        designed the other way round: the agent owns the task end to end, writes
        the answer into the ledger, and a person only sees the items the agent
        couldn't decide. If a human still has to open every invoice to approve
        what the AI suggested, you've bought a faster keyboard.
      </p>
      <p>
        The second mistake is starting at the top. CFOs want the AI forecast
        first because it's the exciting bit. A forecast built on a ledger that's
        three weeks behind and half reconciled is a confident guess. Start at the
        bottom, where the volume is.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-talk-1.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the AI systems that run
          finance and operations inside companies in London, NYC and Dubai.
        </figcaption>
      </figure>

      <h2>What sits where</h2>
      <p>
        Here's how I split the work in a 100 to 200 person company. The left
        column is the process, the middle is what the agent does, the right is
        what a person keeps.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Process</th>
            <th style={th}>Agent does</th>
            <th style={th}>Person keeps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Bank and card reconciliation</td>
            <td style={td}>Matches every line daily, posts it</td>
            <td style={td}>Unmatched items, usually under 10%</td>
          </tr>
          <tr>
            <td style={td}>Supplier invoices</td>
            <td style={td}>Reads, codes, matches to PO, queues for payment</td>
            <td style={td}>Approving the payment run, disputes</td>
          </tr>
          <tr>
            <td style={td}>Billing and collections</td>
            <td style={td}>Raises invoices from contract data, sends reminders on day 7, 14 and 30</td>
            <td style={td}>Credit notes, any customer call</td>
          </tr>
          <tr>
            <td style={td}>Month end close</td>
            <td style={td}>Accruals, prepayments, intercompany, draft journals</td>
            <td style={td}>Review and sign off</td>
          </tr>
          <tr>
            <td style={td}>Cash and runway</td>
            <td style={td}>Refreshes the 13 week forecast every morning</td>
            <td style={td}>The assumptions behind it</td>
          </tr>
          <tr>
            <td style={td}>Board pack</td>
            <td style={td}>Builds the numbers and a first draft of variance notes</td>
            <td style={{ ...td, borderBottom: "none" }}>The story and what to do about it</td>
          </tr>
        </tbody>
      </table>
      <p>
        Read the right column. Every item in it is either an exception, an
        approval or a judgement. That's the whole job of the people in an
        AI-native finance team.
      </p>

      <h2>How I build it, in order</h2>
      <h3>1. Fix the ledger first, in 2 to 4 weeks</h3>
      <p>
        One accounting system as the single source of truth, bank feeds into it,
        and a chart of accounts that a stranger could follow. Most companies
        I walk into have 300 or more accounts where 80 would do. Agents code
        transactions against that chart, so a messy chart becomes messy coding
        at machine speed. This is the dullest step and I won't skip it.
      </p>
      <h3>2. Convert the daily work, one process every 6 to 8 weeks</h3>
      <p>
        Reconciliation first, then supplier invoices, then billing. Each runs in
        shadow for four weeks next to the person who does it today. I write the
        promotion bar down before we start: 90 to 95 percent agreement across two
        full cycles. Below that, it stays in shadow.
      </p>
      <h3>3. Make cash live</h3>
      <p>
        Once the ledger is being kept daily, the 13 week cash forecast can refresh
        every morning from the bank feed, the payables queue and the sales
        pipeline. The CEO stops asking finance what runway is. They look.
      </p>
      <h3>4. Turn the close into a review</h3>
      <p>
        If the daily work is posted daily, month end is mostly checking. Agents
        draft accruals, prepayments and the journals. The controller reviews and
        signs. That's how a 10 to 15 day close comes down to 3 to 5.
      </p>
      <h3>5. Reshape the team around exceptions and decisions</h3>
      <p>
        For a company around 150 people I'd expect three roles at the end. A
        financial controller owning the exceptions queue and the controls. An
        FP&amp;A lead owning the forecast and the board story. A CFO, often
        fractional at 1 to 2 days a week, owning capital, pricing and the
        decisions. Expect 9 to 12 months from start to that shape.
      </p>
      <p>
        One control I don't move on: an agent prepares a payment, a named person
        releases it. Every agent action gets logged with the inputs that
        produced it, and each agent runs on its own service account with only the
        permissions its process needs.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, cash runway sits live in the same system the
        agents post into. Nobody rebuilds it in a spreadsheet at month end, and
        the founder checks it on their phone before the Monday meeting. The
        finance team didn't shrink in a round of cuts. It stopped growing while
        the company did.
      </p>
      <p>
        I've spent twenty years in the C-suite, with three exits and three FT100
        listings. In every diligence I've sat through, the slowest questions were
        finance ones: show me how this number was built. An AI-native function
        answers that by default, because every posting has a log behind it. A
        buyer pays more for a finance function that runs without one person
        holding it all in their head.
      </p>

      <h2>Which AI agents should a finance team start with?</h2>
      <p>
        Bank and card reconciliation, then supplier invoice coding. Both run
        every day, both are decided by written rules for 80 percent or more of
        items, and both leave a clean trail in the ledger. Shadow each one for
        four weeks against the person doing it today and promote it at 90 to 95
        percent agreement. Leave the forecast and board commentary until the
        ledger underneath is kept by agents you trust.
      </p>

      <h2>Can an AI CFO agent replace a CFO?</h2>
      <p>
        No. An AI CFO agent can produce the numbers a CFO used to wait for:
        daily cash, variance against budget, a draft board pack. It can't decide
        whether to raise now or in nine months, sit across from a lender, or tell
        a founder the plan is wrong. In an AI-native function the CFO seat, often
        fractional at 1 to 2 days a week, spends nearly all its time on those
        calls because the agents have taken the reporting.
      </p>

      <h2>Do I need an AI-native ERP to run finance on AI agents?</h2>
      <p>
        No. Agents work against the accounting system you already run, through
        its API and a scoped service account. You need one ledger as the source
        of truth, a clean chart of accounts and bank feeds into it. Migrating the
        ERP before any agent goes live is the most common way I see companies
        lose 6 to 12 months. Fix the chart first, build the agents, then decide
        if the system is holding you back.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is what I build and run inside companies. I sit in the CFO seat,
        clean the ledger, convert the daily finance work to agents one process
        at a time, and hand you a team of three with live cash and a 3 to 5 day
        close. If your finance team is still keying invoices and rebuilding the
        runway every month, which process would you take off them first? See{" "}
        <Link href="/services/fractional-cfo/">how I work as a fractional CFO
        and AI operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
