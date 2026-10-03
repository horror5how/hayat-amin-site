import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "saas-kpi-dashboard-2026-10-03";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-03";
const MOD = "2026-10-03";
const TITLE = "SaaS KPI Dashboard: The 8 Numbers I Would Put on It, and the System Each One Is Stuck In";
const DESC =
  "The eight numbers a SaaS chief executive past the first million should see live: MRR movement, net revenue retention by cohort, customer churn, MRR sitting in past due, CAC payback by channel, gross margin, the burn multiple, and deals closed in the CRM that aren't billing yet. Each one lives in a different system, which is why half of finance teams still take six or more business days to close. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated manuscript page in the spirit of the golden age of Islamic art, lapis blue and turquoise arabesque panels framed in gold on aged cream paper. At the centre sits a round lapis vessel with a gold medallion, and inside it a turbaned figure beneath a small domed pavilion reads three brass dials on a dark console. Cream ribbons of water flow into the vessel from both sides, while two thinner streams slip out at the bottom and trail away beyond the frame. A domed arched hall rises above the vessel.";

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
  "MRR movement: new, expansion, contraction and churn",
  "Net revenue retention, by cohort",
  "Customer churn rate, with the names attached",
  "MRR sitting in past due",
  "CAC payback, by channel",
  "Gross margin, every month",
  "The burn multiple",
  "Closed won in the CRM, not yet billing"];

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
        { "@type": "Thing", name: "SaaS key performance indicators" },
        { "@type": "Thing", name: "Software as a service financial metrics" },
        { "@type": "Thing", name: "Real time operational dashboards" }],
      citation: [
        {
          "@type": "WebPage",
          name: "Analytics (Stripe Billing documentation)",
          publisher: { "@type": "Organization", name: "Stripe" },
          url: "https://docs.stripe.com/billing/subscriptions/analytics",
        },
        {
          "@type": "WebPage",
          name: "Net Revenue Retention (NRR)",
          publisher: { "@type": "Organization", name: "ChartMogul" },
          url: "https://chartmogul.com/saas-metrics/nrr/",
        },
        {
          "@type": "WebPage",
          name: "CAC Payback Period",
          publisher: { "@type": "Organization", name: "ChartMogul" },
          url: "https://chartmogul.com/saas-metrics/cac-payback/",
        },
        {
          "@type": "WebPage",
          name: "How to Calculate the Burn Multiple",
          publisher: { "@type": "Organization", name: "The SaaS CFO" },
          url: "https://www.thesaascfo.com/how-to-calculate-the-burn-multiple/",
        },
        {
          "@type": "NewsArticle",
          name: "50% of finance teams still take over a week to close the books",
          publisher: { "@type": "Organization", name: "CFO.com" },
          url: "https://www.cfo.com/news/50-of-finance-take-week-to-close-books-ledge-month-end-close-time-cfo-three-day-close-myth-/746085/",
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
      name: "The eight numbers worth putting on a live SaaS KPI dashboard",
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
          name: "What are SaaS KPIs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS KPIs are the numbers that tell a subscription software company whether its recurring revenue is growing, staying and paying for itself. The core set is monthly recurring revenue and how it moved, net revenue retention, customer churn, CAC payback, gross margin and the burn multiple. A KPI earns the name only if somebody changes a decision when it moves inside the week.",
          },
        },
        {
          "@type": "Question",
          name: "What should a SaaS KPI dashboard show?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eight numbers, refreshed daily: MRR movement split into new, expansion, contraction and churn; net revenue retention by cohort; customer churn with the account names attached; MRR sitting in past due; CAC payback by channel; gross margin every month; the burn multiple; and deals marked closed won in the CRM that are not yet billing. Each one sits in a different system, so the dashboard is mostly joining work.",
          },
        },
        {
          "@type": "Question",
          name: "What are good SaaS KPI benchmarks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ChartMogul's December 2025 analysis of 3,500 software companies puts median net revenue retention for B2B SaaS at 82 percent, with the top quartile at 97 percent. ChartMogul says CAC payback under about 12 months is commonly considered strong for SMB focused SaaS and 12 to 24 months is typical for enterprise. It calls 70 to 85 percent gross margin a general industry convention for mature product led SaaS. On David Sacks' burn multiple bands, below 1.0x is amazing and above 3.0x is bad.",
          },
        },
        {
          "@type": "Question",
          name: "What are some SaaS KPI examples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MRR, which Stripe defines as the monthly normalised value of all active and past due subscriptions. Net revenue retention, which ChartMogul calculates as starting MRR plus expansion and reactivation, minus contraction and churn, over starting MRR. CAC payback, which ChartMogul gives as CAC divided by ARPA times gross margin. The burn multiple, which is net burn divided by net new ARR. Gross margin, which is revenue less cost of goods sold, over revenue.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build a SaaS KPI dashboard in Excel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can, and plenty of companies do. The spreadsheet isn't the problem. The problem is that billing, CRM, accounting, the cloud bill and the bank each export on their own schedule, so the sheet is only as fresh as the last time somebody pasted into it. Once the five sources are joined on a schedule, Excel, Google Sheets or a BI tool will all display the result.",
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
        { label: "SaaS KPI Dashboard" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>SaaS KPI Dashboard: The 8 Numbers I Would Put on It, and the System Each One Is Stuck In</h1>
      <p className="op-lede">
        A SaaS KPI dashboard for a company past its first million needs eight
        numbers, refreshed daily. They are MRR movement, net revenue retention
        by cohort, customer churn with names attached, MRR sitting in past due,
        CAC payback by channel, gross margin, the burn multiple, and deals
        closed in the CRM that aren&apos;t billing yet.
      </p>
      <p>
        I&apos;m Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies from that seat, so I&apos;ve closed
        enough month ends to know what a month end report is: an accurate
        account of a decision you can no longer make. I now build the plumbing
        that makes them live, inside the company, as a forward deployed engineer.
        This piece is for the founder or chief executive of a software company
        somewhere between 1 and 20 million dollars of ARR, usually in New York,
        San Francisco or London, who has outgrown the board deck spreadsheet
        and can&apos;t yet justify a data team.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Many small streams run into one vessel, and the reader at its centre
          watches three dials while the water is still moving. Two thin streams
          leave at the bottom of the page. Nobody in the picture is waiting for
          the month to close before they notice.
        </figcaption>
      </figure>

      <h2>Why month end is too late for a SaaS company</h2>
      <p>
        Ledge surveyed 100 finance professionals for its 2025 month end close
        benchmarks, and CFO.com reported the results in April 2025. Half of
        finance teams take six or more business days to close. Only 18 percent
        close in one to three days. 27 percent regularly take more than seven.
      </p>
      <p>
        In a subscription business that delay compounds. A customer who
        downgraded on the 2nd shows up in the board pack around the 10th of the
        following month, which is close to 40 days after the decision that
        mattered. By then the renewal conversation that could have saved the
        account has already not happened. The number on the slide is right,
        and there&apos;s nothing left to do about it.
      </p>
      <p>
        The data isn&apos;t missing. Stripe defines MRR, churn and cohort
        retention in its own billing analytics. ChartMogul lists more than 30
        billing systems it can import from, from Stripe and Chargebee to
        QuickBooks and Xero. What&apos;s missing is the join between billing and
        the four other systems that own the rest of each number.
      </p>

      <h2>How I chose these eight</h2>
      <p>
        I used three tests. A number makes the list only if it changes a
        decision inside the week. It has to be computable from records the
        company already keeps, because a dashboard that needs new manual entry
        dies within about six weeks. And it has to decay by month end. Cash in
        the bank fails the third test, since the bank already shows it live,
        so it isn&apos;t here.
      </p>
      <p>
        For each one I&apos;ve said where it lives today. That&apos;s the real
        engineering problem, and it&apos;s the part most SaaS dashboard
        templates leave out.
      </p>

      <h2>1. MRR movement: new, expansion, contraction and churn</h2>
      <p>
        Stripe defines MRR as the sum of the monthly normalised value of all
        active and past due subscriptions. It excludes taxes, free plans and
        metered usage products. MRR growth, in Stripe&apos;s definition, starts
        with opening MRR, adds new, reactivation and expansion MRR, subtracts
        contraction and churn, and adjusts for currency.
      </p>
      <p>
        It lives in the billing system, which is the one place on this list
        where the tool already does the job. Stripe Billing computes it, and
        ChartMogul says its Stripe import updates in real time.
      </p>
      <p>
        The total is the least useful version. I want the four movements side
        by side, every day. A month where new MRR hides rising contraction
        looks fine in the total and is the start of a retention problem. Seen
        on day 6, it&apos;s a call to customer success. Seen on day 40,
        it&apos;s a slide.
      </p>
      <p>
        It matters less if you sell annual contracts paid upfront and move a
        handful of deals a month. Then the CRM is the earlier signal, and
        number 8 is where to look.
      </p>

      <h2>2. Net revenue retention, by cohort</h2>
      <p>
        ChartMogul calculates net revenue retention as starting MRR plus
        expansion and reactivation, minus contraction and churn, divided by
        starting MRR. Its December 2025 analysis of 3,500 software companies
        put the median for B2B SaaS at 82 percent and the top quartile at 97
        percent.
      </p>
      <p>
        The billing tool computes the blended figure. The cohort split, by plan,
        by sales channel or by the industry the customer is in, needs fields
        from the CRM, because billing doesn&apos;t know which salesperson sold
        the account or which segment it sits in. ChartMogul&apos;s HubSpot
        import brings those properties across hourly as custom attributes you
        can segment on.
      </p>
      <p>
        One blended NRR figure hides the decision. If customers sold through
        partners retain at 95 percent and direct sales accounts retain at 70,
        that&apos;s a hiring decision for the next quarter, and you can see it
        in week 2 instead of in the annual plan.
      </p>
      <p>
        Below roughly 50 customers, cohorts are too small to mean much. Read
        the account list instead.
      </p>

      <h2>3. Customer churn rate, with the names attached</h2>
      <p>
        Stripe calculates subscriber churn rate as churned subscribers in the
        past 30 days divided by active subscribers 30 days ago plus new
        subscribers in the period. ChartMogul&apos;s analysis found median
        customer churn of 1.7 percent at companies with NRR at or above
        100 percent, against 7.3 percent where NRR is under 60.
      </p>
      <p>
        The rate lives in billing. The early warning lives elsewhere, in
        product usage, in the support desk and in the last time anyone spoke
        to the account. Those are three more systems, often Intercom or
        Zendesk, a product analytics tool, and the CRM.
      </p>
      <p>
        A rate tells the board what happened. A list of the 12 accounts whose
        logins halved this month tells customer success who to call this
        afternoon. I&apos;d put the rate on the dashboard and the list one
        click under it.
      </p>

      <h2>4. MRR sitting in past due</h2>
      <p>
        This is the one I&apos;d add first, because it&apos;s the easiest to
        miss. Stripe counts
        subscriptions in past due status inside MRR. A subscription only leaves
        MRR as churn when it&apos;s cancelled or marked unpaid. So revenue
        whose card has already failed still sits in your headline number while
        the retries run.
      </p>
      <p>
        Stripe shows unpaid invoice balances grouped by age on its Collections
        page, and its documentation says that view reflects balances as of
        today. The problem is that nobody running the company looks at the
        Collections page. The number stays in a finance screen and never
        reaches the chief executive.
      </p>
      <p>
        Put past due MRR next to total MRR and the headline becomes honest. If
        4 percent of MRR is past due on the 3rd, that&apos;s a dunning and
        payment method problem you can fix this week, before it turns into
        churn on the board slide.
      </p>
      <p>
        Invoice billed enterprise customers on 30 or 60 day terms behave
        differently. For them this is an accounts receivable ageing question
        and belongs with the controller.
      </p>

      <h2>5. CAC payback, by channel</h2>
      <p>
        ChartMogul gives the formula as CAC divided by ARPA times gross margin,
        and says under about 12 months is commonly considered strong for SMB
        focused SaaS, with 12 to 24 months typical for larger contract
        enterprise SaaS.
      </p>
      <p>
        This number is spread across more systems than any other on the list.
        Ad spend is in Google Ads and LinkedIn. Sales salaries are in payroll.
        Attribution is in HubSpot or Salesforce. ARPA is in billing. Gross
        margin is in the accounting system. That&apos;s five sources, and in
        most companies one person rebuilds the join in a spreadsheet once a
        quarter.
      </p>
      <p>
        Quarterly is too slow for the decision it informs, which is where next
        month&apos;s marketing money goes. A channel paying back in 9 months and
        a channel paying back in 30 look identical in a blended figure. Split
        by channel and refreshed weekly, it moves budget while the campaign is
        still running.
      </p>
      <p>
        If almost all your customers come from founder led sales and referrals,
        there&apos;s no channel split to make yet. Track the payroll cost of
        sales against new MRR and leave it there.
      </p>

      <h2>6. Gross margin, every month</h2>
      <p>
        ChartMogul defines gross margin as revenue minus cost of goods sold,
        over revenue. For SaaS it puts hosting and infrastructure, customer
        support salaries, payment processing fees and third party licences in
        cost of goods sold. It calls 70 to 85 percent a general industry
        convention for mature product led companies, not a fixed rule.
      </p>
      <p>
        The pieces sit in the AWS, Google Cloud or Azure bill, in payroll, in
        Stripe&apos;s fees and in the AI model provider&apos;s invoice. The
        accounting system sees them only after the close.
      </p>
      <p>
        This is the number I&apos;d watch most closely now. A product that
        calls a large language model on every request has a cost line that
        moves with usage, and a single heavy customer can turn a profitable
        plan into a loss inside a fortnight. I&apos;d want gross margin by
        plan, refreshed daily from the cloud and model bills, before I priced
        the next tier.
      </p>
      <p>
        If your infrastructure cost is a flat contract and small against
        revenue, monthly from the accounts is enough.
      </p>

      <h2>7. The burn multiple</h2>
      <p>
        David Sacks of Craft Ventures introduced the burn multiple in an April
        2020 essay. It&apos;s net burn divided by net new ARR. The SaaS CFO
        sets out his bands: below 1.0x is amazing, 1.0x to 1.5x great, 1.5x to
        2.0x good, 2.0x to 3.0x suspect and above 3.0x bad.
      </p>
      <p>
        Net burn comes from the bank and the accounting system. Net new ARR
        comes from billing. They&apos;re never in the same place, which is why
        most founders only learn their burn multiple when an investor works it
        out for them.
      </p>
      <p>
        It&apos;s the one number that tells you whether growth is being bought
        or earned. On a trailing 90 days, updated weekly, it tells you whether
        the hire you&apos;re about to make is affordable. If you&apos;re
        profitable, skip it. It only means something while you&apos;re burning.
      </p>

      <h2>8. Closed won in the CRM, not yet billing</h2>
      <p>
        These are deals your sales team marked as won, where no subscription
        exists in billing yet. That covers signed contracts waiting on
        procurement, on onboarding or on somebody to create the plan in Stripe.
      </p>
      <p>
        Nobody owns this number. Sales sees the deal as finished and finance
        hasn&apos;t seen it at all. It&apos;s the SaaS version of committed
        cost not yet invoiced, which I wrote about in the{" "}
        <Link href="/blog/construction-company-kpis-live-dashboard-2026-09-15/">
          construction KPI dashboard piece
        </Link>
        .
      </p>
      <p>
        Live, it does two things. It stops bookings being reported as revenue
        before they bill. It also shows the deals that have sat for 30 days
        without a subscription, and in my experience that&apos;s where a
        signed customer quietly changes their mind.
      </p>

      <h2>What it takes to make these live</h2>
      <p>
        None of the eight needs artificial intelligence to calculate. It&apos;s
        arithmetic. The reason a 30 person SaaS company doesn&apos;t have them
        is plumbing. Billing is in Stripe or Chargebee, the pipeline is in
        HubSpot or Salesforce, the ledger is in QuickBooks, Xero or NetSuite,
        cost is in the cloud bill, and cash is in the bank. Each was bought by
        a different person in a different year.
      </p>
      <p>
        So the work is joining. Read each system through its interface on a
        schedule, land the records in one warehouse, agree which system is the
        authority for each field, compute the eight, and put them on one
        screen. ChartMogul already does part of this for the billing side, and
        it lists exports to Snowflake, BigQuery and Redshift. The CRM, ledger,
        cloud bill and bank still have to be joined by somebody.
      </p>
      <p>
        AI earns its place after that, in two narrow spots. It reads the messy
        inputs, such as contract PDFs and cancellation reasons typed into a
        support ticket, and turns them into fields. Then it watches the eight
        numbers and tells a named person which one moved and why. That&apos;s
        what I mean by{" "}
        <Link href="/blog/what-is-ai-operations-2026-09-12/">AI operations</Link>
        , and it&apos;s the work my firm,{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , does for software companies that want the numbers before the board
        asks for them.
      </p>

      <h2>The numbers I would leave off</h2>
      <p>
        A dashboard is trusted because it&apos;s short. I&apos;ve taken four
        common tiles off SaaS dashboards and never missed them.
      </p>
      <p>
        Lifetime value comes first. Stripe calculates it as ARPU divided by
        churn rate, which means a small churn change swings it wildly, and a
        number that swings that much invites people to argue about it instead
        of acting on it. CAC payback answers the same question more honestly.
      </p>
      <p>
        Website traffic and signups belong to marketing&apos;s own screen. Net
        Promoter Score needs a survey nobody has time to run monthly, so it
        fails my second test. Headcount is a hiring plan, not a live number.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I&apos;m Hayat Amin, and I&apos;ve spent twenty years in technology,
        most of it as chief financial officer of companies growing faster than
        their reporting. I&apos;ve sold three companies from that seat, with
        American Express and TripAdvisor among the buyers, and been through
        three FT 100 fastest growing listings. Sitting on the sell side of
        those deals taught me that a buyer tests the numbers before anything
        else.
      </p>
      <p>
        What I&apos;m exceptional at is the work this piece describes:
        connecting systems that were never built to talk to each other, and
        turning what comes out into a real time number a chief executive can
        run the week on. I also value and monetise intellectual property and
        data assets, and I sit beside the founder from the first conversation
        to the wire transfer on an exit. I don&apos;t write a report about it.
        I build it in your systems and stay accountable until it runs without
        me, which is what a{" "}
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
        have live first, I do a free audit call, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>What are SaaS KPIs?</h3>
      <p>
        They&apos;re the numbers that tell a subscription software company
        whether its recurring revenue is growing, staying and paying for
        itself. The core set is MRR and how it moved, net revenue retention,
        customer churn, CAC payback, gross margin and the burn multiple. A KPI
        earns the name only if somebody changes a decision when it moves inside
        the week.
      </p>

      <h3>What should a SaaS KPI dashboard show?</h3>
      <p>
        Eight numbers, refreshed daily. MRR movement split four ways, net
        revenue retention by cohort, churn with the account names attached, MRR
        sitting in past due, CAC payback by channel, gross margin every month,
        the burn multiple, and deals closed in the CRM that aren&apos;t billing
        yet. Each lives in a different system, so most of the build is joining
        them.
      </p>

      <h3>What are good SaaS KPI benchmarks?</h3>
      <p>
        ChartMogul&apos;s December 2025 analysis of 3,500 software companies
        puts median B2B SaaS net revenue retention at 82 percent and the top
        quartile at 97. ChartMogul says CAC payback under about 12 months is
        commonly considered strong for SMB focused SaaS, and 12 to 24 months is
        typical for enterprise. It treats 70 to 85 percent gross margin as a
        convention for mature product led companies. On the burn multiple,
        Sacks rates below 1.0x amazing and above 3.0x bad.
      </p>

      <h3>What are some SaaS KPI examples?</h3>
      <p>
        MRR, which Stripe defines as the monthly normalised value of all active
        and past due subscriptions. Net revenue retention, which ChartMogul
        calculates as starting MRR plus expansion and reactivation, minus
        contraction and churn, over starting MRR. CAC payback, which is CAC
        divided by ARPA times gross margin. The burn multiple, which is net burn
        over net new ARR. Gross margin, which is revenue less cost of goods
        sold, over revenue.
      </p>

      <h3>Can I build a SaaS KPI dashboard in Excel?</h3>
      <p>
        You can, and plenty of companies do. The
        spreadsheet isn&apos;t the problem. Billing, the CRM, accounting, the
        cloud bill and the bank each export on their own schedule, so the sheet
        is only as fresh as the last paste. Once those five are joined on a
        schedule, Excel, Google Sheets or a BI tool will all show the result.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        The MRR, MRR growth, subscriber churn, past due and lifetime value
        definitions, and the Collections page ageing view, are from{" "}
        <a href="https://docs.stripe.com/billing/subscriptions/analytics" target="_blank" rel="noopener noreferrer">
          Stripe&apos;s Billing analytics documentation
        </a>
        . The net revenue retention formula and the December 2025 benchmarks
        across 3,500 companies are from{" "}
        <a href="https://chartmogul.com/saas-metrics/nrr/" target="_blank" rel="noopener noreferrer">
          ChartMogul on NRR
        </a>
        , the churn figures from{" "}
        <a href="https://chartmogul.com/saas-metrics/customer-churn/" target="_blank" rel="noopener noreferrer">
          ChartMogul on customer churn
        </a>
        , the payback formula and bands from{" "}
        <a href="https://chartmogul.com/saas-metrics/cac-payback/" target="_blank" rel="noopener noreferrer">
          ChartMogul on CAC payback
        </a>{" "}
        and the margin formula and range from{" "}
        <a href="https://chartmogul.com/saas-metrics/gross-margin/" target="_blank" rel="noopener noreferrer">
          ChartMogul on gross margin
        </a>
        . The list of billing sources and warehouse exports is from{" "}
        <a href="https://chartmogul.com/integrations/" target="_blank" rel="noopener noreferrer">
          ChartMogul&apos;s integrations page
        </a>
        , the real time Stripe sync from its{" "}
        <a href="https://help.chartmogul.com/hc/en-us/articles/203231962-Stripe-integration-guide" target="_blank" rel="noopener noreferrer">
          Stripe integration guide
        </a>{" "}
        and the hourly HubSpot sync from its{" "}
        <a href="https://help.chartmogul.com/hc/en-us/articles/12775301765788-HubSpot-integration-guide" target="_blank" rel="noopener noreferrer">
          HubSpot integration guide
        </a>
        . The burn multiple formula, origin and bands are from{" "}
        <a href="https://www.thesaascfo.com/how-to-calculate-the-burn-multiple/" target="_blank" rel="noopener noreferrer">
          The SaaS CFO
        </a>
        . The close figures are Ledge&apos;s survey of 100 finance
        professionals as reported by{" "}
        <a href="https://www.cfo.com/news/50-of-finance-take-week-to-close-books-ledge-month-end-close-time-cfo-three-day-close-myth-/746085/" target="_blank" rel="noopener noreferrer">
          CFO.com on 23 April 2025
        </a>
        . Every page was read on 3 October 2026. No prices are quoted because I
        didn&apos;t read one on a vendor page this run. The 4 percent past due,
        the 95 and 70 percent cohorts, the 9 and 30 month paybacks and the 12
        accounts are illustrations, not measurements of any company.
      </p>
    </PageShell>
  );
}
