import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-get-my-companys-data-ready-for-ai-agents-2026-08-25";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-08-25";
const MOD = "2026-08-25";
const TITLE = "How Do I Get My Company's Data Ready for AI Agents?";
const DESC =
  "Ready does not mean clean. It means reachable, permissioned, and defined: read-only access to the live system, an agent identity that inherits a real employee's permissions, a written definition of the ten to twenty fields the workflow actually uses, and one deduplicated entity list.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look4-bw-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (New York City, USA). Hayat Amin builds and runs AI systems for companies getting their company data ready for ai agents";

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
  "Getting your company data ready for AI agents means making it reachable, permissioned, and defined, not making it perfect. Four things get you there: read-only access to the live system rather than an exported file, an agent identity that inherits the permissions of a real employee role, a written definition of the ten to twenty fields the chosen workflow actually reads, and one deduplicated master list for the entity that workflow turns on, usually customer, supplier, or product. That is three to six weeks of work per workflow, not the eighteen month data programme most companies are sold. Everything else, including the messy PDFs and the shared drive, gets indexed as documents alongside the clean data rather than migrated first.";

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
          name: "How do I get my company's data ready for AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "Do I need a data warehouse before I use AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A warehouse helps for reporting agents that aggregate across systems, and it is dead weight for the first three or four workflows, which almost always sit inside one system already. If the agent codes supplier invoices, it needs read access to the accounting platform, not a copy of it in a lake. Build the warehouse when a workflow genuinely spans three or more systems and needs a single version of a number. Companies that start with the warehouse typically spend nine to eighteen months and go live with nothing, because the warehouse project owns the budget the agents needed.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get company data ready for AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three to six weeks per workflow, running in parallel with the build rather than before it. Week one is access and identity, which is where the delay usually is because it is a security decision rather than a technical one. Weeks two and three cover field definitions and deduplicating the single entity the workflow depends on. Weeks four to six cover the document set. Budget roughly 30 to 40 percent of total build effort for data work on the first workflow and about half that on the second, because the access pattern and the definitions carry over.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents work with PDFs, contracts, and messy shared drives?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and this is the part that needs the least preparation. Documents get indexed where they sit and retrieved at the moment of the question, so scanned contracts, policy PDFs, and email threads become usable without a migration. Two rules make it safe: the agent must cite the source document and page for every claim it makes, and the index must inherit the same folder permissions the humans have, so an agent cannot surface a document to someone who could not open it themselves. The real work is deleting or quarantining the out of date versions, because an agent quoting a superseded 2023 policy is worse than an agent with no documents at all.",
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
      keywords: "Hayat Amin, data readiness for AI, AI agents company data, data strategy, agent permissions, master data, AI operator, New York City",
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
        { label: TITLE }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Get My Company&apos;s Data Ready for AI Agents?</h1>
      <p className="op-lede">
        Ready means reachable, permissioned, and defined. It does not mean
        clean. Four things get an agent working: read-only access to the live
        system instead of an exported file, an agent identity that inherits the
        permissions of a real employee role, a written definition of the ten to
        twenty fields the chosen workflow actually reads, and one deduplicated
        master list for the entity that workflow turns on. Three to six weeks
        per workflow, not the eighteen month data programme you were quoted.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        The wrong question is asked first. Someone senior asks whether the
        company data is good enough for AI, a consultancy answers no, and a
        readiness programme starts: a lake, a catalogue, a governance
        committee, a quality score. Eighteen months and a seven figure invoice
        later the data is measurably better and not one agent is doing a job.
        The programme became the deliverable. Meanwhile the finance team is
        still coding invoices by hand, which was the thing anybody actually
        wanted fixed.
      </p>
      <p>
        The reason this keeps happening is a bad mental model. Companies picture
        an agent as a reporting tool that needs one warehouse fed by everything.
        An agent works more like a new joiner. It reads the same three screens
        the person it is replacing reads, asks about the fields it does not
        understand, and looks things up in the shared drive when a case is odd.
        A new joiner does not need your data warehouse finished before their
        first day. They need a login, the right permissions, and someone to
        explain what the status codes mean. Agents need exactly that, and the
        access piece is where six of every ten stalls actually happen, because
        granting it is a security decision rather than a technical one.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look4-bw-1.jpg"
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

      <h2>The framework I use with clients</h2>
      <p>
        Five steps, run alongside the build rather than in front of it. Step
        one is the one that saves the year.
      </p>
      <p>
        <strong>Step one: scope the data to one workflow, then count the
        fields.</strong> Pick the workflow first, then list every field the
        agent will read to do it. Invoice coding needs supplier name, invoice
        number, date, net, tax, currency, purchase order reference, cost
        centre, and the last twelve months of how that supplier was coded
        before. That is nine fields and one history table. It is not your
        finance system. If the list runs past twenty five fields, the workflow
        is too broad and you are back to boiling the ocean. Everything outside
        that list stays exactly as messy as it is today.
      </p>
      <p>
        <strong>Step two: give the agent an identity, not a master key.</strong>{" "}
        Create a service account that mirrors one real job role, read-only for
        the first four weeks, and log every call it makes. This is a security
        conversation, so start it in week one and expect it to take two to
        three weeks in a regulated company. Two rules make the yes easier: the
        agent can never see data the role it mirrors could not see, and every
        read is attributable to a run and a case. Agents handed a broad admin
        credential get switched off by the first person who notices, and they
        are right to switch them off.
      </p>
      <p>
        <strong>Step three: deduplicate one entity, not the database.</strong>{" "}
        Every workflow turns on a single entity. Invoice coding turns on
        supplier. Pipeline routing turns on account. Support triage turns on
        customer. Fix duplicates on that one entity and ignore the rest. My
        working threshold: if more than 5 percent of the entity records are
        duplicates, or if any single real world entity appears under three or
        more spellings, dedupe before you ship, because the agent will confidently
        split one supplier into three and the numbers will not tie. Below that,
        ship and clean as you go.
      </p>
      <p>
        <strong>Step four: write down what the fields mean.</strong> Two pages,
        plain English, owned by the function and not by IT. What counts as an
        active customer. What status 4 means and who sets it. Which of the three
        revenue columns is the one finance reports. Which fields are known to be
        unreliable and should never be used alone. This document is the single
        highest return artefact in the whole exercise, because the failure mode
        of an agent is not that it cannot read the field, it is that it reads
        the field correctly and interprets it the way a stranger would. A new
        finance analyst learns this in six weeks of corridor conversation. An
        agent never gets the corridor.
      </p>
      <p>
        <strong>Step five: index the documents where they sit.</strong> The
        contracts, policies, PDFs, and email threads do not get migrated. They
        get indexed in place, retrieved at the moment of the question, and cited
        with a source and page on every answer. The one job that matters here is
        version hygiene: quarantine superseded documents before you index,
        because an agent quoting the 2023 expense policy with a confident
        citation does more damage than an agent with no documents at all.
      </p>
      <p>What that means in practice, by workflow:</p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.35)" }}>Workflow</th>
            <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.35)" }}>Entity to dedupe</th>
            <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.35)" }}>Data work before go live</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Invoice coding and matching</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Supplier</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>3 to 4 weeks</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Pipeline research and routing</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Account</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>2 to 3 weeks</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Support triage and drafting</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Customer</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>2 weeks plus document index</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Board and cash reporting</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>Legal entity and cost centre</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid rgba(128,128,128,0.18)" }}>6 weeks, the one case for a warehouse</td>
          </tr>
        </tbody>
      </table>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, the finance agent was blocked for five weeks
        and not one day of it was about data quality. It was about who signs
        off a service account that can read the ledger. We unblocked it by
        cutting the ask down to a single read-only role scoped to one company
        code, with every call logged and a weekly report of what the agent had
        read going to the controller. That got signed in four days. The lesson
        I keep relearning is that data readiness is mostly an approvals problem
        wearing a technical costume, and the fix is to shrink the ask until
        somebody can say yes to it.
      </p>
      <p>
        Twenty years in the C-suite and three exits taught me the same thing
        about diligence rooms. Buyers never asked whether the data was clean.
        They asked whether we could produce the same number twice, and say
        where it came from. That is the actual bar for an agent too. An agent
        working off average data with defined fields and cited sources beats an
        agent working off beautiful data nobody has written a definition for,
        every time, and it ships eleven months sooner.
      </p>

      <h2>Do I need a data warehouse before I use AI agents?</h2>
      <p>
        No, for the first three or four workflows. Those almost always sit
        inside one system, and an agent that codes invoices needs read access
        to the accounting platform, not a copy of it in a lake. The warehouse
        earns its place when a workflow spans three or more systems and needs
        one version of a number, which in practice means board and cash
        reporting. Start there and you spend nine to eighteen months and ship
        nothing, because the warehouse project ends up holding the budget the
        agents needed.
      </p>

      <h2>How long does it take to get company data ready for AI agents?</h2>
      <p>
        Three to six weeks per workflow, running alongside the build. Week one
        is access and identity, and that is where the delay lives because it is
        a security decision. Weeks two and three are field definitions and
        deduplicating the one entity the workflow depends on. Weeks four to six
        are the document set. Budget 30 to 40 percent of build effort for data
        work on the first workflow and roughly half that on the second, since
        the access pattern and the definitions carry across.
      </p>

      <h2>Can AI agents work with PDFs, contracts, and messy shared drives?</h2>
      <p>
        Yes, and this needs the least preparation of anything. Documents get
        indexed where they sit and retrieved at the moment of the question, so
        scanned contracts and policy PDFs become usable with no migration. Two
        rules keep it safe: every claim cites its source document and page, and
        the index inherits the same folder permissions the humans have. The
        real work is quarantining out of date versions, because a confident
        citation of a superseded policy is worse than no answer.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is what I build and run inside companies: the scoped field list,
        the agent identity a CFO or a general counsel will actually sign, the
        definitions document the function owns, and then the agents themselves
        working in finance, pipeline, onboarding, and compliance off that data.
        If you have been told you need two years of data work before AI is
        possible here, get a second opinion before you sign it. See{" "}
        <Link href="/services/ip-strategy/">how I work on data and IP
        strategy</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
