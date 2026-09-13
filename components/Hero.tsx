"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Eye, MonitorPlay } from "lucide-react";
import { BRAND } from "@/lib/content";
import ChartBackground from "./ChartBackground";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section id="home" className="relative isolate overflow-hidden pt-[72px]">
      {/* animated gradient aura */}
      <div className="aura" aria-hidden="true" />

      {/* animated candlestick chart backdrop */}
      <div className="absolute inset-x-0 bottom-0 h-[46%] opacity-40 [mask-image:linear-gradient(to_top,black_30%,transparent)]">
        <ChartBackground />
      </div>

      {/* vignette to keep text readable */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(212,175,55,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20 lg:pb-28">
        {/* ---------- Copy ---------- */}
        <div>
          <motion.div {...fadeUp(0.05)} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-1.5 backdrop-blur">
            <span className="rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-3 py-1 text-[10.5px] font-extrabold tracking-[0.18em] text-[#14100a]">
              {BRAND.markets}
            </span>
            <span className="text-[11.5px] font-semibold tracking-[0.26em] text-white/70 uppercase">
              {BRAND.taglineText}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            TRADING MENTORSHIP
            <br />
            <span className="gold-text">PROGRAM</span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="mt-5 font-display text-xl font-bold text-cyan-300 sm:text-2xl">
            From Basics to Profitable Trader
          </motion.p>

          <motion.p {...fadeUp(0.32)} className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60 sm:text-base">
            &ldquo;Learn structured trading concepts, entry models, psychology and risk management
            with practical mentorship and ongoing support.&rdquo;
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="gold-cta inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-extrabold tracking-wide"
            >
              ENROLL NOW <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#plans"
              className="ghost-cta inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide"
            >
              VIEW PLANS
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-wa/30 bg-wa/10 px-5 py-3.5 text-sm font-semibold text-wa transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa/15 hover:shadow-[0_10px_30px_-12px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* ---------- Trading desk visual ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* gold ambient glow */}
          <div
            className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(60%_55%_at_50%_45%,rgba(212,175,55,0.14),transparent_70%)] blur-2xl"
            aria-hidden="true"
          />

          {/* main monitor */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#101318] to-[#08090c] p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_60px_-30px_rgba(212,175,55,0.4)]">
            <div className="mb-2 flex items-center justify-between px-2 pt-1">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.22em] text-white/35">
                XAUUSD · NAS100 · BTCUSD
              </span>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#07080a]">
              <ChartBackground />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 px-1 pb-1">
              {[
                { label: "XAUUSD", val: "2,412.80", chg: "+1.24%", up: true },
                { label: "NAS100", val: "18,645.2", chg: "+0.86%", up: true },
                { label: "BTCUSD", val: "61,204", chg: "-0.42%", up: false },
              ].map((t) => (
                <div
                  key={t.label}
                  className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
                >
                  <p className="text-[9.5px] font-semibold tracking-[0.14em] text-white/40">{t.label}</p>
                  <p className="font-mono text-[12.5px] font-bold text-white/90">{t.val}</p>
                  <p className={`text-[10px] font-semibold ${t.up ? "text-up" : "text-[#ff6b6b]"}`}>{t.chg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* floating side monitors */}
          <motion.div
            animate={reduce ? {} : { y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-7 -right-4 hidden w-40 rotate-3 rounded-xl border border-gold-500/25 bg-[#0b0d10]/95 p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur sm:block"
          >
            <p className="px-1 pb-1 font-mono text-[9px] tracking-[0.2em] text-gold-400/80">STRUCTURE</p>
            <div className="flex h-14 items-end justify-center gap-1">
              {[38, 62, 45, 78, 55, 88].map((h, i) => (
                <span
                  key={i}
                  className={`w-2 rounded-sm ${i % 3 === 1 ? "bg-cyan-400/70" : "bg-gold-400/80"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-5 hidden -rotate-2 rounded-xl border border-cyan-500/25 bg-[#0b0d10]/95 px-4 py-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur sm:block"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-cyan-300">
              <MonitorPlay className="h-3.5 w-3.5" /> LIVE MENTORSHIP
            </p>
            <p className="mt-1 flex items-center gap-2 font-mono text-[11px] text-white/70">
              <Eye className="h-3.5 w-3.5 text-gold-400" /> Risk Model · 1:3 RR
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* stat strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease }}
        className="relative border-t border-white/5 bg-white/[0.015] backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5 py-5 sm:px-8 lg:justify-between">
          {["CFD & FUTURES", "1-MONTH CLASS DURATION", "FULL SUPPORT UNTIL FIRST PAYOUT", "PREMIUM LIFETIME COMMUNITY"].map(
            (t) => (
              <span
                key={t}
                className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] text-white/45"
              >
                <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                {t}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
