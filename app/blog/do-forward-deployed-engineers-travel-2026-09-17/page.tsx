import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "do-forward-deployed-engineers-travel-2026-09-17";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-17";
const MOD = "2026-09-17";
const TITLE = "Do Forward Deployed Engineers Travel? I Counted the Travel Line in 108 Live Postings";
const DESC =
  "Yes, and the median ceiling is half your time. On 17 September 2026 I read 108 live forward deployed job postings at Palantir, OpenAI, Anthropic, Datadog, Databricks and Sitreps. 71 of them name a travel figure, 50 of those 71 stop at 50 percent, the lowest is 10 percent in Vilnius and the highest is 90 percent on a NATO account. One posting in 105 at the three biggest names allows remote work. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, gold leaf and deep lapis inside a turquoise arabesque border. A visiting engineer kneels in a patron's tiled courtyard with both hands inside the gearing of a half dismantled brass astrolabe, his files and calipers laid out on a cloth. Behind him a loaded caravan of camels and a saddled white horse wait in the gateway. Through three further arches, three more distant courtyards each hold an identical astrolabe waiting for the same pair of hands. The gold border squares alternate between a small travelling figure and a workbench, so the split between the road and the bench is visible at a glance.";

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
        height: 1024,
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
      about: "How much forward deployed engineers travel, counted from 108 live job postings read on the employers' own job feeds on 17 September 2026",
      citation: [
        {
          "@type": "WebPage",
          name: "Palantir Technologies public job feed, 313 live postings, 77 titled Forward Deployed",
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
          name: "Palantir Technologies, Forward Deployed Software Engineer, NATO, London",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/73d1a90c-162d-4cb6-9e0c-4c8de9561ad0",
        },
        {
          "@type": "WebPage",
          name: "Palantir Technologies, Forward Deployed Software Engineer, Vilnius",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/98b81271-9e15-40b7-8dce-0c62f24702f9",
        },
        {
          "@type": "WebPage",
          name: "Palantir Technologies, Deployment Strategist, New York",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://jobs.lever.co/palantir/e0ab8226-b928-4e3a-bf87-08fe7b1ea595",
        },
        {
          "@type": "WebPage",
          name: "OpenAI public job board, 818 live postings, 21 titled Forward Deployed",
          publisher: { "@type": "Organization", name: "OpenAI" },
          url: "https://jobs.ashbyhq.com/openai",
        },
        {
          "@type": "WebPage",
          name: "OpenAI, Forward Deployed Engineer, New York City",
          publisher: { "@type": "Organization", name: "OpenAI" },
          url: "https://jobs.ashbyhq.com/openai/9471b38b-f65c-4a01-9626-bd33fca90f1d",
        },
        {
          "@type": "WebPage",
          name: "OpenAI, Forward Deployed Engineer, Gov, Washington DC",
          publisher: { "@type": "Organization", name: "OpenAI" },
          url: "https://jobs.ashbyhq.com/openai/db5a708d-1d7a-4aa3-8dd3-0d0423b6b69f",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Forward Deployed Engineer, New York City, San Francisco and Seattle",
          publisher: { "@type": "Organization", name: "Anthropic" },
          url: "https://job-boards.greenhouse.io/anthropic/jobs/5302966008",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Forward Deployed Engineer, Paris",
          publisher: { "@type": "Organization", name: "Anthropic" },
          url: "https://job-boards.greenhouse.io/anthropic/jobs/5391021008",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Manager, Forward Deployed Engineering, New York City",
          publisher: { "@type": "Organization", name: "Anthropic" },
          url: "https://job-boards.greenhouse.io/anthropic/jobs/5099753008",
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
          name: "Sitreps, Forward Deployed Engineer, Logistics Programs, Washington DC",
          publisher: { "@type": "Organization", name: "Sitreps" },
          url: "https://job-boards.greenhouse.io/sitrepsllc/jobs/4093418009",
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
      height: 1024,
      caption: HERO_ALT,
      name: "Do forward deployed engineers travel, illuminated as a visiting engineer with a caravan waiting in the gateway",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "do forward deployed engineers travel, forward deployed engineer travel, forward deployed engineer remote, FDE, Palantir, OpenAI, Anthropic, Datadog, Databricks, Hayat Amin, Beyond Elevation, New York",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do forward deployed engineers travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Of 108 live forward deployed postings I read on 17 September 2026, 71 name a travel figure, 15 ask for travel without naming a figure, and 22 never mention it. Of the 71 that commit to a number, 50 stop at 50 percent of your time, 9 go higher and 12 stop at 40 percent or below. The lowest figure in the sample is 10 to 20 percent, on Palantir's Forward Deployed Software Engineer in Vilnius. The highest is 70 to 90 percent, on Palantir's Forward Deployed Software Engineer for NATO in London. Every one of OpenAI's 17 forward deployed postings that names a number says travel up to 50 percent is required.",
          },
        },
        {
          "@type": "Question",
          name: "Do forward deployed engineers travel a lot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Half your working time is the ceiling most employers write down, so plan on one week in four as the normal state and two weeks in four when a deployment is starting. Anthropic's manager posting is explicit about the shape of it: travel to customer sites as needed, 25 to 50 percent, particularly during engagement kickoffs and for the team's highest priority accounts. The travel is lumpy rather than constant. It clusters at the start of an engagement, when nothing works yet and nobody trusts you.",
          },
        },
        {
          "@type": "Question",
          name: "Is a forward deployed engineer job remote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Almost never. Across the 105 forward deployed postings I read at Palantir, OpenAI and Anthropic on 17 September 2026, exactly one mentions remote work as a possibility, OpenAI's Forward Deployed Security Engineer in Washington DC. 20 of OpenAI's 21 forward deployed postings state a hybrid work model of 3 days in the office per week, on top of the travel. All 7 of Anthropic's expect staff in an Anthropic office at least 25 percent of the time. Palantir's 77 are split 39 onsite and 38 hybrid, with no remote option among them. The searches for forward deployed engineer remote jobs are looking for something the employers are not selling.",
          },
        },
        {
          "@type": "Question",
          name: "What is the work life balance of a forward deployed engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The postings answer this obliquely and the answer is in the arithmetic. Three days a week in your employer's office plus up to 50 percent travel to the customer means the week is mostly spoken for by somebody else's address. Palantir is the only employer in the sample that offers the engineer any say, with the phrase flexible based on personal preferences attached to its 25 percent figure in New York, Stockholm and Madrid. If the geography matters to you more than the work, read the location line before the salary line.",
          },
        },
        {
          "@type": "Question",
          name: "Does Anthropic have forward deployed engineers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 7 live postings on 17 September 2026 out of 607 open roles. Four are Forward Deployed Engineer, in London, Munich, Paris and one covering New York City, San Francisco and Seattle. Two are Manager, Forward Deployed Engineering, in New York City and London. One is Pre-Sales Program Lead, Forward Deployed Engineering, in San Francisco and New York City. The three European engineering postings ask the engineer to travel frequently, 25 to 50 percent, to customer sites to build in person with customers. The United States posting says potential travel based on location, estimated 25 percent.",
          },
        },
        {
          "@type": "Question",
          name: "Which forward deployed engineer job travels the most?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In this sample, Palantir's Forward Deployed Software Engineer for NATO in London, which requires the ability to travel throughout Europe 70 to 90 percent of the time. Above the engineering roles sits a different title: Palantir's Deployment Strategist, 35 live postings, which asks for the ability to travel 25 to 75 percent and does not require you to be a strong coder. Its estimated New York band is $110,000 to $170,000 against $135,000 to $200,000 for the Forward Deployed Software Engineer in the same city. The job with more airports is the job with less code and less money.",
          },
        },
        {
          "@type": "Question",
          name: "If I hire a forward deployed engineer, do they come to my office?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That is the part you set, and it is worth setting deliberately. The employers in this sample buy between 10 and 90 percent onsite presence depending on the customer, not the title, which tells you the number is negotiable and situational. Ask for onsite time where it changes the outcome: the first week of discovery, the days you are getting credentials and watching people use the current system, and go live. Ask for remote time where the work is writing and testing code, because an engineer in an unfamiliar meeting room with a borrowed monitor is a slower engineer.",
          },
        },
        {
          "@type": "Question",
          name: "What does it mean to be forward deployed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It means your work happens inside the customer's systems rather than inside your employer's product, and the postings show that this is a permissions arrangement before it is a travel arrangement. Anthropic asks its candidates directly whether they have been embedded onsite with an enterprise customer and built or deployed an application using large language models in that customer's production environment. Sitreps describes the week as spending a day onsite with users, listening to their challenges and digging into the underlying pain points. The word forward is about whose building the software lands in. Travel is just what it costs to get there.",
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
        { label: "Do Forward Deployed Engineers Travel?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Do Forward Deployed Engineers Travel?</h1>
      <p className="op-lede">
        Yes, and the ceiling most employers write down is half your time. I read
        108 live forward deployed postings this morning. 71 of them name a travel
        figure, 50 of those 71 stop at 50 percent, and the full spread runs from
        10 percent in Vilnius to 90 percent on a NATO account.
      </p>
      <p>
        I am Hayat Amin. I spent twenty years as a technology chief financial
        officer, sold three companies in that seat, and I now build this work
        inside companies myself instead of advising on it, so the question of how
        much of it happens in somebody else&apos;s building is my own diary
        problem too. On 17 September 2026 I pulled the public job feeds of
        Palantir, OpenAI and Anthropic and read every posting with forward
        deployed in the title, then added Datadog, Databricks and one defence
        recruiter. 108 postings. The travel line is the one number these
        companies commit to in writing, and they disagree about it by a factor of
        nine.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1024}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The engineer has his hands in the gearing and his tools on the floor,
          which is the job. The loaded camels in the gateway and the three
          identical machines waiting through the arches are the travel line. The
          border counts the weeks: half a workbench, half a road.
        </figcaption>
      </figure>

      <h2>How I counted</h2>
      <p>
        Three of these companies publish their whole job list as a feed, so I
        read the postings rather than anybody&apos;s summary of them. Palantir
        had 313 live roles on 17 September 2026, of which 77 carry Forward
        Deployed in the title and another 35 are Deployment Strategist. OpenAI
        had 818 live roles, 21 of them forward deployed. Anthropic had 607, with
        7. To those 105 I added three postings I read page by page: Datadog&apos;s
        Senior Forward Deployed Engineer for Feature Flags in New York,
        Databricks&apos;s Senior Forward Deployed Engineer in Raleigh, North
        Carolina, and a Forward Deployed Engineer for Logistics Programs
        advertised by Sitreps for a defence technology client in the Washington
        DC metro area. That makes 108.
      </p>
      <p>
        I counted three things in each one. Does it use the word travel. Does it
        attach a number. What is the highest number it attaches. A posting is a
        company writing down what it will commit to, which makes it a better
        source on this than any survey of how people feel about their calendars.
      </p>

      <h2>71 of 108 name a figure, and half of those say half</h2>
      <p>
        15 postings ask for travel without putting a number on it, usually in
        Palantir&apos;s government work, where the phrasing is a willingness and
        interest to travel as needed. 22 never mention travel at all. That leaves
        71 that commit, and they sort like this.
      </p>
      <p>
        50 of the 71 top out at 50 percent. That is 27 Palantir postings that
        expect 25 to 50 percent depending on team and location, 17 OpenAI
        postings whose line is &quot;Travel up to 50% is required&quot;, 5
        Anthropic postings asking the engineer to &quot;Travel frequently
        (25-50%) to customer sites to build in person with customers&quot;, and
        the Sitreps role, whose work model is listed as onsite with the customer
        at 50 percent travel for $155,000 to $225,000 base plus a 30 percent
        bonus.
      </p>
      <p>
        9 go above half. Eight are Palantir roles requiring 25 to 75 percent,
        mostly government accounts, and one is the outlier of the whole sample:
        Forward Deployed Software Engineer for NATO, based in London, which
        requires the ability to travel throughout Europe 70 to 90 percent of the
        time. 12 stop at 40 percent or lower. Datadog asks for up to 20 percent
        of the time to customer sites against a band of $192,000 to $240,000.
        Databricks says travel to customers 20 percent of the time. Palantir&apos;s
        Vilnius engineer travels 10 to 20 percent, the lowest number I found
        anywhere. Anthropic&apos;s American posting says potential travel based on
        location, estimated 25 percent. And OpenAI&apos;s forward deployed manager
        in Tokyo travels up to 40 percent, although mainly local.
      </p>
      <p>
        So the honest answer to the question is a median ceiling of 50 percent,
        with a floor of 10 and a peak of 90. Anyone quoting you a single figure
        for this role has read one posting.
      </p>

      <h2>What I wrote yesterday was low by half</h2>
      <p>
        Yesterday I published a piece on{" "}
        <Link href="/blog/do-forward-deployed-engineers-code-2026-09-16/">
          whether forward deployed engineers code
        </Link>{" "}
        and, from a sample of seven postings at four companies, said the numbers
        employers commit to are one week in four at the top end. Widening the
        read from 7 postings to 108 moves that. The correct top end is one week
        in two, because OpenAI was not in yesterday&apos;s sample and OpenAI runs
        the largest forward deployed hiring programme of the three at 21 live
        roles, every numbered one of them at 50 percent. A sample of seven was
        too small to answer a question about a distribution. This one is not.
      </p>

      <h2>The same title at the same company, 25 percent or 90</h2>
      <p>
        The most useful finding is that the number does not follow the job title.
        It follows the customer.
      </p>
      <p>
        Palantir&apos;s Forward Deployed Software Engineer in New York asks for
        &quot;Ability and interest to travel up to 25%, as needed to client
        sites, but flexible based on personal preferences&quot;. The identical
        title in London expects 25 to 50 percent depending on team and location.
        The identical title on the NATO account, also based in London, wants 70
        to 90 percent across Europe. Same company, same words in the title, three
        answers, because one customer is a bank forty minutes away and another is
        a set of installations in eleven countries.
      </p>
      <p>
        Anthropic shows the same thing in one clean pair. Its American Forward
        Deployed Engineer posting, covering New York City, San Francisco and
        Seattle, estimates 25 percent. Its Paris, Munich and London postings, same
        title, same team, ask the engineer to travel frequently at 25 to 50
        percent. European enterprise customers are spread across more countries
        than American ones, and the travel line is where that geography shows up.
      </p>
      <p>
        If you are reading a posting to work out your own week, the location line
        tells you more than the title does. If you are writing one, you are
        choosing the number, not inheriting it.
      </p>

      <h2>The travel is on top of an office, not instead of one</h2>
      <p>
        This is the part that surprised me, and it is the part worth knowing
        before anybody signs anything. The travel does not replace a commute. It
        is added to one.
      </p>
      <p>
        20 of OpenAI&apos;s 21 forward deployed postings carry the same sentence:
        a hybrid work model of 3 days in the office per week. Those same postings
        require travel up to 50 percent. All 7 of Anthropic&apos;s say the company
        currently expects all staff to be in one of its offices at least 25
        percent of the time. Palantir&apos;s 77 split 39 onsite and 38 hybrid,
        and its boilerplate is blunt: if the posting is specified as Onsite, you
        are required to work from an office.
      </p>
      <p>
        Across those 105 postings at the three biggest names in this field,
        exactly one mentions remote work as a possibility, and it is OpenAI&apos;s
        Forward Deployed Security Engineer in Washington DC, which also says
        travel to and working from customer sites is required. Google will
        autocomplete &quot;forward deployed engineer remote jobs&quot; for you.
        The employers are not offering that job.
      </p>

      <h2>The job that travels most is the job that codes least</h2>
      <p>
        Palantir sells two people into the same account, which makes it the only
        controlled experiment available. The Deployment Strategist, 35 live
        postings today, requires the ability to travel 25 to 75 percent and asks
        only for experience with programming, scripting or statistical packages.
        The Forward Deployed Software Engineer in the same city requires a strong
        coder and travels up to 25 percent. New York bands are estimated at
        $110,000 to $170,000 for the strategist and $135,000 to $200,000 for the
        engineer.
      </p>
      <p>
        More airports, less code, less money, and there is a reason those three
        move together. Writing software needs uninterrupted hours at a keyboard
        you have configured, and every flight costs a day of them. When a company
        buys travel it is buying presence, and presence is what you need when the
        problem is that nobody has agreed what the data means. When the problem is
        that the integration does not exist, you need someone at a desk with
        credentials.
      </p>

      <h2>If you are buying this work rather than applying for it</h2>
      <p>
        Most people who ask my opinion about travel percentages are not
        candidates. They own a company, they are about to pay for deployment work,
        and they are trying to work out whether they are buying a person or a
        person&apos;s air fares.
      </p>
      <p>
        Three questions settle it. How many onsite days are in the quote, and
        which weeks do they fall in. What are those days for, named as activities
        rather than as presence. And what happens to the schedule when the answer
        to a question is two time zones away. The employers in this sample buy
        between 10 and 90 percent onsite depending on the account, which proves
        the number is a decision rather than a property of the role, and it is a
        decision you get to make when you are the customer.
      </p>
      <p>
        My own view, after doing it both ways, is that onsite time is worth a lot
        in three places and very little everywhere else. Week one, when you are
        watching people use the system they actually have. Credentials day, which
        moves faster in a room than in a ticket queue. And go live, when somebody
        senior needs to see it work. The middle of the build, which is most of the
        calendar, is better done remotely, and any firm that insists otherwise is
        charging you for a seat rather than a system. I do{" "}
        <Link href="/blog/what-is-ai-operations-2026-09-12/">AI operations</Link>{" "}
        work on exactly that shape through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , inside the client&apos;s systems and with their credentials, and the
        engineering side of it is set out at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I am Hayat Amin, and I have spent twenty years in technology, most of it
        as a chief financial officer in companies growing faster than their
        systems could carry. I sold three of them in that seat, with American
        Express and TripAdvisor among the buyers, and carried three FT 100 fastest
        growing listings along the way. Signing off deployment invoices for
        fifteen years is what taught me to read the travel line first.
      </p>
      <p>
        I am exceptional at the work in this article, done rather than
        recommended. Connecting the systems in a company that were never designed
        to speak to each other. Turning what comes out of them into a real time
        number a chief executive can run the week on instead of waiting for month
        end. Valuing and monetising the intellectual property and data a company
        already owns and cannot see on its balance sheet. And sitting beside a
        founder from the first conversation through to the wire transfer on an
        exit, which is where the finance years pay for themselves. I am a chief
        financial officer who writes the code, and that pair is rarer than either
        half of it.
      </p>
      <p>
        I am available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and if you want the role defined before you price it, start with{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          what a forward deployed engineer is
        </Link>
        .
      </p>

      <p>
        If you want a second pair of eyes on how many onsite days your next
        project actually needs, I do a free audit call: one call, then a written
        list of what to automate first, what it saves and what it costs, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>Do forward deployed engineers travel?</h3>
      <p>
        Yes. Of 108 live forward deployed postings I read on 17 September 2026, 71
        name a figure, 15 ask for travel without one, and 22 never mention it. Of
        the 71 that commit, 50 stop at 50 percent of your time, 9 go higher and 12
        stop at 40 percent or below. The lowest is 10 to 20 percent, on
        Palantir&apos;s engineer in Vilnius. The highest is 70 to 90 percent, on
        Palantir&apos;s engineer for NATO in London. Every one of OpenAI&apos;s
        numbered forward deployed postings says travel up to 50 percent is
        required.
      </p>

      <h3>Do forward deployed engineers travel a lot?</h3>
      <p>
        Plan on one week in four as normal and two in four when a deployment is
        starting. Anthropic&apos;s manager posting describes the shape of it:
        travel to customer sites as needed at 25 to 50 percent, particularly
        during engagement kickoffs and for the team&apos;s highest priority
        accounts. The travel is lumpy, not constant. It clusters at the beginning,
        when nothing works yet and nobody trusts you.
      </p>

      <h3>Is a forward deployed engineer job remote?</h3>
      <p>
        Almost never. Across 105 postings at Palantir, OpenAI and Anthropic,
        exactly one mentions remote work as a possibility. 20 of OpenAI&apos;s 21
        state a hybrid model of 3 days in the office per week on top of the
        travel, all 7 of Anthropic&apos;s expect staff in an office at least 25
        percent of the time, and Palantir&apos;s 77 are 39 onsite and 38 hybrid
        with no remote among them.
      </p>

      <h3>What is the work life balance of a forward deployed engineer?</h3>
      <p>
        Do the arithmetic before you take the job. Three days a week in your
        employer&apos;s office plus up to 50 percent travel to a customer leaves
        very little of the week at an address you chose. Palantir is the only
        employer here that gives the engineer any say, attaching the phrase
        flexible based on personal preferences to its 25 percent figure in New
        York, Stockholm and Madrid. If geography matters to you more than the
        work, read the location line before the salary line.
      </p>

      <h3>Does Anthropic have forward deployed engineers?</h3>
      <p>
        Yes, 7 live postings out of 607 open roles on 17 September 2026. Four are
        Forward Deployed Engineer, in London, Munich, Paris and one covering New
        York City, San Francisco and Seattle. Two are Manager, Forward Deployed
        Engineering, in New York City and London. One is a pre-sales programme
        lead for the same team. The European engineering roles travel 25 to 50
        percent, the American one an estimated 25 percent, and the London engineer
        needs 4 or more years of experience while the Munich and Paris ones ask
        for 8 or more.
      </p>

      <h3>Which forward deployed engineer job travels the most?</h3>
      <p>
        Palantir&apos;s Forward Deployed Software Engineer for NATO in London, at
        70 to 90 percent across Europe. The bigger pattern sits one title over.
        Palantir&apos;s Deployment Strategist, 35 live postings, travels 25 to 75
        percent, does not require a strong coder, and is estimated at $110,000 to
        $170,000 in New York against $135,000 to $200,000 for the engineer in the
        same city. The job with more airports has less code in it and less money.
      </p>

      <h3>If I hire a forward deployed engineer, do they come to my office?</h3>
      <p>
        As often as you specify, which is why it is worth specifying. Buy onsite
        days for the first week of discovery, for the day the credentials get
        issued, and for go live. Buy remote time for the build, because an
        engineer in a borrowed meeting room with one monitor is a slower engineer
        and you are paying by the day either way.
      </p>

      <h3>What does it mean to be forward deployed?</h3>
      <p>
        That your work lands in the customer&apos;s systems rather than in your
        employer&apos;s product, which is a permissions arrangement before it is a
        travel arrangement. Anthropic asks candidates outright whether they have
        been embedded onsite with an enterprise customer and built or deployed an
        application using large language models in that customer&apos;s production
        environment. Sitreps describes a typical week as a day onsite with users,
        listening to their challenges and digging into the underlying pain points.
        Forward is about whose building the software ends up in. Travel is what it
        costs to get there.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        Every figure above was counted on 17 September 2026 from the
        employers&apos; own live postings, not from a survey or an aggregator. The
        three feeds are{" "}
        <a href="https://jobs.lever.co/palantir" target="_blank" rel="noopener noreferrer">
          Palantir&apos;s job list
        </a>{" "}
        at 313 postings,{" "}
        <a href="https://jobs.ashbyhq.com/openai" target="_blank" rel="noopener noreferrer">
          OpenAI&apos;s
        </a>{" "}
        at 818, and{" "}
        <a href="https://job-boards.greenhouse.io/anthropic" target="_blank" rel="noopener noreferrer">
          Anthropic&apos;s
        </a>{" "}
        at 607. The individual postings quoted are Palantir&apos;s{" "}
        <a href="https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" target="_blank" rel="noopener noreferrer">
          Forward Deployed Software Engineer in New York
        </a>
        ,{" "}
        <a href="https://jobs.lever.co/palantir/73d1a90c-162d-4cb6-9e0c-4c8de9561ad0" target="_blank" rel="noopener noreferrer">
          the NATO one in London
        </a>
        ,{" "}
        <a href="https://jobs.lever.co/palantir/98b81271-9e15-40b7-8dce-0c62f24702f9" target="_blank" rel="noopener noreferrer">
          the Vilnius one
        </a>
        ,{" "}
        <a href="https://jobs.lever.co/palantir/e0ab8226-b928-4e3a-bf87-08fe7b1ea595" target="_blank" rel="noopener noreferrer">
          the New York Deployment Strategist
        </a>
        , OpenAI&apos;s{" "}
        <a href="https://jobs.ashbyhq.com/openai/9471b38b-f65c-4a01-9626-bd33fca90f1d" target="_blank" rel="noopener noreferrer">
          Forward Deployed Engineer in New York City
        </a>{" "}
        and{" "}
        <a href="https://jobs.ashbyhq.com/openai/db5a708d-1d7a-4aa3-8dd3-0d0423b6b69f" target="_blank" rel="noopener noreferrer">
          Gov role in Washington DC
        </a>
        , Anthropic&apos;s{" "}
        <a href="https://job-boards.greenhouse.io/anthropic/jobs/5302966008" target="_blank" rel="noopener noreferrer">
          American
        </a>{" "}
        and{" "}
        <a href="https://job-boards.greenhouse.io/anthropic/jobs/5391021008" target="_blank" rel="noopener noreferrer">
          Paris
        </a>{" "}
        engineers and its{" "}
        <a href="https://job-boards.greenhouse.io/anthropic/jobs/5099753008" target="_blank" rel="noopener noreferrer">
          New York manager
        </a>
        ,{" "}
        <a href="https://careers.datadoghq.com/detail/8144946/" target="_blank" rel="noopener noreferrer">
          Datadog&apos;s Senior Forward Deployed Engineer for Feature Flags
        </a>
        ,{" "}
        <a href="https://www.databricks.com/company/careers/professional-services-operations/sr-forward-deployed-engineer-fde---communications-media-entertainment--games-8461258002" target="_blank" rel="noopener noreferrer">
          Databricks in Raleigh
        </a>
        , and{" "}
        <a href="https://job-boards.greenhouse.io/sitrepsllc/jobs/4093418009" target="_blank" rel="noopener noreferrer">
          the Sitreps logistics role in Washington DC
        </a>
        . Salary figures are the base bands printed that day, before equity, bonus
        or sign-on. Postings expire and get rewritten, so if you are reading this
        months later, open the link and check the number rather than trusting mine.
      </p>
    </PageShell>
  );
}
