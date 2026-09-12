import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-is-ai-operations-2026-09-12";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-12";
const MOD = "2026-09-12";
const TITLE = "What Is AI Operations? The Work 64% of Companies Using AI Have Skipped";
const DESC =
  "AI operations is the work of making artificial intelligence part of how a company actually runs: choosing the functions it touches, rebuilding the workflows around it, owning its data, and keeping the result alive in production. The United States Census Bureau measured that work in early 2026 and found 64 percent of AI-using businesses had made no organisational adjustment at all. Here is what the function is, what it owns, and how to tell whether you have one.";
const HERO = `${SITE}/what-is-ai-operations-2026-09-12.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art. A walled counting house courtyard at night under a crescent moon, framed by gilded arabesque panels on deep lapis. Brass automata carry out the ordinary daily business of the house: one turns a millstone, one turns a great geared wheel, one walks a heavy ledger between the arcades, one stands at the gate receiving two visitors, and a balance hangs ready at the right. Water channels run under everything and drive the mechanism. On a raised stone platform at the centre, beneath a single gilded arch, one human overseer sits at a plain desk with the governor wheel and the keys of the machinery within reach, watching the work rather than performing it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESC,
    images: [
      {
        url: HERO,
        width: 1408,
        height: 768,
        alt: HERO_ALT,
      }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [HERO] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESC,
      url: URL,
      inLanguage: "en",
      datePublished: PUB,
      dateModified: MOD,
      image: [{ "@id": `${URL}#hero` }],
      author: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      mainEntityOfPage: URL,
      citation: [
        {
          "@type": "ScholarlyArticle",
          name: "The Microstructure of AI Diffusion: Evidence from Firms, Business Functions, and Worker Tasks",
          identifier: "CES 26-25",
          datePublished: "2026-04",
          publisher: { "@type": "GovernmentOrganization", name: "U.S. Census Bureau, Center for Economic Studies" },
          url: "https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html",
        },
        {
          "@type": "WebPage",
          name: "Large Firms With at Least 20 Employees Biggest AI Users",
          datePublished: "2026-05",
          publisher: { "@type": "GovernmentOrganization", name: "U.S. Census Bureau" },
          url: "https://www.census.gov/library/stories/2026/05/ai-use-businesses.html",
        }],
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      url: HERO,
      contentUrl: HERO,
      width: 1408,
      height: 768,
      caption: HERO_ALT,
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI operations is the function that makes artificial intelligence part of how a company runs rather than a tool sitting on top of it. It owns four things: which business functions AI is allowed to touch, the workflows rebuilt around it, the data and system access it needs, and the accountability for the result once it is live. The United States Census Bureau measures those layers separately in its 2026 AI supplement to the Business Trends and Outlook Survey, and the separation is the point. Eighteen percent of American firms used AI in a business function during the reference period of November 2025 to January 2026, but 64 percent of AI-using businesses reported no organisational adjustment at all. The tool is the easy part. AI operations is the rest.",
          },
        },
        {
          "@type": "Question",
          name: "Is AI operations the same as AIOps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and the collision of the two terms is why the search is confusing. AIOps is a specific IT discipline. IBM defines it as the application of artificial intelligence capabilities, such as natural language processing and machine learning models, to automate, streamline and optimize IT service management and operational workflows. Datadog defines it as a discipline that leverages machine learning algorithms to identify the root cause of incidents, helping teams wrangle incoming alerts, remove duplicate alerts, identify false positives, and provide early anomaly, fault and failure detection and analysis. That is AI pointed at your infrastructure. AI operations in the sense most business owners mean is wider: AI pointed at the running of the company, in finance, sales, service and administration, with somebody accountable for it in production.",
          },
        },
        {
          "@type": "Question",
          name: "How is AI implemented in a business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the United States today it is mostly implemented without any structural change, which is why so little of it lands. The Census Bureau's 2026 AI supplement found that 64 percent of AI-using firms made no organisational adjustment to use it. The most common adjustments, training staff and developing new workflows, were each reported by about 15 percent of AI-using firms, and changes to data management and storage practices by only 7 to 8 percent. Implementation that works runs in the other order: pick one business function, rebuild the workflow around what the model can actually do, give the system the data and the write access it needs, put a named person on the result, and only then count the tools.",
          },
        },
        {
          "@type": "Question",
          name: "Which business functions use AI the most?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Among American firms using AI in at least one business function during the November 2025 to January 2026 reference period, sales and marketing leads at 52 percent, followed by strategy and business development at 45 percent, information technology at 41 percent and research and development at 40 percent. Production, supply chain, quality control and distribution are used relatively less. The scope is narrow almost everywhere: 57 percent of users run AI in three or fewer of the fifteen functions surveyed, 24 percent in exactly one, and only about 1 percent in all fifteen.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI operations mean job cuts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at the scale the headlines suggest, on the American evidence. Of firms using AI in the Census Bureau's 2026 supplement, 95.7 percent reported no employment change attributable to it, with 2.3 percent reporting an increase and 2.0 percent a decrease. Task augmentation dominates: 44 percent of AI-using firms use AI to supplement a task a person already does, about 10 percent to perform a task previously done by an employee, and 52 percent report none of those effects at all. The number that moves is capital, not headcount. Sixteen percent of AI-using firms replaced existing software and equipment with AI-integrated solutions. At this stage AI is displacing your software budget more often than your people.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to hire someone for AI operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need somebody accountable for it, which is not the same as a new headcount. The Census evidence is that the least common organisational adjustment American firms make is hiring staff trained in AI, and yet breadth of functional use and operational investment are the dimensions most strongly associated with above-average firm performance. The work has to happen; the employment contract is optional. That is the reason the forward deployed engineer model exists, where a senior engineer works inside your systems and is accountable through to production rather than to handover.",
          },
        }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: TITLE, item: URL }],
    }],
};

export default function Page() {
  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "What Is AI Operations?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A · Updated {MOD}</span>
      <h1>What Is AI Operations?</h1>
      <p className="op-lede">
        AI operations is the work of making artificial intelligence part of how
        a company actually runs: choosing the functions it touches, rebuilding
        the workflows around it, owning its data, and keeping the result alive
        in production. A function, not a tool.
      </p>
      <p>
        I can be more precise than my own opinion, because somebody has now
        measured it. In April 2026 the United States Census Bureau published a
        working paper, CES 26-25, on the 2026 artificial intelligence supplement
        to its Business Trends and Outlook Survey. It is the only nationally
        representative read I know of that separates three things most people
        run together: whether a firm uses AI at all, which business functions it
        uses it in, and what the firm changed about itself in order to use it.
        That third layer is AI operations. I read the paper this morning. Every
        number below comes out of it or out of the Census Bureau&apos;s own
        reporting on the same survey.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src="/what-is-ai-operations-2026-09-12.jpg"
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The house still runs at night. The mill turns, the ledger walks, the
          gate is answered, the balance hangs ready, and the water under the
          flagstones drives all of it. One person sits at the middle with the
          governor wheel and the keys, watching the work instead of doing it.
          That platform is the job this piece is about.
        </figcaption>
      </figure>

      <h2>First, the two things this phrase means</h2>
      <p>
        Search for AI operations and you land in a collision of two different
        subjects, which is most of why the answers you get feel unsatisfying.
      </p>
      <p>
        The first is AIOps, a specific discipline inside information technology.
        IBM defines it as the application of artificial intelligence
        capabilities, such as natural language processing and machine learning
        models, to automate, streamline and optimize IT service management and
        operational workflows. Datadog, which sells it, calls it a discipline
        that leverages machine learning algorithms to identify the root cause of
        incidents, helping teams wrangle incoming alerts, remove duplicate
        alerts, identify false positives, and provide early anomaly, fault and
        failure detection and analysis. Both definitions describe AI pointed at
        your infrastructure. If you run a platform with a pager rota, that is a
        real and useful thing to buy.
      </p>
      <p>
        The second is what an owner usually means: AI pointed at the running of
        the company. Quotes, invoices, scheduling, onboarding, claims, chasing,
        reporting. The daily business of the house. Nobody sells that as a
        product, because it is not one. It is a function, and the rest of this
        piece is about what that function owns.
      </p>

      <h2>Where AI actually sits in American companies right now</h2>
      <p>
        During the supplement&apos;s reference period, November 2025 to January
        2026, 18 percent of American firms used AI in a business function. On an
        employment-weighted basis, which is to say counted by how many people
        work at those firms, the figure is 32 percent. Adoption is expected to
        reach 22 percent within six months. In the Census Bureau&apos;s separate
        reporting on the same survey through to May 2026, overall usage hovered
        between 17 and 20 percent, and the size gradient is steep: 37 percent
        for firms with at least 250 employees, 32 percent for firms with 100 to
        249, and under 20 percent for firms with four or fewer.
      </p>
      <p>
        Among the firms that do use AI in at least one business function, it
        concentrates in a handful of places. Sales and marketing, 52 percent.
        Strategy and business development, 45 percent. Information technology,
        41 percent. Research and development, 40 percent. Production, sourcing
        and supply chains, quality management and distribution trail well
        behind. The survey covers fifteen functions in all, from production of
        goods through finance and accounting, customer service, human resources
        and legal and compliance.
      </p>
      <p>
        The number I would put on a wall is this one: 57 percent of the firms
        using AI use it in three or fewer of those fifteen functions, 24 percent
        in exactly one, and roughly 1 percent in all fifteen. The paper&apos;s
        own latent class analysis names the largest group the minimalist
        adopters, 37 percent of functional users, with low probability of use
        across every function. Comprehensive adopters are 4 percent.
      </p>
      <p>
        So the common picture is not a company transformed by AI. It is a
        company with AI in the marketing corner.
      </p>

      <h2>The gap is the job</h2>
      <p>
        Here is the finding that turns a survey into a brief. Of businesses
        already using AI, 64 percent report no institutional adjustment
        whatsoever. The most common adjustments, training staff and developing
        new workflows, are each reported by about 15 percent of AI-using firms.
        Changes to data management and storage practices, and complementary
        capital investment, sit in the 7 to 8 percent range. The least common
        adjustment of all is hiring staff trained in AI.
      </p>
      <p>
        Two thirds of the companies using this technology have bought the tool
        and changed nothing about themselves. The paper&apos;s own phrase for
        what that implies is a reliance on off-the-shelf tools, or a significant
        lag in organisational restructuring.
      </p>
      <p>
        And the same paper, in its regressions, finds that breadth of business
        function use, worker task use and operational investment all carry
        positive and statistically significant associations with the likelihood
        of above-average current and future performance and with current sales
        increases, with functional breadth the strongest of the three. The
        authors are careful to call these associations rather than causes, and
        so am I. But the shape is hard to miss. The dimension most strongly
        linked to performance is the dimension most companies have skipped.
      </p>
      <p>
        That skipped dimension has a name, and the name is AI operations.
      </p>

      <h2>What the function actually owns</h2>
      <p>
        Five things. I have never seen a deployment survive production without
        all five having an owner, and I have watched several die because two of
        them belonged to nobody.
      </p>
      <p>
        <strong>The list.</strong> Which processes get automated, in what order,
        and which ones must not be. This is a judgement about the business, not
        about the model, and it is the decision that determines everything
        downstream. I have written separately on{" "}
        <Link href="/blog/which-business-processes-should-i-automate-first-with-ai-2026-07-24/">
          which processes to automate first
        </Link>
        .
      </p>
      <p>
        <strong>The access.</strong> The data the system reads, the systems it
        is allowed to write to, and the credentials that make that real. Seven
        to eight percent of AI-using firms changed how they manage and store
        data. Everybody else is asking a model to run their operations through a
        keyhole.
      </p>
      <p>
        <strong>The build.</strong> The actual integration into the tools the
        company already pays for, rather than a parallel universe of new tabs.
        Sixteen percent of AI-using firms have replaced existing software and
        equipment with AI-integrated solutions, and that is the healthy pattern:
        the new thing takes over a job the old thing was doing, instead of
        joining the queue beside it.
      </p>
      <p>
        <strong>The production seat.</strong> Monitoring, failure handling, the
        human in the loop, the rules about what the system may do unsupervised.
        This is the part that gets skipped and the part that decides whether the
        pilot becomes infrastructure. It is why I wrote about{" "}
        <Link href="/blog/how-do-i-make-ai-agents-safe-enough-to-run-real-operations-2026-08-31/">
          making agents safe enough to run real operations
        </Link>{" "}
        and about{" "}
        <Link href="/blog/why-do-my-ai-pilots-never-reach-production-2026-08-24/">
          why pilots never reach production
        </Link>
        .
      </p>
      <p>
        <strong>The measure.</strong> One number per process, taken before and
        after. Hours, error rate, cycle time, cost per unit of work. Without it
        you cannot tell an expensive habit from an operating advantage, and
        neither can your board.
      </p>

      <h2>What AI operations is not</h2>
      <p>
        It is not a headcount reduction plan, whatever you have been told. In
        the Census data, 95.7 percent of AI-using firms report no employment
        change attributable to AI, 2.3 percent an increase and 2.0 percent a
        decrease. Task augmentation is the dominant effect at 44 percent of
        AI-using firms, task substitution about 10 percent, task creation about
        11 percent, and 52 percent report none of the three. Among firms that do
        substitute, 71 percent replace only a small number of tasks, though the
        share replacing a large number has risen from 2.5 percent in the first
        supplement in early 2024 to 7 percent now. The direction is real. The
        magnitude is not what the headlines say.
      </p>
      <p>
        It is not an IT project either. Of the firms not planning to adopt AI,
        65 percent say the reason is that AI is not applicable to their
        business, well ahead of lack of knowledge at 22 percent and privacy or
        security concerns at 20 percent. A company that believes AI does not
        apply to it has usually only ever been shown the chat window. Somebody
        has to walk the actual processes before that belief can change, and that
        is an operating job, not a software purchase.
      </p>

      <h2>Who does this work</h2>
      <p>
        Somebody has to sit on that raised platform. The Census evidence says
        the least common thing American firms do is hire a person trained in AI,
        so in practice the function is either carried by an existing operator
        who now has two jobs, or it is brought in.
      </p>
      <p>
        Bringing it in is the model the largest technology companies picked for
        themselves, and they gave it a name: the forward deployed engineer, a
        senior engineer who works inside the customer&apos;s systems and stays
        accountable through to production. Reporting by The Pragmatic Engineer,
        The New Stack, Perspective AI and Paraform puts growth in forward
        deployed job listings at roughly 800 percent between January and
        September 2025 and above 1,000 percent year on year into 2026. OpenAI
        launched a deployment subsidiary in May 2026 and Anthropic launched a
        services arm in July 2026, both built on the same idea. I counted the
        open roles myself yesterday and wrote up{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          what a forward deployed engineer actually is
        </Link>
        , from 240 live postings at ten companies.
      </p>
      <p>
        That is the seat I sit in. I spent my career as a chief financial
        officer before I did this, which is the reason I care about the measure
        more than the model, and at{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>{" "}
        I run AI operations inside small and mid sized companies as a forward
        deployed engineer rather than as an adviser: your systems, your
        credentials, my accountability until the process runs without me. If
        that is the shape you need, the work is described at{" "}
        <a href="https://meethayat.com/services/fde">
          meethayat.com/services/fde
        </a>
        .
      </p>

      <h2>How to tell whether you have an AI operations function</h2>
      <p>
        Five questions, and you can answer them before lunch. Name the processes
        AI touches in your company today. Name the person accountable when one
        of them produces a wrong answer at two in the morning. Say what changed
        about your workflows, your data or your systems in order to make room
        for it. Say what number moved, and by how much. Say which process is
        next and why that one.
      </p>
      <p>
        If you can answer all five, you have the function, whatever you call it.
        If you can answer one or two, you have tools. On the national evidence,
        that puts you with the majority, which is not a comfort so much as a
        description of the opportunity.
      </p>

      <p>
        If you want a second pair of eyes on what to automate first, I do a free
        audit call: one call, then a written list of what to automate first,
        what it saves and what it costs. Book it at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What is AI operations?</h3>
      <p>
        The function that makes AI part of how a company runs rather than a tool
        sitting on top of it. It owns which business functions AI is allowed to
        touch, the workflows rebuilt around it, the data and system access it
        needs, and the accountability for the result once it is live. The United
        States Census Bureau measures those layers separately in its 2026 AI
        supplement, and the separation is the whole point: 18 percent of
        American firms used AI in a business function in the reference period,
        while 64 percent of AI-using businesses had changed nothing about
        themselves to accommodate it.
      </p>

      <h3>Is AI operations the same as AIOps?</h3>
      <p>
        No. AIOps is AI pointed at your infrastructure, defined by IBM as the
        application of artificial intelligence capabilities to automate,
        streamline and optimize IT service management and operational workflows,
        and by Datadog as a discipline for finding the root cause of incidents
        and cutting alert noise. AI operations in the sense an owner means is AI
        pointed at the running of the company: finance, sales, service,
        administration. Same two words, different department, different buyer.
      </p>

      <h3>How is AI implemented in a business?</h3>
      <p>
        Today, mostly without any structural change, which is why so little of
        it lands. Sixty four percent of AI-using American firms made no
        organisational adjustment at all. Training staff and developing new
        workflows were each reported by about 15 percent, and changes to data
        management and storage by 7 to 8 percent. Implementation that survives
        runs the other way round: one business function, the workflow rebuilt
        around what the model can genuinely do, real data access, a named owner
        for the output, one number measured before and after. The tool is the
        last decision, not the first.
      </p>

      <h3>Which business functions use AI the most?</h3>
      <p>
        Among American firms using AI in at least one function: sales and
        marketing 52 percent, strategy and business development 45 percent,
        information technology 41 percent, research and development 40 percent.
        Production, sourcing and supply chains, quality control and distribution
        trail. Breadth is rare. Fifty seven percent use it in three or fewer of
        the fifteen surveyed functions and about 1 percent use it in all
        fifteen.
      </p>

      <h3>Does AI operations mean job cuts?</h3>
      <p>
        Not on the current American evidence. Of firms using AI, 95.7 percent
        report no employment change attributable to it, with increases and
        decreases each around 2 percent. Augmentation leads at 44 percent of
        AI-using firms against roughly 10 percent substituting a task a person
        used to do. Meanwhile 16 percent have replaced existing software and
        equipment with AI-integrated solutions. In this phase, AI is a
        substitute for legacy capital more often than for labour, which is a
        different conversation to have with your team and a better one.
      </p>

      <h3>Do I need to hire someone for AI operations?</h3>
      <p>
        You need the work owned, not necessarily a new employee. Hiring staff
        trained in AI is the least common organisational adjustment American
        firms make, while functional breadth and operational investment are the
        dimensions most strongly associated with above-average performance. So
        the work matters and the headcount is optional. A fractional or forward
        deployed operator covers it for a small or mid sized company, and the
        test for either is simple: do they have write access to your systems and
        do they stay past go-live.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        The firm, function, task, adjustment, employment and capital figures are
        from The Microstructure of AI Diffusion: Evidence from Firms, Business
        Functions, and Worker Tasks, by Kathryn Bonney, Cory Breaux, Emin
        Dinlersoz, Lucia Foster, John Haltiwanger and Aditya Pande, Center for
        Economic Studies working paper{" "}
        <a href="https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html" target="_blank" rel="noopener noreferrer">
          CES 26-25
        </a>
        , April 2026, drawn from the 2026 AI supplement to the United States
        Census Bureau&apos;s Business Trends and Outlook Survey with a reference
        period of November 2025 to January 2026. The overall usage range and the
        figures by firm size are from the Census Bureau story{" "}
        <a href="https://www.census.gov/library/stories/2026/05/ai-use-businesses.html" target="_blank" rel="noopener noreferrer">
          Large Firms With at Least 20 Employees Biggest AI Users
        </a>
        , May 2026. The AIOps definitions are quoted from{" "}
        <a href="https://www.ibm.com/think/topics/aiops" target="_blank" rel="noopener noreferrer">
          IBM
        </a>{" "}
        and{" "}
        <a href="https://www.datadoghq.com/knowledge-center/aiops/" target="_blank" rel="noopener noreferrer">
          Datadog
        </a>
        , both read on 12 September 2026. The forward deployed hiring growth
        figures and the OpenAI and Anthropic launches are from reporting by The
        Pragmatic Engineer, The New Stack, Perspective AI and Paraform, and are
        flagged as reporting rather than as something I counted. The working
        paper is a Census research paper and carries its own caveat: it has not
        undergone the review accorded Census Bureau publications, and its
        regression results are described by the authors as associations, not
        causes. I have kept them that way here.
      </p>
    </PageShell>
  );
}
