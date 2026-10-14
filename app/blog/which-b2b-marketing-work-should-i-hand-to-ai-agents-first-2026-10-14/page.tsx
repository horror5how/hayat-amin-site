import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "which-b2b-marketing-work-should-i-hand-to-ai-agents-first-2026-10-14";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-14";
const MOD = "2026-10-14";
const TITLE = "Which B2B Marketing Work Should I Hand to AI Agents First?";
const DESC =
  "Hand AI agents the B2B marketing work that runs hundreds of times a month on rules you can write down: account research, inbound lead routing, content repurposing and the weekly channel report. Keep positioning, the offer and the final edit with people. One job at a time, 4 to 6 weeks each, one number per job.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-pick-coffee-talking-v3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for which b2b marketing work should i hand to ai agents first";

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
  "Hand AI agents the B2B marketing work that runs hundreds of times a month on rules you can write down: account research, inbound lead routing, content repurposing and the weekly channel report, in that order. Keep positioning, the offer and the final edit of anything with your name on it with people, and move one job at a time, 4 to 6 weeks each, judged on one number.";

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
          name: "Which B2B marketing work should I hand to AI agents first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What are the best AI use cases for B2B marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ones with volume and written rules. Account research against your ideal customer profile, scoring and routing inbound leads, turning one long piece into 8 to 12 shorter ones, and pulling the weekly numbers from the CRM and ad accounts into one report. Writing your positioning from scratch is the worst use case, because the model has no idea what makes you different.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents run B2B marketing on their own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. They can run the production line, and a 2 person marketing team with 4 agents can ship what a team of 5 or 6 shipped before. Someone still has to decide who you sell to, what you say and what you stop doing. An agent with no owner drifts within a month, and nobody notices until the pipeline number does.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI reduce CAC in B2B?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can, if you measure it per channel. Agents cut the people cost inside CAC, and faster routing lifts conversion on the leads you already pay for. They don't fix a bad channel. I track blended CAC and CAC by channel monthly for 3 months before and 3 months after each agent goes live, then decide.",
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
      keywords: "Hayat Amin, AI agents for B2B marketing, AI marketing for B2B, AI lead generation, B2B CAC, AI operator, London",
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

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Which B2B Marketing Work Should I Hand to AI Agents First?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>Which B2B Marketing Work Should I Hand to AI Agents First?</h1>
      <p className="op-lede">
        Hand AI agents the B2B marketing work that runs hundreds of times a
        month on rules you can write down: account research, inbound lead
        routing, content repurposing and the weekly channel report, in that
        order. Keep positioning, the offer and the final edit of anything with
        your name on it with people, and move one job at a time, 4 to 6 weeks
        each, judged on one number.
      </p>

      <h2>Why most marketing teams start in the wrong place</h2>
      <p>
        Most B2B teams I walk into started with the blog. Someone bought a
        writing tool, the team doubled its output to 8 posts a month, and
        organic leads stayed flat. The posts read like everyone else's because
        the tool was given the one job that depends on knowing what makes you
        different, and it doesn't know.
      </p>
      <p>
        Meanwhile the dull work kept eating the week. In a typical 2 to 4
        person marketing team at a 50 to 200 person company, I count 10 to 15
        hours a week on list building, lead clean up, copying numbers out of
        the CRM and ad accounts, and cutting one webinar into social posts.
        That's a third of a full time role spent on work with written rules,
        and it's the work an agent does well.
      </p>
      <p>
        The second mistake is speed. A team switches on five tools in one
        month, nobody owns any of them, and by month three nobody can say
        which one moved pipeline. I'd rather see one agent live and measured
        than five half running.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-pick-coffee-talking-v3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the AI agents behind B2B
          marketing, sales pipeline and finance inside companies.
        </figcaption>
      </figure>

      <h2>How I rank the marketing work</h2>
      <p>
        I use the same test I use in finance and operations: volume times
        rule density. How many times a month does the job run, and could the
        person doing it today write the rules on two pages? High on both goes
        first. Low on both stays human.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Marketing job</th>
            <th style={th}>Runs per month</th>
            <th style={th}>Rules on paper?</th>
            <th style={th}>Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Account research against your ideal customer profile</td>
            <td style={td}>200 to 1,000 accounts</td>
            <td style={td}>Yes, once the profile is written</td>
            <td style={td}>1st</td>
          </tr>
          <tr>
            <td style={td}>Inbound lead scoring and routing</td>
            <td style={td}>50 to 500 leads</td>
            <td style={td}>Yes</td>
            <td style={td}>2nd</td>
          </tr>
          <tr>
            <td style={td}>Repurposing one long piece into short ones</td>
            <td style={td}>4 to 8 source pieces</td>
            <td style={td}>Partly, needs a voice file</td>
            <td style={td}>3rd</td>
          </tr>
          <tr>
            <td style={td}>Weekly channel and CAC report</td>
            <td style={td}>4 to 5 reports</td>
            <td style={td}>Yes</td>
            <td style={td}>4th</td>
          </tr>
          <tr>
            <td style={td}>Positioning, the offer, pricing pages</td>
            <td style={td}>A few a year</td>
            <td style={td}>No</td>
            <td style={{ ...td, borderBottom: "none" }}>Stays human</td>
          </tr>
        </tbody>
      </table>

      <h2>The four agents, in the order I build them</h2>
      <h3>1. Account research, judged on meetings per 100 accounts</h3>
      <p>
        Write the ideal customer profile first: headcount band, sector,
        region, and the 3 or 4 events that mean they're buying now, such as a
        funding round, a new CFO or a job ad for the role your product
        replaces. The agent works through the target list overnight, scores
        each account against the profile and writes two lines on why. A person
        reads the top 20 each morning. I judge it on meetings booked per 100
        accounts contacted, measured for 4 weeks before the agent starts and
        4 weeks after.
      </p>
      <h3>2. Inbound routing, judged on minutes to first touch</h3>
      <p>
        Every form fill gets enriched, scored against the same profile and
        sent to the right person with a short brief. Students, job seekers and
        competitors get filtered out. The rule I hold it to is first human
        touch inside 15 minutes in working hours for any lead scoring above
        the line. Most teams I measure are at hours, sometimes a full day, and
        you're paying for every one of those leads.
      </p>
      <h3>3. Repurposing, judged on edit time</h3>
      <p>
        One webinar, podcast or long article becomes 8 to 12 shorter pieces:
        posts, an email, a few quotes. The agent loads a voice file with your
        banned words and a dozen real examples on every run. A person edits
        everything before it goes out. I count edit minutes per piece. When
        that drops under 10 minutes, the agent is earning its place. If it
        stays above 20 after 6 weeks, the voice file is wrong, not the model.
      </p>
      <h3>4. The weekly report, judged on whether anyone acts on it</h3>
      <p>
        The agent pulls spend from the ad accounts, pipeline from the CRM and
        closed revenue from the ledger, and writes one page by Monday at 8am:
        spend, leads, meetings, pipeline and CAC by channel, with the 2 lines
        that changed most. This is where the CFO side of me cares most. CAC
        that marketing reports and CAC that finance reports should be one
        number, from one source, every week.
      </p>
      <p>
        Read access only for the first 4 weeks on all four. No agent sends an
        email to a prospect, posts to a public account or changes a CRM record
        without a person approving it in that window. After that, the routing
        agent can write to the CRM. The other three keep a person on the
        publish button.
      </p>

      <h2>From my operating seat</h2>
      <p>
        I'm Hayat Amin, an AI-native CFO, AI operator and AI coach for CFOs
        who teaches finance leaders how to build AI into finance operations.
        I spent twenty years in the C-suite, with three exits and three FT100
        listings, and now I build and run AI agent systems inside companies:
        finance, sales pipeline, onboarding and compliance evidence. I coach
        CFOs one to one on the same work, starting from{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>.
      </p>
      <p>
        Inside one client I run, an agent researches the sales pipeline
        overnight and the team has a ranked account list by the morning. The
        person who owns it spends 20 to 30 minutes on the exceptions. My own
        marketing runs the same way. This article was researched and drafted
        by a scheduled agent that read real search suggestions for B2B
        marketing questions, checked a ledger of 24 questions I've already
        answered so it wouldn't repeat one, and stopped before publishing if
        the week's run budget was spent. I still decide what I stand for. The
        agents do the volume.
      </p>

      <h2>What are the best AI use cases for B2B marketing?</h2>
      <p>
        The ones with volume and written rules. Account research against your
        ideal customer profile, scoring and routing inbound leads, turning one
        long piece into 8 to 12 shorter ones, and pulling the weekly numbers
        from the CRM and ad accounts into one report. Writing your positioning
        from scratch is the worst use case, because the model has no idea what
        makes you different.
      </p>

      <h2>Can AI agents run B2B marketing on their own?</h2>
      <p>
        No. They can run the production line, and a 2 person marketing team
        with 4 agents can ship what a team of 5 or 6 shipped before. Someone
        still has to decide who you sell to, what you say and what you stop
        doing. An agent with no owner drifts within a month, and nobody
        notices until the pipeline number does.
      </p>

      <h2>Does AI reduce CAC in B2B?</h2>
      <p>
        It can, if you measure it per channel. Agents cut the people cost
        inside CAC, and faster routing lifts conversion on the leads you
        already pay for. They don't fix a bad channel. I track blended CAC and
        CAC by channel monthly for 3 months before and 3 months after each
        agent goes live, then decide.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I build and run inside companies. I write the ideal
        customer profile with your sales lead, build the research agent first,
        put a named person on its morning queue and hand it over once it has
        held its number for a month. Then the routing agent, then the rest.
        Which of the four is eating your team's week right now? See{" "}
        <Link href="/services/ai-agent-operator/">how I work as your AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
