import ContactSection from "@/components/sections/contact-section";
import CTASection from "@/components/sections/cta-section";

const ContactPage = () => {
  return (
    <>
      <div className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            Get in touch with our team of privacy experts to discuss how PrivacyWeave can help your organization.
          </p>
        </div>
      </div>
      <ContactSection />
      <CTASection />
    </>
  );
};

export default ContactPage;
