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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="flex justify-center items-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <div className="bg-neutral-200 w-32 h-10 rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
