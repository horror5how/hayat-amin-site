import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/purpose-over-passion`;

export const metadata: Metadata = {
  title: "Purpose Over Passion: Why Purpose Wins in the Age of AI | Hayat Amin",
  description:
    "Purpose over passion: why 'follow your passion' is bad advice in the age of AI, and why purpose, a direction rooted in service, is the more durable thing to build a life around. By Hayat Amin.",
  keywords: [
    "purpose over passion",
    "purpose vs passion",
    "is following your passion bad advice",
    "purpose driven life",
    "meaning of work",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Purpose Over Passion | Hayat Amin",
    description: "Passion is fleeting; purpose is permanent. Why purpose is the better foundation in the age of AI.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "Purpose Over Passion",
  description:
    "Why purpose, not passion, is the durable foundation for work and life in the age of AI.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-31",
  image: `${SITE}/hayat-hero.png`,
  about: [{ "@type": "Thing", name: "Purpose over Passion" }],
  keywords: "purpose over passion, purpose vs passion, meaning, service, age of AI",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between purpose and passion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Passion is a feeling about what you do; purpose is a direction rooted in why you do it and who it serves. Passion is reactive and fades with circumstance; purpose is a commitment that holds when the work gets hard or the task gets automated. Hayat Amin's line: passion is fleeting, but purpose is permanent.",
      },
    },
    {
      "@type": "Question",
      name: "Is 'follow your passion' bad advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the age of AI, mostly yes. Following your passion ties your livelihood to a feeling and often to a specific task that automation may absorb. A better question is what you are uniquely positioned to contribute, and to whom. Purpose, built on service, is more resilient and more useful than passion.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find my purpose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with service rather than self: ask who you are trying to be useful to and why it matters. Notice the problems you return to even when no one is paying you. Hayat Amin's view is that purpose is found through honest self-reflection plus contribution, not through chasing whatever feels exciting this month.",
      },
    },
  ],
};

export default function PurposeOverPassionPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Human Purpose", href: "/human-purpose" },
        { label: "Purpose over Passion" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Framework · Purpose over Passion</span>
      <h1>Passion is fleeting. Purpose is permanent.</h1>
      <p className="op-lede">
        &ldquo;Follow your passion&rdquo; is the most repeated career advice of the
        last thirty years, and one of the worst, especially now. Passion is a
        feeling, and feelings move. Purpose is a direction, and direction holds.
        Hayat Amin makes the case for building your work on the thing that
        doesn&rsquo;t evaporate when the week gets hard.
      </p>

      <h2>Why passion fails you</h2>
      <p>
        Passion is reactive. It depends on novelty, momentum, and mood, all of
        which fade. Worse, in the age of AI, the task you&rsquo;re passionate about
        may be the exact one a machine learns to do. If your identity is welded to
        that task, automation doesn&rsquo;t just change your job; it threatens your
        sense of self.
      </p>

      <h2>Why purpose holds</h2>
      <p>
        Purpose isn&rsquo;t about what makes you feel good. It&rsquo;s about why
        you do what you do, and who it&rsquo;s for. That &ldquo;why&rdquo; survives
        a bad quarter, a layoff, and a technology shift, because it isn&rsquo;t
        attached to any single task. Hayat&rsquo;s reframe is blunt: stop chasing
        the scattered colours and look for the source of the light. The colours
        change; the light doesn&rsquo;t.
      </p>

      <h2>Purpose runs on service</h2>
      <p>
        The most reliable purpose is built on contribution. Shift from a
        self-centred pursuit of happiness to a mission-centred life of service, and
        two things happen: the meaning becomes durable, and, not incidentally,
        you become more valuable, because being genuinely useful to other people
        only appreciates as commodity work goes to zero.{" "}
        <Link href="/how-to-find-purpose-in-the-age-of-ai">
          How to find yours →
        </Link>
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>Purpose vs passion: what&rsquo;s the difference?</summary>
          <p>Passion is a feeling about what you do; purpose is a direction rooted in why and who you serve. Passion fades; purpose holds.</p>
        </details>
        <details>
          <summary>Is &ldquo;follow your passion&rdquo; bad advice?</summary>
          <p>In the age of AI, mostly yes. It ties your livelihood to a feeling and often to an automatable task. Ask what you&rsquo;re uniquely positioned to contribute instead.</p>
        </details>
        <details>
          <summary>How do I find my purpose?</summary>
          <p>Start with service: who are you trying to be useful to, and why? Notice the problems you return to unpaid. Purpose comes from reflection plus contribution.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>More on purpose &amp; the future of work</h2>
        <p>Hayat&rsquo;s essays on meaning, work, and the human advantage AI can&rsquo;t copy.</p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/human-purpose">Read the Human Purpose pillar →</Link>
      </div>
    </PageShell>
  );
}
