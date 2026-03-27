import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import AboutSection from "@/components/AboutSection";
import VenturesSection from "@/components/VenturesSection";
import TimelineSection from "@/components/TimelineSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ZeroUpSection from "@/components/ZeroUpSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <LogoCarousel />
        <AboutSection />
        <VenturesSection />
        <TimelineSection />
        <ExpertiseSection />
        <ZeroUpSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TrustSection />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
