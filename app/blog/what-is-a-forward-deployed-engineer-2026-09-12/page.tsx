import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-is-a-forward-deployed-engineer-2026-09-12";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-12";
const MOD = "2026-09-12";
const TITLE = "What Is a Forward Deployed Engineer? I Read All 240 Open Roles at 10 Companies";
const DESC =
  "A forward deployed engineer is a senior engineer who stops working in their own company and starts building inside yours, with write access, in production, still accountable after the invoice. Here is what the title actually means at Databricks, Palantir, OpenAI, Scale AI, Cresta, Anthropic, Cursor, Baseten, Datadog and Figma, read from their own live job postings on 12 September 2026.";
const HERO = `${SITE}/what-is-a-forward-deployed-engineer-2026-09-12.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, set in a gilded roundel on deep lapis with turquoise arabesque borders. Inside the roundel a visiting craftsman kneels on the flagstones of a walled courtyard that is not his own, sleeves pushed back, working with a fine tool on the mechanism of a great brass astrolabe belonging to the house. His travelling case lies open beside him with his own instruments laid out on cloth. Behind him the household's scribes and stewards watch from the shaded arcade, and through the far gate the caravan road he arrived on runs out into the desert.";

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
      "@type": "ItemList",
      "@id": `${URL}#list`,
      name: "Companies hiring forward deployed engineers in September 2026, by open roles",
      description:
        "Every open role on the public careers feed of ten companies was counted on 12 September 2026, and the postings with forward deployed in the title were read. 3,723 open roles, 240 of them forward deployed.",
      numberOfItems: 10,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Databricks", description: "95 forward deployed roles out of 886 open. Billable delivery inside the customer's data platform." },
        { "@type": "ListItem", position: 2, name: "Palantir", description: "77 forward deployed roles out of 311 open. The company that invented the title, and the densest concentration of it anywhere." },
        { "@type": "ListItem", position: 3, name: "OpenAI", description: "21 forward deployed roles out of 790 open, split across two distinct titles and nine cities." },
        { "@type": "ListItem", position: 4, name: "Scale AI", description: "19 forward deployed roles out of 223 open, including three forward deployed product managers." },
        { "@type": "ListItem", position: 5, name: "Cresta", description: "10 forward deployed roles out of 94 open, remote, deploying contact centre AI agents." },
        { "@type": "ListItem", position: 6, name: "Anthropic", description: "6 forward deployed roles out of 599 open, at the highest published base band in the set." },
        { "@type": "ListItem", position: 7, name: "Cursor", description: "6 forward deployed roles out of 127 open. The customer is another engineering team." },
        { "@type": "ListItem", position: 8, name: "Baseten", description: "3 forward deployed roles out of 94 open, with the role boundary deliberately left blurred." },
        { "@type": "ListItem", position: 9, name: "Datadog", description: "2 forward deployed roles out of 446 open, in a function still being designed." },
        { "@type": "ListItem", position: 10, name: "Figma", description: "1 forward deployed role out of 153 open, explicitly placed inside Product and Engineering rather than services." }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a forward deployed engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A forward deployed engineer is a senior engineer who stops building inside their own company and starts building inside yours. All 240 open forward deployed roles read across ten companies on 12 September 2026 agree on four things: the engineer works inside the customer's systems rather than alongside them, writes production code there rather than recommendations, owns the result through to production rather than to handover, and travels to do it, between 20 and 50 percent of the time. Anthropic asks its forward deployed engineers to work within customer systems to build production applications with Claude models. Databricks asks them to own the architecture, lead design decisions and implement end to end systems. Datadog says plainly that the role is for someone who wants to write code with customers, not just advise them.",
          },
        },
        {
          "@type": "Question",
          name: "What does forward deployed engineer mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The phrase is borrowed from the military, where forward deployed means stationed away from home base and close to the problem. In software it means the same thing with commercial force: the engineer is not at headquarters building product for everyone, they are inside one customer's environment building the thing that customer needs. Palantir, which coined the title, calls its version the Original Forward Deployed Software Engineer and says it pioneered the position by embedding engineers directly with customers. The test that separates it from every neighbouring job is write access. If the person cannot change the customer's system, they are advising, not forward deployed.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and every posting read for this piece goes out of its way to say so, which tells you how often people assume otherwise. Cursor writes that this is not a demo role and that the engineer is responsible for systems that work in the real world. Datadog writes that the role is for someone who wants to write code with customers, not just advise them, and asks for prototype implementations built directly in customer codebases. Figma calls it a senior or staff level engineering role within Product and Engineering, not a sales or services function. Palantir compares its Forward Deployed AI Engineer to a hands-on AI startup chief technology officer. Baseten is the bluntest: an engineering role with hands-on coding and software development, with product management, technical customer success and pre-sales solution engineering mixed in.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and the published numbers are narrower than the reputation. Anthropic's Forward Deployed Engineer posting for New York City, San Francisco and Seattle estimates 25 percent travel to customer sites, and its Munich posting says 25 to 50 percent. Databricks says 20 percent for its Senior Forward Deployed Engineer in New York City. OpenAI is the heaviest of the three, with travel up to 50 percent required on both its New York forward deployed postings, on top of a hybrid policy of three days a week in the office. Cresta runs most of its forward deployed engineering remotely, from the United States, Canada, the United Kingdom, Germany, Australia and Taiwan.",
          },
        },
        {
          "@type": "Question",
          name: "What is a forward deployed product manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a real and separate job, not a mistyped search. Across the ten careers feeds read on 12 September 2026 there were six open forward deployed product manager postings, three at Scale AI and three at Cresta, plus a Director of Product Management, Forward Deployed and Strategy at Scale AI. Scale AI defines it by what it is not: this is not a roadmap PM, a CSM, or a solutions engineer. The forward deployed product manager owns product outcomes inside a portfolio of enterprise accounts, drives deployments from contract to production, and works out where the product is the bottleneck rather than the execution. The base band for the Enterprise role in New York, San Francisco and Seattle is $240,000 to $300,000, which is above most of the forward deployed engineer bands in the same sample.",
          },
        },
        {
          "@type": "Question",
          name: "How many forward deployed engineers does Palantir have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palantir does not publish that headcount, and anybody who quotes you a number for it is guessing. What is public is what it is hiring for right now. On 12 September 2026 Palantir had 311 open postings, 77 of which carried forward deployed in the title, the highest density in this sample at about one in four. Those 77 break down into Forward Deployed Software Engineers, Forward Deployed AI Engineers, Forward Deployed Infrastructure, Reliability, Security and Enablement Engineers, and postings tied to the United States, United Kingdom, Australian, Japanese, Korean and Norwegian governments and to NATO. Beside them sit 35 Deployment Strategists, the non-coding half of the same team.",
          },
        },
        {
          "@type": "Question",
          name: "What does a forward deployed engineer earn in the United States?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The published base bands read on 12 September 2026 run from $135,000 to $376,000 depending on the company, before equity. Anthropic lists $280,000 to $320,000 for its Forward Deployed Engineer in New York City, San Francisco and Seattle. OpenAI lists $185,000 to $300,000 for the Forward Deployed Engineer in New York and $153,000 to $325,000 for the Forward Deployed Software Engineer there. Databricks lists $182,000 to $250,208 for a Senior Forward Deployed Engineer in New York City, identical across all four of its pay zones. Datadog lists $192,000 to $240,000 in New York. Figma lists the widest, $153,000 to $376,000. Palantir, which invented the job, lists the lowest floor at an estimated $135,000 to $200,000 in New York plus restricted stock.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a forward deployed engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if the thing does not exist yet and nobody on your payroll is going to make it exist. A forward deployed engineer is the right answer when a pilot has stalled short of production, when the integration into your real systems is the hard part rather than the model, and when you can give a named outsider write access and a named internal owner. It is the wrong answer when you want a strategy document, when procurement cannot grant system access, when the work is genuinely one repeatable product rather than your specific mess, or when you have engineers already on the problem and the failure is sequencing between teams. That last one is a project manager.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      url: HERO,
      contentUrl: HERO,
      caption:
        "Forward deployment, painted: the visiting craftsman inside the patron's courtyard, hands on the patron's astrolabe, his own tools laid out on the flagstones and the caravan road visible through the gate behind him",
      name: "What is a forward deployed engineer, illuminated as a visiting craftsman at work inside another house",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "what is a forward deployed engineer, forward deployed engineer, FDE, forward deployed product manager, Palantir, OpenAI, Anthropic, Databricks, Scale AI, Hayat Amin, Beyond Elevation, New York, London",
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
        { label: "What Is a Forward Deployed Engineer?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>What Is a Forward Deployed Engineer?</h1>
      <p className="op-lede">
        A forward deployed engineer is a senior engineer who stops building
        inside their own company and starts building inside yours. Write access
        to your systems. Production code in your environment. Still accountable
        after the invoice clears. That is the whole job, and everything else
        written about it is decoration.
      </p>
      <p>
        I could give you another paragraph of definition. Instead I went and
        counted. On 12 September 2026 I pulled every open role from the public
        careers feed of ten companies that run this function, read the postings
        with forward deployed in the title, and wrote down what each one
        actually asks a human being to do. Three thousand seven hundred and
        twenty three open roles. Two hundred and forty of them forward deployed.
        The definition below is not mine. It is theirs, and they broadly agree,
        which is more than you can say for most job titles invented in the last
        two years.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/what-is-a-forward-deployed-engineer-2026-09-12.jpg"
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The old version of the job. A craftsman who did not stay in his own
          workshop, sent inside another house, kneeling on somebody else&apos;s
          flagstones with his hands in somebody else&apos;s machine. His tools
          came with him. The astrolabe stays when he leaves.
        </figcaption>
      </figure>

      <h2>How I built this list</h2>
      <p>
        The method matters more than the ranking, so here it is in full, and you
        can repeat it yourself this afternoon.
      </p>
      <p>
        Ten companies, chosen because each one has a public, machine readable
        careers feed and at least one live posting with forward deployed in the
        title. For each, I took the complete list of open roles on 12 September
        2026, counted the forward deployed ones, and read the postings in the
        United States wherever a United States posting existed. The order below
        is by the number of open forward deployed roles, because that is the one
        number that is measured rather than judged. Every salary figure is the
        base band printed on the company&apos;s own posting that day, before
        equity, bonus or sign-on. Every phrase in quotation marks is lifted from
        the posting itself.
      </p>
      <p>
        What this list is not: a ranking of who is best to work for, which I
        cannot know, or a headcount, which none of them publish. Open postings
        measure hiring intent in September 2026. That is a real signal and a
        narrow one, and I would rather tell you the edge of it than pretend the
        number is bigger than it is.
      </p>
      <p>
        Two companies I expected to include are missing and it is worth saying
        why. Sierra had 210 open roles and not one with forward deployed in the
        title, despite the founder&apos;s well known public argument for the
        model, so it is not in the count. Google Cloud and Deloitte both run
        this function, and the figures I have for them, 59 forward deployed
        hires at Google Cloud in 2026 and a Deloitte service page with 19 open
        postings, come from reporting rather than from a feed I read this week.
        They are context, not entries.
      </p>

      <h2>1. Databricks: 95 forward deployed roles out of 886</h2>
      <p>
        The largest forward deployed hiring programme in the sample, by a
        distance, and the clearest statement of what the job is when it lives
        inside a delivery organisation. Ten point seven percent of everything
        Databricks is hiring for right now is forward deployed.
      </p>
      <p>
        The Senior Forward Deployed Engineer posting in New York City asks the
        engineer to own the architecture, lead design decisions, and implement
        end-to-end systems spanning data engineering, AI, and application
        development. The band is $182,000 to $250,208, and unusually it is
        identical across all four of the company&apos;s pay zones, so geography
        does not move the number. Travel is twenty percent.
      </p>
      <p>
        <strong>What it is good at:</strong> volume and structure. The roles are
        cut by vertical, fourteen in communications, media, entertainment and
        games, nine in financial services, seven each in healthcare and life
        sciences and in retail, four in manufacturing. If you want to learn this
        job in a system that has already worked out how to run it, this is the
        deepest bench there is.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anyone who does not want to be
        billable. Databricks says it in the posting, in its own words: FDEs are
        billable and know how to complete projects according to specification.
        That is professional services with a better title and a better platform,
        and it is honest about it. If you wanted to be shipping product to
        millions of users, you are in the wrong chair.
      </p>

      <h2>2. Palantir: 77 forward deployed roles out of 311</h2>
      <p>
        The highest density anywhere. Roughly one in four open jobs at Palantir
        carries the words forward deployed, which is what happens when a company
        does not add a function but is built out of one.
      </p>
      <p>
        Palantir invented the title and says so at the top of the posting: the
        Forward Deployed Software Engineer role is not just a job title, it is
        the blueprint, and the company pioneered the position by embedding
        engineers directly with customers. Its Forward Deployed AI Engineer
        posting in New York gives the best one line description of the job I
        have read anywhere: the responsibilities look similar to those of a
        hands-on AI startup chief technology officer.
      </p>
      <p>
        <strong>What it is good at:</strong> range, and the hardest problems on
        offer. Seventy seven postings covering software, AI, infrastructure,
        reliability, security and enablement engineering, across commercial work
        and the United States, United Kingdom, Australian, Japanese, Korean and
        Norwegian governments and NATO. Alongside them sit 35 Deployment
        Strategists, whose posting asks them to work with Forward Deployed
        Engineers to integrate the data into a stable and extensible pipeline.
        That pairing, a builder and a strategist on the same account, is the
        original shape of the model and most people copying it copy only half.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> people who want to be paid the
        most, which surprises everybody. The New York Forward Deployed Software
        Engineer band is an estimated $135,000 to $200,000 plus restricted
        stock, the lowest floor in this entire list. The company that created
        the job pays less base than eight of the nine companies copying it. It
        is also wrong for anybody unwilling to work on defence and government
        deployments, which are a large share of those 77 roles and are not
        optional to have an opinion about.
      </p>

      <h2>3. OpenAI: 21 forward deployed roles out of 790</h2>
      <p>
        OpenAI is the company that split the job in two, and the split is the
        most useful thing on this page for anyone trying to understand the
        title.
      </p>
      <p>
        There are two separate postings in New York. The Forward Deployed
        Engineer, at $185,000 to $300,000 plus equity, leads complex end-to-end
        deployments of frontier models in production alongside the most
        strategic customers, and owns discovery, technical scoping, system
        design, build, and production rollout. The Forward Deployed Software
        Engineer, at $153,000 to $325,000 plus equity, works with customers and
        with OpenAI forward deployed engineers to design abstractions to solve
        customer problems, and then uses them to scale speed and quality of
        delivery across all forward deployed engagements. One faces the
        customer. One turns what the first one learned into reusable machinery.
        Both are hands on. Both require travel up to fifty percent, on top of
        three days a week in the office.
      </p>
      <p>
        <strong>What it is good at:</strong> geography and specialisation. The
        21 roles cover New York, San Francisco, Seattle, London, Madrid, Tokyo,
        Seoul, Singapore and Sydney, with dedicated healthcare, legal,
        government and security postings. If you want to see the same deployment
        problem in nine countries, nobody else is offering that.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anyone with a life that does not
        survive fifty percent travel plus a hybrid office mandate. That is the
        heaviest published travel requirement in this list, more than double
        Databricks. Read that line before the salary line.
      </p>

      <h2>4. Scale AI: 19 forward deployed roles out of 223</h2>
      <p>
        Scale AI is on this list twice over, because it is the clearest evidence
        that forward deployment has stopped being one job and become a family of
        them.
      </p>
      <p>
        Alongside forward deployed engineers in generative AI and a public
        sector forward deployed software engineer hiring into Austin, Colorado
        Springs, Honolulu, St. Louis and Washington, it is hiring three Forward
        Deployed Product Managers and a Director of Product Management, Forward
        Deployed and Strategy. The Enterprise posting in New York pays $240,000
        to $300,000 and defines itself by exclusion in its first paragraph: this
        is not a roadmap PM, a CSM, or a solutions engineer. The forward
        deployed product manager owns product outcomes inside a portfolio of
        enterprise accounts, drives deployments from contract to production, and
        distinguishes where the product is the constraint from where execution,
        integration, or change management is.
      </p>
      <p>
        <strong>What it is good at:</strong> the government and frontier agent
        work, and the honesty of the product manager postings. It also has the
        widest international spread of the forward deployed engineering roles,
        including London, Riyadh and Doha.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> engineers who assume the product
        manager version is a softer version of the same job. It is not. It pays
        more than most of the engineering bands here and asks you to be the
        accountable person in front of a chief executive while somebody else
        writes the code. If you want your hands on the keyboard, take the
        engineering posting, not the product one.
      </p>

      <h2>5. Cresta: 10 forward deployed roles out of 94</h2>
      <p>
        The smallest company in the top five and the one that shows what the job
        looks like once the problem is narrow and the product is finished.
      </p>
      <p>
        Cresta sells conversational AI into contact centres, and its Senior
        Forward Deployed Engineer posting for the United States, at $185,000 to
        $235,000, is about deploying agents rather than inventing them: develop,
        configure, deploy and optimise AI agents on Cresta&apos;s platform,
        build integrations with external systems such as APIs, databases and
        customer relationship management systems, then optimise performance and
        troubleshoot in complex enterprise environments. The company says it has
        raised more than $270 million and names United Airlines, Cox
        Communications and Marriott as customers.
      </p>
      <p>
        <strong>What it is good at:</strong> remote work, which almost nobody
        else on this list offers for this role. The ten postings cover the
        United States, Canada, the United Kingdom, Germany, Australia and
        Taiwan, mostly remote. It also runs forward deployed product managers,
        including an associate level one, which is the only genuine entry point
        into this family of jobs I found anywhere in the 240.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anyone who wants variety. This is
        the same deployment shape, over and over, into contact centres. That
        repetition is exactly why it can be done remotely and exactly why it
        will bore a certain kind of engineer by month nine.
      </p>

      <h2>6. Anthropic: 6 forward deployed roles out of 599</h2>
      <p>
        One percent of Anthropic&apos;s open roles are forward deployed, and
        they pay the highest published base band in this entire list. Both of
        those facts are the same fact.
      </p>
      <p>
        The Forward Deployed Engineer posting covering New York City, San
        Francisco and Seattle pays $280,000 to $320,000 and describes the work
        with unusual specificity: work within customer systems to build
        production applications with Claude models, and deliver technical
        artifacts for customers like MCP servers, sub-agents, and agent skills
        that will be used in production workflows. Travel is estimated at
        twenty five percent. The entry requirement is four or more years in a
        technical, customer facing role, and the posting explicitly encourages
        former technical founders to apply. It also says the hire will be one of
        the founding forward deployed engineers, which is to say the function is
        two years old at the company that is best placed to know whether it
        works.
      </p>
      <p>
        <strong>What it is good at:</strong> price, seniority and the specific
        artefacts. If you want to know what the AI deployment job will look like
        in 2028, read what Anthropic is asking for in 2026, because the list of
        deliverables is concrete in a way most of these postings are not.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> almost everybody, statistically.
        Six openings out of 599. It is a narrow door with a queue behind it, and
        I would not build a career plan around walking through it.
      </p>

      <h2>7. Cursor: 6 forward deployed roles out of 127</h2>
      <p>
        Cursor is the entry where the customer is not a business unit. It is
        another engineering team, and the work is measured in their delivery
        speed.
      </p>
      <p>
        The San Francisco posting is the most quotable in the sample: this is
        not a demo role, you are responsible for systems that work in the real
        world. The work is described as building Cursor-powered workflows, given
        as large scale refactors, migrations, pull request review loops,
        incident to fix pipelines and specification to implementation systems,
        then owning production quality including tracing, evaluations, metrics,
        debugging model behaviour and latency and cost tradeoffs. It asks for
        five or more years of development experience and two or more in a
        customer facing role.
      </p>
      <p>
        <strong>What it is good at:</strong> a tight feedback loop. When your
        customer is a staff engineer, you find out within a week whether what
        you built is any good. There is also a Forward Deployed Strategist
        posting, the Palantir pairing reappearing at a company founded two years
        ago, which tells you something about how durable that structure is.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anyone who needs a published
        salary band before they apply. Cursor prints none on these roles, in a
        list where eight of the other nine companies do. Also wrong for people
        who are not, themselves, strong engineers. Your customer will know
        inside one call.
      </p>

      <h2>8. Baseten: 3 forward deployed roles out of 94</h2>
      <p>
        Baseten runs inference infrastructure, says it recently raised a $1.5
        billion Series F led by Altimeter Capital, Conviction Partners and Spark
        Capital, and names Cursor, Notion, OpenEvidence, Abridge, Clay, Gamma
        and Writer among its customers. Its Forward Deployed Engineer posting in
        San Francisco pays $165,000 to $330,000 plus equity.
      </p>
      <p>
        It is here for one sentence, which is the most honest line about this
        job that I found in 240 postings: to be clear, this is an engineering
        role with hands-on coding and software development that also includes
        aspects of product management, technical customer success, and pre-sales
        solution engineering mixed in. Every other company on this list is
        describing that same blend. Baseten is the only one that admits the
        boundary is deliberately blurred.
      </p>
      <p>
        <strong>What it is good at:</strong> hard technical constraints. The
        work is described in terms of quality, latency and cost outcomes, which
        are numbers, not adjectives. If you like being measured, this is a
        measurable version of the job.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anyone who needs a clean role
        boundary to do good work. Some people are made unhappy by a job that is
        four jobs. The posting is warning you in advance, and you should believe
        it.
      </p>

      <h2>9. Datadog: 2 forward deployed roles out of 446</h2>
      <p>
        Two roles out of 446, and both of them are interesting because the
        function is still being built, which is the state most companies reading
        this are actually in.
      </p>
      <p>
        The Senior Forward Deployed Engineer, Feature Flags, in New York, pays
        $192,000 to $240,000 and contains the plainest description of the
        boundary in the whole set: this role is for someone who wants to write
        code with customers, not just advise them, working hands-on inside
        customer codebases and building prototype implementations directly in
        them. The second role is the Datadog for Startups Forward Deployed
        Engineering Lead in San Francisco, at $200,000 to $250,000, hired to
        evolve and scale the operating model end to end, from engagement intake
        and scoping through sprint delivery to handoff back to account teams,
        and to build out a catalogue of offerings with pricing and business
        models attached.
      </p>
      <p>
        <strong>What it is good at:</strong> showing you the plumbing. If you
        are standing up forward deployment inside your own company, that second
        posting is effectively a free operating plan. Intake, scoping, sprint
        delivery, handoff, and metrics of time to value, adoption lift, revenue
        influence and net promoter score. Steal it.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> anybody who wants an established
        team to learn from. Datadog says in its own posting that the function is
        in an active growth phase and that the lead will help determine what the
        motion looks like. That is a great job for a builder and a miserable one
        for somebody expecting a playbook.
      </p>

      <h2>10. Figma: 1 forward deployed role out of 153</h2>
      <p>
        One posting, and it earns its place because of where the company chose
        to put the job on the org chart.
      </p>
      <p>
        Figma is building its founding forward deployed engineering team, and
        the posting states the boundary in a single line: this is a senior or
        staff level engineering role within Product and Engineering, not a sales
        or services function. The band is $153,000 to $376,000, the widest here.
        Two further details are worth more than the salary. The engineer works
        in customer environments using the minimum access required, and turns
        what they learn into a reusable path for future customers instead of
        taking permanent ownership of the customer&apos;s codebase.
      </p>
      <p>
        <strong>What it is good at:</strong> discipline. Minimum access and no
        permanent ownership is the answer to the most common objection I hear
        from chief technology officers, which is that letting an outsider build
        inside your systems creates a dependency you can never get rid of. Figma
        has written the mitigation into the job description.
      </p>
      <p>
        <strong>Who it is wrong for:</strong> people who want to own the system
        they built. You hand it back. For some engineers that is the freedom of
        the job and for others it is the grief of it, and you know which you are
        before you finish this sentence.
      </p>

      <h2>Disclosure: the eleventh entry is mine, and it is not ranked</h2>
      <p>
        I am Hayat Amin, and my firm{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>{" "}
        does forward deployed engineering for small and mid sized companies in
        New York, across the United States and in London. It is deliberately not
        in the ranking above, and the reason is simple: that list counts open
        job postings, and Beyond Elevation is not hiring forward deployed
        engineers, it sells the work. Putting my own firm into a table it does
        not qualify for would make the other ten numbers meaningless. You should
        read everything below this line as coming from an interested party,
        because it does.
      </p>
      <p>
        What I will claim is the gap the ten companies above leave open. Every
        one of them deploys engineers to make their own product succeed inside
        your company. Anthropic&apos;s forward deployed engineers build with
        Claude. Cresta&apos;s deploy Cresta. Figma&apos;s make Figma adoption
        work. That is a completely legitimate model and it is the right call if
        you have already bought the platform and the platform is the problem.
        The eleventh case is the one nobody in that list serves: you are a
        company of forty or four hundred people, you have not picked a vendor,
        and what you need built cuts across four tools none of whose vendors
        will send you anyone. On{" "}
        <a href="/services/fde">meethayat.com/services/fde</a> that is the whole
        offer. Week one inside your meetings and your systems, first system live
        in production inside eight weeks with a named owner on your side, and
        you keep the code, the agents, the accounts and the documentation.
        Fractional runs one to two days a week from $5,800 a month, whole
        projects start at $30,000 over eight to fourteen weeks, and a two week
        audit at a fixed $3,000 exists for companies that are not sure yet.
      </p>

      <h2>What all 240 postings agree on</h2>
      <p>
        Now the actual answer to the question in the title, assembled from the
        evidence rather than asserted. Four things appear in essentially every
        forward deployed posting I read, and they are the test I would apply to
        any job description or any proposal that uses the phrase.
      </p>
      <p>
        <strong>One, you work inside the customer&apos;s systems, not
        alongside them.</strong> Anthropic writes within customer systems.
        Databricks writes integrating with client systems. Datadog writes
        directly in customer codebases. Figma writes in customer environments.
        This is the load bearing word in the whole title, and it is the one that
        separates the job from consulting. Write access or it is advice.
      </p>
      <p>
        <strong>Two, you build, and the artefact is software.</strong> Not a
        deck, not a roadmap, not an assessment. Cursor says it is not a demo
        role. Datadog says write code with customers, not just advise them.
        Palantir compares its AI engineers to a hands-on chief technology
        officer. Baseten calls it an engineering role with hands-on coding, in
        those words.
      </p>
      <p>
        <strong>Three, you own it through to production, not to
        handover.</strong> OpenAI: own technical delivery across multiple
        deployments from first prototype to stable production. Scale AI: drive
        deployments from contract to production, and you know what
        production-ready actually means. Databricks: lead impactful customer
        technical projects by delivering production-grade systems. The word
        production appears in every single posting in this sample. It is the
        word doing the commercial work.
      </p>
      <p>
        <strong>Four, you go there.</strong> Twenty percent at Databricks,
        twenty five percent at Anthropic, up to fifty percent at OpenAI,
        twenty five to fifty percent for Anthropic in Europe. The exception is
        Cresta, which runs it remotely, and notably Cresta has the narrowest and
        most repeatable deployment of the ten.
      </p>
      <p>
        And here is the one thing they do not agree on, which is the single most
        useful sentence on this page if you are buying rather than applying.
        Half of these companies place the job inside engineering and half place
        it inside billable delivery. Figma is explicit: not a sales or services
        function. Databricks is equally explicit in the other direction: FDEs are
        billable. Same title, two different jobs, two different sets of
        incentives. Before you hire one or buy one, find out which of the two
        you are actually getting, because it determines whether the person
        optimises for your system working or for the hours on the engagement.
      </p>

      <h2>The forward deployed product manager is a real job now</h2>
      <p>
        This deserves its own heading because it is the fastest moving thing in
        the data and almost nobody has written it down.
      </p>
      <p>
        Across those ten careers feeds there were six open forward deployed
        product manager postings, three at Scale AI and three at Cresta,
        including an associate level one, plus a director of product management
        for forward deployed and strategy. A year ago that title barely existed.
        It is not a forward deployed engineer who cannot code, and Scale AI
        troubles to say so in the first paragraph: not a roadmap PM, not a
        customer success manager, not a solutions engineer. The job is to own
        product outcomes inside a small portfolio of enterprise accounts, to be
        the accountable escalation point before a problem reaches the customer,
        and to work out whether a stalled deployment is blocked by the product
        or by execution, integration and change management, which are three
        completely different fixes.
      </p>
      <p>
        For buyers, the useful signal is the price. Scale AI pays that role
        $240,000 to $300,000 in New York, above most of the forward deployed
        engineer bands in this sample. Companies do not pay a premium for a
        translator. They pay it for the person who can stand in front of a chief
        executive and say the deployment is stuck because of us, or because of
        you, and be believed. If your own stalled AI project has an engineer on
        it and is still stuck, that judgement is what you are missing, not more
        code.
      </p>

      <h2>Where the money actually sits</h2>
      <p>
        Eleven published base bands, read on the same day, in United States
        dollars, before equity. Anthropic $280,000 to $320,000. Scale AI&apos;s
        forward deployed product manager $240,000 to $300,000. Datadog&apos;s
        startups lead $200,000 to $250,000 and its feature flags engineer
        $192,000 to $240,000. OpenAI $185,000 to $300,000 for the engineer and
        $153,000 to $325,000 for the software engineer. Cresta $185,000 to
        $235,000. Databricks $182,000 to $250,208. Baseten $165,000 to $330,000.
        Figma $153,000 to $376,000. Palantir an estimated $135,000 to $200,000.
      </p>
      <p>
        Two things fall out of that column. The first is that the floors vary by
        more than a factor of two for a job with the same four requirements,
        which tells you the market has not settled and that title alone is worth
        nothing in a negotiation on either side of the table. The second is that
        the company that invented the role pays the lowest floor in the set,
        plus restricted stock, and still has the most people doing it. Palantir
        is selling the experience rather than the salary, and for a decade that
        trade has worked.
      </p>
      <p>
        The buyer&apos;s version of that maths is straightforward. A forward
        deployed engineer in New York is a $200,000 to $320,000 base salary, so
        call it $280,000 to $450,000 fully loaded, and that is before you find
        one, which is the harder part. That number is the honest benchmark
        against any quote you receive for the same work, including mine.
      </p>

      <h2>When you do not need one</h2>
      <p>
        I sell this work, so I will be careful to be useful here rather than
        persuasive.
      </p>
      <p>
        You do not need a forward deployed engineer if the work is a product
        somebody already sells. Buy the product. You do not need one if
        procurement or security cannot grant an outsider write access to a real
        system within a month, because the entire value of the role evaporates
        without it and you will have paid a premium for a very expensive
        advisor. You do not need one if you have engineers already assigned to
        the problem and what keeps slipping is sequencing between three teams,
        which is a coordination problem and is answered in{" "}
        <Link href="/blog/forward-deployed-engineer-vs-project-manager-2026-09-11">
          forward deployed engineer vs project manager
        </Link>
        . And you do not need one if what you actually want is a written
        opinion. That is a consultant, that is a legitimate purchase, and I have
        argued the difference at length in{" "}
        <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26">
          is a forward deployed engineer just a consultant
        </Link>
        .
      </p>
      <p>
        You do need one when the thing does not exist, nobody on your payroll is
        going to make it exist this quarter, the hard part is your own systems
        rather than the model, and you can name the internal person who will own
        it afterwards. That last condition is the one companies skip, and it is
        the one that decides whether anything survives the engagement.
      </p>

      <h2>What I would do with this if I were you</h2>
      <p>
        If you are reading this as an engineer weighing the move, the useful
        filter is not the salary column. It is the sentence in the posting that
        tells you whether the job sits in engineering or in billable delivery,
        and the travel percentage. Those two facts will describe your life more
        accurately than the title or the band.
      </p>
      <p>
        If you are reading this as a founder or a chief executive, take the four
        tests above into whatever conversation you are about to have. Ask the
        person or the firm across the table whether they will work inside your
        systems, whether they write the production code, whether they are there
        after go live, and how much of them you get in the room. Four yeses is
        forward deployment. Anything less is a different purchase wearing the
        fashionable word, and the fashion is moving fast enough that plenty of
        people will use it without meaning it.
      </p>
      <p>
        I came to this from the finance chair rather than the engineering one,
        twenty years in high growth companies and three exits, which is why I
        keep returning to the same question: what is different about the company
        after the money is spent. On this particular purchase the answer should
        be a system in production with your name on it, not a report. If you
        want half an hour on whether your stalled project is a build problem or
        a coordination problem, that is at{" "}
        <a href="/services/fde">meethayat.com/services/fde</a>, and if the
        constraint is money rather than delivery, the fractional finance seat is
        at <a href="/cfo">meethayat.com/cfo</a>. The neighbouring questions are{" "}
        <Link href="/blog/forward-deployed-engineer-vs-solutions-engineer-2026-08-29">
          forward deployed engineer vs solutions engineer
        </Link>
        ,{" "}
        <Link href="/blog/forward-deployed-engineer-vs-solutions-architect-2026-09-01">
          vs solutions architect
        </Link>{" "}
        and{" "}
        <Link href="/blog/forward-deployed-engineer-vs-sales-engineer-2026-09-06">
          vs sales engineer
        </Link>
        . The firm side of it is at{" "}
        <a href="https://beyondelevation.com/fde" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        . Otherwise start at <Link href="/">meethayat.com</Link>.
      </p>

      <h2>Questions I get asked about this</h2>

      <h3>What does forward deployed engineer mean?</h3>
      <p>
        The phrase is borrowed from the military, where forward deployed means
        stationed away from home base and close to the problem. In software it
        means the same thing with commercial force. The engineer is not at
        headquarters building product for everybody, they are inside one
        customer&apos;s environment building what that customer needs. Palantir,
        which coined it, calls its version the original forward deployed
        software engineer and says it pioneered the position by embedding
        engineers directly with customers. The test that separates it from every
        neighbouring job is write access. If the person cannot change your
        system, they are advising you.
      </p>

      <h3>Do forward deployed engineers code?</h3>
      <p>
        Yes, and every posting read for this piece goes out of its way to say
        so, which tells you how often people assume otherwise. Cursor: this is
        not a demo role, you are responsible for systems that work in the real
        world. Datadog: for someone who wants to write code with customers, not
        just advise them. Figma: a senior or staff level engineering role within
        Product and Engineering, not a sales or services function. Palantir
        compares its forward deployed AI engineer to a hands-on AI startup chief
        technology officer. Baseten is the bluntest of the ten: an engineering
        role with hands-on coding and software development, with product
        management, technical customer success and pre-sales solution
        engineering mixed in.
      </p>

      <h3>Do forward deployed engineers travel?</h3>
      <p>
        Yes, and less than the reputation, with one outlier. Databricks says
        twenty percent for its senior role in New York City. Anthropic estimates
        twenty five percent in the United States and twenty five to fifty
        percent for its Munich posting. OpenAI is the heavy one at up to fifty
        percent, on top of three days a week in the office. Cresta runs most of
        its forward deployed engineering remotely across six countries, which is
        possible precisely because its deployments are the most repeatable in
        this sample. If someone tells you the job is mostly on planes, they are
        describing 2019 Palantir, not 2026.
      </p>

      <h3>What is a forward deployed product manager?</h3>
      <p>
        A real and separate job, not a mistyped search. Six open postings across
        these ten companies on 12 September 2026, three at Scale AI and three at
        Cresta, plus a director of product management for forward deployed and
        strategy. Scale AI defines it by exclusion: not a roadmap PM, not a
        customer success manager, not a solutions engineer. The job owns product
        outcomes inside a portfolio of enterprise accounts, drives deployments
        from contract to production, and works out whether a stall is caused by
        the product or by execution, integration and change management. The New
        York band is $240,000 to $300,000, above most of the engineering bands
        here, which tells you how scarce that judgement is.
      </p>

      <h3>How many forward deployed engineers does Palantir have?</h3>
      <p>
        Palantir does not publish that headcount and anybody quoting you a
        number is guessing. What is public is the hiring. On 12 September 2026
        Palantir had 311 open postings and 77 carried forward deployed in the
        title, about one in four, the highest density in this sample. They cover
        software, AI, infrastructure, reliability, security and enablement
        engineering, across commercial work and the United States, United
        Kingdom, Australian, Japanese, Korean and Norwegian governments and
        NATO. Beside them sit 35 deployment strategists, the non-coding half of
        the same team.
      </p>

      <h3>Forward deployed engineer vs software engineer: what is the difference?</h3>
      <p>
        Whose system you have write access to, and whether the thing you build
        is for everybody or for one company. A software engineer builds product
        in their own repository for a population of users they will never meet.
        A forward deployed engineer builds inside one named customer&apos;s
        environment against that customer&apos;s constraints, and success is
        measured by whether that one deployment reaches production and gets
        used. Same craft, different accountability. I have set the two side by
        side in detail at{" "}
        <a href="https://beyondelevation.com/insights/forward-deployed-engineer-vs-software-engineer" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        .
      </p>

      <h3>What is the forward deployed engineering model?</h3>
      <p>
        The model, as opposed to the job, is the decision to solve deployment
        with your own engineers rather than with a partner network or
        documentation. Palantir&apos;s original shape pairs a builder with a
        non-coding counterpart on the same account, the deployment strategist,
        and that pairing keeps reappearing: Databricks has engagement managers
        and field technical program managers alongside its 95 engineers, Scale
        AI and Cresta have forward deployed product managers, and Cursor,
        founded two years ago, already advertises a forward deployed strategist.
        The pattern is consistent enough to be worth copying. One person holds
        the relationship and the scope, another holds the keyboard, and they are
        not the same person because doing both badly is the default failure.
      </p>

      <h3>Where do these numbers come from?</h3>
      <p>
        Every figure on this page was read on 12 September 2026 from the
        company&apos;s own live careers feed, not from a summary or an
        aggregator. Databricks, Anthropic, Datadog, Scale AI, Cresta and Figma
        from their public Greenhouse job boards; Palantir from its public Lever
        board; OpenAI, Cursor and Baseten from their public Ashby boards. Role
        counts are of open postings on that date, not of employees. Salary
        figures are the base bands printed on the postings, in United States
        dollars, excluding equity, bonus and sign-on, and Palantir&apos;s is
        described in its own posting as an estimate. The hiring growth context,
        the OpenAI deployment subsidiary, Ode with Anthropic and the Google
        Cloud and Deloitte figures come from reporting by Pragmatic Engineer,
        The New Stack, Perspective AI and Paraform rather than from a feed I
        read this week, and are flagged as such above. Job boards move daily. If
        you are reading this months from now, re-run the method rather than
        trusting the numbers, and the ratios will outlive the totals.
      </p>
    </PageShell>
  );
}
