import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "which-business-processes-should-i-automate-first-with-ai-2026-07-24";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-24";
const MOD = "2026-08-19";
const TITLE = "Which Business Processes Should I Automate First With AI?";
const DESC =
  "Automate the process that is high volume, rule-based, and already measured. Start with support ticket triage, invoice and expense processing, lead qualification, or reporting, and skip anything judgement-heavy until you have one agent running in production.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-presentation.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin advises founders on which business processes to automate first with ai.";

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
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [PORTRAIT] },
};

const LEAD_ANSWER =
  "Automate the process that is high volume, rule-based, and already measured, in that order. In practice that means support ticket triage, invoice and expense processing, lead qualification and routing, or recurring reporting, because each one runs hundreds of times a month, follows a policy a human can write down in a page, and already has a number attached to it so you can prove the agent worked. Leave anything that needs judgement, negotiation, or a legal signature until you have one agent live in production for 90 days. The first process is not the one that impresses the board. It is the one that is boring enough to get right.";

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
          name: "Which business processes should I automate first with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "How do I measure ROI on an AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Measure it as hours removed times fully loaded hourly cost, minus build and running cost, over a 12 month window. Baseline the process before you build: how many times it runs a month, how many minutes each run takes, and the current error rate. A support triage agent handling 2,000 tickets a month at 4 minutes each removes about 133 hours, which is roughly 5,300 US dollars a month at a 40 dollar fully loaded rate. Against a 25,000 dollar build and 800 dollars a month in tokens and tooling, that pays back in about 6 months. If you cannot state the baseline number in one sentence, you are not ready to build.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy an AI tool or build my own agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buy when the process is generic and the vendor already sees more of it than you ever will, which covers meeting notes, transcription, code assistance, and most CRM enrichment. Build when the process runs on your own data, your own policies, and your own systems, because that is where a vendor cannot match you and where the advantage compounds. The rule I use with clients is buy the commodity, build the moat. A 40 person company should be paying for 6 to 10 tools and building 1 or 2 agents, not the other way round.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get an AI agent into production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Six to ten weeks for a first agent on a well-scoped process, assuming the data it needs is already accessible. Roughly two weeks to document the process and set the baseline, three to four weeks to build and test against historical cases, two weeks running in shadow mode where the agent proposes and a human approves, then a staged cutover. Teams that skip shadow mode ship faster and roll back more. The delay is almost never the model. It is access to the systems the agent has to read and write.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption:
        "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates)",
      name: "Hayat Amin, Dubai",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, AI automation, AI agents, business process automation, operational excellence, AI ROI, ticket triage, invoice processing, Dubai",
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

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Which Business Processes Should I Automate First With AI?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>Which Business Processes Should I Automate First With AI?</h1>
      <p className="op-lede">
        Automate the process that is high volume, rule-based, and already
        measured, in that order. In practice that means support ticket triage,
        invoice and expense processing, lead qualification and routing, or
        recurring reporting, because each one runs hundreds of times a month,
        follows a policy someone can write down in a page, and already carries a
        number you can use to prove the agent worked. Leave anything that needs
        judgement, negotiation, or a legal signature until you have one agent
        live in production for 90 days. The first process is not the one that
        impresses the board. It is the one boring enough to get right.
      </p>

      <h2>Why CEOs get this wrong</h2>
      <p>
        The common mistake is starting with the hardest process because it is the
        one that hurts most. A CEO looks at the org chart, spots the bottleneck
        that costs the company real money, and points the first AI project
        straight at it. That process is usually the one with the most exceptions,
        the least documentation, and the most senior people defending it. Six
        months later the pilot is dead and the company concludes AI does not work
        here.
      </p>
      <p>
        The numbers back that up. Somewhere between 70 and 80 percent of
        corporate AI pilots never reach production, and the reason is almost
        never model quality. It is scope. I have watched a 120 person company
        burn nine months and about 400,000 US dollars trying to automate contract
        review, a process with 40 edge cases and a general counsel who was never
        going to accept an agent output without reading it anyway. The same team
        automated invoice coding in seven weeks and got back 60 hours a month on
        the first try.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-presentation.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds AI agent systems for founders and CEOs
          across NYC, London, and Dubai.
        </figcaption>
      </figure>

      <h2>The framework I use with clients</h2>
      <p>
        Five steps. Run every candidate process through them before anyone writes
        a line of code.
      </p>
      <ol>
        <li>
          <strong>Count the runs.</strong> Only consider a process that executes
          at least 200 times a month. Below that, the build cost never clears the
          saving and you are automating for the story. Pull the count from your
          helpdesk, your accounting system, or your CRM, not from a manager
          estimate, because estimates run 2 to 3 times high.
        </li>
        <li>
          <strong>Test whether the rules fit on one page.</strong> Ask the person
          who does the work to write the decision rules down. If it takes more
          than a page, or if they answer more than 3 questions with it depends,
          the process is judgement work and belongs in phase two. One page means
          an agent can follow it and you can test it.
        </li>
        <li>
          <strong>Check the data is already reachable.</strong> The agent needs
          read and write access through an API to every system in the loop. If
          the process touches a spreadsheet on someone laptop or a legacy system
          with no API, fix that first or pick a different process. Access, not
          intelligence, is what stalls 8 out of 10 builds I inherit.
        </li>
        <li>
          <strong>Set the baseline before you build.</strong> Three numbers:
          runs per month, minutes per run, error rate today. Without them you
          cannot prove the agent worked, and an unproven agent gets cut in the
          next budget round. Write the three numbers in the project brief and get
          the process owner to sign it.
        </li>
        <li>
          <strong>Run it in shadow mode for two weeks.</strong> The agent
          proposes, a human approves, and you log every disagreement. When the
          agreement rate holds above 95 percent for 10 straight working days,
          cut over and keep the human on exceptions only. Skipping this step is
          how a company ends up rolling back in week three with the team
          convinced the whole idea was wrong.
        </li>
      </ol>
      <table className="op-table">
        <thead>
          <tr><th>Process</th><th>Start here?</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td>Support ticket triage and routing</td><td>Yes, first</td><td>High volume, clear rules, measured already</td></tr>
          <tr><td>Invoice coding and expense processing</td><td>Yes, first</td><td>Repetitive, policy-driven, easy to audit</td></tr>
          <tr><td>Lead qualification and routing</td><td>Yes, first</td><td>Volume plus a revenue number attached</td></tr>
          <tr><td>Recurring reporting and board packs</td><td>Yes, first</td><td>Same shape every month, painful by hand</td></tr>
          <tr><td>Customer onboarding steps</td><td>Phase two</td><td>Works once the data flows are wired</td></tr>
          <tr><td>Contract review and negotiation</td><td>Later</td><td>Judgement heavy, legal sign-off anyway</td></tr>
          <tr><td>Hiring decisions and performance reviews</td><td>Later</td><td>Bias and compliance risk outweigh the saving</td></tr>
        </tbody>
      </table>

      <h2>From my operating seat</h2>
      <p>
        I run finance and operations for companies as a fractional CFO, and the
        first agent I build is nearly always in my own function, because that is
        where the numbers are cleanest. At one client we started with invoice
        coding: 1,400 invoices a month, about 3 minutes each, a coding error rate
        near 6 percent. The agent went live in seven weeks, took the error rate
        under 1 percent, and gave the finance team back roughly 70 hours a month.
        That saving paid for the next two agents, which is the real reason to
        start small. The first one funds the programme.
      </p>
      <p>
        When I sold my last company, the thing a buyer probed hardest was not the
        tooling, it was whether the process still ran when a key person left.
        Agents built on documented rules survive that question. Agents built on
        one person tribal knowledge do not, and they get discounted in diligence
        along with everything else that walks out the door. So I write the rules
        down first and build second, every time. Slower in week one, far cheaper
        by month six.
      </p>

      <h2>How do I measure ROI on an AI agent?</h2>
      <p>
        Hours removed times fully loaded hourly cost, minus build and running
        cost, over 12 months. Baseline the process first: runs per month, minutes
        per run, error rate. A triage agent handling 2,000 tickets a month at 4
        minutes each takes out about 133 hours, roughly 5,300 US dollars a month
        at a 40 dollar loaded rate. Set that against a 25,000 dollar build and
        800 dollars a month in tokens and tooling and it pays back in about 6
        months. If you cannot state the baseline in one sentence, you are not
        ready to build.
      </p>

      <h2>Should I buy an AI tool or build my own agent?</h2>
      <p>
        Buy when the process is generic and a vendor already sees more of it than
        you ever will: meeting notes, transcription, code assistance, most CRM
        enrichment. Build when the process runs on your own data, your own
        policies, and your own systems, because that is where a vendor cannot
        match you and where the advantage compounds. Buy the commodity, build the
        moat. A 40 person company should be paying for 6 to 10 tools and building
        1 or 2 agents, not the reverse.
      </p>

      <h2>How long does it take to get an AI agent into production?</h2>
      <p>
        Six to ten weeks for a first agent on a well-scoped process, assuming the
        data is already reachable. Two weeks to document the process and set the
        baseline, three to four weeks to build and test against historical cases,
        two weeks in shadow mode, then a staged cutover. Teams that skip shadow
        mode ship faster and roll back more often. The delay is almost never the
        model. It is access to the systems the agent has to read and write.
      </p>

      <div className="op-cta-block">
        <h2>Pick the boring process, prove the number, then scale</h2>
        <p>
          This is the exact problem I work on with CEOs: picking the first
          process, setting a baseline the board will accept, building the agent,
          and running it in shadow mode until the numbers hold. Get the first one
          right and it funds the next five. Get it wrong and the company decides
          AI does not work here. See more about{" "}
          <Link href="/services/ai-agent-operator/">how I work as an AI agent operator</Link> or{" "}
          <Link href="/contact">book a call</Link>.
        </p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <p className="op-byline">
        <em>About this article:</em> Written by{" "}
        <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO, AI
        agent operator, and IP &amp; data strategist with three exits. Last
        updated {MOD}.
      </p>
    </PageShell>
  );
}
