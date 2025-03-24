import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#FDFAF6] py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-dark-blue/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-lg border border-blue/10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-lg border border-dark-blue/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue/5 text-blue rounded-lg text-sm font-medium mb-6 gap-2">
              <div className="size-5 bg-blue text-white rounded-md flex items-center justify-center">
                <Shield className="size-3" />
              </div>
              <span>Smart Privacy. Smarter Business.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-blue leading-tight mb-6">
              Privacy Automation Powered by AI
            </h1>
            
            <p className="text-base text-dark-gray mb-8 max-w-lg leading-relaxed">
              PrivacyWeave delivers end-to-end data privacy solutions with advanced encryption standards and AI-driven automation to protect your most valuable assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue hover:bg-blue/90 text-white px-8 rounded-md font-medium">
                  Request a Demo
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="px-8 border-2 border-blue text-blue hover:bg-blue/10 hover:text-blue rounded-md font-medium transition-all">
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-md bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-dark-gray group-hover:text-blue transition-all">
                  End-to-end encryption with industry-leading 256-bit standards
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-md bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-dark-gray group-hover:text-blue transition-all">
                  AI-powered data protection that adapts to evolving threats
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-md bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-dark-gray group-hover:text-blue transition-all">
                  Trusted by high-tech teams for maximum data security
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-dark-blue/10 blur-3xl opacity-30 -z-10 rounded-lg transform translate-x-10"></div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src="/attached_assets/Tracking%20not%20allowed%20(unless%20you're%20Google)%20(1).jpg"
                alt="Data privacy visualization"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating card element */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="size-8 rounded-md bg-blue/10 flex items-center justify-center mr-3">
                    <Shield className="size-4 text-blue" />
                  </div>
                  <span className="font-semibold text-sm">Privacy Score</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue rounded-full w-[90%]"></div>
                </div>
                <div className="mt-2 text-xs text-right text-gray-500">90% protected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
