import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions for hospitals and healthcare providers.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    delay: 0
  },
  {
    title: "Finance",
    description: "Secure financial data handling with regulatory compliance.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=600&q=80",
    delay: 0.2
  },
  {
    title: "Technology",
    description: "AI-driven tech solutions for software companies and startups.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    delay: 0.4
  }
];

const IndustryCard = ({ industry }: { industry: typeof industries[0] }) => {
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden shadow-md relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: industry.delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark opacity-70 z-10"></div>
      <img
        src={industry.image}
        alt={`${industry.title} privacy solutions`}
        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
        <p className="text-white text-opacity-90 mb-4">
          {industry.description}
        </p>
        <a href="#" className="text-white inline-flex items-center font-medium">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const IndustrySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Industry Solutions</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            PrivacyWeave delivers tailored privacy solutions for a variety of industries, with special focus on healthcare, finance, and technology sectors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
