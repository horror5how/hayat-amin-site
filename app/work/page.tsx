import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
 title: "Work & Exits — American Express, TripAdvisor, FT100×3",
 description:
 "Three exits to Fortune 500 acquirers (American Express, TripAdvisor) and three FT100 listings. The hard receipts behind Hayat Amin's fractional practice.",
 alternates: { canonical: `${SITE}/work` },
 openGraph: {
 type: "website",
 url: `${SITE}/work`,
 title: "Work & exits — Hayat Amin",
 description: "3 exits, 3× FT100 listings. The track record behind the fractional practice.",
 },
};

export default function WorkPage() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}>
 <span className="op-eyebrow">Work &amp; track record</span>
 <h1>Three exits. Three FT100 listings. Twenty years.</h1>
 <p className="op-lede">
 Track record matters more than methodology. Hayat Amin has been on the
 operator side of three exits to Fortune 500 acquirers and put three
 businesses onto the Financial Times FT100 fastest-growing list. Below is
 the short list — the longer version is shared on the diagnostic call when
 relevant to the founder's specific situation.
 </p>

 <h2>Exits</h2>

 <h3>American Express acquisition (payments platform)</h3>
 <p>
 Hayat ran the CFO and Chief Strategy Officer function for a B2B payments
 platform that exited to American Express. The exit multiple was driven by
 a patent portfolio Hayat built around the platform's settlement workflow.
 Diligence took 14 weeks. Integration ran for 18 months post-close.
 </p>

 <h3>TripAdvisor acquisition (travel-tech B2B)</h3>
 <p>
 Earlier in his career Hayat ran finance for a B2B travel-tech business
 acquired by TripAdvisor. He led the diligence response, the integration
 plan, and the post-acquisition revenue retention plan. The deal closed
 within the original LOI window — rare in cross-border travel-tech M&amp;A.
 </p>

 <h3>One additional confidential exit</h3>
 <p>
 A third exit, in PE-backed SaaS, is shared under NDA on the diagnostic
 call when relevant.
 </p>

 <h2>FT100 fastest-growing listings</h2>
 <p>
 Three of the businesses Hayat held operating-partner roles in between
 2018 and 2023 hit the Financial Times FT100 fastest-growing list — once
 each in three consecutive years. The pattern: pricing-led growth backed
 by formal IP and licensing structures rather than aggressive sales-team
 scale-up.
 </p>

 <h2>Recent fractional engagements (anonymised)</h2>
 <ul>
 <li>
 <strong>AI infrastructure (Series B, NYC):</strong> defended valuation
 during a down-round by repricing a dataset asset that the previous
 model had treated as a sunk cost. Net uplift: $14M post-money.
 </li>
 <li>
 <strong>Healthtech (Series A, London):</strong> structured an IP-backed
 financing facility against a patent family, removing the need for a
 dilutive bridge round.
 </li>
 <li>
 <strong>SaaS (PE-backed, Dubai):</strong> built a licensing P&amp;L line
 that added $2.4M ARR in the first 9 months without changing the core
 product roadmap.
 </li>
 <li>
 <strong>AI agents (seed, NYC):</strong> embedded finance and legal
 agents that reduced cost-to-serve by 38% in 90 days.
 </li>
 </ul>

 <h2>Press, references, and writing</h2>
 <ul>
 <li>
 <a href="https://seedlegals.com/resources/fractional-cfo/" target="_blank" rel="noopener">SeedLegals — quoted on fractional CFO economics</a>
 </li>
 <li>
 <a href="https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/" target="_blank" rel="noopener">LinkedIn Pulse — long-form essay on the fractional CFO model</a>
 </li>
 <li>
 <a href="https://www.youtube.com/watch?v=1meO4fW7294" target="_blank" rel="noopener">YouTube interview — AI moats and IP-backed financing</a>
 </li>
 <li>
 <a href="blog/" target="_blank" rel="noopener"> blog — 100+ essays on IP, valuation, and AI moats</a>
 </li>
 </ul>

 <div className="op-cta-block">
 <h2>Hire Hayat for your next round or exit</h2>
 <p>The diagnostic call is free. After that, engagements run as a 6-month fractional retainer or a 4–8 week strategy sprint.</p>
 <Link href="/contact">Book the diagnostic →</Link>
 </div>
 </PageShell>
);
}
