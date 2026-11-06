import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-month-end-close";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-06";
const MOD = "2026-11-06";
const TITLE = "AI Month End Close: How an Agent Matches the Bank Before Your Team Arrives";
const DESC =
  "How AI runs the bank side of month end close: an agent pulls every feed at 5am, matches in four passes from exact to remittance reading, leaves the controller 30 to 80 ranked exceptions instead of 3,000 lines, posts nothing, and reconciles daily so the bank is 95% done before month end starts.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look4-bw-2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for ai month end close: how an agent matches the bank before your team arrives";

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
  "An AI month end close starts at the bank: an agent pulls every bank, card and payment provider feed at 5am, matches each line to the ledger in four passes from exact match to reading the remittance email, and leaves the controller a ranked list of 30 to 80 exceptions instead of 3,000 lines. It proposes and a person posts, and because it runs every morning rather than once a month, the bank is about 95% reconciled before month end even starts.";

const Q1 = "How long does month end close take with AI?";
const A1 =
  "For a 100 to 300 person company, 4 to 5 working days is a realistic target once the bank, accruals and chasing run on agents, against the 8 to 12 I usually find. The bank alone moves from 2 days to half a day. Most of the rest comes from inputs arriving on time, which is a chasing problem, not an accounting one.";
const Q2 = "Can AI do bank reconciliation in Xero or QuickBooks?";
const A2 =
  "Both already suggest matches and let you write bank rules, and that covers the exact pass well. What they don't do is match one payout to 140 card sales net of fees, read a customer's remittance email, or work across 6 entities at once. I run the agent on top through the API, reading from the ledger and writing proposals into a review queue, never posting.";
const Q3 = "What does AI bank reconciliation still get wrong?";
const A3 =
  "Three things in the ledgers I've worked on: refunds netted inside a payout, payments from a parent company for a subsidiary's invoice, and anything with a reference a person typed by hand. The agent gets these partly right with high confidence, which is the dangerous kind of wrong. That's why pass 4 never auto-accepts, whatever score it gives itself.";

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
        { "@type": "Thing", name: "AI month end close" },
        { "@type": "Thing", name: "AI bank reconciliation" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How does AI speed up month end close?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        { "@type": "Question", name: Q1, acceptedAnswer: { "@type": "Answer", text: A1 } },
        { "@type": "Question", name: Q2, acceptedAnswer: { "@type": "Answer", text: A2 } },
        { "@type": "Question", name: Q3, acceptedAnswer: { "@type": "Answer", text: A3 } }],
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
      keywords: "Hayat Amin, AI month end close, AI bank reconciliation, month end close automation, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
        { label: "AI Month End Close" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Month End Close: How an Agent Matches the Bank Before Your Team Arrives</h1>
      <p className="op-lede">
        An AI month end close starts at the bank: an agent pulls every bank,
        card and payment provider feed at 5am, matches each line to the ledger
        in four passes from exact match to reading the remittance email, and
        leaves the controller a ranked list of 30 to 80 exceptions instead of
        3,000 lines. It proposes and a person posts, and because it runs every
        morning rather than once a month, the bank is about 95% reconciled
        before month end even starts.
      </p>

      <h2>Why the bank is where most closes lose 2 days</h2>
      <p>
        In most finance teams I walk into, bank reconciliation happens once,
        on working day 1 or 2, for the whole month. One person sits with 2,000
        to 4,000 lines across 3 to 6 accounts and ticks them off. The ledger&apos;s
        own auto-match catches the easy half. The other half takes 2 days, and
        it&apos;s the half where the mistakes live.
      </p>
      <p>
        A duplicate supplier payment that lands on the 29th is the line a
        rushed rec misses. Until someone finds it, the ledger and the bank
        disagree by the full amount, and the board pack carries a cash figure
        nobody can explain. When the bank is late, every number that depends on cash is late with
        it: the runway figure, the forecast, the covenant check.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look4-bw-2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds bank matching agents inside finance
          teams and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>How I build the overnight bank matcher</h2>

      <h3>1. Get every feed in by 5am, and check it adds up</h3>
      <p>
        The agent needs yesterday&apos;s lines from every account before
        anyone logs on. That means direct bank feeds where the bank offers
        them, daily statement files where it doesn&apos;t, and the payout
        reports from Stripe, Adyen or whichever card provider you use, since
        those carry the fee and refund detail the bank line hides. Before it
        matches anything, the agent checks that today&apos;s opening balance
        equals yesterday&apos;s closing balance on every account. If one
        doesn&apos;t, it stops on that account and says so. A missing day of
        lines will make every later match look wrong.
      </p>

      <h3>2. Match in four passes, strictest first</h3>
      <p>
        Each pass only sees what the pass before it left. The order matters,
        because a loose rule run first will grab lines a strict rule would
        have matched properly.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Pass</th>
            <th style={th}>What it matches</th>
            <th style={th}>Share of lines I typically see</th>
            <th style={th}>Auto-accepted?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>1. Exact</td>
            <td style={td}>Same amount, date within 2 days, reference matches</td>
            <td style={td}>60 to 70%</td>
            <td style={td}>Yes</td>
          </tr>
          <tr>
            <td style={td}>2. One to many</td>
            <td style={td}>One receipt to several invoices, one payout to many sales net of fees</td>
            <td style={td}>15 to 20%</td>
            <td style={td}>Yes, if the totals tie to the penny</td>
          </tr>
          <tr>
            <td style={td}>3. Tolerance</td>
            <td style={td}>Right payer, amount off by bank charges or FX inside a set limit</td>
            <td style={td}>5 to 10%</td>
            <td style={td}>Proposed, controller accepts in bulk</td>
          </tr>
          <tr>
            <td style={tdLast}>4. Reading</td>
            <td style={tdLast}>Model reads remittance emails, bank narrative and open items, proposes a match with a reason</td>
            <td style={tdLast}>Most of the rest</td>
            <td style={tdLast}>Never</td>
          </tr>
        </tbody>
      </table>
      <p>
        Only pass 4 uses a language model. Passes 1 to 3 are plain rules, and
        I keep them that way because rules give the same answer every time and
        an auditor can read them. The model earns its place on the 5 to 10% of
        lines where the answer sits in an email from a customer saying
        &quot;this covers invoices 4471 and 4480, less the credit note&quot;.
      </p>

      <h3>3. Rank the exceptions by value and age</h3>
      <p>
        Whatever is left goes into one list, sorted by amount and then by how
        many days it&apos;s been open. Each line carries the agent&apos;s best
        guess and a one line reason. On a 100 to 300 person company that list
        is 30 to 80 lines a day at the start, and it falls as the rules
        improve. The controller works it from the top at 8am. The 4 lines
        over £10,000 get looked at first, and the £3.20 card fee can wait.
      </p>

      <h3>4. Turn corrections into rules</h3>
      <p>
        When the controller fixes the same kind of proposal the same way twice,
        the agent drafts a new pass 1 or pass 3 rule and the controller
        approves it. Expect the rules file to grow fast for the first 3
        months and the daily exception list to shrink with it. I don&apos;t let the
        model learn quietly. Every rule is written down with a name, a date
        and who approved it, and the CFO reads the list once a month.
      </p>

      <h3>5. Keep the agent&apos;s hands off the money</h3>
      <p>
        The agent has read access to the bank and the ledger. It writes
        proposals into a review queue and nothing else. A person posts. The
        CFO sets the tolerance in pass 3, usually £25 or 1%, whichever is
        lower. Any change to a supplier&apos;s bank details goes to a person
        with a phone call, every time, because that&apos;s where fraud comes
        in. I run it in shadow for 2 full closes first, comparing its answer
        with the controller&apos;s on every line, before it counts.
      </p>

      <h2>Why daily matters more than speed</h2>
      <p>
        The 5am run is the whole trick. A team that reconciles once a month
        does 30 days of work on day 1. A team whose agent matches every
        morning does 1 day of work on day 1, because the other 29 were done
        on the mornings they happened. Month end stops being a bank event. On
        a 10 day close that&apos;s 1.5 to 2 days back from the bank alone,
        and the cash figure in the board pack matches the bank on day 1.
        The wider close, accruals, commentary and chasing, is in{" "}
        <Link href="/blog/how-do-i-automate-month-end-close-with-ai-agents-2026-08-26">how to automate month end close with AI agents</Link>.
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
        Inside one client I run, the matcher finishes before 6am and the
        controller gets a note at 7am: how many lines came in, how many
        matched, and the exceptions that need a decision today. The same
        matched balance feeds the live cash runway figure the CFO reads every
        morning, so nobody argues about which cash number is right. I&apos;ve
        been through three exits, and a buyer&apos;s diligence team always
        asks for the bank recs early. A rec that runs every day with a log
        behind it is an easy thing to hand over.
      </p>

      <h2>{Q1}</h2>
      <p>{A1}</p>

      <h2>{Q2}</h2>
      <p>{A2}</p>

      <h2>{Q3}</h2>
      <p>{A3}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we pull a month of your bank lines and run them
        through the four passes, so you see your own match rate before
        anything is built. The other agents worth building beside it are in{" "}
        <Link href="/blog/ai-agents-for-finance">AI agents for finance</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. How many days does
        your bank rec take now? Start at <Link href="/">meethayat.com</Link>{" "}
        and tell me.
      </p>
    </PageShell>
  );
}
