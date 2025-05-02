import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F6F4F0] py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-primary/10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full border border-secondary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6 gap-2">
              <div className="size-5 bg-primary text-white rounded-full flex items-center justify-center">
                <Shield className="size-3" />
              </div>
              <span>Smart Privacy. Smarter Business.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2c5a] leading-tight mb-6">
              Privacy Automation Powered by AI
            </h1>
            
            <p className="text-lg text-[#0a2c5a] mb-8 max-w-lg font-light leading-relaxed">
              PrivacyWeave delivers end-to-end data privacy solutions with advanced encryption standards and AI-driven automation to protect your most valuable assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0a2c5a] hover:bg-[#0a2c5a]/90 text-white px-8 rounded-md font-medium">
                  Request a Demo
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="px-8 border-2 border-[#0a2c5a] text-[#0a2c5a] hover:bg-[#0a2c5a]/10 hover:text-[#0a2c5a] rounded-md font-medium transition-all">
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-[#0a2c5a]/10 flex items-center justify-center text-[#0a2c5a] group-hover:bg-[#0a2c5a]/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-[#0a2c5a] group-hover:text-[#1e5285] transition-all">
                Empowering businesses of all sizes with AI-powered, automated privacy solutions that simplify compliance and strengthen data security.                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-[#0a2c5a]/10 flex items-center justify-center text-[#0a2c5a] group-hover:bg-[#0a2c5a]/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-[#0a2c5a] group-hover:text-[#1e5285] transition-all">
                Helping organizations manage sensitive data through adaptive context tokenization, polymorphic  encryption, and access control.                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-[#0a2c5a]/10 flex items-center justify-center text-[#0a2c5a] group-hover:bg-[#0a2c5a]/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-[#0a2c5a] group-hover:text-[#1e5285] transition-all">
                Building next-gen privacy technologies   Secure Multi-Party Computation,ZKPs and Federated Learning to transform data privacy.                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2c5a]/10 to-[#3a86ff]/10 blur-3xl opacity-30 -z-10 rounded-full transform translate-x-10"></div>
            
            {/* Container with decorative elements matching #F6F4F0 background */}
            <div className="h-96 relative flex items-center justify-center">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#E6E1D9]/50 mix-blend-multiply"></div>
              <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full bg-primary/5 mix-blend-multiply"></div>
              <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-full border-2 border-[#0a2c5a]/10"></div>
              <div className="absolute left-1/3 top-1/3 w-16 h-16 rounded-full bg-[#FFFFFF]/40 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
