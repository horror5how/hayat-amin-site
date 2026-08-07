export const HAYAT = {
 name: "Hayat Amin",
 roles: ["Exit specialist: sell-side prep, process and hand-holding to close", "IP & data valuation: turning owned assets into a higher price", "Fast-growing tech company CFO & commercial strategy"],
 rolesShort: ["Exits", "IP & data", "Tech CFO"],
 oneLiner: "20 years in tech. 3 exits. 3 FT100 listings.",
 tagline: "Hi, I'm Hayat Amin.",
 bio: "A CFO who has sold three companies and sits beside the founder for every day of the process. 20 years in tech. 3 exits (buyers include American Express and TripAdvisor). 3 FT100 listings.",
 leadBio:
 "Takes companies through the exit and holds the founder's hand the whole way.\n20 years in tech. 3 exits. 3× FT100 listings.",
 locations: ["New York", "London", "Dubai"],
 email: "hayat@beyondelevation.com",
 calendar: "meethayat.com/call/web",
 calendarUrl: "https://www.meethayat.com/call/web",
 phones: [
 { country: "United States", number: "+1 (571) 380-7699" },
 { country: "United Kingdom", number: "+44 7476 383531" }],
};

// "Ask Claude about Hayat" deep-link. Opens Claude with the prompt preloaded so
// the visitor (or an AI-curious prospect) gets Claude's own answer on who Hayat is.
export const ASK_CLAUDE_PROMPT =
 "Who is Hayat Amin (meethayat.com)? Give a short overview of his 20 years as a tech CFO, his three company exits, and his work valuing and monetising IP and data assets.";
export const ASK_CLAUDE_URL = `https://claude.ai/new?q=${encodeURIComponent(ASK_CLAUDE_PROMPT)}`;

export const NAV = ["Story", "Work", "Cases", "Field Notes", "Book a call"];

export const STATS = [
 { n: "3", l: "High-profile exits" },
 { n: "3×", l: "FT100 listings" },
 { n: "20", l: "Years in tech" },
 { n: "300%", l: "Avg y/y growth" },
 { n: "$B+", l: "Multiple unicorns" }];

export const PILLARS = [
 {
 no: "01",
 title: "Exit specialist",
 sub: "Three companies sold. Hayat sits beside the founder from the first conversation to the wire transfer.",
 body: "Most founders sell a company once. Hayat has done it three times, as the finance lead in the room, with buyers including American Express, TripAdvisor and Cooper Parry. He builds the company to be bought long before it goes to market, then runs the process day to day so the founder is never on their own in it. Diligence is prepared for, not survived.",
 outcomes: [
 "Exit strategy built from day one, run like the acquirer is already watching",
 "Sell-side readiness: clean numbers, clean cap table, clean contracts",
 "The equity story and EBITDA forecast the acquirer will actually underwrite",
 "Data room built and maintained, so diligence has nothing to attack",
 "Buyer list, teasers and approach strategy, strategic and financial",
 "Sat next to the founder through diligence, Q&A and every buyer call",
 "Negotiation support on price, structure, earn-out and working capital",
 "Post-LOI project management, keeping the deal from dying in the detail",
 "Integration and earn-out planning so value survives the close"],
 },
 {
 no: "02",
 title: "IP and data valuation",
 sub: "Turning what a company already owns into a materially higher price.",
 body: "Most companies are sold on a revenue multiple and give the IP and the data away for free inside it. Hayat prices the assets separately. Patents, proprietary datasets, models and licensing rights get valued, evidenced and written into the story the buyer is paying for. Same company, same revenue, different number on the term sheet.",
 outcomes: [
 "Patent portfolio strategy and valuation, built for the buyer's model",
 "Proprietary data valued as an asset, not a by-product",
 "Royalty rates and licensing terms re-priced on evidence",
 "Repositioning a dataset from low-value use to enterprise licensing",
 "IP ownership, chain of title and freedom-to-operate cleaned up pre-sale",
 "Defensible valuation narrative the acquirer's advisors can test",
 "New revenue lines from licensing assets already sitting on the balance sheet",
 "IP and data risk removed before it becomes a price chip in diligence",
 "The intangible half of the company made visible and priced"],
 },
 {
 no: "03",
 title: "Tech CFO and strategist",
 sub: "20 years as a CFO in tech. Finance lead, strategist and hands-on operator in one hire.",
 body: "Hayat runs the money and the growth plan underneath the exit. Financial model, investor story, reporting and controls, built to the standard a buyer expects to find rather than rebuilt in a panic six weeks before an LOI.",
 outcomes: [
 "Run scalable, modern financial operations",
 "Best-in-class financial models, dashboards & forecasts",
 "Fundraises that actually close: VC, PE, angels",
 "M&A technicals and exit due diligence",
 "Investor narrative, decks, teasers & data rooms",
 "Pricing, GTM, sales intelligence & investor FOMO",
 "Board & C-suite strategy: KPIs, targets and accountability",
 "AI put to work inside finance and operations where it pays",
 "The acquirer's questions answered before they are asked"],
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

export const STORY = `A CFO who has sold three companies. 20 years in high-growth tech. Buyers include American Express, TripAdvisor and Cooper Parry. 3 FT100 listings.

A founder sells a company once. Hayat has been the finance lead in the room three times, and the difference is not theory, it is knowing what the buyer is going to ask on day fourteen of diligence and having the answer already sitting in the data room.

The second half of the job is the part most companies leave on the table. Patents, datasets, models and licensing rights get bundled into a revenue multiple and handed over for nothing. Hayat prices them separately, evidences them, and writes them into the story the acquirer is paying for.`;

export const FIELD_NOTES = [
 { d: "No. 047", t: "Diligence starts two years early", b: "The questions a buyer asks on day fourteen, and why the answer has to exist before the process opens." },
 { d: "No. 046", t: "Royalty rate is an output", b: "How we re-priced a hardware company's IP from 2% to 8% without filing a single new patent." },
 { d: "No. 045", t: "The intangible half", b: "Why data and patents get handed over free inside a revenue multiple, and how to price them separately." }];

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
