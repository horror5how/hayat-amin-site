import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "how-is-ai-implemented-2026-09-18";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-09-18";
const MOD = "2026-09-18";
const TITLE = "How Is AI Implemented? The 9 Steps, Counted Across 5 Published Frameworks";
const DESC =
  "In nine steps, and the order matters more than the tools. On 18 September 2026 I read the five most cited published AI implementation frameworks end to end: Microsoft's Cloud Adoption Framework for AI, Google Cloud's AI Adoption Framework, the AWS Well-Architected Machine Learning Lens, the NIST AI Risk Management Framework and CRISP-DM. Between them they name 28 stages. Three open with the business problem, two use the word deployment, and not one of the 28 contains the word integration, which is the thing MIT's NANDA study blames for 95 percent of enterprise pilots returning nothing. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, gold leaf on deep lapis inside a turquoise arabesque border. A channel of quicksilver water runs left to right through nine vaulted workshop bays of one long courtyard. In the first bay a merchant reads a ledger with no machine in front of him. In the middle bays craftsmen sort raw material into labelled jars, test a great brass astrolabe against a drawing, and fit a gear into an existing mill. Past the middle the channel is dry and cracked, and a finished gilded machine stands beside it under cobwebs, connected to nothing. Beyond the crack the water runs again into a walled garden in flower, where a steward reads a live gauge on the wall.";

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
      about:
        "How artificial intelligence is implemented inside a company, set out as nine steps and checked against the 28 stages named by five published implementation frameworks read on 18 September 2026",
      citation: [
        {
          "@type": "WebPage",
          name: "AI strategy, Cloud Adoption Framework for Azure, Microsoft Learn",
          publisher: { "@type": "Organization", name: "Microsoft" },
          url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy",
        },
        {
          "@type": "WebPage",
          name: "Google Cloud's AI Adoption Framework, whitepaper",
          publisher: { "@type": "Organization", name: "Google Cloud" },
          url: "https://services.google.com/fh/files/misc/ai_adoption_framework_whitepaper.pdf",
        },
        {
          "@type": "WebPage",
          name: "Machine Learning Lens, AWS Well-Architected Framework, published 19 November 2025",
          publisher: { "@type": "Organization", name: "Amazon Web Services" },
          url: "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html",
        },
        {
          "@type": "WebPage",
          name: "Well-Architected machine learning lifecycle, six phases",
          publisher: { "@type": "Organization", name: "Amazon Web Services" },
          url: "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lifecycle.html",
        },
        {
          "@type": "WebPage",
          name: "AI Risk Management Framework, AI RMF 1.0, released 26 January 2023",
          publisher: { "@type": "Organization", name: "National Institute of Standards and Technology" },
          url: "https://www.nist.gov/itl/ai-risk-management-framework",
        },
        {
          "@type": "WebPage",
          name: "IBM SPSS Modeler CRISP-DM Guide, the six phase process model first published in 1996",
          publisher: { "@type": "Organization", name: "IBM" },
          url: "https://www.ibm.com/docs/it/SS3RA7_18.3.0/pdf/ModelerCRISPDM.pdf",
        },
        {
          "@type": "WebPage",
          name: "MIT report: 95% of generative AI pilots at companies are failing, Fortune, 18 August 2025, on The GenAI Divide: State of AI in Business 2025 by MIT's NANDA initiative",
          publisher: { "@type": "Organization", name: "Fortune" },
          url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/",
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
      name: "How AI is implemented, illuminated as one water channel running through nine workshops, with the channel cracked and dry where most projects stop",
      about: { "@id": `${SITE}/#person` },
      creator: { "@id": `${SITE}/#person` },
      representativeOfPage: true,
      keywords:
        "how is ai implemented, ai implementation steps, ai implementation process, ai adoption framework, CRISP-DM, NIST AI RMF, AWS Machine Learning Lens, Microsoft Cloud Adoption Framework, Hayat Amin, Beyond Elevation, New York",
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#steps`,
      name: "The 9 steps of implementing AI inside a company",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 9,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Name the business problem before you name the technology" },
        { "@type": "ListItem", position: 2, name: "Write down the number you will be judged on" },
        { "@type": "ListItem", position: 3, name: "Decide whether the answer has to be the same every time" },
        { "@type": "ListItem", position: 4, name: "Find out whether the data exists and whether you can reach it" },
        { "@type": "ListItem", position: 5, name: "Choose build or buy, from four real options" },
        { "@type": "ListItem", position: 6, name: "Build the narrow version against the real system" },
        { "@type": "ListItem", position: 7, name: "Test it against the number from step two" },
        { "@type": "ListItem", position: 8, name: "Wire it into the tool your staff already have open" },
        { "@type": "ListItem", position: 9, name: "Govern it, secure it, and watch the bill" }],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How is AI implemented?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In nine steps, and five of them happen before anybody writes a prompt. Name the business problem, write down the number you will be judged on, decide whether the answer has to be identical every time, check the data exists and that you can reach it, choose build or buy, build the narrow version against the real system, test it against your number, wire it into the tool your staff already open, then govern it and watch the bill. The five published frameworks I read on 18 September 2026 agree on most of that order. Microsoft's Cloud Adoption Framework for AI runs Strategy, Plan, Ready, Govern, Secure, Manage. The AWS Well-Architected Machine Learning Lens runs business goal identification, ML problem framing, data processing, model development, model deployment, model monitoring. CRISP-DM, from 1996, runs business understanding, data understanding, data preparation, modeling, evaluation, deployment.",
          },
        },
        {
          "@type": "Question",
          name: "What are the steps of AI implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Between them the five frameworks name 28 stages. Microsoft names 6, Google Cloud names 6 themes and 3 maturity phases, AWS names 6 lifecycle phases, NIST names 4 functions and CRISP-DM names 6. Three of the five open with the business problem rather than the technology. AWS calls business goal identification the most important phase of the whole lifecycle. Two of the 28 stage names use the word deployment, and in both frameworks it is the last phase. None of the 28 uses the word integration, which is the step that decides whether any of the other eight were worth doing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to implement AI in a business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nobody honest can give you a number without seeing your systems, and the frameworks do not give one either. What I can tell you is where the time goes. Steps four and eight are the long ones: getting to the data, and getting the output into the tool people already use. The model work in the middle is usually the shortest part of the job now, because you are calling somebody else's model rather than training your own. When a quote spends most of its days on steps five and six and almost none on four and eight, the quote is wrong.",
          },
        },
        {
          "@type": "Question",
          name: "Why do most AI projects fail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because they stop at step seven. MIT's NANDA initiative studied 300 public AI deployments, interviewed 150 leaders and surveyed 350 employees for The GenAI Divide: State of AI in Business 2025, and found that around 95 percent of enterprise pilots deliver little or no measurable impact on profit and loss, while about 5 percent produce rapid revenue acceleration. The report puts the blame on flawed enterprise integration rather than on the quality of the models. That matches what I see. The demo works, everyone claps, and then nobody changes the system the work actually happens in.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to build an AI system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on which of the four options you pick at step five, and the gap between them is enormous. Microsoft's own guidance sets out four adoption models in order of increasing effort: ready to use Copilots, low code SaaS development with Copilot Studio, managed platform development with Microsoft Foundry or Azure Machine Learning, and your own models on Azure infrastructure. Every step down that list buys you control and costs you speed. I will not quote you a figure I have not read on a vendor's own page, and neither should anyone selling to you. Ask for the cost of step four and step eight separately, because that is where the surprises live.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between AI implementation and AI operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Implementation is steps one to eight, and it ends. AI operations is step nine, and it does not. The two frameworks that take governance seriously make this plain: Microsoft gives 3 of its 6 phases to Govern, Secure and Manage, and the NIST AI Risk Management Framework, released on 26 January 2023, gives 2 of its 4 functions to Govern and Manage. A model that nobody watches drifts, and a token bill that nobody reads grows.",
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
        { label: "How Is AI Implemented?" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">AI Operator for SMEs &middot; Updated {MOD}</span>
      <h1>How Is AI Implemented?</h1>
      <p className="op-lede">
        In nine steps, and five of them happen before anybody writes a prompt.
        I read the five most cited published frameworks this morning. Between
        them they name 28 stages, 3 of the 5 open with the business problem
        rather than the technology, and not one of the 28 uses the word
        integration.
      </p>
      <p>
        I am Hayat Amin. I spent twenty years as a technology chief financial
        officer and sold three companies in that seat, and I now build this work
        inside other people&apos;s companies rather than writing a report about
        it, which means I have signed off the invoices and then had to make the
        thing run. On 18 September 2026 I read Microsoft&apos;s Cloud Adoption
        Framework for AI, Google Cloud&apos;s AI Adoption Framework whitepaper,
        the AWS Well-Architected Machine Learning Lens, the NIST AI Risk
        Management Framework and CRISP-DM, which is thirty years old and still
        the one most people are quietly using. Below is the order they agree on,
        the step only one of them names, and the step none of them names at all.
      </p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          Nine bays, one channel of water. The merchant in the first bay has a
          ledger and no machine, which is where this starts. The gilded machine
          under cobwebs, standing beside the cracked dry section, is the 95
          percent. The garden only flowers because the water got past it.
        </figcaption>
      </figure>

      <h2>How I counted</h2>
      <p>
        I read five documents end to end and wrote down every stage each one
        names, in its own words. Microsoft names 6 phases of AI adoption:
        Strategy, Plan, Ready, Govern, Secure, Manage. Google Cloud names 6
        themes, Learn, Lead, Access, Scale, Automate and Secure, sitting across
        four areas it calls people, process, technology and data, plus 3
        maturity phases it calls Tactical, Strategic and Transformational. The
        AWS Machine Learning Lens, published on 19 November 2025, names 6
        lifecycle phases: business goal identification, ML problem framing, data
        processing, model development, model deployment, model monitoring. The
        NIST AI Risk Management Framework, released on 26 January 2023, names 4
        functions: Govern, Map, Measure, Manage. CRISP-DM, first published in
        1996, names 6: business understanding, data understanding, data
        preparation, modeling, evaluation, deployment.
      </p>
      <p>
        That is 28 stage names. Lining them up leaves 9 steps that actually
        happen in a company, in the order they happen. I have put the tally
        against each one, so you can see which steps the industry agrees on and
        which it has quietly left to you. The order below is chronological, not
        a ranking of importance, and the two steps that decide whether the
        project pays for itself are 4 and 8.
      </p>

      <h2>1. Name the business problem before you name the technology</h2>
      <p>
        Named by 3 of the 5. Microsoft opens its whole framework with use case
        identification, and its first instruction is to start with business
        problems: look for where the organisation needs better results before
        you consider AI at all, and it suggests two plain questions, where do
        results miss expectations and where do people spend time on repetitive
        tasks. AWS goes further and calls business goal identification the most
        important phase of the machine learning lifecycle. CRISP-DM has said the
        same since 1996 and calls it business understanding.
      </p>
      <p>
        Google and NIST do not open here, and their reasons are fair. Google
        opens with Learn, which is about skills, and NIST opens with Govern,
        because it is a risk framework rather than a build guide. What this step
        is good for is killing bad projects in the first hour, for free. Where it
        goes wrong is when someone arrives with a tool and works backwards to a
        problem, which is most of the meetings I get invited to.
      </p>

      <h2>2. Write down the number you will be judged on</h2>
      <p>
        Named by 3 of the 5. AWS is the most explicit: you must be able to
        measure business value against specific business objectives and success
        criteria, and you should evaluate your organisation&apos;s ability to
        move toward that target before you start. Microsoft asks you to turn each
        business problem into a short statement naming the activity and the
        expected result, and gives the example of helping support agents answer
        from internal documents so resolution time drops. CRISP-DM puts success
        criteria inside business understanding.
      </p>
      <p>
        One number, written before the build, owned by a named person. Invoices
        posted per day. Hours from enquiry to quote. Percentage of orders that
        need a human to retype them. If you cannot say what the number is today,
        step 2 is not finished, and everything after it is decoration. This is
        the cheapest step on the list and the one skipped most often.
      </p>

      <h2>3. Decide whether the answer has to be the same every time</h2>
      <p>
        Named by 1 of the 5, and it is the most useful thing Microsoft publishes.
        Its guidance splits the choice into generative AI, which it calls
        non-deterministic and which produces outputs that can vary even for the
        same input, and nongenerative AI, which it calls deterministic and which
        produces consistent repeatable outputs from structured inputs. It tells
        you to lean generative when you do not know the exact steps in advance
        and some variation is acceptable, and deterministic for tasks that depend
        on accuracy, such as prediction or anomaly detection.
      </p>
      <p>
        I would put this first if it were my framework. A VAT calculation, a
        credit limit and a payroll run must be identical every time, so a
        language model does not belong in the middle of them. Reading a supplier
        email and working out which of your 40 product codes it means is the
        opposite. Most failed projects I have looked at put the two the wrong way
        round, then blamed the model.
      </p>

      <h2>4. Find out whether the data exists and whether you can reach it</h2>
      <p>
        Named by 4 of the 5, and CRISP-DM spends 2 of its 6 phases here, data
        understanding and data preparation. AWS calls it data processing.
        Microsoft makes data strategy the fourth of its five strategy decisions
        and lists data needed as one of four factors you weigh on every solution,
        alongside capabilities, skills required and cost. Google calls its theme
        Access, which is the honest name, because the question is rarely whether
        the data exists.
      </p>
      <p>
        In a company of 20 to 500 people the data almost always exists and is
        almost always in four places that do not talk to each other. Reaching it
        means credentials, an API that your version of the software actually has,
        and someone with the authority to say yes. That is a diary problem, not a
        technical one, and it is why I ask for credentials day in week one. Budget
        real weeks for this step. Every plan I have seen that came in late came in
        late here.
      </p>

      <h2>5. Choose build or buy, from four real options</h2>
      <p>
        Named by 1 of the 5. Microsoft is alone in setting out the build or buy
        ladder, and it names four adoption models that trade customisation for
        simplicity: ready to use Copilots, low code SaaS development, managed
        platform development, and Azure infrastructure. Its own summary is that
        as you move from the first to the last you gain control and give up
        speed. The named products at each rung are Microsoft 365 Copilot and the
        in-product and role based Copilots, then Copilot Studio, then Microsoft
        Foundry Agent Service, Azure Machine Learning and Microsoft Fabric, then
        Azure Virtual Machines, Azure Kubernetes Service and Azure Container
        Apps.
      </p>
      <p>
        Read that ladder as a warning rather than a menu. Most companies under
        500 people belong on the first two rungs and get sold the third. Rung one
        is wrong for you when the work crosses systems, because a Copilot inside
        one application cannot fix a handoff between four. Rung four is wrong for
        almost everybody, and Microsoft says so plainly: it takes the longest to
        build and carries the most operational ownership. If you are not
        Microsoft&apos;s customer, the same four rungs exist under other names.
      </p>

      <h2>6. Build the narrow version against the real system</h2>
      <p>
        Named by 3 of the 5. CRISP-DM calls it modeling, AWS calls it model
        development, and Microsoft carries create an AI proof of concept as one
        of the 6 items on its enterprise plan checklist, alongside assess AI
        skills, acquire AI skills, access AI resources, prioritise AI use cases
        and implement responsible AI. All three mean the same thing. Build the
        smallest version that answers the one question from step 1.
      </p>
      <p>
        The word I would add is against. Build it against the real system, with
        the client&apos;s credentials, in their environment, on their messy live
        data. A pilot built on an exported spreadsheet proves nothing, because the
        spreadsheet is the part a human already cleaned. That is the whole
        argument for a{" "}
        <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">
          forward deployed engineer
        </Link>{" "}
        instead of a vendor demo, and it is why the demo that dazzled you in the
        sales meeting has a failure rate.
      </p>

      <h2>7. Test it against the number from step two</h2>
      <p>
        Named by 3 of the 5. CRISP-DM gives evaluation a whole phase, second to
        last. AWS folds evaluation into model development and adds model
        monitoring at the end. NIST makes Measure one of its 4 functions,
        alongside Govern, Map and Manage. Nobody disagrees that you test it. The
        disagreement is about what you test it against.
      </p>
      <p>
        Test it against the number you wrote down in step 2, not against a
        benchmark and not against how impressive it feels in a meeting. Accuracy
        on a test set is a property of the model. Invoices posted per day is a
        property of your company. Only one of those two appears in your accounts,
        and a board that has been shown the other one will not fund phase two.
      </p>

      <h2>8. Wire it into the tool your staff already have open</h2>
      <p>
        Named by 2 of the 5, and named badly, which is the finding of the whole
        exercise. Of the 28 stage names across the five frameworks, exactly 2 use
        the word deployment, AWS&apos;s model deployment and CRISP-DM&apos;s
        deployment, and in both it is the last phase of six. Not one of the 28
        uses the word integration. Microsoft comes closest, with manage AI
        deployment as an item inside its Manage phase rather than a stage of its
        own. Deploying a model and connecting it to a company are different
        jobs, and only the first one has a name.
      </p>
      <p>
        That gap is expensive. MIT&apos;s NANDA initiative published The GenAI
        Divide: State of AI in Business 2025 after 150 leader interviews, a
        survey of 350 employees and an analysis of 300 public AI deployments, and
        found that about 95 percent of enterprise pilots deliver little to no
        measurable impact on profit and loss, while roughly 5 percent produce
        rapid revenue acceleration. The report blames flawed enterprise
        integration rather than model quality. So the step nobody names is the
        step that kills 19 projects in 20.
      </p>
      <p>
        Wiring it in means the output lands in the system the work already
        happens in. The invoice appears in the accounting package, not in a chat
        window. The lead appears in the CRM with the fields filled. The flag
        appears in the job the foreman already opens at 7am. If your people have
        to visit a new tab to get the benefit, most of them will not, and by
        month three you are paying a subscription for a habit nobody formed.
      </p>

      <h2>9. Govern it, secure it, and watch the bill</h2>
      <p>
        Named by 4 of the 5, and this is where the frameworks are strongest.
        Microsoft gives 3 of its 6 phases to Govern, Secure and Manage, and its
        enterprise Manage checklist includes managing AI operations, deployment,
        models, costs, data and business continuity. NIST gives 2 of its 4
        functions to Govern and Manage. AWS ends on model monitoring. Google
        carries Secure and Automate as 2 of its 6 themes. Microsoft also makes
        responsible AI the third of its five strategy decisions, before data.
      </p>
      <p>
        The part a finance person notices first is the bill. Token spend has no
        natural ceiling, so somebody has to own the monthly number and the
        permissions list. That is{" "}
        <Link href="/blog/what-is-ai-operations-2026-09-12/">AI operations</Link>,
        and it is a job rather than a phase. It never finishes, which is why I
        treat steps 1 to 8 as the project and step 9 as the seat.
      </p>

      <h2>What the frameworks get right and what they leave to you</h2>
      <p>
        All five are worth the hour it takes to read them, and I am not being
        polite. They agree on more than you would expect from four competitors
        and a standards body, and the agreement is the useful part: start with
        the business problem, get to the data, evaluate honestly, govern it
        afterwards. CRISP-DM covers 6 of those 9 steps, and it did that in 1996,
        with no cloud and no transformer to sell you.
      </p>
      <p>
        What they leave to you is steps 3, 5 and 8. Whether the answer has to be
        identical every time. Which of the four rungs you belong on. And how the
        output reaches the person doing the work. Those three decisions are
        specific to your company, they cannot be written down in a whitepaper,
        and they are exactly the ones the 95 percent got wrong.
      </p>

      <h2>About Hayat Amin</h2>
      <p>
        I am Hayat Amin, and I have spent twenty years in technology, most of
        them as a chief financial officer in companies growing faster than their
        systems could carry. I sold three of them in that seat, with American
        Express and TripAdvisor among the buyers, and carried three FT 100
        fastest growing listings along the way. Fifteen years of signing off
        implementation invoices is what taught me to read step 8 of a plan before
        step 6.
      </p>
      <p>
        I am exceptional at this work, done rather than recommended. Connecting
        the systems in a company that were never built to speak to each other,
        which is step 4 and step 8 of the list above. Turning what comes out of
        them into a real time number a chief executive can run the week on
        instead of waiting for month end. Valuing and monetising the intellectual
        property and data a company already owns and cannot see on its balance
        sheet. And sitting beside a founder from the first conversation through
        to the wire transfer on an exit, which is where the finance years pay for
        themselves. I am a chief financial officer who writes the code, and that
        pair is rarer than either half of it.
      </p>
      <p>
        I am available now for fractional chief financial officer work and AI
        operations work through{" "}
        <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">
          Beyond Elevation
        </a>
        , and the engineering side of it, steps 4 through 9 inside your own
        systems and with your own credentials, is set out at{" "}
        <a href="https://meethayat.com/services/fde">meethayat.com/services/fde</a>.
      </p>

      <p>
        If you want a second pair of eyes on which of your own processes is worth
        step 1, I do a free audit call: one call, then a written list of what to
        automate first, what it saves and what it costs, at{" "}
        <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">
          beyondelevation.com/call/hayat
        </a>
        .
      </p>

      <h2>Questions people actually ask</h2>

      <h3>How is AI implemented?</h3>
      <p>
        In nine steps, and five of them happen before anybody writes a prompt.
        Name the business problem, write down the number you will be judged on,
        decide whether the answer has to be identical every time, check the data
        exists and that you can reach it, choose build or buy, build the narrow
        version against the real system, test it against your number, wire it
        into the tool your staff already open, then govern it and watch the bill.
        The five frameworks I read on 18 September 2026 agree on most of that
        order. Microsoft runs Strategy, Plan, Ready, Govern, Secure, Manage. AWS
        runs business goal identification, ML problem framing, data processing,
        model development, model deployment, model monitoring. CRISP-DM, from
        1996, runs business understanding, data understanding, data preparation,
        modeling, evaluation, deployment.
      </p>

      <h3>What are the steps of AI implementation?</h3>
      <p>
        The five frameworks name 28 stages between them. Microsoft names 6,
        Google Cloud names 6 themes plus 3 maturity phases, AWS names 6 lifecycle
        phases, NIST names 4 functions and CRISP-DM names 6. Three of the five
        open with the business problem rather than the technology, and AWS calls
        business goal identification the most important phase of the lifecycle. 2
        of the 28 stage names use the word deployment, and in both frameworks it
        is the last phase. None of the 28 uses the word integration.
      </p>

      <h3>How long does it take to implement AI in a business?</h3>
      <p>
        No honest answer exists without seeing your systems, and none of the five
        frameworks gives one either. What I can tell you is where the time goes.
        Steps 4 and 8 are the long ones, getting to the data and getting the
        output into the tool people already use. The model work in the middle is
        usually the shortest part now, because you are calling somebody
        else&apos;s model rather than training your own. If a quote spends most
        of its days on steps 5 and 6 and almost none on 4 and 8, the quote is
        wrong.
      </p>

      <h3>Why do most AI projects fail?</h3>
      <p>
        Because they stop at step 7. MIT&apos;s NANDA initiative studied 300
        public AI deployments, interviewed 150 leaders and surveyed 350 employees
        for The GenAI Divide: State of AI in Business 2025, and found around 95
        percent of enterprise pilots deliver little or no measurable impact on
        profit and loss against about 5 percent that produce rapid revenue
        acceleration. The report blames flawed enterprise integration rather than
        the quality of the models. The demo works, everyone claps, and nobody
        changes the system the work happens in.
      </p>

      <h3>How much does it cost to build an AI system?</h3>
      <p>
        It depends which of the four rungs you pick at step 5, and the gap
        between them is large. Microsoft sets out ready to use Copilots, low code
        SaaS development, managed platform development and your own models on
        Azure infrastructure, in order of increasing effort, and says each step
        down buys control and costs speed. I will not quote you a figure I have
        not read on a vendor&apos;s own page this week, and neither should anyone
        selling to you. Ask for the cost of step 4 and step 8 separately, because
        that is where the surprises live.
      </p>

      <h3>What is the difference between AI implementation and AI operations?</h3>
      <p>
        Implementation is steps 1 to 8 and it ends. AI operations is step 9 and
        it does not. The frameworks agree: Microsoft gives 3 of its 6 phases to
        Govern, Secure and Manage, and the NIST AI Risk Management Framework,
        released on 26 January 2023, gives 2 of its 4 functions to Govern and
        Manage. A model nobody watches drifts, and a token bill nobody reads
        grows.
      </p>

      <h3>How do I automate my workflow without a data science team?</h3>
      <p>
        Stay on rungs 1 and 2 of step 5, and spend the money you save on step 8.
        Most of what a company of 20 to 500 people wants from AI is reading
        something unstructured, deciding what it is, and writing it into a system
        that already exists. That needs a model you rent, not one you train, and
        an engineer who can reach four systems with credentials. Data science
        comes in when you need a prediction from your own history, which is
        further down the list than most vendors suggest.
      </p>

      <h2>Where these numbers come from</h2>
      <p>
        Every count above comes from reading the five documents on 18 September
        2026, not from anybody&apos;s summary of them. They are Microsoft&apos;s{" "}
        <a
          href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI strategy guidance in the Cloud Adoption Framework for Azure
        </a>
        ,{" "}
        <a
          href="https://services.google.com/fh/files/misc/ai_adoption_framework_whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Cloud&apos;s AI Adoption Framework whitepaper
        </a>
        , the{" "}
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Well-Architected Machine Learning Lens
        </a>{" "}
        with its{" "}
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lifecycle.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          six phase lifecycle
        </a>
        , the{" "}
        <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">
          NIST AI Risk Management Framework
        </a>
        , and CRISP-DM as published in the{" "}
        <a href="https://www.ibm.com/docs/it/SS3RA7_18.3.0/pdf/ModelerCRISPDM.pdf" target="_blank" rel="noopener noreferrer">
          IBM SPSS Modeler CRISP-DM Guide
        </a>
        . The 95 percent figure and the study behind it are reported by{" "}
        <a
          href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fortune on 18 August 2025
        </a>
        , on The GenAI Divide: State of AI in Business 2025 from MIT&apos;s NANDA
        initiative. Vendor documentation gets rewritten, so if you are reading
        this months later, open the links and recount rather than trusting my
        tally.
      </p>
    </PageShell>
  );
}
