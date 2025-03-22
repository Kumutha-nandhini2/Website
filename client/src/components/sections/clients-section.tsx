import { motion } from "framer-motion";

// Client brand icons
const clients = [
  {
    name: "MediSecure",
    logo: "https://images.unsplash.com/photo-1627843240167-b1f9440cd2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    delay: 0
  },
  {
    name: "DataSphere",
    logo: "https://images.unsplash.com/photo-1554252117-3b08da0a0e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    delay: 0.1
  },
  {
    name: "TechShield",
    logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    delay: 0.2
  },
  {
    name: "CloudSecure",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    delay: 0.3
  }
];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-primary-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">Trusted by Leading Organizations</h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden bg-white p-2 shadow-md flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
            >
              <img 
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
