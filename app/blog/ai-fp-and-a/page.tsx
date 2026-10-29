import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "ai-fp-and-a";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-29";
const MOD = "2026-10-29";
const TITLE = "AI for FP&A: Start With the Commentary, Not the Model";
const DESC =
  "How an FP&A team should start with AI: time one month end, write the commentary rulebook with a materiality line, have an agent draft source-tagged variance commentary by working day 3, measure the controller's keep rate until 8 of 10 lines survive, then move to budget holder questions and scenarios on a copy of the model.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look2-forbes-2.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for ai for fp&a: start with the commentary, not the model";

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
  "An FP&A team should start using AI on the monthly variance commentary, because it takes 2 to 4 analyst days a month, it follows rules you can write down, and every sentence can be checked against the ledger. Leave the forecast model alone for the first 90 days, and move the agent on to budget holder questions and scenarios only once your controller keeps 8 of every 10 lines it drafts without an edit.";

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
        { "@type": "Thing", name: "AI for FP&A" },
        { "@type": "Thing", name: "AI variance analysis" },
        { "@type": "Thing", name: "AI for CFOs", url: `${SITE}/ai-for-cfos` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How should an FP&A team start using AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Can AI do variance analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if the maths is done before the model sees it. Calculate the variances in the ledger or a spreadsheet, then give the agent the numbers, your materiality line and the source systems that explain causes: CRM, HR, purchase orders. It writes one sentence per line over the threshold, each tagged to the rows it read. A person still signs it. The agent should never calculate a variance in its head.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best AI use cases in FP&A?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the order I build them: variance commentary, answers to budget holder questions, the first draft of the monthly pack narrative, scenario runs on a copy of the model, and collecting budget inputs. Each one reads data you already hold and produces something a person checks. Forecast drivers come later, and only the ones with 24 months of history and a written rule.",
          },
        },
        {
          "@type": "Question",
          name: "Will AI replace FP&A analysts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It replaces the part of the job that is copying numbers into sentences. In the teams I run, that's about 2 to 4 days of every month. The analyst keeps the judgement: which variance matters, what the budget holder isn't saying, what the board will ask. A 4 person FP&A team usually stays at 4 and spends the freed days on pricing, unit economics and the next raise.",
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
      keywords: "Hayat Amin, AI for FP&A, AI in FP&A, AI variance analysis, AI variance commentary, AI for CFOs, AI coach for CFOs, AI-native CFO, London",
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
        { label: "AI for FP&A" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI for CFOs · Updated {MOD}</span>
      <h1>AI for FP&amp;A: Start With the Commentary, Not the Model</h1>
      <p className="op-lede">
        An FP&amp;A team should start using AI on the monthly variance
        commentary, because it takes 2 to 4 analyst days a month, it follows
        rules you can write down, and every sentence can be checked against
        the ledger. Leave the forecast model alone for the first 90 days, and
        move the agent on to budget holder questions and scenarios only once
        your controller keeps 8 of every 10 lines it drafts without an edit.
      </p>

      <h2>Why FP&amp;A teams start in the wrong place</h2>
      <p>
        Most finance teams I meet start with the model. Someone asks an AI
        tool to rebuild the 3 statement model or predict next quarter, and 6
        weeks later the CFO has a forecast nobody can trace and a team that
        trusts AI less than before. The model is the one place where a
        wrong number goes straight into the board pack and the bank
        covenant test.
      </p>
      <p>
        Commentary is the opposite. It&apos;s repetitive: the same 30 to 60
        lines explained every month. It has a right answer you can check:
        the revenue line moved because 2 named customers renewed late, and
        the CRM says so. And it eats the week. In a 100 to 300 person
        company I usually find the team spends working days 3 to 6 writing
        sentences about numbers that were final on day 2. That&apos;s the
        work to hand over first.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look2-forbes-2.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds FP&amp;A agents inside finance teams
          and coaches CFOs one to one on the same work.
        </figcaption>
      </figure>

      <h2>The five steps I use inside an FP&amp;A team</h2>

      <h3>1. Time one month end before you build anything</h3>
      <p>
        For one cycle, every analyst logs their hours in half day blocks
        against 5 buckets: pulling data, reconciling, writing commentary,
        answering budget holders, and modelling. It costs nothing and it
        settles the argument. If commentary and budget holder questions
        together take more than 3 days, that&apos;s your first build. If
        pulling data takes longer than both, fix the data feed first, because
        an agent can&apos;t write about numbers it can&apos;t reach.
      </p>

      <h3>2. Write the commentary rulebook</h3>
      <p>
        This is a 2 page document your best analyst could hand to a new
        joiner. It holds the materiality line (I use any variance over
        £10,000 or 5% of budget, whichever is bigger), the list of
        acceptable causes (timing, volume, price, one off, reclass, error),
        the house words for each, and the sources that prove a cause: CRM
        for revenue, HR for payroll, purchase orders for suppliers. The
        agent loads this every run. When a sentence is wrong, you fix the
        rulebook, not the sentence.
      </p>

      <h3>3. Calculate first, then let the agent write</h3>
      <p>
        The variances are worked out in the ledger or the spreadsheet, the
        way they are today. The agent never does arithmetic. It reads the
        finished variance table, picks every line over the materiality
        line, looks up the cause in the source systems, and writes one or 2
        sentences per line. Every sentence carries a tag back to the rows it
        read, so the controller can click from &quot;marketing is £18,400
        over because of the March conference&quot; to the 3 invoices. I set
        the draft to land by 08:00 on working day 3.
      </p>

      <h3>4. Measure the keep rate, and gate on it</h3>
      <p>
        The controller marks each drafted line keep, edit or delete. That
        one column is the whole performance review. In the first month
        I&apos;d expect 5 or 6 of 10 lines kept. Every edit goes back into
        the rulebook as a new rule or a new cause. The draft goes into the
        board pack only after 2 months in a row at 8 of 10 or better. Most
        teams get there by month 3.
      </p>

      <h3>5. Then move outward, one stage at a time</h3>
      <p>
        Once commentary passes, the same agent and rulebook take the next
        job. Each stage has a gate, and nothing skips one.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Stage</th>
            <th style={th}>What the agent does</th>
            <th style={th}>Gate to move on</th>
            <th style={th}>Typical timing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Variance commentary</td>
            <td style={td}>Drafts one sentence per material line, source tagged</td>
            <td style={td}>8 of 10 lines kept, 2 months running</td>
            <td style={td}>Months 1 to 3</td>
          </tr>
          <tr>
            <td style={td}>Budget holder questions</td>
            <td style={td}>Answers &quot;why is my cost centre over&quot; from the same data, read only</td>
            <td style={td}>Under 1 in 10 answers escalated to an analyst</td>
            <td style={td}>Months 3 to 4</td>
          </tr>
          <tr>
            <td style={td}>Pack narrative</td>
            <td style={td}>Drafts the 1 page summary the CFO opens the pack with</td>
            <td style={td}>CFO rewrites under a third of it</td>
            <td style={td}>Months 4 to 5</td>
          </tr>
          <tr>
            <td style={tdLast}>Scenarios</td>
            <td style={tdLast}>Changes inputs on a copy of the model, never formulas</td>
            <td style={tdLast}>Every run logged with who asked and what changed</td>
            <td style={tdLast}>Month 6 onward</td>
          </tr>
        </tbody>
      </table>
      <p>
        Budget holder questions are the quiet win. A head of sales who can
        ask at 21:00 why their travel line is £6,000 over, and get an answer
        with the 4 expense claims attached, stops emailing your analyst the
        next morning. The forecast drivers come last, and I cover how to
        build them in the{" "}
        <Link href="/blog/ai-financial-forecasting">AI financial forecasting guide</Link>.
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
        When I ran FP&amp;A myself, the commentary was the part I dreaded
        and the part the board read most closely. Buyers in due diligence
        read it too. They line up 24 months of it and check whether the
        stories agree with each other. Inside one client today the agent
        drafts commentary overnight from the ledger, the CRM and the HR
        system, and the same agent keeps a live cash runway figure that the
        CFO sees every morning. The analysts spend working day 3 arguing
        about the 4 or 5 lines that matter. I&apos;d rather they did that
        than type the other 40.
      </p>

      <h2>Can AI do variance analysis?</h2>
      <p>
        Yes, if the maths is done before the model sees it. Calculate the
        variances in the ledger or a spreadsheet, then give the agent the
        numbers, your materiality line and the source systems that explain
        causes: CRM, HR, purchase orders. It writes one sentence per line
        over the threshold, each tagged to the rows it read. A person still
        signs it. The agent should never calculate a variance in its head.
      </p>

      <h2>What are the best AI use cases in FP&amp;A?</h2>
      <p>
        In the order I build them: variance commentary, answers to budget
        holder questions, the first draft of the monthly pack narrative,
        scenario runs on a copy of the model, and collecting budget inputs.
        Each one reads data you already hold and produces something a person
        checks. Forecast drivers come later, and only the ones with 24
        months of history and a written rule.
      </p>

      <h2>Will AI replace FP&amp;A analysts?</h2>
      <p>
        It replaces the part of the job that is copying numbers into
        sentences. In the teams I run, that&apos;s about 2 to 4 days of
        every month. The analyst keeps the judgement: which variance
        matters, what the budget holder isn&apos;t saying, what the board
        will ask. A 4 person FP&amp;A team usually stays at 4 and spends the
        freed days on pricing, unit economics and the next raise.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do with CFOs one to one and inside FP&amp;A teams.
        In the first session we time your last month end and write the
        commentary rulebook together, and by your next close the agent is
        drafting beside your analysts. For the wider build order see{" "}
        <Link href="/blog/ai-agents-for-finance">the first five finance agents</Link>,
        and for the tool see{" "}
        <Link href="/blog/claude-for-finance">Claude for finance teams</Link>.
        The map of the whole topic is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>, the end state is at{" "}
        <Link href="/ai-native-cfo">the AI-native CFO</Link>, and the sessions
        are at <Link href="/coach">coaching for CFOs</Link>. How many days
        did your team spend on commentary last month? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
