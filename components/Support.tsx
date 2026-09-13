"use client";

import { MessageCircle, Users, LifeBuoy, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Support() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="aura opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.32em] text-cyan-300 uppercase">
            You&rsquo;re not alone
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.06] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
            YOU DON&rsquo;T HAVE TO
            <br />
            <span className="gold-text">TRADE ALONE.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            &ldquo;Get guidance, support and access to a community focused on structured trading
            education.&rdquo;
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="glass card-hover h-full p-7 text-left hover:border-gold-500/45">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-400">
                <LifeBuoy className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-bold tracking-wide text-white">
                FULL SUPPORT
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Until You Get Your First Payout — guidance at every step of your mentorship.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="glass card-hover h-full p-7 text-left hover:border-wa/45">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-wa/25 bg-wa/10 text-wa">
                <Users className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-bold tracking-wide text-white">
                LIFETIME COMMUNITY ACCESS
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Premium members — stay connected, keep learning and keep improving together.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#2fe072] to-[#1cb857] px-9 py-4.5 text-base font-extrabold tracking-wide text-[#05240f] shadow-[0_18px_50px_-16px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-16px_rgba(37,211,102,0.8)]"
            >
              <MessageCircle className="h-5.5 w-5.5" />
              CHAT WITH US ON WHATSAPP
            </a>
            <p className="flex items-center gap-2 font-mono text-sm text-white/50">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              {BRAND.whatsapp}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
