import { motion } from "framer-motion";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-neutral-dark mb-6">Trusted by Leading Organizations</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
