import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "property-management-kpis-2026-10-17";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-17";
const MOD = "2026-10-17";
const TITLE = "Property Management KPIs: The 8 Numbers I Would Put on a Live Dashboard, and the System Each One Is Stuck In";
const DESC =
  "The eight property management KPIs an owner of a US property management company should see live: economic occupancy, delinquency by age with names, vacancy loss in dollars, make ready days, work orders past their promise, renewals with no decision, applications flagged at screening, and doors gained and lost. Each one sits in a different system, which is why the owner statement arrives a month after the decision it describes. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript page in the spirit of the golden age of Islamic art, framed in lapis and turquoise arabesque panels with gold leaf on aged cream paper. Under a pointed arch, a figure in a patterned robe and turban holds up a brass astrolabe beside a tall wall of small arched doors, each with its own little lamp, some doors glowing gold and others dark. Behind her rise domes and courtyards. On a carved bench to the left lies a closed leather ledger.";

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

const NUMBERS = [
  "Economic occupancy, next to physical occupancy",
  "Delinquency by age, with the names attached",
  "Vacancy loss in dollars, by unit",
  "Make ready days on every vacant unit",
  "Work orders past the time you promised",
  "Leases ending in 90 days with no decision",
  "Applications flagged at screening",
  "Doors gained and doors lost"];

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
      about: [
        { "@type": "Thing", name: "Property management key performance indicators" },
        { "@type": "Thing", name: "Residential property management operations" },
        { "@type": "Thing", name: "Real time operational dashboards" }],
      citation: [
        {
          "@type": "WebPage",
          name: "Quarterly Residential Vacancies and Homeownership, Second Quarter 2026",
          publisher: { "@type": "Organization", name: "U.S. Census Bureau" },
          url: "https://www.census.gov/housing/hvs/files/qtr226/Q226press.pdf",
        },
        {
          "@type": "WebPage",
          name: "Apartment Turnover",
          publisher: { "@type": "Organization", name: "National Apartment Association" },
          url: "https://naahq.org/sites/default/files/2025-03/01a.%20Apartment%20Turnover%202025.pdf",
        },
        {
          "@type": "WebPage",
          name: "2026 Property Management Industry Report",
          publisher: { "@type": "Organization", name: "Buildium" },
          url: "https://www.buildium.com/resource/2026-property-management-industry-report/",
        },
        {
          "@type": "WebPage",
          name: "Property, Real Estate, and Community Association Managers",
          publisher: { "@type": "Organization", name: "U.S. Bureau of Labor Statistics" },
          url: "https://www.bls.gov/ooh/management/property-real-estate-and-community-association-managers.htm",
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
      width: 1408,
      height: 768,
      caption: HERO_ALT,
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#list`,
      name: "The eight property management KPIs worth putting on a live dashboard",
      numberOfItems: NUMBERS.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: NUMBERS.map((n, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: n,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is KPI in property management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A KPI in property management is a number that tells the owner of a management company whether the doors they look after are earning rent, getting fixed and staying full. The useful ones are economic occupancy, delinquency by age, vacancy loss, make ready days, overdue work orders, renewals without a decision, screening flags and doors gained and lost. It only earns the name if somebody acts on it inside the week.",
          },
        },
        {
          "@type": "Question",
          name: "What are some property management KPI examples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Economic occupancy, which is rent collected over the rent the portfolio could have earned. Delinquency in 0 to 30, 31 to 60, 61 to 90 and 90 plus day buckets. Vacancy loss, which is days vacant times daily rent. Make ready days per vacant unit. Work orders past their promised date. Leases ending in the next 90 days without a renewal decision. Applications flagged for fraud. Doors under management gained and lost this month.",
          },
        },
        {
          "@type": "Question",
          name: "What should a property management KPI dashboard show?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eight numbers, refreshed daily, each with the list of units or names one click under it: economic occupancy beside physical occupancy, delinquency by age, vacancy loss in dollars, make ready days, work orders past their promise, renewals with no decision, screening flags and doors gained and lost. Most of them live in the property management system, but the maintenance, leasing and sales pieces live in other tools, so most of the work is joining them.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most important property management metrics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a third party manager, the two that move money fastest are delinquency by age and vacancy loss in dollars, because both turn into lost rent for the owner and lost fees for the manager within days. The one that keeps owners signed is maintenance: Buildium's 2026 report says 56 percent of owners name maintenance support as the main reason they hired a property manager.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build a property management dashboard in Excel or Power BI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The tool on the screen matters less than what feeds it. AppFolio lists a read only API on its Plus plan, and Buildium includes its Open API on Premium, so the property management system can feed Excel, Power BI or anything else on a schedule. The maintenance tool, the leasing tool and the sales pipeline still have to be joined to it.",
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
        { label: "Property Management KPIs" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>Property Management KPIs: The 8 Numbers I Would Put on a Live Dashboard, and the System Each One Is Stuck In</h1>
      <p className="op-lede">
        The property management KPIs worth watching live are eight: economic
        occupancy, delinquency by age, vacancy loss in dollars, make ready days,
        work orders past their promise, renewals with no decision, applications
        flagged at screening, and doors gained and lost. Each one needs a name
        or a unit attached, refreshed daily.
      </p>
      <p>
        I&apos;m Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies from that seat, and I now build the
        reporting plumbing inside companies as a forward deployed engineer. This
        piece is for the owner of a third party residential management company
        in the United States, somewhere between 300 and 5,000 doors, in a city
        like Dallas, Atlanta or New York. You run the week on a property
        management system and a pile of exports, and you see most of these
        numbers only when the owner statements go out.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          A wall of small doors, some lit and some dark, read at a glance through
          one brass instrument. The ledger on the bench stays closed. She
          doesn&apos;t need to wait for it to know which doors have gone out.
        </figcaption>
      </figure>

      <h2>Why the owner statement is too late</h2>
      <p>
        A property management company earns its fee on rent that arrives and
        keeps its contracts on repairs that get done. Both decay by the day. A
        unit that sits vacant for an extra week costs a week&apos;s rent and
        nothing on earth recovers it. A tenant who&apos;s 20 days late is a
        phone call. At 75 days, it&apos;s a conversation with your attorney.
      </p>
      <p>
        The month end packet tells the owner what happened, and it&apos;s
        accurate. Yardi Breeze, for one, lets you customise report packets by
        owner or property, and that&apos;s what most of the industry sends.
        It&apos;s also 30 days late for every decision on this list.
      </p>
      <p>
        The market isn&apos;t forgiving the delay either. The U.S. Census Bureau
        put the national rental vacancy rate at 7.3 percent in the second quarter
        of 2026, up from 7.0 percent a year earlier, although it says the change
        isn&apos;t statistically significant. In 2022 the second quarter figure
        was 5.6. More empty units means each day of vacancy is harder to win
        back.
      </p>
      <p>
        Buildium&apos;s 2026 Property Management Industry Report shows the
        industry knows it. By its count, AI adoption in the industry
        went from 20 percent in 2024 to 58 percent in 2025, yet only 8 percent of
        companies had fully automated any process. That gap is mostly a
        plumbing gap, and it&apos;s the one this piece is about.
      </p>

      <h2>How I chose these eight</h2>
      <p>
        I used three tests. A number makes the list only if it changes a
        decision inside the week. It has to come from records the company
        already keeps, because a dashboard that needs new manual entry dies in
        about six weeks. And it has to lose value by month end. Gross rent
        billed fails the third test, because it&apos;s set by the leases and
        barely moves, so it isn&apos;t here.
      </p>
      <p>
        For each one I&apos;ve said where it lives today. That&apos;s the real
        engineering problem, and it&apos;s the part a property management KPI
        template leaves out.
      </p>

      <h2>1. Economic occupancy, next to physical occupancy</h2>
      <p>
        Physical occupancy counts doors with a tenant behind them. Economic
        occupancy is the rent you collected divided by the rent the portfolio
        could have earned at full occupancy. The gap between the two is every
        tenant who lives there and isn&apos;t paying, every concession and every
        unit leased below the asking rent.
      </p>
      <p>
        Both numbers sit in the property management system, whether that&apos;s
        AppFolio, Buildium, Yardi Breeze, Rent Manager or Rentvine. The rent
        roll gives you one and the receipts give you the other. In most
        companies nobody puts them side by side until the month closes.
      </p>
      <p>
        A portfolio at 96 percent physical and 89 percent economic has a
        collections problem dressed up as a leasing success. Seen on the 6th,
        that&apos;s a list for the collections team. Seen on the 6th of next
        month, it&apos;s an awkward call with an owner.
      </p>

      <h2>2. Delinquency by age, with the names attached</h2>
      <p>
        Every system above ages receivables into buckets, usually 0 to 30, 31
        to 60, 61 to 90 and over 90 days. The total is the least useful
        version. I want the buckets, the names behind them, and whether a
        payment plan exists, every morning.
      </p>
      <p>
        The rent ledger is in the property management system. The context
        isn&apos;t. The promise to pay on Friday is in a text thread, the
        hardship note is in someone&apos;s inbox, and the eviction status is
        with the attorney. That&apos;s three more places before anyone can
        decide who gets a call and who gets a notice.
      </p>
      <p>
        Joined, the list ranks itself. A tenant who has paid on the 3rd for two
        years and is 9 days late gets a friendly call. A tenant in the 31 to 60
        bucket with no plan and no reply gets a notice today, while the amount
        is still one month&apos;s rent.
      </p>

      <h2>3. Vacancy loss in dollars, by unit</h2>
      <p>
        Vacancy rate is a percentage, and percentages don&apos;t make anyone
        move. Vacancy loss is days vacant times daily rent, summed by unit. The
        National Apartment Association uses this arithmetic in its own turnover
        guidance, where a case study prices a vacant day at $50 on a $1,500
        monthly rent.
      </p>
      <p>
        Days vacant come from the move out and move in dates in the property
        management system. The asking rent is in the listing. Neither system
        multiplies them for you, so the dollar figure gets worked out by hand
        once a month, if at all.
      </p>
      <p>
        In dollars, the decision is plain. A unit 24 days empty at $1,800 a
        month has cost about $1,440 of rent. That&apos;s the number to put in
        front of the owner when you argue for a price drop or a faster turn.
      </p>

      <h2>4. Make ready days on every vacant unit</h2>
      <p>
        NAA&apos;s guidance says many companies in the industry use seven
        working days as an average guideline to turn an apartment, and that
        management groups often expect five, sometimes three. It recommends a
        make ready board that marks the status of every unit, either inside the
        property management software or on an ordinary whiteboard.
      </p>
      <p>
        That&apos;s the problem in one sentence. On a lot of sites the make
        ready board is a whiteboard. The painter&apos;s schedule is in his
        phone, the cleaner&apos;s invoice is in accounts payable, and the
        listing has already gone live with a move in date nobody checked.
      </p>
      <p>
        Live, I&apos;d show every vacant unit with its days since move out and
        the next trade due. A unit at day 9 with the painter not booked is a
        call this morning. At the portfolio level, the average tells you
        whether you need a second vendor before the summer move outs.
      </p>

      <h2>5. Work orders past the time you promised</h2>
      <p>
        Buildium&apos;s 2026 report says 56 percent of owners name maintenance
        support as the main reason they hired a property manager. That makes
        the late work order the number most likely to lose you a contract.
      </p>
      <p>
        Work orders live in the maintenance module of the property management
        system or in a separate tool. Property Meld, for one, lists
        integrations with AppFolio, Buildium, Rent Manager, Propertyware, Yardi
        and Rentvine. The vendor&apos;s real arrival time often sits in the
        vendor&apos;s own app, and the resident&apos;s complaint sits in email.
      </p>
      <p>
        I&apos;d count only the orders past the time you promised the resident,
        with the vendor named. A vendor with 11 late jobs this week is a
        conversation about capacity. One who has gone quiet on 3 urgent jobs is
        a replacement.
      </p>

      <h2>6. Leases ending in 90 days with no decision</h2>
      <p>
        NAA&apos;s turnover guidance, citing its 2019 Survey of Operating Income
        and Expenses, put apartment turnover at 46.8 percent and the cost of a
        single move out at a conservatively calculated $1,800. Every renewal
        you secure early is one of those you don&apos;t pay for.
      </p>
      <p>
        Lease end dates are in the property management system. The renewal
        offer often goes out from a template, and the tenant&apos;s answer, or
        their silence, lands in a shared inbox. Nobody owns the gap between
        offer sent and decision made.
      </p>
      <p>
        I&apos;d list every lease ending in the next 90 days with no signed
        renewal and no notice to vacate. At 60 days with no answer, someone
        calls. At 30, you start marketing the unit, and vacancy loss on day 1
        of the next tenancy is zero.
      </p>

      <h2>7. Applications flagged at screening</h2>
      <p>
        Buildium&apos;s 2026 report says 75 percent of property managers saw an
        increase in rental fraud last year, and tenant quality has ranked as
        their number one challenge two years in a row. The cost of a bad
        approval shows up much later as number 2 on this list.
      </p>
      <p>
        The screening result sits in the screening product. The application
        sits in the leasing tool, and the pay stub and bank statement sit as
        PDFs in an inbox. Buildium, for one, lists $17 a screening and $20 for
        its enhanced check, and someone still reads the documents by eye.
      </p>
      <p>
        Live, I&apos;d show applications this week, the share flagged, and the
        unit each one is for. A sudden rise on one listing usually means the
        listing has been copied by a scammer. That&apos;s a takedown request
        today, before more applicants pay a fake deposit.
      </p>

      <h2>8. Doors gained and doors lost</h2>
      <p>
        This is the management company&apos;s own revenue line, and in my
        experience it&apos;s the one owners watch least. Buildium&apos;s report
        says 75 percent of property managers plan to grow in 2026, but only 55
        percent expanded in 2025.
      </p>
      <p>
        Doors under management are in the property management system. New
        owner prospects are in a CRM, a spreadsheet or the owner&apos;s head.
        Cancellation notices arrive by email, and the reason behind them is
        usually in number 5. The company&apos;s own fees and costs are in a
        separate ledger, often QuickBooks.
      </p>
      <p>
        I&apos;d show doors added and lost this month, the owners who have
        given notice, and the owners with three or more late work orders in 30
        days. The last group is the one you can still save.
      </p>

      <h2>What it takes to make these live</h2>
      <p>
        None of the eight needs artificial intelligence to calculate. It&apos;s
        arithmetic on records you already own. The reason a 1,200 door company
        doesn&apos;t have them is plumbing, and that the systems were each
        bought by a different person in a different year.
      </p>
      <p>
        The access is often already paid for. AppFolio lists a read only API on
        its Plus plan, which starts at $3.20 per unit per month, and read and
        write access on Max, from $5.00. Buildium includes its Open API on
        Premium, from $400 a month. Yardi Breeze starts at $1 per unit with a
        $100 monthly minimum for residential, and its pricing page doesn&apos;t
        mention an API, so check before you plan around it.
      </p>
      <p>
        The work is to read each system on a schedule, land the records in one
        place, agree which system is the authority for each field, compute the
        eight and put them on one screen. AI earns its place after that, in two
        narrow spots. It reads the messy inputs, such as pay stubs, tenant
        emails and vendor texts, and turns them into fields. Then it watches the
        eight numbers and tells a named person which one moved and why.
        That&apos;s what I mean by{" "}
        <Link href="/blog/what-is-ai-operations-2026-09-12/">AI operations</Link>
        , and it&apos;s the work my firm,{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , does for management companies that want the numbers before the owner
        asks for them. The same pattern runs through my{" "}
        <Link href="/blog/construction-company-kpis-live-dashboard-2026-09-15/">
          construction KPI dashboard piece
        </Link>
        .
      </p>

      <h2>The numbers I would leave off</h2>
      <p>
        A dashboard is trusted because it&apos;s short. Net operating income
        per property belongs in the owner statement, because a management
        company can&apos;t act on most of it inside a week. Average rent per
        unit moves only at lease signing. Online review scores matter, but
        they lag the work orders that cause them, and number 5 shows you the
        cause first. Website traffic belongs to whoever runs your marketing.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology,
        most of it as chief financial officer of companies growing faster than
        their reporting. I&apos;ve sold three companies from that seat, with
        American Express and TripAdvisor among the buyers, and been through
        three FT 100 fastest growing listings. On the sell side of those deals
        I learned that a buyer tests the numbers before anything else.
      </p>
      <p>
        What I&apos;m exceptional at is the work this piece describes:
        connecting systems that were never built to talk to each other, and
        turning what comes out into a real time number an owner can run the
        week on. I also value and monetise intellectual property and data
        assets, and I sit beside the founder from the first conversation to the
        wire transfer on an exit. I don&apos;t write a report about it. I build
        it in your systems and stay until it runs without me, which is what a{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          forward deployed engineer
        </Link>{" "}
        does.
      </p>
      <p>
        I&apos;m available now for fractional CFO and AI operations work through
        Beyond Elevation. The engineering side is at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>
        , and the CFO seat at{" "}
        <a href="https://meethayat.com/cfo">meethayat.com/cfo</a>.
      </p>

      <p>
        If you want a second pair of eyes on which of these eight you could
        have live first, I do a free audit call at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What is KPI in property management?</h3>
      <p>
        It&apos;s a number that tells the owner of a management company whether
        the doors they look after are earning rent, getting fixed and staying
        full. The useful ones are the eight above. A KPI only earns the name if
        somebody acts on it inside the week.
      </p>

      <h3>What are some property management KPI examples?</h3>
      <p>
        Economic occupancy, which is rent collected over the rent the portfolio
        could have earned. Delinquency in 0 to 30, 31 to 60, 61 to 90 and 90
        plus day buckets. Vacancy loss, which is days vacant times daily rent.
        Make ready days per vacant unit. Work orders past their promised date.
        Leases ending in 90 days without a decision. Applications flagged for
        fraud. Doors gained and lost this month.
      </p>

      <h3>What should a property management KPI dashboard show?</h3>
      <p>
        Those eight, refreshed daily, each with the list of units or names one
        click under it. Most of them live in the property management system,
        but the maintenance, leasing and sales pieces live in other tools, so
        most of the build is joining them.
      </p>

      <h3>What are the most important property management metrics?</h3>
      <p>
        For a third party manager, delinquency by age and vacancy loss in
        dollars move money fastest, because both turn into lost rent within
        days. The one that keeps owners signed is maintenance. Buildium&apos;s
        2026 report says 56 percent of owners name maintenance support as the
        main reason they hired a property manager.
      </p>

      <h3>Can I build a property management dashboard in Excel or Power BI?</h3>
      <p>
        Yes. The screen matters less than what feeds it. AppFolio lists a read
        only API on Plus and Buildium includes its Open API on Premium, so the
        property management system can feed Excel, Power BI or anything else on
        a schedule. The maintenance tool, the leasing tool and the sales
        pipeline still have to be joined to it.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        The 7.3, 7.0 and 5.6 percent rental vacancy rates are from the{" "}
        <a href="https://www.census.gov/housing/hvs/files/qtr226/Q226press.pdf" target="_blank" rel="noopener noreferrer">
          U.S. Census Bureau release of 28 July 2026
        </a>
        . The 46.8 percent turnover rate, the $1,800 move out cost, the seven,
        five and three day turn guidelines, the make ready board and the $50 a
        day vacancy example are from the{" "}
        <a href="https://naahq.org/sites/default/files/2025-03/01a.%20Apartment%20Turnover%202025.pdf" target="_blank" rel="noopener noreferrer">
          National Apartment Association&apos;s Apartment Turnover guidance
        </a>
        , which cites its 2019 survey. The AI adoption, automation, owner
        maintenance, fraud, tenant quality and growth figures are from{" "}
        <a href="https://www.buildium.com/resource/2026-property-management-industry-report/" target="_blank" rel="noopener noreferrer">
          Buildium&apos;s 2026 Property Management Industry Report
        </a>
        . Prices and API tiers are from the{" "}
        <a href="https://www.appfolio.com/pricing" target="_blank" rel="noopener noreferrer">
          AppFolio
        </a>
        ,{" "}
        <a href="https://www.buildium.com/pricing/" target="_blank" rel="noopener noreferrer">
          Buildium
        </a>{" "}
        and{" "}
        <a href="https://www.yardibreeze.com/pricing/" target="_blank" rel="noopener noreferrer">
          Yardi Breeze
        </a>{" "}
        pricing pages, and the list of systems Property Meld connects to is
        from its{" "}
        <a href="https://propertymeld.com/integrations/" target="_blank" rel="noopener noreferrer">
          integrations page
        </a>
        . Every page was read on 17 October 2026. The 96 and 89 percent
        occupancy, the 24 day unit at $1,800, the 1,200 door company, the
        vendor with 11 late jobs and the other worked cases are illustrations,
        not measurements of any company.
      </p>
    </PageShell>
  );
}
