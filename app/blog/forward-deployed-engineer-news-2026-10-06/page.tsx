import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../_components/PageShell";
import "../../_components/page-shell.css";

const SITE = "https://meethayat.com";
const SLUG = "forward-deployed-engineer-news-2026-10-06";
const URL = `${SITE}/blog/${SLUG}`;
const PUB = "2026-10-06";
const MOD = "2026-10-06";
const TITLE = "Forward Deployed Engineer News: 12 Stories From 2026, Newest First, and What Each Means for a Buyer";
const DESC =
  "The biggest forward deployed engineer news of 2026: Anthropic is spending $100 million to train 10,000 of them, Gartner says 70 percent of enterprises will abandon agentic AI built by vendor FDEs by 2028, and OpenAI, AWS, Microsoft, Google Cloud and Accenture have each built a unit around the job. Here are 12 stories from May to 6 October 2026, newest first, with my own count of the live job feeds this morning. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.";
const HERO = `${SITE}/${SLUG}.jpg`;
const HERO_ALT =
  "An illuminated artwork in the spirit of the golden age of Islamic art, gold leaf and lapis inside a turquoise arabesque border. In a great caravanserai courtyard at dawn a crier stands on a wooden platform and unrolls a long blank scroll to the merchants gathered around him, while camels and horses loaded with bedrolls and tool bundles arrive from every arch, their travelling craftsmen about to set out into the walled city beyond.";

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
      "headline": "Forward Deployed Engineer News: 12 Stories From 2026, Newest First, and What Each Means for a Buyer",
      "description": "The biggest forward deployed engineer news of 2026: Anthropic is spending $100 million to train 10,000 of them, Gartner says 70 percent of enterprises will abandon agentic AI built by vendor FDEs by 2028, and OpenAI, AWS, Microsoft, Google Cloud and Accenture have each built a unit around the job. Here are 12 stories from May to 6 October 2026, newest first, with my own count of the live job feeds this morning. Written by Hayat Amin, a chief financial officer turned forward deployed engineer.",
      "url": URL,
      "inLanguage": "en",
      "datePublished": "2026-10-06",
      "dateModified": "2026-10-06",
      "image": [
        {
          "@id": `${URL}#hero`
        }
      ],
      "author": {
        "@id": "https://meethayat.com/#person"
      },
      "creator": {
        "@id": "https://meethayat.com/#person"
      },
      "mainEntityOfPage": URL,
      "about": "Forward deployed engineer news in 2026: 12 announcements from May to 6 October 2026, newest first, from OpenAI, Google Cloud, AWS, Microsoft, Anthropic, Ode, DXC, Accenture, Devoteam and Gartner, plus a count of six employers' live job feeds",
      "citation": [
        {
          "@type": "WebPage",
          "name": "Channel Dive, Anthropic, AWS step up FDE push, 5 October 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Channel Dive"
          },
          "url": "https://www.channeldive.com/news/anthropic-aws-forward-deployed-engineer-certifications/832157/"
        },
        {
          "@type": "WebPage",
          "name": "Anthropic, Claude Frontier Academy: $100M to train 10,000 engineers, 2 October 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Anthropic"
          },
          "url": "https://www.anthropic.com/news/claude-frontier-academy"
        },
        {
          "@type": "WebPage",
          "name": "Channel Dive, Are forward deployed engineers flirting with failure?, 30 September 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Channel Dive"
          },
          "url": "https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/"
        },
        {
          "@type": "WebPage",
          "name": "Devoteam, completes Google Cloud's Forward Deployed Engineer enablement program, 28 September 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Devoteam"
          },
          "url": "https://www.devoteam.com/news-and-pr/devoteam-becomes-one-of-the-first-companies-in-europe-to-complete-google-clouds-forward-deployed-engineer-fde-enablement-program/"
        },
        {
          "@type": "WebPage",
          "name": "Accenture, Accenture and Google Cloud Deepen Partnership with Formation of New Accenture Gemini Enterprise Business Group, 8 September 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Accenture"
          },
          "url": "https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group"
        },
        {
          "@type": "WebPage",
          "name": "Channel Dive, DXC promotes AI platform builders as Anthropic cohort reaches 86, 31 July 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Channel Dive"
          },
          "url": "https://www.channeldive.com/news/dxc-promotes-ai-platform-builders-as-anthropic-cohort-reaches-86/826727/"
        },
        {
          "@type": "WebPage",
          "name": "Ode, Anthropic, Blackstone, and Hellman & Friedman Introduce Ode with Anthropic, 15 July 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Ode with Anthropic"
          },
          "url": "https://www.ode.com/press/anthropic-blackstone-and-hellman-friedman-introduce-ode-with-anthropic-an-enterprise-ai-services-firm"
        },
        {
          "@type": "WebPage",
          "name": "TechCrunch, Anthropic, Blackstone bet the next trillion-dollar AI business is implementation, 15 July 2026",
          "publisher": {
            "@type": "Organization",
            "name": "TechCrunch"
          },
          "url": "https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/"
        },
        {
          "@type": "WebPage",
          "name": "PYMNTS, Anthropic Makes First Acquisition for Enterprise AI Push",
          "publisher": {
            "@type": "Organization",
            "name": "PYMNTS"
          },
          "url": "https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-makes-first-acquisition-for-enterprise-ai-push/"
        },
        {
          "@type": "WebPage",
          "name": "CIO Dive, Microsoft pours $2.5B into push to embed engineers with customers, 2 July 2026",
          "publisher": {
            "@type": "Organization",
            "name": "CIO Dive"
          },
          "url": "https://www.ciodive.com/news/microsoft-25b-embed-engineers/824392/"
        },
        {
          "@type": "WebPage",
          "name": "Channel Dive, AWS bets $1B on forward deployed engineers in AI land grab, 30 June 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Channel Dive"
          },
          "url": "https://www.channeldive.com/news/aws-bets-1b-on-forward-deployed-engineers-in-ai-land-grab/824102/"
        },
        {
          "@type": "WebPage",
          "name": "Channel Dive, Google Cloud is hiring an army of AI deployment engineers, 13 May 2026",
          "publisher": {
            "@type": "Organization",
            "name": "Channel Dive"
          },
          "url": "https://www.channeldive.com/news/google-cloud-forward-deployed-engineering-jobs/820176/"
        },
        {
          "@type": "WebPage",
          "name": "AI and Data Insider, OpenAI Launches $4 Billion Deployment Company, Acquires Tomoro",
          "publisher": {
            "@type": "Organization",
            "name": "AI and Data Insider"
          },
          "url": "https://aidatainsider.com/news/openai-launches-4-billion-deployment-company-acquires-tomoro/"
        }
      ]
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
      "description": "Hayat Amin has spent twenty years in technology and sold three companies as chief financial officer, with American Express and TripAdvisor among the buyers and three FT 100 fastest growing listings along the way. He is a CFO turned forward deployed engineer: he builds AI operations inside companies himself rather than writing a report about them, connecting the systems that do not talk to each other and putting real time dashboards in front of chief executives. He also works on intellectual property and data asset valuation and monetisation, and sits beside founders from first conversation to wire transfer on an exit. He is available for fractional CFO and AI operations work through Beyond Elevation.",
      "worksFor": {
        "@type": "Organization",
        "name": "Beyond Elevation",
        "url": "https://beyondelevation.com"
      }
    },
    {
      "@type": "ImageObject",
      "@id": `${URL}#hero`,
      "url": HERO,
      "contentUrl": HERO,
      "width": 1408,
      "height": 768,
      "caption": "An illuminated artwork in the spirit of the golden age of Islamic art, gold leaf and lapis inside a turquoise arabesque border. In a great caravanserai courtyard at dawn a crier stands on a wooden platform and unrolls a long blank scroll to the merchants gathered around him, while camels and horses loaded with bedrolls and tool bundles arrive from every arch, their travelling craftsmen about to set out into the walled city beyond.",
      "name": "A crier reads the season's announcements in a caravanserai while travelling craftsmen set out into the city",
      "about": {
        "@id": "https://meethayat.com/#person"
      },
      "creator": {
        "@id": "https://meethayat.com/#person"
      },
      "representativeOfPage": true,
      "keywords": "forward deployed engineer news, fde news, frontier deployed engineer, Claude Frontier Academy, OpenAI Deployment Company, Ode with Anthropic, Gartner, AWS, Microsoft Frontier Company, Accenture, Hayat Amin, Beyond Elevation, New York"
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#stories`,
      "name": "Forward deployed engineer news in 2026, newest first",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 12,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "the live job feeds this morning",
          "url": "https://meethayat.com/blog/forward-deployed-engineer-news-2026-10-06"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AWS publishes two FDE credentials",
          "url": "https://www.channeldive.com/news/anthropic-aws-forward-deployed-engineer-certifications/832157/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Anthropic will spend $100 million training 10,000 Frontier Deployed Engineers",
          "url": "https://www.anthropic.com/news/claude-frontier-academy"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Gartner says 70 percent of enterprises will abandon agentic AI built by vendor FDEs by 2028",
          "url": "https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Devoteam certifies 20 engineers through Google Cloud's FDE programme",
          "url": "https://www.devoteam.com/news-and-pr/devoteam-becomes-one-of-the-first-companies-in-europe-to-complete-google-clouds-forward-deployed-engineer-fde-enablement-program/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Accenture and Google Cloud plan a 1,000-person FDE workforce",
          "url": "https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "DXC has 86 Claude-certified FDEs against a promise of tens of thousands",
          "url": "https://www.channeldive.com/news/dxc-promotes-ai-platform-builders-as-anthropic-cohort-reaches-86/826727/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Ode with Anthropic launches for mid-sized companies",
          "url": "https://www.ode.com/press/anthropic-blackstone-and-hellman-friedman-introduce-ode-with-anthropic-an-enterprise-ai-services-firm"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Microsoft puts $2.5 billion and 6,000 engineers into the Microsoft Frontier Company",
          "url": "https://www.ciodive.com/news/microsoft-25b-embed-engineers/824392/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "AWS puts $1 billion behind its own FDE organisation",
          "url": "https://www.channeldive.com/news/aws-bets-1b-on-forward-deployed-engineers-in-ai-land-grab/824102/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Google Cloud opens 59 FDE roles",
          "url": "https://www.channeldive.com/news/google-cloud-forward-deployed-engineering-jobs/820176/"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "OpenAI launches the OpenAI Deployment Company and buys Tomoro",
          "url": "https://aidatainsider.com/news/openai-launches-4-billion-deployment-company-acquires-tomoro/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the latest forward deployed engineer news?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On 6 October 2026 the newest stories were AWS's two FDE credentials, reported on 5 October, and Anthropic's Claude Frontier Academy on 2 October, a $100 million plan to train 10,000 Frontier Deployed Engineers by the end of 2027. The week before, Gartner predicted that 70 percent of enterprises will abandon agentic AI built by vendor forward deployed engineering by 2028."
          }
        },
        {
          "@type": "Question",
          "name": "What is a frontier deployed engineer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's Anthropic's name for the same job. Anthropic's Claude Frontier Academy trains Frontier Deployed Engineers, who earn a Claude Resident Engineer badge after a graded practical and a Claude Frontier Deployed Engineer badge after a 12-week residency leading a real Claude project at their own employer. Microsoft's equivalent certification is called Frontier Transformation Engineer, according to Channel Dive."
          }
        },
        {
          "@type": "Question",
          "name": "What does forward deployed engineer hacker news say?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The loudest take in Hacker News threads on the job, including Rise of the Forward Deployed Engineer, is that the job is the greatest rebrand in enterprise software history, a consultant with better margins. I answered that head on in is a forward deployed engineer just a consultant. Gartner's Mukul Saha made a similar point in September, that many providers now use forward deployed as a label for implementation or consulting."
          }
        },
        {
          "@type": "Question",
          "name": "How many forward deployed engineers are there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gartner's Mukul Saha told Channel Dive in September 2026 that there are about 2,000 active FDEs and demand is probably four times that. Open roles are a separate number. On 6 October 2026 I counted 231 open titles with forward deployed in them at six employers alone, 81 at Palantir and 99 at Databricks."
          }
        },
        {
          "@type": "Question",
          "name": "How much do forward deployed engineers cost a company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gartner estimates FDE consulting fees at $200,000 to $400,000 a quarter per use case before platform and integration costs, as reported by CIO Dive. That's what the buyer pays the vendor, not the engineer's salary. Google Cloud's New York and Atlanta postings in May paid a base of $127,000 to $183,000."
          }
        },
        {
          "@type": "Question",
          "name": "What is a forward deployed engineer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A software engineer who works inside a customer's company until the product runs in production there. I wrote the full answer, with the job postings behind it, in what is a forward deployed engineer."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://meethayat.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://meethayat.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Forward Deployed Engineer News: 12 Stories From 2026",
          "item": URL
        }
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
        { label: "Forward Deployed Engineer News" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="op-eyebrow">Founder Q&amp;A &middot; Updated {MOD}</span>
      <h1>Forward Deployed Engineer News: 12 Stories From 2026</h1>

      <p className="op-lede">The biggest forward deployed engineer news of 2026 is that the job turned into an industry. Anthropic is spending $100 million to train 10,000 of them, Gartner says 70 percent of enterprises will abandon agentic AI built by vendor FDEs by 2028, and OpenAI, AWS, Microsoft and Accenture have each built a unit around them.</p>
      <p>I&apos;m Hayat Amin. I spent twenty years as a technology chief financial officer, sold three companies in that seat, and now do forward deployed work inside other people&apos;s companies myself. So I read this news as the person who gets the invoice. Below are 12 stories from May to this morning, newest first, each with what it means if you run a company and who should ignore it.</p>

      <figure style={{ margin: "2rem 0", maxWidth: "100%" }}>
        <img
          src={`/${SLUG}.jpg`}
          alt={HERO_ALT}
          width={1408}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <figcaption style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
          A season of announcements read out in one courtyard. Every caravan in it is carrying craftsmen who will go and work inside somebody else&apos;s house.
        </figcaption>
      </figure>

      <h2>How I picked and ordered the 12</h2>
      <p>Google already shows my pages for forward deployed engineer news, at a best position of 2, and between 20 August and 5 October 2026 nobody clicked. The pages it showed were about other questions. This one answers the search.</p>
      <p>Every story is ordered by date, newest first. I read each one on the company&apos;s own release where the page would load: Anthropic, Accenture, Devoteam and Ode. Gartner&apos;s and OpenAI&apos;s pages refused my reader, so for those two I used the trade reports that quote them and I say so in the item. Every figure below is from those pages or from my own count of the job feeds this morning. Where a number is my arithmetic, I say that too.</p>
      <p>I left out a few things I couldn&apos;t read at source. Salesforce&apos;s 1,000 AI deployment specialists, announced in March, only reached me second hand in <a href="https://www.channeldive.com/news/aws-bets-1b-on-forward-deployed-engineers-in-ai-land-grab/824102/" target="_blank" rel="noopener noreferrer">Channel Dive&apos;s AWS piece</a>, so it isn&apos;t an item. I also left out third-party job censuses and counted the feeds myself.</p>
      <h2>The 12 stories, newest first</h2>
      <h3>1. 6 October 2026: the live job feeds this morning</h3>
      <p>I read six employers&apos; own job feeds on Greenhouse, Ashby and Lever this morning and counted every title with forward deployed in it. Palantir had 81 of 318 live postings. Databricks had 99 of 887. OpenAI had 28 of 823, up from 21 when I counted on 20 September. Scale AI had 15 of 188, Anthropic 6 of 644 and Datadog 2 of 440.</p>
      <p>That&apos;s 231 titles, and Palantir and Databricks hold 180 of them, which is 78 percent by my division. Anthropic is the odd one. It has 6 open roles and a plan to train 10,000 people, which tells you it means to grow the job inside its partners and customers rather than on its own payroll.</p>
      <p>Useful if you want to know who is hiring and where the experience sits. Wrong if you read it as the size of the profession, because these are open titles, not people in seats. Gartner puts the people at about 2,000, in story 4 below.</p>
      <h3>2. 5 October 2026: AWS publishes two FDE credentials</h3>
      <p>AWS now offers an FDE validated certification and an FDE advanced credential, with three free training pathways on Skill Builder called ground, orchestrate and prove. One pathway gets you the validated badge and all three get you the advanced one, <a href="https://www.channeldive.com/news/anthropic-aws-forward-deployed-engineer-certifications/832157/" target="_blank" rel="noopener noreferrer">Channel Dive reported on 5 October</a>.</p>
      <p>The line that matters to a buyer is the delivery menu. AWS says customers can choose a first-party AWS FDE, an AWS-led engagement with partner specialists, or a partner-led FDE. You can now ask a partner for the credential before you sign. A badge earned from three online pathways isn&apos;t delivery, though, so ask for the last system they put live as well.</p>
      <h3>3. 2 October 2026: Anthropic will spend $100 million training 10,000 Frontier Deployed Engineers</h3>
      <p><a href="https://www.anthropic.com/news/claude-frontier-academy" target="_blank" rel="noopener noreferrer">Anthropic launched Claude Frontier Academy</a> with a $100 million commitment and a target of 10,000 engineers by the end of 2027. Note the F. In Anthropic&apos;s version FDE stands for Frontier Deployed Engineer. The first cohorts come from Accenture, Bain, Capgemini, Commonwealth Bank of Australia, Deloitte, McKinsey, Morgan Stanley and Novo Nordisk, and run in San Francisco, New York and London.</p>
      <p>The format is borrowed from medicine. A multi-day in-person programme ends in a graded practical, a pass earns the Claude Resident Engineer badge, then a 12-week residency leading a real Claude project at the engineer&apos;s own employer, then a second assessment for the Claude Frontier Deployed Engineer badge. The first of those is expected in early 2027. Entry is by nomination through an Anthropic account team.</p>
      <p>Good news if you&apos;re an enterprise with an account team and a strong engineer to nominate. If you run a company of 200 people you won&apos;t be sending anyone, and you&apos;ll meet these engineers on a consultancy&apos;s invoice. 5 of the 8 named first-cohort employers are consulting firms.</p>
      <h3>4. 29 September 2026: Gartner says 70 percent of enterprises will abandon agentic AI built by vendor FDEs by 2028</h3>
      <p>This is the one I&apos;d read twice. Gartner predicts that by 2028, 70 percent of enterprises will abandon agentic AI built by vendor forward deployed engineering, trapped by cost and unable to keep developing it themselves. Its press page blocked my reader, so I took the detail from <a href="https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/" target="_blank" rel="noopener noreferrer">Channel Dive&apos;s report</a> and <a href="https://www.ciodive.com/news/microsoft-25b-embed-engineers/824392/" target="_blank" rel="noopener noreferrer">CIO Dive</a>. Mukul Saha, a Gartner senior director analyst, said many providers now use forward deployed as a label for implementation, professional services, solution engineering or AI consulting, some thoughtfully, others because it sounds more strategic.</p>
      <p>CIO Dive gives Gartner&apos;s fee estimate as $200,000 to $400,000 a quarter per use case, before platform and integration costs. Four quarters of the low end is $800,000 a year for one use case, which is my multiplication. Saha also told Channel Dive there are about 2,000 active FDEs and demand is probably four times that.</p>
      <p>As a CFO, the cost isn&apos;t what worries me. The failure Gartner names is that nobody inside the client can keep the system going once the vendor leaves. Ask for the exit plan and the named internal owner before you sign. Don&apos;t read this as FDEs don&apos;t work, though. Saha&apos;s own words were that the right FDE model brings good outcomes.</p>
      <h3>5. 28 September 2026: Devoteam certifies 20 engineers through Google Cloud&apos;s FDE programme</h3>
      <p><a href="https://www.devoteam.com/news-and-pr/devoteam-becomes-one-of-the-first-companies-in-europe-to-complete-google-clouds-forward-deployed-engineer-fde-enablement-program/" target="_blank" rel="noopener noreferrer">Devoteam announced</a> that 20 of its engineers finished Google Cloud&apos;s Forward Deployed Engineer enablement programme, four days at its Madrid office from 1 to 4 September. To get in, each needed two Gemini Enterprise certifications, one Google Cloud Professional certification and a live Gemini Enterprise customer project. Devoteam wants 200 Gemini Enterprise specialists within 12 months, on top of the 650 or so Google Cloud specialists it already has.</p>
      <p>This shows you what an FDE badge means at a systems integrator. It&apos;s four days on one vendor&apos;s agent stack, for engineers already billing on that vendor. Useful if you&apos;re a European buyer on Gemini Enterprise. Wrong if you aren&apos;t on Gemini, and it isn&apos;t a US story.</p>
      <h3>6. 8 September 2026: Accenture and Google Cloud plan a 1,000-person FDE workforce</h3>
      <p><a href="https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group" target="_blank" rel="noopener noreferrer">Accenture and Google Cloud launched</a> the Accenture Gemini Enterprise Business Group from New York and Sunnyvale, California, with a plan for a 1,000-person FDE workforce built on Accenture&apos;s nearly 50,000 Google Cloud-skilled people. The named proof is YouTube, where a Gemini Enterprise agent during NFL Sunday Ticket surge demand lifted customer sentiment 11 percent and cut average handle time 37 percent.</p>
      <p>1,000 out of 50,000 is 2 percent, by my division. That&apos;s a specialist bench, not a change in how Accenture staffs. Good for a Fortune 500 company already on Google. Wrong for a mid-sized company, which won&apos;t be the first call for a team of that size.</p>
      <h3>7. 31 July 2026: DXC has 86 Claude-certified FDEs against a promise of tens of thousands</h3>
      <p>In June DXC Technology said it would work with Anthropic to train tens of thousands of Claude-certified forward deployed engineers. On its earnings call, <a href="https://www.channeldive.com/news/dxc-promotes-ai-platform-builders-as-anthropic-cohort-reaches-86/826727/" target="_blank" rel="noopener noreferrer">chief executive Raul Fernandez said</a> 86 were certified, and its Claude-based platform, DXC Oasis, was running in 57 customer environments. DXC modelled close to zero revenue from the Anthropic work for the year.</p>
      <p>I don&apos;t read 86 as a failure. It took a month, and it&apos;s honest. I read it as the size of the gap between an announcement and a bench. Whoever you buy from, ask how many certified engineers are free this quarter, not how many are planned.</p>
      <h3>8. 15 July 2026: Ode with Anthropic launches for mid-sized companies</h3>
      <p><a href="https://www.ode.com/press/anthropic-blackstone-and-hellman-friedman-introduce-ode-with-anthropic-an-enterprise-ai-services-firm" target="_blank" rel="noopener noreferrer">Anthropic, Blackstone and Hellman &amp; Friedman launched Ode with Anthropic</a> under its own name. It&apos;s built on Fractional AI, the applied AI services firm bought in May 2026, and run by Fractional AI&apos;s co-founders, Chris Taylor as chief executive and Eddie Siegel as chief technology officer. Goldman Sachs, General Atlantic, Leonard Green &amp; Partners, Apollo Global Management, GIC and Sequoia Capital are in the consortium. <a href="https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/" target="_blank" rel="noopener noreferrer">TechCrunch reported</a> 100 engineers at launch. <a href="https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-makes-first-acquisition-for-enterprise-ai-push/" target="_blank" rel="noopener noreferrer">PYMNTS, citing Bloomberg,</a> reported that the deal ended Fractional AI&apos;s 11-month partnership with OpenAI.</p>
      <p>Garvan Doyle, Anthropic&apos;s Head of Forward Deployed Engineering, Americas, said mid-size companies need partners with real implementation depth. Of the firms on this list, Ode is the one aimed at the middle market. Wrong for you if you want a partner that stays neutral between models, because Ode is built on Claude.</p>
      <h3>9. 2 July 2026: Microsoft puts $2.5 billion and 6,000 engineers into the Microsoft Frontier Company</h3>
      <p><a href="https://www.ciodive.com/news/microsoft-25b-embed-engineers/824392/" target="_blank" rel="noopener noreferrer">Microsoft is spending $2.5 billion</a> on a new operating business, the Microsoft Frontier Company, to put 6,000 engineers inside customer operations, CIO Dive reported. Land O&apos;Lakes and Unilever were named as customers, and Microsoft said it has FDE partnerships with Accenture, Capgemini, EY, KPMG and PwC. In the same piece Alex Coqueiro, a Gartner senior director analyst, said 85 percent of tech providers will have FDE programmes as a core AI delivery model by the end of this year.</p>
      <p>6,000 is three times Gartner&apos;s estimate of the whole active FDE workforce, my comparison of two published numbers. Good for a Microsoft shop with a large account. If you&apos;re on a different stack, it isn&apos;t for you.</p>
      <h3>10. 30 June 2026: AWS puts $1 billion behind its own FDE organisation</h3>
      <p><a href="https://www.channeldive.com/news/aws-bets-1b-on-forward-deployed-engineers-in-ai-land-grab/824102/" target="_blank" rel="noopener noreferrer">AWS stood up a forward deployed engineering organisation</a> backed by $1 billion, as a separate business unit inside AWS rather than a standalone company, said Francessca Vasquez, its vice president of frontier AI engineering and services. The work runs in pods of five to six engineers on 45-day sprints, scoped around a business outcome instead of billable hours, and the stated aim is that customers can run the systems themselves afterwards.</p>
      <p>Of the big announcements, this is the one with the clearest shape for a buyer: a pod size, a sprint length and a handover. Wrong for you if your data and systems don&apos;t live on AWS.</p>
      <h3>11. 13 May 2026: Google Cloud opens 59 FDE roles</h3>
      <p>Google Cloud chief executive Thomas Kurian asked for builders on LinkedIn, and <a href="https://www.channeldive.com/news/google-cloud-forward-deployed-engineering-jobs/820176/" target="_blank" rel="noopener noreferrer">Channel Dive counted 59 distinct roles</a> in the US and abroad, including London, Paris and Hong Kong. A dozen applied AI forward deployed engineering roles in the New York and Atlanta areas paid a base of $127,000 to $183,000. Google also pointed to a $750 million commitment to its partners.</p>
      <p>One line in that piece has stayed with me. Peter Bryant of Omdia said FDEs are going to be on site for customers at most a month. If that&apos;s true, the partner who takes over after month one matters more than the engineer who starts. Wrong for you if you were hoping a vendor engineer would stay.</p>
      <h3>12. 11 May 2026: OpenAI launches the OpenAI Deployment Company and buys Tomoro</h3>
      <p>OpenAI launched the OpenAI Deployment Company with more than $4 billion of initial investment, majority owned and controlled by OpenAI, and agreed to buy Tomoro, which brings about 150 forward deployed engineers and deployment specialists who have worked for Tesco, Virgin Atlantic and Supercell. TPG led, with Advent, Bain Capital and Brookfield as co-lead founding partners, alongside Goldman Sachs, SoftBank Corp. and Warburg Pincus, and Bain &amp; Company, Capgemini and McKinsey &amp; Company on the consulting side. 19 firms in all. OpenAI&apos;s own page blocked my reader, so these figures are from <a href="https://aidatainsider.com/news/openai-launches-4-billion-deployment-company-acquires-tomoro/" target="_blank" rel="noopener noreferrer">AI and Data Insider&apos;s report of the announcement</a>.</p>
      <p>OpenAI says a typical engagement starts with a diagnostic of where AI can create the most value. That&apos;s the one thing every serious firm on this list agrees on. Good for an enterprise that wants OpenAI&apos;s engineers close to the model. Wrong for you if you want to stay free to switch models.</p>
      <h2>What the 12 add up to if you run a company</h2>
      <p>The money is priced per use case per quarter, so a vendor FDE is a running cost, not a project fee. The engineers sit at the largest firms: Palantir and Databricks alone have 180 of the 231 open titles I counted, and 5 of the 8 employers in Anthropic&apos;s first cohorts are consultancies. And every programme here except DXC&apos;s is tied to one model or one cloud, whether that&apos;s OpenAI, Claude, AWS, Azure or Gemini.</p>
      <p>The gap is the company of 20 to 500 people. Of the 12, only Ode says it was built for mid-size companies. Craig Donovan, chief operating officer of Pax8, told <a href="https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/" target="_blank" rel="noopener noreferrer">Channel Dive</a> that the MSP channel will be the forward deployed engineers for small and midsize businesses. Maybe. What I&apos;d want as an owner is the thing Gartner says most buyers won&apos;t get: an engineer who builds inside your own systems and then leaves you able to run it.</p>
      <p>That&apos;s the work I do through Beyond Elevation. I sit inside the company, connect the systems that don&apos;t talk to each other, build against your own accounts with your own credentials, and write the handover and the internal owner into the scope from the first week, so nothing walks out the door with me. It isn&apos;t tied to one model. The way I work is set out at <a href="https://meethayat.com/services/fde" target="_blank" rel="noopener noreferrer">meethayat.com/services/fde</a>.</p>
      <h2>About Hayat Amin</h2>
      <p>I&apos;m Hayat Amin, and I have spent twenty years in technology, most of them as a chief financial officer in companies growing faster than their systems could carry. I sold three of them in that seat, with American Express and TripAdvisor among the buyers, and carried three FT 100 fastest growing listings along the way. I read an FDE announcement the way I read a term sheet: the headcount, the fee and the exit clause tell you more than the press quote.</p>
      <p>I&apos;m exceptional at the part of this story most announcements skip, because I come at it from the finance side. I connect the systems in a company that were never built to talk to each other, I turn what comes out of them into a live number a chief executive can run the week on instead of a month end pack, and I value and monetise the intellectual property and data a company already owns. I also sit beside founders from the first conversation to the wire transfer on an exit.</p>
      <p>I&apos;m available now for fractional chief financial officer work and AI operations work through <a href="https://beyondelevation.com" target="_blank" rel="noopener noreferrer">Beyond Elevation</a>.</p>
      <p>If you want a second pair of eyes on which of your processes to automate first, I do a free audit call: one call, then a written list of what to automate first, what it saves and what it costs, at <a href="https://beyondelevation.com/call/hayat" target="_blank" rel="noopener noreferrer">beyondelevation.com/call/hayat</a>.</p>
      <h2>Questions people actually ask</h2>
      <h3>What is the latest forward deployed engineer news?</h3>
      <p>On 6 October 2026 the newest stories were AWS&apos;s two FDE credentials, reported on 5 October, and Anthropic&apos;s Claude Frontier Academy on 2 October, a $100 million plan to train 10,000 Frontier Deployed Engineers by the end of 2027. The week before, Gartner predicted that 70 percent of enterprises will abandon agentic AI built by vendor forward deployed engineering by 2028.</p>
      <h3>What is a frontier deployed engineer?</h3>
      <p>It&apos;s Anthropic&apos;s name for the same job. Anthropic&apos;s Claude Frontier Academy trains Frontier Deployed Engineers, who earn a Claude Resident Engineer badge after a graded practical and a Claude Frontier Deployed Engineer badge after a 12-week residency leading a real Claude project at their own employer. Microsoft&apos;s equivalent certification is called Frontier Transformation Engineer, according to Channel Dive.</p>
      <h3>What does forward deployed engineer hacker news say?</h3>
      <p>The loudest take in Hacker News threads on the job, including Rise of the Forward Deployed Engineer, is that the job is the greatest rebrand in enterprise software history, a consultant with better margins. I answered that head on in <Link href="/blog/is-a-forward-deployed-engineer-just-a-consultant-2026-08-26/">is a forward deployed engineer just a consultant</Link>. Gartner&apos;s Mukul Saha made a similar point in September, that many providers now use forward deployed as a label for implementation or consulting.</p>
      <h3>How many forward deployed engineers are there?</h3>
      <p>Gartner&apos;s Mukul Saha told Channel Dive in September 2026 that there are about 2,000 active FDEs and demand is probably four times that. Open roles are a separate number. On 6 October 2026 I counted 231 open titles with forward deployed in them at six employers alone, 81 at Palantir and 99 at Databricks.</p>
      <h3>How much do forward deployed engineers cost a company?</h3>
      <p>Gartner estimates FDE consulting fees at $200,000 to $400,000 a quarter per use case before platform and integration costs, as reported by CIO Dive. That&apos;s what the buyer pays the vendor, not the engineer&apos;s salary. Google Cloud&apos;s New York and Atlanta postings in May paid a base of $127,000 to $183,000.</p>
      <h3>What is a forward deployed engineer?</h3>
      <p>A software engineer who works inside a customer&apos;s company until the product runs in production there. I wrote the full answer, with the job postings behind it, in <Link href="/blog/what-is-a-forward-deployed-engineer-2026-09-12/">what is a forward deployed engineer</Link>.</p>
      <h2>Sources</h2>
      <p>Every source below was read on 6 October 2026. The job counts come from the public Greenhouse, Ashby and Lever feeds of Palantir, OpenAI, Anthropic, Databricks, Scale AI and Datadog, read the same morning, counting any title containing forward deployed. My earlier counts of 21 OpenAI titles and others are from <Link href="/blog/what-is-a-forward-deployed-product-manager-2026-09-20/">my 20 September count</Link>. Search impressions are from my own Google Search Console.</p>
      <ul>
        <li><a href="https://www.channeldive.com/news/anthropic-aws-forward-deployed-engineer-certifications/832157/" target="_blank" rel="noopener noreferrer">Channel Dive, Anthropic, AWS step up FDE push, 5 October 2026</a></li>
        <li><a href="https://www.anthropic.com/news/claude-frontier-academy" target="_blank" rel="noopener noreferrer">Anthropic, Claude Frontier Academy: $100M to train 10,000 engineers, 2 October 2026</a></li>
        <li><a href="https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/" target="_blank" rel="noopener noreferrer">Channel Dive, Are forward deployed engineers flirting with failure?, 30 September 2026</a></li>
        <li><a href="https://www.devoteam.com/news-and-pr/devoteam-becomes-one-of-the-first-companies-in-europe-to-complete-google-clouds-forward-deployed-engineer-fde-enablement-program/" target="_blank" rel="noopener noreferrer">Devoteam, completes Google Cloud&apos;s Forward Deployed Engineer enablement program, 28 September 2026</a></li>
        <li><a href="https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group" target="_blank" rel="noopener noreferrer">Accenture, Accenture and Google Cloud Deepen Partnership with Formation of New Accenture Gemini Enterprise Business Group, 8 September 2026</a></li>
        <li><a href="https://www.channeldive.com/news/dxc-promotes-ai-platform-builders-as-anthropic-cohort-reaches-86/826727/" target="_blank" rel="noopener noreferrer">Channel Dive, DXC promotes AI platform builders as Anthropic cohort reaches 86, 31 July 2026</a></li>
        <li><a href="https://www.ode.com/press/anthropic-blackstone-and-hellman-friedman-introduce-ode-with-anthropic-an-enterprise-ai-services-firm" target="_blank" rel="noopener noreferrer">Ode, Anthropic, Blackstone, and Hellman &amp; Friedman Introduce Ode with Anthropic, 15 July 2026</a></li>
        <li><a href="https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/" target="_blank" rel="noopener noreferrer">TechCrunch, Anthropic, Blackstone bet the next trillion-dollar AI business is implementation, 15 July 2026</a></li>
        <li><a href="https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-makes-first-acquisition-for-enterprise-ai-push/" target="_blank" rel="noopener noreferrer">PYMNTS, Anthropic Makes First Acquisition for Enterprise AI Push</a></li>
        <li><a href="https://www.ciodive.com/news/microsoft-25b-embed-engineers/824392/" target="_blank" rel="noopener noreferrer">CIO Dive, Microsoft pours $2.5B into push to embed engineers with customers, 2 July 2026</a></li>
        <li><a href="https://www.channeldive.com/news/aws-bets-1b-on-forward-deployed-engineers-in-ai-land-grab/824102/" target="_blank" rel="noopener noreferrer">Channel Dive, AWS bets $1B on forward deployed engineers in AI land grab, 30 June 2026</a></li>
        <li><a href="https://www.channeldive.com/news/google-cloud-forward-deployed-engineering-jobs/820176/" target="_blank" rel="noopener noreferrer">Channel Dive, Google Cloud is hiring an army of AI deployment engineers, 13 May 2026</a></li>
        <li><a href="https://aidatainsider.com/news/openai-launches-4-billion-deployment-company-acquires-tomoro/" target="_blank" rel="noopener noreferrer">AI and Data Insider, OpenAI Launches $4 Billion Deployment Company, Acquires Tomoro</a></li>
      </ul>
      <p>Announcements get revised and job counts change by the day, so if you&apos;re reading this weeks later, open the links rather than trusting my tally.</p>
    </PageShell>
  );
}
