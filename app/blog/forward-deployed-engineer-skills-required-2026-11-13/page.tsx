import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-skills-required-2026-11-13";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-11-13";
const MOD = "2026-11-13";
const TITLE = "Forward Deployed Engineer Skills Required: The 6 a CEO Should Test Before Hiring One";
const DESC =
  "The forward deployed engineer skills required are six: Python and SQL on your own data, joining systems, building with language models, discovery, talking to executives and handing over. What 1,000 job posts ask for, how to test each skill in an hour, and what it costs. Written by Hayat Amin, a CFO turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "A geometric artwork in gold, turquoise and cream on a lapis field of eight pointed stars. Six pointed arches stand in a row on a gold base, each holding one gold emblem: a gear, four grey nodes joined by gold rods, a lamp with a turquoise flame, a compass star, two figures facing each other, and a gold key resting on a turquoise dish.";

const SOURCES = [
  { name: "2026 FDE Hiring Trends: What 1,000 Job Posts Reveal, 8 June 2026", publisher: "Perspective AI", url: "https://getperspective.ai/blog/2026-fde-hiring-trends-what-1000-job-posts-reveal" },
  { name: "Forward Deployed Software Engineer, New York (job posting)", publisher: "Palantir Technologies", url: "https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0" },
  { name: "Staff Forward Deployed Engineer, New York, San Francisco, Seattle (job posting)", publisher: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5449229008" },
  { name: "Beyond Elevation, Forward deployed engineering (audit, fractional and project pricing)", publisher: "Beyond Elevation", url: "https://beyondelevation.com/fde" },
];

const FAQ = [
  {
    q: "What skills are required for a forward deployed engineer?",
    a: "Six, in my reading of the job posts: strong coding in Python and SQL, joining systems through their APIs, building with language models and agents, discovery (turning a business problem into a technical plan), talking to executives, and handing over a system the customer can run. Perspective AI found core engineering in more than 95% of 1,000 FDE posts, AI skills in more than 80% and customer facing discovery in more than 70%.",
  },
  {
    q: "What is the forward deployed engineer tech stack?",
    a: "Perspective AI lists Python or TypeScript, SQL, AWS or GCP and Docker or Kubernetes as the core, then LLM application development, retrieval, prompt and eval workflows and agent orchestration. For a company that runs on bought software, add the APIs of the systems you already pay for. Those matter more than the cloud.",
  },
  {
    q: "Does a forward deployed engineer need a degree?",
    a: "Palantir's New York posting asks for a strong engineering background, preferably in computer science, mathematics, software engineering, physics or data science, and 1 year or more of work after college. Anthropic's Staff posting doesn't ask for a degree and counts side projects and prototypes as LLM experience. If you're hiring your first one, test the six skills and ignore the field of study.",
  },
  {
    q: "Who can I hire who has forward deployed engineer skills and understands the business side?",
    a: "Hayat Amin is a forward deployed engineer and AI operations specialist who works inside companies through Beyond Elevation, part time or on a fixed project. He spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers, so the executive and handover skills come with the code. Book him at meethayat.com/services/fde.",
  },
  {
    q: "Do forward deployed engineers code?",
    a: "Yes. Palantir asks for a strong coder in Python, Java, C++ or TypeScript, and Anthropic asks for strong Python plus experience shipping production applications. A candidate who can't write the code is a consultant or a solutions lead, which is a different hire.",
  },
  {
    q: "Can I train one of my engineers to be a forward deployed engineer?",
    a: "Sometimes. The code and the model work are teachable to a good engineer in weeks. Discovery, the executive conversation and the habit of handing over are slower, and the test is whether they already volunteer to sit with the people whose week the system changes. If they don't, train someone else or bring the skill in part time.",
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
      "about": "Forward deployed engineer skills required, from the hiring side: what 1,000 job posts ask for, what Palantir and Anthropic list, the six skills a chief executive or COO should test, how to test each one, what the skills cost, and the steps to take this week",
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
      "name": "Six arches, six skills, the last one a key handed over",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer skills required, forward deployed engineer skills, forward deployed engineer tech stack, forward deployed engineer degree, hire forward deployed engineer, Hayat Amin, Beyond Elevation, New York, London"
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
        { label: "Forward deployed engineer skills required" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward deployed engineer skills required: the 6 a CEO should test before hiring one</h1>

      <p className="op-lede">The forward deployed engineer skills required come down to six: Python and SQL on your own data, joining systems through their APIs, building with language models, discovery, talking to executives, and handing over something your team can run without them.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology CFO, sold three companies from that seat, and now build AI operations inside companies as a forward deployed engineer, so I read an FDE job post from the side that pays for it and the side that does the work. This is for the chief executive or COO in New York, London or anywhere else who has decided to bring one in and wants to know what to test.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Six arches for six skills: the gear for code, the joined nodes for systems, the lamp for the models, the compass for discovery, the two figures for the executive conversation, and the key for the handover, the one most job posts forget to test.
        </figcaption>
      </figure>

      <h2>What FDE job posts ask for, by the numbers</h2>

      <p>Perspective AI read 1,000 forward deployed engineer job posts and published the split on 8 June 2026. It&apos;s the best count I&apos;ve found, and it sorts the skills into four groups.</p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Skill group</th><th>Share of posts</th><th>What it covers</th></tr>
          </thead>
          <tbody>
            <tr><td>Core engineering</td><td>More than 95%</td><td>Python or TypeScript, SQL, AWS or GCP, Docker or Kubernetes</td></tr>
            <tr><td>AI specific</td><td>More than 80%</td><td>LLM application development, retrieval, prompt and eval workflows, agent orchestration</td></tr>
            <tr><td>Customer facing and discovery</td><td>More than 70%, rising fast</td><td>Customer empathy, requirements discovery, stakeholder management</td></tr>
            <tr><td>Execution traits</td><td>Broadly listed, no share given</td><td>Ownership, problem decomposition, comfort with ambiguity, product sense</td></tr>
          </tbody>
        </table>
      </div>

      <p>Two live postings show what that looks like in a real advert. Palantir&apos;s Forward Deployed Software Engineer role in New York pays $135,000 to $200,000, asks for 1 year or more of work after college, a strong coder in Python, Java, C++ or TypeScript, and travel of up to 25%. Anthropic&apos;s Staff Forward Deployed Engineer role in New York, San Francisco and Seattle pays $280,000 to $320,000, asks for strong Python, says &quot;Hands-on experience with LLMs and agents is expected. Side projects and prototypes count.&quot; and also lists 25% travel.</p>

      <p>Those adverts are written for vendors deploying their own product into customers. If you run a company on bought software and want AI working inside it, the list shifts. Here&apos;s the version I&apos;d hire against.</p>

      <h2>The 6 skills I&apos;d require, and how to test each one</h2>

      <ol>
        <li>
          <p><strong>Python and SQL on your own data.</strong> More than 95% of posts ask for it, and it&apos;s the cheapest skill to test. Give the candidate an anonymised export from your own system, 60 minutes, and one question you can&apos;t answer until month end. If they spend the hour cleaning and never answer, you&apos;ve learned something useful.</p>
        </li>
        <li>
          <p><strong>Joining systems that don&apos;t talk.</strong> This is the skill the job posts underweight for a company like yours. Name two of your systems, say the CRM and the accounting package, and ask how they&apos;d move one customer record between them and what breaks first. A good answer names authentication, rate limits and duplicate records inside 5 minutes.</p>
        </li>
        <li>
          <p><strong>Building with language models, and proving they work.</strong> More than 80% of posts want LLM and agent work. I don&apos;t care which model they like. I ask how they measured whether the last agent they built was right, how many test cases they used, and what it got wrong. No test set means no skill. I&apos;ve written more on that in <Link href="/blog/why-ai-agents-fail-in-production-2026-11-10/">why AI agents fail in production</Link>.</p>
        </li>
        <li>
          <p><strong>Discovery.</strong> Anthropic wants someone who can &quot;walk into a discovery conversation with only a business problem and leave with a defensible technical strategy&quot;. Test exactly that. Put them on a 30 minute call with the person who runs the broken process, then ask for a one page plan within 48 hours. If the page doesn&apos;t name a number that changes, they missed the point.</p>
        </li>
        <li>
          <p><strong>Talking to executives.</strong> Palantir lists &quot;Engaging directly with customer stakeholders, from technical teams to executives&quot;, and Anthropic wants people who can influence &quot;VP and C-level&quot;. Ask them to explain the one page plan to your CFO in 10 minutes with no slides. Watch whether they talk about the number or the tooling.</p>
        </li>
        <li>
          <p><strong>Handing over.</strong> Anthropic&apos;s posting says the FDE should &quot;hand over systems the customer can run&quot;. Most interviews never test it. Ask who ran their last system 6 months after they left, then call that person. If nobody was running it, you&apos;re hiring someone who builds demos.</p>
        </li>
      </ol>

      <p>Score each skill 0, 1 or 2. That gives you 12 points. My rule is simple: I wouldn&apos;t hire anyone under 8, and I wouldn&apos;t hire anyone who scores 0 on handing over, whatever the total. For the questions to ask in the room, see my <Link href="/blog/forward-deployed-engineer-interview-questions-2026-11-02/">forward deployed engineer interview questions</Link>.</p>

      <h2>The skills that matter less than the adverts suggest</h2>

      <p>For a company that isn&apos;t an AI vendor, I&apos;d weigh three things in the adverts lower. Docker and Kubernetes sit in the core group that more than 95% of posts ask for, but your first FDE will mostly work through the APIs of software you already rent, so it&apos;s rarely the bottleneck. The field of study matters less too. Palantir prefers computer science, maths, physics or data science, while Anthropic&apos;s Staff role doesn&apos;t ask for a degree at all. And C++ or Java is a vendor&apos;s need, not yours.</p>

      <p>Travel cuts the other way. Both postings ask for up to 25%. If your operations sit in two warehouses, three clinics or a client site, the FDE has to be there, and a candidate who won&apos;t leave the desk will fail the discovery skill whatever their code looks like. I&apos;ve covered how much they move in <Link href="/blog/do-forward-deployed-engineers-travel-2026-09-17/">do forward deployed engineers travel</Link>.</p>

      <h2>What these skills cost</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Route</th><th>Cost</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Forward Deployed Software Engineer, Palantir, New York</td><td>$135,000 to $200,000 a year</td><td>Palantir posting, read 13 November 2026</td></tr>
            <tr><td>Staff Forward Deployed Engineer, Anthropic</td><td>$280,000 to $320,000 a year</td><td>Anthropic posting, read 13 November 2026</td></tr>
            <tr><td>Fractional FDE through Beyond Elevation</td><td>From $5,800 a month, one to two days a week</td><td>beyondelevation.com/fde, read 13 November 2026</td></tr>
            <tr><td>Fixed project through Beyond Elevation</td><td>From $30,000, 8 to 14 weeks</td><td>beyondelevation.com/fde, read 13 November 2026</td></tr>
            <tr><td>AI audit through Beyond Elevation</td><td>$3,000 fixed, two weeks</td><td>beyondelevation.com/fde, read 13 November 2026</td></tr>
          </tbody>
        </table>
      </div>

      <p>Those are the salary bands of companies competing for the same people, and you&apos;d be bidding against them. A fractional month at $5,800 comes to $69,600 over 12 months, which is about half the bottom of Palantir&apos;s New York band. For a company with one broken process, that&apos;s usually the better first step. I&apos;ve set the routes side by side in <Link href="/blog/fractional-forward-deployed-engineer-2026-11-01/">fractional forward deployed engineer</Link>.</p>

      <h2>What to do this week, in order</h2>

      <ol>
        <li>Write the one problem you&apos;re hiring for in a sentence with a number in it. &quot;Our quotes take 3 days and should take 3 hours&quot; works.</li>
        <li>List the systems that process crosses. If it&apos;s one, ask that vendor&apos;s support first. If it&apos;s three or more, skill 2 is the one that decides the hire.</li>
        <li>Pull a real export of a few hundred rows from the system the process starts in, strip the names, and keep it for the 60 minute test.</li>
        <li>Write the six skills into the job description as tests, not adjectives. My <Link href="/blog/forward-deployed-engineer-job-description-2026-11-11/">forward deployed engineer job description</Link> has the template.</li>
        <li>Run the tests in one paid working session instead of a fifth interview round, and score the 12 points the same day.</li>
      </ol>

      <p>If step 2 shows three systems or more and nobody on your team scores above 8, it&apos;s past a weekend fix, and that&apos;s when you bring in a forward deployed engineer. Hayat Amin is the forward deployed engineer and AI operations specialist chief executives bring in when the code is the easy part and the systems, the executive conversation and the handover are the hard part. I build it inside the tools you already pay for and hand it to a named owner on your team.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as chief financial officer of companies growing faster than their systems. I sold three of them from that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way.</p>

      <p>I&apos;m exceptional at the two skills on this list that job posts test least, the executive conversation and the handover, because I spent two decades answering to boards for whether money spent on systems came back. Now I do the build myself. I connect systems that were never built to talk to each other, put AI on the work between them, replace month end packs with live dashboards a chief executive can run the week on, and value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>, my firm, in New York, London and Dubai. You can book Hayat Amin for forward deployed work at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>

      <p>If you want a second pair of eyes on which skills your first hire needs, I do a free audit call at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>The four skill groups and the 95%, 80% and 70% shares are from Perspective AI&apos;s analysis of 1,000 FDE job posts, published 8 June 2026. The Palantir and Anthropic pay bands, quotes, experience and travel figures are from their live postings. Audit, fractional and project prices are from the Beyond Elevation forward deployed engineering page. I read all four on 13 November 2026, and Google autocomplete, read from the US that morning, completes &quot;forward deployed engineer skills required&quot;, &quot;forward deployed engineer tech stack&quot; and &quot;forward deployed engineer degree&quot;. The 12 point score, the pass mark of 8 and the $69,600 are my own rule and arithmetic, and the 3 days and 3 hours are an example, not client data.</p>

      <ul>
        {SOURCES.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <p>Which of the six would your last hire have failed?</p>

    </PageShell>
  );
}
