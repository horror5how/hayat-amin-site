import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://meethayat.com";

export const metadata: Metadata = {
 title: "Contact Hayat Amin: Book a Free 60-Minute Diagnostic",
 description:
 "Book the free 60-minute diagnostic call with Hayat Amin. No deck, no proposal. One call, one number, then decide. Email hayat@beyondelevation.com today.",
 alternates: { canonical: `${SITE}/contact` },
 openGraph: {
 type: "website",
 url: `${SITE}/contact`,
 title: "Contact Hayat Amin",
 description: "Book the diagnostic call.",
 },
};

const contactJsonLd = {
 "@context": "https://schema.org",
 "@type": "ContactPage",
 "@id": `${SITE}/contact/#contactpage`,
 url: `${SITE}/contact`,
 name: "Contact Hayat Amin",
 mainEntity: { "@id": `${SITE}/#person` },
};

export default function ContactPage() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

 <span className="op-eyebrow">Contact</span>
 <h1>Book the 60-minute diagnostic.</h1>
 <p className="op-lede">
 One call. One number. No deck, no proposal. Most founders use it as a
 free second opinion on their valuation, IP defensibility, or fundraise
 readiness, even if they never engage formally.
 </p>

 <h2>The fastest path</h2>
 <ol>
 <li>
 Email{" "}
 <a href="mailto:hayat@beyondelevation.com">hayat@beyondelevation.com</a>
.
 </li>
 <li>
 Include: company name, stage, current ARR, and the specific problem you
 want help with.
 </li>
 <li>
 Hayat replies within 24 hours with a calendar link or a thoughtful no.
 </li>
 </ol>

 <h2>Phone</h2>
 <p>
 US: <a href="tel:+15713807699">+1 571-380-7699</a><br />
 UK: <a href="tel:+447476383531">+44 7476-383531</a>
 </p>

 <h2>Where Hayat is</h2>
 <ul>
 <li><Link href="/locations/new-york">New York</Link></li>
 <li><Link href="/locations/london">London</Link></li>
 <li><Link href="/locations/dubai">Dubai</Link></li>
 </ul>

 <h2>What Hayat does not take</h2>
 <ul>
 <li>Cold sales pitches.</li>
 <li>Pre-seed companies without a working product.</li>
 <li>Engagements where the founder is not the primary contact.</li>
 <li>Anything involving crypto-token issuance, non-IP-backed financial products, or jurisdictions Hayat is not licensed to operate in.</li>
 </ul>

 <h2>What you can expect</h2>
 <ul>
 <li>A reply within 24 hours.</li>
 <li>A calendar link if there is a fit, or a thoughtful no with referrals if not.</li>
 <li>The diagnostic call itself: direct, no slides, no warm-up.</li>
 <li>A one-page written summary within 48 hours of the call.</li>
 </ul>

 <div className="op-cta-block">
 <h2>Email Hayat directly</h2>
 <p>One paragraph is enough. Hayat reads every email personally.</p>
 <a href="mailto:hayat@beyondelevation.com?subject=Diagnostic%20call%20request">hayat@beyondelevation.com →</a>
 </div>
 </PageShell>
);
}
