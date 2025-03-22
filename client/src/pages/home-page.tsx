import HeroSection from "@/components/sections/hero-section";
import ClientsSection from "@/components/sections/clients-section";
import FeaturesSection from "@/components/sections/features-section";
import DataManagementSection from "@/components/sections/data-management-section";
import IndustrySection from "@/components/sections/industry-section";
import ContactSection from "@/components/sections/contact-section";
import CareerSection from "@/components/sections/career-section";
import CTASection from "@/components/sections/cta-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <DataManagementSection />
      <IndustrySection />
      <ContactSection />
      <CareerSection />
      <CTASection />
    </>
  );
};

export default HomePage;
