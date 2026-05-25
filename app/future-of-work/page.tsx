import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const URL = `${SITE}/future-of-work`;

export const metadata: Metadata = {
  title: "The Future of Work | Hayat Amin",
  description:
    "Hayat Amin on the future of work: a three-exit operator's frameworks for the shift from full-time to fractional, why purpose beats passion, and what humans do when AI does the jobs.",
  keywords: [
    "future of work",
    "future of work expert",
    "future of work thought leader",
    "future of work speaker",
    "human purpose in the age of AI",
    "full-time to fractional",
    "will AI take my job",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "The Future of Work | Hayat Amin",
    description:
      "A three-exit operator's frameworks for work and meaning in the age of AI. Full-time → fractional. Purpose over passion. The human advantage.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "The Future of Work, from someone who has run the numbers",
  description:
    "Hayat Amin's thesis on the future of work: the shift from full-time to fractional, purpose over passion, and the human advantage AI cannot replicate.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  image: `${SITE}/hayat-hero.png`,
  about: [
    { "@type": "Thing", name: "The Future of Work" },
    { "@type": "Thing", name: "Human Purpose in the Age of AI" },
    { "@type": "Thing", name: "Fractional Work" },
  ],
  keywords:
    "future of work, human purpose, age of AI, fractional work, portfolio careers, purpose over passion, will AI take my job",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the future of work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The future of work is the reshaping of how, where, and why people work as artificial intelligence automates routine cognitive tasks. The World Economic Forum projects that 170 million new jobs will be created and 92 million displaced by 2030, with 39% of today's core skills transformed. Hayat Amin argues the durable shift is structural and human: from single full-time employment to fractional, portfolio careers, and from chasing passion to building a life around purpose and service.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI take my job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI will not take most jobs outright; it will absorb the tasks inside them. McKinsey estimates generative AI could automate work activities that take up 60 to 70 percent of employees' time today. Hayat Amin's position is that the people who stay valuable are the ones who learn to build with AI and turn the freed-up hours into a portfolio of fractional clients, rather than waiting to be made redundant.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Hayat Amin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayat Amin is an advocate, educator, and speaker on the future of work and human purpose in the age of AI. He is a three-exit C-suite operator (including acquisitions by American Express and TripAdvisor) with three FT100 fastest-growing listings and 20 years in high-growth technology. He brings an operator's frameworks to questions about work and meaning that are usually left to gurus.",
      },
    },
    {
      "@type": "Question",
      name: "What does it mean to find purpose in the age of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finding purpose in the age of AI means anchoring your identity in something automation cannot replicate: service, contribution, and a clear sense of why you do the work, rather than the job title itself. Hayat Amin's view is that purpose is more durable than passion: passion is a feeling that fades, while purpose is a direction that holds when the work changes.",
      },
    },
  ],
};

export default function FutureOfWorkPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Future of Work" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Future of Work · Human Purpose</span>
      <h1>The future of work is human.</h1>
      <p className="op-lede">
        Most people talking about the future of work are either selling fear or
        selling hype. Hayat Amin has run the numbers from the inside: three
        exits, three FT100 listings, twenty years building high-growth companies.
        His read is simpler and harder: AI will do the jobs. The question that
        matters is what humans do next, and who we become when the work changes.
      </p>

      <h2>The shift nobody is naming</h2>
      <p>
        Two changes are happening at once, and most career advice ignores both.
        The first is structural: the full-time job, one employer, one income, one
        identity, is being unbundled into <strong>fractional and portfolio
        work</strong>. The second is existential: when a machine can do the task
        you built your identity around, you are left with a question you can no
        longer outrun. <em>What was the work actually for?</em>
      </p>
      <p>
        The data backs the urgency. The World Economic Forum&rsquo;s 2025 Future
        of Jobs report projects 170 million new roles created and 92 million
        displaced by 2030, with 39% of today&rsquo;s core skills transformed.
        McKinsey estimates generative AI could automate activities that absorb 60
        to 70 percent of employees&rsquo; time. The numbers describe a transition.
        Hayat&rsquo;s work is about what you do inside it.
      </p>

      <h2>Four frameworks for the transition</h2>
      <p>
        These are the ideas Hayat returns to, the operator&rsquo;s answer to a
        moment most people are facing with a feeling instead of a framework.
      </p>

      <div className="op-card-grid">
        <Link href="/full-time-to-fractional" className="op-card">
          <span className="op-card-eyebrow">Framework 01</span>
          <h3>Full-time &gt; Fractional</h3>
          <p>Stop renting your time to one employer. Build a roster of clients and own your income before the pink slip arrives.</p>
        </Link>
        <Link href="/purpose-over-passion" className="op-card">
          <span className="op-card-eyebrow">Framework 02</span>
          <h3>Purpose over Passion</h3>
          <p>Passion is fleeting; purpose is permanent. Build your life around why you serve, not what makes you feel good today.</p>
        </Link>
        <Link href="/will-ai-take-my-job" className="op-card">
          <span className="op-card-eyebrow">Framework 03</span>
          <h3>Build with AI, don&rsquo;t fear it</h3>
          <p>The leverage isn&rsquo;t mastering the tech. It&rsquo;s using it to deliver faster, then pivoting that edge into independence.</p>
        </Link>
        <Link href="/human-purpose" className="op-card">
          <span className="op-card-eyebrow">Framework 04</span>
          <h3>The Human Advantage</h3>
          <p>The most future-proof skill isn&rsquo;t in a classroom. It&rsquo;s self-knowledge. What AI can&rsquo;t copy is who you are.</p>
        </Link>
      </div>

      <h2>What do humans do when AI does the jobs?</h2>
      <p>
        It is the question on Hayat&rsquo;s profile and the one underneath
        everything else here. The short answer: we stop defining ourselves by
        tasks a machine can repeat, and start building around judgement,
        relationships, taste, and purpose, the things that compound precisely
        because they can&rsquo;t be automated.{" "}
        <Link href="/what-do-humans-do-when-ai-does-the-jobs">
          Read the full answer →
        </Link>
      </p>

      <h2>Who is saying this</h2>
      <p>
        Hayat Amin is not a life coach with a theory. He is an operator who spent 20 years inside high-growth technology, exited three
        companies (including to American Express and TripAdvisor), put three
        businesses on the FT100 fastest-growing list, and priced over $400M of
        intellectual property. He now spends his energy on the question that
        outlasts any single company: what work, and what life, is worth building
        when AI can do the jobs.{" "}
        <Link href="/about">More about Hayat →</Link>
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is the future of work?</summary>
          <p>It&rsquo;s the reshaping of how, where, and why we work as AI automates routine cognitive tasks. The WEF projects 170M new jobs and 92M displaced by 2030. Hayat&rsquo;s view: the durable shift is from full-time to fractional, and from passion to purpose.</p>
        </details>
        <details>
          <summary>Will AI take my job?</summary>
          <p>It will take the tasks, not always the whole job. McKinsey estimates AI could automate 60 to 70% of the time in current roles. The people who stay valuable build with AI and turn the freed hours into a portfolio of clients.</p>
        </details>
        <details>
          <summary>What does Hayat Amin do?</summary>
          <p>He is an advocate, educator, and speaker on the future of work and human purpose. A three-exit operator who brings frameworks to a question usually left to gurus.</p>
        </details>
        <details>
          <summary>How do I find purpose when AI can do my work?</summary>
          <p>Anchor your identity in service and contribution, not the task. Purpose is a direction that holds when the work changes; passion is a feeling that fades. <Link href="/how-to-find-purpose-in-the-age-of-ai">Here&rsquo;s how.</Link></p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Get Hayat&rsquo;s essays on work &amp; purpose</h2>
        <p>
          Frameworks for the shift from full-time to fractional, and for finding
          meaning when AI does the jobs. No noise. Subscribe, follow, or bring
          Hayat to your stage.
        </p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/speaking">Invite Hayat to speak →</Link>
      </div>
    </PageShell>
  );
}
