import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import PremiumModules from "@/components/PremiumModules";
import WhyUs from "@/components/WhyUs";
import Journey from "@/components/Journey";
import Support from "@/components/Support";
import InstagramCta from "@/components/InstagramCta";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#14100a] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Highlights />
        <About />
        <Modules />
        <Pricing />
        <PremiumModules />
        <WhyUs />
        <Journey />
        <Support />
        <InstagramCta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
