import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-many-people-does-an-ai-back-office-need-2026-11-27";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-27";
const MOD = "2026-11-27";
const TITLE = "How Many People Does an AI Back Office Need?";
const DESC =
  "A 100 person company running its back office on AI agents usually needs 4 to 6 people where it had 8 to 12: one named owner per function, an exceptions desk sized to the queue, and approvers for anything that moves money. Plan the headcount from the exception rate, not from the vendor's promise, by Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-work-pic.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for how many people does an ai back office need";

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
  "In the 100 person companies I work with, a back office run on AI agents needs 4 to 6 people where it used to need 8 to 12: one named owner for each function, a small exceptions desk sized to what the agents can't handle, and a person who approves anything that moves money. You get to that number by measuring the exception queue for 3 months, not by cutting on day one.";

const FAQ_CUT =
  "Not on day one, and usually not by redundancy. In a growing company the saving shows up as hires you don't make. If revenue grows 30% in a year, the back office stays the same size instead of adding 3 people. Cut before the exception rate has settled and the people who knew the odd cases are gone when the agent hits its first odd case.";

const FAQ_OWNER =
  "Each agent belongs to the person who owned the process before it: the financial controller owns bank matching, the people lead owns onboarding, procurement owns invoice coding. That person signs off its output and decides its rules. An AI operator builds the agent and keeps it healthy, and once you have 3 or more agents across 2 functions, an AI operations manager runs them day to day.";

const FAQ_TIME =
  "Plan on 6 to 9 months for one function and 9 to 12 months to cover the back office of a 100 person company. The first agent takes 4 to 6 weeks to go live. Then the exception rate needs about 3 months to fall from 10 to 15% down to 2 to 5%. Only at that point do you know how many people the work needs.";

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
        { "@type": "Thing", name: "AI back office" },
        { "@type": "Thing", name: "AI in back office operations" },
        { "@type": "Thing", name: "AI agents for business operations", url: `${SITE}/services/ai-agent-operator/` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many people does an AI back office need?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "Will AI agents let me cut back office staff?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_CUT },
        },
        {
          "@type": "Question",
          name: "Who should own the AI agents in the back office?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_OWNER },
        },
        {
          "@type": "Question",
          name: "How long before back office headcount changes with AI?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_TIME },
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
      keywords: "Hayat Amin, AI back office, AI operator, AI agents for business operations, AI-native CFO, AI coach for CFOs, Dubai",
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
        { label: "How Many People Does an AI Back Office Need?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI operations · Updated {MOD}</span>
      <h1>How Many People Does an AI Back Office Need?</h1>
      <p className="op-lede">
        In the 100 person companies I work with, a back office run on AI
        agents needs 4 to 6 people where it used to need 8 to 12: one named
        owner for each function, a small exceptions desk sized to what the
        agents can&apos;t handle, and a person who approves anything that
        moves money. You get to that number by measuring the exception queue
        for 3 months, not by cutting on day one.
      </p>

      <h2>Why CEOs get the number wrong</h2>
      <p>
        Most of the headcount figures I hear from CEOs come from a vendor
        slide. The pitch says the agent does 80% of the work, so the CEO
        plans to lose 80% of the team. That sum leaves out the other 20%.
        The remaining work is the hard part: the invoice with no purchase
        order, the joiner whose visa date moved, the bank line that matches
        two customers at once.
      </p>
      <p>
        Picture a finance team of 5 cut to 2 in month one because the demo
        looked clean. By month 3 the close slips from day 6 to day 11, and
        the company hires a contractor back at a higher day rate than the
        person it let go. The agent isn&apos;t the problem in that story.
        Nobody sized the exception queue before deciding who stayed.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-work-pic.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds and runs the AI agents behind a
          company&apos;s finance and operations, and coaches CFOs one to one
          on the same work.
        </figcaption>
      </figure>

      <h2>How I size the team</h2>

      <h3>1. Count the volume, then the exceptions</h3>
      <p>
        I start with monthly volume per process. A 100 person company might
        run 1,500 supplier invoices, 2,500 bank lines and 4 new joiners a
        month. In month one I plan for 10 to 15% of items landing in the
        exception queue. By month 6, on a process with clean data, I expect
        2 to 5%. Each exception takes a trained person 5 to 10 minutes.
      </p>
      <p>
        So 1,500 invoices at 12% is 180 exceptions, or roughly 15 to 30 hours
        a month in month one. At 3% it&apos;s 45 exceptions and 4 to 8
        hours. That second number, not the first, sets the size of the desk.
      </p>

      <h3>2. Keep one named owner per function</h3>
      <p>
        Finance, people operations, procurement and IT admin each keep one
        person whose name sits on the agent&apos;s output. That person
        doesn&apos;t key data any more. They approve, they decide the rules
        when the agent meets something new, and they answer to the CFO or
        COO when the output is wrong. In a 100 person company that&apos;s
        3 or 4 people, often the most senior one from each old team.
      </p>

      <h3>3. Size the exceptions desk to the settled queue</h3>
      <p>
        One trained person clears about 80 to 100 hours of exceptions a
        month alongside other work. Most 100 person back offices I&apos;ve
        built need 1 or 2 people on the desk once the queue settles. Before
        it settles, the old team covers it, which is why nobody leaves in
        the first 3 months.
      </p>

      <h3>4. Put a person on every payment and every posting</h3>
      <p>
        Every agent I build drafts and a person approves. It can match, code
        and prepare. It can&apos;t release a payment, post a journal or send
        a contract on its own. Payments over £10,000 go to a named approver,
        never a shared inbox. That approval takes 30 to 60 minutes a day for
        one person, and it&apos;s the cheapest control you&apos;ll ever buy.
      </p>

      <h3>5. Add an operations role once 3 agents are live</h3>
      <p>
        With 1 or 2 agents, the AI operator who built them keeps them
        healthy. At 3 or more agents across 2 functions, I bring in an AI
        operations manager in house. That&apos;s one hire, and it&apos;s
        usually a former analyst or controller who knows the processes, not
        an engineer.
      </p>

      <h2>The headcount, before and after</h2>
      <p>
        Here&apos;s how it falls out for a typical 100 person company after
        9 to 12 months, once the queues have settled.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Function</th>
            <th style={th}>Before agents</th>
            <th style={th}>After agents</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Finance (AP, AR, bank, close)</td>
            <td style={td}>4 to 5</td>
            <td style={td}>2 (controller plus 1 on exceptions)</td>
          </tr>
          <tr>
            <td style={td}>People operations</td>
            <td style={td}>2 to 3</td>
            <td style={td}>1</td>
          </tr>
          <tr>
            <td style={td}>Procurement and vendor admin</td>
            <td style={td}>1 to 2</td>
            <td style={td}>0 to 1 (often folds into finance)</td>
          </tr>
          <tr>
            <td style={td}>IT admin and access</td>
            <td style={td}>1 to 2</td>
            <td style={td}>1</td>
          </tr>
          <tr>
            <td style={tdLast}>AI operations</td>
            <td style={tdLast}>0</td>
            <td style={tdLast}>1 once 3 agents are live</td>
          </tr>
        </tbody>
      </table>

      <p>
        That&apos;s 8 to 12 people down to 4 to 6. If the company grows 30%
        over the same year, the back office stays at that size instead of
        adding 3. For finance in particular, the build order is on the{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link> page, and the wider
        set up is in{" "}
        <Link href="/blog/how-do-i-run-my-back-office-on-ai-agents-2026-09-01">
          how to run a back office on AI agents
        </Link>
        .
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
        In the finance teams I ran before agents, headcount grew in step
        with transactions. Inside one client today, an agent reconciles
        every bank account before 6am and posts one live cash runway figure,
        and the controller starts the day on the exceptions it left rather
        than on the matching. Another agent onboards each new joiner in
        their own language, with the policy pack and system access done
        before day one. The people who used to do that work now own the
        rules the agents follow.
      </p>

      <h2>Will AI agents let me cut back office staff?</h2>
      <p>{FAQ_CUT}</p>

      <h2>Who should own the AI agents in the back office?</h2>
      <p>{FAQ_OWNER}</p>

      <h2>How long before back office headcount changes with AI?</h2>
      <p>{FAQ_TIME}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies. I measure your volumes and
        exception rates in the first 2 weeks, put the first agent live by
        week 6, and tell you from the queue data, not a slide, how many
        people each function needs. How I work is on the{" "}
        <Link href="/services/ai-agent-operator/">AI agent operator</Link>{" "}
        page. How many hours a month does your back office spend on items
        that follow a rule? Start at <Link href="/">meethayat.com</Link> and
        tell me.
      </p>
    </PageShell>
  );
}
