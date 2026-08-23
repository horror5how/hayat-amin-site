import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/how-to-find-purpose-in-the-age-of-ai`;

export const metadata: Metadata = {
  title: "How to Find Purpose in the Age of AI: Hayat Amin",
  description:
    "How to find purpose in the age of AI: a five-step practice for anchoring your identity in service and self-knowledge when a machine can do your job. By Hayat Amin.",
  keywords: [
    "how to find purpose in the age of AI",
    "finding purpose when AI takes jobs",
    "how to find meaning at work",
    "purpose in the age of AI",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Find Purpose in the Age of AI: Hayat Amin",
    description: "A five-step practice for finding meaning when a machine can do your job.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${URL}/#howto`,
  name: "How to find purpose in the age of AI",
  description:
    "A five-step practice from Hayat Amin for anchoring identity in purpose and service as AI absorbs routine work.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-19",
  image: `${SITE}/hayat-hero.png`,
  step: [
    { "@type": "HowToStep", position: 1, name: "Separate your identity from your job title", text: "Notice where 'what I do' has become 'who I am'. Write down who you are apart from the role on your business card. That gap is where purpose lives." },
    { "@type": "HowToStep", position: 2, name: "Ask who you want to serve", text: "Purpose runs on contribution. Name the people you want to be useful to and the problem you want to solve for them, independent of any one employer." },
    { "@type": "HowToStep", position: 3, name: "Find the problems you return to unpaid", text: "Track the questions and problems you keep coming back to even when no one is paying you. Recurring, unpaid attention is the most honest signal of direction." },
    { "@type": "HowToStep", position: 4, name: "Choose purpose over passion", text: "Don't optimise for what feels exciting this month. Optimise for the direction that would still matter to you after a hard year. Passion is fleeting; purpose is permanent." },
    { "@type": "HowToStep", position: 5, name: "Let AI handle the tasks so you can do the human work", text: "Use AI to clear the routine work that crowds out reflection and contribution. The freed time is the point. Spend it on judgement, people, and meaning." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you find purpose in the age of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Detach your identity from your job title, decide who you want to serve, notice the problems you return to unpaid, choose purpose over passion, and use AI to clear routine work so you have room for the human work. Hayat Amin frames purpose as a practice of self-reflection plus service: the most future-proof skill, found within rather than in a classroom.",
      },
    },
    {
      "@type": "Question",
      name: "Why is finding purpose more urgent now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because AI is removing the tasks many people used to define their worth. When the work you built your identity around can be automated, a borrowed identity collapses and a chosen one holds. Finding purpose is no longer a self-help luxury; it is how you stay grounded through a structural shift in work.",
      },
    },
  ],
};

export default function HowToFindPurposePage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Human Purpose", href: "/human-purpose" },
        { label: "How to find purpose in the age of AI" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Practice · Human Purpose</span>
      <h1>How to find purpose in the age of AI</h1>
      <p className="op-lede">
        When a machine can do what you do, the ground you stood on moves. The way
        through isn&rsquo;t a new credential or a better tool. It&rsquo;s the older,
        harder work of knowing what you&rsquo;re for. Here is the practice Hayat
        Amin returns to, in five steps.
      </p>

      <h2>1. Separate your identity from your job title</h2>
      <p>
        Notice where &ldquo;what I do&rdquo; quietly became &ldquo;who I am.&rdquo;
        Write down who you are apart from the role on your business card, even apart
        from who you were raised to be. That gap is uncomfortable, and
        it&rsquo;s exactly where purpose lives.
      </p>

      <h2>2. Ask who you want to serve</h2>
      <p>
        Purpose runs on contribution, not introspection alone. Name the people you
        want to be useful to and the problem you want to solve for them,
        independent of any one employer or title. Service gives purpose a
        direction that a job description never could.
      </p>

      <h2>3. Find the problems you return to unpaid</h2>
      <p>
        Track the questions you keep circling back to even when no one is paying
        you. Recurring, unpaid attention is the most honest signal you have. It
        usually points at the work you&rsquo;d do anyway, which is the work worth
        building a life around.
      </p>

      <h2>4. Choose purpose over passion</h2>
      <p>
        Don&rsquo;t optimise for what feels exciting this month. Optimise for the
        direction that would still matter after a hard year. Passion is fleeting;
        purpose is permanent.{" "}
        <Link href="/purpose-over-passion">Why purpose beats passion →</Link>
      </p>

      <h2>5. Let AI take the tasks so you can do the human work</h2>
      <p>
        Use AI to clear the routine work that crowds out reflection and
        contribution. Don&rsquo;t treat the freed time as slack to fill. Treat it
        as the whole point. Spend it on judgement, on people, and on the work only
        you can do.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>How do you find purpose in the age of AI?</summary>
          <p>Detach identity from title, decide who you serve, notice the problems you return to unpaid, choose purpose over passion, and let AI clear the routine work so you have room for the human work.</p>
        </details>
        <details>
          <summary>Why is this more urgent now?</summary>
          <p>AI is removing the tasks many people used to define their worth. A borrowed identity collapses when the task is automated; a chosen one holds.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Go deeper on purpose &amp; work</h2>
        <p>Hayat&rsquo;s essays on meaning, the future of work, and the human advantage.</p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/human-purpose">Read the Human Purpose pillar →</Link>
      </div>
    </PageShell>
  );
}
