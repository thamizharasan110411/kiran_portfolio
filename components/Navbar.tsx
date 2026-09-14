"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      // Transition only the properties that actually change: transitioning
      // `backdrop-filter` on a fixed, full-width element left it stuck at
      // blur(0px) and re-rasterized the backdrop on every scroll frame.
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#050607]/78 backdrop-blur-xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="ICT Kiran home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 font-display text-sm font-extrabold text-[#14100a] shadow-[0_0_18px_rgba(212,175,55,0.35)]">
            IK
          </span>
          <span className="font-display text-lg font-bold tracking-[0.14em] text-white">
            ICT <span className="gold-text">KIRAN</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-[13.5px] font-medium tracking-wide transition-colors ${
                  active === link.href ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#plans"
            className="gold-cta hidden rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide sm:inline-flex"
          >
            Enroll Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-t border-white/5 bg-[#050607]/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-white/5 py-3.5 text-[15px] font-medium ${
                      active === link.href ? "text-gold-400" : "text-white/70"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="#plans"
                  onClick={() => setOpen(false)}
                  className="gold-cta flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
