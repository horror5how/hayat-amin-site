import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-measure-roi-on-ai-agents-2026-08-27";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-08-27";
const MOD = "2026-08-27";
const TITLE = "How Do I Measure ROI on AI Agents?";
const DESC =
  "Measure an agent the way you measure a hire. Baseline one process for four weeks before the agent exists, then track hours removed, error rate, and cycle time against the all-in cost of build plus running. Three numbers, one process, one owner.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look4-bw-3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for how do i measure roi on ai agents";

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
  "Measure an agent the way you would measure a hire, against one named process with a before and an after. Baseline that process for four weeks before the agent exists, then track three numbers only: hours of human work removed, error and rework rate, and cycle time from start to finished output. Divide the value of those three by the all-in cost, which is build plus the running cost of monitoring and retuning, and you have the number. If you cannot state the baseline in one sentence, you are not measuring ROI, you are describing a feeling about a tool.";

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
          name: "How do I measure ROI on AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "How long before an AI agent pays for itself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a single well scoped back office process, plan on six to nine months from first line of work to payback, and treat anything faster as luck rather than method. The first two months produce no return at all because the agent runs in shadow mode against live data while a human still does the work. Months three and four are partial, since a person is still reviewing most outputs. Real return starts once review drops to exceptions only. Anyone promising payback inside a quarter is either counting the build cost at zero or measuring a demo.",
          },
        },
        {
          "@type": "Question",
          name: "What is a realistic ROI number for AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a single process, expect 40 to 70 percent of the human hours in that process to come out, not 90 percent, because the last slice is exception handling and that is the part you deliberately keep with a person. Convert the hours at fully loaded cost, subtract build and a running cost of roughly 20 to 40 percent of build each year, and a good first process returns two to four times its cost in year one. Report it that way, per process, with the baseline attached. A single company wide ROI percentage is a number nobody can audit and nobody should trust.",
          },
        },
        {
          "@type": "Question",
          name: "Why do AI ROI numbers look good in the pilot and vanish in production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because pilots measure the happy path and production pays for the rest. A pilot runs on clean sample data, with the person who built it watching, and no cost booked for the hours they spent watching. Production adds messy inputs, exception handling, monitoring, retuning when an upstream system changes, and the review time of whoever signs the output. Count those from day one. The fix is a baseline captured before the agent exists and a running cost line in the budget, so the production number is the only number anyone ever quoted.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption:
        "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom)",
      name: "Hayat Amin, London",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, AI agent ROI, measuring AI agents, AI operations, payback period, baseline measurement, fractional CFO, AI operator, London",
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
        { label: "How Do I Measure ROI on AI Agents?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Measure ROI on AI Agents?</h1>
      <p className="op-lede">
        Measure an agent the way you would measure a hire, against one named
        process with a before and an after. Baseline that process for four weeks
        before the agent exists, then track three numbers only: hours of human
        work removed, error and rework rate, and cycle time from start to
        finished output. Divide the value of those three by the all-in cost,
        which is build plus the running cost of monitoring and retuning. If you
        cannot state the baseline in one sentence, you are not measuring return,
        you are describing a feeling about a tool.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        The measurement fails before the agent is built, because nobody wrote
        down what the work cost beforehand. By the time the board asks for the
        return, the honest answer is that no one knows what the process took in
        January. So the team reaches for the two metrics that are easy to
        produce and prove nothing: number of agent runs, and a survey asking
        staff whether the tool feels useful. Both go up. Neither survives a
        finance review.
      </p>
      <p>
        The second failure is scope. A CEO asks what the AI programme returned
        across the company, gets a single blended percentage, and cannot trace it
        to anything. Company wide AI ROI is not a measurable quantity. Process
        level ROI is. One company I worked with had four agents live and one
        number on the slide. Two of the four agents were losing money on
        maintenance and no one could see it, because the winners were carrying
        them inside the average.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look4-bw-3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the AI systems that run
          finance and operations inside companies in London, NYC, and Dubai.
        </figcaption>
      </figure>

      <h2>The framework I use with clients</h2>
      <p>
        Five steps, in order. The first one is the only one people skip and it is
        the one that decides whether any of the rest mean anything.
      </p>
      <p>
        <strong>One: baseline for four weeks, before you build.</strong> Take the
        single process the agent will do. Have the people doing it log three
        things for four weeks: hours spent, how many outputs needed rework, and
        how long an item takes from arriving to finished. Four weeks, because one
        week is noise and a quarter is a delay you will not tolerate. This costs
        a few hours of admin and it is the entire foundation. Without it, every
        number produced later is an estimate defending a decision already made.
      </p>
      <p>
        <strong>Two: count the cost properly, including the boring half.</strong>{" "}
        Build cost is the visible part and usually the smaller one. Add model and
        infrastructure spend, the integration work into the systems the agent
        reads and writes, the review time of whoever signs the output, and a
        running cost for monitoring and retuning that I budget at 20 to 40
        percent of build every year. Upstream systems change, and an agent nobody
        maintains quietly degrades until someone catches a wrong output in front
        of a customer.
      </p>
      <p>
        <strong>Three: track three numbers and refuse the fourth.</strong> Hours
        removed, error and rework rate, cycle time. That is the whole scorecard.
        Hours removed converts to money at fully loaded cost. Error rate is the
        one that protects you, because an agent that saves eight hours and adds
        two errors a month has not saved anything. Cycle time is the one the rest
        of the business feels: a quote that goes out in two hours instead of two
        days changes the win rate, and that shows up in revenue rather than cost.
        Ban run counts and adoption scores from the report.
      </p>
      <p>
        <strong>Four: hold the agent to a promotion bar in writing.</strong>{" "}
        Before build, write the number the agent must hit to move from shadow
        mode to live. On rule shaped work with documentary evidence behind it I
        set 90 to 95 percent agreement with the human answer across two full
        cycles. On judgement adjacent work the bar is lower and the human review
        stays permanent. Writing the bar down in advance is what stops the
        conversation where a sponsor argues a 70 percent agent into production
        because the project has momentum.
      </p>
      <p>
        <strong>Five: report per process, per quarter, with the baseline
        attached.</strong> One page per agent: what it does, the four week
        baseline, the current three numbers, the all-in cost, and a keep, fix or
        kill line. Killing an agent is a normal outcome and a healthy one. Two of
        the first six agents I put into a mid size company got switched off
        inside a year, one because the underlying process was redesigned away and
        one because the maintenance exceeded the saving. Both were cheap lessons
        and both were only visible because the reporting was per process.
      </p>
      <p>
        On timing: for a well scoped back office process, expect six to nine
        months to payback, with the first two months returning nothing while the
        agent runs in shadow. On magnitude: 40 to 70 percent of the human hours
        in the process, not 90, because the exception handling is the slice you
        deliberately keep with a person. A good first process returns two to four
        times its cost in year one, and the second one is faster because the
        integration work is already paid for.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, every agent has a one page card and a monthly
        line in the management accounts. The card carries the baseline, the three
        numbers, and the cost. It sits in the same pack as headcount, and it gets
        the same treatment: if a line is not earning, it goes. That framing did
        more for adoption than any demo, because the operations director stopped
        seeing agents as an IT project happening to them and started seeing them
        as capacity they control.
      </p>
      <p>
        Twenty years in the C-suite and three exits taught me what a buyer does
        with claims like this. In diligence, an unaudited efficiency claim is
        worth nothing and can cost you, because the buyer discounts anything they
        cannot verify and then wonders what else was estimated. The company that
        can hand over a baseline, a cost line, and a per process result is
        describing a system. The company with a blended AI ROI percentage on one
        slide is describing a hope. One of those two positions survives a data
        room.
      </p>

      <h2>How long before an AI agent pays for itself?</h2>
      <p>
        Six to nine months for a single well scoped back office process. The
        first two months return nothing, because the agent runs in shadow mode
        against live data while a human still does the work and you compare the
        two answers. Months three and four are partial, with a person reviewing
        most outputs. Real return starts when review drops to exceptions only.
        Payback promised inside a quarter usually means the build cost was booked
        at zero or the thing being measured was a demo.
      </p>

      <h2>What is a realistic ROI number for AI agents?</h2>
      <p>
        On a single process, 40 to 70 percent of the human hours come out. Not 90
        percent, because exception handling is the part you keep with a person on
        purpose. Convert the hours at fully loaded cost, subtract build plus a
        running cost of 20 to 40 percent of build each year, and a good first
        process returns two to four times its cost in year one. Report it per
        process with the baseline attached. A single company wide percentage is a
        number nobody can audit.
      </p>

      <h2>Why do AI ROI numbers look good in the pilot and vanish in production?</h2>
      <p>
        Pilots measure the happy path. Production pays for the rest: messy
        inputs, exception handling, monitoring, retuning when an upstream system
        changes, and the review time of whoever signs the output. A pilot also
        runs with the builder watching, and nobody books those hours. Count all
        of it from day one, keep the baseline captured before the agent existed,
        and the production number becomes the only number anyone ever quoted.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies: pick the first process, capture
        the four week baseline before anything is built, write the promotion bar,
        then build and run the agents and report them per process next to
        headcount. Same discipline extends into pipeline, onboarding, and
        compliance evidence. If you have agents live and no baseline behind them,
        that is fixable in a month and it is worth doing before the next board
        pack. See{" "}
        <Link href="/services/ai-agent-operator/">how I work as an AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
