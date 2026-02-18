import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import Navbar from "@/components/Navbar";
import NSBCMembershipSection from "@/components/NSBCMembershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
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
