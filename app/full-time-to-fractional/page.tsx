import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";
const URL = `${SITE}/full-time-to-fractional`;

export const metadata: Metadata = {
  title: "Full-Time to Fractional: Why Portfolio Careers Are the Future of Work | Hayat Amin",
  description:
    "Full-time to fractional: why owning a portfolio of clients beats renting your time to one employer in the age of AI, and how to make the move. By Hayat Amin, a three-exit operator.",
  keywords: [
    "full-time to fractional",
    "fractional work",
    "portfolio career",
    "how to become fractional",
    "fractional work coach",
    "fractional career coach",
    "fractional work expert",
    "future of work",
    "own your income",
    "Hayat Amin",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Full-Time to Fractional | Hayat Amin",
    description: "Why portfolio careers are the future of work, and how to make the move before the pink slip.",
    images: [`${SITE}/hayat-hero.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}/#article`,
  headline: "Full-Time to Fractional",
  description:
    "Why the shift from full-time employment to fractional, portfolio work is the durable response to an AI-driven economy.",
  author: { "@id": `${SITE}/#person` },
  publisher: { "@id": `${SITE}/#person` },
  mainEntityOfPage: URL,
  datePublished: "2026-05-25",
  dateModified: "2026-08-19",
  image: `${SITE}/hayat-hero.png`,
  about: [{ "@type": "Thing", name: "Fractional Work" }, { "@type": "Thing", name: "Portfolio Careers" }],
  keywords: "full-time to fractional, fractional work, portfolio career, own your income, future of work",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is fractional work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractional work means serving several companies part-time as a senior expert, rather than one company full-time. A fractional professional keeps a portfolio of clients, sets their own schedule, and owns their income directly. It is the opposite of the gig economy's race to the bottom: high-value expertise sold across multiple buyers.",
      },
    },
    {
      "@type": "Question",
      name: "Why is fractional work the future?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the riskiest career position in an AI economy is a single employer and a single automatable role. A portfolio of fractional clients spreads your risk and compounds your earning power. Hayat Amin's view: don't wait for the pink slip. Build your own safety net by securing clients before you need them.",
      },
    },
    {
      "@type": "Question",
      name: "How do I move from full-time to fractional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Move strategically, not desperately. Use AI to deliver your current role faster and free up capacity. Package what you're best at into a clear offer. Land one or two clients on the side before you resign, so you exit into a roster rather than a void. Then expand the portfolio. The goal isn't just to leave. It's to own your income on your own terms.",
      },
    },
  ],
};

export default function FullTimeToFractionalPage() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Future of Work", href: "/future-of-work" },
        { label: "Full-time to Fractional" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <span className="op-eyebrow">Framework · Full-time &gt; Fractional</span>
      <h1>Stop renting your time to one employer.</h1>
      <p className="op-lede">
        The full-time job sold you a story: one employer, one income, one identity,
        and safety in exchange for loyalty. That safety net isn&rsquo;t what it used
        to be. Hayat Amin&rsquo;s argument, built from twenty years inside
        high-growth tech and three exits, is that the future belongs to people who
        own a portfolio of clients, not a single seat.
      </p>

      <h2>What fractional actually means</h2>
      <p>
        A fractional professional is a senior expert working part-time for several
        companies at once. Not a freelancer competing on price, but a specialist
        selling judgement across multiple buyers. More clients means more income
        streams, more resilience, and more control over your schedule and your
        worth.
      </p>

      <h2>Why the full-time model is breaking</h2>
      <p>
        Two forces are converging. AI is absorbing the routine tasks that filled
        full-time roles, and companies increasingly want flexible, senior expertise
        over fixed headcount. The result: the single-employer career is now the
        concentrated bet, and the portfolio is the hedge. The corporate safety net
        is thinner than the brochure promised.
      </p>

      <h2>Exit strategically, not desperately</h2>
      <p>
        The mistake is waiting for the pink slip, then scrambling. The move is to
        build your own safety net first: use AI to do your current job faster,
        package your expertise into an offer, and secure a client or two before you
        resign, so you exit into a roster, not a void. As Hayat puts it, the goal
        isn&rsquo;t just to leave; it&rsquo;s to own your income on your own terms.
      </p>

      <h2>Where this sits in the bigger picture</h2>
      <p>
        Going fractional is the practical half of a larger answer to the question{" "}
        <Link href="/what-do-humans-do-when-ai-does-the-jobs">
          what humans do when AI does the jobs
        </Link>
        . The other half is internal: building a life on{" "}
        <Link href="/purpose-over-passion">purpose rather than passion</Link>, so
        the freedom you gain is pointed at something that matters.
      </p>

      <h2>FAQ</h2>
      <div className="op-faq">
        <details open>
          <summary>What is fractional work?</summary>
          <p>Serving several companies part-time as a senior expert rather than one company full-time. You keep a portfolio of clients and own your income directly.</p>
        </details>
        <details>
          <summary>Why is fractional the future?</summary>
          <p>One employer and one automatable role is the riskiest position in an AI economy. A portfolio spreads risk and compounds leverage. Build your safety net before you need it.</p>
        </details>
        <details>
          <summary>How do I make the move?</summary>
          <p>Use AI to free up capacity, package your best work into an offer, land a client or two before resigning, then expand the portfolio. Exit into a roster, not a void.</p>
        </details>
      </div>

      <div className="op-cta-block">
        <h2>The playbook, in your inbox</h2>
        <p>Hayat&rsquo;s essays on fractional work, the future of work, and owning your income.</p>
        <a href="https://hayatamin.substack.com" target="_blank" rel="me noopener">Subscribe on Substack →</a>
        {" "}
        <Link href="/future-of-work">Back to the Future of Work →</Link>
      </div>
    </PageShell>
  );
}
