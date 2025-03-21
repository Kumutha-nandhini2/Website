import HeroSection from "@/components/sections/hero-section";
import ClientsSection from "@/components/sections/clients-section";
import FeaturesSection from "@/components/sections/features-section";
import IndustrySection from "@/components/sections/industry-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import CareerSection from "@/components/sections/career-section";
import CTASection from "@/components/sections/cta-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <IndustrySection />
      <TestimonialsSection />
      <ContactSection />
      <CareerSection />
      <CTASection />
    </>
  );
};

export default HomePage;
