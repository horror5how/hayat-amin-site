import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-make-ai-agents-safe-enough-to-run-real-operations-2026-08-31";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-08-31";
const MOD = "2026-08-31";
const TITLE = "How Do I Make AI Agents Safe Enough to Run Real Operations?";
const DESC =
  "Agent safety is a permissions problem, not a model problem. Bound what the agent can touch, log every action, cap the blast radius in money, and put a named human on the exceptions. The five controls that let a CFO and a general counsel sign off.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look5-sidelight-3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for companies asking how to make ai agents safe enough to run real operations";

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
  "You make AI agents safe by bounding what they are allowed to touch, not by making the model smarter. Five controls do almost all of the work: scoped credentials so the agent can only reach the records its job needs, a written list of actions it may take without a human, a money cap on the blast radius of any single run, a full log of what it saw and decided, and a named person who owns the exception queue. Do those five and a general counsel will sign. Skip them and no accuracy number will rescue you, because the risk that ends up in front of a board is never a wrong answer, it is a correct answer applied to 4,000 records at 2am with nobody watching.";

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
          name: "How do I make AI agents safe enough to run real operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What should an AI agent never be allowed to do on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Four categories stay behind a human click regardless of how good the agent is: moving money out of the company, sending anything in a named person's voice to a customer or regulator, deleting or overwriting a system of record, and granting access to anyone or anything. An agent can prepare all four to one click of done, and that is where the value sits anyway. The rule is not about capability, it is about reversibility. If undoing the action needs a lawyer, a bank, or an apology, a human presses the button.",
          },
        },
        {
          "@type": "Question",
          name: "Do AI agents need a human in the loop for every action?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and insisting on it is why most agent programmes deliver nothing. Human in the loop on every action makes the agent slower than the person it replaced. The working model is human on the exceptions: the agent acts alone inside a written envelope of reversible, capped, low value actions, and anything outside that envelope, plus anything it is unsure about, goes to a named human in a queue reviewed daily. In practice around 85 to 95 percent of cases run unattended and the exception queue is the job.",
          },
        },
        {
          "@type": "Question",
          name: "Who is liable when an AI agent makes a mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The company, and inside the company the function that owns the output. No vendor contract transfers that, and no regulator has yet accepted the model got it wrong as a defence. Practically this means the accountable person must be named in writing before go live, must be someone whose day job is the work rather than the technology, and must have the power to switch the agent off without asking permission. If nobody in the building can turn it off in under a minute, it is not ready to run operations.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption:
        "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA)",
      name: "Hayat Amin, New York City",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, AI agent safety, agent guardrails, AI operator, AI governance, blast radius, human in the loop, AI operations, New York City",
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
        { label: "How Do I Make AI Agents Safe Enough to Run Real Operations?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Make AI Agents Safe Enough to Run Real Operations?</h1>
      <p className="op-lede">
        You make agents safe by bounding what they are allowed to touch, not by
        making the model smarter. Five controls do almost all of the work:
        scoped credentials, a written list of actions the agent may take alone,
        a money cap on the blast radius of any single run, a full log of what it
        saw and decided, and a named person who owns the exception queue. Do
        those five and a general counsel signs. Skip them and no accuracy number
        saves you, because the incident that reaches a board is never a wrong
        answer. It is a correct answer applied to 4,000 records at 2am with
        nobody watching.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        Most safety debates inside companies are about the model. Which one
        hallucinates less, what the vendor says about training data, whether the
        contract has an indemnity. All of that is real and none of it is the
        control that matters, because the model is not what causes the damage.
        Scope is. An agent given full write access to the CRM to fix duplicate
        records is one bad prompt away from rewriting 12,000 of them, and it
        will do it in eleven seconds, politely, with a summary.
      </p>
      <p>
        The numbers make the point. A finance agent that codes invoices at 96
        percent accuracy sounds safe until you run it over 3,000 invoices a
        month: that is 120 miscoded invoices, and if it can also post them, 120
        journal entries somebody has to unwind at quarter end. The same agent
        with post access removed and a 5,000 pound approval ceiling produces 120
        items in a review queue. Identical model, identical error rate,
        completely different risk. The error rate was never the variable worth
        arguing about.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look5-sidelight-3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in New York City. He builds and runs AI agent systems
          inside companies across London, NYC, and Dubai.
        </figcaption>
      </figure>

      <h2>The five controls I put on every agent</h2>
      <p>
        These go in before the agent touches live data, and they take about a
        week. Controls three and five are the two companies skip, and they are
        the two that decide whether a bad day is a queue or an incident.
      </p>
      <p>
        <strong>One: scope the credentials to the job, not to the
        person.</strong> An agent should never inherit a human&apos;s login. Give
        it its own service account with read access to the records its written
        job description mentions and write access to nothing else. If the job is
        matching supplier invoices under 5,000 pounds, it reads the ledger and
        the purchase orders, and it cannot see payroll. Most agents in the wild
        are running on a copy of an admin account because that was fastest in
        week one, and that single shortcut is the largest unmanaged risk in the
        average deployment.
      </p>
      <p>
        <strong>Two: write the action list before the prompt.</strong> One page,
        two columns. Left column, the actions the agent takes alone. Right
        column, the actions it prepares and a human confirms. Draft, classify,
        match, reconcile, flag, research, and summarise belong on the left. Pay,
        send in someone&apos;s name, delete, and grant access belong on the right
        forever. Argue this page out with the owner and the general counsel in
        one meeting. It is the document they will actually sign, and it takes
        about ninety minutes.
      </p>
      <p>
        <strong>Three: cap the blast radius in money and in rows.</strong> Every
        agent gets two ceilings, enforced in code rather than in the prompt: a
        maximum value per action, and a maximum number of records per run. My
        working defaults are a per-action ceiling at the level a team lead can
        already approve, and a run ceiling at three times a normal day&apos;s
        volume. Cross either and the run stops and pages the owner. This is the
        control that turns a runaway into an interruption, and it is one
        afternoon of engineering.
      </p>
      <p>
        <strong>Four: log the decision, not only the output.</strong> For every
        run, store the inputs the agent saw, the tools it called, what it
        decided, and its confidence. Keep it for as long as you keep the
        underlying business record, seven years for anything financial. When
        something goes wrong the only useful question is what did it see, and a
        log of outputs alone cannot answer it. This is also what an auditor or a
        regulator asks for first, and having it turns a two-week fire drill into
        a query.
      </p>
      <p>
        <strong>Five: put a named human on the exception queue, and pay for
        the time.</strong> Confidence below a set threshold, anything outside
        the action list, and anything the agent refuses all land in one queue
        with one owner and a daily review slot in the calendar. Budget 30 to 60
        minutes a day per agent in the first quarter, dropping as tuning lands.
        Companies that treat this as free discover the queue is 400 items deep
        in month two and quietly stop looking, which is how a working system
        becomes an unsupervised one.
      </p>
      <p>
        One more line for the budget. Controls, logging, and the exception time
        run 20 to 30 percent on top of what it cost to build the agent, every
        year. That is the actual price of running agents in operations, and a
        business case that leaves it out is not a business case.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, every agent has a kill switch that any of four
        named people can pull without asking anyone, and we test it monthly the
        way you test a fire alarm. The first test took eleven minutes because
        nobody could remember where it lived. That was worth finding out on a
        Tuesday with nothing burning. It now takes under thirty seconds, and the
        confidence that buys is what let the finance function hand over month
        end coding at all.
      </p>
      <p>
        Twenty years in the C-suite and three exits taught me where the real
        exposure sits. Every serious operational failure I have had to explain
        to a board came from something automated that nobody was watching, and
        not one came from a person making a judgment call and getting it wrong.
        Agents have not changed the shape of that. They have made the unwatched
        automation dramatically cheaper to create, which is why the controls
        have to be built at the same time as the capability rather than after
        the first bad week.
      </p>

      <h2>What should an AI agent never be allowed to do on its own?</h2>
      <p>
        Four things stay behind a human click no matter how good the agent gets:
        moving money out of the company, sending anything in a named
        person&apos;s voice to a customer or a regulator, deleting or
        overwriting a system of record, and granting access to anyone or
        anything. The agent can take all four to one click of done, which is
        where the time saving lives anyway. The test is reversibility. If
        undoing it needs a lawyer, a bank, or an apology, a person presses the
        button.
      </p>

      <h2>Do AI agents need a human in the loop for every action?</h2>
      <p>
        No, and insisting on it is why most agent programmes deliver nothing. A
        human approving every action is slower than the person the agent
        replaced. The model that works is human on the exceptions: the agent
        acts alone inside a written envelope of reversible, capped, low value
        actions, and everything outside that envelope, plus anything it is
        unsure about, goes to a named human in a queue reviewed daily. Expect
        roughly 85 to 95 percent of cases to run unattended once tuning settles.
      </p>

      <h2>Who is liable when an AI agent makes a mistake?</h2>
      <p>
        The company, and inside the company the function that owns the output.
        No vendor contract moves that, and no regulator has accepted the model
        got it wrong as a defence. So the accountable person is named in writing
        before go live, is someone whose day job is the work rather than the
        technology, and can switch the agent off without asking permission. If
        nobody in the building can turn it off inside a minute, it is not ready
        to run operations.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the part I build first inside companies: the scoped credentials,
        the signed action list, the ceilings in code, the decision logs an
        auditor accepts, and the exception queue somebody actually owns. Then
        the agents themselves running in finance, pipeline, onboarding, and
        compliance as one system with controls a CFO and a general counsel have
        already put their name to. If your agents are stuck because legal will
        not sign, that is a controls problem and it takes about a week to fix.
        See <Link href="/services/ai-agent-operator/">how I work as an AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
