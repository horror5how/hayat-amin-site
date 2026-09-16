import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "do-forward-deployed-engineers-code-2026-09-16";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-16";
const MOD = "2026-09-16";
const TITLE = "Do Forward Deployed Engineers Code? I Read 7 Live Job Postings and Counted";
const DESC =
  "Yes. Every forward deployed engineer posting I read on 16 September 2026 asks for a strong coder who ships production code inside the customer's systems. The confusion comes from a second job Palantir advertises two rows away that does not code, pays $25,000 less at the floor, and travels more. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, gold leaf and deep lapis inside a turquoise arabesque border. In a patron's tiled courtyard, two visiting specialists stand at the same great brass astrolabe. The first kneels on the flagstones with his sleeves pushed back and both hands inside the gearing, cutting and fitting a part he has made, his files and calipers laid out on a cloth beside him with the metal filings from his work. The second stands behind him in a fine robe holding an unrolled diagram, pointing at the machine, touching nothing. Three members of the household watch from the shaded arcade, unsure which of the two is changing the machine.";

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
        width: 1408,
        height: 768,
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
      about: "Whether forward deployed engineers write code, read from seven live job postings at Palantir, Anthropic, Datadog and Databricks on 16 September 2026",
      citation: [
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
          name: "Palantir Technologies, Deployment Strategist, New York",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/e0ab8226-b928-4e3a-bf87-08fe7b1ea595",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Forward Deployed Engineer, New York City, San Francisco and Seattle",
          publisher: { "@type": "Organization", name: "Anthropic" },
          url: "https://job-boards.greenhouse.io/anthropic/jobs/5302966008",
        },
        {
          "@type": "WebPage",
          name: "Datadog, Senior Forward Deployed Engineer, Feature Flags, New York",
          publisher: { "@type": "Organization", name: "Datadog" },
          url: "https://careers.datadoghq.com/detail/8144946/",
        },
        {
          "@type": "WebPage",
          name: "Databricks, Sr. Forward Deployed Engineer, Communications, Media, Entertainment and Games, Raleigh",
          publisher: { "@type": "Organization", name: "Databricks" },
          url: "https://www.databricks.com/company/careers/professional-services-operations/sr-forward-deployed-engineer-fde---communications-media-entertainment--games-8461258002",
        },
        {
          "@type": "WebPage",
          name: "Aced, formerly Exponent, Palantir Forward Deployed Engineer interview guide",
          publisher: { "@type": "Organization", name: "Aced" },
          url: "https://www.tryexponent.com/guides/palantir-forward-deployed-engineer-interview",
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
      width: 1408,
      height: 768,
      caption: HERO_ALT,
      name: "Do forward deployed engineers code, illuminated as two visiting specialists at one machine",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "do forward deployed engineers code, forward deployed engineer, FDE, deployment strategist, Palantir, Anthropic, Datadog, Databricks, Hayat Amin, Beyond Elevation, New York",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do forward deployed engineers code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and the postings say so without being asked. Palantir requires a strong coder with shown proficiency in programming languages such as Python, Java, C++, TypeScript/JavaScript, or similar. Anthropic requires strong programming skills with proficiency in Python and experience shipping production applications, and asks the engineer to work within customer systems to build production applications with Claude models. Datadog writes the sentence flat out: this role is for someone who wants to write code with customers, not just advise them. Databricks asks for production-grade systems and says its forward deployed engineers are billable. Six forward deployed postings read on 16 September 2026, six coding requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What programming languages do forward deployed engineers use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python is named in six of the seven postings read on 16 September 2026. After that the list thins fast. TypeScript or JavaScript appears in five, Java in three, C++ in two and Scala in two. Palantir names Python, Java, C++ and TypeScript/JavaScript for both its Forward Deployed Software Engineer and its Forward Deployed AI Engineer. Anthropic names Python first and TypeScript and Java as useful extras. Databricks names Python, Scala and JavaScript/TypeScript and wants deep experience with distributed computing with Apache Spark. Datadog names none at all and instead asks for someone comfortable dropping into unfamiliar codebases, languages, and frameworks quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Is a forward deployed engineer a real engineering job or a sales job?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An engineering job that happens in front of the customer. The seniority bars are the giveaway: Datadog asks for 5 or more years of professional software engineering experience with hands-on coding ability, its Raleigh counterpart at Databricks asks for 6 or more years and the Seoul one asks for 7 or more. No sales organisation screens on that. The clean proof is at Palantir, which advertises both jobs. Its Deployment Strategist goes onsite, finds the datasets, runs training and builds demos, and then works with Forward Deployed Engineers to integrate the data into a stable pipeline. The strategist is the customer-facing half. The engineer is the half that changes the system.",
          },
        },
        {
          "@type": "Question",
          name: "What does forward deployed engineer mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wikipedia defines it as a customer-facing software engineer who develops and deploys software within a client company, often working alongside the client's employees for a defined period of time, and notes the role was popularized by Palantir Technologies. The operative word is within. A software engineer builds their employer's product for everybody. A forward deployed engineer builds inside one customer's environment, with write access there, and the thing they build stays behind when they leave. Take away the write access and the job collapses into advice.",
          },
        },
        {
          "@type": "Question",
          name: "What is a forward deployed engineer at Palantir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palantir runs two titles. The Forward Deployed Software Engineer in New York asks for 1 or more years of post-college work experience, a strong engineering background, and a strong coder with shown proficiency in programming languages such as Python, Java, C++, TypeScript/JavaScript, or similar. The work listed is architecture and design decisions with fellow engineers, wrangling massive-scale data, developing custom applications tailored to customer needs, and driving projects from ideation to deployment. Travel is up to 25 percent. The band is estimated at $135,000 to $200,000 a year. The Forward Deployed AI Engineer carries the same coder requirement and the same band, and adds building LLM workflows on a large scale plus a foundation in machine learning basics.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Less than the ones who do not code. Datadog estimates up to 20 percent a year for its Senior Forward Deployed Engineer in New York, Databricks says 20 percent of the time, and Palantir and Anthropic both put their forward deployed engineers at 25 percent. Palantir's Deployment Strategist, the job in the same building that is not required to be a strong coder, is the only one in the sample that asks for 25 to 75 percent. Writing code keeps you at a desk, and the desk can be anywhere.",
          },
        },
        {
          "@type": "Question",
          name: "Is the forward deployed engineer interview a coding interview?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Partly, and the other part is why the question exists. Aced, formerly Exponent, publishes a guide to the Palantir forward deployed engineer loop describing four stages: a 30 minute recruiter conversation, then three 60 minute rounds drawn from a pool, each with embedded behavioural questions. One is a coding round of 60 minutes in CodePair with roughly 15 to 20 minutes of behavioural questions inside it, where you typically choose your language from Python, Java, or TypeScript. Another is decomposition, 60 minutes of breaking a vague challenge from the real world into component parts and proposing a solution, with little or no code required. A loop that tests both is testing for one person who can do both.",
          },
        },
        {
          "@type": "Question",
          name: "How do I learn to be a forward deployed engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start from the requirement that is hardest to fake. Datadog asks for someone comfortable dropping into unfamiliar codebases, languages, and frameworks quickly, with experience shipping production code rather than prototypes. That is a skill you build by working in systems you did not design, under people who did not hire you, which no course sells. The rest is ordinary and learnable: Python to a production standard, one of TypeScript or Java beside it, the cloud platforms, and for the AI roles the things Anthropic lists as deliverables, MCP servers, sub-agents and agent skills. Palantir will take you at 1 or more years of experience. Datadog wants 5 or more. Both doors are open, at opposite ends of a career.",
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
        { label: "Do Forward Deployed Engineers Code?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Do Forward Deployed Engineers Code?</h1>
      <p className="op-lede">
        Yes. Writing production code inside the customer&apos;s own systems is
        the job, and all six forward deployed postings I read this morning say
        so in their own words. The reason you had to ask is a seventh job,
        advertised two rows away, that does not.
      </p>
      <p>
        I am Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies in that seat, and I now do this work
        myself rather than write reports about it, so the question is not
        academic for me. On 16 September 2026 I read seven live postings at four
        companies: Palantir, Anthropic, Datadog and Databricks. Six carry
        forward deployed in the title. The seventh is the control, and it is the
        most useful document of the lot.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Two visitors, one machine, one patron paying for both. The kneeling man
          has his hands in the gearing and his filings on the floor. The standing
          man has a beautiful diagram and clean sleeves. The household in the
          arcade cannot tell which one is changing the machine, which is exactly
          why people search for this question.
        </figcaption>
      </figure>

      <h2>How I checked</h2>
      <p>
        Seven postings, four companies, all live on 16 September 2026, every
        phrase below lifted from the posting rather than from anybody&apos;s
        summary of it. Palantir contributed three: Forward Deployed Software
        Engineer in New York, Forward Deployed AI Engineer in New York, and
        Deployment Strategist in New York. Anthropic contributed its Forward
        Deployed Engineer for New York City, San Francisco and Seattle. Datadog
        contributed Senior Forward Deployed Engineer, Feature Flags, in New York.
        Databricks contributed two, one in Raleigh, North Carolina and one in
        Seoul.
      </p>
      <p>
        A job posting is a company saying what it wants to buy. It is not a diary
        of how anybody spends Tuesday, and I will come back to that gap near the
        end, because it is where the honest answer lives. A posting is unusually good
        at telling you what a company will reject you for, and on that these
        seven agree.
      </p>

      <h2>The coding line in all six</h2>
      <p>
        Palantir invented this title and writes the requirement twice, once for
        each of its two engineering versions. The Forward Deployed Software
        Engineer in New York must be a &quot;Strong coder with shown proficiency
        in programming languages such as Python, Java, C++, TypeScript/JavaScript,
        or similar&quot;. The Forward Deployed AI Engineer, same city, same
        estimated band of $135,000 to $200,000, must be a &quot;Strong coder with
        demonstrated proficiency&quot; in the same four languages, and on top of
        that have &quot;Past experience building solutions with LLMs&quot; and a
        &quot;Strong foundation in Machine Learning basics&quot;.
      </p>
      <p>
        Anthropic asks its Forward Deployed Engineer for &quot;Strong programming
        skills with proficiency in Python (and ideally in one or more additional
        languages like Typescript, Java, etc) and experience shipping production
        applications&quot;. The first responsibility on the list is to &quot;Work
        within customer systems to build production applications with Claude
        models&quot;. Read that phrase slowly, because it is the whole model in
        five words: within customer systems, production applications.
      </p>
      <p>
        Datadog does not leave it to inference. Its posting for Senior Forward
        Deployed Engineer, Feature Flags contains this sentence: &quot;This role
        is for someone who wants to write code with customers, not just advise
        them.&quot; The requirements ask for &quot;5+ years of professional
        software engineering experience, with hands-on coding ability&quot; and
        &quot;Experience shipping production code&quot;. The band is $192,000 to
        $240,000.
      </p>
      <p>
        Databricks comes at it from the delivery side and gets to the same place.
        Its Senior Forward Deployed Engineer in Raleigh leads &quot;impactful
        customer technical projects by delivering production-grade systems&quot;
        and needs &quot;6+ years experience in data engineering, data platforms
        &amp; analytics, or software engineering&quot; across Python, Scala and
        JavaScript/TypeScript, with &quot;Deep experience with distributed
        computing with Apache Spark&quot;. The Seoul posting asks for 7 or more
        years of the same. Databricks is also the only one of the four that says
        the commercial part out loud: &quot;FDEs are billable and know how to
        complete projects according to specification&quot;.
      </p>
      <p>
        Six postings, six coding requirements, four companies that compete with
        each other and agree on this. Python is named in six of the seven,
        including the control I am about to show you. TypeScript or JavaScript
        appears in five, Java in three, C++ in two, Scala in two. The one
        posting that names no language at all is Datadog, and that is on
        purpose.
      </p>

      <h2>The seventh posting, which is why you asked</h2>
      <p>
        Palantir advertises a second job into the same customer. It is called
        Deployment Strategist, it is also in New York, and it does not require
        you to be a coder. It asks instead for &quot;Experience with programming,
        scripting or statistical packages (e.g. Python, R, Matlab, SQL)&quot;.
        Note what changed. Not languages, packages. Not strong coder, experience
        with.
      </p>
      <p>
        The responsibilities are the field half of the same engagement. Go onsite
        and meet with customer analysts to understand the critical questions.
        Identify relevant datasets. Lead training sessions. Present results to
        audiences ranging from analysts to the C-suite. Build and deliver demos.
        And then the line that settles the argument, sitting in Palantir&apos;s
        own strategist posting: &quot;Work with Forward Deployed Engineers to
        integrate the data into a stable pipeline&quot;.
      </p>
      <p>
        The strategist does not integrate the pipeline. The strategist works with
        the person who does. Two jobs, one account, and the boundary between them
        is write access.
      </p>
      <p>
        Palantir prices that boundary, which I find the most interesting number
        in this whole exercise. The Deployment Strategist band is $110,000 to
        $170,000. The Forward Deployed Software Engineer band is $135,000 to
        $200,000. That is $25,000 more at the floor and $30,000 more at the
        ceiling, from the same employer, for the same customer, in the same city.
        The strategist also travels more, at 25 to 75 percent against the
        engineer&apos;s 25 percent. If you have ever suspected that the job with
        the airport lounge is the job with less grip on the outcome, there is your evidence.
      </p>

      <h2>The artefacts they are asked to build</h2>
      <p>
        Everyone quotes the word production and nobody says what comes out. The
        postings do, and the artefacts are specific.
      </p>
      <p>
        Anthropic lists them: &quot;Deliver technical artifacts for customers like
        MCP servers, sub-agents, and agent skills&quot;. Datadog asks its engineer
        to &quot;Build prototype flag implementations directly in customer
        codebases&quot; and to &quot;Drive full flag migrations to completion&quot;.
        Palantir asks for &quot;Developing custom applications tailored to
        customer needs&quot; and, in the AI version, &quot;building LLM workflows
        on a large scale&quot;. Databricks asks its engineer to own architecture
        and design decisions and deliver end to end systems across data
        engineering, artificial intelligence and application development.
      </p>
      <p>
        None of that is product code. Product code is written once for a hundred
        thousand strangers. This is code written for one company, in that
        company&apos;s repository, against that company&apos;s ugly data, and it
        stays there after the engineer leaves. Datadog names the skill that makes
        it possible better than anyone: &quot;Comfortable dropping into
        unfamiliar codebases, languages, and frameworks quickly&quot;. The thing being bought isn&apos;t
        mastery of one stack. It is the nerve to work in a
        stack you did not choose and would not have chosen.
      </p>

      <h2>The interview tests both halves</h2>
      <p>
        Aced, formerly Exponent, publishes a guide to the Palantir forward
        deployed engineer loop. It describes four stages: a 30 minute recruiter
        conversation on background, motivation and culture fit, then three 60
        minute rounds drawn from a pool, each with behavioural questions embedded
        inside it.
      </p>
      <p>
        One of those rounds is coding: &quot;60 minutes in CodePair, a coding
        challenge, and roughly 15-20 minutes of embedded behavioral questions&quot;,
        where &quot;You typically choose your language from Python, Java, or
        TypeScript&quot;. Another is decomposition: &quot;A 60-minute interview
        where you break a vague, real-world challenge into component parts and
        propose a solution, with little or no code required.&quot;
      </p>
      <p>
        Both, in the same afternoon. That is the actual answer to your question
        and it is why the question keeps getting asked. Yes they code, and no,
        coding is not the part that gets you hired on its own, because one of the
        three rounds deliberately takes the editor away and watches what is left.
        A loop that tests both is a company
        telling you it could not find a way to split this work across two people, and Palantir would know, because it tried and the
        result is the Deployment Strategist.
      </p>

      <h2>The honest share of the week</h2>
      <p>
        Not one of the seven postings puts a percentage on it. If somebody tells
        you the job is 70 percent code, or 40, ask them where they read it,
        because I could not find it anywhere and I looked at the primary
        documents.
      </p>
      <p>
        The companies do commit to one number in writing, and that number is
        travel. Datadog says up to 20 percent annually. Databricks says 20
        percent of the time. Palantir says up to 25 percent for both engineering
        roles and Anthropic estimates 25 percent. Roughly one week in four or
        five is somewhere else, and the other three or four are wherever you
        normally work. That is the only bounded number on offer, and it bounds
        the answer: this is not a road job with some code attached.
      </p>
      <p>
        My own week, for whatever a sample of one is worth, is heavier on code
        than the reputation of the role suggests and lighter on the interesting
        kind. Most of what I write is joining work. A connector between two
        systems that were never meant to meet. A scheduled job that reconciles
        what each of them thinks is true. A set of evaluations so a model&apos;s
        output can be checked by something other than an opinion. Then the query
        behind a number a chief executive wants to look at on a Monday. None of
        it would survive a code review at a product company as elegant. All of it
        runs in production in somebody else&apos;s building, which is the test
        that counts.
      </p>

      <h2>If you are hiring one</h2>
      <p>
        Work out which of Palantir&apos;s two jobs you are trying to
        buy, because most companies I talk to ask for the engineer and describe
        the strategist.
      </p>
      <p>
        If the hard part is that nobody has mapped your data, agreed the
        definitions or got your team to use the thing, that is strategist work
        and a strong coder will be bored and expensive doing it. If the hard part
        is that the integration into your real systems does not exist and will
        not exist unless somebody builds it, hire the one who codes, and then
        give them the credentials on day one. A forward deployed engineer without
        write access is a consultant with a better title, which is the accusation
        the role has been fighting since Palantir coined it, and it becomes true
        the moment procurement says no.
      </p>
      <p>
        One more test before you write the job description. Ask whether the thing
        you want built should stay yours. It will. That is the point of having it
        built inside your systems rather than bought as a seat, and it is the
        same reason I do this work as an engineer rather than as an adviser: the{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          forward deployed engineer
        </Link>{" "}
        leaves and the code does not. I do exactly this through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , inside the client&apos;s systems, with their credentials, and the
        engineering side of it is set out at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I am Hayat Amin, and I have spent twenty years in technology, most of it
        as a chief financial officer in companies growing faster than their
        systems could follow. I sold three of them in that seat, with American
        Express and TripAdvisor among the buyers, and carried three FT 100
        fastest growing listings on the way. In that seat you sign the
        invoices for work like this, which is a different view of it than the
        engineer&apos;s, and it is the view most of my readers are sitting in.
      </p>
      <p>
        I am exceptional at the work described above, done rather than
        recommended. Connecting systems that were never designed to talk to each
        other. Turning what comes out of them into a real time number a chief
        executive can run the week on. Valuing and monetising the intellectual
        property and data a company owns and cannot see on its balance sheet. And
        sitting beside a founder from the first conversation through to the wire
        transfer on an exit, which is where the finance years earn their keep. I
        am a chief financial officer who writes the code, and that combination is
        rarer than either half.
      </p>
      <p>
        I am available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and you can see what a{" "}
        <Link href="/blog/forward-deployed-engineer-vs-project-manager-2026-09-11/">
          forward deployed engineer is not
        </Link>{" "}
        if you want the other side of the comparison first.
      </p>

      <p>
        If you want a second pair of eyes on whether your next hire should write
        code or map data, I do a free audit call: one call, then a written list
        of what to automate first, what it saves and what it costs, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>Do forward deployed engineers code?</h3>
      <p>
        Yes, and the postings say so without being asked, which tells you how
        often people assume otherwise. Palantir requires a &quot;Strong coder
        with shown proficiency in programming languages such as Python, Java,
        C++, TypeScript/JavaScript, or similar&quot;. Anthropic requires
        &quot;Strong programming skills with proficiency in Python&quot; and
        &quot;experience shipping production applications&quot;, and asks the
        engineer to &quot;Work within customer systems to build production
        applications with Claude models&quot;. Datadog writes it flat: its
        role is for the engineer who wants to write code with customers rather
        than advise them. Databricks asks for production-grade systems
        and says its forward deployed engineers are billable. Six forward
        deployed postings read on 16 September 2026, six coding requirements.
      </p>

      <h3>What programming languages do forward deployed engineers use?</h3>
      <p>
        Python is in six of the seven postings, including the one that is not an
        engineering job. After that it thins fast: TypeScript or JavaScript in
        five, Java in three, C++ in two, Scala in two. Palantir names Python,
        Java, C++ and TypeScript/JavaScript for both of its engineering titles.
        Anthropic names Python first, with TypeScript and Java as useful extras.
        Databricks names Python, Scala and JavaScript/TypeScript and wants deep
        experience with Apache Spark on top. Datadog names no language at all and
        asks instead for someone &quot;Comfortable dropping into unfamiliar
        codebases, languages, and frameworks quickly&quot;, which is the more
        honest requirement and the harder one to satisfy.
      </p>

      <h3>Is a forward deployed engineer a real engineering job or a sales job?</h3>
      <p>
        An engineering job that happens in front of the customer. The seniority
        bars give it away: Datadog wants 5 or more years of professional software
        engineering experience, Databricks wants 6 or more in Raleigh and 7 or
        more in Seoul. No sales organisation screens on that. The clean proof is
        that Palantir sells both jobs into the same account and keeps them
        separate. The Deployment Strategist goes onsite, finds the datasets, runs
        the training and builds the demos, then works with Forward Deployed
        Engineers to integrate the data into a stable pipeline. One of those two
        people changes the system.
      </p>

      <h3>What does forward deployed engineer mean?</h3>
      <p>
        Wikipedia has it as &quot;A customer-facing software engineer who
        develops and deploys software within a client company, often working
        alongside the client&apos;s employees for a defined period of time&quot;,
        and notes the role &quot;was popularized by Palantir Technologies&quot;.
        The word doing the work is within. A software engineer builds their own
        employer&apos;s product for everybody. A forward deployed engineer builds
        inside one customer&apos;s environment, and what they build stays there
        when they go. Remove the write access and the job collapses into advice.
      </p>

      <h3>What is a forward deployed engineer at Palantir?</h3>
      <p>
        Two titles, one band. The Forward Deployed Software Engineer in New York
        asks for &quot;1+ years of relevant, post-college work experience&quot;
        and a strong engineering background, and lists architecture and design
        decisions, wrangling massive-scale data, &quot;Developing custom
        applications tailored to customer needs&quot;, engaging with stakeholders
        from technical teams to executives, and driving projects from ideation to
        deployment. The Forward Deployed AI Engineer adds &quot;building LLM
        workflows on a large scale&quot; and machine learning fundamentals. Both
        are hybrid in New York, both travel up to 25 percent, and both are
        estimated at $135,000 to $200,000 a year plus restricted stock. That
        floor is low for the company that invented the job.
      </p>

      <h3>Do forward deployed engineers travel?</h3>
      <p>
        Less than the people who do not code. Datadog says up to 20 percent
        annually, Databricks says 20 percent of the time, Palantir says up to 25
        percent and Anthropic estimates 25 percent. The only posting in this set
        asking for 25 to 75 percent is Palantir&apos;s Deployment Strategist, the
        one with no strong coder requirement. Whatever you were told about living
        on planes, the numbers the companies commit to in writing are one week in
        four at the top end.
      </p>

      <h3>Is the forward deployed engineer interview a coding interview?</h3>
      <p>
        Partly, and the other part is the interesting one. Aced, formerly
        Exponent, describes the Palantir loop as four stages: a 30 minute
        recruiter conversation, then three 60 minute rounds with behavioural
        questions embedded in each. One is &quot;60 minutes in CodePair, a coding
        challenge&quot;, where &quot;You typically choose your language from
        Python, Java, or TypeScript&quot;. Another is decomposition, a 60 minute
        interview where you break a vague challenge from the real world into
        component parts and propose a solution, with little or no code required.
        Prepare for one and you&apos;ll fail the other.
      </p>

      <h3>How do I learn to be a forward deployed engineer?</h3>
      <p>
        Start with the requirement nobody can fake. Datadog asks for someone
        comfortable dropping into unfamiliar codebases, languages and frameworks
        quickly, with &quot;Experience shipping production code&quot;. You build that
        by working in systems you did not design
        for people who did not hire you, and no course sells it. The rest is
        ordinary: Python to a production standard, TypeScript or Java beside it,
        two cloud platforms, and for the artificial intelligence roles the
        artefacts Anthropic lists, MCP servers, sub-agents and agent skills.
        Palantir will take you at 1 or more years of experience and Datadog wants
        5 or more, so there are two doors at opposite ends of a career.
      </p>

      <h2>Where these quotes come from</h2>
      <p>
        Every phrase in quotation marks from a job advert above was read on the
        employer&apos;s own posting on 16 September 2026:{" "}
        <a href="https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" target="_blank" rel="noopener noreferrer">
          Palantir Forward Deployed Software Engineer, New York
        </a>
        ,{" "}
        <a href="https://jobs.lever.co/palantir/636fc05c-d348-4a06-be51-597cb9e07488" target="_blank" rel="noopener noreferrer">
          Palantir Forward Deployed AI Engineer, New York
        </a>
        ,{" "}
        <a href="https://jobs.lever.co/palantir/e0ab8226-b928-4e3a-bf87-08fe7b1ea595" target="_blank" rel="noopener noreferrer">
          Palantir Deployment Strategist, New York
        </a>
        ,{" "}
        <a href="https://job-boards.greenhouse.io/anthropic/jobs/5302966008" target="_blank" rel="noopener noreferrer">
          Anthropic Forward Deployed Engineer
        </a>
        ,{" "}
        <a href="https://careers.datadoghq.com/detail/8144946/" target="_blank" rel="noopener noreferrer">
          Datadog Senior Forward Deployed Engineer, Feature Flags
        </a>
        , and Databricks in{" "}
        <a href="https://www.databricks.com/company/careers/professional-services-operations/sr-forward-deployed-engineer-fde---communications-media-entertainment--games-8461258002" target="_blank" rel="noopener noreferrer">
          Raleigh
        </a>
        {" "}and{" "}
        <a href="https://www.databricks.com/company/careers/professional-services-operations/forward-deployed-engineer-8540455002" target="_blank" rel="noopener noreferrer">
          Seoul
        </a>
        . The interview loop comes from{" "}
        <a href="https://www.tryexponent.com/guides/palantir-forward-deployed-engineer-interview" target="_blank" rel="noopener noreferrer">
          Aced&apos;s Palantir forward deployed engineer guide
        </a>
        , which is a third party account and labelled as one. The definition
        comes from{" "}
        <a href="https://en.wikipedia.org/wiki/Forward_Deployed_Engineer" target="_blank" rel="noopener noreferrer">
          Wikipedia&apos;s Forward Deployed Engineer page
        </a>
        . Salary bands are the base figures printed on those postings that day,
        before equity, bonus or sign-on, and postings change. If you are reading
        this months later, check the link rather than the number.
      </p>
    </PageShell>
  );
}
