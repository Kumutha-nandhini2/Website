import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#FDFAF6] py-20 md:py-28 lg:py-32 relative overflow-hidden">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent leading-tight mb-6">
              Privacy Automation Powered by AI
            </h1>
            
            <p className="text-lg text-neutral-dark/90 mb-8 max-w-lg font-light leading-relaxed">
              PrivacyWeave delivers end-to-end data privacy solutions with advanced encryption standards and AI-driven automation to protect your most valuable assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-[#578FCA] hover:bg-[#578FCA]/90 text-white px-8 rounded-md font-medium">
                  Request a Demo
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="px-8 border-2 border-[#578FCA] text-[#578FCA] hover:bg-[#578FCA]/10 hover:text-[#578FCA] rounded-md font-medium transition-all">
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-neutral-dark group-hover:text-primary transition-all">
                  Empower all forms of businesses with AI-driven, automated privacy solutions that ensure compliance and data security
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-neutral-dark group-hover:text-primary transition-all">
                  Enable organizations to handle sensitive data with advanced encryption, tokenization, and zero-trust architectures
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                  <CheckCircle className="size-4" />
                </div>
                <span className="text-neutral-dark group-hover:text-primary transition-all">
                  Developing cutting-edge solutions like ZKP, SMPC, and Federated Learning to redefine data privacy and security
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl opacity-30 -z-10 rounded-full transform translate-x-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src="attached_assets/image_1742876221155.png"
                alt="Data privacy visualization"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating card element */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="size-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Shield className="size-4 text-green-600" />
                  </div>
                  <span className="font-semibold text-sm">Privacy Score</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-primary rounded-full w-[90%]"></div>
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
