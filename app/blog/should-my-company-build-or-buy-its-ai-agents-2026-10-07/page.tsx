import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "should-my-company-build-or-buy-its-ai-agents-2026-10-07";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-07";
const MOD = "2026-10-07";
const TITLE = "Should My Company Build or Buy Its AI Agents?";
const DESC =
  "Buy the AI for any process that runs the same way in every company. Build your own agents, on a bought model, for the 1 to 3 processes where your rules or your data are the reason you win. For most 30 to 500 person companies that means buying about 4 in 5 and building the rest.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-expression-crop-one-pic-to-use-3.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (Dubai, United Arab Emirates). Hayat Amin builds and runs AI systems for should my company build or buy its ai agents";

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
  "Buy the AI for every process that runs the same way in every company, like receipt capture, meeting notes, support triage and invoice reading, and build your own agents only for the 1 to 3 processes where your rules, your data or your customers are the reason you win. Build means your own agent on a model you rent from Anthropic or OpenAI, owned by a named person inside the company, and for most 30 to 500 person companies it ends up as about 4 processes bought for every 1 built.";

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
          name: "Should my company build or buy its AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: LEAD_ANSWER,
          },
        },
        {
          "@type": "Question",
          name: "What does it cost to build an AI agent in house?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In my builds, one agent for one process takes 4 to 8 weeks to reach production, including 2 to 4 weeks running in shadow next to the people who do the work today. After that it needs 2 to 4 hours a week from the person who owns it. The model bill is the small line. The owner's time is the big one, so price that before you price the software.",
          },
        },
        {
          "@type": "Question",
          name: "Build vs buy AI talent: should I hire an AI team or bring in an operator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hire a team once you have 3 or more agents live and a list of the next 5. Before that, an in house team has nothing to run and spends its first 6 months choosing tools. I'd bring in an operator, fractional, to build the first 2 or 3 agents and hire the person who'll own them, then hand over with a runbook for each one.",
          },
        },
        {
          "@type": "Question",
          name: "Do I own an AI agent if it runs on someone else's model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You own what matters: the instructions, the rules, the tests, the connections to your systems and the record of every decision it made. The model underneath is rented and swappable. I write every agent so the model can be changed in a day. If a supplier holds your rules and your logs, you've bought a tool, whatever the contract calls it.",
          },
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#portrait`,
      url: PORTRAIT,
      contentUrl: PORTRAIT,
      caption: PORTRAIT_ALT,
      name: "Hayat Amin, Dubai",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords: "Hayat Amin, build vs buy AI, build or buy AI agents, build vs buy AI framework, AI agents for business, AI operator, Dubai",
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
        { label: "Should My Company Build or Buy Its AI Agents?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>Should My Company Build or Buy Its AI Agents?</h1>
      <p className="op-lede">
        Buy the AI for every process that runs the same way in every company,
        like receipt capture, meeting notes, support triage and invoice reading,
        and build your own agents only for the 1 to 3 processes where your
        rules, your data or your customers are the reason you win. Build means
        your own agent on a model you rent from Anthropic or OpenAI, owned by a
        named person inside the company, and for most 30 to 500 person companies
        it ends up as about 4 processes bought for every 1 built.
      </p>

      <h2>Why companies get this wrong</h2>
      <p>
        Most companies make the call once, for the whole company, in a board
        meeting. Then they get one of two bad outcomes.
      </p>
      <p>
        The first is buying a tool per department. Sales buys one, finance buys
        one, support buys one, HR buys two. A year later I usually find 8 to 12
        AI subscriptions, each holding a slice of the company's data, none of
        them talking to each other. The CEO still can't get a straight answer to
        which customers are profitable, because that question crosses four of
        those tools.
      </p>
      <p>
        The second is building everything. A CTO hires two engineers and spends
        9 months rebuilding meeting notes and invoice reading, which you could
        rent for less per month than one engineer's day rate. The process that
        would have moved the numbers, say pricing approvals or the cash
        forecast, is still on the list for next quarter.
      </p>
      <p>
        I make the call one process at a time. Do that and most of the argument
        goes away.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-expression-crop-one-pic-to-use-3.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in Dubai. He builds and runs the AI systems behind finance
          and operations inside companies in London, NYC and Dubai.
        </figcaption>
      </figure>

      <h2>The four questions I ask about each process</h2>
      <p>
        I list every process a client wants to hand to AI, usually 15 to 30 of
        them, and put each one through the same four questions. It takes about
        a day. Here's where the answers usually land.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>What the process looks like</th>
            <th style={th}>Call</th>
            <th style={th}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Runs the same way in every company</td>
            <td style={td}>Buy</td>
            <td style={td}>Receipt capture, meeting notes, support triage, invoice reading</td>
          </tr>
          <tr>
            <td style={td}>Runs on your own rules or data</td>
            <td style={td}>Build</td>
            <td style={td}>Pricing approvals, credit decisions, deal scoring, cash forecast</td>
          </tr>
          <tr>
            <td style={td}>Crosses 3 or more systems</td>
            <td style={td}>Build the agent, buy the parts</td>
            <td style={td}>Month end close, customer onboarding, compliance evidence</td>
          </tr>
          <tr>
            <td style={td}>Nobody inside can own it</td>
            <td style={td}>Buy, or wait</td>
            <td style={{ ...td, borderBottom: "none" }}>Anything without a named owner on day one</td>
          </tr>
        </tbody>
      </table>

      <h3>1. Would a competitor run this process the same way?</h3>
      <p>
        If yes, buy. Your expense receipts aren't why customers pick you. A
        supplier who serves 10,000 companies will keep that tool better than
        you will, and you get every improvement for free. I don't spend a week
        of build time on anything a competitor would do identically.
      </p>
      <h3>2. Does it run on rules or data only you have?</h3>
      <p>
        If yes, build. Your discount rules, how you score a deal, which
        customers get credit and on what terms: that's where a company makes or
        loses its margin. A bought tool makes you fit its idea of the process.
        Your own agent follows yours, and you can change the rule on a Tuesday
        without raising a ticket with a supplier.
      </p>
      <h3>3. Does it cross 3 or more systems?</h3>
      <p>
        Then build the agent that does the work and buy the parts it uses. The
        close is the clearest case. It touches the bank, the billing system,
        the ledger and the payroll export. No single bought tool sees all four,
        so you end up with a person copying between them. I build one agent
        that reads all four and buy the pieces that are the same everywhere,
        like bank feeds and invoice reading.
      </p>
      <h3>4. Who owns it on day 300?</h3>
      <p>
        Every agent you build needs a named person who spends 2 to 4 hours a
        week keeping it right. If nobody inside can take that, buy the process
        or leave it alone for now. A built agent with no owner drifts within a
        quarter, and it's worse than a bought tool with no owner, because
        nobody outside is maintaining it either.
      </p>
      <h3>5. Look at the list again every 6 months</h3>
      <p>
        What you built last year might be a product this year. When a supplier
        does a process well enough, I switch the client over and move the build
        time to the next process that matters. Nothing on the built list is
        permanent. The only things that stay built are the ones a competitor
        couldn't copy.
      </p>

      <h2>What build actually means in 2026</h2>
      <p>
        Nobody I work with trains their own model. Build means writing your own
        agent: its instructions, its rules, its tests, its connections into your
        systems and the log of everything it decides. The model underneath is
        rented from Anthropic or OpenAI and can be swapped. I write every agent
        so the model can change in a day, because prices and quality move every
        few months.
      </p>
      <p>
        This matters for valuation. A buyer doing diligence doesn't give you
        credit for 12 AI subscriptions. Anyone can buy those the week after
        completion. They will look hard at a pricing agent that has run on your
        rules for 18 months, with a log of every decision and a person who runs
        it. That's an asset, and it's yours.
      </p>

      <h2>From my operating seat</h2>
      <p>
        Inside one client I run, the cash runway is live every morning. I built
        that agent, because the forecast depends on how they bill, when their
        biggest customers pay and which costs move with headcount. No bought
        tool knew those rules. The receipt capture and bank feeds underneath it
        are bought, and I'd never build them. Building the first version took
        about 6 weeks, and the finance lead owns it now.
      </p>
      <p>
        I've spent twenty years in the C-suite, with three exits and three FT100
        listings. In every sale the buyer asked the same thing about our
        systems: what do you own, and what could we just buy? The companies
        that sold well had a short, clear answer to the first half of that
        question. With AI agents, I'd want that answer ready before anyone asks.
      </p>

      <h2>What does it cost to build an AI agent in house?</h2>
      <p>
        In my builds, one agent for one process takes 4 to 8 weeks to reach
        production, including 2 to 4 weeks running in shadow next to the people
        who do the work today. After that it needs 2 to 4 hours a week from the
        person who owns it. The model bill is the small line. The owner's time
        is the big one, so price that before you price the software.
      </p>

      <h2>Build vs buy AI talent: should I hire an AI team or bring in an operator?</h2>
      <p>
        Hire a team once you have 3 or more agents live and a list of the next
        5. Before that, an in house team has nothing to run and spends its
        first 6 months choosing tools. I'd bring in an operator, fractional, to
        build the first 2 or 3 agents and hire the person who'll own them, then
        hand over with a runbook for each one.
      </p>

      <h2>Do I own an AI agent if it runs on someone else's model?</h2>
      <p>
        You own what matters: the instructions, the rules, the tests, the
        connections to your systems and the record of every decision it made.
        The model underneath is rented and swappable. I write every agent so the
        model can be changed in a day. If a supplier holds your rules and your
        logs, you've bought a tool, whatever the contract calls it.
      </p>

      <h2>Where I come in</h2>
      <p>
        This is what I do inside companies. I sit down with your leadership
        team, sort every process into buy or build in a day, build the 1 to 3
        agents that run on your own rules, and hand each one to a named owner
        with a runbook. I do it with the exit in mind, so what you build shows
        up as something a buyer pays for. Which of your processes would a
        competitor run exactly the way you do? See{" "}
        <Link href="/services/fractional-cfo/">how I work as a fractional CFO
        and AI operator</Link>, or start at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
