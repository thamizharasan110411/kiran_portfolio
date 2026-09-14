"use client";

import { Instagram } from "lucide-react";
import { BRAND } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SocialLinks from "@/components/ui/SocialLinks";

export default function InstagramCta() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#120d14] via-[#0b0c10] to-[#071018] px-8 py-12 text-center transition-all duration-500 hover:border-gold-500/40 hover:shadow-[0_30px_80px_-30px_rgba(212,175,55,0.4)] sm:flex-row sm:justify-between sm:text-left"
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.14),rgba(34,184,212,0.1)_60%,transparent)]"
              aria-hidden="true"
            />
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-cyan-500 text-[#14100a] shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-transform duration-500 group-hover:scale-105">
                <Instagram className="h-8 w-8" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  Follow the journey
                </p>
                <p className="mt-1 font-display text-2xl font-extrabold tracking-wide text-white">
                  @{BRAND.instagram}
                </p>
              </div>
            </div>
            <span className="gold-cta inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-extrabold tracking-wide">
              FOLLOW FOR MORE
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.12} className="mt-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-white/35 uppercase">
              Also on
            </p>
            <SocialLinks size="lg" ariaLabel="ICT Kiran social profiles" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
