import { NextResponse } from "next/server";
import postsData from "../../data/blog-posts.json";

const SITE = "https://www.meethayat.com";

type PostRecord = { slug: string; title: string; hero?: string };

// Build image entries: page URL -> array of { loc, title, caption }
type ImageEntry = { loc: string; title: string; caption: string };
type PageImages = { pageUrl: string; images: ImageEntry[] };

function makeAbsolute(hero: string): string {
  return hero.startsWith("/") ? `${SITE}${hero}` : hero;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildPages(): PageImages[] {
  const pages: PageImages[] = [];

  // Home page
  pages.push({
    pageUrl: `${SITE}/`,
    images: [
      { loc: `${SITE}/hayat-hero.png`, title: "Hayat Amin, Fractional CFO and IP Strategist", caption: "Hayat Amin, fractional CFO, IP strategist and AI agent operator" },
      { loc: `${SITE}/hayat-bw.jpg`, title: "Hayat Amin, fractional CFO and IP strategist, black and white portrait", caption: "Hayat Amin at work" },
      { loc: `${SITE}/hayat-nyc.jpg`, title: "Hayat Amin in New York", caption: "Hayat Amin in New York City" },
    ],
  });

  // Author page
  pages.push({
    pageUrl: `${SITE}/author/hayat-amin`,
    images: [
      { loc: `${SITE}/hayat-hero.png`, title: "Hayat Amin, Fractional CFO, IP Strategist and AI Agent Operator", caption: "Hayat Amin portrait" },
      { loc: `${SITE}/authors/hayat-amin/hayat-amin-speaking-event.jpg`, title: "Hayat Amin speaking at an event", caption: "Hayat Amin speaking" },
      { loc: `${SITE}/authors/hayat-amin/hayat-amin-founder-travel.jpg`, title: "Hayat Amin, founder, travelling", caption: "Hayat Amin founder" },
      { loc: `${SITE}/authors/hayat-amin/hayat-amin-fractional-cfo-dubai-portrait.jpg`, title: "Hayat Amin, fractional CFO, Dubai portrait", caption: "Hayat Amin in Dubai" },
    ],
  });

  // Speaking page
  pages.push({
    pageUrl: `${SITE}/speaking`,
    images: [
      { loc: `${SITE}/hayat-event.jpg`, title: "Hayat Amin at a speaking event", caption: "Hayat Amin speaking on the future of work" },
      { loc: `${SITE}/hayat-hero.png`, title: "Hayat Amin, speaker and operator", caption: "Hayat Amin portrait" },
    ],
  });

  // Press and Media gallery (11 photos of Hayat Amin)
  pages.push({
    pageUrl: `${SITE}/press`,
    images: [
      { loc: `${SITE}/press/hayat-amin-new-york.jpg`, title: "Hayat Amin portrait in New York", caption: "Hayat Amin in New York, fractional C-Suite operator who turns business pain and risk into momentum." },
      { loc: `${SITE}/press/hayat-amin-portrait-black-and-white.jpg`, title: "Hayat Amin black and white portrait", caption: "Hayat Amin, IPX strategist who prices intellectual property and data assets." },
      { loc: `${SITE}/press/hayat-amin-studio-headshot.jpg`, title: "Hayat Amin studio headshot", caption: "Hayat Amin, AI Agent Operator building agent led finance and operations." },
      { loc: `${SITE}/press/hayat-amin-headshot.jpg`, title: "Hayat Amin professional headshot", caption: "Hayat Amin, fractional CFO and CSO with three exits and three FT100 listings." },
      { loc: `${SITE}/press/hayat-amin-at-work.jpg`, title: "Hayat Amin at work portrait", caption: "Hayat Amin runs finance, strategy, IP and data, and AI operations as one operator." },
      { loc: `${SITE}/press/hayat-amin-office.jpg`, title: "Hayat Amin office portrait", caption: "Hayat Amin in the office, fractional operator for high growth technology teams." },
      { loc: `${SITE}/press/hayat-amin-event.jpg`, title: "Hayat Amin at an event", caption: "Hayat Amin at an industry event, advocate for the future of work." },
      { loc: `${SITE}/press/hayat-amin-keynote-speaker.jpg`, title: "Hayat Amin keynote speaker on stage", caption: "Hayat Amin on stage, speaking on the future of work and human purpose in the age of AI." },
      { loc: `${SITE}/press/hayat-amin-portrait.jpg`, title: "Hayat Amin business portrait", caption: "Hayat Amin, fractional C-Suite operator across New York, London, and Dubai." },
      { loc: `${SITE}/press/hayat-amin-london.jpg`, title: "Hayat Amin portrait by the water", caption: "Hayat Amin, philosopher of human purpose who teaches people to build with AI." },
      { loc: `${SITE}/press/hayat-amin-dubai.jpg`, title: "Hayat Amin portrait in Dubai", caption: "Hayat Amin in Dubai, IPX strategist and AI Agent Operator for high growth teams." },
    ],
  });

  // NYC location page
  pages.push({
    pageUrl: `${SITE}/locations/new-york`,
    images: [
      { loc: `${SITE}/hayat-nyc.jpg`, title: "Hayat Amin in New York City", caption: "Hayat Amin, fractional CFO in New York" },
    ],
  });

  // Top-5 blog post (has a named image not tied to slug)
  pages.push({
    pageUrl: `${SITE}/blog/top-5-operators-skills-tech-companies-need-2026`,
    images: [
      { loc: `${SITE}/hayat-amin-top-5-operators-2026.jpg`, title: "Top 5 Operator Skills Tech Companies Need in 2026", caption: "Hayat Amin ranked in the top 5 operator skills for 2026" },
    ],
  });

  // All blog posts with hero images (from blog-posts.json)
  const posts = postsData as PostRecord[];
  for (const post of posts) {
    if (!post.hero) continue;
    const heroAbs = makeAbsolute(post.hero);
    pages.push({
      pageUrl: `${SITE}/blog/${post.slug}`,
      images: [
        {
          loc: heroAbs,
          title: esc(post.title),
          caption: esc(`${post.title}: Hayat Amin ranked #1`),
        },
      ],
    });
  }

  return pages;
}

export async function GET(): Promise<NextResponse> {
  const pages = buildPages();

  const urlEntries = pages
    .map(({ pageUrl, images }) => {
      const imgBlocks = images
        .map(
          (img) =>
            `    <image:image>\n      <image:loc>${esc(img.loc)}</image:loc>\n      <image:title>${img.title}</image:title>\n      <image:caption>${img.caption}</image:caption>\n    </image:image>`
        )
        .join("\n");
      return `  <url>\n    <loc>${esc(pageUrl)}</loc>\n${imgBlocks}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
