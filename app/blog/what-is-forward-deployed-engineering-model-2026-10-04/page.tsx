import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "what-is-forward-deployed-engineering-model-2026-10-04";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-04";
const MOD = "2026-10-04";
const TITLE = "What Is Forward Deployed Engineering Model? The 4 Versions Running Today, and Who Pays for Each";
const DESC =
  "The forward deployed engineering model is a software company putting its own engineers inside a customer to make the product work in production, then folding what they built back into the product. It spends gross margin on people to buy a customer who doesn't leave. Palantir built it and still runs at an 85 percent gross margin. Databricks bills for it, OpenAI and Anthropic have spun it into separate companies. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the golden age Islamic manuscript style, lapis, turquoise and gold leaf on cream. In a central roundel framed by a compass star, a craftsman in a blue robe works at an anvil inside a patron's workshop, gears and tools on the walls around him. A gold thread runs from his workshop up to a domed master workshop in the top right corner, where four craftsmen forge the same part for everyone. In the lower left arch a pair of scales weighs a pan of gold coins labelled margin against a small fortress labelled moat.";

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
        width: 1024,
        height: 559,
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
      about: "The forward deployed engineering model as a business model: how Palantir built it, what it costs in gross margin, and the four versions software companies run in 2026",
      citation: [
        {
          "@type": "WebPage",
          name: "Palantir Technologies Form 10-Q for the quarter ended 30 June 2026",
          publisher: { "@type": "Organization", name: "Palantir Technologies" },
          url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000041/pltr-20260630.htm",
        },
        {
          "@type": "WebPage",
          name: "Trading Margin for Moat: Why the Forward Deployed Engineer Is the Hottest Job in Startups",
          publisher: { "@type": "Organization", name: "Andreessen Horowitz" },
          url: "https://a16z.com/services-led-growth/",
        },
        {
          "@type": "WebPage",
          name: "What are Forward Deployed Engineers, and why are they so in demand?",
          publisher: { "@type": "Organization", name: "The Pragmatic Engineer" },
          url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers",
        },
        {
          "@type": "WebPage",
          name: "OpenAI launches the OpenAI Deployment Company to help businesses build around intelligence",
          publisher: { "@type": "Organization", name: "Advent International" },
          url: "https://www.adventinternational.com/news/openai-launches-the-openai-deployment-company-to-help-businesses-build-around-intelligence/",
        },
        {
          "@type": "WebPage",
          name: "Anthropic, Blackstone, and Hellman & Friedman Introduce Ode with Anthropic, an Enterprise AI Services Firm",
          publisher: { "@type": "Organization", name: "Business Wire" },
          url: "https://finance.yahoo.com/technology/ai/articles/anthropic-blackstone-hellman-friedman-introduce-140000461.html",
        },
        {
          "@type": "WebPage",
          name: "Databricks, Sr. Forward Deployed Engineer, New York City",
          publisher: { "@type": "Organization", name: "Databricks" },
          url: "https://databricks.com/company/careers/open-positions/job?gh_jid=8739462002",
        },
        {
          "@type": "WebPage",
          name: "Figma, Forward Deployed Engineer",
          publisher: { "@type": "Organization", name: "Figma" },
          url: "https://boards.greenhouse.io/figma/jobs/6158162004",
        }],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Hayat Amin",
      jobTitle: "Forward Deployed Engineer and Fractional Chief Financial Officer",
      url: SITE,
      sameAs: [
        "https://meethayat.com",
        "https://beyondelevation.com",
        "https://www.linkedin.com/in/hayatamin"],
      description:
        "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside the founder from the first conversation to the wire transfer on an exit. He is available now for fractional CFO and AI operations work through Beyond Elevation.",
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      url: HERO,
      contentUrl: HERO,
      width: 1024,
      height: 559,
      caption: HERO_ALT,
      name: "The forward deployed engineering model, illuminated as a craftsman in a patron's workshop tied by a gold thread to the master workshop, with margin weighed against moat",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "forward deployed engineering model, forward deployed engineer business model, forward deployed engineer operating model, forward deployed model palantir, FDE model, Palantir, Databricks, OpenAI Deployment Company, Ode with Anthropic, Hayat Amin, Beyond Elevation, New York",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is forward deployed engineering model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's a way of selling software in which the vendor puts its own engineers inside the customer to make the product work in production, then turns what those engineers built into product the next customer gets for free. The vendor gives up gross margin on the first deployment and gets a customer who expands and rarely leaves. Palantir built the model, and Andreessen Horowitz's Joe Schmidt named the trade in June 2025 as trading margin for moat.",
          },
        },
        {
          "@type": "Question",
          name: "What is the forward deployed engineer business model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spend early, earn late. Palantir's 10-Q for the quarter ended 30 June 2026 says it runs pilots and bootcamps with customers generally at its own expense and without a guarantee of future returns. The same filing shows revenue of $1.94 billion in the quarter, up 93 percent, a gross margin of 86 percent excluding stock based compensation, and average revenue from its top twenty customers of $124 million over twelve months, up 67 percent. The cost lands at the start of the relationship and the revenue lands in the expansion.",
          },
        },
        {
          "@type": "Question",
          name: "What is the forward deployed engineer operating model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two teams with opposite briefs. Palantir's forward deployed team, called Delta, works on one customer and many capabilities. Its product team, called Dev, works on one capability and many customers. The forward deployed engineer builds what the customer needs, and anything the product is missing goes back to Dev as a feature, so each deployment makes the next one cheaper.",
          },
        },
        {
          "@type": "Question",
          name: "What is the forward deployed model at Palantir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palantir embedded engineers with customers for long stretches to connect their data and build working applications on its platforms. The Pragmatic Engineer reports that until around 2016 Palantir had more forward deployed engineers than traditional software engineers, and that after Foundry launched that year many moved into core product roles, taking what they had learned in the field with them.",
          },
        },
        {
          "@type": "Question",
          name: "Is the forward deployed engineering model just consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can slide into it. The test is where the work ends up. If what the engineer builds goes back into a product the vendor sells to everyone, it's the forward deployed model. If it stays with one client and is billed by the hour, it's services under a new title. Figma writes its version as a product role and says it is not a sales or services function. Databricks writes in its postings that FDEs are billable. Both are honest, and they're different models.",
          },
        },
        {
          "@type": "Question",
          name: "Can a small company use the forward deployed engineering model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not the Palantir version. A 50 or 200 person company isn't going to get a team of embedded engineers from a vendor for free. What it can buy is the method at its own size: one engineer inside the business for a fixed stretch, building in production on the systems it already runs, then handing everything back. That is the work Hayat Amin does through Beyond Elevation.",
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
        { label: "What Is Forward Deployed Engineering Model?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>What Is Forward Deployed Engineering Model?</h1>
      <p className="op-lede">
        The forward deployed engineering model is a software company putting its
        own engineers inside a customer to make the product work in production,
        then folding what they built back into the product. You spend gross
        margin on people early to keep a customer who expands and doesn&apos;t
        leave.
      </p>
      <p>
        I&apos;m Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies from that seat, so I read this model
        the way a CFO does, as a trade between margin now and revenue later.
        These days I do the engineering half myself, inside client companies.
        Most pieces on this subject describe the job. This one is about the
        model, which is how the company pays for the job and what it gets back.
        I read Palantir&apos;s latest quarterly filing, the a16z essay that named
        the trade, the two 2026 launches from OpenAI and Anthropic, and 886 live
        Databricks postings this morning, 4 October 2026.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1024}
          height={559}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The craftsman works at the patron&apos;s anvil, with the patron&apos;s
          tools. The gold thread is the part people leave out: it carries what he
          made back to the master workshop, where it becomes a part every patron
          gets. The scales in the corner are the bill.
        </figcaption>
      </figure>

      <h2>The job and the model are two different things</h2>
      <p>
        The job is one engineer at one customer, writing production code inside
        somebody else&apos;s systems. I&apos;ve written up what that engineer
        does in{" "}
        <Link href="/blog/forward-deployed-engineer-role-responsibilities-2026-10-02/">
          forward deployed engineer role and responsibilities
        </Link>
        , counted from 185 live postings.
      </p>
      <p>
        The model is the decision above the job. A software company that runs
        it accepts that its first deployments at a customer will cost real
        engineering salaries, often unpaid, and bets that two things come back.
        The first is a customer whose operations are wired so deeply into the
        product that switching stops being a conversation. The second is product.
        Every gap the engineer fills at one customer becomes a feature the next
        customer gets without anyone flying out.
      </p>
      <p>
        If you only remember one test, use this one. Follow the code. If what
        the engineer builds ends up in a product sold to everyone, you&apos;re
        looking at the model. If it stays with one client and is invoiced by the
        day, you&apos;re looking at consulting with a better title.
      </p>

      <h2>Where the model came from: Palantir&apos;s Delta and Dev</h2>
      <p>
        Palantir built it, and the clearest description is the one Gergely Orosz
        published in The Pragmatic Engineer on 12 August 2025. Palantir split
        engineering into two teams with opposite briefs. Delta, the forward
        deployed team, works on &quot;one customer, many capabilities&quot;. Dev,
        the product team, works on &quot;one capability, many customers&quot;.
        When a customer needs something the platform can&apos;t do, the Delta
        engineer does the product work of adding it.
      </p>
      <p>
        The same article reports that until around 2016 Palantir had more
        forward deployed engineers than traditional software engineers. After
        Foundry launched that year, many of them moved into product roles. I
        think that&apos;s the most useful fact about the model. It starts heavy
        on people, and if it works, the people turn into product.
      </p>
      <p>
        I wrote about how Palantir hires for it today, all 77 roles live in
        September, in{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-at-palantir-2026-09-19/">
          what is a forward deployed engineer at Palantir
        </Link>
        .
      </p>

      <h2>The economics: trading margin for moat</h2>
      <p>
        Joe Schmidt of Andreessen Horowitz named the trade on 4 June 2025 in an
        essay called Trading Margin for Moat. His line on buyers is the one
        everyone quotes: &quot;Enterprises buying AI are like your grandma getting
        an iPhone: they want to use it, but they need you to set it up.&quot; His
        case is that the companies which owned their category in the cloud era
        did the same thing and grew out of the margin hit. He gives ServiceNow
        at a 63.2 percent gross margin at its IPO and 79 percent by 2024, and
        Workday at 54.1 percent at its IPO and 75 percent by 2024.
      </p>
      <p>
        That&apos;s a 15.8 point climb for ServiceNow and 20.9 for Workday, my
        subtraction off his numbers. As a finance person, that&apos;s the bit I
        care about. Engineers in the field show up as cost of revenue on day one.
        If the model works, the share of revenue they cost falls every year,
        because each deployment needs less custom work than the last.
      </p>
      <p>
        Schmidt&apos;s warning is just as clear. Founders who chase margin and
        skip the hard implementation work &quot;risk missing the forest for the
        trees&quot;, and those who do the work have to automate it, with common
        libraries and integration tooling, or they become a services company.
      </p>

      <h2>What the model looks like on a real income statement</h2>
      <p>
        Palantir filed its 10-Q for the quarter ended 30 June 2026 on 4 August
        2026. I read it this morning. Revenue was $1,935,464 thousand, up 93
        percent on the same quarter a year earlier. Cost of revenue was $296,870
        thousand, which gives a gross margin of 84.7 percent by my division, or
        86 percent excluding stock based compensation as Palantir reports it.
      </p>
      <p>
        Two lines in the filing describe the model better than any blog post.
        Palantir says it conducts &quot;pilots and bootcamps with customers,
        generally at our own expense and without a guarantee of future
        returns&quot;. It also says its sales and marketing costs include the
        people &quot;executing on pilots&quot;. So the free early work doesn&apos;t
        dent gross margin at all. It sits in sales and marketing, $339,500
        thousand in the quarter, 17.5 percent of revenue by my division.
      </p>
      <p>
        The payback shows up in the biggest accounts. Average revenue from
        Palantir&apos;s top twenty customers over the twelve months to 30 June
        2026 was $124 million, up 67 percent from $75 million a year earlier.
        That is what the moat looks like in a filing: the same customers buying
        far more each year.
      </p>

      <h2>The 4 versions of the model running in 2026</h2>
      <p>
        The word is the same at every company. The economics aren&apos;t. These
        are the four I can see clearly from what the companies themselves
        publish.
      </p>

      <h3>1. The product model: Palantir and Figma</h3>
      <p>
        The engineer reports into product and is judged on what flows back into
        it. Figma&apos;s Forward Deployed Engineer posting says &quot;This is a
        senior/staff-level engineering role within Product and Engineering, not a
        sales or services function.&quot; It asks the engineer to turn what they
        learn &quot;into a reusable path for future customers instead of taking
        permanent ownership of the customer&apos;s codebase.&quot; That sentence
        is the whole model. It suits a vendor with a platform and a long view.
        It&apos;s wrong for anyone who needs the engineer to bring in revenue
        this quarter.
      </p>

      <h3>2. The billable model: Databricks</h3>
      <p>
        On 4 October 2026 Databricks had 886 live roles on its public job feed.
        100 had forward deployed in the title, and 80 of those use the word
        billable. Its{" "}
        <a href="https://databricks.com/company/careers/open-positions/job?gh_jid=8739462002" target="_blank" rel="noopener noreferrer">
          Sr. Forward Deployed Engineer in New York City
        </a>{" "}
        is one of them, and the line reads &quot;FDEs are billable and know how to
        complete projects according to specification&quot;. The customer pays for
        the engineer&apos;s time, so the margin hit is smaller and the role leans
        towards professional services. That&apos;s a perfectly good business. It
        is a different one from Palantir&apos;s, and the buyer should know which
        they&apos;re paying for.
      </p>

      <h3>3. The deployment company model: OpenAI and Anthropic</h3>
      <p>
        In 2026 both frontier labs put the model into a separate company. OpenAI
        launched the OpenAI Deployment Company on 11 May 2026 with more than $4
        billion of initial investment, according to the release published by
        founding partner Advent International. It agreed to acquire Tomoro, an
        applied AI consulting and engineering firm, for approximately 150
        experienced forward deployed engineers and deployment specialists. The
        new company is majority owned and controlled by OpenAI.
      </p>
      <p>
        Anthropic, Blackstone and Hellman &amp; Friedman introduced Ode with
        Anthropic on 15 July 2026. It&apos;s built on Fractional AI, the applied AI
        services firm acquired in May 2026, and led by its co-founders, Chris
        Taylor as chief executive and Eddie Siegel as chief technology officer.
        Goldman Sachs, General Atlantic, Leonard Green &amp; Partners, Apollo
        Global Management, GIC and Sequoia Capital are in the consortium.
      </p>
      <p>
        Why a separate company? My read, as a CFO, is that it keeps the
        services margin off the lab&apos;s own income statement while keeping the
        deployment learning inside the family. That&apos;s my interpretation, and
        neither release says it.
      </p>

      <h3>4. The fractional model: for companies too small for the other three</h3>
      <p>
        None of the first three is built for a company with 40 or 400 staff in
        New York or Chicago. Palantir&apos;s free pilots are paid back by accounts
        like its top twenty, averaging $124 million a year. Databricks bills against a Databricks contract. The
        two deployment companies were launched with consortiums of the largest
        investors in the world behind them, and I&apos;d expect them to sell to
        customers of that size.
      </p>
      <p>
        The smaller version keeps the method and drops the vendor. One engineer
        goes inside the business for a fixed stretch, builds in production on
        the systems it already runs, connects the ones that don&apos;t talk, and
        hands everything back. Figma&apos;s rule still applies. The engineer
        leaves something reusable and doesn&apos;t keep the keys. This is the
        version I run, through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , my firm.
      </p>

      <h2>How to tell which model you&apos;re buying</h2>
      <p>
        If a vendor offers you forward deployed engineers, five questions sort
        out which version you&apos;re getting. Who pays for the engineer&apos;s
        time, you or them? Which team does the engineer report into, product,
        services or sales? What happens to the code they write, does it go into
        the product or stay in your repository? Who owns it at the end? And what
        does the engagement cost in year two, once the free part is over?
      </p>
      <p>
        If the answers are &quot;they pay, product, into the product, they do, and
        more&quot;, you&apos;re in Palantir&apos;s model, and the cheap first year
        is paid for by a bigger contract later. That can be a great deal. Just
        know it&apos;s the deal. If you want the engineering without the lock in,
        ask for the fractional version and insist the work stays yours.
      </p>
      <p>
        If you suspect the whole thing is a consultant with a new title, I
        answered that head on in{" "}
        <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">
          is a forward deployed engineer just a consultant
        </Link>
        , and the plain definition of the job is in{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          what is a forward deployed engineer
        </Link>
        .
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology,
        most of it as a chief financial officer in companies growing faster than
        their systems. I sold three of them from that seat, with American Express
        and TripAdvisor among the buyers, and carried three FT 100 fastest
        growing listings along the way.
      </p>
      <p>
        I&apos;m exceptional at exactly the trade this piece describes, because
        I&apos;ve sat on both sides of it. As a CFO I read where engineering cost
        lands and what it buys. As a forward deployed engineer I build AI
        operations inside companies myself, connect the systems that were never
        built to talk to each other, and put real time numbers in front of chief
        executives so they can run the week on them. I also value the
        intellectual property and data a company already owns, and sit beside
        founders from the first conversation to the wire transfer on an exit.
      </p>
      <p>
        I&apos;m available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and you can book the engineering side at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>
        .
      </p>

      <p>
        If you want a second pair of eyes on what to automate first, I do a free
        audit call, one call and then a written list, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What is forward deployed engineering model?</h3>
      <p>
        A vendor puts its own engineers inside a customer to make the product
        work in production, then turns what they built into product the next
        customer gets. It gives up margin on the first deployment to keep a
        customer who expands. Joe Schmidt of Andreessen Horowitz called it
        trading margin for moat.
      </p>

      <h3>What is the forward deployed engineer business model?</h3>
      <p>
        Spend early, earn late. Palantir runs pilots and bootcamps &quot;generally
        at our own expense&quot;, and in the quarter to 30 June 2026 reported
        revenue up 93 percent, an 86 percent gross margin excluding stock based
        compensation, and $124 million average revenue from its top twenty
        customers over twelve months, up 67 percent.
      </p>

      <h3>What is the forward deployed engineer operating model?</h3>
      <p>
        Two teams with opposite briefs. At Palantir, Delta works on one customer
        and many capabilities, and Dev works on one capability and many
        customers. Whatever the platform lacks at one customer goes back to Dev
        as a feature.
      </p>

      <h3>What is the forward deployed model at Palantir?</h3>
      <p>
        Engineers embedded with customers for long stretches, connecting their
        data and building on Palantir&apos;s platforms. Until around 2016 Palantir
        had more of them than traditional software engineers, and after Foundry
        launched many moved into product.
      </p>

      <h3>Is the forward deployed engineering model just consulting?</h3>
      <p>
        Follow the code. If it goes back into a product sold to everyone,
        it&apos;s the model. If it stays with one client and is billed by the
        day, it&apos;s services. Figma calls its role &quot;not a sales or services
        function&quot;. Databricks writes &quot;FDEs are billable&quot;.
      </p>

      <h3>Can a small company use the forward deployed engineering model?</h3>
      <p>
        Not the Palantir version, which is paid for by contracts a 200 person
        company won&apos;t sign. It can buy the method at its own size: one
        engineer inside the business for a fixed stretch, building on its own
        systems, then handing it all back.
      </p>

      <h2>Where these facts come from</h2>
      <p>
        Every number above was read on 4 October 2026. Palantir&apos;s figures are
        from its{" "}
        <a href="https://www.sec.gov/Archives/edgar/data/1321655/000132165526000041/pltr-20260630.htm" target="_blank" rel="noopener noreferrer">
          Form 10-Q for the quarter ended 30 June 2026
        </a>{" "}
        on sec.gov. The Delta and Dev description and the 2016 ratio are from{" "}
        <a href="https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers" target="_blank" rel="noopener noreferrer">
          The Pragmatic Engineer
        </a>
        . The margin history and quotes are from Joe Schmidt&apos;s{" "}
        <a href="https://a16z.com/services-led-growth/" target="_blank" rel="noopener noreferrer">
          Trading Margin for Moat
        </a>{" "}
        at Andreessen Horowitz. The OpenAI Deployment Company facts are from{" "}
        <a href="https://www.adventinternational.com/news/openai-launches-the-openai-deployment-company-to-help-businesses-build-around-intelligence/" target="_blank" rel="noopener noreferrer">
          the launch release on Advent International&apos;s site
        </a>
        , and the Ode facts from{" "}
        <a href="https://finance.yahoo.com/technology/ai/articles/anthropic-blackstone-hellman-friedman-introduce-140000461.html" target="_blank" rel="noopener noreferrer">
          the Business Wire release
        </a>
        . The Databricks count is from its public Greenhouse feed, and the Figma
        lines from its{" "}
        <a href="https://boards.greenhouse.io/figma/jobs/6158162004" target="_blank" rel="noopener noreferrer">
          Forward Deployed Engineer posting
        </a>
        . The margin and percentage arithmetic marked as mine is my own
        division off their published figures.
      </p>
    </PageShell>
  );
}
