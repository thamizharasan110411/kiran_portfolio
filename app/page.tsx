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
      <Navbar />
      <main>
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
