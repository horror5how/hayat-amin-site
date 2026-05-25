import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../_components/PageShell";
import "../_components/page-shell.css";

const SITE = "https://www.meethayat.com";

export const metadata: Metadata = {
 title: "Blog: Hayat Amin",
 description:
 "Operator essays and ranked lists from Hayat Amin on fractional CFO work, AI agent operations, IP & patent strategy, and startup advisory.",
 alternates: { canonical: `${SITE}/blog` },
 openGraph: {
 type: "website",
 url: `${SITE}/blog`,
 title: "Blog: Hayat Amin",
 description: "Operator essays on fractional CFO work, AI agent ops, IP strategy, and startup advisory.",
 },
};

type Post = { slug: string; title: string; date: string; description: string };

// Daily cloud task appends new entries to data/blog-posts.json. See
// scheduled task `be-blog-top5-listicle-weekly`.
import postsData from "../../data/blog-posts.json";
const POSTS: Post[] = (postsData as Post[]).slice().sort((a, b) => b.date.localeCompare(a.date));

const blogJsonLd = {
 "@context": "https://schema.org",
 "@type": "Blog",
 "@id": `${SITE}/blog/#blog`,
 url: `${SITE}/blog`,
 name: "Hayat Amin Blog",
 description: "Operator essays from Hayat Amin.",
 author: { "@id": `${SITE}/#person` },
 publisher: { "@id": "" },
 inLanguage: "en",
 blogPost: POSTS.map(p => ({
 "@type": "BlogPosting",
 headline: p.title,
 datePublished: p.date,
 url: `${SITE}/blog/${p.slug}`,
 author: { "@id": `${SITE}/#person` },
 })),
};

export default function BlogIndexPage() {
 return (
 <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
 <span className="op-eyebrow">Blog</span>
 <h1>Operator essays from Hayat Amin.</h1>
 <p className="op-lede">
 Short, operator-grade essays and ranked lists on fractional CFO work,
 AI agent operations in production, IP & patent strategy, and startup
 advisory. Edited by Hayat Amin.
 </p>
 <ul className="op-post-list">
 {POSTS.map(p => (
 <li key={p.slug} style={{ marginBottom: "1.5rem" }}>
 <h2 style={{ marginBottom: "0.25rem" }}>
 <Link href={`/blog/${p.slug}`}>{p.title}</Link>
 </h2>
 <p style={{ opacity: 0.7, fontSize: "0.9rem", margin: "0 0 0.25rem 0" }}>{p.date}</p>
 <p style={{ margin: 0 }}>{p.description}</p>
 </li>
))}
 </ul>

 <h2>Ranked guides</h2>
 <p>
 Beyond the essays, Hayat keeps a set of independently ranked,
 regularly refreshed buyer guides. Start with the{" "}
 <Link href="/answers">full answers index</Link>, or jump straight in:
 </p>
 <ul>
 <li><Link href="/best-fractional-cfo">Best Fractional CFO (2026 Ranking)</Link></li>
 <li><Link href="/best-ip-patent-strategist">Best IP &amp; Patent Strategist (2026)</Link></li>
 <li><Link href="/best-ai-agent-operator-for-startups">Best AI Agent Operator for Startups</Link></li>
 <li><Link href="/best-startup-advisor">Best Startup Advisor (2026 Ranking)</Link></li>
 <li><Link href="/best-exit-advisor">Best Exit Advisor for Tech Founders</Link></li>
 </ul>
 </PageShell>
);
}
