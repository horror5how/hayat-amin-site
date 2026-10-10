import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-vs-applied-ai-engineer-2026-10-10";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-10";
const MOD = "2026-10-10";
const TITLE = "Forward Deployed Engineer vs Applied AI Engineer: 10 Companies Hiring Both, Compared";
const DESC =
  "A forward deployed engineer goes into one customer and builds the AI system inside their stack until it runs. An applied AI engineer is one of two jobs: at OpenAI and Anthropic it's the technical seat beside sales, advising many customers from first call to deployment, and at Ramp, Flexport or Databricks it's an engineer building AI into the company's own product. On 10 October 2026 I read 17,399 live postings from 121 employers' own job feeds. 130 of 183 forward deployed titles mention travel against 13 of 61 applied AI engineer titles. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript diptych in the spirit of the golden age of Islamic art, standing in a glass museum case, two arched miniatures in gold frames separated by a gilded column. In the left miniature an engineer in travelling robes kneels inside a merchant's busy warehouse, fitting a brass astrolabe to the merchant's own scales while porters carry crates past him. In the right miniature a scholar stands in an observatory courtyard under a starry lapis sky, raising the same brass instrument to the stars while three visiting merchants wait on a bench and a scribe records the results. A fine gold thread runs from the engineer's instrument, across the column, to the scholar's.";

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

const PAIRS: { name: string; org: string; url: string }[] = [
  { name: "Ramp, Software Engineer, Forward Deployed AI Solutions", org: "Ramp", url: "https://jobs.ashbyhq.com/ramp/b614563f-3ce6-4dca-b5ba-0e5a6c8bda27" },
  { name: "Ramp, Applied AI Engineer", org: "Ramp", url: "https://jobs.ashbyhq.com/ramp/d204e136-2749-42de-82b4-88a0dd352090" },
  { name: "OpenAI, Forward Deployed Software Engineer, SF", org: "OpenAI", url: "https://jobs.ashbyhq.com/openai/00207abc-49b7-465c-a219-f7c1140f8047" },
  { name: "OpenAI, Applied AI Engineer, Enterprise", org: "OpenAI", url: "https://jobs.ashbyhq.com/openai/01091aed-427d-4e10-8cdb-fb500cf55bb9" },
  { name: "OpenAI, Applied AI Engineer, Startups", org: "OpenAI", url: "https://jobs.ashbyhq.com/openai/71e7252f-abb1-4b74-8e69-318413042357" },
  { name: "Snorkel AI, Senior/Staff Forward Deployed Engineer, Data as a Service", org: "Snorkel AI", url: "https://job-boards.greenhouse.io/snorkelai/jobs/5689470004" },
  { name: "Snorkel AI, Staff Applied AI Engineer, Enterprise AI Solutions", org: "Snorkel AI", url: "https://job-boards.greenhouse.io/snorkelai/jobs/6204368004" },
  { name: "Scale AI, Staff Frontier Agents Engineer (Forward Deployed Engineering)", org: "Scale AI", url: "https://job-boards.greenhouse.io/scaleai/jobs/4694865005" },
  { name: "Scale AI, Staff Frontier Agents Engineer (Applied AI)", org: "Scale AI", url: "https://job-boards.greenhouse.io/scaleai/jobs/4720487005" },
  { name: "Snowflake, Staff Applied AI Engineer (FDE)", org: "Snowflake", url: "https://jobs.ashbyhq.com/snowflake/12455179-f3ff-4739-b8c0-c21f3c116b87" },
  { name: "Snowflake, Software Engineer, Applied AI, Warsaw", org: "Snowflake", url: "https://jobs.ashbyhq.com/snowflake/6e31e0cb-7821-4dcf-9d69-0afce918bcc4" },
  { name: "Flexport, Forward Deployed Engineer, Supply Chain Solutions", org: "Flexport", url: "https://job-boards.greenhouse.io/flexport/jobs/8110413" },
  { name: "Flexport, Senior Software Engineer, Applied AI", org: "Flexport", url: "https://job-boards.greenhouse.io/flexport/jobs/8141246" },
  { name: "Databricks, Sr. Forward Deployed Engineer (FDE), Financial Services, New York", org: "Databricks", url: "https://databricks.com/company/careers/open-positions/job?gh_jid=8592942002" },
  { name: "Databricks, Senior Staff Applied AI Engineer, Context Retrieval", org: "Databricks", url: "https://databricks.com/company/careers/open-positions/job?gh_jid=8540267002" },
  { name: "Deepgram, Senior Forward Deployed Engineer (FDE), Strategic Accounts", org: "Deepgram", url: "https://jobs.ashbyhq.com/deepgram/1645ceac-3ef9-45ba-8386-49c7c43b14f0" },
  { name: "Deepgram, Software Engineer, Applied AI (Senior or Staff Level)", org: "Deepgram", url: "https://jobs.ashbyhq.com/deepgram/68372d7d-b7a9-439e-a0a7-76690576aba4" },
  { name: "Anthropic, Forward Deployed Engineer, London", org: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5423029008" },
  { name: "Anthropic, Applied AI Engineer, Enterprise, London", org: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5354765008" },
  { name: "Anthropic, Applied AI Engineer, Enterprise Tech", org: "Anthropic", url: "https://job-boards.greenhouse.io/anthropic/jobs/5057647008" },
  { name: "Factory, Member of Deployed Staff, Forward Deployed Engineer", org: "Factory", url: "https://jobs.ashbyhq.com/factory/9b4262d3-4468-4e74-9d47-6ac3ae2804ec" },
  { name: "Factory, Member of Deployed Staff, Applied AI", org: "Factory", url: "https://jobs.ashbyhq.com/factory/31a1a071-6256-4f62-aea0-9616a822d531" },
];

const LIST: { name: string; url: string }[] = [
  { name: "Ramp, forward deployed engineer vs applied AI engineer", url: PAIRS[0].url },
  { name: "OpenAI, forward deployed engineer vs applied AI engineer", url: PAIRS[2].url },
  { name: "Snorkel AI, forward deployed engineer vs applied AI engineer", url: PAIRS[5].url },
  { name: "Scale AI, forward deployed engineer vs applied AI engineer", url: PAIRS[7].url },
  { name: "Snowflake, one job under both titles", url: PAIRS[9].url },
  { name: "Flexport, forward deployed engineer vs applied AI engineer", url: PAIRS[11].url },
  { name: "Databricks, forward deployed engineer vs applied AI engineer", url: PAIRS[13].url },
  { name: "Deepgram, forward deployed engineer vs applied AI engineer", url: PAIRS[15].url },
  { name: "Anthropic, forward deployed engineer vs applied AI engineer", url: PAIRS[17].url },
  { name: "Factory, forward deployed engineer vs applied AI engineer", url: PAIRS[20].url },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Forward deployed engineer vs applied AI engineer: what is the difference?",
    a: "A forward deployed engineer goes into one customer and builds the system inside their stack until it runs in production. An applied AI engineer is either the technical adviser beside sales at a model company, working across many customers, or an in-house engineer building AI into the employer's own product. Across 121 employers on 10 October 2026, 130 of 183 forward deployed titles mention travel against 13 of 61 applied AI engineer titles, and 61 of 183 talk about writing or shipping code in those words against 6 of 61.",
  },
  {
    q: "What is an applied AI engineer?",
    a: "It depends on the employer. Of the 61 applied AI engineer titles I read, 34 mention customers or clients five or more times and sit in a customer team, mostly at OpenAI (16) and Anthropic (7). The other 27 build AI into their own company's product, at Ramp, Flexport, Perplexity, Deepgram, Databricks and others. 49 of 61 mention research and 44 of 61 mention evals or evaluation.",
  },
  {
    q: "What does forward deployed engineer applied AI mean at Anthropic?",
    a: "At Anthropic the forward deployed engineer sits inside the Applied AI team. The London posting opens with 'As a member of the Applied AI team at Anthropic, you will be a Forward Deployed Engineer'. Its Applied AI Engineer, Enterprise posting in London carries the same band, £225,000 to £255,000, but takes customers from first conversation to the decision to build, then hands the build to a systems integration partner. The forward deployed engineer builds MCP servers, sub-agents and agent skills inside customer systems and travels 25 to 50 percent.",
  },
  {
    q: "Applied AI engineer vs AI engineer: what is the difference?",
    a: "In the postings I read the line is the employer's, not the work. Databricks calls its AI forward deployed role AI Engineer, Forward Deployed Engineering, at $152,900 to $210,155 in the United States, while its Senior Staff Applied AI Engineer, Context Retrieval builds retrieval for Databricks' own agents at $228,600 to $342,800. Snowflake goes further and posts a Staff Applied AI Engineer (FDE).",
  },
  {
    q: "Applied AI engineer vs ML engineer: what is the difference?",
    a: "The applied AI postings lean on models you call rather than models you train. Only 10 of 61 mention fine tuning. Scale AI's applied AI track accepts software engineering, machine learning or applied AI experience, and Databricks keeps a separate Senior Applied ML Engineer title for machine learning on its own infrastructure, at $166,000 to $210,250 in San Francisco.",
  },
  {
    q: "What is an applied AI engineer salary?",
    a: "On the paired postings, the US base bands run from $180,000 at the bottom of Scale AI's Frontier Agents Engineer (Applied AI) to $360,000 at the top of Snorkel AI's staff posting. OpenAI's Applied AI Engineer, Enterprise is $251,000 to $278,000 and its Startups posting $211,000 to $278,000. Anthropic's Enterprise Tech posting is $200,000 to $320,000. Ramp's in-house Applied AI Engineer is $204,400 to $352,000. A band is a range across levels, not an offer.",
  },
];

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
      "about": "Forward deployed engineer vs applied AI engineer, compared posting by posting at the companies hiring both, from 17,399 live postings across 121 employers' own job feeds on 10 October 2026",
      "citation": PAIRS.map((p) => ({
        "@type": "WebPage",
        "name": p.name,
        "publisher": { "@type": "Organization", "name": p.org },
        "url": p.url,
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
        "https://www.linkedin.com/in/hayatamin",
      ],
      "description": "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation.",
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      "url": HERO,
      "contentUrl": HERO,
      "width": 1408,
      "height": 768,
      "caption": HERO_ALT,
      "name": "One instrument, two rooms: the engineer fits it in the merchant's warehouse, the scholar tests it in the observatory",
      "about": { "@id": "https://meethayat.com/#person" },
      "creator": { "@id": "https://meethayat.com/#person" },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer vs applied ai engineer, fde vs applied ai, applied ai engineer vs forward deployed engineer, what is an applied ai engineer, forward deployed engineer applied ai anthropic, applied ai engineer vs ai engineer, applied ai engineer vs ml engineer, applied ai salary, Ramp, OpenAI, Snorkel AI, Scale AI, Snowflake, Flexport, Databricks, Deepgram, Anthropic, Factory, Hayat Amin, Beyond Elevation, New York, San Francisco",
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#pairs`,
      "name": "Ten companies hiring both forward deployed engineers and applied AI engineers on 10 October 2026, ordered by the top of the forward deployed posting's published US dollar base band",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": LIST.length,
      "itemListElement": LIST.map((l, i) => ({ "@type": "ListItem", "position": i + 1, "name": l.name, "url": l.url })),
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
        { "@type": "ListItem", "position": 3, "name": TITLE, "item": URL },
      ],
    },
  ],
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Forward Deployed Engineer vs Applied AI Engineer" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward Deployed Engineer vs Applied AI Engineer</h1>

      <p className="op-lede">A forward deployed engineer goes into one customer and builds the AI system inside their stack until it runs. An applied AI engineer is one of two jobs. At OpenAI and Anthropic it&apos;s the technical seat beside sales, advising many customers from the first call to deployment. At Ramp, Flexport or Databricks it&apos;s an engineer building AI into the company&apos;s own product. This morning 130 of 183 forward deployed titles mentioned travel. 13 of 61 applied AI engineer titles did.</p>

      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now do forward deployed work myself inside other people&apos;s systems. On 10 October 2026 I pulled 17,399 live postings from 121 employers&apos; own job feeds and read both titles side by side. 11 of those employers hire both. Below are the 10 pairs worth comparing, mostly in New York and San Francisco, what each seat is good for and who each one is wrong for.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          One instrument, two rooms. On the left the engineer is on his knees in the merchant&apos;s warehouse, fitting the astrolabe to scales he didn&apos;t build. On the right the scholar tests the same instrument against the sky while three merchants wait their turn. The gold thread is what the warehouse teaches the observatory.
        </figcaption>
      </figure>

      <h2>Why the title confuses people</h2>

      <p>Google completes forward deployed engineer vs applied ai engineer as the first suggestion on its own stem, and applied ai engineer vs forward deployed engineer is the second completion on applied ai engineer vs. People type fde vs applied ai too. My demand scan flags it as a rising comparison. I think the reason is that applied AI engineer means two different jobs depending on who&apos;s hiring, and one of them sits very close to the forward deployed engineer.</p>

      <p>Of the 61 applied AI engineer titles I found, 34 mention customers or clients five or more times and sit in a customer team: 16 at OpenAI, 7 at Anthropic, 4 at Scale AI, 3 at Mercor and 1 each at Databricks, Snorkel AI, Snowflake and Factory. The other 27 build AI into their own employer&apos;s product, at Ramp, Flexport, Perplexity, Deepgram, Databricks, Cognition and 10 more. Ask which kind before you compare it with anything.</p>

      <h2>What 183 forward deployed titles and 61 applied AI titles say</h2>

      <p>I counted each title once per company, because Databricks alone posts 87 forward deployed postings under 28 titles. That leaves 183 forward deployed engineering titles at 45 employers and 61 applied AI engineer titles at 19, with managers, architects, scientists, recruiters and interns left out. Here&apos;s what the words say.</p>

      <ul>
        <li>Travel: 130 of 183 against 13 of 61, and 3 of those 13 are a benefits line about visiting other offices. 31 forward deployed titles put the figure at 50 percent. Snorkel AI&apos;s, at up to 25 percent, is the only applied AI posting that gives a percentage.</li>
        <li>Writing or shipping code, in those words: 61 of 183 against 6 of 61.</li>
        <li>Python: 122 of 183 against 41 of 61. Two thirds each, so the language isn&apos;t what separates them.</li>
        <li>Research: 66 of 183 against 49 of 61. Evals or evaluation: 84 of 183 against 44 of 61.</li>
        <li>Sales or account executives: 46 of 183 against 18 of the 34 customer facing applied AI titles.</li>
        <li>Prototype, proof of concept or proof of value: 71 of 183 against 29 of those 34.</li>
      </ul>

      <p>So the customer facing applied AI engineer is earlier in the deal and wider across accounts. They prototype, they run evals, they sit with sales, and they advise the customer&apos;s own engineers. The forward deployed engineer is later and deeper: one customer, on site, writing the code that goes into production. I covered what that week looks like in <Link href="/blog/forward-deployed-engineer-role-responsibilities-2026-10-02/">forward deployed engineer role responsibilities</Link> and <Link href="/blog/do-forward-deployed-engineers-travel-2026-09-17/">do forward deployed engineers travel</Link>.</p>

      <h2>The 10 companies hiring both, side by side</h2>

      <p>I&apos;ve ordered them by the top of the forward deployed posting&apos;s published US base band, highest first, with the pair in pounds and the pair with no band at the end. Every number was read on the employer&apos;s own posting this morning, and every gap is my subtraction. A band is a range across levels, not an offer, and I say where the two postings sit at different levels.</p>

      <h3>1. Ramp: Software Engineer, Forward Deployed AI Solutions vs Applied AI Engineer</h3>

      <p>Both are in New York. The forward deployed engineer is $189,000 to $330,000 with equity and travels up to about 50 percent. The applied AI engineer is $204,400 to $352,000, $15,400 higher at the floor and $22,000 at the ceiling.</p>

      <p>These are the two meanings side by side. Ramp&apos;s forward deployed engineer co-leads customer engagements with an AI Solutions Strategist and owns the technical half, from workflow discovery to production. The posting calls it deeply client facing and asks for an integration plan across Ramp and customer systems. Ramp&apos;s applied AI engineer works inside Ramp on agents, retrieval, structured extraction, fine tuning and inference infrastructure, and the posting links to jsonformer, an open source library the team says it made. Pick the applied AI seat if you want to build Ramp&apos;s product. Wrong for the forward deployed seat if half your weeks on the road is too many.</p>

      <h3>2. OpenAI: Forward Deployed Software Engineer vs Applied AI Engineer, Enterprise</h3>

      <p>The engineer is in San Francisco at $185,000 to $325,000 with equity, asks for 7 or more years and travel up to 50 percent. The applied AI engineer is in San Francisco or New York at $251,000 to $278,000. The applied AI floor is $66,000 higher. The forward deployed ceiling is $47,000 higher. OpenAI&apos;s Applied AI Engineer, Startups is $211,000 to $278,000 and asks for 5 or more years.</p>

      <p>OpenAI keeps the two seats on the same account. The forward deployed posting says you&apos;ll embed with strategic customers, write scopes of work and code side by side on their infrastructure, and work with the Applied teams and Sales on the same account. The enterprise applied AI posting covers use case selection through architecture, prototyping, evaluation and launch, and says success is measured by production systems and adoption, not demonstrations. The applied AI posting doesn&apos;t mention travel. Pick the forward deployed seat if you want to own one build to the end.</p>

      <h3>3. Snorkel AI: Senior/Staff Forward Deployed Engineer vs Staff Applied AI Engineer</h3>

      <p>Both are in New York or San Francisco. The forward deployed engineer is $180,000 to $320,000 across senior and staff. The applied AI engineer is staff only at $230,000 to $360,000, asks for 8 or more years of customer facing AI work and travel up to 25 percent. The applied AI posting is $50,000 higher at the floor and $40,000 at the ceiling, and part of that is level.</p>

      <p>Snorkel is the closest pair on this list. Both face customers. The forward deployed engineer builds evaluators, data pipelines and quality checks against a client deliverable. The applied AI engineer designs and delivers AI solutions too, then turns what repeats into reusable recipes and platform features for Snorkel&apos;s own tooling. Wrong for the applied AI seat if you haven&apos;t spent close to a decade in front of customers.</p>

      <h3>4. Scale AI: Frontier Agents Engineer, forward deployed track vs applied AI track</h3>

      <p>Scale posts one job family with two tracks, in San Francisco or New York, at three levels. At the base level both are $180,000 to $225,000 and ask for 4 or more years. At senior both are $216,000 to $270,000. At staff the forward deployed engineer is $252,000 to $315,000 and the applied AI engineer $265,000 to $331,000, $13,000 and $16,000 higher.</p>

      <p>This pair shows the difference with everything else held still. The forward deployed posting is about systems: integrating with customer cloud platforms, data warehouses, internal APIs, security and governance, and it asks for distributed systems fundamentals. The applied AI posting is about models: evaluating new models and agent designs, multi-agent systems, and it says you&apos;ll fit if you enjoy reading new AI papers. Both work with enterprise customers. Pick the forward deployed track if plumbing is what you&apos;re good at.</p>

      <h3>5. Snowflake: one job, posted under both titles</h3>

      <p>Snowflake&apos;s Staff Applied AI Engineer (FDE) in Menlo Park is $200,000 to $270,000, asks for 7 or more years, leads 2 to 4 engineers and spends at least 25 percent of the time on site. The posting body calls it a Staff Forward Deployed Engineer, Applied AI on the Cortex AI team. In Warsaw, Snowflake posts a Software Engineer, Applied AI with no band whose text opens as a Forward Deployed Engineer, Applied AI.</p>

      <p>I&apos;ve kept it on the list because it settles the question for one company. At Snowflake the applied AI engineer is the forward deployed engineer. If you&apos;re hiring and can&apos;t decide what to call the role, Snowflake didn&apos;t either.</p>

      <h3>6. Flexport: Forward Deployed Engineer, Supply Chain Solutions vs Senior Software Engineer, Applied AI</h3>

      <p>The forward deployed engineer is in San Francisco at $206,181 to $252,000 and asks for 4 or more years. The applied AI engineer is in Amsterdam with no published band and asks for 5 or more years.</p>

      <p>Flexport&apos;s forward deployed engineer travels to client sites to map supply chain processes end to end, audit legacy systems and find where the money leaks. Flexport&apos;s applied AI engineer builds the agents that run Flexport&apos;s own operations, customs compliance, document processing and exceptions, and ships them to Flexport&apos;s own operators. Same company, same freight, opposite side of the contract. Wrong for the forward deployed seat if you don&apos;t want to stand in a customer&apos;s warehouse.</p>

      <h3>7. Databricks: Sr. Forward Deployed Engineer vs Senior Staff Applied AI Engineer, Context Retrieval</h3>

      <p>The forward deployed engineer&apos;s band is $182,000 to $250,208, and I&apos;ve used the financial services posting in New York, 6 or more years, travel 20 percent. The applied AI engineer is in Mountain View or San Francisco at $228,600 to $342,800 and asks for 10 or more years, so it&apos;s a level or two up.</p>

      <p>Databricks&apos; forward deployed engineer is billable and delivers to a specification the customer has agreed. The applied AI engineer owns how Databricks&apos; own agents retrieve context across enterprise software, a zero to one build inside the product. Databricks also calls its AI forward deployed role an AI Engineer, Forward Deployed Engineering, at $152,900 to $210,155, which is one more reason the titles blur.</p>

      <h3>8. Deepgram: Senior Forward Deployed Engineer vs Software Engineer, Applied AI</h3>

      <p>The forward deployed engineer is in New York at $197,000 to $246,000 with a 10 percent annual bonus and equity. The applied AI engineer is in San Francisco at $197,000 to $307,000 and is posted at senior or staff, so the higher ceiling covers a level the engineer posting doesn&apos;t.</p>

      <p>This is the in-between case. Deepgram&apos;s applied AI engineer sits in a new Enterprise AI Team working with restaurant brands on drive-thru and phone ordering agents and noisy multi-mic speech recognition, alongside Deepgram&apos;s research teams. The forward deployed engineer takes a customer from integration to go live with occasional travel. One makes the model work in a drive-thru. The other makes the deployment work at a named account.</p>

      <h3>9. Anthropic: Forward Deployed Engineer vs Applied AI Engineer, Enterprise</h3>

      <p>Both are in London and both are £225,000 to £255,000. Anthropic&apos;s forward deployed engineers are posted in London, Munich and Paris only this morning. In the United States its Applied AI Engineer, Enterprise Tech is $200,000 to $320,000.</p>

      <p>Anthropic puts the forward deployed engineer inside its Applied AI team, so here the forward deployed engineer is a kind of applied AI engineer. The split is in the work. The forward deployed engineer builds production applications inside customer systems, delivers MCP servers, sub-agents and agent skills, and travels 25 to 50 percent. The enterprise applied AI engineer takes a UK customer from first conversation through evaluation, proof of value and procurement to the decision to build, then sets up the customer&apos;s systems integration partner and advises while the partner does the build. Same pay, different end of the deal. Wrong for the applied AI seat if you want to write the code yourself.</p>

      <h3>10. Factory: Member of Deployed Staff, Forward Deployed Engineer vs Member of Deployed Staff, Applied AI</h3>

      <p>Both are in San Francisco and neither publishes a band. Factory gives both seats the same family name.</p>

      <p>Factory&apos;s forward deployed engineer reports directly to the chief executive and leads implementation and integration of Factory&apos;s platform into customer engineering environments. Its applied AI posting owns the post-sales journey for the most strategic accounts, maps where Factory belongs in the customer&apos;s software lifecycle and drives adoption, and the posting itself calls the person a deployed product manager. Here applied AI is the account owner and forward deployed is the builder.</p>

      <p>Cohere also hires both, a forward deployed engineer in the United States and an applied AI engineer in Toronto, both banded in Canadian dollars, so I&apos;ve left it off the list.</p>

      <h2>What the pairs agree on</h2>

      <p>In 9 pairs with bands in the same currency, the applied AI ceiling is higher in 5 (Ramp, Snorkel AI, Scale AI staff, Databricks and Deepgram), level in 3 (Scale AI at base and senior, and Anthropic in London) and lower in 1 (OpenAI). In 3 of the 5 the applied AI posting is at a higher level. That&apos;s the opposite of what I found for the <Link href="/blog/forward-deployed-engineer-vs-ai-product-manager-2026-10-09/">AI product manager</Link>, where the forward deployed ceiling was higher in 10 of 16. Pay doesn&apos;t separate these two. Where you sit does.</p>

      <p>If you&apos;re choosing, ask the hiring company one question. Will I be inside one customer&apos;s systems, or across many from my own desk? If the answer is many, ask a second one. Are those customers, or is it our own product? The title won&apos;t tell you. The travel line and the word build usually will.</p>

      <h2>What this means if you run a company</h2>

      <p>If you run a company of 20 to 500 people, you won&apos;t hire either title from this list. The applied AI engineer at a model company exists to get thousands of customers building on its API. The in-house applied AI engineer exists because Ramp and Flexport sell software with AI inside it. You have one set of operations: a finance system, a CRM, some spreadsheets and the people retyping between them. What you need is the forward deployed half, somebody who learns how your week moves, builds against your live accounts, and stays until it runs.</p>

      <p>That&apos;s the work I do through Beyond Elevation, on a fixed scope, inside your own systems with your own credentials, set out at <a href="https://meethayat.com/services/fde" {...ext}>meethayat.com/services/fde</a>.</p>

      <h2>About Hayat Amin</h2>

      <p>I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems could carry. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way. I read a job posting the way I read a cap table: the band, the years and the travel line tell you what a company thinks the job is.</p>

      <p>I&apos;m exceptional at the forward deployed half of this comparison, because I do it from the finance side. I connect the systems in a company that were never built to talk to each other, I turn what comes out of them into a live number a chief executive can run the week on instead of a month end pack, and I value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>

      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" {...ext}>Beyond Elevation</a>.</p>

      <p>If you want a second pair of eyes on what to automate first, I do a free audit call: one call, then a written list of what to automate first, what it saves and what it costs, at <a href="https://beyondelevation.com/call/hayat" {...ext}>beyondelevation.com/call/hayat</a>.</p>

      <h2>Questions people actually ask</h2>

      {FAQ.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Where these numbers come from</h2>

      <p>Every count comes from the employers&apos; own job feeds, the ones their applicant tracking systems publish on Greenhouse, Ashby and Lever, read on 10 October 2026. 121 employers returned live postings, 17,399 after removing exact duplicates, including Palantir, OpenAI, Anthropic, Databricks, Scale AI, Snowflake, Ramp, Flexport, Deepgram, Snorkel AI, Factory and Cohere. A forward deployed engineering title is any title with forward deployed or FDE in it, with managers, directors, recruiters, interns, strategists and deployment leads left out: 289 postings, 183 titles counted once per company. An applied AI engineer title is any engineer or member of technical staff title carrying applied AI or applied ML, with managers, architects, scientists, researchers and interns left out, and Snowflake&apos;s hybrid counted as forward deployed: 80 postings, 61 titles. The five mentions rule for customer facing is mine and it&apos;s blunt. Word counts are plain text matches, so a posting that says travel once counts the same as one that says it ten times. That&apos;s a sample of companies hiring in AI and software, not a census. The autocomplete phrases were pulled from Google the same morning.</p>

      <p>The paired postings:</p>

      <ul>
        {PAIRS.map((p) => (
          <li key={p.url}><a href={p.url} {...ext}>{p.name}</a></li>
        ))}
      </ul>

      <p>Postings come down and bands get edited, so if you&apos;re reading this weeks later, open the links and recount rather than trusting my tally.</p>

    </PageShell>
  );
}
