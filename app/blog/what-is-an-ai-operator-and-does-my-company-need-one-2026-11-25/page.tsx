import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-is-an-ai-operator-and-does-my-company-need-one-2026-11-25";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-25";
const MOD = "2026-11-25";
const TITLE = "What Is an AI Operator, and Does My Company Need One?";
const DESC =
  "An AI operator builds the AI agents that run parts of your company and then runs them after go-live: picks the process, wires the agent into your systems, sets what it may and may not do, and owns its output every week. You need one once you're past 30 people, have a process eating 20 or more hours a week, and nobody owns getting AI from pilot to production.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-portrait-with-background.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for what is an ai operator, and does my company need one";

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
  "An AI operator is the person who builds the AI agents that run parts of your company and then keeps running them after go-live: they pick the process, wire the agent into your real systems, set what it may and may not do, and own its output every week. Your company needs one once you're past 30 people, at least one process eats 20 or more hours of manual work a week, and nobody inside owns getting AI from a pilot into production.";

const FAQ_DAY =
  "Mornings start with the exception queue: the 5 to 15% of items each agent couldn't handle on its own, such as an invoice with no purchase order or a lead with no company match. The operator clears them, then changes the agent's rules so the same exception doesn't come back. The rest of the week goes on the next process, a monthly check of every agent against its baseline, and a short note to the owner of each function.";

const FAQ_CONSULTANT =
  "A consultant tells you what to automate and hands over a plan. An operator builds it, puts it live inside your systems and is still answerable for it 6 months later. If the deliverable is a slide deck or a roadmap, you've hired a consultant. If it's an agent that matched last night's bank lines and a log showing who approved what, you've hired an operator. Plenty of firms sell the first under the name of the second.";

const FAQ_FRACTIONAL =
  "For a company of 30 to 500 people I'd start fractional, 1 to 2 days a week, for the first 6 to 9 months. That's enough to get 3 or 4 agents live across 2 functions. Once that many agents run every day, hire an AI operations manager in house to look after them, and keep the operator for the next build. A full-time operator before your first agent is live usually spends month one writing a strategy.";

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
        { "@type": "Thing", name: "AI operator" },
        { "@type": "Thing", name: "AI agent operator" },
        { "@type": "Thing", name: "AI agents for business operations", url: `${SITE}/services/ai-agent-operator/` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI operator, and does my company need one?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "What does an AI operator do day to day?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_DAY },
        },
        {
          "@type": "Question",
          name: "What is the difference between an AI operator and an AI consultant?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_CONSULTANT },
        },
        {
          "@type": "Question",
          name: "Should an AI operator be a full-time hire or fractional?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_FRACTIONAL },
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
      keywords: "Hayat Amin, AI operator, AI agent operator, fractional AI operator, AI agents for business, AI-native CFO, AI coach for CFOs, London",
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
        { label: "What Is an AI Operator?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI operator · Updated {MOD}</span>
      <h1>What Is an AI Operator, and Does My Company Need One?</h1>
      <p className="op-lede">
        An AI operator is the person who builds the AI agents that run parts
        of your company and then keeps running them after go-live: they pick
        the process, wire the agent into your real systems, set what it may
        and may not do, and own its output every week. Your company needs one
        once you&apos;re past 30 people, at least one process eats 20 or more
        hours of manual work a week, and nobody inside owns getting AI from a
        pilot into production.
      </p>

      <h2>Why companies hire the wrong person for this</h2>
      <p>
        When a CEO decides the company should be using AI, the money usually
        goes one of two ways. Either it buys 4 to 6 tool subscriptions and asks
        each team lead to find a use for them, or it pays a consultancy for a
        roadmap. I&apos;ve walked into plenty of 100 person companies after
        both. The picture is the same each time: 2 or 3 pilots that impressed
        someone in a demo, and no agent touching a live ledger, CRM or
        support queue.
      </p>
      <p>
        The gap is ownership. A tool doesn&apos;t own an outcome and a roadmap
        doesn&apos;t either. The pilot needs someone to connect it to the
        finance system with its own login, decide what happens when it&apos;s
        wrong, and be the name on the hook when it misfires at 6am on day 3.
        Without that person, I&apos;d expect most pilots to be quietly
        switched off inside 90 days. I wrote up the pattern in{" "}
        <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24">
          why AI pilots never reach production
        </Link>
        .
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-portrait-with-background.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the AI agents behind a
          company&apos;s finance and operations, and coaches CFOs one to one
          on the same work.
        </figcaption>
      </figure>

      <h2>The four jobs an AI operator does</h2>

      <h3>1. Picks the process by hours and cost of error</h3>
      <p>
        I score every candidate on 2 numbers: manual hours a week and what a
        mistake costs. The first agent goes on something with 20 or more
        hours a week and a mistake you can catch before it leaves the
        building. Bank matching, supplier invoice coding, lead research and
        new joiner onboarding all qualify. Pricing decisions and anything a
        regulator reads don&apos;t, at least not first.
      </p>

      <h3>2. Builds the agent inside your systems</h3>
      <p>
        The agent gets its own login to the ledger, the CRM or the HR system,
        with read access to what it needs and nothing else. It works on your
        live data, not an export someone remembers to refresh on Mondays. A
        first agent like this takes me 4 to 6 weeks from the first
        conversation to running every day.
      </p>

      <h3>3. Draws the permission line</h3>
      <p>
        Every agent I build drafts and a person approves. It can match,
        code, research and write. It can&apos;t post a journal, release a
        payment or email a customer without someone pressing the button.
        In finance I set the line in money as well: anything over £10,000
        goes to a named person, never a shared inbox. That rule is why a
        controller trusts the output by week 3.
      </p>

      <h3>4. Runs it after go-live</h3>
      <p>
        This is the part most buyers forget to pay for. Every morning the
        agent leaves an exception queue, usually 5 to 15% of items in the
        first month. The operator clears those and fixes the rule behind
        each one, so the rate falls month on month. Once a month each agent
        is measured against the baseline it replaced: hours, error rate and
        days to close. If it can&apos;t beat the baseline by month 3, I
        switch it off.
      </p>

      <h2>Where the operator sits next to the other AI roles</h2>
      <p>
        Buyers mix these four roles up all the time, and the order matters
        more than the job titles.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Role</th>
            <th style={th}>What you get</th>
            <th style={th}>When it fits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>AI consultant</td>
            <td style={td}>A plan and a priority list</td>
            <td style={td}>Board wants a view before spending</td>
          </tr>
          <tr>
            <td style={td}>AI operator</td>
            <td style={td}>Agents live in your systems, and run</td>
            <td style={td}>0 agents in production, 30 to 500 people</td>
          </tr>
          <tr>
            <td style={td}>AI operations manager</td>
            <td style={td}>Live agents kept right, day to day</td>
            <td style={td}>3 or more agents across 2 functions</td>
          </tr>
          <tr>
            <td style={tdLast}>Chief AI officer</td>
            <td style={tdLast}>AI owned at board level</td>
            <td style={tdLast}>Usually 500+ people, many systems live</td>
          </tr>
        </tbody>
      </table>

      <p>
        The operator comes first because the other three roles need
        something running to manage. I&apos;ve covered the in house hire in{" "}
        <Link href="/blog/what-does-an-ai-operations-manager-do-and-should-i-hire-one-2026-10-06">
          what an AI operations manager does
        </Link>{" "}
        and the board seat in{" "}
        <Link href="/blog/do-you-really-need-a-chief-ai-officer-2026-11-06">
          do you need a chief AI officer
        </Link>
        .
      </p>

      <h2>When your company doesn&apos;t need one yet</h2>
      <p>
        Under 30 people, a founder who likes the tools and a ChatGPT or Claude
        team workspace will get you most of the way. The same goes if your
        biggest manual process takes under 10 hours a week, because the build
        won&apos;t pay back inside a year. And if your data lives in 40
        spreadsheets with no ledger behind them, fix that first. An agent
        built on a mess automates the mess at speed.
      </p>

      <h2>From my operating seat</h2>
      <p>
        I&apos;m Hayat Amin, an AI-native CFO, AI operator and AI coach for
        CFOs who teaches finance leaders how to build AI into finance
        operations. I spent twenty years in the C-suite, with three exits and
        three FT100 listings. Now I build and run AI agent systems inside
        companies, across finance, sales pipeline, onboarding and compliance
        evidence, and I coach CFOs one to one.
      </p>
      <p>
        Inside one client I run 3 agents. One researches every new target
        account overnight, so the sales team starts at 9 with a brief on each
        prospect. One reconciles every bank account before 6am and posts a
        single live cash runway figure. One onboards new joiners in their own
        language, with the policy pack and system access done before their
        first day. None of them can send, post or pay on their own, and I
        still read the exception queue every morning. That&apos;s what I
        mean by operator.
      </p>

      <h2>What does an AI operator do day to day?</h2>
      <p>{FAQ_DAY}</p>

      <h2>What is the difference between an AI operator and an AI consultant?</h2>
      <p>{FAQ_CONSULTANT}</p>

      <h2>Should an AI operator be a full-time hire or fractional?</h2>
      <p>{FAQ_FRACTIONAL}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies. I pick the first process with
        your team in week 1, have the agent running by week 6, and stay on to
        run it and build the next one. How I work is on the{" "}
        <Link href="/services/ai-agent-operator/">AI agent operator</Link>{" "}
        page, and if finance is where you want to start, the map is at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>. Which process in your
        company eats 20 hours a week and has nobody&apos;s name on it? Start
        at <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
