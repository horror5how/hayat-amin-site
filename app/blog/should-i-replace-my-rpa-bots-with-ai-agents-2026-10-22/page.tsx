import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "should-i-replace-my-rpa-bots-with-ai-agents-2026-10-22";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-22";
const MOD = "2026-10-22";
const TITLE = "Should I Replace My RPA Bots With AI Agents?";
const DESC =
  "Replace an RPA bot with an AI agent only where the bot breaks on input it can't read: PDFs in changing layouts, free text emails, exceptions a person clears by judgement. Keep the bots that key the same fields into the same screens, put an agent in front of them, and retire a bot only after 30 days of matched output.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-alt-office-wave-v3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for should i replace my rpa bots with ai agents?";

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
  "Replace an RPA bot with an AI agent only where the bot keeps breaking on input it can't read: PDFs that change layout, free text emails, and exceptions a person clears by judgement. Keep the bots that key the same fields into the same screens every day, put an agent in front of them to read the messy input, and retire a bot only after the agent has matched its output for 30 days.";

const FAQ_1 =
  "Not across the board. RPA is cheap and predictable at one job: clicking the same fields in the same screens. Agents are better at reading what arrives in a different shape every time. In the estates I work on, the agent takes over the reading and the bot or an API keeps the keying, so most companies end up running both for years.";
const FAQ_2 =
  "An RPA bot follows a script a person recorded, step by step, and stops when the screen or the input changes. An AI agent reads the input, decides what it is and picks its next step from the rules you give it. The bot is reliable and literal. The agent copes with variation and needs a person on its exception queue.";
const FAQ_3 =
  "Neither wins on its own. Use RPA where the input is structured and the screens don't change, because it runs for pennies and does the same thing every time. Use an AI agent where the input varies or needs judgement. The test I use is the exception queue: if a person handles more than 15% of a bot's cases by hand, an agent belongs in front of it.";

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
        { "@type": "Thing", name: "AI agents vs RPA" },
        { "@type": "Thing", name: "AI operations", url: `${SITE}/services/ai-agent-operator/` }],
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
          name: "Will AI agents replace RPA?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_1 },
        },
        {
          "@type": "Question",
          name: "What is the difference between RPA and AI agents?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_2 },
        },
        {
          "@type": "Question",
          name: "RPA or AI: which is better?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_3 },
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
      keywords: "Hayat Amin, AI agents vs RPA, replace RPA with AI agents, AI operator, AI agent operator, Dubai",
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
        { label: "RPA Bots or AI Agents" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>Should I Replace My RPA Bots With AI Agents?</h1>
      <p className="op-lede">
        Replace an RPA bot with an AI agent only where the bot keeps breaking
        on input it can&apos;t read: PDFs that change layout, free text
        emails, and exceptions a person clears by judgement. Keep the bots
        that key the same fields into the same screens every day, put an
        agent in front of them to read the messy input, and retire a bot only
        after the agent has matched its output for 30 days.
      </p>

      <h2>Why companies get this decision wrong</h2>
      <p>
        I see two mistakes, and they cost about the same. The first is the
        rip and replace programme. Someone reads that agents have made RPA
        obsolete, a board paper proposes rebuilding all 40 bots, and 9 months
        later the company is paying for the old licences, the new agents and
        a consultancy, while the finance team still keys half the invoices by
        hand.
      </p>
      <p>
        The second mistake is doing nothing because the bots &quot;work&quot;.
        Open the run logs and they often don&apos;t. A bot that reads supplier
        invoices fails every time a supplier changes its template, and each
        failure drops into a queue a person clears. I&apos;ve opened estates
        where 2 people spend most of their week feeding work to bots that
        were bought to save 3. Nobody counts that, because the bot shows as
        &quot;running&quot; on the dashboard.
      </p>
      <p>
        The right answer sits in the middle, and it&apos;s bot by bot.
        You can sort a whole estate in about 2 weeks if you look at the right
        number.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-alt-office-wave-v3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds and runs AI agent systems inside
          companies, and decides bot by bot which automations stay.
        </figcaption>
      </figure>

      <h2>Sort every bot by what it reads</h2>
      <p>
        A bot&apos;s fate depends on what it reads. Its age and its vendor
        matter far less. I put every bot into one of three rows before anyone
        talks about agents.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>What the bot reads</th>
            <th style={th}>Example</th>
            <th style={th}>Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Fixed fields in fixed screens</td>
            <td style={td}>Copying approved orders from the CRM into the ERP</td>
            <td style={td}>Keep the bot, or swap it for an API call</td>
          </tr>
          <tr>
            <td style={td}>Documents that vary in layout</td>
            <td style={td}>Supplier invoices, remittance advice, purchase orders</td>
            <td style={td}>Agent reads, bot or API keys</td>
          </tr>
          <tr>
            <td style={tdLast}>Free text that needs judgement</td>
            <td style={tdLast}>Customer emails, billing disputes, refund requests</td>
            <td style={tdLast}>Agent decides, a named person clears its exceptions</td>
          </tr>
        </tbody>
      </table>
      <p>
        In most companies of 50 to 500 people, the first row is the biggest.
        Those bots are cheap, they&apos;re literal, and they do the same thing
        every time. That&apos;s what you want from anything that keys data
        into a ledger.
      </p>

      <h2>The five steps I run on an RPA estate</h2>

      <h3>1. Pull 90 days of run logs</h3>
      <p>
        Every RPA platform logs runs, failures and cases sent to a person.
        I export 90 days for every bot and put three numbers next to each:
        runs, failures and the share of cases a human finished. That sheet
        takes 2 or 3 days to build and it settles most of the arguments
        before they start.
      </p>

      <h3>2. Flag bots on two thresholds</h3>
      <p>
        A bot becomes a candidate for an agent if it fails more than 4 times
        a month, or if people finish more than 15% of its cases by hand.
        Below both lines, leave it alone. In a typical estate of 30 to 40
        bots, I expect 5 to 10 to cross a line. Those are your project. The
        rest are fine.
      </p>

      <h3>3. Put the agent in front of the bot</h3>
      <p>
        The agent&apos;s job is reading. It takes the invoice, the email or
        the remittance in whatever shape it arrives, and turns it into one
        clean record with the same fields every time. The bot, or an API
        call where the system has one, does the keying. You keep the part
        that already works and replace only the part that keeps breaking.
        Build time is 3 to 6 weeks per process, most of it spent writing the
        rules with the person who clears the exceptions today.
      </p>

      <h3>4. Shadow for 30 days before you switch</h3>
      <p>
        For 30 days the agent runs alongside the current process and writes
        its answers to a sheet nobody acts on. I compare them line by line.
        The bar to switch is 98% agreement on the fields that matter
        (supplier, amount, account code, due date), and every miss explained.
        Anything that moves money keeps a person on the approval, after the
        switch as well as before it.
      </p>

      <h3>5. Retire bots on the licence calendar</h3>
      <p>
        Write the renewal date of every RPA licence on the sheet from step
        1, because that date sets the pace. I plan
        retirements so that no bot and its replacement are both paid for
        longer than one quarter. If a renewal falls before the agent has
        cleared its 30 days, renew the one bot and move the date. Paying
        twice for 3 months is cheaper than a broken payables run.
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
        The overnight bank matching I run inside finance teams follows this
        exact split. The agent reads bank lines and remittances in whatever
        format the customer sent, proposes the match and writes the reason
        next to it. Posting is a fixed, logged step a person approves the
        next morning. When I sold companies, the buyer&apos;s diligence team
        asked the same question about every process: who changed it, when,
        and where&apos;s the record? A bot with a run log answers that. An
        agent with no log doesn&apos;t, so every agent I build writes one.
      </p>

      <h2>Will AI agents replace RPA?</h2>
      <p>{FAQ_1}</p>

      <h2>What is the difference between RPA and AI agents?</h2>
      <p>{FAQ_2}</p>

      <h2>RPA or AI: which is better?</h2>
      <p>{FAQ_3}</p>

      <h2>Where I come in</h2>
      <p>
        This is work I build and run inside companies. I pull the run logs,
        sort every bot, pick the 5 to 10 that cost you people, and put an
        agent in front of the first one, shadowed for 30 days before
        anything switches. If you&apos;re still deciding where agents belong
        at all, read{" "}
        <Link href="/blog/ai-agents-vs-workflows-2026-10-22">AI agents vs workflows</Link>{" "}
        and{" "}
        <Link href="/blog/which-business-processes-should-i-automate-first-with-ai-2026-07-24">which processes to automate first</Link>.
        Finance leaders can start at <Link href="/ai-for-cfos">AI for CFOs</Link>.
        How many of your bots would cross the 15% line? See{" "}
        <Link href="/services/ai-agent-operator/">how I work as your AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link> and
        tell me.
      </p>
    </PageShell>
  );
}
