import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-role-responsibilities-2026-10-02";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-02";
const MOD = "2026-10-02";
const TITLE = "Forward Deployed Engineer Role and Responsibilities: I Read 185 Live Postings at 10 Companies";
const DESC =
  "A forward deployed engineer gets a product working in production inside one customer's systems. On 2 October 2026 I read 185 live forward deployed engineering postings at Palantir, OpenAI, Anthropic, Databricks, Scale AI, Figma, Datadog, Cursor, Cresta and Baseten. 175 put the customer in the job description, 115 say production, 100 name stakeholders or executives, 79 say integrate and 76 ask for feedback to product. 40 of Databricks' 60 call the engineer billable. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the golden age Islamic manuscript style, gold leaf, lapis and turquoise arabesques on cream. In the central arch a visiting engineer kneels on a patron's workshop floor with both hands on a brass machine, tools scattered round him, while the robed patron stands and points. Eight smaller arched panels frame him with the rest of the job: a seated audience with the patron and a scroll, a plan being drawn at a desk, work at a forge bench, a model presented to a court, two water channels being joined where they did not meet, a letter written in the field, a conversation with a seated official, and a saddled horse waiting for the next journey.";

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
        url: HERO,
        width: 1024,
        height: 559,
        alt: HERO_ALT,
      }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [HERO] },
};

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
      image: [{ "@id": `${URL}#hero` }],
      author: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      mainEntityOfPage: URL,
      about: "The role and responsibilities of a forward deployed engineer, counted from 185 live job postings read on ten employers' own job feeds on 2 October 2026",
      citation: [
        {
          "@type": "WebPage",
          name: "Palantir Technologies public job feed",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir",
        },
        {
          "@type": "WebPage",
          name: "Palantir Technologies, Forward Deployed Software Engineer, New York",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0",
        },
        {
          "@type": "WebPage",
          name: "Palantir Technologies, Forward Deployed AI Engineer, New York",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/636fc05c-d348-4a06-be51-597cb9e07488",
        },
        {
          "@type": "WebPage",
          name: "OpenAI, Forward Deployed Engineer, Financial Services, New York City",
          publisher: { "@type": "Organization", name: "OpenAI" },
          url: "https://jobs.ashbyhq.com/openai/7f76be3a-38d0-4ff4-b997-9f1672e78bc0",
        },
        {
          "@type": "WebPage",
          name: "OpenAI, Forward Deployed Engineer, Tokyo",
          publisher: { "@type": "Organization", name: "OpenAI" },
          url: "https://jobs.ashbyhq.com/openai/51b17595-3a70-43be-a333-3a3952303284",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Forward Deployed Engineer, London",
          publisher: { "@type": "Organization", name: "Anthropic" },
          url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008",
        },
        {
          "@type": "WebPage",
          name: "Databricks, Sr. Forward Deployed Engineer, Financial Services, New York City",
          publisher: { "@type": "Organization", name: "Databricks" },
          url: "https://databricks.com/company/careers/open-positions/job?gh_jid=8592942002",
        },
        {
          "@type": "WebPage",
          name: "Datadog, Senior Forward Deployed Engineer, Feature Flags, New York",
          publisher: { "@type": "Organization", name: "Datadog" },
          url: "https://careers.datadoghq.com/detail/8144946/",
        },
        {
          "@type": "WebPage",
          name: "Figma, Forward Deployed Engineer, San Francisco, New York or remote in the United States",
          publisher: { "@type": "Organization", name: "Figma" },
          url: "https://boards.greenhouse.io/figma/jobs/6158162004",
        },
        {
          "@type": "WebPage",
          name: "Cursor, Forward Deployed Engineer, San Francisco",
          publisher: { "@type": "Organization", name: "Cursor" },
          url: "https://jobs.ashbyhq.com/cursor/34cecd0c-c392-4454-8ef5-261310541011",
        },
        {
          "@type": "WebPage",
          name: "Scale AI, Forward Deployed Software Engineer, Public Sector",
          publisher: { "@type": "Organization", name: "Scale AI" },
          url: "https://job-boards.greenhouse.io/scaleai/jobs/4481921005",
        },
        {
          "@type": "WebPage",
          name: "Baseten, Forward Deployed Engineer, San Francisco",
          publisher: { "@type": "Organization", name: "Baseten" },
          url: "https://jobs.ashbyhq.com/baseten/84c1801c-1a65-49fb-aaaa-beeafd530e7e",
        }],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Hayat Amin",
      jobTitle: "Forward Deployed Engineer and Fractional Chief Financial Officer",
      url: SITE,
      sameAs: [
        "https://meethayat.com",
        "https://beyondelevation.com",
        "https://www.linkedin.com/in/hayatamin"],
      description:
        "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation.",
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      url: HERO,
      contentUrl: HERO,
      width: 1024,
      height: 559,
      caption: HERO_ALT,
      name: "Forward deployed engineer role and responsibilities, illuminated as a visiting engineer framed by the eight parts of his job",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "forward deployed engineer role responsibilities, forward deployed engineer role, what does a forward deployed engineer do, FDE, Palantir, OpenAI, Anthropic, Databricks, Figma, Datadog, Hayat Amin, Beyond Elevation, New York",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the responsibilities of a forward deployed engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Five duties come up again and again. Scope the customer's real problem, write production code inside their systems, integrate their data and tools, work with their stakeholders up to executive level, and carry what you learn back to your own product team. Of 185 live forward deployed engineering postings I read on 2 October 2026, 175 put the customer in the job description, 115 use the word production, 100 name stakeholders or executives, 79 say integrate, 76 ask for feedback and 71 mention discovery or scoping. 33 postings name all five.",
          },
        },
        {
          "@type": "Question",
          name: "What is a forward deployed engineer role?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a software engineering job whose workplace is the customer's systems rather than the employer's codebase. The employer sells a product, and the engineer's job is to make that product work in production for one customer, then turn what worked into something the next customer can reuse. Palantir, which says it pioneered the position, describes it as embedding engineers directly with customers. Figma's posting says the job is to make its products work in a customer's environment and then turn what you learn into a reusable path for future customers instead of taking permanent ownership of the customer's codebase.",
          },
        },
        {
          "@type": "Question",
          name: "What does a forward deployed engineer do day to day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palantir's Forward Deployed AI Engineer posting in New York gives the plainest version. A day's work may include building LLM workflows on a large scale, interacting with customers to understand their needs and set their AI strategy, and implementing solutions inside the customer's organisation. Cursor describes the rhythm as shipping a fast first version in days, then hardening it into something reliable over weeks. Travel is part of most weeks too. 136 of the 185 postings I read mention it.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. 115 of the 185 postings use the word production in the description of the job itself, before the requirements start. Datadog's New York posting says the role is for someone who wants to write code with customers, not just advise them. Cursor's says this is not a demo role. Baseten's calls it an engineering role with hands-on coding that also includes aspects of product management, technical customer success and pre-sales solution engineering.",
          },
        },
        {
          "@type": "Question",
          name: "Is a forward deployed engineer a sales role?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the employer, and the postings disagree out loud. Figma's says this is a senior or staff level engineering role within Product and Engineering, not a sales or services function. Datadog's has the engineer building prototypes in customer codebases early in the sales cycle and partnering with Sales to accelerate deal cycles. Databricks sits at the services end, and 40 of its 60 forward deployed engineering postings use the word billable. Read which team the role reports into before you read anything else.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a forward deployed engineer make in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From the base bands printed in live postings on 2 October 2026: Palantir's Forward Deployed Software Engineer in New York is estimated at $135,000 to $200,000, Datadog's Senior Forward Deployed Engineer for Feature Flags in New York at $192,000 to $240,000, and Databricks's Senior Forward Deployed Engineer for Financial Services in New York City at $182,000 to $250,208. Figma's role, which can be held in San Francisco, New York or remotely in the United States, prints $153,000 to $376,000. Those are base ranges before equity or bonus.",
          },
        },
        {
          "@type": "Question",
          name: "What is a forward deployed engineering team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A group of these engineers, usually with a manager, sitting between the employer's product team and its biggest customers. OpenAI's team describes itself as operating at the intersection of customer delivery and core platform development. 76 of the 185 postings ask the engineer to turn one customer's solution into reusable patterns, playbooks, repeatable deployments or accelerators, which is how the team stops being a consultancy and starts feeding the product.",
          },
        }],
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
        { label: "Forward Deployed Engineer Role and Responsibilities" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward Deployed Engineer Role and Responsibilities</h1>
      <p className="op-lede">
        A forward deployed engineer gets a product working in production inside
        one customer&apos;s systems. Employers list five core duties. Scope the
        problem, write production code, connect the customer&apos;s data, answer
        to their executives, and report back to product.
      </p>
      <p>
        I&apos;m Hayat Amin. I spent twenty years as a technology chief financial
        officer, sold three companies in that seat, and now do this job myself
        inside client companies, so the list below is my own job description as
        much as anyone&apos;s. This morning, 2 October 2026, I read every live
        posting with forward deployed in the title at 10 companies that publish
        their job boards as open feeds. 185 of them are engineering roles. I
        counted what each one asks the engineer to do.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1024}
          height={559}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The engineer in the middle has his hands on the patron&apos;s machine,
          not his own, which is the whole definition. The eight panels round him
          are the rest of the week: the audience, the plan, the bench, the court,
          the two channels that never met, the letter home and the horse.
        </figcaption>
      </figure>

      <h2>How I counted</h2>
      <p>
        I pulled the public job feeds of Palantir (320 live roles), OpenAI (833),
        Anthropic (638), Databricks (872), Scale AI (194), Datadog (440), Figma
        (165), Cursor (133), Baseten (104) and Cresta (88). That&apos;s 3,787
        jobs. 252 had forward deployed in the title. I removed exact duplicates
        posted to several cities, which left 196, then set aside the product
        manager and deployment strategist titles, which left 185 engineering
        postings. Palantir has 65 of them, Databricks 60, OpenAI 24, Scale AI 12,
        Cursor 7, Anthropic 6, Cresta 6, and Baseten, Datadog and Figma 5 between
        them.
      </p>
      <p>
        For each posting I took the part that describes the job and stopped where
        the requirements start, at headings like What We Value, What we look for
        or You might thrive. 14 postings have no such heading, so for those I read
        the whole text. Then I counted plain words. A posting that says
        &quot;integrating with client systems&quot; counts for integration. One
        that never uses the word doesn&apos;t, even if the job obviously involves
        it, so every number here is a floor.
      </p>

      <h2>The five duties nearly everyone writes down</h2>
      <p>
        175 of the 185 put the customer or the client into the description of the
        work. That&apos;s the role. The responsibilities are what the engineer
        does once they&apos;re in there, and five of them recur across the
        employers.
      </p>

      <h3>1. Scope the real problem first</h3>
      <p>
        71 postings mention discovery or scoping, at 8 of the 10 companies.
        OpenAI&apos;s Forward Deployed Engineer in New York, on its financial
        services team, has the engineer &quot;Lead discovery and scoping from
        pre-sales through post-production&quot;. Scale AI&apos;s public sector
        engineer has to &quot;Embed with government customers to understand their
        mission, scope the problem, and turn it into working software&quot;.
        Cursor puts it as identifying &quot;the real bottleneck&quot; and defining
        success metrics before anyone builds anything. I&apos;d put this first in
        any job description I wrote, because building the right thing for the
        wrong problem is the most expensive mistake in this work.
      </p>

      <h3>2. Write production code in the customer&apos;s systems</h3>
      <p>
        115 postings use the word production in the job description itself, at 8
        of the 10 companies. Anthropic&apos;s London engineer will &quot;Work
        within customer systems to build production applications with Claude
        models&quot; and deliver &quot;MCP servers, sub-agents, and agent
        skills&quot;. Datadog&apos;s New York posting says the role is &quot;for
        someone who wants to write code with customers, not just advise
        them&quot;. Cursor&apos;s says &quot;This is not a demo role.&quot; The
        coding question gets its own piece,{" "}
        <Link href="/blog/do-forward-deployed-engineers-code-2026-09-16/">
          do forward deployed engineers code
        </Link>
        , and the postings settle it.
      </p>

      <h3>3. Connect the customer&apos;s data and systems</h3>
      <p>
        79 postings use some form of integrate, again at 8 of 10. Databricks says
        its engineers deliver &quot;integrating with client systems, training, and
        other technical needs&quot;. Scale AI wants &quot;data integrations that
        connect customer environments to Scale&apos;s platform and back&quot;.
        OpenAI&apos;s financial services engineer owns &quot;integrations, data
        flows, reliability, observability, and on-call readiness&quot;, which is
        the honest version. The integration is not done when it runs once. It is
        done when somebody is on call for it.
      </p>

      <h3>4. Work with stakeholders up to the executive floor</h3>
      <p>
        100 postings name stakeholders or executives, at 7 of the 10. Palantir&apos;s
        New York Forward Deployed Software Engineer is &quot;Engaging directly
        with customer stakeholders, from technical teams to executives&quot;.
        Databricks uses almost the same words, &quot;from technical ICs to
        executives&quot;. This is the duty engineers underestimate. The person
        who signs off on production is rarely the person who uses the system, and
        the engineer has to be credible to both in the same week.
      </p>

      <h3>5. Carry what you learned back to your own product</h3>
      <p>
        76 postings ask for feedback, at 7 of the 10. OpenAI&apos;s Tokyo posting,
        and 12 more of its 24, ask the engineer to &quot;Share field feedback that
        helps Research and Product understand where the models succeed and where
        they can improve&quot;. Anthropic&apos;s wants the engineer to
        &quot;Identify and codify repeatable deployment patterns and contribute
        insights back to our Product and Engineering teams&quot;. That&apos;s
        the duty that separates this job from a consultant&apos;s. The engineer
        works for the vendor, and the vendor wants the customer&apos;s pain
        turned into product.
      </p>
      <p>
        33 of the 185 postings name all five. 30 of those are at Databricks and 3
        at OpenAI, so if you want the full role in one document, read a
        Databricks posting.
      </p>

      <h2>Three more that show up often enough to count</h2>
      <p>
        76 postings ask the engineer to turn one customer&apos;s fix into
        something reusable, using the words reusable, playbook, repeatable or
        accelerator. Figma&apos;s founding engineer has to turn what they learn
        &quot;into a reusable path for future customers instead of taking
        permanent ownership of the customer&apos;s codebase&quot;. I&apos;d frame
        that sentence and put it on the wall of anyone hiring for this.
      </p>
      <p>
        65 postings mention evals or evaluation, at 6 of the 10, almost all of them
        AI companies. OpenAI&apos;s financial services engineer will &quot;Run
        evaluation loops that measure model and system quality against
        workflow-specific financial benchmarks&quot; and &quot;Define and enforce
        launch criteria&quot;. Figma&apos;s says &quot;run evals&quot; in its
        first bullet. That&apos;s 35 percent of the sample, and it&apos;s the
        newest duty on the list.
      </p>
      <p>
        136 of the 185 mention travel somewhere in the posting. OpenAI&apos;s
        New York engineer travels &quot;up to 50%&quot;, Palantir&apos;s New York
        engineer &quot;up to 25%&quot;, Databricks and Datadog in New York 20
        percent each. I counted the travel lines properly in{" "}
        <Link href="/blog/do-forward-deployed-engineers-travel-2026-09-17/">
          do forward deployed engineers travel
        </Link>
        .
      </p>

      <h2>The same title is a product job at Figma and a billable job at Databricks</h2>
      <p>
        The responsibilities agree. The reporting line doesn&apos;t, and it
        changes what the engineer is measured on.
      </p>
      <p>
        Figma&apos;s posting says this is &quot;a senior/staff-level engineering
        role within Product and Engineering, not a sales or services
        function&quot;. At Databricks, 40 of the 60 forward deployed engineering
        postings use the word billable, 33 of them in the line &quot;FDEs are
        billable&quot;, which puts the role in professional services. Datadog sits in between.
        Its engineer builds prototypes &quot;early in the sales cycle&quot; and is
        &quot;the technical force that turns a signed contract into a live,
        adopted implementation&quot;. Baseten says the quiet part plainly, calling
        its role engineering with &quot;aspects of product management, technical
        customer success, and pre-sales solution engineering mixed in&quot;.
      </p>
      <p>
        If you&apos;re applying, this is the line to read first. A product team
        measures you on what ships back into the product. A services team
        measures you on utilisation. A sales team measures you on closed deals.
        All three call the job forward deployed engineer.
      </p>

      <h2>What the pay looks like in New York</h2>
      <p>
        The bands printed on 2 October 2026, base only. Palantir&apos;s Forward
        Deployed Software Engineer in New York, $135,000 to $200,000, asking for 1
        or more years of experience. Databricks&apos;s Senior Forward Deployed
        Engineer for Financial Services in New York City, $182,000 to $250,208.
        Datadog&apos;s Senior Forward Deployed Engineer for Feature Flags in New
        York, $192,000 to $240,000. Figma&apos;s Forward Deployed Engineer, held in
        San Francisco, New York or remotely in the United States, $153,000 to
        $376,000, the widest band in the sample.
      </p>
      <p>
        Palantir&apos;s Forward Deployed AI Engineer posting describes the job as
        responsibilities that &quot;look similar to those of a hands-on AI startup
        CTO&quot;, for the same $135,000 to $200,000. That&apos;s a fair
        description of the work and a cheap price for a CTO.
      </p>

      <h2>If you&apos;re hiring one, write these five into the brief</h2>
      <p>
        Most people who ask me about this role aren&apos;t candidates. They run a
        company of 20 or 200 people, they&apos;ve watched an AI pilot stall, and
        they want to know what to ask for. The five duties above are the brief.
        Ask who scopes the problem and how they&apos;ll measure success. Ask what
        runs in production and who is on call for it. Ask which of your systems
        get connected. Ask who on their side talks to your leadership. And ask
        what you own at the end, because Figma&apos;s rule is the right one. A
        good engineer leaves you something reusable and doesn&apos;t keep the
        keys.
      </p>
      <p>
        That is the work I do through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , my firm, for companies that need the job done rather than a hire made.
        I scope it, build it inside your systems, connect what doesn&apos;t talk,
        and hand it back. The engagement is set out at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>
        . If you want the definition before the duties, start with{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          what a forward deployed engineer is
        </Link>
        , and if you suspect it&apos;s a consultant with a new title, I answered
        that in{" "}
        <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">
          is a forward deployed engineer just a consultant
        </Link>
        .
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most
        of it as a chief financial officer in companies growing faster than their
        systems. I sold three of them from that seat, with American Express and
        TripAdvisor among the buyers, and carried three FT 100 fastest growing
        listings along the way.
      </p>
      <p>
        I&apos;m exceptional at the five duties in this piece, and the finance
        years are why the stakeholder one comes easiest. I connect the systems in a company that were never
        built to talk to each other, turn what comes out of them into a real time
        number a chief executive can run the week on, and value the intellectual
        property and data a company already owns. I also sit beside founders from
        the first conversation to the wire transfer on an exit. A chief financial
        officer who writes the code is a rare pairing.
      </p>
      <p>
        I&apos;m available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and you can book the engineering side at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>
        .
      </p>

      <p>
        If you want a second pair of eyes on what to automate first, I do a free
        audit call, one call and then a written list, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What are the responsibilities of a forward deployed engineer?</h3>
      <p>
        Scope the customer&apos;s real problem, write production code inside
        their systems, integrate their data and tools, work with their
        stakeholders up to executive level, and carry what you learn back to your
        own product team. Of 185 live postings I read on 2 October 2026, 175 put
        the customer in the job description, 115 say production, 100 name
        stakeholders or executives, 79 say integrate, 76 ask for feedback and 71
        mention discovery or scoping. 33 name all five.
      </p>

      <h3>What is a forward deployed engineer role?</h3>
      <p>
        A software engineering job whose workplace is the customer&apos;s systems
        rather than the employer&apos;s codebase. The engineer makes the
        employer&apos;s product work in production for one customer, then turns
        what worked into something the next customer can reuse. Palantir, which
        says it pioneered the position, describes it as embedding engineers
        directly with customers.
      </p>

      <h3>What does a forward deployed engineer do day to day?</h3>
      <p>
        Palantir&apos;s New York Forward Deployed AI Engineer posting says a
        day&apos;s work may include building LLM workflows at scale, talking to
        customers about their needs and AI strategy, and implementing solutions
        inside their organisation. Cursor describes shipping a first version in
        days and hardening it over weeks. 136 of the 185 postings mention travel.
      </p>

      <h3>Do forward deployed engineers code?</h3>
      <p>
        Yes. 115 of 185 postings say production in the job description itself.
        Datadog wants someone who will &quot;write code with customers, not just
        advise them&quot;, and Cursor says &quot;This is not a demo role.&quot;
      </p>

      <h3>Is a forward deployed engineer a sales role?</h3>
      <p>
        At some employers it leans that way. Figma says its role is &quot;not a
        sales or services function&quot;. Datadog&apos;s engineer works &quot;early
        in the sales cycle&quot;. 40 of Databricks&apos;s 60 postings call
        its engineers billable. Check which team the role reports into.
      </p>

      <h3>How much does a forward deployed engineer make in New York?</h3>
      <p>
        Base bands printed on 2 October 2026: Palantir $135,000 to $200,000,
        Databricks $182,000 to $250,208 for a senior financial services role,
        Datadog $192,000 to $240,000 for a senior role, and Figma $153,000 to
        $376,000 for a role that can sit in New York, San Francisco or remote in
        the United States.
      </p>

      <h3>What is a forward deployed engineering team?</h3>
      <p>
        A group of these engineers sitting between the employer&apos;s product
        team and its biggest customers. OpenAI&apos;s describes itself as
        operating &quot;at the intersection of customer delivery and core platform
        development&quot;. 76 of the 185 postings ask the engineer to turn
        one-off fixes into reusable patterns, playbooks or accelerators, which is
        what the team exists to produce.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        Every count above comes from the employers&apos; own live feeds, read on
        2 October 2026. The postings quoted are Palantir&apos;s{" "}
        <a href="https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" target="_blank" rel="noopener noreferrer">
          Forward Deployed Software Engineer in New York
        </a>{" "}
        and{" "}
        <a href="https://jobs.lever.co/palantir/636fc05c-d348-4a06-be51-597cb9e07488" target="_blank" rel="noopener noreferrer">
          Forward Deployed AI Engineer in New York
        </a>
        , OpenAI&apos;s{" "}
        <a href="https://jobs.ashbyhq.com/openai/7f76be3a-38d0-4ff4-b997-9f1672e78bc0" target="_blank" rel="noopener noreferrer">
          financial services engineer in New York City
        </a>{" "}
        and{" "}
        <a href="https://jobs.ashbyhq.com/openai/51b17595-3a70-43be-a333-3a3952303284" target="_blank" rel="noopener noreferrer">
          Tokyo engineer
        </a>
        , Anthropic&apos;s{" "}
        <a href="https://job-boards.greenhouse.io/anthropic/jobs/5423029008" target="_blank" rel="noopener noreferrer">
          London engineer
        </a>
        ,{" "}
        <a href="https://databricks.com/company/careers/open-positions/job?gh_jid=8592942002" target="_blank" rel="noopener noreferrer">
          Databricks in New York City
        </a>
        ,{" "}
        <a href="https://careers.datadoghq.com/detail/8144946/" target="_blank" rel="noopener noreferrer">
          Datadog in New York
        </a>
        ,{" "}
        <a href="https://boards.greenhouse.io/figma/jobs/6158162004" target="_blank" rel="noopener noreferrer">
          Figma
        </a>
        ,{" "}
        <a href="https://jobs.ashbyhq.com/cursor/34cecd0c-c392-4454-8ef5-261310541011" target="_blank" rel="noopener noreferrer">
          Cursor in San Francisco
        </a>
        ,{" "}
        <a href="https://job-boards.greenhouse.io/scaleai/jobs/4481921005" target="_blank" rel="noopener noreferrer">
          Scale AI&apos;s public sector engineer
        </a>{" "}
        and{" "}
        <a href="https://jobs.ashbyhq.com/baseten/84c1801c-1a65-49fb-aaaa-beeafd530e7e" target="_blank" rel="noopener noreferrer">
          Baseten in San Francisco
        </a>
        . Salary figures are base bands before equity, bonus or sign-on. Postings
        get rewritten, so if you&apos;re reading this months later, open the link
        and check the line rather than trusting mine.
      </p>
    </PageShell>
  );
}
