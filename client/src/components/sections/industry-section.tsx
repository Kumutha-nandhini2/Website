import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions for healthcare providers.",
    image: "attached_assets/In recent years, digital health has revolutionized the medical field_ Technology has reshaped how we approach health and wellness. With advancements in digital health, we see significant improvements in patient.com_b_98",
    delay: 0
  },
  {
    title: "Finance",
    description: "Secure financial data handling with regulatory compliance.",
    image: "attached_assets/How Bitcoin Brings Financial Literacy To Everyone.jpg",
    delay: 0.1
  },
  {
    title: "Technology",
    description: "AI-driven tech solutions for software companies.",
    image: "attached_assets/Cloud Computing and Its Increasing Impacts.jpg",
    delay: 0.2
  },
  {
    title: "Retail",
    description: "Protect customer data and maintain privacy compliance.",
    image: "attached_assets/5 Reasons PIM and eCommerce Will Create Magic Together in 2021.jpg",
    delay: 0.3
  },
  {
    title: "Automobile",
    description: "Secure customer and inventory data management.",
    image: "attached_assets/Insurance.jpg",
    delay: 0.4
  }
];

const IndustryCard = ({ industry }: { industry: typeof industries[0] }) => {
  return (
    <motion.div 
      className="group rounded-lg overflow-hidden shadow-sm relative"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: industry.delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2A5485] opacity-70 z-10"></div>
      <img
        src={industry.image}
        alt={`${industry.title} privacy solutions`}
        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
        <h3 className="text-lg font-bold text-white mb-1">{industry.title}</h3>
        <p className="text-white text-opacity-90 text-xs mb-2">
          {industry.description}
        </p>
        <a href="#" className="text-white text-xs inline-flex items-center font-medium">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
