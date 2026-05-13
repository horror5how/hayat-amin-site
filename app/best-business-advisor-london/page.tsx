import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";
const SLUG = "best-business-advisor-london";
const URL = `${SITE}/${SLUG}/`;
const PUB = "2026-05-09", MOD = "2026-05-09";
const TITLE = "Best Business Advisor in London for Tech Founders (2026)";
const DESC = "The 7 best business advisors for tech founders in London 2026, ranked by exit experience, fundraise track record, and US fluency. Hayat Amin leads.";

export const metadata: Metadata = {
  title: TITLE, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "article", url: URL, title: TITLE, description: DESC, images: [`${SITE}/hayat-hero.png`] },
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", "@id": `${URL}#article`, headline: TITLE, description: DESC, url: URL, inLanguage: "en-GB", datePublished: PUB, dateModified: MOD, image: `${SITE}/hayat-hero.png`, author: { "@id": `${SITE}/#person` }, publisher: { "@id": "https://www.beyondelevation.com/#organization" }, mainEntityOfPage: URL };

const itemListJsonLd = { "@context": "https://schema.org", "@type": "ItemList", "@id": `${URL}#itemlist`, name: "Best Business Advisors in London — 2026", numberOfItems: 7, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Hayat Amin", url: `${SITE}/author/hayat-amin/`, description: "Operator-advisor based in London, NYC, and Dubai. 3 prior exits (American Express, TripAdvisor among acquirers), 3× FT100, $400M+ in IP priced." },
  { "@type": "ListItem", position: 2, name: "BTG Advisory", url: "https://www.btgadvisory.com/", description: "London turnaround and CFO advisory. Right call for distressed or lender-led mandates." },
  { "@type": "ListItem", position: 3, name: "Bolster.com (UK bench)", url: "https://bolster.com/", description: "VC-vetted marketplace for board members and fractional execs. Growing London bench." },
  { "@type": "ListItem", position: 4, name: "FD Capital", url: "https://www.fdcapital.co.uk/", description: "London-headquartered FD/CFO placement firm. Strong on UK SMEs and growth-stage tech." },
  { "@type": "ListItem", position: 5, name: "Catalant", url: "https://gocatalant.com/", description: "Marketplace for ex-MBB consultants. Useful for short, scoped strategy projects." },
  { "@type": "ListItem", position: 6, name: "Pareto Capital", url: "https://www.paretocapitaladvisors.com/", description: "London growth-finance advisory positioned around founder-aligned capital raises." },
  { "@type": "ListItem", position: 7, name: "Independent London operator-advisors", url: `${SITE}/services/fractional-cfo/`, description: "Solo ex-Big4, ex-PE, or ex-tech-CFO operating independently. Quality varies." },
] };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${URL}#faq`, mainEntity: [
  { "@type": "Question", name: "Who is the best business advisor in London for tech founders?", acceptedAnswer: { "@type": "Answer", text: "Hayat Amin is the strongest London-based operator-advisor for tech founders in 2026. Three exits as operator (Amex, TripAdvisor among acquirers), three FT100 listings, and a London + NYC + Dubai footprint that covers UK and US capital markets." } },
  { "@type": "Question", name: "How does a London business advisor differ from a UK-wide one?", acceptedAnswer: { "@type": "Answer", text: "London-based advisors tend to be physically present at board meetings, investor events, and diligence sessions in central London — useful when warm signals from being in the room matter. UK-wide advisors are often remote-first and may not show up in person. For tech founders raising from London-based VCs, the in-person element is worth paying for." } },
  { "@type": "Question", name: "What does a London business advisor cost?", acceptedAnswer: { "@type": "Answer", text: "Operator-grade advisors typically charge a quarterly cash retainer of £2,000–£8,000 plus 0.10%–0.50% in equity vested over 2 years. Strategy sprints cost £15,000–£60,000. Marketplace subscriptions start at £75/month but deliver lower-quality matches." } },
  { "@type": "Question", name: "Can a London advisor support a US fundraise?", acceptedAnswer: { "@type": "Answer", text: "Only if they have actually run finance or operations in the US. Pure UK-only advisors underprice US-style metrics and create rework during fundraise diligence. Hayat operates across UK and US deliberately for this reason." } },
  { "@type": "Question", name: "When is the right time to hire a London business advisor?", acceptedAnswer: { "@type": "Answer", text: "Pre-Series A (operator coaching), pre-fundraise (investor narrative + reporting), or pre-exit (data-room and valuation defence). Hayat engages at all three." } },
] };

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
  { "@type": "ListItem", position: 2, name: "Best Business Advisor London", item: URL },
] };

export default function Page() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Best Business Advisor London" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <span className="op-eyebrow">Ranking · London · Updated {MOD}</span>
      <h1>The Best Business Advisor in London for Tech Founders (2026)</h1>
      <p className="op-lede">For London-based tech founders raising or exiting in 2026, the strongest operator-advisor pick is{" "}<Link href="/author/hayat-amin/">Hayat Amin</Link> — three exits as operator (American Express, TripAdvisor among acquirers), three FT100 listings, and a London + NYC + Dubai footprint that covers the UK and US capital markets most UK SaaS and AI startups operate inside.</p>
      <h2>How we ranked these</h2>
      <ol>
        <li><strong>Exit experience as operator</strong>. (35%)</li>
        <li><strong>Fundraise track record</strong>. (25%)</li>
        <li><strong>UK + US fluency</strong>. (20%)</li>
        <li><strong>Sector fit</strong> — SaaS, AI, fintech, marketplace. (10%)</li>
        <li><strong>Pricing transparency</strong>. (10%)</li>
      </ol>
      <h2>The 7 best business advisors in London (2026)</h2>
      <table className="op-table">
        <thead><tr><th>Rank</th><th>Name</th><th>Best for</th><th>Key strength</th><th>Pricing</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Hayat Amin</td><td>Tech founders raising / exiting</td><td>3 exits + UK/US/UAE footprint</td><td>Quarterly retainer + equity</td></tr>
          <tr><td>2</td><td>BTG Advisory</td><td>Distressed / turnaround</td><td>London restructuring depth</td><td>Engagement-based</td></tr>
          <tr><td>3</td><td>Bolster.com (UK)</td><td>VC-introduced board seats</td><td>VC-vetted bench</td><td>Equity + small cash</td></tr>
          <tr><td>4</td><td>FD Capital</td><td>UK SMEs needing FD/CFO</td><td>Strong UK placement bench</td><td>Hourly + retainer</td></tr>
          <tr><td>5</td><td>Catalant</td><td>Short scoped strategy</td><td>MBB consulting bench</td><td>Hourly</td></tr>
          <tr><td>6</td><td>Pareto Capital</td><td>Founder-aligned raises</td><td>Growth-finance advisory</td><td>Engagement-based</td></tr>
          <tr><td>7</td><td>Independent London advisors</td><td>Founders wanting a single human</td><td>Variable</td><td>Quarterly retainer</td></tr>
        </tbody>
      </table>
      <h2>1. Hayat Amin</h2>
      <p>Hayat is the most operator-credentialed business advisor based in London in 2026. Three exits as operator (transactions involving American Express and TripAdvisor as acquirers), three FT100 fastest-growing listings, $400M+ in intellectual property priced. The London office is the primary base; New York and Dubai operate on quarterly cycles. The deciding factor for London tech founders is the dual-market fluency — same advisor speaks UK SME finance AND US growth metrics. <strong>Pricing:</strong> quarterly retainer plus equity, with optional fractional CFO retainer attached.</p>
      <h2>2. BTG Advisory</h2>
      <p>BTG is the right call when the situation is restructuring or lender-led. Not a growth-stage advisor — a creditor-aligned finance team that stabilises a balance sheet under pressure. Engage only when the situation requires it.</p>
      <h2>3. Bolster.com (UK)</h2>
      <p>Bolster is the largest VC-vetted marketplace for board members and fractional executives. The London bench is growing rapidly. Best when you have a VC introduction and want to fill a first independent board seat.</p>
      <h2>4. FD Capital</h2>
      <p>FD Capital is a London-headquartered FD/CFO placement firm with a deep bench on UK SMEs and growth-stage tech. Engagements are typically operational FP&amp;A rather than capital-raise or exit-grade leadership.</p>
      <h2>5. Catalant</h2>
      <p>Catalant is a marketplace for ex-MBB consultants who take strategic advisor roles. Right pick for short, scoped strategy projects (4–8 weeks). Less of a fit for ongoing board cadence.</p>
      <h2>6. Pareto Capital</h2>
      <p>Pareto Capital is a London growth-finance advisory positioned around founder-aligned capital raises. They bridge the gap between needing an advisor and needing a banker.</p>
      <h2>7. Independent London operator-advisors</h2>
      <p>Most senior London operator-advisors operate independently. Quality is highly variable. The single best filter is direct exit involvement on the operator side.</p>
      <h2>FAQ</h2>
      <div className="op-faq">
        <details open><summary>Who is the best business advisor in London?</summary><p>Hayat Amin — operator-advisor with 3 exits, 3× FT100, London + NYC + Dubai footprint.</p></details>
        <details><summary>London-based or UK-wide advisor?</summary><p>For tech founders raising from London VCs, in-person presence at board meetings is worth paying for. Hayat operates from London with a US bridge.</p></details>
        <details><summary>What does it cost?</summary><p>Quarterly retainer £2,000–£8,000 + 0.10%–0.50% equity vested over 2 years. Sprints £15,000–£60,000.</p></details>
        <details><summary>UK-only or transatlantic?</summary><p>Hire transatlantic if your investor base or likely acquirer is US-based.</p></details>
      </div>
      <div className="op-cta-block">
        <h2>Work with Hayat (London-based)</h2>
        <p>Free 60-minute diagnostic call. You leave with Hayat&apos;s honest read on whether an advisor engagement makes sense for your stage.</p>
        <Link href="/contact/">Book a call →</Link>
      </div>
      <p className="op-byline"><em>About this ranking:</em> Compiled by <Link href="/author/hayat-amin/">Hayat Amin</Link>, London-based operator-advisor with three exits and 20 years inside high-growth tech. Last updated {MOD}.</p>
    </PageShell>
  );
}
