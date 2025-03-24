import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    delay: 0.05
  },
  {
    title: "Technology",
    description: "AI-driven tech solutions for software companies.",
    image: "/attached_assets/Cloud%20Computing%20and%20Its%20Increasing%20Impacts.jpg",
    delay: 0.1
  },
  {
    title: "Retail",
    description: "Protect customer data and maintain privacy compliance.",
    image: "/attached_assets/5%20Reasons%20PIM%20and%20eCommerce%20Will%20Create%20Magic%20Together%20in%202021.jpg",
    delay: 0.15
  },
  {
    title: "Car Dealerships",
    description: "Secure customer and inventory data management.",
    image: "/attached_assets/Insurance.jpg",
    delay: 0.2
  }
];

const IndustryCard = ({ industry }: { industry: typeof industries[0] }) => {
  return (
    <motion.div 
      className="group rounded-md overflow-hidden shadow-md relative border border-gray-100 bg-white hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: industry.delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue/90 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
      <img
        src={industry.image}
        alt={`${industry.title} privacy solutions`}
        className="w-full h-44 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-lg font-semibold text-white mb-1">{industry.title}</h3>
        <p className="text-white text-opacity-90 text-xs mb-2">
          {industry.description}
        </p>
        <a href="#" className="text-white text-xs inline-flex items-center font-medium">
          Learn more
          <ArrowRight className="h-3 w-3 ml-1" />
        </a>
      </div>
      <div className="p-3 bg-white">
        <h3 className="text-md font-semibold text-deep-blue mb-1">{industry.title}</h3>
      </div>
    </motion.div>
  );
};

const IndustrySection = () => {
  return (
    <section className="py-12 bg-[#FDFAF6]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-3">Industry Solutions</h2>
          <p className="text-sm text-dark-gray max-w-2xl mx-auto">
            Tailored privacy solutions for key industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
