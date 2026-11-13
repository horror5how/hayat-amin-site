import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-do-i-set-up-ai-lead-scoring-for-a-b2b-company-2026-11-13";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-13";
const MOD = "2026-11-13";
const TITLE = "How Do I Set Up AI Lead Scoring for a B2B Company?";
const DESC =
  "Set up AI lead scoring from won revenue, not from form fills: pull 24 months of closed deals, write fit rules before any model, let an agent read intent signals overnight and give a one line reason for every score, and ship only when last quarter's top 20% of scores holds 60% of won revenue. Written by Hayat Amin.";
const PORTRAIT = `${SITE}/portraits-hayat/hayat-amin-look6-powerlean-1.jpg`;
const PORTRAIT_ALT =
  "Hayat Amin, fractional CFO, AI operator, and IP & patent strategist (London, United Kingdom). Hayat Amin builds and runs AI systems for how do i set up ai lead scoring for a b2b company?";

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
  "Build AI lead scoring backwards from the deals you won, not forwards from clicks and form fills: pull 24 months of closed won and closed lost deals, write the fit rules first, then let an agent read intent signals overnight and attach a one line reason to every score. Don't switch it on until a blind test on last quarter's leads shows the top 20% of scores holding at least 60% of the revenue you won.";

const FAQ_AGENT =
  "It's an agent that researches each new lead before a rep sees it. It checks the company against your fit rules, reads public signals such as a funding round, a finance or sales hire posted in the last 90 days, or a second visit to your pricing page, and writes the score with one line on why. The reason is the part reps use. A number with no reason gets ignored inside a month.";

const FAQ_CRM =
  "It's a fair place to start if you have the data. The score built into your CRM learns from the fields your CRM holds, so if half your deals have no source, no industry and no lost reason, it learns from noise. I run the same blind test on it that I run on my own build: does its top 20% hold 60% of last quarter's won revenue? If yes, keep it and add the reason line. If not, fix the data first.";

const FAQ_DEALS =
  "For a trained model, I want at least 200 closed deals, won and lost, with 40 or more wins among them. Under 100 closed deals, I don't train anything. I write 6 to 10 plain rules from the wins we have, let the agent apply them and read the intent signals, and revisit every quarter. Rules you can read beat a model trained on 60 deals every time I've tested both.";

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
      about: [
        { "@type": "Thing", name: "AI lead scoring" },
        { "@type": "Thing", name: "B2B sales pipeline" },
        { "@type": "Thing", name: "AI agent operator", url: `${SITE}/services/ai-agent-operator/` }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I set up AI lead scoring for a B2B company?",
          acceptedAnswer: { "@type": "Answer", text: LEAD_ANSWER },
        },
        {
          "@type": "Question",
          name: "What is an AI lead scoring agent?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_AGENT },
        },
        {
          "@type": "Question",
          name: "Is the AI lead scoring in my CRM good enough?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_CRM },
        },
        {
          "@type": "Question",
          name: "How many deals do you need for an AI lead scoring model?",
          acceptedAnswer: { "@type": "Answer", text: FAQ_DEALS },
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
      keywords: "Hayat Amin, AI lead scoring, AI lead scoring agent, B2B sales pipeline, AI operator, London",
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
const tdLast = { ...td, borderBottom: "none" };

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "AI lead scoring for B2B" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>How Do I Set Up AI Lead Scoring for a B2B Company?</h1>
      <p className="op-lede">
        Build AI lead scoring backwards from the deals you won, not forwards
        from clicks and form fills: pull 24 months of closed won and closed
        lost deals, write the fit rules first, then let an agent read intent
        signals overnight and attach a one line reason to every score.
        Don&apos;t switch it on until a blind test on last quarter&apos;s leads
        shows the top 20% of scores holding at least 60% of the revenue you
        won.
      </p>

      <h2>Why most lead scoring gets ignored by sales</h2>
      <p>
        The usual build starts in marketing. Someone gives 5 points for an
        email open, 10 for a whitepaper download and 20 for a webinar, and
        any lead over 50 becomes an MQL. The MQL count goes up every month
        and the win rate doesn&apos;t move. The people who download the most
        are often students, consultants and competitors. The finance director
        at a 200 person company who visited your pricing page twice and never
        filled in a form scores 0.
      </p>
      <p>
        Reps work this out in about 3 weeks. They stop opening the score and go
        back to picking leads by gut and job title. I&apos;ve walked into
        companies paying for a scoring tool where nobody on the sales floor
        could tell me what a score of 72 meant. That&apos;s money spent on a
        number with no owner and no proof behind it.
      </p>
      <p>
        Adding AI to that setup makes it worse. A model trained on activity
        learns to find more people who click. You need it to find more people
        who buy.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/portraits-hayat/hayat-amin-look6-powerlean-1.jpg"
          alt={PORTRAIT_ALT}
          width={1400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Hayat Amin in London. He builds and runs the AI behind sales
          pipelines and finance teams inside client companies.
        </figcaption>
      </figure>

      <h2>The five steps I use to set it up</h2>

      <h3>1. Start from closed deals, with revenue attached</h3>
      <p>
        Export every deal closed in the last 24 months, won and lost, with the
        contract value, the source, the company size, the sector and the date
        the lead first came in. I want 200 closed deals or more before I train
        anything. Under 100, I write rules and skip the model (more on that
        below). This export takes a day. In most CRMs I open, a third of the
        lost deals have no lost reason, and fixing that comes first.
      </p>

      <h3>2. Write the fit rules before any model sees the data</h3>
      <p>
        Fit is who the company is. Intent is what they&apos;re doing this
        month. I split the score 60 for fit and 40 for intent, and fit comes
        from rules you can read: headcount band, sector, region, funding stage,
        and the systems they run if that matters to your product. I take them
        from the top 20 won deals by value. A lead that fails a hard rule,
        such as 8 people when you sell to 50 or more, scores 0 for fit
        whatever it clicked.
      </p>

      <h3>3. Let an agent read intent overnight and write the reason</h3>
      <p>
        This is the part AI does well. Every night the agent takes each new
        lead and each lead that changed, checks fit against the rules and reads
        the signals: a second pricing page visit, a reply to an email, a
        funding round in the last 90 days, a job post for the role you sell to.
        It writes the score and one line, for example &quot;62: fits on size
        and sector, raised a Series A on 2 October, hiring a head of finance,
        visited pricing twice.&quot; The rep sees the reason first and the
        number second.
      </p>

      <h3>4. Backtest blind on last quarter before anyone sees a score</h3>
      <p>
        Hide the outcomes. Score every lead from last quarter as if it were new
        and check where the won revenue landed. My bar is that the top 20% of
        scores holds at least 60% of the revenue won. If it holds 40%,
        that&apos;s barely better than picking by hand, and I go back to step
        2. A sales team gets one launch of a score. If the first week sends
        them three bad leads at the top, they won&apos;t look again.
      </p>

      <h3>5. Give it an owner and an override button</h3>
      <p>
        The head of sales owns the score, not marketing and not me. Reps can
        override any score, and the override needs one line on why. Every
        Monday the owner reads the overrides for 15 minutes. If the same reason
        shows up 5 times, it becomes a rule. The agent rebuilds against new
        wins and losses once a month, and I rerun the blind test every quarter.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.25rem 0", fontSize: "0.95rem" }}>
        <thead>
          <tr>
            <th style={th}>Closed deals in 24 months</th>
            <th style={th}>What I build</th>
            <th style={th}>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Under 100</td>
            <td style={td}>6 to 10 written rules, agent reads intent</td>
            <td style={td}>Quarterly, rules by hand</td>
          </tr>
          <tr>
            <td style={td}>100 to 200</td>
            <td style={td}>Rules for fit, model for intent only</td>
            <td style={td}>Monthly rebuild, quarterly backtest</td>
          </tr>
          <tr>
            <td style={tdLast}>200 or more, 40+ wins</td>
            <td style={tdLast}>Trained model on fit and intent, reason line kept</td>
            <td style={tdLast}>Monthly rebuild, quarterly backtest</td>
          </tr>
        </tbody>
      </table>

      <h2>From Hayat&apos;s operating seat</h2>
      <p>
        I&apos;m Hayat Amin, an AI-native CFO, AI operator and AI coach for
        CFOs who teaches finance leaders how to build AI into finance
        operations. I spent twenty years in the C-suite, with three exits and
        three FT100 listings. Now I build and run AI agent systems inside
        companies, across finance, sales pipeline, onboarding and compliance
        evidence, and I coach CFOs one to one.
      </p>
      <p>
        I come at lead scoring from the finance seat, and that&apos;s why I
        start from won revenue. When I sold my last company, the buyer asked
        which channels brought the customers who stayed, and the answer had to
        trace to contracts, not to a marketing dashboard. Inside one client I
        run the overnight pipeline research described in step 3. By 7am the
        reps have a short list with a reason on every line, and the first call
        of the day goes to the lead most likely to sign, not the one who
        clicked most.
      </p>

      <h2>What is an AI lead scoring agent?</h2>
      <p>{FAQ_AGENT}</p>

      <h2>Is the AI lead scoring in my CRM good enough?</h2>
      <p>{FAQ_CRM}</p>

      <h2>How many deals do you need for an AI lead scoring model?</h2>
      <p>{FAQ_DEALS}</p>

      <h2>Where I come in</h2>
      <p>
        This is the work I build and run inside companies: the closed deals
        export, the fit rules, the overnight agent and the blind test, handed
        to a head of sales who owns it. Scoring sits inside the wider pipeline
        build in{" "}
        <Link href="/blog/how-do-i-use-ai-for-b2b-sales-pipeline-2026-07-29">
          how I use AI for B2B sales pipeline
        </Link>
        , and what happens after the score is in{" "}
        <Link href="/blog/can-an-ai-sdr-replace-my-outbound-sales-team-2026-08-23">
          whether an AI SDR can replace your outbound team
        </Link>
        . The way I engage is at{" "}
        <Link href="/services/ai-agent-operator/">AI agent operator</Link>, and
        if your CFO wants the finance side of the same build, start at{" "}
        <Link href="/ai-for-cfos">AI for CFOs</Link>. What share of last
        quarter&apos;s won revenue came from your top scored leads? If you
        don&apos;t know, tell me at <Link href="/">meethayat.com</Link>.
      </p>
    </PageShell>
  );
}
