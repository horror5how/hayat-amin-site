import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-board-reporting";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-31";
const MOD = "2026-10-31";
const TITLE = "AI Board Reporting: Drafting the Pack From Source Data";
const DESC =
  "How a CFO should use AI for board reporting: map every number in the pack to a source query, let the ledger do the arithmetic, have an agent draft the narrative and the actions log against last quarter's promises, tie out every figure before a person reads it, and cut close to pack from 10 working days to 4 within 3 cycles.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look2-forbes-4.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for ai board reporting: drafting the pack from source data";

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
  "AI board reporting works when an agent drafts the board pack straight from your ledger, CRM and HR system the morning after close, with every number pulled by a saved query and tagged to its source, so the CFO edits a draft instead of writing one. Keep the arithmetic in the ledger, have a controller tie out every figure before anyone reads the words, and most finance teams move from 10 working days to 4 between close and pack within 3 board cycles.";

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
        { "@type": "Thing", name: "AI board reporting" },
        { "@type": "Thing", name: "Board pack automation" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How should a CFO use AI for board reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Can ChatGPT write a board report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can write the words, and it shouldn't be trusted with the numbers. Paste a trial balance into a chat window and ask for a board report and you'll get fluent pages with a gross margin it worked out itself, often wrong by a point or 2. Use it for drafting the narrative from figures your ledger has already produced, inside a business account that doesn't train on your data.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to put board papers into AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only inside a business or enterprise account with training switched off, single sign on, and a named list of who can use it. Board papers carry the most sensitive data a company holds: deal talks, people decisions, covenant headroom. I keep 3 things out of any prompt even then: unannounced deals, named individual pay and anything under legal privilege. Those pages a person writes.",
          },
        },
        {
          "@type": "Question",
          name: "How long should a board pack take to produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a 100 to 300 person company, 4 working days from month end close is a good target once an agent drafts it, against the 8 to 12 I usually find. The first 2 of those days belong to the close itself. Day 3 is the agent's draft and the controller's tie out. Day 4 is the CFO's rewrite and the CEO's read.",
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
      keywords: "Hayat Amin, AI board reporting, AI board pack, board pack automation, AI for CFOs, AI coach for CFOs, AI-native CFO, Dubai",
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
        { label: "AI Board Reporting" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI Board Reporting: Drafting the Pack From Source Data</h1>
      <p className="op-lede">
        AI board reporting works when an agent drafts the board pack straight
        from your ledger, CRM and HR system the morning after close, with every
        number pulled by a saved query and tagged to its source, so the CFO
        edits a draft instead of writing one. Keep the arithmetic in the
        ledger, have a controller tie out every figure before anyone reads the
        words, and most finance teams move from 10 working days to 4 between
        close and pack within 3 board cycles.
      </p>

      <h2>Why most AI board packs go wrong</h2>
      <p>
        The usual first attempt is a trial balance pasted into a chat window
        with the words &quot;write my board report&quot;. What comes back reads
        well. It also contains a gross margin the model worked out itself, a
        headcount figure from nowhere and a cash line that doesn&apos;t match
        the bank. A model that counts a reversed accrual twice overstates
        EBITDA by the full accrual, and nobody notices until the chair asks a
        question on page 9.
      </p>
      <p>
        One wrong number in a board pack costs more than the 6 days AI was
        meant to save. The board stops trusting every other figure, and the
        next 3 meetings open with &quot;are these numbers right?&quot; The
        pack is the one document where a CFO&apos;s credibility is on every
        page. So the build has to start with where each number comes from,
        and only then get to the words.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look2-forbes-4.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds board reporting agents inside finance
          teams and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five steps I use to build an AI board pack</h2>

      <h3>1. Map every number in the pack to a source</h3>
      <p>
        Take your last pack and list every figure in it. A 100 to 300 person
        company usually has 20 to 30 pages and 80 to 150 numbers. Next to each
        one, write the system, the report and the filter that produces it:
        Xero profit and loss for October, HubSpot pipeline by stage, the HR
        system&apos;s headcount on the last day of the month. You&apos;ll find
        10 to 15% have no source at all. Someone types them in from memory or
        an old spreadsheet. Fix those first, or mark them manual and keep them
        out of the agent&apos;s hands.
      </p>

      <h3>2. Let the ledger do the arithmetic</h3>
      <p>
        Every number is produced by a saved query against the source, the
        same query every month. The model never calculates anything and never
        types a figure. It receives a table of finished numbers and writes
        about them. Then a check script reads the draft, pulls out every
        figure in it and compares each one to the query output. One mismatch
        blocks the draft. I&apos;d rather the pack is 2 hours late than one
        number is wrong.
      </p>

      <h3>3. Draft the narrative against last quarter&apos;s promises</h3>
      <p>
        The agent loads 3 things before it writes: the last 3 packs as a style
        guide, the board minutes, and the actions log. That last one matters
        most. A board remembers what management said it would do, and the
        strongest pages in any pack are the ones that report back: we said we
        would hire 4 engineers by September, we hired 3, here is why. The
        agent drafts that page by matching each action to what the systems
        now show. It writes one paragraph per section and tags every claim to
        the rows it read.
      </p>

      <h3>4. Two people sign, in a fixed order</h3>
      <p>
        The controller ties out first. Every number gets ticked against the
        trial balance and the source reports, and that takes about half a day
        once the queries are stable. Then the CFO takes the words. They own the
        opening page, the 2 or 3 decisions the board is being asked for, and
        anything about people or deals. No page goes to the board that a
        person hasn&apos;t read end to end.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Pack section</th>
            <th style={th}>Who drafts</th>
            <th style={th}>Source</th>
            <th style={th}>Human check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Financial statements and KPIs</td>
            <td style={td}>Saved queries, no model</td>
            <td style={td}>Ledger, billing, HR system</td>
            <td style={td}>Controller ties to trial balance</td>
          </tr>
          <tr>
            <td style={td}>Variance commentary</td>
            <td style={td}>Agent</td>
            <td style={td}>Variance table plus CRM, purchase orders</td>
            <td style={td}>Controller keeps, edits or deletes each line</td>
          </tr>
          <tr>
            <td style={td}>Actions log report back</td>
            <td style={td}>Agent</td>
            <td style={td}>Board minutes plus live systems</td>
            <td style={td}>CEO confirms each status</td>
          </tr>
          <tr>
            <td style={td}>Cash and runway</td>
            <td style={td}>Agent from the live forecast</td>
            <td style={td}>Bank feeds, 13 week cash model</td>
            <td style={td}>CFO</td>
          </tr>
          <tr>
            <td style={tdLast}>CFO letter, decisions, people, deals</td>
            <td style={tdLast}>CFO</td>
            <td style={tdLast}>Judgement</td>
            <td style={tdLast}>CEO and chair</td>
          </tr>
        </tbody>
      </table>

      <h3>5. Measure 3 numbers every cycle</h3>
      <p>
        Track working days from close to pack sent, the share of the
        agent&apos;s words the CFO rewrites, and number errors found after the
        pack went out. The last one has to be zero, every time. In the first
        cycle I expect the draft on day 5 and the CFO rewriting about half of
        it. By the third cycle it&apos;s usually day 3 for the draft, day 4
        for the pack, and under a third rewritten. If errors aren&apos;t zero,
        go back to step 2. The problem is always a query, never the prose.
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
        I&apos;ve written board packs and I&apos;ve sat on the other side of
        the table reading them. In due diligence a buyer&apos;s team reads 24
        months of packs in the first week and checks whether each
        quarter&apos;s story agrees with the next.
        That&apos;s why I care about the actions log more than the charts.
        Inside one client today, the agent drafts the pack overnight on
        working day 3 from the ledger, the CRM and the HR system, and the cash
        page reads from the same live runway figure the CFO sees every
        morning. The CFO spends day 4 on the 3 pages the board will argue
        about.
      </p>

      <h2>Can ChatGPT write a board report?</h2>
      <p>
        It can write the words, and it shouldn&apos;t be trusted with the
        numbers. Paste a trial balance into a chat window and ask for a board
        report and you&apos;ll get fluent pages with a gross margin it worked
        out itself, often wrong by a point or 2. Use it for drafting the
        narrative from figures your ledger has already produced, inside a
        business account that doesn&apos;t train on your data. I cover what
        stays out in{" "}
        <Link href="/blog/chatgpt-for-cfos">ChatGPT for CFOs</Link>.
      </p>

      <h2>Is it safe to put board papers into AI?</h2>
      <p>
        Only inside a business or enterprise account with training switched
        off, single sign on, and a named list of who can use it. Board papers
        carry the most sensitive data a company holds: deal talks, people
        decisions, covenant headroom. I keep 3 things out of any prompt even
        then: unannounced deals, named individual pay and anything under
        legal privilege. Those pages a person writes.
      </p>

      <h2>How long should a board pack take to produce?</h2>
      <p>
        For a 100 to 300 person company, 4 working days from month end close
        is a good target once an agent drafts it, against the 8 to 12 I
        usually find. The first 2 of those days belong to the close itself.
        Day 3 is the agent&apos;s draft and the controller&apos;s tie out.
        Day 4 is the CFO&apos;s rewrite and the CEO&apos;s read.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside finance teams.
        In the first session we take your last pack and map every number to a
        source, and by your next board meeting the agent is drafting beside
        you. The commentary engine underneath it is in{" "}
        <Link href="/blog/ai-fp-and-a">AI for FP&amp;A</Link>, and the
        meeting itself is covered in{" "}
        <Link href="/blog/board-reporting-for-tech-startups-2026-guide">board reporting for tech startups</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. How many days did
        your last pack take? Start at <Link href="/">meethayat.com</Link> and
        tell me.
      </p>
    </PageShell>
  );
}
