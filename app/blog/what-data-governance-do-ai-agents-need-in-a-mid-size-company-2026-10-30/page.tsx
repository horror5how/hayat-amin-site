import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-data-governance-do-ai-agents-need-in-a-mid-size-company-2026-10-30";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-30";
const MOD = "2026-10-30";
const TITLE = "What Data Governance Do AI Agents Need in a Mid-Size Company?";
const DESC =
  "AI agents in a 30 to 500 person company need five things before they touch live data: a one page access register per agent, four sensitivity classes, a separate login for every agent, a log of every read and write kept 12 months, and a named owner who signs off each dataset.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look2-forbes-3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for what data governance do ai agents need in a mid-size company?";

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
  "A mid-size company needs five pieces of data governance before an AI agent touches live data: a one page register of every dataset each agent reads or writes, four sensitivity classes, a separate login for every agent with the narrowest access that does the job, a log of every read and write kept for 12 months, and one named owner who signs off each dataset. That's 2 to 3 weeks of work for the first agent, and it costs far less than finding out later what an agent could see.";

const FAQ_1 =
  "No. A company of 30 to 500 people doesn't need a data governance team to start. It needs one person who holds the register, usually the CFO, the COO or the head of operations, and about 2 hours a week. The owners of each dataset are people who already exist: the finance manager owns the ledger, the head of sales owns the CRM. Hire a specialist when you pass 10 agents.";
const FAQ_2 =
  "Passwords, API keys, full card numbers and full bank account details should never reach an agent in readable form. Health records and anything covered by a court order come next. If an agent needs to match a bank account, give it the last 4 digits. If it needs to check a payroll total, give it the total, not the 140 lines of salaries behind it.";
const FAQ_3 =
  "Personal data stays personal data whatever reads it. If an agent processes customer or staff records, the model provider is a processor, so you need a data processing agreement with them, a line in your record of processing, and a contract term that says they don't train on your data. I check all three before an agent reads a single customer record.";

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
        { "@type": "Thing", name: "Data governance for AI agents" },
        { "@type": "Thing", name: "Data strategy", url: `${SITE}/services/ip-strategy/` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: TITLE,
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "Do I need a data governance team before using AI agents?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_1 },
        },
        {
          "@type": "Question",
          name: "What data should AI agents never be able to read?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_2 },
        },
        {
          "@type": "Question",
          name: "How does GDPR apply when AI agents use customer data?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_3 },
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
      keywords: "Hayat Amin, data governance for AI agents, AI data readiness, data strategy for agentic AI, AI operator, New York City",
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
        { label: "Data Governance for AI Agents" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>What Data Governance Do AI Agents Need in a Mid-Size Company?</h1>
      <p className="op-lede">
        A mid-size company needs five pieces of data governance before an AI
        agent touches live data: a one page register of every dataset each
        agent reads or writes, four sensitivity classes, a separate login for
        every agent with the narrowest access that does the job, a log of
        every read and write kept for 12 months, and one named owner who
        signs off each dataset. That&apos;s 2 to 3 weeks of work for the
        first agent, and it costs far less than finding out later what an
        agent could see.
      </p>

      <h2>Why companies get data governance wrong</h2>
      <p>
        Most companies I walk into have one of two problems. Either nobody
        has thought about it, and the first agent runs on an admin login
        someone in IT lent it, or the legal team has written a 30 page AI
        policy and no agent has gone live in 9 months.
      </p>
      <p>
        The admin login is the dangerous one. An agent built to code
        supplier invoices only needs 4 fields from the ledger. On an admin
        login it can read payroll, the board pack and every customer&apos;s
        bank details. Nothing goes wrong until the day a prompt pulls in the
        wrong file, and then you can&apos;t say what it saw, because nothing
        was logged.
      </p>
      <p>
        The 30 page policy fails the other way. It talks about AI in general,
        so nobody can tell whether the invoice agent is allowed or not. Every
        request goes to a committee that meets once a month. I&apos;d rather
        have one page per agent that a finance manager can read in 5
        minutes.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look2-forbes-3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in New York City. He sets the data rules for each AI
          agent before it goes live, then builds and runs the agents.
        </figcaption>
      </figure>

      <h2>The five pieces I put in place</h2>

      <h3>1. A one page access register for each agent</h3>
      <p>
        Before an agent is built, I write down every dataset it touches. For
        each one: the system, the tables or folders, whether the agent reads
        or writes, the sensitivity class and the owner. A typical first
        agent touches 3 to 6 datasets, so the register fits on one page. If
        it doesn&apos;t fit, the agent is doing too much and I split it.
      </p>

      <h3>2. Four sensitivity classes, with a rule for each</h3>
      <p>
        I don&apos;t use the 7 tier schemes that come out of big company
        security teams. Four classes cover a company of 30 to 500 people, and
        each one comes with a rule an agent can follow.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Class</th>
            <th style={th}>Examples</th>
            <th style={th}>Agent rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Public</td>
            <td style={td}>Website, price list, published accounts</td>
            <td style={td}>Read freely</td>
          </tr>
          <tr>
            <td style={td}>Internal</td>
            <td style={td}>Policies, product docs, supplier list</td>
            <td style={td}>Read if on the register</td>
          </tr>
          <tr>
            <td style={td}>Confidential</td>
            <td style={td}>Customer records, ledger, contracts, pipeline</td>
            <td style={td}>Read named fields only, writes go to a draft a person approves</td>
          </tr>
          <tr>
            <td style={tdLast}>Restricted</td>
            <td style={tdLast}>Bank details, salaries, health data, passwords</td>
            <td style={tdLast}>Masked or summed before the agent sees it, never written</td>
          </tr>
        </tbody>
      </table>
      <p>
        Classing the data takes 1 or 2 days for the systems the first agent
        uses. You don&apos;t class the whole company up front. You class
        each dataset the first time an agent asks for it.
      </p>

      <h3>3. A separate login for every agent</h3>
      <p>
        Every agent gets its own service account. It never borrows a
        person&apos;s login, and two agents never share one. The account
        gets the narrowest access that does the job, at field level where
        the system allows it. When an agent is retired, its account is
        switched off the same day. I review every agent account once a
        quarter against its register, and in my experience about 1 in 5 has
        picked up access it no longer uses.
      </p>

      <h3>4. A log of every read and write, kept 12 months</h3>
      <p>
        For each run the log records which records the agent read, what it
        wrote, which instruction it was following and who approved the
        output. I keep it for 12 months, or longer if your retention policy
        says so. Two things make the log worth having. An auditor can trace
        any posted entry back to its source in under 10 minutes. And when a
        customer asks what happened to their data, you can answer with a
        list instead of a guess.
      </p>

      <h3>5. One named owner per dataset</h3>
      <p>
        Every dataset on a register has one named owner who signs it off
        before the agent goes live. The finance manager owns the ledger, the
        head of sales owns the CRM, HR owns the staff records. Any change to
        what an agent can read goes back to that owner, and they answer
        within 2 working days. A name works better than a committee because
        the name answers.
      </p>

      <h2>From Hayat&apos;s operating seat</h2>
      <p>
        I&apos;m Hayat Amin, an AI-native CFO, AI operator and AI coach for
        CFOs who teaches finance leaders how to build AI into finance
        operations. I spent twenty years in the C-suite, with three exits and
        three FT100 listings. Now I build and run AI agent systems inside
        companies, across finance, sales pipeline, onboarding and compliance
        evidence, and I coach CFOs one to one.
      </p>
      <p>
        Every agent I run has its own register. The overnight pipeline
        research agent reads the CRM and public sources and writes notes to a
        draft field, never to the deal stage. The cash runway agent reads the
        bank feed and the ledger and can&apos;t write to either. The
        onboarding agent that answers a joiner in their own language reads
        the policy library and has no route to payroll at all. When I sold
        companies, due diligence asked who could see what, and how we knew.
        With agents the same question comes up, and the register and the log
        answer it in an afternoon.
      </p>

      <h2>Do I need a data governance team before using AI agents?</h2>
      <p>{FAQ_1}</p>

      <h2>What data should AI agents never be able to read?</h2>
      <p>{FAQ_2}</p>

      <h2>How does GDPR apply when AI agents use customer data?</h2>
      <p>{FAQ_3}</p>

      <h2>Where I come in</h2>
      <p>
        This is part of what I set up inside companies before the first agent
        goes live. I write the register with your dataset owners, class the
        data the agent needs, set up the logins and the log, and then build
        and run the agent on top. If your data isn&apos;t in shape yet, start
        with{" "}
        <Link href="/blog/how-do-i-get-my-companys-data-ready-for-ai-agents-2026-08-25">how to get your data ready for AI agents</Link>{" "}
        and{" "}
        <Link href="/blog/how-do-i-make-ai-agents-safe-enough-to-run-real-operations-2026-08-31">how to make agents safe enough for real operations</Link>.
        Finance leaders can start at <Link href="/ai-for-cfos">AI for CFOs</Link>.
        Could you name today which of your datasets your first agent would
        read? See <Link href="/services/ip-strategy/">how I work on data
        and IP strategy</Link>, or start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
