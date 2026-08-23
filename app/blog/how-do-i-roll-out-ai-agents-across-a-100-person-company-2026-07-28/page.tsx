import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-roll-out-ai-agents-across-a-100-person-company-2026-07-28";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-07-28";
const MOD = "2026-08-19";
const TITLE = "How Do I Roll Out AI Agents Across a 100-Person Company?";
const DESC =
  "Roll out one function at a time behind a named owner, not company-wide behind a memo. One team, one agent in production, published before and after numbers, then let the next team ask for theirs. Expect 9 to 12 months to cover a 100-person company.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-expression-crop-one-pic-to-use-4.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin advises founders on how to roll out ai agents across a 100-person company.";

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
  "Roll it out one function at a time behind a named owner, not company-wide behind a memo. Put one agent into production in one team, publish the before and after numbers on an internal page everyone can read, then let the next function come and ask for theirs. On a 100-person company that sequence takes 9 to 12 months to cover the whole business, and the rate limit is never the model. It is how fast each function can document its own process and give an agent access to its systems. Companies that announce a company-wide AI programme on day one end up with 14 half-built pilots and no owner for any of them.";

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
          name: "How do I roll out AI agents across a 100-person company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "How much should a mid-size company spend on AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budget 1 to 2 percent of revenue in year one, and expect roughly 70 percent of it to go on people and process rather than tokens. For a 20 million dollar revenue company that is 200,000 to 400,000 US dollars covering one internal owner, two to four agent builds at 20,000 to 40,000 dollars each, tool subscriptions, and running cost. Model and token spend on a first agent usually lands between 400 and 1,500 dollars a month, which is smaller than most CEOs expect and smaller than the cost of the person who has to document the process.",
          },
        },
        {
          "@type": "Question",
          name: "Why do employees resist AI adoption?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because nobody has told them what happens to their job, and silence reads as a threat. Resistance almost always shows up as slow cooperation rather than open refusal: the process document never gets finished, the system access never gets approved, the exceptions list keeps growing. The fix is a written commitment from the CEO on what the agent takes over and what the person is expected to do with the time it gives back, said before the first build starts, not after.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an AI usage policy before rolling out agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it should fit on two pages before the first agent goes live. Cover four things: which data classes may leave your systems, which vendors are approved, which decisions always need a named human sign-off, and where agent activity gets logged. Two pages written in week one prevents the 40-page retrofit an enterprise customer or an acquirer will ask for in year two, and it is the first document a buyer requests when AI shows up in diligence.",
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
      keywords: "Hayat Amin, AI rollout, AI agents, AI adoption, change management, AI governance, AI policy, operational excellence, London",
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
        { label: "How Do I Roll Out AI Agents Across a 100-Person Company?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Roll Out AI Agents Across a 100-Person Company?</h1>
      <p className="op-lede">
        Roll it out one function at a time behind a named owner, not
        company-wide behind a memo. Put one agent into production in one team,
        publish the before and after numbers on an internal page everyone can
        read, then let the next function come and ask for theirs. On a 100-person
        company that sequence takes 9 to 12 months to cover the whole business,
        and the rate limit is never the model. It is how fast each function can
        document its own process and give an agent access to its systems.
        Companies that announce a company-wide AI programme on day one end up
        with 14 half-built pilots and no owner for any of them.
      </p>

      <h2>Why CEOs get this wrong</h2>
      <p>
        The usual mistake is treating this as a technology rollout instead of an
        operating change. The CEO buys a platform, sends an all-hands email,
        gives every department a licence, and asks each head of function to come
        back with ideas. Two months later there are 14 experiments, none in
        production, and the loudest voice in the room is the one saying the tool
        does not work.
      </p>
      <p>
        The failure rate is public now. MIT put the share of corporate AI pilots
        that produce no measurable financial return at around 95 percent, and my
        own read of the ones I have inherited matches it. Almost none of them
        failed on model quality. They failed because no single person owned the
        outcome, the process was never written down, and the agent never got
        write access to the system it was supposed to update. A 100-person
        company has maybe six functions worth automating. Attacking all six at
        once means none of them gets the 40 hours of documentation work that
        makes an agent possible.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-expression-crop-one-pic-to-use-4.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and rolls out AI agent systems for
          founders and CEOs across NYC, London, and Dubai.
        </figcaption>
      </figure>

      <h2>The rollout sequence I use with clients</h2>
      <p>
        Five steps, in this order. Each one has a gate. Nothing moves to the next
        function until the gate is cleared.
      </p>
      <ol>
        <li>
          <strong>Name one owner and give them 20 percent of their week.</strong>{" "}
          One person, already inside the business, already trusted by the
          function heads. Not a committee, not the CTO as a side project, not a
          consultancy. On a 100-person company this is usually a senior operator
          in finance or operations. If nobody has 8 hours a week to give, the
          company is not ready and the honest answer is to wait a quarter.
        </li>
        <li>
          <strong>Ship one agent in one function, end to end.</strong> Pick the
          function with the most repetitive volume and the most cooperative head,
          in that order. Six to ten weeks from brief to production. The point of
          the first agent is not the saving. It is the proof that this company can
          take one from idea to live, which is the thing nobody in the building
          currently believes.
        </li>
        <li>
          <strong>Publish the numbers internally within a week of go-live.</strong>{" "}
          One internal page: runs per month before and after, minutes per run
          before and after, error rate before and after, build cost, running
          cost. Anyone in the company can open it. This page does more for
          adoption than any training programme, because it turns the argument from
          opinion into arithmetic.
        </li>
        <li>
          <strong>Make the next function apply, do not assign it.</strong> Pull
          beats push every time. A function that asks for an agent will write its
          own process document. A function that gets handed one will not. Set a
          low bar to apply: a one-page description of the process, the monthly
          run count, and a named person in their team who owns the handover.
        </li>
        <li>
          <strong>Write the two-page policy before agent number three.</strong>{" "}
          Which data may leave your systems, which vendors are approved, which
          decisions always need a human signature, where every agent action gets
          logged. Two pages, written early, saves the 40-page retrofit that an
          enterprise customer or an acquirer will demand later.
        </li>
      </ol>
      <table className="op-table">
        <thead>
          <tr><th>Stage</th><th>Timeline</th><th>Gate to pass</th></tr>
        </thead>
        <tbody>
          <tr><td>Owner named, first function chosen</td><td>Weeks 1 to 2</td><td>Owner has 8 hours a week ring-fenced</td></tr>
          <tr><td>First agent built and tested</td><td>Weeks 3 to 8</td><td>Agreement with humans above 95 percent on historical cases</td></tr>
          <tr><td>Shadow mode, human approves</td><td>Weeks 9 to 10</td><td>10 straight working days above 95 percent</td></tr>
          <tr><td>Live, numbers published internally</td><td>Weeks 11 to 12</td><td>Before and after page is open to all staff</td></tr>
          <tr><td>Functions two and three apply</td><td>Months 4 to 7</td><td>Each submits a one-page process doc first</td></tr>
          <tr><td>Policy, logging, and access review</td><td>Month 6 onward</td><td>Two-page policy signed by the CEO</td></tr>
          <tr><td>Remaining functions</td><td>Months 8 to 12</td><td>Owner role now a permanent part of someone job</td></tr>
        </tbody>
      </table>

      <h2>From my operating seat</h2>
      <p>
        I sit inside companies as a fractional CFO and AI operator, so I get
        handed the rollout after the first attempt has already stalled. At a
        110-person client last year there were nine live tool subscriptions,
        about 4,000 US dollars a month going out, and zero agents in production.
        We cancelled six of the subscriptions, named one operations lead, and put
        everything behind a single agent in finance: 1,100 supplier invoices a
        month, roughly 3 minutes each, coded by hand. Live in eight weeks, about
        55 hours a month back, error rate from 5 percent to under 1. The
        difference between that quarter and the previous nine months was not
        better technology. It was one person whose bonus depended on it working.
      </p>
      <p>
        The second thing I insist on is publishing the numbers internally, and it
        is the step CEOs resist most because the first agent rarely saves
        headline money. Publish it anyway. When the sales team read that finance
        got 55 hours a month back on a 22,000 dollar build, they wrote their own
        process document without being asked. I have scaled a company 6x and sold
        three, and in every one of them the internal scoreboard moved behaviour
        faster than the internal memo. People argue with a memo. Nobody argues
        with a number their own colleague signed off.
      </p>

      <h2>How much should a mid-size company spend on AI?</h2>
      <p>
        Budget 1 to 2 percent of revenue in year one, and expect around 70
        percent of it to go on people and process rather than tokens. For a 20
        million dollar revenue company that is 200,000 to 400,000 US dollars,
        covering one internal owner, two to four agent builds at 20,000 to 40,000
        dollars each, subscriptions, and running cost. Token and model spend on a
        first agent usually lands between 400 and 1,500 dollars a month, which is
        smaller than most CEOs expect and far smaller than the cost of the person
        documenting the process.
      </p>

      <h2>Why do employees resist AI adoption?</h2>
      <p>
        Because nobody has told them what happens to their job, and silence reads
        as a threat. Resistance rarely arrives as open refusal. It shows up as
        slow cooperation: the process document never gets finished, system access
        never gets approved, the exceptions list keeps growing. Fix it with a
        written commitment from the CEO on what the agent takes over and what the
        person does with the hours it gives back, said before the first build
        starts rather than after the first redundancy rumour.
      </p>

      <h2>Do I need an AI usage policy before rolling out agents?</h2>
      <p>
        Yes, and two pages is enough before the first agent goes live. Cover four
        things: which data classes may leave your systems, which vendors are
        approved, which decisions always need a named human sign-off, and where
        agent activity gets logged. Two pages in week one prevents the 40-page
        retrofit an enterprise customer or an acquirer will ask for in year two.
        It is also the first document a buyer requests once AI shows up in
        diligence.
      </p>

      <div className="op-cta-block">
        <h2>One owner, one agent, one published number</h2>
        <p>
          This is the exact problem I work on with CEOs: naming the owner,
          choosing the first function, getting one agent into production, and
          publishing the numbers that make the next four rollouts easy. Do it in
          that order and a 100-person company is covered inside a year. Do it as
          a company-wide announcement and you get 14 pilots and a team that
          believes AI does not work here. See more about{" "}
          <Link href="/services/ai-agent-operator/">how I work as an AI agent operator</Link> or{" "}
          <Link href="/contact">book a call</Link>.
        </p>
        <Link href="/contact">Book a call →</Link>
      </div>

      <p className="op-byline">
        <em>About this article:</em> Written by{" "}
        <Link href="/author/hayat-amin">Hayat Amin</Link>, fractional CFO, AI
        agent operator, and IP &amp; data strategist with three exits. Last
        updated {MOD}.
      </p>
    </PageShell>
  );
}
