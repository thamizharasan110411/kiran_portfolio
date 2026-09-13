export const BRAND = {
  name: "ICT KIRAN",
  tagline: ["LEARN", "TRADE", "GROW"],
  taglineText: "LEARN | TRADE | GROW",
  program: "TRADING MENTORSHIP PROGRAM",
  markets: "CFD | FUTURES",
  positioning: "From Basics to Profitable Trader",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  whatsappMessage:
    "Hi ICT Kiran, I'm interested in the Trading Mentorship Program.",
  instagram: "ict_kiran",
  instagramUrl: "https://instagram.com/ict_kiran",
  telegramUrl: "https://t.me/mtc1006",
  xUrl: "https://x.com/makkutrader06",
  youtubeUrl: "https://youtube.com/@kirankumar-rz1br",
  whatsappUrl:
    "https://wa.me/919876543210?text=" +
    encodeURIComponent("Hi ICT Kiran, I'm interested in the Trading Mentorship Program."),
} as const;

export type Social = {
  id: "instagram" | "telegram" | "x" | "youtube";
  label: string;
  handle: string;
  href: string;
};

/**
 * Social profiles shown in the footer and alongside the Instagram section.
 * Edit the URLs in BRAND above to point at new handles.
 */
export const SOCIALS: Social[] = [
  { id: "instagram", label: "Instagram", handle: `@${BRAND.instagram}`, href: BRAND.instagramUrl },
  { id: "telegram", label: "Telegram", handle: "mtc1006", href: BRAND.telegramUrl },
  { id: "x", label: "X", handle: "@makkutrader06", href: BRAND.xUrl },
  { id: "youtube", label: "YouTube", handle: "@kirankumar-rz1br", href: BRAND.youtubeUrl },
];

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Plans", href: "#plans" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type Highlight = {
  title: string;
  subtitle: string;
  caption: string;
  icon: string;
  accent: "gold" | "cyan" | "green";
};

export const HIGHLIGHTS: Highlight[] = [
  { title: "CFD & FUTURES", subtitle: "Global Markets", caption: "Indices | Crypto | Gold | Forex", icon: "globe", accent: "gold" },
  { title: "PROVEN STRATEGY", subtitle: "Structured Learning", caption: "Concepts → Execution → Review", icon: "target", accent: "cyan" },
  { title: "RISK MANAGEMENT", subtitle: "Protect Your Capital", caption: "Position sizing | Risk-reward | Stops", icon: "shield", accent: "gold" },
  { title: "LIFETIME COMMUNITY", subtitle: "Never Trade Alone", caption: "Premium member community & support", icon: "users", accent: "green" },
];

export type Module = {
  no: string;
  title: string;
  description: string;
  icon: string;
  accent: "gold" | "cyan";
};

export const MODULES: Module[] = [
  {
    no: "01",
    title: "ICT Concepts",
    description: "Basic to advanced market structure, liquidity and price action foundations.",
    icon: "candlestick-chart",
    accent: "gold",
  },
  {
    no: "02",
    title: "3 Entry Models",
    description: "Structured, repeatable entry frameworks with clear invalidation points.",
    icon: "crosshair",
    accent: "cyan",
  },
  {
    no: "03",
    title: "Trading Psychology",
    description: "Emotional discipline, patience and consistency under live conditions.",
    icon: "brain",
    accent: "gold",
  },
  {
    no: "04",
    title: "Risk Management",
    description: "Position sizing, exposure control and capital protection rules.",
    icon: "shield-check",
    accent: "cyan",
  },
  {
    no: "05",
    title: "Funded Account Approach",
    description: "The process and approach toward funded/prop-firm style accounts.",
    icon: "briefcase",
    accent: "gold",
  },
  {
    no: "06",
    title: "Payout Process",
    description: "Understanding evaluations, payouts and sustainable withdrawal habits.",
    icon: "banknote",
    accent: "cyan",
  },
];

export const TIMELINE = [
  { no: "01", label: "ICT Concepts" },
  { no: "02", label: "Entry Models" },
  { no: "03", label: "Psychology" },
  { no: "04", label: "Risk Management" },
  { no: "05", label: "Funded Account Approach" },
  { no: "06", label: "Premium Indicator Access" },
];

export type Plan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  perMonth: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "BASIC PLAN",
    price: "₹2,999",
    perMonth: "/ 1-month class duration",
    title: "ICT BASIC TO ADVANCED",
    subtitle: "CFD & FUTURES",
    cta: "ENROLL IN BASIC",
    features: [
      "ICT Concepts (Basic to Advanced)",
      "3 Entry Models",
      "Psychology",
      "Risk Management",
      "Funded Account Approach",
      "Payout Process",
      "Full Support — Until You Get Your First Payout",
      "1 Month Class Duration",
      "Weekly Market Report",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM PLAN",
    badge: "MOST POPULAR",
    price: "₹4,999",
    perMonth: "/ 1-month class duration",
    title: "ALL IN — CFD & FUTURES",
    subtitle: "EVERYTHING IN BASIC, PLUS",
    cta: "ENROLL IN PREMIUM",
    featured: true,
    features: [
      "ICT Concepts (Basic to Advanced)",
      "3 Entry Models",
      "Psychology",
      "Risk Management",
      "Funded Account Approach",
      "Payout Process",
      "Full Support — Until You Get Your First Payout",
      "Live Class During 1 Month",
      "Weekly Market Report",
      "Quarterly Theory — Advanced",
      "Deep Market Structure",
      "Advanced Concepts",
      "PO3 Ranges — Premium Module",
      "Precise Zones",
      "High Probability Setups",
      "Lifetime Community Access",
      "Support",
    ],
  },
];

export const PREMIUM_MODULES = [
  {
    tag: "PREMIUM EXCLUSIVE",
    title: "QUARTERLY THEORY",
    description: "Advanced market structure and advanced concepts.",
    icon: "clock",
  },
  {
    tag: "PREMIUM EXCLUSIVE",
    title: "PO3 RANGES",
    description: "Precise zones and high-probability setups.",
    icon: "activity",
  },
  {
    tag: "PREMIUM ONLY",
    title: "LIFETIME COMMUNITY",
    description: "Stay connected with the trading community and receive continued support.",
    icon: "users",
  },
];

export const WHY_US = [
  {
    title: "Structured Learning",
    description: "Learn concepts step-by-step from basics to advanced.",
    icon: "book-open",
  },
  {
    title: "Practical Entry Models",
    description: "Understand structured entry approaches.",
    icon: "crosshair",
  },
  {
    title: "Risk Management",
    description: "Build disciplined risk management habits.",
    icon: "shield-check",
  },
  {
    title: "Trading Psychology",
    description: "Develop emotional discipline and consistency.",
    icon: "brain",
  },
  {
    title: "Funded Account Approach",
    description: "Learn about the process and approach toward funded accounts.",
    icon: "briefcase",
  },
  {
    title: "Ongoing Support",
    description: "Get guidance throughout the mentorship period.",
    icon: "life-buoy",
  },
];

export const JOURNEY = [
  { step: "01", title: "Learn the Basics" },
  { step: "02", title: "Understand Market Structure" },
  { step: "03", title: "Learn Entry Models" },
  { step: "04", title: "Develop Risk Management" },
  { step: "05", title: "Improve Psychology" },
  { step: "06", title: "Apply the Concepts" },
  { step: "07", title: "Build Discipline" },
];

export const FAQS = [
  {
    q: "What is the Trading Mentorship Program?",
    a: "A structured 1-month mentorship covering ICT concepts, entry models, psychology and risk management for CFD & Futures — with ongoing support focused on education.",
  },
  {
    q: "Is the program for beginners?",
    a: "Yes. The curriculum starts from the basics and progresses to advanced concepts, so complete beginners and intermediate traders can both follow it step-by-step.",
  },
  {
    q: "What markets are covered?",
    a: "CFD and Futures.",
  },
  {
    q: "What is included in the Basic Plan?",
    a: "ICT Concepts (Basic to Advanced), 3 Entry Models, Psychology, Risk Management, Funded Account Approach, Payout Process, full support until you get your first payout, a 1-month class duration and a weekly market report.",
  },
  {
    q: "What is included in the Premium Plan?",
    a: "Everything in Basic, plus live classes during the 1-month program, Quarterly Theory (advanced), Deep Market Structure, Advanced Concepts, PO3 Ranges, Precise Zones, High Probability Setups, Lifetime Community Access and support.",
  },
  {
    q: "How long is the mentorship?",
    a: "The program includes a 1-month class duration, with additional support/community benefits as specified in the selected plan.",
  },
  {
    q: "Do I get support during the program?",
    a: "Yes. Both plans include full support until you get your first payout, with Premium adding lifetime community access.",
  },
  {
    q: "What is the difference between Basic and Premium?",
    a: "Basic covers the complete core curriculum with support. Premium adds live classes, advanced modules (Quarterly Theory, PO3 Ranges, Precise Zones), lifetime community access and deeper structure coverage.",
  },
  {
    q: "How can I enroll?",
    a: "Tap any 'Enroll' button or message us on WhatsApp at +91 98765 43210. We'll guide you through the next steps personally.",
  },
  {
    q: "Is profit guaranteed?",
    a: "No. Trading involves significant risk. The program is for educational purposes and does not guarantee profits or trading results.",
  },
];

export const DISCLAIMER =
  "Trading in financial markets involves substantial risk and may not be suitable for everyone. Past performance does not guarantee future results. This mentorship is intended for educational purposes only and does not constitute financial or investment advice. No profits or returns are guaranteed.";
