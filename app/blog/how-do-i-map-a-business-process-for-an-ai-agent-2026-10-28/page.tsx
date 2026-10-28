import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-map-a-business-process-for-an-ai-agent-2026-10-28";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-28";
const MOD = "2026-10-28";
const TITLE = "How Do I Map a Business Process for an AI Agent?";
const DESC =
  "Map a process for an AI agent from 20 real cases, not from the SOP. Sit with the person who runs it, write down what arrives, every decision as a rule with a number, every system the agent touches and who clears each exception, then test the map against 50 past cases before anyone writes a prompt.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look2-forbes-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for how do i map a business process for an ai agent?";

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
  "Map the process from 20 real cases with the person who runs it, not from the SOP, and write it down as four lists: what arrives, every decision as a rule with a number in it, every system the agent reads or writes, and who clears each exception by when. Then run the map against 50 past cases before anyone writes a prompt, and don't build until it explains at least 9 in 10 of them.";

const FAQ_1 =
  "No. Most SOPs I read describe the process as it was designed, and leave out the workarounds people built since. You need the 20 cases and the person who handled them. If an SOP exists, I use it as the first draft of the map and mark every step the cases contradict. Those contradictions are where an agent would have gone wrong.";
const FAQ_2 =
  "For one process with a single owner, about 2 weeks. That's 2 sessions of 2 hours with the person who runs it, 3 or 4 days to write the four lists, and 2 or 3 days to test the map against 50 past cases. A process that crosses 3 teams takes 4 to 6 weeks, mostly waiting for people to agree on who owns which exception.";
const FAQ_3 =
  "The team that runs it, with one person who has built agents holding the pen. IT knows the systems and the access rules, so they review the actions list. They don't know why the credit controller holds an order when a customer is 45 days overdue. The person who does the work owns the decisions list and signs it off.";

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
        { "@type": "Thing", name: "Process mapping for AI agents" },
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
          name: "Do I need SOPs before I build an AI agent?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_1 },
        },
        {
          "@type": "Question",
          name: "How long does it take to map a process for an AI agent?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_2 },
        },
        {
          "@type": "Question",
          name: "Who should map the process, IT or the team that runs it?",
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
      keywords: "Hayat Amin, process mapping for AI agents, AI agents for business process automation, AI operator, AI agent operator, Dubai",
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
        { label: "Mapping a Process for an AI Agent" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Map a Business Process for an AI Agent?</h1>
      <p className="op-lede">
        Map the process from 20 real cases with the person who runs it, not
        from the SOP, and write it down as four lists: what arrives, every
        decision as a rule with a number in it, every system the agent reads
        or writes, and who clears each exception by when. Then run the map
        against 50 past cases before anyone writes a prompt, and don&apos;t
        build until it explains at least 9 in 10 of them.
      </p>

      <h2>Why companies get the map wrong</h2>
      <p>
        Most companies hand the agent builder the SOP. I&apos;ve read a lot
        of SOPs, and the typical one describes about 60% of what the team
        does. The other 40% lives in one person&apos;s head: the supplier
        whose invoices always come in two parts, the customer who pays on
        the 3rd whatever the terms say, the order you hold because the sales
        rep forgot the PO.
      </p>
      <p>
        An agent built on the SOP handles the 60% well and sends the rest to
        a queue. Someone clears that queue by hand, and 3 months later the
        project gets written off as &quot;AI isn&apos;t ready for us&quot;.
        The model was fine. The map was missing 4 in 10 cases.
      </p>
      <p>
        The second mistake is mapping too much at once. A whole
        order-to-cash flow has 30 to 50 decisions across 4 teams. Nobody can
        agree all of them in one workshop, so the map never gets finished.
        Pick one process that one person owns and starts and ends in the
        same team.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look2-forbes-1.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He maps processes with the people who run
          them, then builds and runs the AI agents that take them over.
        </figcaption>
      </figure>

      <h2>The five steps I use to map a process</h2>

      <h3>1. Pick one process, one owner, enough volume</h3>
      <p>
        I look for a process that runs at least 200 times a month, has one
        named owner, and touches no more than 3 systems. Supplier onboarding,
        invoice coding, new customer setup and expense review usually pass.
        Below 200 cases a month, the build costs more than the time it
        saves. If two managers each think they own it, settle that first or
        pick something else.
      </p>

      <h3>2. Watch 20 real cases, not the SOP</h3>
      <p>
        I sit with the owner for 2 sessions of 2 hours and they work through
        20 cases from the last month while I write down every step. I ask
        &quot;why did you do that?&quot; at every pause. I pick the 20 so
        that at least 5 are the awkward ones: the late, the partial, the
        duplicate, the one with a missing field. Those 5 teach me more than
        the other 15.
      </p>

      <h3>3. Write the map as four lists</h3>
      <p>
        I don&apos;t draw a flowchart. Flowcharts hide the rules inside
        boxes, and nobody updates them after month 2. I write four plain
        lists in one document.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>List</th>
            <th style={th}>What goes in it</th>
            <th style={th}>Supplier onboarding example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Inputs</td>
            <td style={td}>Everything that arrives, in every format it arrives in</td>
            <td style={td}>Web form, emailed PDF, bank letter, VAT certificate</td>
          </tr>
          <tr>
            <td style={td}>Decisions</td>
            <td style={td}>Every judgement, written as a rule with a number</td>
            <td style={td}>Annual spend over £50,000 needs a second approver</td>
          </tr>
          <tr>
            <td style={td}>Actions</td>
            <td style={td}>Each system the agent reads or writes, marked read or write</td>
            <td style={td}>Reads Companies House, writes a draft supplier record in the ERP</td>
          </tr>
          <tr>
            <td style={tdLast}>Exceptions</td>
            <td style={tdLast}>What the agent can&apos;t settle, who gets it, by when</td>
            <td style={tdLast}>Bank details don&apos;t match the company name: AP lead, same day</td>
          </tr>
        </tbody>
      </table>
      <p>
        The decisions list is where the work is. &quot;Check the supplier is
        legitimate&quot; is not a rule. &quot;Company is active on Companies
        House, incorporated more than 12 months ago, and the bank account
        name matches the registered name&quot; is a rule. If the owner
        can&apos;t give me the number, the decision stays with a person for
        now.
      </p>

      <h3>4. Mark who does each step</h3>
      <p>
        Next to every line on the map I write one of four labels: agent
        reads, agent decides, agent acts, person approves. Anything that
        moves money, changes bank details or sends something to a customer
        gets &quot;person approves&quot; on day one. In a typical first
        process, about 70% of the steps end up with the agent and 30% stay
        with a person. That 30% shrinks later, one rule at a time, once the
        log shows the agent got it right.
      </p>

      <h3>5. Test the map on 50 past cases</h3>
      <p>
        Before anyone writes a prompt, I take 50 closed cases from the last
        quarter and walk each one through the map on paper. For every case I
        ask one question: does the map produce what the person did? I
        don&apos;t build until the answer is yes for at least 45 of the 50.
        Every miss becomes a new rule or a new exception. This test takes 2
        or 3 days and it&apos;s the cheapest week of the whole project.
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
        Every agent I run started as one of these four list documents, and
        the document is still there after go live. When the new joiner
        onboarding agent explains a policy in the joiner&apos;s own language,
        it&apos;s reading from a decisions list a person signed. When a rule
        changes, the owner edits one line in that list and the agent follows
        it the next morning. I learned to keep maps like this before agents
        existed. When I sold companies, buyers asked who decides what, on
        which number, and where it&apos;s written down. A good process map
        answers all of that.
      </p>

      <h2>Do I need SOPs before I build an AI agent?</h2>
      <p>{FAQ_1}</p>

      <h2>How long does it take to map a process for an AI agent?</h2>
      <p>{FAQ_2}</p>

      <h2>Who should map the process, IT or the team that runs it?</h2>
      <p>{FAQ_3}</p>

      <h2>Where I come in</h2>
      <p>
        This is work I do inside companies. I pick the first process with
        you, sit with the person who runs it, write the four lists, test
        them on 50 cases, and then build and run the agent on top. If
        you&apos;re still choosing the process, read{" "}
        <Link href="/blog/which-business-processes-should-i-automate-first-with-ai-2026-07-24">which processes to automate first</Link>{" "}
        and{" "}
        <Link href="/blog/how-do-i-make-ai-agents-safe-enough-to-run-real-operations-2026-08-31">how to make agents safe enough for real operations</Link>.
        Finance leaders can start at <Link href="/ai-for-cfos">AI for CFOs</Link>.
        Which of your processes would pass the 45 out of 50 test today? See{" "}
        <Link href="/services/ai-agent-operator/">how I work as your AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link> and
        tell me.
      </p>
    </PageShell>
  );
}
