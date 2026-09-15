import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "construction-company-kpis-live-dashboard-2026-09-15";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-15";
const MOD = "2026-09-15";
const TITLE = "Construction Company KPIs: The 9 Numbers I Would Put on a Live Dashboard";
const DESC =
  "The nine construction KPIs worth wiring to a live dashboard, and the system each one is currently trapped in: cost to complete, percent complete by cost, the over and under billing position, committed cost not yet invoiced, unapproved change orders and their age, field hours by cost code, days from pay application to cash by general contractor, retainage by age, and gross margin in backlog. Written by Hayat Amin, a chief financial officer turned forward deployed engineer, on why the month end version of each one arrives too late to change anything.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, in two joined panels on deep lapis and gold. On the left, a great stone tower stands half built at night inside timber scaffolding, brass instrument dials mounted at every level of the scaffold, each one lit and live, fed by brass pipes and water channels running down through the structure. Masons and carpenters work by lamplight in the arched chambers at its base. On the right, inside a tiled arched room, one master builder stands at a console where all of those dials repeat together, reading the whole building at once while the work continues. Beside him on a heavy table lies a large sealed ledger, closed and unopened, belonging to last month.";

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
  "Cost to complete, by job",
  "Percent complete by cost, by job",
  "The over and under billing position",
  "Committed cost not yet invoiced",
  "Unapproved change order value, and its age",
  "Field hours by cost code, today",
  "Days from pay application to cash, by general contractor",
  "Retainage outstanding, by age",
  "Backlog, and the gross margin inside it"];

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
        { "@type": "Thing", name: "Construction key performance indicators" },
        { "@type": "Thing", name: "Construction work in progress reporting" },
        { "@type": "Thing", name: "Real time operational dashboards" }],
      citation: [
        {
          "@type": "WebPage",
          name: "The Complete Guide to Construction Work In Progress (WIP)",
          publisher: { "@type": "Organization", name: "Deltek" },
          url: "https://www.deltek.com/en/construction/accounting/work-in-progress",
        },
        {
          "@type": "WebPage",
          name: "The State of Subcontractor Billing in 2026",
          publisher: { "@type": "Organization", name: "Siteline" },
          url: "https://www.siteline.com/digital-download/the-state-of-subcontractor-billing-in-2026",
        },
        {
          "@type": "NewsArticle",
          name: "Subcontractors are Still Financing Their Own Jobs, 2026 Survey Finds",
          publisher: { "@type": "Organization", name: "Contractor Magazine" },
          url: "https://www.contractormag.com/management/news/55403190/subcontractors-are-still-financing-their-own-jobs-2026-survey-finds",
        },
        {
          "@type": "WebPage",
          name: "Sage Construction Management and Sage 300 Construction and Real Estate Integration Overview",
          publisher: { "@type": "Organization", name: "Sage" },
          url: "https://help.sagecm.intacct.com/Content/AccountingLink/CLSage300CRE/IntegrationOverview/IntegrationOverview.htm",
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
      name: "The nine construction company KPIs worth putting on a live dashboard",
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
          name: "What is a KPI in construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A construction KPI is a number that tells you whether a job is winning or losing while you can still do something about it. The useful ones are job level and cost based rather than company level and revenue based: cost to complete, percent complete by cost, the over and under billing position, committed cost not yet invoiced, unapproved change order value, field hours by cost code, days from pay application to cash, retainage by age, and the gross margin sitting inside backlog. Anything you cannot act on inside a week is a statistic, not a key performance indicator.",
          },
        },
        {
          "@type": "Question",
          name: "What are the financial KPIs for construction companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The financial ones that matter are the work in progress numbers and the cash numbers. Deltek defines percent complete as actual costs to date divided by revised estimated costs, overbilling as having charged more than needed for the work completed, and underbilling as billing less than the amount earned for work completed to date. Add cost to complete, committed cost not yet invoiced, days from pay application submitted to cash received by general contractor, retainage outstanding by age, and gross margin in signed backlog. Those eight, plus field hours by cost code as the leading indicator, run a contractor.",
          },
        },
        {
          "@type": "Question",
          name: "What should a construction KPI dashboard show?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One row per job and one number per question, refreshed daily rather than monthly. Cost to complete and percent complete by cost tell you whether the estimate still holds. The over and under billing position tells you whether the customer is financing you or you are financing the customer. Committed cost not yet invoiced tells you what is coming that the ledger has not seen. Unapproved change order value and its age tells you how much finished work nobody has signed for. Field hours by cost code is the only one of the nine that moves the same day the problem starts.",
          },
        },
        {
          "@type": "Question",
          name: "What are some construction KPI examples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cost to complete by job. Percent complete by cost, calculated as actual costs to date over revised estimated cost. Over or under billed, which is earned revenue less billings to date. Committed cost not yet invoiced, meaning purchase orders and subcontracts issued but not yet received as bills. Unapproved change order value and the number of days each one has been sitting. Field hours by cost code against the estimate for that cost code. Days from pay application to cash by general contractor. Retainage outstanding by age. Signed backlog and the gross margin inside it.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build a construction KPI dashboard in Excel or Power BI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can, and the tool is rarely the reason it fails. The reason it fails is that the numbers live in separate systems that do not talk: costs and payroll in the accounting ERP, commitments and change orders in the project management platform, hours in a field app, cash in the bank. Sage publishes its own integration documentation showing project budgets and commitments posting one way from its construction management product into Sage 300 Construction and Real Estate for corporate accounting, and contract, cost and payment data coming back the other way. Until that joining work is done and scheduled, a Power BI dashboard is a prettier version of the same stale spreadsheet.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a construction company run a WIP report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "More often than most do. Deltek says it depends on the business and that firms running regular financial reports with many ongoing projects may decide to create work in progress reports monthly or weekly. My own view after twenty years of closing books is that the monthly cadence exists because a human used to have to assemble it. Once the data is joined, the assembly is free, and there is no argument left for finding out in October what your jobs did in September.",
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
        { label: "Construction Company KPIs" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>Construction Company KPIs: The 9 Numbers I Would Put on a Live Dashboard</h1>
      <p className="op-lede">
        Nine numbers, one row per job, refreshed every night instead of every
        month: cost to complete, percent complete by cost, the over and under
        billing position, committed cost not yet invoiced, unapproved change
        order value and its age, field hours by cost code, days from pay
        application to cash by general contractor, retainage outstanding by age,
        and the gross margin sitting inside backlog.
      </p>
      <p>
        I am Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies in that seat, so I have closed enough
        month ends to know exactly what a month end report is: an accurate
        account of a decision you can no longer make. I now build the systems
        that produce these numbers live, inside the company, as a forward
        deployed engineer rather than as an adviser. This piece is about
        construction because construction is the industry where the lag hurts
        most. A job is a small business that opens and closes inside a year, and
        by the time the books close on it the money is already spent.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          The dials are bolted to the scaffold, not to the archive. They are fed
          by the water running through the building itself, so they read while
          the masons are still working. On the right, the same dials repeat on
          one console, and the sealed ledger on the table beside it is last
          month, closed, and of no further use to anybody.
        </figcaption>
      </figure>

      <h2>Why month end is too late in this industry specifically</h2>
      <p>
        Every business has a reporting lag. Construction has a reporting lag
        wrapped around a cash structure that is already hostile.
      </p>
      <p>
        Siteline surveyed 492 construction finance and operations professionals
        in May 2026 for its report on the state of subcontractor billing. The
        headline on its own page is that 92 percent of subcontractors floated
        payroll last year while waiting to be paid. Contractor Magazine, writing
        up the same survey, reports that 28 percent did it most months, that 43
        percent waited more than 90 days for final payment and retainage against
        15 percent of general contractors, that nearly one in five waited six
        months or more for retainage, that 67 percent spend eleven hours or more
        every month preparing, submitting and tracking pay applications, and
        that 56 percent have missed a critical mechanic&apos;s lien deadline in
        the past two years.
      </p>
      <p>
        Read those together. The company is lending its own payroll to the job,
        it is spending most of two working days a month assembling the paperwork
        that gets the money back, and it is missing the legal deadline that
        protects the money when the paperwork slips. Then, three weeks after the
        month closes, it receives a report explaining that this happened.
      </p>
      <p>
        The report is not wrong. It is just an obituary. The nine numbers below
        are the same information taken while the patient is alive.
      </p>

      <h2>How I chose these nine</h2>
      <p>
        Three tests, applied to every candidate number, and most of the usual
        construction KPI lists fail all three.
      </p>
      <p>
        <strong>One: it has to change a decision inside the week.</strong> Not
        inform a decision. Change one. If knowing it on Tuesday and knowing it at
        month end lead to the same action, it belongs in the annual accounts, not
        on a dashboard.
      </p>
      <p>
        <strong>Two: it has to be computable from data the company already
        captures.</strong> Every number here is assembled from records that exist
        somewhere in the business today. None of them requires anyone in the
        field to fill in something new. A dashboard that depends on new human
        data entry is dead within six weeks and I have watched it happen.
      </p>
      <p>
        <strong>Three: it has to be wrong by month end.</strong> This is the test
        that does the work. Cash in the bank is a fine number and it does not
        belong here, because the bank already tells you live. The nine below are
        the ones that decay, and the decay is the reason nobody sees them.
      </p>
      <p>
        I have said where each one currently lives, because that is the actual
        engineering problem. The numbers are not missing. They are in four
        different products owned by three different people.
      </p>

      <h2>1. Cost to complete, by job</h2>
      <p>
        <strong>What it is.</strong> The estimate of what is left to spend to
        finish the job. Deltek&apos;s guide to work in progress describes the
        mechanic plainly: you add the total amount spent to date to the estimated
        cost to finish to calculate your revised budget. That revised budget,
        against the contract value, is the profit on the job.
      </p>
      <p>
        <strong>Where it lives.</strong> Half in the accounting ERP and half in a
        project manager&apos;s head. Sage 300 Construction and Real Estate,
        FOUNDATION by Foundation Software and Vista by Trimble Viewpoint all hold
        the costs to date, and all of them will print the report. None of them
        knows that the superintendent walked the site this morning and concluded
        the drywall is going to take three more weeks.
      </p>
      <p>
        <strong>What changes when it is live.</strong> This is the single number
        that decides whether you bid the next job. A contractor with four jobs
        running and a stale cost to complete on two of them is bidding blind, and
        the classic failure in this industry is winning work you cannot afford to
        staff because the job you are already on is quietly eating the crew.
      </p>
      <p>
        <strong>When it does not matter.</strong> Short duration, fixed scope,
        one crew work. If the job opens and closes inside a fortnight, cost to
        complete is a rounding error and you should spend the effort on number 7
        instead.
      </p>

      <h2>2. Percent complete by cost, by job</h2>
      <p>
        <strong>What it is.</strong> Deltek gives the formula: the percentage of
        work completed is calculated by dividing the actual costs to date by the
        revised estimated costs. Cost based, not opinion based. The difference
        between this number and what the project manager says is complete is the
        earliest honest signal of margin fade there is.
      </p>
      <p>
        <strong>Where it lives.</strong> The costs are in the ERP. The judgement
        of physical progress is in the project management platform, in Procore
        under Project Management and Financials, or in Sage Construction
        Management, which Sage&apos;s own integration documentation describes as
        handling preconstruction, procurement, job costing and budgeting while
        Sage 300 Construction and Real Estate performs, in its words, corporate
        accounting. Two systems, two versions of complete.
      </p>
      <p>
        <strong>What changes when it is live.</strong> You get to see the gap
        between cost complete and physically complete week by week rather than as
        a single ugly reveal at the end. When cost complete runs ahead of
        physical complete for three weeks straight, the estimate was wrong, and
        three weeks is early enough to renegotiate, resequence or stop.
      </p>
      <p>
        <strong>When it does not matter.</strong> Time and materials work with no
        fixed price exposure. If the customer pays for the hours whatever
        happens, percent complete is a scheduling question rather than a
        financial one.
      </p>

      <h2>3. The over and under billing position</h2>
      <p>
        <strong>What it is.</strong> Earned revenue against billings to date.
        Deltek defines overbilling as having charged more than needed for the
        work completed, and underbilling as billing less than the amount earned
        for work completed to date. In cash terms, overbilled means the customer
        is financing you and underbilled means you are financing the customer.
      </p>
      <p>
        <strong>Where it lives.</strong> Only in the work in progress schedule,
        which in most companies is a spreadsheet one person rebuilds by hand
        every month from ERP exports. That person is usually the controller, and
        in a company under a hundred people that person is usually also doing
        four other jobs.
      </p>
      <p>
        <strong>What changes when it is live.</strong> Underbilling is the
        quietest way a profitable contractor runs out of money, because the
        profit and loss looks fine while the bank account empties. Seen weekly,
        an underbilled job is a billing instruction. Seen at quarter end, it is a
        bridging loan.
      </p>
      <p>
        <strong>When it does not matter.</strong> If you bill in full on
        completion and your jobs are short, there is no position to hold. This
        one is for anyone on progress billing or schedule of values work.
      </p>

      <h2>4. Committed cost not yet invoiced</h2>
      <p>
        <strong>What it is.</strong> Purchase orders raised and subcontracts
        signed, where the bill has not yet arrived. Money that is already spent
        and that the general ledger has never heard of.
      </p>
      <p>
        <strong>Where it lives.</strong> In the commitment records of the project
        management system. Sage&apos;s integration documentation is explicit
        about the flow: its construction management product posts project budgets
        and commitments, meaning purchase orders, subcontracts and invoices,
        across to Sage 300 Construction and Real Estate, and the accounting
        system sends back contract details, cost reporting and payment
        information. Between those two posts, the committed cost is real and
        invisible.
      </p>
      <p>
        <strong>What changes when it is live.</strong> Your job cost report stops
        lying to you. A job showing 60 percent of budget spent, with, say,
        300,000 dollars of signed subcontracts still pending, is not at 60
        percent, and the person
        approving the next change order needs to know that before they sign, not
        after.
      </p>
      <p>
        <strong>When it does not matter.</strong> Self performed work with no
        subcontractors and little purchased material. Rare, but it exists in some
        specialty trades.
      </p>

      <h2>5. Unapproved change order value, and its age</h2>
      <p>
        <strong>What it is.</strong> Work that has been asked for, and in many
        cases already performed, that nobody has signed. Two numbers, not one:
        the dollar value, and how many days each item has been sitting
        unapproved. The age is the more useful half.
      </p>
      <p>
        <strong>Where it lives.</strong> In the project management platform.
        Procore carries change management inside its Project Management and
        Financials modules. The difficulty is not capture, it is that the value
        never reaches the person thinking about cash, because it is not yet an
        invoice and therefore not yet in accounting.
      </p>
      <p>
        <strong>What changes when it is live.</strong> Ageing changes behaviour
        in a way that value alone does not. An owner who sees, on a Tuesday
        morning, that 140,000 dollars of change orders have been unsigned for over
        45 days makes a phone call that same afternoon. The same owner shown a total with no age does nothing,
        because a total looks like paperwork and an age looks like a problem.
      </p>
      <p>
        <strong>When it does not matter.</strong> Never, in my experience, on any
        job with an owner or a general contractor above you. If you only do
        design and build work for repeat private clients on a handshake, you have
        a different exposure and this dashboard will not help with it.
      </p>

      <h2>6. Field hours by cost code, today</h2>
      <p>
        <strong>What it is.</strong> Hours logged in the field, coded to the cost
        code they were estimated against, compared to the estimate for that code.
        The only number of the nine that moves on the same day the problem starts.
      </p>
      <p>
        <strong>Where it lives.</strong> In a field application. Raken, which
        describes itself as collecting field data on mobile with notes, photos
        and videos syncing to its web app in real time, does daily reports,
        flexible time tracking and production tracking against material and
        equipment use. In the residential and commercial trades, ServiceTitan,
        which calls itself software for commercial and residential trades and
        covers HVAC, plumbing, electrical and roofing among others, holds the
        same data inside its dispatching, invoicing and reporting.
      </p>
      <p>
        <strong>What changes when it is live.</strong> Everything upstream. Cost
        to complete, percent complete and the billing position all derive from
        labour, and labour is the input that arrives daily and gets summarised
        weekly at best. A crew burning a cost code at twice the estimated rate is
        visible on day three if anyone is looking at day three.
      </p>
      <p>
        <strong>When it does not matter.</strong> If your field hours are not
        coded to the estimate, this number is noise and you should fix the coding
        before you build any dashboard at all. Uncoded hours are the most common
        reason a contractor dashboard project fails.
      </p>

      <h2>7. Days from pay application to cash, by general contractor</h2>
      <p>
        <strong>What it is.</strong> Not average days sales outstanding. Days,
        per general contractor, from the pay application you submitted to the
        money arriving. The average hides the offender. The breakdown names them.
      </p>
      <p>
        <strong>Where it lives.</strong> Split between the billing process and
        the bank. Siteline exists as a category because this is nobody&apos;s
        system of record: its 2026 survey found that 67 percent of subcontractors
        spend eleven hours or more a month preparing, submitting and tracking pay
        applications, which is what happens when the tracking is manual.
      </p>
      <p>
        <strong>What changes when it is live.</strong> You price the customer
        rather than the job. A general contractor who reliably takes 95 days is
        not the same customer as one who takes 35, and the difference is a real
        financing cost that should appear in the next bid. Most contractors know
        who the slow payers are as a feeling. Very few can put a number on it,
        and the number is what changes the bid.
      </p>
      <p>
        <strong>When it does not matter.</strong> If you work direct for owners
        on deposit and progress terms you control, this is a collections question
        and not a dashboard question.
      </p>

      <h2>8. Retainage outstanding, by age</h2>
      <p>
        <strong>What it is.</strong> Money already earned and contractually held
        back, bucketed by how long it has been held. This is the purest form of
        profit you cannot spend.
      </p>
      <p>
        <strong>Where it lives.</strong> In the receivables ledger, where it is
        usually indistinguishable from ordinary slow payment, which is why it
        goes unmanaged.
      </p>
      <p>
        <strong>What changes when it is live.</strong> The scale becomes
        arguable. On the Siteline survey as reported by Contractor Magazine, 43
        percent of subcontractors wait more than 90 days for final payment and
        retainage, and nearly one in five wait six months or more. A company
        holding a six figure retainage balance aged past six months has a
        financing problem it has been treating as an administrative one, and the
        first step in fixing it is simply seeing the ageing bucket on a screen
        next to the payroll number.
      </p>
      <p>
        <strong>When it does not matter.</strong> Contracts without retainage.
        If that is you, skip it, and be aware you are in a minority.
      </p>

      <h2>9. Backlog, and the gross margin inside it</h2>
      <p>
        <strong>What it is.</strong> Signed work not yet performed, and the
        margin you expect to earn on it. Backlog alone is a vanity number. Backlog
        at margin is a hiring decision.
      </p>
      <p>
        <strong>Where it lives.</strong> Nowhere, in most companies. The signed
        contracts are in the project system, the estimated margins are in the
        estimating files, and the two have never been added together in one view.
        Procore carries Bid Management and Financials; Vista by Trimble Viewpoint
        covers job costing and financial management alongside HR and payroll;
        FOUNDATION by Foundation Software brings job costing, payroll, invoicing,
        vendor payments and financial reporting into one system and says it
        serves more than 43,000 construction professionals. Any of them holds
        half of this. The other half is in a spreadsheet the estimator owns.
      </p>
      <p>
        <strong>What changes when it is live.</strong> The two decisions that
        actually determine whether a construction company survives a downturn:
        who you hire, and which work you refuse. Twelve months of backlog at four
        percent margin is worse than six months at eighteen, and an owner looking
        at backlog alone cannot tell those apart.
      </p>
      <p>
        <strong>When it does not matter.</strong> If you turn work around inside
        a month and your pipeline is repeat service calls, backlog is not the
        constraint. Capacity is, and number 6 is your dashboard.
      </p>

      <h2>What it actually takes to make these live</h2>
      <p>
        This is the part the dashboard vendors skip, so let me be direct about it.
        Nothing above requires artificial intelligence to compute. It is
        arithmetic. The reason a construction company does not have these numbers
        is not intelligence, it is plumbing: the costs are in the ERP, the
        commitments and change orders are in the project platform, the hours are
        in a field app, the cash is in the bank, and every one of those systems
        was bought separately by a different person in a different year.
      </p>
      <p>
        The work is therefore joining work. Read each system through its
        interface on a schedule, land the records in one place, agree which
        system is authoritative for each field, compute the nine, and put them on
        one screen with one row per job. Sage publishes the shape of exactly this
        for its own products: budgets and commitments posting one way, contract,
        cost and payment data coming back the other. When a company runs two
        products from one vendor, some of that is bought rather than built. When
        it runs Procore with a different accounting ERP and a separate field time
        app, which is the common case, somebody has to build it.
      </p>
      <p>
        Artificial intelligence earns its place afterwards, and in two narrow
        spots. It reads the unstructured things, the daily report text, the
        emailed change request, the photograph of a delivery ticket, and turns
        them into a coded record. Then it watches the nine numbers and tells a
        human which job moved and why, which is the difference between a
        dashboard somebody opens and a dashboard somebody ignores. That is what I
        mean by{" "}
        <Link href="/blog/what-is-ai-operations-2026-09-12/">
          AI operations
        </Link>
        : not a chat window bolted to the side of the business, but the joining
        work plus the watching, owned by somebody accountable for it in
        production.
      </p>

      <h2>The numbers I would leave off</h2>
      <p>
        A dashboard earns trust by being short. Four things I have taken off
        construction dashboards and never missed.
      </p>
      <p>
        <strong>Revenue.</strong> On percentage of completion accounting, revenue
        is an output of the numbers above. Putting it on the screen invites
        people to manage the output instead of the input.
      </p>
      <p>
        <strong>Safety incident counts as a headline tile.</strong> Safety
        deserves its own review with its own seriousness, and reducing it to a
        tile beside the cash number teaches everyone to read it as a score.
        Procore and Raken both carry the underlying safety records properly.
      </p>
      <p>
        <strong>Company wide gross margin.</strong> True and useless. Margin is
        earned or lost per job, and the company number is an average that
        conceals both the job that is saving you and the job that is killing you.
      </p>
      <p>
        <strong>Anything requiring new manual entry.</strong> If a number needs a
        human to type something they do not already type, it will be accurate for
        about five weeks.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I am Hayat Amin, and I have spent twenty years in technology, most of it
        as a chief financial officer inside companies growing faster than their
        reporting could keep up with. I have sold three companies in that seat,
        with American Express and TripAdvisor among the buyers, and carried three
        FT 100 fastest growing listings along the way. That is where my view of
        month end comes from: I have signed off enough of them to know that the
        close is an accounting event, not an operating one.
      </p>
      <p>
        What I am exceptional at is the thing this article describes. Connecting
        systems that were never designed to talk to each other, and turning what
        comes out into a real time number a chief executive can run the week on.
        I do the same work on intellectual property and data assets, valuing and
        monetising the things a company owns and cannot see on its balance sheet,
        and I sit beside the founder from the first conversation through to the
        wire transfer on an exit. I am not an adviser who models this. I build it
        in your systems, with your credentials, and stay accountable for it until
        it runs without me, which is what a{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          forward deployed engineer
        </Link>{" "}
        is.
      </p>
      <p>
        I am available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and the engineering side of it is described at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>.
      </p>

      <p>
        If you want a second pair of eyes on which of these nine you could have
        running first, I do a free audit call: one call, then a written list of
        what to automate first, what it saves and what it costs, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What is a KPI in construction?</h3>
      <p>
        A number that tells you whether a job is winning or losing while you can
        still do something about it. The useful ones are job level and cost
        based, not company level and revenue based: cost to complete, percent
        complete by cost, the over and under billing position, committed cost not
        yet invoiced, unapproved change order value, field hours by cost code,
        days from pay application to cash, retainage by age, and the gross margin
        inside backlog. Anything you cannot act on inside a week is a statistic,
        not a key performance indicator.
      </p>

      <h3>What are the financial KPIs for construction companies?</h3>
      <p>
        The work in progress numbers and the cash numbers. Deltek defines percent
        complete as actual costs to date divided by revised estimated costs,
        overbilling as having charged more than needed for the work completed,
        and underbilling as billing less than the amount earned for work
        completed to date. Around those sit cost to complete, committed cost not
        yet invoiced, days from pay application submitted to cash received by
        general contractor, retainage outstanding by age, and gross margin in
        signed backlog. Field hours by cost code is the leading indicator that
        moves all of them.
      </p>

      <h3>What should a construction KPI dashboard show?</h3>
      <p>
        One row per job, one number per question, refreshed daily. Cost to
        complete and percent complete by cost say whether the estimate still
        holds. The over and under billing position says whether the customer is
        financing you or you are financing the customer. Committed cost not yet
        invoiced says what is coming that the ledger has not seen. Unapproved
        change order value and its age says how much finished work nobody has
        signed for. Field hours by cost code is the one that moves on the day the
        problem starts, which is why it belongs at the top.
      </p>

      <h3>What are some construction KPI examples?</h3>
      <p>
        Cost to complete by job. Percent complete by cost, being actual costs to
        date over revised estimated cost. Over or under billed, being earned
        revenue less billings to date. Committed cost not yet invoiced, being
        purchase orders and subcontracts issued but not yet received as bills.
        Unapproved change order value and the days each has been sitting. Field
        hours by cost code against the estimate for that code. Days from pay
        application to cash by general contractor. Retainage outstanding by age.
        Signed backlog and the gross margin inside it.
      </p>

      <h3>Can I build a construction KPI dashboard in Excel or Power BI?</h3>
      <p>
        You can, and the tool is rarely why it fails. It fails because the
        numbers live in systems that do not talk: costs and payroll in the
        accounting ERP, commitments and change orders in the project platform,
        hours in a field app, cash in the bank. Sage publishes its own
        documentation for joining two of its own products, with budgets and
        commitments posting one way into Sage 300 Construction and Real Estate
        for corporate accounting and contract, cost and payment data coming back.
        Until that joining work is built and scheduled, a Power BI dashboard is a
        better looking version of the same stale spreadsheet.
      </p>

      <h3>How often should a construction company run a WIP report?</h3>
      <p>
        More often than most do. Deltek says it depends on your business goals,
        and that a company running regular financial reports with many ongoing
        projects may decide to create work in progress reports monthly or weekly.
        My own view, after twenty years of closing books, is that the monthly
        cadence exists because a human used to have to assemble it by hand. Once
        the data is joined the assembly costs nothing, and there is no argument
        left for finding out in October what your jobs did in September.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        The work in progress definitions and formulas, including percent complete
        as actual costs to date divided by revised estimated costs, and the
        definitions of overbilling and underbilling, are quoted from{" "}
        <a href="https://www.deltek.com/en/construction/accounting/work-in-progress" target="_blank" rel="noopener noreferrer">
          Deltek&apos;s guide to construction work in progress
        </a>
        , read on 15 September 2026. The subcontractor payment figures come from
        Siteline&apos;s{" "}
        <a href="https://www.siteline.com/digital-download/the-state-of-subcontractor-billing-in-2026" target="_blank" rel="noopener noreferrer">
          State of Subcontractor Billing in 2026
        </a>
        , which states on its own page that 92 percent of subcontractors floated
        payroll last year, and from{" "}
        <a href="https://www.contractormag.com/management/news/55403190/subcontractors-are-still-financing-their-own-jobs-2026-survey-finds" target="_blank" rel="noopener noreferrer">
          Contractor Magazine&apos;s report
        </a>{" "}
        on the same survey of 492 construction finance and operations
        professionals in May 2026, which carries the 28 percent, 43 percent, 15
        percent, one in five, 67 percent and 56 percent figures quoted above.
        Both were read on 15 September 2026. The description of what flows
        between Sage Construction Management and Sage 300 Construction and Real
        Estate is taken from{" "}
        <a href="https://help.sagecm.intacct.com/Content/AccountingLink/CLSage300CRE/IntegrationOverview/IntegrationOverview.htm" target="_blank" rel="noopener noreferrer">
          Sage&apos;s own integration documentation
        </a>
        . Product capabilities for Procore are from{" "}
        <a href="https://www.procore.com/platform" target="_blank" rel="noopener noreferrer">
          procore.com/platform
        </a>
        , for Vista from{" "}
        <a href="https://www.trimble.com/en/products/viewpoint/vista" target="_blank" rel="noopener noreferrer">
          Trimble
        </a>
        , for FOUNDATION from{" "}
        <a href="https://www.foundationsoft.com/" target="_blank" rel="noopener noreferrer">
          Foundation Software
        </a>
        , for Raken from{" "}
        <a href="https://www.rakenapp.com/" target="_blank" rel="noopener noreferrer">
          rakenapp.com
        </a>{" "}
        and for ServiceTitan from{" "}
        <a href="https://www.servicetitan.com/" target="_blank" rel="noopener noreferrer">
          servicetitan.com
        </a>
        , each read on 15 September 2026 and each quoted only for what the vendor
        says about its own product. No prices are quoted here because I did not
        read a price on a vendor page this run. The two dollar figures used to
        illustrate items four and five are invented for the sake of the example
        and are not measurements of any company.
      </p>
    </PageShell>
  );
}
