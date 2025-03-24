import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions for healthcare providers.",
    image: "/attached_assets/In%20recent%20years%2C%20digital%20health%20has%20revolutionized%20the%20medical%20field_%20Technology%20has%20reshaped%20how%20we%20approach%20health%20and%20wellness.%20With%20advancements%20in%20digital%20health%2C%20we%20see%20significant%20improvements%20in%20patient.com_b_98",
    delay: 0
  },
  {
    title: "Finance",
    description: "Secure financial data handling with regulatory compliance.",
    image: "/attached_assets/How%20Bitcoin%20Brings%20Financial%20Literacy%20To%20Everyone.jpg",
    delay: 0.1
  },
  {
    title: "Technology",
    description: "AI-driven tech solutions for software companies.",
    image: "/attached_assets/Cloud%20Computing%20and%20Its%20Increasing%20Impacts.jpg",
    delay: 0.2
  },
  {
    title: "Retail",
    description: "Protect customer data and maintain privacy compliance.",
    image: "/attached_assets/5%20Reasons%20PIM%20and%20eCommerce%20Will%20Create%20Magic%20Together%20in%202021.jpg",
    delay: 0.3
  },
  {
    title: "Car Dealerships",
    description: "Secure customer and inventory data management.",
    image: "/attached_assets/Insurance.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-blue opacity-70 z-10"></div>
      <img
        src={industry.image}
        alt={`${industry.title} privacy solutions`}
        className="w-full h-56 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{industry.title}</h3>
        <p className="text-white text-opacity-90 text-sm mb-2">
          {industry.description}
        </p>
        <a href="#" className="text-white text-sm inline-flex items-center font-medium">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
