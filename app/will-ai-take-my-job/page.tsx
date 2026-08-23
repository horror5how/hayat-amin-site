import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/will-ai-take-my-job`;

export const metadata: Metadata = {
  title: "Will AI Take My Job? An Operator's Honest Answer | Hayat Amin",
  description:
    "Will AI take my job? AI takes tasks, not whole jobs. The people who build with it stay valuable. Hayat Amin's framework for staying relevant and turning AI into an edge.",
  keywords: [
    "will AI take my job",
    "is AI going to take my job",
    "how to stay relevant in the age of AI",
    "AI job security",
    "future of work",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Will AI Take My Job? | Hayat Amin",
    description: "AI takes tasks, not whole jobs. How to become the operator who builds with it instead of competing against it.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "Will AI Take My Job?",
  description:
    "An operator's framework for staying relevant as AI absorbs routine tasks: build with it, deliver faster, and turn the edge into independence.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-19",
  image: `${SITE}/hayat-hero.png`,
  about: [{ "@type": "Thing", name: "AI and the Future of Work" }],
  keywords: "will AI take my job, AI job security, stay relevant age of AI, build with AI, future of work",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Will AI take my job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is more likely to take the tasks inside your job than your whole job at once. McKinsey estimates generative AI could automate activities that absorb 60 to 70 percent of employees' time. That reshapes roles rather than deleting them wholesale. The people most at risk are those who refuse to adapt; the people who gain are those who use AI to do more, faster, and redirect the freed time into higher-value work.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stay relevant in the age of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lean into the technology instead of away from it. Learn to build with AI, master prompting and workflow design, and become the person who delivers results faster and helps others navigate the shift. Real, hands-on experience implementing AI is the new career insurance. Adaptability, Hayat Amin argues, is the new job security.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new degree to compete with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. The advantage isn't another credential. It's demonstrable experience building with the tools that are changing the work. Hayat Amin's view is that adaptability and real-world implementation beat traditional credentials in an AI economy, because they prove you can create value now, not that you could years ago.",
      },
    },
  ],
};

export default function WillAITakeMyJobPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Future of Work", href: "/future-of-work" },
        { label: "Will AI take my job?" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Framework · Build with AI</span>
      <h1>Will AI take my job?</h1>
      <p className="op-lede">
        Probably not all at once, but it will take the tasks. McKinsey estimates
        generative AI could automate activities that fill 60 to 70 percent of the
        average employee&rsquo;s time. That doesn&rsquo;t delete your job; it
        rewrites it. The question that actually decides your future isn&rsquo;t
        whether AI is coming. It&rsquo;s whether you&rsquo;re the one using it.
      </p>

      <h2>Tasks get automated; judgement doesn&rsquo;t</h2>
      <p>
        The work most exposed to AI is the work you could write down as a process.
        The work that stays and grows is the work that needs judgement, trust,
        taste, and accountability. The World Economic Forum still projects a net
        gain of jobs by 2030 (170 million created against 92 million displaced).
        The roles change; they don&rsquo;t vanish. The losers are the people who
        wait it out.
      </p>

      <h2>The leverage is in building with it</h2>
      <p>
        Stop waiting for the perfect moment to &ldquo;become an AI expert.&rdquo;
        The real edge isn&rsquo;t mastering the tech for its own sake. It&rsquo;s
        using it to compress hours of manual work into minutes, then becoming the
        go-to person who delivers results faster. You don&rsquo;t need to be an AI
        mogul. You need to be the smartest operator in the room.
      </p>

      <h2>Adaptability is the new job security</h2>
      <p>
        The old security was a stable employer and a credential. The new security
        is the demonstrated ability to adapt and to build. Real, hands-on
        experience implementing AI is worth more than another diploma, because it
        proves you can create value now. Turn that edge into independence: the
        operator who delivers faster can quietly assemble a{" "}
        <Link href="/full-time-to-fractional">portfolio of fractional clients</Link>{" "}
        and stop depending on a single employer entirely.
      </p>

      <h2>The bigger question</h2>
      <p>
        Staying employable is the floor, not the ceiling. The deeper question is
        what the freed time is for:{" "}
        <Link href="/what-do-humans-do-when-ai-does-the-jobs">
          what humans do when AI does the jobs
        </Link>
        . That&rsquo;s a question about{" "}
        <Link href="/human-purpose">purpose</Link>, not just productivity.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>Will AI take my job?</summary>
          <p>It&rsquo;s more likely to take the tasks than the whole job. McKinsey estimates 60 to 70% of work time is automatable. Roles get reshaped; the people who build with AI gain.</p>
        </details>
        <details>
          <summary>How do I stay relevant?</summary>
          <p>Lean in. Learn to build with AI, master prompting and workflow design, deliver faster, and help others navigate. Adaptability is the new job security.</p>
        </details>
        <details>
          <summary>Do I need another degree?</summary>
          <p>Usually not. Demonstrable experience building with the tools beats another credential, because it proves you can create value now.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>Stay ahead of the shift</h2>
        <p>Hayat&rsquo;s essays on AI, work, and turning disruption into independence.</p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/future-of-work">Back to the Future of Work →</Link>
      </div>
    </PageShell>
  );
}
