import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-vs-project-manager-2026-09-11";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-11";
const MOD = "2026-09-11";
const TITLE = "Forward Deployed Engineer vs Project Manager: Who Actually Builds It?";
const DESC =
  "A project manager coordinates the people who build. A forward deployed engineer is one of the people who build. The federal definition of the project management job is to lead and guide the work of technical staff, so if you have no technical staff on the problem, there is nothing to coordinate. Hire on that, not on the titles.";
const HERO = `${SITE}/forward-deployed-engineer-vs-project-manager-2026-09-11.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, painted as two panels beneath one gilded frame and divided by a slender jewelled column. In the left panel a planner in rich blue and gold robes stands on a courtyard terrace holding an unrolled ruled plan, one hand out to direct a line of labourers carrying dressed stone across the yard. In the right panel a builder in plain working dress with his sleeves pushed back kneels on the scaffold at the crown of the same stone arch, setting the keystone into place with his own two hands. The arch is finished only where the two panels meet.";

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
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Forward deployed engineer vs project manager: what is the difference?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A project manager coordinates the work. A forward deployed engineer does the work, inside the customer's systems, and stays accountable for it in production. The United States government defines the project management job precisely, in occupation 13-1082: analyze and coordinate the schedule, timeline, procurement, staffing, and budget of a product or service on a per project basis, and lead and guide the work of technical staff. Anthropic's Forward Deployed Engineer posting instead asks the person to work within customer systems to build production applications with Claude models and to deliver technical artifacts like MCP servers, sub-agents and agent skills used in production workflows. Coordinate technical staff, or be the technical staff. That is the whole distinction, and it decides which one your problem needs.",
          },
        },
        {
          "@type": "Question",
          name: "Is a forward deployed engineer a project manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and at the companies that run forward deployment at scale the two sit beside each other rather than replacing each other. Databricks lists 874 open roles and 91 with forward deployed in the title. Not one is called project manager, and its Senior Forward Deployed Engineer posting in New York City says in its own responsibilities that the engineer will work with the Databricks technical team, Project Manager, Architect and Customer team to ensure the technical components of the engagement are delivered. The project manager is a different chair in the same room. Palantir does the same thing under a different name: 310 open postings, 77 forward deployed, and 35 Deployment Strategists whose job description asks them to work with Forward Deployed Engineers to integrate data into a stable and extensible pipeline.",
          },
        },
        {
          "@type": "Question",
          name: "Forward deployed engineer vs project manager: which pays more in the United States?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Against the national average, the forward deployed engineer, by a wide margin. Against a senior project or program manager at a frontier AI company, often not. The Bureau of Labor Statistics counted 1,066,670 project management specialists working in the United States as of May 2025 at a median wage of $102,320, rising to $167,970 at the 90th percentile, and $126,660 median in the New York, Newark and Jersey City metro area. Forward deployed engineer bands read on live job boards this week sit well above that: $280,000 to $320,000 at Anthropic for New York City, San Francisco and Seattle, and $182,000 to $250,208 for a Senior Forward Deployed Engineer at Databricks in New York City. But Anthropic's Technical Program Manager postings list $365,000 to $435,000, above its own forward deployed engineers. This is not a ladder where one title sits above the other.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and that is the point of the job. Every posting read this week describes hands on building rather than oversight. Anthropic asks for production applications built inside customer systems. Databricks asks its forward deployed engineers to own the architecture, lead design decisions and implement end to end systems spanning data engineering, AI and application development, and asks for six or more years in data engineering or software engineering with code written in Python, Scala or TypeScript. Palantir's Forward Deployed AI Engineer posting compares the role to a hands-on AI startup chief technology officer. A project manager may have been technical once, but the federal definition of that job contains no verb about building anything.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually, though less than the reputation suggests. The postings read this week put Anthropic's Forward Deployed Engineer at an estimated 25 percent travel to customer sites, and the Senior Forward Deployed Engineer at Databricks in New York City at 20 percent. The coordination seats travel more, not less: Palantir asks its Deployment Strategists for 25 to 75 percent depending on location and team, and Databricks asks its Lead Engagement Manager for up to 25 to 50 percent. If travel is the deciding factor in your hire, note that being onsite is not the thing that produces a working system. Write access is.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a project manager or a forward deployed engineer for my AI project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask one question: is somebody already building the thing? If engineers are already on it and the failure is sequencing, dependencies, dates and the handoffs between three teams, hire the project manager, and hire a good one. If nothing is being built, or a pilot has been sitting at 80 percent since spring because the people who could finish it have day jobs, a project manager will produce an accurate weekly account of a system that still does not exist. That is when you want the forward deployed engineer. Most companies under a few hundred people that ask this question have a building problem wearing the costume of a coordination problem.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      url: HERO,
      contentUrl: HERO,
      caption:
        "The plan and the keystone: the project manager directing the stone across the courtyard, the forward deployed engineer up on the scaffold setting the last stone of the arch by hand",
      name: "Forward deployed engineer vs project manager, illuminated in two panels",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "forward deployed engineer vs project manager, project management specialists, FDE, technical program manager, Hayat Amin, Beyond Elevation, New York, London",
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
        { label: "Forward Deployed Engineer vs Project Manager" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>Forward Deployed Engineer vs Project Manager: Who Actually Builds It?</h1>
      <p className="op-lede">
        A project manager coordinates the people who build. A forward deployed
        engineer is one of the people who build. If engineers are already on
        your problem and what keeps slipping is sequencing, dependencies and
        dates across three teams, hire the project manager. If nothing is
        actually being built, or a pilot has been sitting at eighty percent
        since the spring because everyone who could finish it has a day job,
        hire the forward deployed engineer, because a coordinator with nobody to
        coordinate produces a very accurate weekly report about a system that
        does not exist.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/forward-deployed-engineer-vs-project-manager-2026-09-11.jpg"
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Two panels, one arch. On the left the plan is held up and the stone
          moves across the courtyard. On the right somebody is on the scaffold
          with mortar on his sleeves, setting the keystone by hand. The arch is
          finished only where the panels meet.
        </figcaption>
      </figure>

      <h2>One of these jobs has a census category. The other has eleven mentions in history.</h2>
      <p>
        Before comparing them, look at how differently the two titles sit in the
        world, because that asymmetry explains most of the confusion I hear in
        boardrooms.
      </p>
      <p>
        Project management is one of the largest professions in the American
        economy. It has its own federal occupation code, 13-1082, project
        management specialists, and the Bureau of Labor Statistics counted
        1,066,670 people doing it in the United States as of May 2025, at a
        median wage of $102,320, a mean of $110,740 and $167,970 at the 90th
        percentile. In the New York, Newark and Jersey City metropolitan area
        alone there are 68,910 of them, at a median of $126,660. For comparison,
        the same programme counts 1,687,890 software developers nationally at a
        median of $135,980.
      </p>
      <p>
        The forward deployed engineer has none of that infrastructure. Search
        all 1,104 occupations in that federal wage file for the words forward
        deployed and you get nothing. Not a low count. Zero. Nor has the title
        reached the audited page in any quantity: search every annual report
        ever filed with the Securities and Exchange Commission and the phrase
        project managers appears in 4,303 Form 10-K filings, while forward
        deployed engineers appears in 11.
      </p>
      <p>
        Eleven, against four thousand three hundred. So when someone frames this
        as a straight choice between two comparable hires, remember what they
        are actually comparing. One is a mature profession with a measured
        population, a known price and a hundred thousand people you could
        interview this month. The other is a two year old answer to a problem
        the mature profession does not solve, growing at around 800 percent in
        job listings between January and September 2025 and over 1,000 percent
        year on year into 2026.
      </p>

      <h2>The federal definition settles most of the argument</h2>
      <p>
        The government wrote the job description for you, and it is worth
        reading slowly. Occupation 13-1082 is defined as follows: analyze and
        coordinate the schedule, timeline, procurement, staffing, and budget of
        a product or service on a per project basis. Lead and guide the work of
        technical staff. May serve as a point of contact for the client or
        customer.
      </p>
      <p>
        Analyze. Coordinate. Lead and guide the work of technical staff. Serve
        as a point of contact. Every one of those verbs takes an object that has
        to already exist. A schedule presumes work to schedule. Technical staff
        presumes technical staff.
      </p>
      <p>
        Now read what the other job is asked to do, in the employer&apos;s own
        words. Anthropic&apos;s Forward Deployed Engineer posting, covering New
        York City, San Francisco and Seattle, asks the person to work within
        customer systems to build production applications with Claude models,
        and to deliver technical artifacts for customers like MCP servers, sub
        agents and agent skills that will be used in production workflows.
        Databricks asks its forward deployed engineers to own the architecture,
        lead design decisions, and implement end to end systems spanning data
        engineering, AI, and application development. Palantir&apos;s Forward
        Deployed AI Engineer posting in New York says the responsibilities look
        similar to those of a hands-on AI startup chief technology officer.
      </p>
      <p>
        Build. Deliver. Implement. Own. One vocabulary organises the work and
        the other performs it. That is not a difference of seniority or a
        difference of branding. It is a difference of what leaves the building
        at the end.
      </p>

      <h2>At the companies doing this at scale, the two sit next to each other</h2>
      <p>
        Here is the part that most comparison articles get wrong, including some
        written by people selling forward deployment. These are not rival
        answers to one question. At the firms that have run this model longest,
        they are two chairs at the same table.
      </p>
      <p>
        Databricks was advertising 874 open roles this week, 91 of them with
        forward deployed in the title. Roles titled project manager: zero. But
        read its Senior Forward Deployed Engineer posting for New York City and
        one responsibility says the engineer will work with the Databricks
        technical team, Project Manager, Architect and Customer team to ensure
        the technical components of the engagement are delivered to meet the
        customer&apos;s needs. Another says to work with engagement managers to
        scope technical delivery work with input from the customer. The
        coordination has not disappeared. It has been given to somebody else so
        that the engineer can stay in the code.
      </p>
      <p>
        Palantir, which invented this job, had 310 open postings this week, 77
        with forward deployed in the title and 13 program managers, none of them
        called project manager. What it has instead is 35 Deployment
        Strategists, and their posting says plainly that they identify relevant
        datasets through deep engagement with customer problems and workflows,
        and work with Forward Deployed Engineers to integrate the data into a
        stable and extensible pipeline. Anthropic runs 594 open roles with six
        forward deployed and 20 technical program managers, and again not one
        project manager. Datadog: 451 roles, two forward deployed, zero project
        managers.
      </p>
      <p>
        Four companies, 2,229 open roles between them, and the phrase project
        manager appears in none of the titles while the coordination job exists
        at every one of them under a name that carries an outcome instead of an
        artefact. Deployment strategist. Engagement manager. Technical program
        manager. I read that as fashion in the naming and substance in the
        structure. The structure says somebody holds the plan and somebody else
        holds the tools, and the second person is never the one taking the
        minutes.
      </p>

      <h2>The money does not run the way people assume</h2>
      <p>
        The lazy version of this comparison says the forward deployed engineer
        is the expensive senior one and the project manager is the cheaper
        coordinator. Held against real bands, that falls apart.
      </p>
      <p>
        At Databricks, in the same compensation zone that covers New York, the
        Senior Forward Deployed Engineer band is $182,000 to $250,208. The Lead
        Engagement Manager for forward deployed engineering, hiring in Dallas,
        New Jersey and New York, is $178,800 to $245,850. Those are effectively
        the same money. At Anthropic the order reverses: the Forward Deployed
        Engineer band is $280,000 to $320,000, and three of the four technical
        program manager postings I sampled this week list $365,000 to $435,000,
        with the fourth at $290,000 to $365,000. The coordinator out-earns the
        builder by around eighty thousand dollars at the top of the band.
      </p>
      <p>
        I should be fair about that comparison rather than use it as a
        gotcha. A technical program manager at a frontier lab is coordinating an
        organisation, not a client project, and that is a genuinely harder and
        rarer job than running a delivery plan for one customer. The honest
        conclusion is the useful one anyway: this is not a ladder. Neither title
        is the senior version of the other. They are priced by what they are
        accountable for, and you should buy the accountability you are missing.
      </p>

      <h2>Read it as a chief financial officer and the line gets sharper</h2>
      <p>
        Twenty years running finance inside high growth companies, through three
        exits, taught me to ignore the org chart on questions like this and ask
        which budget the person comes out of and what number they are measured
        on.
      </p>
      <p>
        Databricks writes it into the postings without meaning to. Its forward
        deployed engineers, in its own phrase, are billable and know how to
        complete projects according to specification. Its lead engagement
        manager contributes to team level booking targets and consumption goals
        and leads the sales of complex professional services offerings. One seat
        converts money into a working system. The other converts a relationship
        into signed work and keeps the plan honest. Both are legitimate. Only
        one of them adds a system to your company this quarter.
      </p>
      <p>
        The second CFO number is coverage. A project manager can carry several
        workstreams at once, which is why a million of them are employed and why
        the median sits near a hundred thousand dollars. A forward deployed
        engineer covers one problem at a time and is priced accordingly. On a
        cost per project basis the forward deployed engineer is not marginally
        more expensive. They are several times more expensive, and worth it in
        exactly one circumstance: when the alternative is a plan that is
        beautifully tracked and never gets built.
      </p>
      <p>
        The third is hireability, and it cuts the other way. There are over a
        million project management specialists in the United States with a
        published wage distribution, standard certifications and a market you
        can hire from in three weeks. Forward deployed engineering has no
        occupation code, no wage series and a title that means different things
        at different companies, which means every candidate has to be
        investigated individually. Budget for that. The scarcity is real and it
        is part of the price.
      </p>

      <h2>Where the project manager wins</h2>
      <p>
        Plainly, and more often than the current enthusiasm for forward
        deployment admits.
      </p>
      <p>
        If the work is already staffed and the failure is between the teams
        rather than inside them, the project manager is the correct hire and the
        forward deployed engineer is an expensive person with nothing to build.
        Three engineering teams, a vendor, a compliance review and a hard date
        is a coordination problem. Nobody solves that by writing better code.
        They solve it by holding the dependencies, forcing the sequencing
        decisions early and making the tradeoffs visible to the person who can
        settle them, which is exactly what Anthropic asks its technical program
        managers to do: run the planning and operating cadence with clear
        owners, sequenced dependencies and a single source of truth on coverage
        and status.
      </p>
      <p>
        Regulated programmes are the same story with more paperwork. Procurement
        gates, security reviews, audit evidence and a board committee asking for
        a date are not engineering work, and asking an engineer to absorb them
        is how you turn an expensive builder into a mediocre administrator.
      </p>
      <p>
        And the project manager scales in a way the forward deployed engineer
        never will. One good one covers a portfolio. The market is deep, the
        price is public and the skill transfers between industries. If your
        company is at the stage where the constraint is that nobody knows what
        is happening across eleven concurrent initiatives, hire the coordinator
        and stop reading.
      </p>

      <h2>Where the forward deployed engineer wins</h2>
      <p>
        When the thing does not exist yet, and nobody on your payroll is going
        to make it exist.
      </p>
      <p>
        This is the failure I get called into, and from the inside it never
        announces itself as a building problem. It looks like a project that is
        managed impeccably. There is a plan, a weekly call, a status colour and
        a risk register. What there is not, six months in, is a system doing
        real work. Every week the plan is updated to reflect the fact that the
        two engineers who could have built it were pulled onto the platform
        migration again. The coordination is working perfectly. It is
        coordinating an absence.
      </p>
      <p>
        The companies with the best engineering in the world reached the same
        conclusion with their own balance sheets. In May 2026 OpenAI launched a
        four billion dollar deployment subsidiary. In July 2026 Anthropic
        launched Ode with Anthropic, built on its acquisition of Fractional AI
        and backed by Blackstone and Hellman and Friedman. Google Cloud is
        hiring 59 forward deployed engineers this year. None of those
        organisations is short of project managers. They were short of people
        who would sit inside somebody else&apos;s company and build the thing.
      </p>

      <h2>Project manager, product manager, program manager</h2>
      <p>
        These three get collapsed in conversation and they generate three
        different arguments, so it is worth separating them before you write a
        job description.
      </p>
      <p>
        The project manager owns delivery of a defined scope to a date. The
        argument against a forward deployed engineer there is the one above:
        coordination versus construction. The product manager owns what should
        be built and why, and that argument is about authority over the roadmap
        rather than about who writes the code, which I have written about
        separately at{" "}
        <a href="https://beyondelevation.com/insights/forward-deployed-engineer-vs-product-manager" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        . The program manager owns the connective tissue between many projects,
        which at frontier labs is the seat that pays most, as the Anthropic
        bands show. A forward deployed engineer replaces none of the three. On a
        small enough team they can absorb the first one for a single workstream,
        and that is the honest limit of it.
      </p>

      <h2>The mistake I see most</h2>
      <p>
        Hiring the coordinator to fix the building problem, because it is the
        hire the company already knows how to make. The requisition template
        exists, the market is deep, the salary is defensible and the first month
        feels like progress: a plan appears, a spreadsheet appears, the meetings
        get shorter. Then the second quarter arrives and the AI pilot is still
        at eighty percent, now with excellent documentation of why.
      </p>
      <p>
        There is a mirror image of it that costs just as much. A company reads
        about forward deployment, hires a very good engineer into a programme
        that spans six teams and two regulators, and gives them no coordination
        support at all. Within a month that person is in status meetings all day
        and their hands are nowhere near a keyboard. You paid a premium for
        build capacity and then spent it on calendar management. If the work
        genuinely spans teams, buy both, and if you can only afford one, buy the
        one that matches the thing that is missing.
      </p>
      <p>
        When I read any job description, mine or anyone else&apos;s, I ignore
        the title and look for two sentences. Does this person get write access
        to a system they do not own? And are they still accountable for it after
        the invoice is paid? Two yeses is forward deployment whatever it says at
        the top of the page. Anything less is project management, and it should
        be priced, measured and staffed as project management.
      </p>

      <h2>One question that settles it in a meeting</h2>
      <p>
        Name the person who will write the code. Out loud, with a first name,
        this week.
      </p>
      <p>
        If you can name them and their calendar is real, your problem is
        sequencing and you want the project manager. If the answer is a team
        that is already committed elsewhere, or a vendor who has been quoting
        for two months, or a shrug, then no schedule will save you and the
        forward deployed engineer is the hire. Most founders know the answer
        before they finish the sentence, which is why the question is worth
        asking in front of everybody rather than alone.
      </p>

      <h2>Where I come in</h2>
      <p>
        I am Hayat Amin. At{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>{" "}
        I take the second answer. I move into the company, work inside your
        systems rather than alongside them, and put my name against something
        that has to run in production, which on this particular comparison is
        the whole offer: you are not buying a plan for the AI work, you are
        buying the AI work. The promise on{" "}
        <a href="/services/fde">meethayat.com/services/fde</a> is deliberately a
        delivery promise. Week one is spent in your meetings and your systems
        mapping where the work actually happens, the first system is live inside
        eight weeks watched by a named owner, and you keep the code, the agents,
        the accounts and the documentation. On the{" "}
        <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>{" "}
        side, fractional runs one to two days a week from $5,800 per month,
        whole projects start at $30,000 and run eight to fourteen weeks, and a
        company that is not sure yet can start with a two week AI audit at a
        fixed $3,000. No salary, no equity, no notice period.
      </p>
      <p>
        For founders in New York and across the United States sitting on this
        exact decision, the useful half hour is not a debate about two job
        descriptions. It is naming the person who will write the code and
        watching what happens in the room. Book that at{" "}
        <a href="/services/fde">meethayat.com/services/fde</a>. If the real
        constraint is money rather than delivery, the CFO seat is at{" "}
        <a href="/cfo">meethayat.com/cfo</a>. The nearest neighbours to this
        question are{" "}
        <Link href="/blog/forward-deployed-engineer-vs-solutions-architect-2026-09-01">
          forward deployed engineer vs solutions architect
        </Link>
        , which turns on who does the building, and{" "}
        <Link href="/blog/forward-deployed-engineer-vs-sales-engineer-2026-09-06">
          forward deployed engineer vs sales engineer
        </Link>
        , which turns on which side of the signature the work sits. If you
        suspect the whole category is a rebrand, I answered that head on in{" "}
        <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26">
          is a forward deployed engineer just a consultant
        </Link>
        . Otherwise start at <Link href="/">meethayat.com</Link>.
      </p>

      <h2>Questions I get asked about this</h2>

      <h3>Is a forward deployed engineer a project manager?</h3>
      <p>
        No, and at the companies running forward deployment at scale the two sit
        beside each other rather than replacing each other. Databricks lists 874
        open roles and 91 with forward deployed in the title, none called
        project manager, yet its Senior Forward Deployed Engineer posting in New
        York City says the engineer will work with the Databricks technical
        team, Project Manager, Architect and Customer team to ensure the
        technical components of the engagement are delivered. Palantir does the
        same under a different name: 310 open postings, 77 forward deployed, and
        35 Deployment Strategists asked to work with Forward Deployed Engineers
        to integrate data into a stable and extensible pipeline.
      </p>

      <h3>Forward deployed engineer vs project manager: which pays more in the United States?</h3>
      <p>
        Against the national average, the forward deployed engineer, by a wide
        margin. Against a senior program manager at a frontier AI company, often
        not. Project management specialists have a median wage of $102,320
        nationally and $126,660 in the New York, Newark and Jersey City metro,
        rising to $167,970 at the 90th percentile. Forward deployed bands read
        this week were $280,000 to $320,000 at Anthropic and $182,000 to
        $250,208 for a senior forward deployed engineer at Databricks in New
        York City. But Anthropic&apos;s technical program manager postings list
        $365,000 to $435,000, above its own forward deployed engineers. Buy the
        accountability you are missing, not the title you assume is senior.
      </p>

      <h3>Do forward deployed engineers code?</h3>
      <p>
        Yes, and that is the entire point of the job. Anthropic asks for
        production applications built inside customer systems and technical
        artifacts delivered into production workflows. Databricks asks for six
        or more years in data engineering or software engineering, code in
        Python, Scala or TypeScript, and end to end systems implemented rather
        than specified. Palantir compares the role to a hands-on AI startup
        chief technology officer. The federal definition of project management,
        by contrast, contains no verb about building anything, which is not an
        insult to project managers. It is the job.
      </p>

      <h3>Do forward deployed engineers travel?</h3>
      <p>
        Usually, and less than the reputation suggests. Anthropic&apos;s forward
        deployed engineer posting estimates 25 percent travel to customer sites
        and the senior role at Databricks in New York City says 20 percent. The
        coordination seats travel more: Palantir asks its deployment strategists
        for 25 to 75 percent depending on location and team, and Databricks asks
        its lead engagement manager for up to 25 to 50 percent. Being in the
        room is useful. It is not the thing that produces a working system.
        Write access is.
      </p>

      <h3>Do I need a project manager or a forward deployed engineer for my AI project?</h3>
      <p>
        Ask whether anybody is already building the thing. If engineers are on
        it and the failure is sequencing, dependencies, dates and handoffs
        between teams, hire the project manager and hire a good one. If nothing
        is being built, or a pilot has been stuck at eighty percent since the
        spring because the people who could finish it have day jobs, a project
        manager will give you an accurate weekly account of a system that still
        does not exist. Most companies under a few hundred people who ask me
        this have a building problem wearing the costume of a coordination
        problem.
      </p>

      <h3>Can a project manager become a forward deployed engineer?</h3>
      <p>
        Only with the engineering, and there is no way around that sentence. The
        transferable half is real and undervalued: navigating a company that did
        not ask for you, finding out what is actually true, holding a scope
        against pressure. The part that does not transfer is that the artefact
        changes. A project manager is measured on an accurate picture of the
        work, and a forward deployed engineer is measured on the work. Six years
        of engineering experience is the floor in the Databricks posting and
        four years in a technical customer facing role is the floor at
        Anthropic. Take the coordination skill with you. It will make you better
        than the engineers who never learned it.
      </p>

      <h3>Where do these numbers come from?</h3>
      <p>
        Every figure above was read on 11 September 2026 from the source itself
        rather than from a summary. The definition of occupation 13-1082, the
        employment counts, the median, mean and 90th percentile wages and the
        New York, Newark and Jersey City metro figures come from the Bureau of
        Labor Statistics Occupational Employment and Wage Statistics programme,
        national and metropolitan estimates for May 2025, pulled from its public
        data API, with the occupation and area definitions taken from the
        programme&apos;s own reference files. The filing counts come from the
        Securities and Exchange Commission full text search across Form 10-K
        filings. The open role counts, responsibilities and every salary band
        come from the live careers feeds at Palantir, Anthropic, Databricks and
        Datadog, read the same day. The growth figures for forward deployed
        engineer hiring, and the notes on OpenAI&apos;s deployment subsidiary,
        Ode with Anthropic and Google Cloud, come from reporting by Pragmatic
        Engineer, Perspective AI and Paraform. Job boards move. If you are
        reading this months later the bands will have shifted, and the ratios
        are the part worth keeping.
      </p>
    </PageShell>
  );
}
