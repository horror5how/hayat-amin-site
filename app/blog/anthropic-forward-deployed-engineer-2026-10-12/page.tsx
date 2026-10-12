import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "anthropic-forward-deployed-engineer-2026-10-12";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-12";
const MOD = "2026-10-12";
const TITLE = "Anthropic Forward Deployed Engineer: I Read All 645 Live Roles on Its Job Board";
const DESC =
  "An Anthropic forward deployed engineer sits in the Applied AI team, embeds with Anthropic's most strategic customers and builds production applications on Claude inside their systems. On 12 October 2026 Anthropic had 645 live roles and only three individual jobs titled Forward Deployed Engineer, all in Europe. London pays £225,000 to £255,000. In the US the title sits on a New York manager role at $320,000 to $405,000, and the closest hands-on job is Applied AI Engineer. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript page in the spirit of the golden age of Islamic art, gold leaf and lapis arabesque framing a round central scene. A craftsman in a turban and gold robe, tools at his belt and a hammer in one hand, carries a lit lantern out of an arched workshop where apprentices bend over benches, and steps onto a stone bridge towards a tower on the far bank. Domed cities and courtyards fill the four corners.";

const SOURCES = [
  { name: "Anthropic, Forward Deployed Engineer, London", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Anthropic, Manager, Forward Deployed Engineering, New York City", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5099753008" },
  { name: "Anthropic, GTM Strategy & Operations, FDE", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5427938008" },
  { name: "Anthropic, Applied AI Engineer, Enterprise Tech", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5057647008" },
  { name: "Anthropic, Technical Deployment Lead, Claude Agentic Solutions", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5017903008" },
  { name: "Claude Frontier Academy: $100M to train 10,000 engineers (2 October 2026)", publisher: "Anthropic", url: "https://www.anthropic.com/news/claude-frontier-academy" },
  { name: "Claude Frontier Academy programme page", publisher: "Claude", url: "https://claude.com/programs/frontier-academy" },
  { name: "Anthropic partners with Blackstone, H&F and Goldman Sachs to launch enterprise AI services firm (4 May 2026)", publisher: "Goldman Sachs Asset Management", url: "https://am.gs.com/en-us/institutions/news/press-release/2026/anthropic-partners-with-blackstone-hf-and-goldman-sachs-ai-services" },
  { name: "Ode, the team bringing frontier AI into practice", publisher: "Ode", url: "https://ode.com" },
];

const FAQ = [
  {
    q: "What is the Anthropic forward deployed engineer salary?",
    a: "The London Forward Deployed Engineer posting says £225,000 to £255,000 a year on 12 October 2026, the same band as Anthropic's London Applied AI Engineer, Enterprise. The Paris and Munich FDE postings publish no band. There is no individual FDE posting in the US. The Manager, Forward Deployed Engineering role in New York is $320,000 to $405,000, and the US Applied AI Engineer, Enterprise Tech role is $200,000 to $320,000.",
  },
  {
    q: "What is the Anthropic forward deployed engineer certification?",
    a: "It is the Claude Frontier Deployed Engineer badge from Claude Frontier Academy, announced on 2 October 2026. Engineers are nominated by their own employer, pass a four day intensive to earn the Claude Resident Engineer badge, then lead a real Claude project at their own organisation for 12 weeks and sit a final practical. Anthropic expects to award the first badges in early 2027. It certifies engineers at customers and partners. It is not a route to a job at Anthropic.",
  },
  {
    q: "What are the Anthropic forward deployed engineer roles?",
    a: "On 12 October 2026 six titles carried the name: Forward Deployed Engineer in London, Paris and Munich, Manager, Forward Deployed Engineering in London and New York, and GTM Strategy & Operations, FDE in San Francisco or New York. 29 of the 645 live postings mention forward deployed engineers somewhere in the text, including the Technical Deployment Lead, who works alongside FDEs and owns the engagement.",
  },
  {
    q: "What is the Anthropic forward deployed engineer company?",
    a: "People usually mean the enterprise AI services firm Anthropic launched with Blackstone, Hellman & Friedman and Goldman Sachs, announced on 4 May 2026 for mid size companies, with Anthropic engineering resources embedded in its team. Goldman Sachs described it as democratising access to forward deployed engineers. Ode's own site says it works in collaboration with Anthropic's Applied AI team.",
  },
  {
    q: "Does an Anthropic forward deployed engineer write code?",
    a: "Yes. The London posting asks for strong Python and experience shipping production applications, and lists MCP servers, sub-agents and agent skills as the things you deliver. The Technical Deployment Lead posting, by contrast, says you won't write production code. That role owns scope and the customer while the FDEs build.",
  },
  {
    q: "How much do Anthropic FDEs travel?",
    a: "Every FDE posting and both FDE manager postings say 25 to 50 percent travel to customer sites. The US Applied AI Engineer, Enterprise Tech posting says occasional travel and three days a week in the office.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESC,
    publishedTime: PUB,
    modifiedTime: MOD,
    images: [{ url: HERO, width: 1408, height: 768, alt: HERO_ALT }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [HERO] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      "headline": TITLE,
      "description": DESC,
      "url": URL,
      "inLanguage": "en",
      "datePublished": PUB,
      "dateModified": MOD,
      "image": [{ "@id": `${URL}#hero` }],
      "author": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "mainEntityOfPage": URL,
      "about": "The Anthropic forward deployed engineer role, read from all 645 live postings on Anthropic's own Greenhouse job board on 12 October 2026, with the Claude Frontier Academy certification and the enterprise AI services firm Anthropic launched with Blackstone, Hellman & Friedman and Goldman Sachs",
      "citation": SOURCES.map((s) => ({
        "@type": "WebPage",
        "name": s.name,
        "publisher": { "@type": "Organization", "name": s.publisher },
        "url": s.url,
      })),
    },
    {
      "@type": "Person",
      "@id": "https://meethayat.com/#person",
      "name": "Hayat Amin",
      "jobTitle": "Forward Deployed Engineer and Fractional Chief Financial Officer",
      "url": "https://meethayat.com",
      "sameAs": [
        "https://meethayat.com",
        "https://beyondelevation.com",
        "https://www.linkedin.com/in/hayatamin"
      ],
      "description": "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation."
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      "url": HERO,
      "contentUrl": HERO,
      "width": 1408,
      "height": 768,
      "caption": HERO_ALT,
      "name": "The craftsman leaves the workshop with his lantern and crosses the bridge to build in someone else's house",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "anthropic forward deployed engineer, anthropic fde, anthropic forward deployed engineer salary, anthropic forward deployed engineer certification, claude frontier academy, applied ai engineer, Anthropic, Hayat Amin, Beyond Elevation, New York, London"
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": FAQ.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://meethayat.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://meethayat.com/blog" },
        { "@type": "ListItem", "position": 3, "name": TITLE, "item": URL }
      ]
    }
  ]
};

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Anthropic forward deployed engineer" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Anthropic forward deployed engineer</h1>

      <p className="op-lede">An Anthropic forward deployed engineer sits in the Applied AI team, embeds with Anthropic&apos;s most strategic customers and builds production applications on Claude inside their systems. This morning Anthropic had 645 live roles and only three individual jobs with that title, in London, Paris and Munich. In the US the same work is mostly hired as Applied AI Engineer.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now do forward deployed work myself inside smaller companies, so I read these postings as both the engineer and the person paying for one. On 12 October 2026 I went through every role on Anthropic&apos;s own Greenhouse board. Below is what the job asks, what it pays, what the new certification is, and what the company people search for actually is.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The workshop keeps training apprentices behind him. He takes his tools and a lantern across the bridge and builds in the house on the other side.
        </figcaption>
      </figure>

      <h2>What the London posting asks you to do</h2>

      <p>The London Forward Deployed Engineer posting is the clearest statement Anthropic has published of the job. You join the Applied AI team, embed with its most strategic customers and serve as one of its founding FDEs. That word founding matters. Anthropic is telling you the practice is new and you&apos;ll help shape it.</p>

      <p>The posting lists eight responsibilities. These are the ones that define the job:</p>

      <ul>
        <li>Work within customer systems to build production applications with Claude models.</li>
        <li>Deliver MCP servers, sub-agents and agent skills that go into production workflows.</li>
        <li>Give white glove deployment support for Anthropic products in enterprise environments.</li>
        <li>Codify repeatable deployment patterns and feed them back to Product and Engineering.</li>
        <li>Travel 25 to 50 percent of the time to build in person with customers.</li>
      </ul>

      <p>It asks for 4 or more years in a technical customer facing role, production experience with LLMs including agents and evaluation frameworks, and strong Python. Former technical founders are named as welcome. A background in financial services or healthcare and life sciences is a plus. The band is £225,000 to £255,000, the same figure Anthropic prints on its London Applied AI Engineer, Enterprise role. Paris and Munich publish no band.</p>

      <h2>Where the US job is hiding</h2>

      <p>If you&apos;re in New York and searching for this title, you&apos;ll find a manager role and nothing under it. The Manager, Forward Deployed Engineering posting in New York calls it the first FDE Manager, says there is no existing playbook, and pays $320,000 to $405,000. It asks for 10 or more years of experience and 2 or more managing a services, post sales or FDE team. London has the same manager role at £255,000 to £325,000.</p>

      <p>The hands-on US work sits in Applied AI. Anthropic had 47 live titles with Applied AI in the name. The Applied AI Engineer, Enterprise Tech role across San Francisco, New York and Seattle pays $200,000 to $320,000, and its first line of experience reads 4 or more years in roles such as Forward Deployed Engineer. The difference is in the travel. That role says occasional travel and three days a week in the office, against 25 to 50 percent on every FDE posting. I wrote up the wider split in <Link href="/blog/forward-deployed-engineer-vs-applied-ai-engineer-2026-10-10/">forward deployed engineer vs applied AI engineer</Link>.</p>

      <p>One more role tells you how the team is built. The Technical Deployment Lead on the Claude Agentic Solutions team, $275,000 to $380,000 across five US cities, works alongside Forward Deployed Engineers who build the technical solution. The lead owns the statement of work, scope, value measurement and the executive briefings. The posting says it plainly: you won&apos;t write production code. Anthropic splits the job Palantir splits, an engineer who builds and a lead who decides what gets built. In all, 29 of the 645 postings mention forward deployed engineers somewhere in the text.</p>

      <h2>The certification is a different FDE</h2>

      <p>Type anthropic forward deployed engineer into Google and certification, course and program all complete. They point at Claude Frontier Academy, which Anthropic announced on 2 October 2026 with $100 million behind it and a target of 10,000 Frontier Deployed Engineers by the end of 2027. Note the first word. Frontier, not forward. Same three letters, which I covered in <Link href="/blog/what-does-fde-mean-2026-10-05/">what does FDE mean</Link>.</p>

      <p>The first programme is the FDE Residency. Your employer nominates you, and you arrive with a named Claude project. You spend 3 days in person building a Claude system for a simulated enterprise, then sit a graded fourth day for the Claude Resident Engineer badge. Then you lead a real Claude deployment at your own organisation for 12 weeks and pass a final practical for the Claude Frontier Deployed Engineer badge. Anthropic expects the first ones in early 2027. Cohorts run in San Francisco, New York and London, and the first include engineers from Accenture, Bain, Capgemini, Commonwealth Bank of Australia, Deloitte, McKinsey, Morgan Stanley and Novo Nordisk.</p>

      <p>Neither the announcement nor the programme page states a cost to the participant. The important point for a job seeker is that this badge is for engineers at customers and partners. It doesn&apos;t make you an Anthropic employee, and you can&apos;t apply to it on your own. Ask your Anthropic account team or partner manager.</p>

      <h2>The company people search for</h2>

      <p>The other completion is company. On 4 May 2026 Anthropic, Blackstone, Hellman &amp; Friedman and Goldman Sachs announced a new AI native enterprise services firm for mid size companies, with Anthropic engineering and partnership resources embedded in its team. Goldman Sachs&apos; Marc Nachmann described it as democratising access to forward deployed engineers. Its first customers include companies the founding investors own, across healthcare, manufacturing, financial services, retail, real estate and infrastructure. Ode&apos;s own site says it works in collaboration with Anthropic&apos;s Applied AI team. My <Link href="/blog/forward-deployed-engineer-news-2026-10-06/">forward deployed engineer news</Link> roundup has the rest of that week&apos;s moves.</p>

      <h2>The posting I read as a CFO</h2>

      <p>The most useful page on the whole board isn&apos;t an engineering job. It&apos;s GTM Strategy &amp; Operations, FDE, at $270,000 to $310,000. The posting says demand for FDE is well ahead of the team&apos;s capacity. The person hired will own headcount, utilisation, how engagements are priced and discounted, and the plan for moving more of the work to delivery partners.</p>

      <p>I&apos;ve sat in that seat in other companies. When a services team is short of capacity, it goes to the biggest accounts first and the rest go to partners. That is what the posting describes, and it&apos;s rational. It also means that if you run a company of 20 to 500 people in New York or Chicago, an Anthropic FDE won&apos;t walk through your door. You&apos;ll get a partner, a services firm, or your own team.</p>

      <h2>What this means if you run a company</h2>

      <p>Read the London posting again and you have the job description for what you need: someone who works inside your systems, ships an agent into a real workflow, writes down the pattern and stays until people use it. You don&apos;t need Anthropic to hire that person for you. You need one who has done it before and can find the number your week depends on.</p>

      <p>That is what I do through Beyond Elevation, my firm. I sit inside your accounts, connect the finance system, the CRM and the spreadsheets that feed the number, build the Claude agents and the live dashboard on top, and stay until your team runs on it. The scope is set out at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the work in that London posting because the finance seat taught me where a company&apos;s week breaks before anyone writes code. I connect the systems that were never built to talk to each other, put a live dashboard in front of the chief executive instead of a month end pack, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on what to automate first, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>Every count comes from Anthropic&apos;s public Greenhouse job board, read on 12 October 2026, which returned 645 live postings. A title counts as forward deployed if it contains Forward Deployed or FDE. The 29 is a plain text match on the full posting. Pay bands are as printed on each posting, and a band is a range across levels, not an offer. The Academy facts are from Anthropic&apos;s announcement and the Claude programme page. The services firm facts are from the Goldman Sachs release of 4 May 2026, which doesn&apos;t name the firm or state its capital, so I haven&apos;t either. Google autocomplete was read from the US the same morning.</p>

      <p>The sources named on this page:</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Postings come down and bands get edited, so if you&apos;re reading this weeks later, open the links and recount rather than trusting my tally.</p>

    </PageShell>
  );
}
