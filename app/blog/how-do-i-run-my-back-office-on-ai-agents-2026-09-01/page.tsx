import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-run-my-back-office-on-ai-agents-2026-09-01";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-01";
const MOD = "2026-09-01";
const TITLE = "How Do I Run My Back Office on AI Agents?";
const DESC =
  "You do not buy a back office AI platform. You write the function down as five to eight named processes, rank them by monthly volume times rule density, and convert one every six to eight weeks behind a queue, a system of record, and a named human on exceptions.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look5-sidelight-4.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for how do i run my back office on ai agents";

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
  "You run a back office on AI agents by converting one named process at a time, never the department in one go. Write the function down as five to eight processes, each with a trigger, an input, a rule, an output and one system of record, rank them by monthly volume multiplied by rule density, then rebuild the top one as a queue with an agent doing the work, scoped write access into the system of record, and a named person owning the exceptions. Budget six to eight weeks per process and expect 10 to 20 percent of volume to stay with a human permanently. There is no platform you buy that does this for you, because the hard part is the decomposition and the ownership, not the model.";

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
          name: "How do I run my back office on AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Will AI agents replace my back office team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, they replace roughly half the task volume and change what the rest of the team does. On a back office process with real rule density, expect 40 to 70 percent of the human hours to come out, with the remainder sitting in exceptions, judgement calls and supplier or customer conversations that a person handles better. The team shape changes from six people processing items to three people running an exceptions desk and owning agent outputs. In a growing company that usually shows up as headcount you did not add rather than headcount you removed.",
          },
        },
        {
          "@type": "Question",
          name: "What does it cost to run a back office on AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Per process, the build is the smaller half of the cost and the running is the half people forget. Model and infrastructure spend on a mid volume back office process is typically the cheapest line on the sheet. The real costs are the integration work into the system of record, the review time of whoever signs the output, and a maintenance budget of 20 to 40 percent of build every year, because upstream systems change and an unmaintained agent degrades quietly. Budget per process, not per department, and put the number next to the fully loaded cost of the hours it removes.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to replace my back office software to use AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and replacing it first is the most common way to lose a year. Agents work against the systems you already run, through the API where one exists and through a scoped service account where it does not. What matters is that each process has exactly one system of record the agent writes into, so there is a single place to audit what happened. If your ERP or ledger has no API at all, that is an argument to fix one integration point, not to run a migration programme before any agent goes live.",
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
      keywords: "Hayat Amin, AI back office, back office AI agents, back office automation, AI operations, exceptions desk, system of record, fractional CFO, AI operator, Dubai",
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
        { label: "How Do I Run My Back Office on AI Agents?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Run My Back Office on AI Agents?</h1>
      <p className="op-lede">
        You run a back office on AI agents by converting one named process at a
        time, never the department in one go. Write the function down as five to
        eight processes, each with a trigger, an input, a rule, an output and one
        system of record, rank them by monthly volume multiplied by rule density,
        then rebuild the top one as a queue with an agent doing the work, scoped
        write access into the system of record, and a named person owning the
        exceptions. Budget six to eight weeks per process. There is no platform
        you buy that does this for you, because the hard part is the
        decomposition and the ownership, not the model.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        The usual attempt is a department sized one. Someone says the back office
        should run on AI, a vendor demos an assistant that sits on top of
        everything, and six months later there is a chat box that answers
        questions about invoices while every invoice is still keyed by a person.
        Nothing moved, because a chat box is a retrieval product and a back
        office is a queue. The work is items arriving, being decided, and landing
        in a system. Until an agent writes into that system, you have bought
        commentary on the work rather than the work.
      </p>
      <p>
        The second mistake is starting where the pain is loudest instead of where
        the rules are clearest. The noisiest process in most companies is the one
        with angry humans on both ends and no written rule anywhere, which makes
        it the worst first candidate. I have seen a finance team spend four
        months on supplier dispute handling, the process everyone complained
        about, and get nowhere, while three thousand supplier invoices a month
        with a documented three way match sat untouched next to it.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look5-sidelight-4.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds and runs the AI systems that run finance
          and operations inside companies in London, NYC, and Dubai.
        </figcaption>
      </figure>

      <h2>The framework I use with clients</h2>
      <p>
        Five steps. The order matters more than the tooling, and the first two
        happen on paper before anyone opens a model.
      </p>
      <p>
        <strong>One: write the back office down as processes, not departments.</strong>{" "}
        A department is a budget line. A process is a thing an agent can be given.
        For each one, name five fields: what triggers it, what arrives, what rule
        decides it, what comes out, and which single system holds the answer
        afterwards. Most mid size companies land on five to eight processes per
        function. If a process needs a paragraph to explain the rule, split it
        into two until each half fits one sentence.
      </p>
      <p>
        <strong>Two: rank by volume multiplied by rule density.</strong> Volume is
        items per month. Rule density is the share of those items decided by
        something written down rather than by someone deciding how they feel about
        it. Both are needed. A thousand items a month decided on judgement is a
        bad first project, and forty items decided by a perfect rule is not worth
        the integration. My working thresholds:
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid rgba(128,128,128,0.4)", padding: "0.5rem 0.4rem" }}>Monthly volume</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid rgba(128,128,128,0.4)", padding: "0.5rem 0.4rem" }}>Rule density</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid rgba(128,128,128,0.4)", padding: "0.5rem 0.4rem" }}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>200 or more</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>80 percent or more</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>Convert first</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>200 or more</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>50 to 80 percent</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>Second wave, permanent human review</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>Under 200</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>Any</td>
            <td style={{ padding: "0.5rem 0.4rem", borderBottom: "1px solid rgba(128,128,128,0.15)" }}>Leave it with a person</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem 0.4rem" }}>Any</td>
            <td style={{ padding: "0.5rem 0.4rem" }}>Under 50 percent</td>
            <td style={{ padding: "0.5rem 0.4rem" }}>Write the rule down first, then reassess</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Three: rebuild the top process as a queue, and run it in shadow
        for four weeks.</strong> Items arrive into a queue. The agent produces the
        answer. A human still does the real work in parallel and the two answers
        are compared every day. Four weeks, because one week is noise. The
        promotion bar goes in writing before you start: on rule shaped work with
        documentary evidence behind it I want 90 to 95 percent agreement across
        two full cycles before the agent touches production. Write that number
        down in advance, or a sponsor with momentum will argue a 70 percent agent
        into live.
      </p>
      <p>
        <strong>Four: give the agent the systems, not the screenshots.</strong>{" "}
        One system of record per process, scoped write access with its own service
        account, and every action logged with the inputs that produced it. This is
        the step that turns a demo into operations. If the agent cannot post the
        journal, raise the credit note, or move the ticket to closed, a person is
        still doing the job and you have automated the thinking rather than the
        work. Scope the credentials tightly, because an agent with your finance
        team's full permissions is a control failure waiting for a bad week.
      </p>
      <p>
        <strong>Five: staff the exceptions desk on purpose.</strong> Between 10 and
        20 percent of volume will not go through the agent, and that is the design
        rather than a defect. Name one person per process who owns that queue,
        with a service level on it. The exceptions desk is also where you learn:
        every exception is either a rule you had not written down or a genuine
        judgement call, and sorting them into those two piles each month is what
        moves the automated share up over the following quarters. Expect nine to
        twelve months to cover a full function at one process every six to eight
        weeks.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, the pipeline research that used to eat a
        morning now happens overnight, and the team arrives to a queue of briefed
        accounts rather than a list of names to look up. Cash runway is live in
        the same system instead of being rebuilt in a spreadsheet each month end,
        and onboarding runs in the joiner's own language on day one. None of that
        arrived as a platform. Each was one process, decomposed, shadowed, then
        promoted, with one person named against it.
      </p>
      <p>
        Twenty years in the C-suite, three exits and three FT100 listings taught
        me what this looks like from the other side of a data room. A buyer does
        not pay for an AI story. They pay for a function that runs with fewer
        people and can be handed over, which means documented processes, an
        auditable log of what the agents did, and no single person holding the
        knowledge in their head. The decomposition work above produces exactly
        that documentation as a side effect. That is the part I would do even if
        the agents never got built.
      </p>

      <h2>Will AI agents replace my back office team?</h2>
      <p>
        They replace roughly half the task volume and change what the rest of the
        team does. On a process with real rule density, 40 to 70 percent of the
        human hours come out, and the remainder sits in exceptions, judgement
        calls and the supplier or customer conversations a person handles better.
        Six people processing items becomes three people running an exceptions
        desk and owning agent outputs. In a growing company it usually shows up as
        headcount you did not add rather than headcount you removed.
      </p>

      <h2>What does it cost to run a back office on AI agents?</h2>
      <p>
        Budget per process and count both halves. Model and infrastructure spend
        on a mid volume process is normally the cheapest line on the sheet. The
        real costs are the integration into the system of record, the review time
        of whoever signs the output, and maintenance at 20 to 40 percent of build
        every year, because upstream systems change and an unmaintained agent
        degrades quietly until someone spots a wrong output in front of a
        customer. Put that total next to the fully loaded cost of the hours
        removed and you have the only comparison worth making.
      </p>

      <h2>Do I need to replace my back office software to use AI agents?</h2>
      <p>
        No, and replacing it first is the most reliable way to lose a year. Agents
        work against the systems you already run, through the API where one exists
        and a scoped service account where it does not. What matters is that each
        process has exactly one system of record the agent writes into, so there
        is a single place to audit what happened. If a core system has no API at
        all, fix that one integration point. Do not run a migration programme
        before a single agent goes live.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies: sit with the function, write the
        processes down, rank them, then build and run the agents that take the top
        one, with the exceptions desk and the reporting attached. The same method
        carries across finance, sales pipeline, onboarding and compliance
        evidence. If your back office is five people keying items that a written
        rule already decides, the first process is worth converting before the
        next hiring round rather than after it. See{" "}
        <Link href="/services/ai-agent-operator/">how I work as an AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
