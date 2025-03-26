import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions for healthcare providers.",
    image: "/images/healthcare-privacy.svg",
    delay: 0
  },
  {
    title: "Finance",
    description: "Secure financial data handling with Bitcoin integration and financial literacy solutions.",
    image: "/images/bitcoin-finance-literacy.jpg",
    delay: 0.1
  },
  {
    title: "Technology",
    description: "AI-driven cloud and tech solutions for software companies.",
    image: "/images/technology-privacy.svg", // Fallback image
    delay: 0.2,
    useCloudImage: true
  },
  {
    title: "Retail",
    description: "Protect customer data and maintain privacy compliance.",
    image: "/images/retail-privacy.svg",
    delay: 0.3
  },
  {
    title: "Automobile",
    description: "Secure customer and inventory data management.",
    image: "/images/automobile-privacy.svg",
    delay: 0.4
  }
];

const CloudComputingImage = () => {
  return (
    <div className="w-full h-48 bg-[#0a2c5a] flex items-center justify-center overflow-hidden">
      {/* Cloud computing illustration */}
      <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main cloud shape */}
        <path d="M205 90C205 85.5817 208.582 82 213 82H241C245.418 82 249 85.5817 249 90V130C249 134.418 245.418 138 241 138H213C208.582 138 205 134.418 205 130V90Z" fill="#578FCA" />
        
        {/* Cloud outline */}
        <path d="M80 85C80 68.4315 93.4315 55 110 55H190C206.569 55 220 68.4315 220 85V115C220 131.569 206.569 145 190 145H110C93.4315 145 80 131.569 80 115V85Z" stroke="#ECEBDE" strokeWidth="4" fill="#578FCA" />
        
        {/* Devices */}
        <rect x="50" y="125" width="60" height="40" rx="4" stroke="#ECEBDE" strokeWidth="2" fill="#0a2c5a" />
        <rect x="190" y="125" width="60" height="40" rx="4" stroke="#ECEBDE" strokeWidth="2" fill="#0a2c5a" />
        <rect x="120" y="145" width="60" height="20" rx="2" stroke="#ECEBDE" strokeWidth="2" fill="#0a2c5a" />
        
        {/* Connection lines */}
        <line x1="80" y1="125" x2="80" y2="115" stroke="#ECEBDE" strokeWidth="2" />
        <line x1="220" y1="125" x2="220" y2="115" stroke="#ECEBDE" strokeWidth="2" />
        <line x1="150" y1="145" x2="150" y2="115" stroke="#ECEBDE" strokeWidth="2" />
        
        {/* Icons inside cloud */}
        <circle cx="120" cy="85" r="12" fill="#ECEBDE" fillOpacity="0.7" />
        <circle cx="150" cy="85" r="12" fill="#ECEBDE" fillOpacity="0.7" />
        <circle cx="180" cy="85" r="12" fill="#ECEBDE" fillOpacity="0.7" />
        <rect x="115" y="82" width="10" height="6" fill="#0a2c5a" />
        <rect x="145" y="82" width="10" height="6" fill="#0a2c5a" />
        <rect x="175" y="82" width="10" height="6" fill="#0a2c5a" />
      </svg>
    </div>
  );
};

const IndustryCard = ({ industry }: { industry: typeof industries[0] }) => {
  return (
    <motion.div 
      className="group rounded-lg overflow-hidden shadow-sm relative hover:bg-[#ECEBDE] transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: industry.delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFFFF] opacity-80 z-10 group-hover:from-[#ECEBDE] group-hover:to-[#ECEBDE]"></div>
      
      {industry.useCloudImage ? (
        <CloudComputingImage />
      ) : (
        <img
          src={industry.image}
          alt={`${industry.title} privacy solutions`}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
        <h3 className="text-lg font-bold text-[#0a2c5a] mb-1">{industry.title}</h3>
        <p className="text-[#0a2c5a] text-opacity-90 text-xs mb-2">
          {industry.description}
        </p>
        <a href="#" className="text-[#0a2c5a] text-xs inline-flex items-center font-medium transition-all duration-300 hover:text-primary hover:translate-x-1">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const IndustrySection = () => {
  return (
    <section className="py-12 bg-[#FDFAF6]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">Industry Solutions</h2>
          <p className="text-base text-dark-gray max-w-2xl mx-auto">
            PrivacyWeave delivers tailored privacy solutions across multiple industries including healthcare, finance, technology, retail, and automotive.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
