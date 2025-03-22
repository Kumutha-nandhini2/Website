import { motion } from "framer-motion";

// Replaced with a privacy features section
const privacyFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Advanced encryption protocols to protect data at rest and in transit",
    delay: 0
  },
  {
    title: "Automated Compliance",
    description: "Stay compliant with evolving regulations through intelligent automation",
    delay: 0.1
  },
  {
    title: "Access Control",
    description: "Fine-grained permission systems with role-based access controls",
    delay: 0.2
  },
  {
    title: "Data Minimization",
    description: "Smart technologies to reduce sensitive data exposure and storage",
    delay: 0.3
  }
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-dark mb-6">Advanced Privacy Technologies</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Our proprietary solutions leverage cutting-edge AI to transform how organizations manage data privacy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-primary-dark mb-3">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
