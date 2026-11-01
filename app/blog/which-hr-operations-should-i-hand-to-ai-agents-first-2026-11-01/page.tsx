import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "which-hr-operations-should-i-hand-to-ai-agents-first-2026-11-01";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-01";
const MOD = "2026-11-01";
const TITLE = "Which HR Operations Should I Hand to AI Agents First?";
const DESC =
  "Hand AI agents the HR admin that runs on written rules: the policy inbox, onboarding paperwork, absence records and the payroll input check before cut off. Keep every decision about a person (hiring, pay, performance, dismissal) with a named human. Four agents, one at a time, 30 days in shadow each, in a 100 to 300 person company that is usually 2 to 3 days a week of HR time back.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look3-fortune-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for which hr operations should i hand to ai agents first?";

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
  "Hand AI agents the HR operations that run on written rules and high volume first: answering policy questions from the handbook, onboarding paperwork and account requests, absence and leave records, and checking payroll inputs before the cut off. Keep every decision about a person, hiring, pay, performance and dismissal, with a named human, and build the four agents one at a time with 30 days in shadow each.";

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
        { "@type": "Thing", name: "AI agents for HR operations" },
        { "@type": "Thing", name: "HR automation" },
        { "@type": "Thing", name: "AI agent operator", url: `${SITE}/services/ai-agent-operator/` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: TITLE,
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "How can AI be used in HR without putting the company at risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use it on the paperwork around people, never on the judgement about them. An agent can answer a leave question from the handbook, build a joiner's day one checklist and flag a missing bank detail before payroll. It shouldn't rank candidates, set pay or score performance. Give it a separate login, read access only to the records it needs, and a log of every record it opens.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents screen CVs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can sort and summarise, and I don't let them reject anyone. Under the EU AI Act, AI used to filter job applications is classed as high risk, and UK GDPR gives people the right not to face a solely automated decision with a significant effect. My rule: the agent checks the hard requirements you wrote down, like a right to work or a licence, and a recruiter reads every CV it would have dropped.",
          },
        },
        {
          "@type": "Question",
          name: "Will AI agents replace the HR team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, they take the admin off it. In a 100 to 300 person company I usually find HR spending 2 or 3 days a week on questions and paperwork a rulebook could answer. Move that to agents and the same team spends the time on hiring managers, retention and the hard conversations. I haven't yet cut an HR headcount because of an agent, and I wouldn't plan a business case on it.",
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
      keywords: "Hayat Amin, AI agents for HR operations, HR automation, AI onboarding, AI agent operator, AI-native CFO, London",
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
        { label: "HR Operations and AI Agents" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operations · Updated {MOD}</span>
      <h1>Which HR Operations Should I Hand to AI Agents First?</h1>
      <p className="op-lede">
        Hand AI agents the HR operations that run on written rules and high
        volume first: answering policy questions from the handbook, onboarding
        paperwork and account requests, absence and leave records, and
        checking payroll inputs before the cut off. Keep every decision about a
        person, hiring, pay, performance and dismissal, with a named human, and
        build the four agents one at a time with 30 days in shadow each.
      </p>

      <h2>Why companies start HR automation in the wrong place</h2>
      <p>
        Most CEOs I talk to begin with recruitment. It&apos;s the loudest cost
        and the vendors pitch it hardest. So the first agent ranks CVs, and
        within a month someone asks why it dropped every applicant with a gap
        in their history. That&apos;s the one place in HR where the law has
        already drawn a line. The EU AI Act puts AI that filters job
        applications in its high risk class, and UK GDPR gives a candidate the
        right not to face a solely automated decision with a significant
        effect on them.
      </p>
      <p>
        Meanwhile the real cost sits in the HR inbox. In a 100 to 300 person
        company I usually find 2 or 3 days a week of HR time going on
        questions the handbook already answers, joiner paperwork, sick day
        records and chasing payroll changes before the 20th. None of it needs
        judgement. All of it needs a rule and a record. That&apos;s where the
        first agent goes.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look3-fortune-1.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the agents behind HR,
          finance and onboarding inside client companies.
        </figcaption>
      </figure>

      <h2>The order I build HR agents in</h2>

      <h3>1. Sort every HR task by volume and by rule</h3>
      <p>
        Take one month of the HR inbox and the HR system&apos;s change log.
        List every task, how many times it happened, and whether a written
        rule decides the outcome. A task that happens 50 times a month and has
        a rule in the handbook is an agent job. A task that happens twice and
        needs someone to read the room isn&apos;t. I&apos;ve never seen this
        list come back with fewer than 30 tasks, and the top 4 by volume
        nearly always carry over half the hours.
      </p>

      <h3>2. Start with the policy inbox</h3>
      <p>
        The first agent answers questions about leave, expenses, benefits,
        notice periods and working from abroad. It reads only the handbook and
        the employee&apos;s own contract terms, and every answer quotes the
        clause it came from. Anything the handbook doesn&apos;t cover goes to
        a person, with the question and the 2 closest clauses attached. In
        shadow for 30 days, the HR lead reads each draft before it goes. I
        want 9 of 10 drafts sent unchanged before the agent answers alone.
        When it fails that bar, the fix is usually the handbook, not the
        agent.
      </p>

      <h3>3. Then onboarding, in the joiner&apos;s language</h3>
      <p>
        The second agent starts the moment a contract is signed. It opens the
        accounts request with IT, books the laptop, sends the right to work
        checklist, chases the manager for the first week&apos;s plan and
        builds a day one pack. It writes that pack in the joiner&apos;s own
        language if English isn&apos;t their first. The measure is simple: on
        day one, does the person have a working login, a laptop and a named
        buddy by 10am? Most companies I walk into hit that for about half of
        joiners. The target is every joiner, within 2 hiring cycles.
      </p>

      <h3>4. Absence records and the payroll input check</h3>
      <p>
        Payroll rarely goes wrong in the calculation. It goes wrong in the
        inputs: a leaver confirmed after the cut off, a bonus agreed in a
        corridor, unpaid leave never logged. The third agent keeps absence
        records straight from the request and the manager&apos;s approval. The
        fourth runs 3 working days before cut off. It compares starters,
        leavers, pay changes and absence in the HR system against the payroll
        file and lists every difference. A person clears the list and signs
        the run. The agent never changes a figure in payroll.
      </p>

      <h3>5. Draw the red line on paper before you build</h3>
      <p>
        Write down what no agent decides, and have the CEO sign it. Mine is 5
        lines long.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>HR task</th>
            <th style={th}>Agent does</th>
            <th style={th}>Human decides</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Policy questions</td>
            <td style={td}>Answers from the handbook, quotes the clause</td>
            <td style={td}>Anything the handbook doesn&apos;t cover</td>
          </tr>
          <tr>
            <td style={td}>Onboarding</td>
            <td style={td}>Requests, chasing, day one pack</td>
            <td style={td}>The manager owns the first week&apos;s plan</td>
          </tr>
          <tr>
            <td style={td}>Absence and leave</td>
            <td style={td}>Records it, flags patterns to the manager</td>
            <td style={td}>Any welfare or capability conversation</td>
          </tr>
          <tr>
            <td style={td}>Payroll inputs</td>
            <td style={td}>Lists every difference 3 days before cut off</td>
            <td style={td}>Clears the list and signs the run</td>
          </tr>
          <tr>
            <td style={tdLast}>Hiring, pay, performance, dismissal, grievance</td>
            <td style={tdLast}>Paperwork only, after the decision</td>
            <td style={tdLast}>All of it, every time</td>
          </tr>
        </tbody>
      </table>
      <p>
        Each agent gets its own login, read access only to the fields it
        needs, and a log of every record it opens, kept for 12 months. HR data
        is the most personal data a company holds. I cover the access register
        in{" "}
        <Link href="/blog/what-data-governance-do-ai-agents-need-in-a-mid-size-company-2026-10-30">data governance for AI agents</Link>.
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
        I did payroll off a spreadsheet in the early days and owned it later,
        once headcount made that impossible. The calculation was never the
        problem. The inputs arriving late were, and every delay landed on the
        same 2 days each month. Inside one client today, the onboarding agent
        sends each joiner their day one pack in their own language before
        they start. That&apos;s the agent I&apos;d copy first if I were you,
        because every new hire feels it in the first hour.
      </p>

      <h2>How can AI be used in HR without putting the company at risk?</h2>
      <p>
        Use it on the paperwork around people, never on the judgement about
        them. An agent can answer a leave question from the handbook, build a
        joiner&apos;s day one checklist and flag a missing bank detail before
        payroll. It shouldn&apos;t rank candidates, set pay or score
        performance. Give it a separate login, read access only to the records
        it needs, and a log of every record it opens.
      </p>

      <h2>Can AI agents screen CVs?</h2>
      <p>
        They can sort and summarise, and I don&apos;t let them reject anyone.
        Under the EU AI Act, AI used to filter job applications is classed as
        high risk, and UK GDPR gives people the right not to face a solely
        automated decision with a significant effect. My rule: the agent
        checks the hard requirements you wrote down, like a right to work or a
        licence, and a recruiter reads every CV it would have dropped.
      </p>

      <h2>Will AI agents replace the HR team?</h2>
      <p>
        No, they take the admin off it. In a 100 to 300 person company I
        usually find HR spending 2 or 3 days a week on questions and paperwork
        a rulebook could answer. Move that to agents and the same team spends
        the time on hiring managers, retention and the hard conversations. I
        haven&apos;t yet cut an HR headcount because of an agent, and I
        wouldn&apos;t plan a business case on it.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I build and run inside companies as an{" "}
        <Link href="/services/ai-agent-operator/">AI agent operator</Link>. We
        start with one month of your HR inbox and the change log, sort it in
        the first week, and the policy agent is in shadow by week 3. If you
        haven&apos;t written your processes down yet, start with{" "}
        <Link href="/blog/how-do-i-map-a-business-process-for-an-ai-agent-2026-10-28">mapping a process for an agent</Link>,
        and the wider picture is in{" "}
        <Link href="/blog/how-do-i-run-my-back-office-on-ai-agents-2026-09-01">running a back office on AI agents</Link>.
        Finance leaders who own HR as well will find the rest at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>. How many HR questions
        landed in your inbox last month? Start at{" "}
        <Link href="/">meethayat.com</Link> and tell me.
      </p>
    </PageShell>
  );
}
