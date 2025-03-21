import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-neutral-light py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-5 rounded-bl-[200px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm font-medium mb-6">
              Smart Privacy. Smarter Business.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-6">
              Privacy Automation Powered by AI
            </h1>
            <p className="text-lg text-neutral-dark mb-8 max-w-lg">
              PrivacyWeave delivers end-to-end data privacy solutions with advanced encryption standards and AI-driven automation to protect your most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Request a Demo
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="px-8 border-primary text-primary hover:bg-primary hover:text-white">
                  View Solutions
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <span className="text-sm text-neutral-dark">Trusted by top healthcare institutions in Coimbatore</span>
              <div className="ml-4 flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary opacity-10 rounded-full"></div>
            <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
                alt="Data privacy visualization"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
