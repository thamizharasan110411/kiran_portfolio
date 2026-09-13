# ICT KIRAN — Trading Mentorship Landing Page

A premium, conversion-focused landing page for the ICT Kiran Trading Mentorship Program.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **Framer Motion** (scroll-reveal, animations)
- **Lucide React** (icons)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4173](http://localhost:4173).

## Build

```bash
npm run build
npm start
```

## Editing Content

All editable content lives in **`lib/content.ts`** — plans, pricing, FAQs, modules, navigation, journey, brand info, and the disclaimer. Change any value there and the site updates everywhere.

To edit the favicon, replace `app/icon.svg`.
To edit the Open Graph social image, replace `public/og.svg`.

## Deploy to Vercel

### Option A: Vercel CLI (fastest)

```bash
npm i -g vercel
vercel          # first time — logs in and links project
vercel --prod   # deploy to production
```

### Option B: Git + Vercel Dashboard

1. Push this folder to GitHub/GitLab/Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Framework: Next.js (auto-detected)
5. Deploy — done

### Custom Domain

In Vercel Dashboard → your project → Settings → Domains → add your domain.

## Project Structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx          — home page (section order)
  globals.css       — Tailwind v4 theme tokens, animations, utilities
  icon.svg          — favicon
components/
  Navbar.tsx        — sticky nav, scrollspy, mobile menu
  Hero.tsx          — hero + trading desk visual
  ChartBackground.tsx — animated candlestick SVG backdrop
  Highlights.tsx    — 4 trust cards
  About.tsx         — about section + animated timeline
  Modules.tsx       — 6 learning module cards
  Pricing.tsx       — Basic / Premium pricing cards
  PremiumModules.tsx — exclusive premium feature cards
  WhyUs.tsx         — 6 feature cards
  Journey.tsx       — 7-step connected timeline
  Support.tsx       — support + WhatsApp CTA
  InstagramCta.tsx  — Instagram follow card
  Faq.tsx           — accordion FAQ
  FinalCta.tsx      — cinematic final CTA
  Footer.tsx        — footer with disclaimer
  FloatingCta.tsx   — WhatsApp float + sticky mobile bar
  ui/
    Reveal.tsx      — scroll-reveal wrapper
    SectionHeading.tsx — reusable section heading
    Icon.tsx        — Lucide icon mapper
lib/
  content.ts        — ALL editable content data
```

## Notes

- All WhatsApp links point to `+91 97908 11408` with a pre-filled message
- The WhatsApp number and pre-filled message are set once in `lib/content.ts` (`WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE`) and used by every CTA
- No fake stats, testimonials, or guaranteed-profit claims
- Disclaimer is included in the footer
- `prefers-reduced-motion` is respected for accessibility
"# kiran_portfolio" 
