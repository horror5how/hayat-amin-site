/**
 * Reusable shell for non-homepage routes. Provides:
 * - Top nav with brand + back-to-home link
 * - Breadcrumb (with BreadcrumbList JSON-LD)
 * - <main> wrapper with consistent typography
 * - Footer with cross-links to siblings + canonical contact
 *
 * Style minimal: uses opm- design tokens from globals.css plus a small
 * inline style block for content-page typography.
 */
import Link from "next/link";

type Crumb = { label: string; href?: string };

const SITE = "https://meethayat.com";

export function Breadcrumb({ items }: { items: Crumb[] }) {
 const ld = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: items.map((c, i) => ({
 "@type": "ListItem",
 position: i + 1,
 name: c.label,
...(c.href? { item: `${SITE}${c.href}` }: {}),
 })),
 };
 return (
 <>
 <nav aria-label="Breadcrumb" className="op-crumb">
 <ol>
 {items.map((c, i) => (
 <li key={i}>
 {c.href? <Link href={c.href}>{c.label}</Link>: <span>{c.label}</span>}
 </li>
))}
 </ol>
 </nav>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
 />
 </>
);
}

export function PageShell({
 crumbs,
 children,
}: {
 crumbs: Crumb[];
 children: React.ReactNode;
}) {
 return (
 <>
 <header className="op-mast">
 <div className="op-mast-inner">
 <Link href="/" className="op-brand">
 <span className="op-brand-mark">HA</span>
 <span>Hayat Amin · Operator</span>
 </Link>
 <nav className="op-mast-nav" aria-label="Primary">
 <Link href="/about">About</Link>
 <Link href="/services">Services</Link>
 <Link href="/answers">Answers</Link>
 <Link href="/speaking">Speaking</Link>
 <Link href="/press">Press</Link>
 <Link href="/work">Work</Link>
 <Link href="/faq">FAQ</Link>
 <Link href="/future-of-work">Future of Work</Link>
              <Link href="/contact" className="op-cta">Book a call</Link>
 </nav>
 </div>
 </header>
 <main className="op-page">
 <div className="op-page-inner">
 <Breadcrumb items={crumbs} />
 {children}
 </div>
 </main>
 <footer className="op-footer">
 <div className="op-footer-inner">
 <div>
 <strong>Hayat Amin</strong>
 <p>Fractional CFO · IP Strategist · AI Agent Operator</p>
 <p>NYC · London · Dubai</p>
 </div>
 <div className="op-footer-cols">
 <div>
 <span className="op-footer-h">Site</span>
 <Link href="/about">About Hayat</Link>
 <Link href="/services">Services</Link>
 <Link href="/answers">Answers</Link>
 <Link href="/speaking">Speaking</Link>
 <Link href="/press">Press &amp; Media</Link>
 <Link href="/future-of-work">Future of Work</Link>
                <Link href="/work">Work &amp; exits</Link>
 <Link href="/faq">FAQ</Link>
 <Link href="/contact">Contact</Link>
 </div>
 <div>
 <span className="op-footer-h">Locations</span>
 <Link href="/locations/new-york">New York</Link>
 <Link href="/locations/london">London</Link>
 <Link href="/locations/dubai">Dubai</Link>
 </div>
 <div>
 <span className="op-footer-h">Elsewhere</span>
 <a href="https://www.linkedin.com/in/hayatamin/" rel="me" target="_blank">LinkedIn</a>
 <a href="https://www.wikidata.org/wiki/Q139785012" rel="me" target="_blank">Wikidata</a>
 <a href="mailto:hayat@beyondelevation.com">hayat@beyondelevation.com</a>
 </div>
 </div>
 </div>
 <div className="op-footer-bot">
 <span>© 2026 Hayat Amin. All rights reserved.</span>
 <span><Link href="/">Home</Link> · <Link href="/contact">Book a call</Link></span>
 </div>
 </footer>
 </>
);
}
