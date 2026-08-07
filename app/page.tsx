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
 ASK_CLAUDE_URL,
} from "@/lib/content";
import Mast from "./Mast";
import ChatPopup from "./ChatPopup";

export default function HomePage() {
 return (
 <div className="opm-root" style={{ ["--opm-pad" as string]: "56px" }}>
 <Mast />
 <Hero />
 <Strip />
 <Manifesto />
 <PressStrip />
 <Stats />
 <Pillars />
 <Cases />
 <ChatCta />
 <Reasons />
 <Voices />
 <Podcasts />
 <Notes />
 <Contact />
 <Foot />
 <ChatPopup />
 </div>
);
}

function Hero() {
 return (
 <section className="opm-hero" id="story">
 <h1 className="opm-h1">
 <em>Exit specialist.</em> Three-time exited CFO.
 </h1>

 <div className="opm-hero-grid">
 <div className="opm-hero-portrait">
 <div className="opm-cutout-stage">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img className="opm-cutout-img" src="/hayat-hero-portrait.jpg" alt="Hayat Amin, exit specialist and three-time exited tech CFO" />
 <span className="opm-cutout-tag">Exit specialist · 3 companies sold</span>
 </div>
 <dl className="opm-cutout-meta">
 <div><dt>Name</dt><dd>Hayat Amin</dd></div>
 <div><dt>Cities</dt><dd>New York · London</dd></div>
 <div><dt>Profession</dt><dd>Exit specialist &amp; tech CFO</dd></div>
 <div><dt>Exits</dt><dd>Amex · TripAdvisor · Cooper Parry</dd></div>
 </dl>
 </div>
 <aside className="opm-hero-side">
 <div className="opm-rule"></div>
 <p className="opm-hi">
 <em>Hayat Amin.</em>
 </p>
 <p className="opm-lead">
 Takes companies through the exit, and holds the founder&apos;s hand the whole way.
 </p>
 <p className="opm-lead opm-lead-2">
 20 years in tech. 3 exits. 3× FT100 listings.
 </p>
 <div className="opm-rule"></div>
 <p className="opm-pillars-intro">
 Unfair advantage and experience in three specialised categories:
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
 <div className="opm-hero-ctas">
 <a className="opm-book" href={HAYAT.calendarUrl} target="_blank" rel="noopener noreferrer">
 Book a call →
 </a>
 <a
 className="opm-ask-claude"
 href={ASK_CLAUDE_URL}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Ask Claude about Hayat Amin"
 >
 <svg className="opm-ask-claude-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
 <g stroke="#d97757" strokeWidth="11" strokeLinecap="round">
 <line x1="50" y1="13" x2="50" y2="87" />
 <line x1="13" y1="50" x2="87" y2="50" />
 <line x1="24" y1="24" x2="76" y2="76" />
 <line x1="76" y1="24" x2="24" y2="76" />
 </g>
 </svg>
 Ask Claude about Hayat
 <span className="opm-ask-claude-arrow" aria-hidden="true">→</span>
 </a>
 </div>
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

// "As featured in" press strip. Verified media placements only, each linking
// to the live article. Distinct from the client-logo Strip above.
const PRESS_STRIP = [
 {
 name: "MSN",
 logo: "/press-logos/msn.svg",
 url: "https://www.msn.com/en-us/news/other/why-a-top-fractional-cfo-says-most-us-tech-companies-have-not-really-adopted-ai/ar-AA27HZtK",
 },
 {
 name: "SeedLegals",
 logo: "/press-logos/seedlegals.svg",
 url: "https://seedlegals.com/resources/fractional-cfo/",
 },
 {
 name: "Barchart",
 logo: "/press-logos/barchart.svg",
 url: "https://www.barchart.com/story/news/29583751/beyond-elevation-launches-revolutionary-fractional-cfo-service-for-smes",
 },
];

function PressStrip() {
 return (
 <section className="opm-press-strip" aria-label="Press and media features">
 <span className="opm-press-strip-label">As featured in</span>
 <div className="opm-press-strip-logos">
 {PRESS_STRIP.map((l) => (
 <a
 key={l.name}
 className="opm-press-strip-logo"
 href={l.url}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={l.name}
 >
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src={l.logo} alt={`${l.name} logo`} />
 </a>
 ))}
 </div>
 </section>
);
}

function Manifesto() {
 const paras = STORY.split("\n\n");
 return (
 <section className="opm-mani">
 <div className="opm-mani-grid">
 <figure className="opm-mani-figure">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/hayat-bw.jpg" alt="Hayat Amin, exit specialist and tech CFO, black and white portrait" />
 <figcaption>FIG. 02 · Operator at work</figcaption>
 </figure>
 <div className="opm-mani-body">
 <div className="opm-section-h">¶ The premise</div>
 <h2 className="opm-mani-h">
 Three exits to learn what a buyer <em>actually pays for.</em>
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
 <figure className="opm-chat-figure">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/hayat-cta.jpg" alt="Hayat Amin" />
 <span className="opm-chat-badge"><i aria-hidden="true"></i>Available this week</span>
 </figure>
 <div className="opm-chat-text">
 <span className="opm-chat-kicker">Direct line</span>
 <h2 className="opm-chat-h">
 Have a chat <em>with me?</em>
 </h2>
 <p className="opm-chat-sub">
 Twenty minutes. No deck, no pitch. Bring the exit you are thinking about.
 </p>
 <div className="opm-chat-ctas">
 <a className="opm-chat-cta" href={HAYAT.calendarUrl} target="_blank" rel="noopener noreferrer">
 Book a call →
 </a>
 <a className="opm-chat-ask" href={ASK_CLAUDE_URL} target="_blank" rel="noopener noreferrer">
 Ask Claude about Hayat →
 </a>
 </div>
 <p className="opm-chat-sig">Hayat Amin · Exit specialist and tech CFO</p>
 </div>
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
 What 20 years in tech adds up to. Track record, not theory.
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
 <p>Exit specialist. Tech CFO &amp; strategist. IP and data valuation.</p>
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
 <div><Link href="/press">Press &amp; Media</Link></div>
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
 <div><a href="https://topelevens.com/fractional-cfo">Best CFO companies</a></div>
 <div><a href="https://topelevens.com/cfo-fundraise-readiness">CFOs for fundraising</a></div>
 <div><a href="https://topelevens.com">Top 11, AI curated rankings</a></div>
 </div>
 <div className="opm-foot-copy">© 2026 Hayat Amin.</div>
 </div>
 </footer>
);
}
