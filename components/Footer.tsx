"use client";

import { Instagram, MessageCircle } from "lucide-react";
import { BRAND, DISCLAIMER, NAV_LINKS } from "@/lib/content";

const FOOTER_LINKS = NAV_LINKS.filter((l) => l.href !== "#why-us");

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#060708]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 font-display text-base font-extrabold text-[#14100a]">
                IK
              </span>
              <span className="font-display text-xl font-bold tracking-[0.14em] text-white">
                ICT <span className="gold-text">KIRAN</span>
              </span>
            </a>
            <p className="mt-5 font-display text-[13px] font-bold tracking-[0.34em] text-gold-400/90">
              {BRAND.taglineText}
            </p>
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/45">
              Structured trading mentorship for CFD & Futures — from basics to profitable trader.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-gold-500/40 hover:text-gold-400"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-wa/40 hover:text-wa"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* quick links */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-white/55 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3.5 text-[14px]">
              <li>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-wa"
                >
                  <MessageCircle className="h-4 w-4 text-wa/70" />
                  {BRAND.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-gold-400"
                >
                  <Instagram className="h-4 w-4 text-gold-400/70" />
                  @{BRAND.instagram}
                </a>
              </li>
            </ul>
            <a
              href="#plans"
              className="gold-cta mt-7 inline-flex rounded-xl px-6 py-3 text-[13px] font-extrabold"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* disclaimer */}
        <div className="mt-14 rounded-xl border border-white/6 bg-white/[0.02] px-6 py-5">
          <p className="text-[10.5px] font-bold tracking-[0.26em] text-white/35 uppercase">
            Risk Disclosure
          </p>
          <p className="mt-2.5 text-[12px] leading-relaxed text-white/35">{DISCLAIMER}</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 text-[12.5px] text-white/35 sm:flex-row">
          <p>© 2026 ICT Kiran. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/25">
            CFD | FUTURES · EDUCATIONAL PURPOSES ONLY
          </p>
        </div>
      </div>
    </footer>
  );
}
