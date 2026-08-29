import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-make-cold-outreach-work-with-ai-in-2026-2026-08-29";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-08-29";
const MOD = "2026-08-29";
const TITLE = "How Do I Make Cold Outreach Work With AI in 2026?";
const DESC =
  "Point AI at research and targeting, keep it away from the writing. Volume is now the thing that kills you, because every inbox you want is already full of the same generated paragraph. The operating model that still books meetings, and the numbers to run it on.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look5-sidelight-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for how do i make cold outreach work with ai in 2026";

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
  "Use AI for the research and the targeting, and keep it out of the sentences. The channel still works, but the thing that used to make it work, sending more, is now the thing that breaks it, because every inbox you want to reach is already receiving the same generated paragraph from nine other companies this week. What books meetings in 2026 is a smaller list, a real reason you are writing to that specific company, and a human voice on top of research a person could not have done at that speed on their own.";

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
          name: "How do I make cold outreach work with AI in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What is a good reply rate for AI assisted cold email?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reply rate is the wrong number to manage, because it rewards the thing that is easiest to game. A cheap trick lifts replies and books nothing. Manage two numbers instead: meetings held per hundred contacted, and the share of those meetings that reach a second conversation. Set a floor before you start rather than after, so the result cannot be rationalised. Then read the negative replies, since a wrong-person reply is a targeting fault, a wrong-problem reply is a message fault, and an irritated reply means your volume has outrun your research. Those three tell you what to fix. A single blended percentage tells you nothing.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI personalisation actually improve cold email replies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Personalised research does. Personalised sentences do not, and by now they cost you, because a buyer has read the opener that compliments their recent post enough times to recognise the machine behind it. The distinction is what the personalisation is made of. A line assembled from a job title and a company description is decoration. A line built from a fact that took real work to find, such as what they published, hired for, filed, or announced, plus a specific consequence for them, is a reason to reply. Use AI to find the fact at scale. Write the sentence yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Should I hire an agency or run AI outbound in-house?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run the first version in-house, always, even badly. Outbound is where you learn what your market actually objects to, and handing that to an agency in month one means paying to have your own market research done somewhere you cannot hear it. The rule I use with clients is that nobody outsources a channel they have not personally made work at small scale. Once you know the segment, the message, and the objections, an agency can add volume to a machine that already runs. Give it to them before that and you are buying an expensive version of the generic sequence your buyers are already deleting.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption:
        "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates)",
      name: "Hayat Amin, Dubai",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, AI cold outreach, cold email 2026, AI SDR, B2B pipeline, outbound sales, AI agents, AI operator, Dubai",
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
      <h1>How Do I Make Cold Outreach Work With AI in 2026?</h1>
      <p className="op-lede">
        Use AI for the research and the targeting, and keep it out of the
        sentences. The channel still works, but the thing that used to make it
        work, sending more, is now the thing that breaks it, because every inbox
        you want to reach is already receiving the same generated paragraph from
        nine other companies this week. What books meetings in 2026 is a smaller
        list, a real reason you are writing to that specific company, and a
        human voice on top of research a person could not have done at that
        speed on their own.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        The mistake is pointing AI at the cheapest part of the job. Writing was
        never the bottleneck in outbound. Knowing who to write to, and why now,
        was the bottleneck, and it was expensive enough that most teams skipped
        it and sent volume instead. AI made the writing free, so teams did more
        of the thing that was already the least valuable, and the market
        responded the way a market always does when supply goes up: the price of
        attention collapsed. A generated opener is now a signal to delete, not a
        reason to read.
      </p>
      <p>
        The second mistake is scaling before the message is proven. A sequence
        that books nothing at fifty contacts books nothing at five thousand, and
        the only thing the extra volume buys you is a burned domain, a segment
        that recognises your name for the wrong reason, and a spend line with no
        pipeline against it. Prove it small. If you cannot get a meeting out of
        a hundred contacts you chose by hand, the fault is the offer or the
        list, and more sending will not find it for you.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look5-sidelight-1.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds and runs the AI systems behind finance,
          pipeline, and operations inside companies in London, NYC, and Dubai.
        </figcaption>
      </figure>

      <h2>The framework I use with clients</h2>
      <p>
        Five steps, in this order. The order matters more than any tool choice,
        because every step below depends on the one above it being true.
      </p>
      <p>
        <strong>One: draw the list by trigger, not by title.</strong> A job
        title tells you someone could buy. A trigger tells you they might buy
        this quarter. Pick two or three events that mean your problem just got
        expensive for them: a funding round, a named hire into the function you
        sell to, a new market or office, a filing, a product launch, a public
        complaint about the thing you fix. This is where AI earns its place,
        because monitoring a few hundred companies for those events every night
        is exactly the work no human does consistently. Aim for a list in the
        low hundreds per segment. If your list is in the thousands, you have
        gone back to titles without noticing.
      </p>
      <p>
        <strong>Two: research before you write, one page per account.</strong>{" "}
        For each company, hold three things: what changed, what it plausibly
        costs them, and one specific person it lands on. An agent can assemble
        that overnight from their site, their careers page, their filings, their
        announcements, and what they publish. Read the page before it goes
        anywhere. Research you have not read is not research, it is a
        liability, and the first time an agent asserts a fact about a company
        that is not true and you send it, that relationship is finished.
      </p>
      <p>
        <strong>Three: write the message yourself.</strong> Four to six
        sentences. The trigger, the consequence you think it has for them, one
        line of evidence you have solved it before, and a small ask. No opener
        that compliments them. No paragraph about your company. If the first
        sentence could be sent to any company in your list without editing, cut
        it and start at the fact. This step stays human not for sentiment but
        because it is the only part a buyer can use to tell you apart from the
        nine other emails, and that judgement is the whole product.
      </p>
      <p>
        <strong>Four: set the numbers before you send, not after.</strong> Three
        of them. Contacts per week per sender, kept low enough that every one
        gets its research page. Meetings held per hundred contacted, which is
        your one real quality measure. And a kill date, a fixed point at which a
        segment that has not produced a meeting is dropped rather than
        explained. Run each variant for at least two hundred contacts before
        judging it, because below that you are reading noise and calling it
        insight. Written down in advance, these numbers make the decision for
        you. Written down afterwards, they become the argument for continuing.
      </p>
      <p>
        <strong>Five: put the reply loop back into the list.</strong> Every
        negative reply is data, and most teams throw it away. Sort them into
        three bins: wrong person, wrong problem, wrong timing. Wrong person
        means your trigger is selecting the wrong role, so fix step one. Wrong
        problem means the consequence you asserted is not one they feel, so fix
        step three. Wrong timing is the valuable one, because it is a qualified
        buyer who has told you when to come back, and that belongs in a dated
        list rather than in a sequence. Do this weekly and the machine gets
        sharper. Skip it and you are running the same wrong sequence with better
        tooling.
      </p>
      <p>
        On sequencing, expect eight to twelve weeks before a segment tells you
        the truth, because the first four are you finding out your list was
        wrong. Budget for that up front, or you will kill a working channel in
        week three.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Twenty years in the C-suite means I have been on the receiving end of
        this for a long time, and I can tell you what happens to a generated
        email at a CEO desk. It is not read and rejected. It is pattern matched
        and deleted in under a second, in a batch, alongside the other eleven.
        The ones I open are the ones where the first line contains a fact about
        my company that took someone effort to find. That is the entire
        difference, and it has not changed since before any of this tooling
        existed. What changed is that the effort can now be manufactured, and
        most people manufacture the wrong half of it.
      </p>
      <p>
        Inside one client I run, the research runs overnight against a few
        hundred accounts and lands in the morning as one page per company, with
        the trigger, the likely cost, and the person named. Nobody sends
        anything from it automatically. A human reads the page, bins the ones
        where the trigger is thin, and writes the message. The agents do the
        work that used to be impossible at that scale and the human does the
        work that was always the point. That split is the whole design, and it
        is the same split I would use whether the function is pipeline,
        onboarding, or a month end close.
      </p>

      <h2>What is a good reply rate for AI assisted cold email?</h2>
      <p>
        Reply rate is the wrong number to manage, because it rewards what is
        easiest to game. A cheap subject line lifts replies and books nothing.
        Manage meetings held per hundred contacted, and the share of those that
        reach a second conversation. Set the floor before you start, so the
        result cannot be rationalised afterwards. Then read the negative
        replies, because a wrong-person reply is a targeting fault, a
        wrong-problem reply is a message fault, and an irritated reply means
        volume has outrun research.
      </p>

      <h2>Does AI personalisation actually improve cold email replies?</h2>
      <p>
        Personalised research does. Personalised sentences do not, and by now
        they cost you, because your buyer has seen the opener that compliments
        their recent post often enough to recognise the machine behind it. The
        distinction is what the personalisation is made of. A line assembled
        from a job title and a company description is decoration. A line built
        from a fact that took work to find, plus a specific consequence for
        them, is a reason to reply. Find the fact with AI. Write the sentence
        yourself.
      </p>

      <h2>Should I hire an agency or run AI outbound in-house?</h2>
      <p>
        Run the first version in-house, even badly. Outbound is where you learn
        what your market objects to, and handing that out in month one means
        paying someone else to hear your own market research. Nobody should
        outsource a channel they have not personally made work at small scale.
        Once you know the segment, the message, and the objections, an agency
        can add volume to a machine that already runs. Before that, you are
        buying an expensive version of the generic sequence your buyers already
        delete.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is the work I do inside companies. I build and run the agents
        behind pipeline, finance, onboarding, and compliance evidence, and in
        outbound that means the research engine runs every night while the
        judgement stays with a person whose name is on the message. If you have
        a team sending more and booking less, the fix is almost never a better
        tool, it is moving the AI off the writing and onto the part of the job
        nobody has time to do properly. See{" "}
        <Link href="/services/ai-agent-operator/">how I work as an AI agent
        operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
