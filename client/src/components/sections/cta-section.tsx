import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-xl p-12 shadow-md text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Ready to Strengthen Your Privacy Posture?</h2>
          <p className="text-lg text-neutral-dark mb-8 max-w-2xl mx-auto">
            Take the first step toward comprehensive privacy protection with PrivacyWeave's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#008DDA] hover:bg-[#006DAA] text-white transition-colors">
                Request a Demo
              </Button>
            </Link>
            <Link href="#">
              <Button size="lg" variant="outline" className="border-[#008DDA] border-2 text-[#008DDA] hover:bg-[#DCD7C9] transition-colors">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
