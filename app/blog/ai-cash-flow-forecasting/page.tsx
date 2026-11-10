import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-cash-flow-forecasting";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-10";
const MOD = "2026-11-10";
const TITLE = "AI Cash Flow Forecasting: One Live Runway Figure Every Morning";
const DESC =
  "How a CFO should build AI cash flow forecasting: reconcile every bank account each morning, build 13 weeks from known receipts and payments, let an agent predict when each customer pays from their last 12 invoices, send one runway figure with the 3 lines that moved it, and score the forecast weekly for 8 weeks before the spreadsheet goes.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look5-sidelight-2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for ai cash flow forecasting: one live runway figure every morning";

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
  "AI cash flow forecasting works when an agent rebuilds your 13 week cash forecast every morning from the bank feeds, the open invoices and bills in your ledger and the payroll calendar, then sends the CFO one runway figure and the 3 lines that moved it since yesterday. The agent's job is timing, meaning when each customer will pay, while the arithmetic stays in a model it can't edit, and most finance teams get week one error under 5% within 8 weeks.";

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
        { "@type": "Thing", name: "AI cash flow forecasting" },
        { "@type": "Thing", name: "13 week cash flow forecast" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How should a CFO use AI for cash flow forecasting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Can AI do cash flow forecasting in Excel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and for a first build I'd keep the forecast in Excel. The workbook stays the model: the formulas, the 13 columns, the runway line. The agent writes into one input tab each morning, the receipts it expects by week and the payments it knows about, and never touches a formula. Your team keeps the file they trust, and you can see every number the agent put there.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is AI cash flow forecasting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accurate enough to run the company on, if you measure it. I aim for under 5% error on the first week and under 10% on week 4, scored every Friday against what the bank shows. The gain over a manual forecast comes from receipts, where most teams assume customers pay on terms. An agent that knows a customer pays on day 47, not day 30, closes most of that gap.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 13 week cash flow forecast and can AI build one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's a week by week view of cash in and cash out for the next quarter, built from real items rather than the profit and loss. Banks and lenders ask for one when headroom is tight. An agent can build and refresh it daily from the bank, the ledger and payroll, but a person still sets the rules for tax dates, debt and anything one off, and signs the version that goes to a lender.",
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
      keywords: "Hayat Amin, AI cash flow forecasting, 13 week cash flow forecast, cash runway, AI for CFOs, AI coach for CFOs, AI-native CFO, London",
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
        { label: "AI Cash Flow Forecasting" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Cash Flow Forecasting: One Live Runway Figure Every Morning</h1>
      <p className="op-lede">
        AI cash flow forecasting works when an agent rebuilds your 13 week
        cash forecast every morning from the bank feeds, the open invoices and
        bills in your ledger and the payroll calendar, then sends the CFO one
        runway figure and the 3 lines that moved it since yesterday. The
        agent&apos;s job is timing, meaning when each customer will pay, while
        the arithmetic stays in a model it can&apos;t edit, and most finance
        teams get week one error under 5% within 8 weeks.
      </p>

      <h2>Why most AI cash forecasts go wrong</h2>
      <p>
        The usual first attempt is a tool that fits a curve to 24 months of
        bank balances and draws the line forward. It looks clever in the demo.
        Then the quarterly VAT payment lands, or payroll moves from the 28th
        to the 25th, and the curve has no idea either thing exists. Cash
        isn&apos;t a trend. It&apos;s a list of specific payments with dates
        on them, and most of that list is already sitting in your ledger.
      </p>
      <p>
        The cost shows up in trust. If the runway figure jumps by 3 weeks on
        a Tuesday when nothing happened, the CFO stops opening it, and by
        month 2 the team is back to the spreadsheet someone rebuilds every
        Friday afternoon. A 150 person company can find a covenant breach
        10 days out when the only cash view it has is last Friday&apos;s. A cash forecast earns its keep in the week things
        go wrong, so it has to be built from facts first and predictions
        second.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look5-sidelight-2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds cash forecasting agents inside
          finance teams and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five steps I use to build an AI cash forecast</h2>

      <h3>1. Start from the bank, every account, every morning</h3>
      <p>
        Connect a daily feed for every bank account, every currency and every
        card. Most companies of 50 to 300 people have 4 to 12 of them, and
        there&apos;s always one savings account nobody remembers. Each morning
        the agent pulls the closing balances and checks that the sum matches
        the opening line of the forecast to the penny. If it doesn&apos;t, it
        stops and says which account is out. A forecast that starts from the
        wrong number is wrong in every one of its 13 weeks.
      </p>

      <h3>2. Build the 13 weeks from items you already know</h3>
      <p>
        Before any prediction, load the certain items. Open sales invoices and
        their due dates. Open supplier bills. Payroll and pension dates. VAT,
        PAYE and corporation tax on their calendar. Rent, loan repayments,
        software subscriptions and signed purchase orders. In most companies
        I work with, 70 to 85% of the next 13 weeks of payments are already
        known on day one. Write each one as a rule with a date, so &quot;payroll,
        £410,000, the 25th, the Friday before if it falls on a weekend&quot;
        sits in the model, not in someone&apos;s head.
      </p>

      <h3>3. Let the agent predict timing, customer by customer</h3>
      <p>
        This is where AI earns its place. Your ledger says an invoice is due in
        30 days. Your customer&apos;s history says they pay on day 47, and
        later in December. The agent reads each customer&apos;s last 12 paid
        invoices, works out their own pattern and places every open invoice in
        the week it&apos;s likely to land. It does the same for supplier
        payment runs and for new sales from the CRM at the stage probability
        you set. It also flags anything odd: a customer who&apos;s paid on day
        20 for a year and is now at day 35 goes to credit control that
        morning.
      </p>

      <h3>4. Send one figure and the 3 lines that moved it</h3>
      <p>
        The output is a short note in the CFO&apos;s inbox before 7am. Weeks
        of runway, cash at the lowest point in the 13 weeks and which week
        that is, the change since yesterday, and the 3 items that caused it.
        Nothing else. The model does the sums in a locked workbook or a saved
        query, and the agent writes about the result. It never types a number
        into a cell it wasn&apos;t given.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Forecast line</th>
            <th style={th}>Source</th>
            <th style={th}>Who sets it</th>
            <th style={th}>Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Opening cash</td>
            <td style={td}>Bank feeds, all accounts</td>
            <td style={td}>No model, a sum</td>
            <td style={td}>Matches the bank to the penny daily</td>
          </tr>
          <tr>
            <td style={td}>Customer receipts</td>
            <td style={td}>Open invoices plus 12 invoice payment history</td>
            <td style={td}>Agent predicts the week</td>
            <td style={td}>Scored against the bank every Friday</td>
          </tr>
          <tr>
            <td style={td}>New sales</td>
            <td style={td}>CRM pipeline</td>
            <td style={td}>Agent, at stage odds the CFO sets</td>
            <td style={td}>Sales lead confirms the top 10 deals monthly</td>
          </tr>
          <tr>
            <td style={td}>Payroll, tax, rent, debt</td>
            <td style={td}>Calendar rules</td>
            <td style={td}>Finance team writes the rules</td>
            <td style={td}>Reviewed each quarter</td>
          </tr>
          <tr>
            <td style={tdLast}>One off items, deals, disputes</td>
            <td style={tdLast}>CFO</td>
            <td style={tdLast}>A person, by name</td>
            <td style={tdLast}>CFO signs the lender version</td>
          </tr>
        </tbody>
      </table>

      <h3>5. Score it every Friday and run it in shadow for 8 weeks</h3>
      <p>
        Each Friday, compare what the forecast said for the week with what the
        bank shows, line by line. I aim for under 5% error on week one and
        under 10% on week 4. Run the agent beside the old spreadsheet for 6 to
        8 weeks. When it beats the spreadsheet 4 Fridays in a row, switch the
        spreadsheet off. If one line keeps missing, it&apos;s nearly always a
        rule nobody wrote down, a quarterly bonus or an annual insurance
        payment. Write the rule, and move on.
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
        I&apos;ve run cash through a sale process, and a buyer reads your cash
        forecast the way a doctor reads a pulse. If the 13 week view you sent
        in week one of due diligence is close to what happened by week 13,
        every other number you give them gets easier to believe. Inside the
        companies I work with today, the live runway figure is the first thing
        the CFO reads each morning, built overnight from the bank feeds, and
        the same figure feeds the cash page of the board pack. I don&apos;t
        want a cleverer forecast. I want one number the CEO, the CFO and the
        board all read the same way.
      </p>

      <h2>Can AI do cash flow forecasting in Excel?</h2>
      <p>
        Yes, and for a first build I&apos;d keep the forecast in Excel. The
        workbook stays the model: the formulas, the 13 columns, the runway
        line. The agent writes into one input tab each morning, the receipts
        it expects by week and the payments it knows about, and never touches
        a formula. Your team keeps the file they trust, and you can see every
        number the agent put there.
      </p>

      <h2>How accurate is AI cash flow forecasting?</h2>
      <p>
        Accurate enough to run the company on, if you measure it. I aim for
        under 5% error on the first week and under 10% on week 4, scored every
        Friday against what the bank shows. The gain over a manual forecast
        comes from receipts, where most teams assume customers pay on terms.
        An agent that knows a customer pays on day 47, not day 30, closes most
        of that gap.
      </p>

      <h2>What is a 13 week cash flow forecast and can AI build one?</h2>
      <p>
        It&apos;s a week by week view of cash in and cash out for the next
        quarter, built from real items rather than the profit and loss. Banks
        and lenders ask for one when headroom is tight. An agent can build and
        refresh it daily from the bank, the ledger and payroll, but a person
        still sets the rules for tax dates, debt and anything one off, and
        signs the version that goes to a lender.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we connect the bank feeds and list every known
        payment for the next 13 weeks, and within 2 weeks the agent is sending
        the morning note in shadow beside your spreadsheet. The profit and
        loss side of the same build is in{" "}
        <Link href="/blog/ai-financial-forecasting">AI financial forecasting</Link>,
        the cash page it feeds is in{" "}
        <Link href="/blog/ai-board-reporting">AI board reporting</Link>, and
        the tools I use day to day are in{" "}
        <Link href="/blog/claude-for-finance">Claude for finance teams</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. How many weeks of
        runway do you have this morning, and how sure are you? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
