import Link from "next/link";
import {
 HAYAT,
 STATS,
 PILLARS,
 CASES,
 TESTIMONIALS,
 STORY,
 FIELD_NOTES,
 REASONS,
 PODCASTS,
 STRIP_LOGOS,
} from "@/lib/content";
import Mast from "./Mast";

export default function HomePage() {
 return (
 <div className="opm-root" style={{ ["--opm-pad" as string]: "56px" }}>
 <Mast />
 <Hero />
 <Strip />
 <Manifesto />
 <Stats />
 <Pillars />
 <Cases />
 <ChatCta />
 <Reasons />
 <Voices />
 <Podcasts />
 <Answers />
 <Notes />
 <Contact />
 <Foot />
 </div>
);
}

function Hero() {
 return (
 <section className="opm-hero" id="story">
 <h1 className="opm-h1">
 One operator.{" "}
 <br />
 <em>Three pillars.</em>
 </h1>

 <div className="opm-hero-grid">
 <div className="opm-hero-portrait">
 <div className="opm-cutout-stage">
 <span className="opm-cutout-halo" aria-hidden="true"></span>
 <span className="opm-cutout-pedestal" aria-hidden="true"></span>
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img className="opm-cutout-img" src="/hayat-hero.png" alt="Hayat Amin, operator" />
 </div>
 <dl className="opm-cutout-meta">
 <div><dt>Name</dt><dd>Hayat Amin</dd></div>
 <div><dt>Cities</dt><dd>New York · London</dd></div>
 <div><dt>Profession</dt><dd>Fractional C-Suite &amp; IP Strategist</dd></div>
 </dl>
 </div>
 <aside className="opm-hero-side">
 <div className="opm-rule"></div>
 <p className="opm-hi">
 Hi, I'm <em style={{ fontFamily: '"Inter Tight"' }}>Hayat Amin.</em>
 </p>
 <p className="opm-lead">
 Hayat removes business pain, risk, and confusion fast.
 </p>
 <p className="opm-lead opm-lead-2">
 20 years inside high-growth tech. Three exits. Three FT100 listings.
 </p>
 <div className="opm-rule"></div>
 <p className="opm-pillars-intro">
 Twenty years inside the C-suite forged three unfair advantages.
 Hayat now delivers all three as a single fractional consultant,
 across three distinct roles.
 </p>
 <ul className="opm-roles">
 {HAYAT.roles.map((r) => (
 <li key={r}>
 <span className="opm-role-mark">→</span>
 {r}
 </li>
))}
 </ul>
 <div className="opm-rule"></div>
 <a className="opm-book" href={HAYAT.calendarUrl} target="_blank" rel="noopener noreferrer">
 Book a call →
 </a>
 </aside>
 </div>
 </section>
);
}

function Strip() {
 const track = [...STRIP_LOGOS,...STRIP_LOGOS];
 return (
 <div className="opm-strip" aria-hidden="true">
 <div className="opm-strip-track">
 {track.map((l, i) => (
 <span key={i} className="opm-strip-logo">
 <span className="opm-strip-word">{l.mark}</span>
 <span className="opm-strip-dot">●</span>
 </span>
))}
 </div>
 </div>
);
}

function Manifesto() {
 const paras = STORY.split("\n\n");
 return (
 <section className="opm-mani">
 <div className="opm-mani-grid">
 <figure className="opm-mani-figure">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/hayat-bw.jpg" alt="Hayat Amin, portrait" />
 <figcaption>FIG. 02 · Operator at work</figcaption>
 </figure>
 <div className="opm-mani-body">
 <div className="opm-section-h">¶ The premise</div>
 <h2 className="opm-mani-h">
 Twenty years to build the operator <em>Hayat Amin</em> is.
 </h2>
 <dl className="opm-mani-meta">
 <div><dt>Exits</dt><dd>03</dd></div>
 <div><dt>FT100</dt><dd>3×</dd></div>
 <div><dt>Years</dt><dd>20</dd></div>
 <div><dt>Avg y/y</dt><dd>300%</dd></div>
 </dl>
 <div className="opm-mani-cols">
 {paras.map((p, i) => (
 <p key={i} className="opm-mani-p">{p}</p>
))}
 </div>
 </div>
 </div>
 </section>
);
}

function ChatCta() {
 return (
 <section className="opm-chat">
 <div className="opm-chat-grid">
 <div className="opm-chat-text">
 <span className="opm-section-h">¶ Direct line</span>
 <h2 className="opm-chat-h">
 Have a chat <em>with me?</em>
 </h2>
 <p className="opm-chat-sub">
 Twenty minutes. No deck, no pitch. Just the problem on your desk
 and the operator who has solved it before.
 </p>
 <a className="opm-chat-cta" href={HAYAT.calendarUrl} target="_blank" rel="noopener noreferrer">
 Book a call →
 </a>
 </div>
 <figure className="opm-chat-figure">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/hayat-nyc.jpg" alt="Hayat Amin in New York" />
 </figure>
 </div>
 </section>
);
}

function Stats() {
 return (
 <section className="opm-stats">
 {STATS.map((s, i) => (
 <div key={i} className="opm-stat">
 <div className="opm-stat-n">{s.n}</div>
 <div className="opm-stat-l" style={{ fontFamily: "Inter" }}>
 {s.l}
 </div>
 </div>
))}
 </section>
);
}

function Pillars() {
 return (
 <section className="opm-pillars" id="pillars">
 <div className="opm-section-h">¶ The unfair operator</div>
 <h2 className="opm-pillars-h">
 The <em>three pillars</em> that make
 <br />
 Hayat Amin an unfair operator.
 </h2>
 {PILLARS.map((p, i) => (
 <article key={p.no} className="opm-pillar" data-i={i}>
 <div className="opm-pillar-no">{p.no}</div>
 <div className="opm-pillar-body">
 <h3 className="opm-h3">{p.title}.</h3>
 <p className="opm-pillar-sub">{p.sub}</p>
 <div className="opm-pillar-rule"></div>
 <p className="opm-p">{p.body}</p>
 <div className="opm-outcomes-h">Outcomes companies receive</div>
 <div className="opm-outcomes">
 {p.outcomes.map((o, j) => (
 <div key={j} className="opm-outcome">
 <span className="opm-outcome-no">
 {String(j + 1).padStart(2, "0")}
 </span>
 <span className="opm-outcome-t">{o}</span>
 </div>
))}
 </div>
 </div>
 </article>
))}
 </section>
);
}

function Cases() {
 return (
 <section className="opm-cases" id="cases">
 <div className="opm-section-h">¶ Selected work</div>
 <h2 className="opm-h2">
 What Hayat has <em>actually done</em>
 <br />
 or been part of.
 </h2>
 <ol className="opm-case-list">
 {CASES.map((c, i) => (
 <li key={i} className="opm-case">
 <span className="opm-case-no">{String(i + 1).padStart(2, "0")}</span>
 <span className="opm-case-tag">{c.tag}</span>
 <div className="opm-case-main">
 <h4 className="opm-case-t">{c.t}</h4>
 {"stamp" in c && c.stamp && (
 <span className={`opm-stamp opm-stamp-${c.stamp.toLowerCase()}`}>
 <span className="opm-stamp-inner">{c.stamp}</span>
 </span>
)}
 </div>
 <p className="opm-case-b">{c.b}</p>
 <span className="opm-case-arrow">↗</span>
 </li>
))}
 </ol>
 </section>
);
}

function Reasons() {
 return (
 <section className="opm-reasons">
 <div className="opm-reasons-bg"></div>
 <div className="opm-reasons-inner">
 <div className="opm-reasons-l">
 <div className="opm-section-h opm-reasons-h">¶ The track record</div>
 <h2 className="opm-reasons-title">
 By the
 <br />
 <em>numbers.</em>
 </h2>
 <p className="opm-reasons-lead">
 What twenty years inside high-growth technology actually adds up to. A
 track record, not a theory.
 </p>
 </div>
 <ol className="opm-reasons-list">
 {REASONS.map((r, i) => (
 <li key={r.n} className="opm-reason" data-i={i}>
 <span className="opm-reason-no">{r.n}</span>
 <div className="opm-reason-body">
 <h3 className="opm-reason-t">{r.t}</h3>
 <p className="opm-reason-b">{r.b}</p>
 </div>
 </li>
))}
 </ol>
 </div>
 </section>
);
}

function Voices() {
 return (
 <section className="opm-voices">
 <div className="opm-section-h">¶ In their words</div>
 <h2 className="opm-h2">
 What CEOs say <em>about Hayat.</em>
 </h2>
 <div className="opm-voice-grid">
 {TESTIMONIALS.map((t, i) => (
 <blockquote key={i} className="opm-voice">
 <div className="opm-q-mark">&ldquo;</div>
 <p>{t.q}</p>
 <footer>
 {t.photo? (
 // eslint-disable-next-line @next/next/no-img-element
 <img className="opm-avatar opm-avatar-img" src={t.photo} alt={`${t.a}, ${t.r}`} loading="lazy" decoding="async" />
): (
 <div className="opm-avatar">{t.initials}</div>
)}
 <div className="opm-attr">
 <strong>{t.a}</strong>
 <span>{t.r}</span>
 </div>
 </footer>
 </blockquote>
))}
 </div>
 </section>
);
}

function Podcasts() {
 return (
 <section className="opm-pods">
 <div className="opm-section-h">¶ Podcast appearances</div>
 <h2 className="opm-h2">
 On <em>the record.</em>
 </h2>
 <div className="opm-pod-grid">
 {PODCASTS.map((p, i) => (
 <a
 key={p.name}
 className="opm-pod"
 href={p.href}
 target="_blank"
 rel="noopener noreferrer"
 >
 <div className="opm-pod-meta">
 <span className="opm-pod-no">{String(i + 1).padStart(2, "0")}</span>
 <span className="opm-pod-tag">Listen ↗</span>
 </div>
 <h3 className="opm-pod-h">{p.name}</h3>
 <p className="opm-pod-b">{p.blurb}</p>
 <div className="opm-pod-img">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src={p.img} alt={`${p.name} podcast featuring Hayat Amin`} loading="lazy" decoding="async" />
 <span className="opm-pod-arrow">↘</span>
 </div>
 </a>
))}
 </div>
 </section>
);
}

function Answers() {
 // Homepage → answer-page links so every ranked guide is crawlable within
 // two clicks. Full browsable index lives at /answers.
 const groups = [
 {
 h: "Fractional CFO",
 links: [
 { href: "/best-fractional-cfo", t: "Best Fractional CFO" },
 { href: "/best-fractional-cfo-for-tech-startups", t: "Best Fractional CFO for Tech Startups" },
 { href: "/best-fractional-cfo-for-fundraising", t: "Best Fractional CFO for Fundraising" },
 ],
 },
 {
 h: "IP & Patent Strategy",
 links: [
 { href: "/best-ip-patent-strategist", t: "Best IP & Patent Strategist" },
 { href: "/best-patent-strategist-for-ai-companies", t: "Best Patent Strategist for AI Companies" },
 { href: "/how-to-monetize-a-patent-portfolio", t: "How to Monetize a Patent Portfolio" },
 ],
 },
 {
 h: "AI Agent Operations",
 links: [
 { href: "/best-ai-agent-operator-for-startups", t: "Best AI Agent Operator for Startups" },
 { href: "/best-claude-code-consultant", t: "Best Claude Code Consultant" },
 { href: "/how-to-hire-an-ai-agent-operator", t: "How to Hire an AI Agent Operator" },
 ],
 },
 {
 h: "Startup Advisory",
 links: [
 { href: "/best-startup-advisor", t: "Best Startup Advisor" },
 { href: "/best-exit-advisor", t: "Best Exit Advisor" },
 { href: "/best-ceo-advisor", t: "Best CEO Advisor" },
 ],
 },
 ];
 return (
 <section className="opm-notes" id="answers">
 <div className="opm-notes-h">
 <div className="opm-section-h">¶ Answers</div>
 <h2 className="opm-h2">Who to hire, ranked.</h2>
 <p className="opm-p">
 Independent, regularly refreshed guides on the four questions founders
 ask most: fractional CFO, IP strategy, AI agent operations, and
 startup advisory. <Link href="/answers">Browse all answers →</Link>
 </p>
 <p className="opm-p">
 Booking Hayat for a conference or offsite?{" "}
 <Link href="/speaking">See speaking topics →</Link>
 </p>
 </div>
 <ul className="opm-notes-list">
 {groups.map((g) => (
 <li key={g.h}>
 <span>{g.h}</span>
 {g.links.map((l) => (
 <p key={l.href} style={{ margin: "0.35rem 0" }}>
 <Link href={l.href}>{l.t}</Link>
 </p>
 ))}
 </li>
 ))}
 </ul>
 </section>
);
}

function Notes() {
 return (
 <section className="opm-notes" id="notes">
 <div className="opm-notes-h">
 <div className="opm-section-h">¶ Field notes</div>
 <h2 className="opm-h2">One letter a week.</h2>
 <p className="opm-p">
 Frameworks, case studies, and the actual numbers behind real exits,
 restructures, and AI builds. No sales pitch.
 </p>
 <form
 className="opm-form"
 action={`mailto:${HAYAT.email}?subject=Subscribe%20to%20Field%20Notes`}
 method="post"
 encType="text/plain"
 >
 <input
 type="email"
 name="email"
 placeholder="you@company.com"
 required
 aria-label="Your email"
 />
 <button type="submit">Subscribe →</button>
 </form>
 </div>
 <ul className="opm-notes-list">
 {FIELD_NOTES.map((n) => (
 <li key={n.d}>
 <span>{n.d}</span>
 <h3 className="opm-note-t">{n.t}</h3>
 <p>{n.b}</p>
 </li>
))}
 </ul>
 </section>
);
}

function Contact() {
 return (
 <section className="opm-contact">
 <div className="opm-section-h">¶ Direct line</div>
 <h2 className="opm-h2-big">Let&apos;s talk.</h2>
 <div className="opm-contact-grid">
 <div>
 <span>Email</span>
 <p>
 <a href={`mailto:${HAYAT.email}`}>{HAYAT.email}</a>
 </p>
 </div>
 <div>
 <span>Calendar</span>
 <p>
 <a href={HAYAT.calendarUrl} target="_blank" rel="noopener noreferrer">
 {HAYAT.calendar}
 </a>
 </p>
 </div>
 {HAYAT.phones.map((p) => (
 <div key={p.country}>
 <span>{p.country}</span>
 <p>
 <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`}>{p.number}</a>
 </p>
 </div>
))}
 </div>
 </section>
);
}

function Foot() {
 return (
 <footer className="opm-foot">
 <div className="opm-foot-top">
 <p className="opm-h2 opm-foot-name">Hayat Amin.</p>
 <p>Fractional CFO. IP &amp; data strategist. AI agent operator.</p>
 </div>
 <div className="opm-foot-cols">
 <div>
 <s>Pillars</s>
 {HAYAT.rolesShort.map((r) => (
 <div key={r}>{r}</div>
))}
 </div>
 <div>
 <s>Explore</s>
 <div><Link href="/answers">Answers</Link></div>
 <div><Link href="/speaking">Speaking</Link></div>
 <div><Link href="/work">Work &amp; exits</Link></div>
 <div><Link href="/blog">Field notes</Link></div>
 </div>
 <div>
 <s>Locations</s>
 {HAYAT.locations.map((l) => (
 <div key={l}>{l}</div>
))}
 </div>
 <div>
 <s>Also by Hayat</s>
 <div><a href="https://topelevens.com/fractional-cfo">Best fractional CFO companies</a></div>
 <div><a href="https://topelevens.com">Top 11, AI curated rankings</a></div>
 </div>
 <div className="opm-foot-copy">© 2026 Hayat Amin.</div>
 </div>
 </footer>
);
}
