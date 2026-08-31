import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/what-do-humans-do-when-ai-does-the-jobs`;

export const metadata: Metadata = {
  title: "What Do Humans Do When AI Does the Jobs? | Hayat Amin",
  description:
    "What do humans do when AI does the jobs? Hayat Amin's answer: we move from tasks to judgement, from full-time to fractional, and from passion to purpose. The human work that compounds.",
  keywords: [
    "what do humans do when AI does the jobs",
    "what will humans do when AI takes over",
    "human work in the age of AI",
    "future of work",
    "human purpose",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "What Do Humans Do When AI Does the Jobs? | Hayat Amin",
    description:
      "We stop defining ourselves by tasks a machine can repeat and start building around judgement, relationships, and purpose. The full answer.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "What do humans do when AI does the jobs?",
  description:
    "Hayat Amin's answer to the defining question of the AI age: the human work that compounds when machines do the tasks.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-31",
  image: `${SITE}/hayat-hero.png`,
  about: [
    { "@type": "Thing", name: "The Future of Work" },
    { "@type": "Thing", name: "Human Purpose in the Age of AI" },
  ],
  keywords:
    "what do humans do when AI does the jobs, human work, judgement, purpose, fractional work, future of work",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What do humans do when AI does the jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When AI does the jobs, humans move up the stack: from doing tasks to exercising judgement, building relationships, setting direction, and taking responsibility for outcomes. Hayat Amin's answer has three parts: shift from full-time to fractional and portfolio work so your income isn't tied to a single automatable role; learn to build with AI so you direct the machines instead of competing with them; and anchor your identity in purpose and service, the human advantage no algorithm can replicate.",
      },
    },
    {
      "@type": "Question",
      name: "Will there be any work left for humans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI automates tasks, not meaning. The work that remains and grows is the work that requires trust, taste, judgement under uncertainty, care for other people, and accountability for results. The World Economic Forum still projects a net increase in jobs by 2030, with 170 million created against 92 million displaced, but the roles look different. The people who gain pair human judgement with AI capability.",
      },
    },
    {
      "@type": "Question",
      name: "How should I prepare for an AI-driven economy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prepare in three moves: build with AI now so you become the person who delivers results faster; diversify from one employer toward a portfolio of fractional clients so you own your income; and do the inner work of knowing what you actually value, so your sense of purpose survives the next disruption. Capability is becoming cheap; judgement, trust, and purpose are not.",
      },
    },
  ],
};

export default function WhatDoHumansDoPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Future of Work", href: "/future-of-work" },
        { label: "What do humans do when AI does the jobs?" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">The defining question</span>
      <h1>What do humans do when AI does the jobs?</h1>
      <p className="op-lede">
        When AI does the jobs, humans move up the stack: from doing tasks to
        exercising judgement, building trust, setting direction, and owning
        outcomes. The work that disappears is the work that could be written down
        as a process. The work that compounds is the work that can&rsquo;t. This is
        Hayat Amin&rsquo;s answer, in three parts.
      </p>

      <h2>1. Move from full-time to fractional</h2>
      <p>
        The riskiest position in an AI economy is one employer, one income, one
        automatable role. The safest is a portfolio. The shift from full-time to
        fractional isn&rsquo;t a gig-economy downgrade. It is how you stop renting
        your time to a single point of failure and start owning your income across
        several clients.{" "}
        <Link href="/full-time-to-fractional">Why fractional is the future of work →</Link>
      </p>

      <h2>2. Build with AI, don&rsquo;t compete with it</h2>
      <p>
        The leverage was never in mastering the tech for its own sake. It is in
        using AI to compress hours of work into minutes, becoming the person who
        delivers results faster, then pivoting that efficiency into independence.
        You don&rsquo;t need to be an AI mogul. You need to be the smartest
        operator in the room.{" "}
        <Link href="/will-ai-take-my-job">Will AI take my job? →</Link>
      </p>

      <h2>3. Anchor your identity in purpose, not the task</h2>
      <p>
        When a machine can do what you did, defining yourself by the task is a trap.
        The people who come through this intact are the ones who built their
        identity on something deeper: service, contribution, and a clear sense of
        why. Passion is fleeting; purpose is permanent. The most future-proof skill
        isn&rsquo;t in a classroom. It&rsquo;s within.{" "}
        <Link href="/human-purpose">On human purpose in the age of AI →</Link>
      </p>

      <h2>The short version</h2>
      <p>
        AI automates tasks, not meaning. Capability is becoming cheap; judgement,
        trust, taste, and purpose are not. So humans do what humans were always
        best at, and finally get the room to do it. That isn&rsquo;t a consolation
        prize. It might be the point.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What do humans do when AI does the jobs?</summary>
          <p>Move up the stack: from tasks to judgement, trust, and direction. Hayat&rsquo;s three moves: full-time to fractional, build with AI, and anchor identity in purpose and service.</p>
        </details>
        <details>
          <summary>Will there be any work left for humans?</summary>
          <p>Yes. AI automates tasks, not meaning. The WEF still projects a net job gain by 2030 (170M created vs 92M displaced). The roles change. Human judgement paired with AI capability wins.</p>
        </details>
        <details>
          <summary>How do I prepare?</summary>
          <p>Build with AI now, diversify toward fractional clients so you own your income, and do the inner work of knowing what you value so your purpose survives the next disruption.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>This is the work Hayat thinks about</h2>
        <p>
          The future of work and human purpose, from a three-exit operator. Essays
          direct, or bring Hayat to your stage.
        </p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/speaking">Invite Hayat to speak →</Link>
      </div>
    </PageShell>
  );
}
