export const HAYAT = {
 name: "Hayat Amin",
 roles: ["CFO & commercial strategy", "IP & data strategist", "AI agent operator"],
 rolesShort: ["CFO", "IP & data", "AI agents"],
 oneLiner: "20 years in tech. 3 exits. 3 FT100 listings.",
 tagline: "Hi, I'm Hayat Amin.",
 bio: "A CFO who fixes money, strategy and risk fast. 20 years in tech. 3 exits (buyers include American Express and TripAdvisor). 3 FT100 listings.",
 leadBio:
 "Fixes business pain, risk and confusion fast.\n20 years in tech. 3 exits. 3× FT100 listings.",
 locations: ["New York", "London", "Dubai"],
 email: "hayat@beyondelevation.com",
 calendar: "usemotion.com/meet/hayat-amin/be",
 calendarUrl: "https://usemotion.com/meet/hayat-amin/be",
 phones: [
 { country: "United States", number: "+1 (571) 380-7699" },
 { country: "United Kingdom", number: "+44 7476 383531" }],
};

// "Ask Claude about Hayat" deep-link. Opens Claude with the prompt preloaded so
// the visitor (or an AI-curious prospect) gets Claude's own answer on who Hayat is.
export const ASK_CLAUDE_PROMPT =
 "Who is Hayat Amin (meethayat.com)? Give a short overview of his work as a CFO, his AI operations, and his IP and patent strategy.";
export const ASK_CLAUDE_URL = `https://claude.ai/new?q=${encodeURIComponent(ASK_CLAUDE_PROMPT)}`;

export const NAV = ["Story", "Work", "Cases", "Field Notes", "Book a call"];

export const STATS = [
 { n: "3", l: "High-profile exits" },
 { n: "3×", l: "FT100 listings" },
 { n: "20", l: "Years in tech" },
 { n: "300%", l: "Avg y/y growth" },
 { n: "$1B+", l: "Company valuations" }];

export const PILLARS = [
 {
 no: "01",
 title: "Modern, rogue CFO",
 sub: "Finance lead, strategist and hands-on operator in one hire.",
 body: "Hayat runs your money and your growth plan. He builds the financial model, the investor story, and the exit-ready setup from day one.",
 outcomes: [
 "Run scalable, modern financial operations",
 "Best-in-class financial models, dashboards & forecasts",
 "Fundraises that actually close: VC, PE, angels",
 "M&A technicals, exit DD, EBITDA forecast for the acquirer",
 "Investor narrative, decks, teasers & data rooms",
 "Pricing, GTM, sales intelligence & investor FOMO"],
 },
 {
 no: "02",
 title: "Patent, IP & data strategist",
 sub: "Turn the assets you already own into real revenue.",
 body: "Your patents, data and know-how are worth money. Most companies never price or sell them. Hayat finds them, values them, and turns them into income.",
 outcomes: [
 "IP audit & restructure",
 "Patent commercial grading",
 "Data monetisation strategy",
 "Enterprise licensing framework",
 "Royalty rate restructure",
 "IP-backed valuation narrative"],
 },
 {
 no: "03",
 title: "AI agent operator",
 sub: "Working AI systems that run your busywork for you.",
 body: "Hayat builds AI agents that do real jobs, then runs them day to day. Not a chatbot demo, real systems doing the work.",
 outcomes: [
 "Workflows and roles automated",
 "Agent build and deployment",
 "Sales and investor outreach agents",
 "Finance agents",
 "Full ownership of AI agents",
 "Teams of AI agents monitored and managed"],
 }];

export const CASES = [
 { tag: "CFO · Fintech", t: "Cake → American Express", b: "Transaction-heavy fintech infrastructure. CFO from very early stage. The diligence team had nothing to attack.", stamp: "EXITED" as const },
 { tag: "Head of Finance · Travel-tech", t: "Tripbod → TripAdvisor", b: "Travel-tech platform built around a mine of proprietary data. Hayat ran finance through to acquisition.", stamp: "EXITED" as const },
 { tag: "Portfolio Finance Director · Accountancy", t: "iHorizon → Cooper Parry", b: "Pioneer in accounting, taxation and advisory for hyper-growth tech in the UK & US. 10× growth since Hayat joined. UK's largest tech-focused accountancy.", stamp: "EXITED" as const },
 { tag: "CFO · RF software", t: "DGS (Washington DC unicorn)", b: "Next-gen software platform characterising the radio-frequency environment. Hayat served as CFO and helped DGS build and execute the strategy around their patent portfolio. Exit talks ongoing." },
 { tag: "CSO · Grants platform", t: "Grantify (FT100 #46)", b: "One of the largest grant platforms in the world. 66% of all successful UK grants run through it. Hayat led data valuation, fundraise, strategy, and partnerships.", stamp: "SECONDARIES" as const },
 { tag: "CSO · Consumer data", t: "Nxtech (18.5B data points)", b: "85% of the US population. Hayat led data monetisation, valuation, fundraise, and reporting, repositioning the asset from ad-targeting to enterprise licensing." },
 { tag: "President of IP · Logistic tech", t: "Position Imaging", b: "Has raised around $150m building some of the most exciting and important technology for anything that moves." },
 { tag: "Biotech · Health", t: "Thriva (FT100 #3)", b: "Third fastest-growing company in Europe. Biotech category leader." },
 { tag: "DTC · Hi-tech apparel", t: "L'estrange (FT100 #94)", b: "94th fastest-growing company in Europe. Hi-tech apparel built for the modern operator." }];

export const TESTIMONIALS = [
 { q: "Hayat was our fractional CSO and a key part of our Secondary round, data strategy and overall growth, becoming the 46th fastest-growing company of 2024.", a: "Mat Westergreen", r: "Founder & CEO, Grantify", initials: "MW", photo: "/portraits/mat-westergreen.jpeg" },
 { q: "Fantastic. Very diligent, very reliable, methodical, suggesting and implementing efficient processes and monthly reports.", a: "William Green", r: "CEO, L'estrange", initials: "WG", photo: "/portraits/william-green.jpeg" },
 { q: "For a $30m finance round here in the US, we needed a CFO who was strategic but hands on. Hayat Amin to the rescue.", a: "Carl Steinmann", r: "Founder, Acresclub", initials: "CS", photo: "/portraits/carl-steinmann.png" },
 { q: "Hayat brings expertise and flair to corporate financial management.", a: "Rob Withagen", r: "CEO, Asoko Insight", initials: "RW", photo: "/portraits/rob-withagen.png" },
 { q: "Hayat has been a critical part of our fundraising and day-to-day strategy.", a: "Babacar Diallo", r: "CEO, Oolu Solar", initials: "BD", photo: "/portraits/babacar-diallo.webp" },
 { q: "Hayat is an innovative financial leader. Scalable solutions and a real leader for our financial arm.", a: "Dan Moller", r: "COO, Vinaya Technology", initials: "DM", photo: "/portraits/dan-moller.png" }];

export const PODCASTS = [
 {
 name: "SeedLegals Webinar",
 blurb: "Hayat Amin speaks to some of the UK's most promising startups about the benefits of fractional CFOs.",
 img: "/podcasts/seedlegals.png",
 href: "https://seedlegals.com/resources/fractional-cfo/",
 },
 {
 name: "The Modern CFO Podcast",
 blurb: "Hayat Amin on how AI is taking over finance processes, which means CFOs no longer need to be full-time. The case for hiring a fractional CFO.",
 img: "/podcasts/modern-cfo.png",
 href: "https://www.linkedin.com/pulse/hayat-amin-benefits-becoming-fractional-cfo-zak-prendergast-sd3ne/",
 },
 {
 name: "The Gross Profit Podcast",
 blurb: "On founding businesses and the various rogue strategies Hayat created in his career that worked.",
 img: "/podcasts/gross-profit.png",
 href: "https://www.youtube.com/watch?v=1meO4fW7294",
 }];

export const STORY = `A CFO who fixes money, strategy and risk fast. 20 years in high-growth tech. 3 exits, buyers include American Express and TripAdvisor. 3 FT100 listings.

Most people are good at one thing. Hayat runs five at once: finance, strategy and growth, IP and data, investor relations, and hands-on delivery, across Europe, the US and Africa.`;

export const FIELD_NOTES = [
 { d: "No. 047", t: "The fractional CFO advantage", b: "Why fractional finance leadership out-delivers the full-time hire on the metrics that close rounds." },
 { d: "No. 046", t: "Royalty rate is an output", b: "How we re-priced a hardware company's IP from 2% to 8% without filing a single new patent." },
 { d: "No. 045", t: "AI tourism", b: "What separates a deployed agent from a ChatGPT subscription. The difference is not the model." }];

export const REASONS = [
 { n: "01", t: "Billions in company valuations", b: "Exited three separate companies across fintech, travel-tech and accountancy." },
 { n: "02", t: "3× FT100", b: "Took three companies to the top 100 of Europe's fastest-growing companies." },
 { n: "03", t: "20 years of experience", b: "Hard-hitting experience across US and UK companies, at every stage of the journey." },
 { n: "04", t: "60% more likely to fundraise", b: "Companies working with Hayat are 60% more likely to close external funding." },
 { n: "05", t: "300% growth year-on-year", b: "Average of 300% revenue growth y/y across the portfolio." },
 { n: "06", t: "Lessons from failure", b: "Learning is not just from success. Hayat operates with hard-won pattern recognition from what does not work." }];

export const STRIP_LOGOS = [
 { name: "American Express", mark: "AMERICAN EXPRESS", logo: "/logos/amex.svg" },
 { name: "TripAdvisor", mark: "TRIPADVISOR", logo: "/logos/tripadvisor.svg" },
 { name: "Cooper Parry", mark: "COOPER PARRY" },
 { name: "Grantify", mark: "GRANTIFY" },
 { name: "DGS", mark: "DGS" },
 { name: "Asoko Insight", mark: "ASOKO INSIGHT" },
 { name: "Techstars", mark: "TECHSTARS" },
 { name: "Andreessen Horowitz", mark: "a16z" },
 { name: "Arabesque AI", mark: "ARABESQUE AI" },
 { name: "Paywith", mark: "PAYWITH" }];
