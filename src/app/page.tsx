import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PromiseSection from "@/components/sections/PromiseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialVideoSection from "@/components/sections/TestimonialVideoSection";
import DiagnosticSection from "@/components/sections/DiagnosticSection";
import LogoBanner from "@/components/LogoBanner";
import MethodValuesSection from "@/components/sections/MethodValuesSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProblemSection />
        <PromiseSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialVideoSection />
        <DiagnosticSection />
        <LogoBanner />
        <MethodValuesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
