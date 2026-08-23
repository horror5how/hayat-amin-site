import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/human-purpose`;

export const metadata: Metadata = {
  title: "Human Purpose in the Age of AI | Hayat Amin",
  description:
    "Hayat Amin on human purpose in the age of AI: why purpose outlasts passion, why service beats self, and how to find meaning when a machine can do your job.",
  keywords: [
    "human purpose",
    "human purpose in the age of AI",
    "finding purpose in the age of AI",
    "meaning of work",
    "purpose over passion",
    "purpose vs passion",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Human Purpose in the Age of AI | Hayat Amin",
    description:
      "Why purpose outlasts passion, and how to find meaning when AI can do your job. An operator-philosopher's view.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "Human Purpose in the Age of AI",
  description:
    "Hayat Amin's case that purpose, not passion or productivity, is the human advantage AI cannot replicate.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-19",
  image: `${SITE}/hayat-hero.png`,
  about: [
    { "@type": "Thing", name: "Human Purpose in the Age of AI" },
    { "@type": "Thing", name: "Meaning of Work" },
    { "@type": "Thing", name: "Purpose over Passion" },
  ],
  keywords:
    "human purpose, age of AI, meaning of work, purpose over passion, service, self-knowledge",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is human purpose in the age of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Human purpose in the age of AI is the part of a working life that automation cannot reach: your judgement, your relationships, your sense of why the work matters, and who you serve. As machines absorb routine tasks, Hayat Amin argues that purpose stops being a luxury and becomes the organising principle of a durable career and a meaningful life.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between purpose and passion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Passion is a feeling about what you do; purpose is a direction rooted in why you do it and who it serves. Passion fades when the work gets hard or the task gets automated. Purpose holds. Hayat Amin puts it simply: passion is fleeting, but purpose is permanent, which is why purpose, not passion, is the better thing to build a life around.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find meaning when AI can do your job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You find meaning by detaching your identity from the task and reattaching it to contribution. When AI can do the job, the question shifts from 'what do I do?' to 'who am I for?' Hayat Amin's practice is deliberate self-reflection plus a commitment to service. The most future-proof skill, he says, isn't found in a classroom but within.",
      },
    },
  ],
};

export default function HumanPurposePage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Future of Work", href: "/future-of-work" },
        { label: "Human Purpose" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Human Purpose · In the Age of AI</span>
      <h1>When AI can do the work, purpose is the point.</h1>
      <p className="op-lede">
        For a century we told people their worth was their output. Then we built
        machines that out-produce us. Hayat Amin&rsquo;s argument is that this is
        not a crisis but a clarification. Strip away the tasks a machine can
        repeat, and what&rsquo;s left is the most human thing of all: the question
        of why we do any of it.
      </p>

      <h2>Purpose is more durable than passion</h2>
      <p>
        The advice to &ldquo;follow your passion&rdquo; was always shaky; in the
        age of AI it is actively dangerous. Passion is a feeling, and feelings
        move. <strong>Purpose is a direction</strong>, and direction holds when
        the work changes underneath you. As Hayat puts it:{" "}
        <em>&ldquo;Passion is fleeting, but purpose is permanent.&rdquo;</em> Build
        a life around what makes you feel good and you are at the mercy of every
        bad week. Build it around why you serve, and the bad weeks become detail.
      </p>

      <h2>Service over self</h2>
      <p>
        The most reliable source of meaning isn&rsquo;t self-actualisation. It is
        contribution. The shift Hayat advocates is radical in its simplicity: move
        from a self-centred pursuit of happiness to a mission-centred life of
        service. It is also the most defensible career strategy there is, because
        the value of being genuinely useful to other people only goes up as
        commodity tasks go to zero.
      </p>

      <h2>The future-proof skill is within</h2>
      <p>
        While the world races to collect credentials and chase the newest tool,
        the advantage that no algorithm can replicate is self-knowledge. Degrees
        and diplomas offer paths; deep self-awareness provides the destination.
        The work of knowing who you are, apart from who you were raised to be and
        apart from the role on your business card, is not soft. In a world where
        capability is cheap, clarity of self is the scarce asset.{" "}
        <Link href="/how-to-find-purpose-in-the-age-of-ai">
          How to actually do this work →
        </Link>
      </p>

      <h2>The operator-philosopher</h2>
      <p>
        Most people writing about purpose have never had to make a payroll or
        defend a valuation. Hayat has: three exits, three FT100 listings, $400M
        of intellectual property priced over twenty years. He brings the same
        rigour he used on cap tables to the harder problem underneath all the AI
        noise: what humans are for.{" "}
        <Link href="/future-of-work">See the wider thesis on the future of work →</Link>
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is human purpose in the age of AI?</summary>
          <p>It&rsquo;s the part of working life automation can&rsquo;t reach: judgement, relationships, and why the work matters. As machines take the tasks, purpose becomes the organising principle of a durable career.</p>
        </details>
        <details>
          <summary>Purpose vs passion: what&rsquo;s the difference?</summary>
          <p>Passion is a feeling about what you do; purpose is a direction rooted in why and who you serve. Passion fades; purpose holds. &ldquo;Passion is fleeting, but purpose is permanent.&rdquo;</p>
        </details>
        <details>
          <summary>How do I find meaning if AI can do my job?</summary>
          <p>Detach your identity from the task and reattach it to contribution. The question moves from &ldquo;what do I do?&rdquo; to &ldquo;who am I for?&rdquo; Self-reflection plus service is the most future-proof skill.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Read more on work &amp; meaning</h2>
        <p>
          Hayat&rsquo;s essays on purpose, the future of work, and the human
          advantage AI can&rsquo;t copy, delivered direct.
        </p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/purpose-over-passion">Read: Purpose over Passion →</Link>
      </div>
    </PageShell>
  );
}
