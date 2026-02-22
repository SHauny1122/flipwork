import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import MissionVisionValuesSection from "@/components/MissionVisionValuesSection";
import Navbar from "@/components/Navbar";
import NSBCMembershipSection from "@/components/NSBCMembershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2EFEA] text-[#2A2A2A]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionValuesSection />
        <ServicesSection />
        <NSBCMembershipSection />
        <HowWeWorkSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
