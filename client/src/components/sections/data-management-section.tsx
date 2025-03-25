import { motion } from "framer-motion";
import { useState } from "react";

const DataManagementSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Data objects for visualization
  const categories = [
    { name: "CRM", id: "crm" },
    { name: "IoT", id: "iot" },
    { name: "Cloud", id: "cloud" },
    { name: "ERP", id: "erp" }
  ];

  const managementItems = [
    { name: "Privacy Automation", id: "privacy" },
    { name: "Consent & Preferences", id: "consent" },
    { name: "Data & AI Governance", id: "governance" },
    { name: "Tech Risk & Compliance", id: "risk" },
    { name: "Third-Party Management", id: "third-party" }
  ];

  const actionItems = [
    { name: "Mitigate", description: "risks", position: "top-12 right-10" },
    { name: "Collect", description: "data", position: "top-32 right-5" },
    { name: "Consent", description: "manage", position: "bottom-32 right-5" },
    { name: "Monitor", description: "compliance", position: "bottom-12 right-10" }
  ];

  return (
    <section id="data-management" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Responsibly collect, govern, and use data
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            PrivacyWeave's platform ensures secure and compliant handling of your organization's data
            throughout its lifecycle.
          </p>
        </motion.div>

        {/* Data Privacy Visualization Image */}
        <motion.div
          className="mx-auto max-w-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/attached_assets/image_1742876221155.png" 
              alt="Data privacy visualization" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Interactive Visualization Area */}
        <div className="relative mx-auto w-full max-w-6xl h-[400px] md:h-[500px] mb-16">
          
          {/* Data Source - Left Side */}
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="bg-white rounded-full w-60 h-60 md:w-72 md:h-72 flex flex-col items-center justify-center shadow-md"
              animate={{ 
                scale: [1, 1.03, 1],
                transition: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }
              }}
            >
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Data</h3>
              <p className="text-xs text-gray-500 mb-4">Structured | Semi-Structured | Unstructured</p>
              
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* AI at center */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="bg-primary-light rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#f8f3e5" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(140, 100, 60, 0.4)",
                  "0 0 20px rgba(140, 100, 60, 0.6)",
                  "0 0 0 rgba(140, 100, 60, 0.4)"
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <span className="text-2xl font-bold text-primary-dark">AI</span>
            </motion.div>
            
            {/* Connection paths */}
            <svg className="absolute top-0 left-0 w-full h-full -z-10" viewBox="-150 -150 300 300" overflow="visible">
              {/* Main data paths */}
              <motion.path
                d="M-130,0 C-100,-50 -70,-20 0,0"
                stroke="hsl(32, 50%, 30%)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              <motion.path
                d="M0,0 C70,-20 100,-50 130,0"
                stroke="hsl(30, 40%, 45%)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />

              <motion.path
                d="M-130,0 C-100,50 -70,20 0,0"
                stroke="hsl(32, 50%, 30%)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              />

              <motion.path
                d="M0,0 C70,20 100,50 130,0"
                stroke="hsl(30, 40%, 45%)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
              />
              
              {/* Primary Network flow lines */}
              <motion.path
                d="M-100,-40 C-70,-30 -40,-25 0,0"
                stroke="hsla(15, 80%, 50%, 0.6)"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                animate={{ 
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              <motion.path
                d="M-100,40 C-70,30 -40,25 0,0"
                stroke="hsla(15, 80%, 50%, 0.6)" 
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                animate={{ 
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5
                }}
              />
              
              <motion.path
                d="M0,0 C40,25 70,30 100,40"
                stroke="hsla(30, 40%, 45%, 0.6)"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                animate={{ 
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5
                }}
              />
              
              <motion.path
                d="M0,0 C40,-25 70,-30 100,-40"
                stroke="hsla(267, 37%, 60%, 0.6)"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                animate={{ 
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2
                }}
              />
              
              {/* Secondary Network Flow Lines */}
              <motion.path
                d="M-110,-20 C-70,-15 -30,-5 0,0"
                stroke="hsla(267, 37%, 44%, 0.5)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                fill="none"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.7
                }}
              />
              
              <motion.path
                d="M-110,20 C-70,15 -30,5 0,0"
                stroke="hsla(267, 37%, 44%, 0.5)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                fill="none"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.2
                }}
              />
              
              <motion.path
                d="M0,0 C30,5 70,15 110,20"
                stroke="hsla(267, 37%, 60%, 0.5)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                fill="none"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.1
                }}
              />
              
              <motion.path
                d="M0,0 C30,-5 70,-15 110,-20"
                stroke="hsla(267, 37%, 60%, 0.5)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                fill="none"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.8
                }}
              />
              
              {/* Cross Network Flow Lines */}
              <motion.path
                d="M-90,-60 C-60,-40 -30,-20 0,0"
                stroke="hsla(267, 37%, 44%, 0.4)"
                strokeWidth="1"
                strokeDasharray="3,5"
                fill="none"
                animate={{ 
                  opacity: [0, 0.7, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.3
                }}
              />
              
              <motion.path
                d="M-90,60 C-60,40 -30,20 0,0"
                stroke="hsla(267, 37%, 44%, 0.4)"
                strokeWidth="1"
                strokeDasharray="3,5"
                fill="none"
                animate={{ 
                  opacity: [0, 0.7, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.2
                }}
              />
              
              <motion.path
                d="M0,0 C30,20 60,40 90,60"
                stroke="hsla(267, 37%, 60%, 0.4)"
                strokeWidth="1"
                strokeDasharray="3,5"
                fill="none"
                animate={{ 
                  opacity: [0, 0.7, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.9
                }}
              />
              
              <motion.path
                d="M0,0 C30,-20 60,-40 90,-60"
                stroke="hsla(267, 37%, 60%, 0.4)"
                strokeWidth="1"
                strokeDasharray="3,5"
                fill="none"
                animate={{ 
                  opacity: [0, 0.7, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.8
                }}
              />
              
              {/* Additional Connecting Network Lines */}
              <motion.path
                d="M-70,-50 C-40,-30 -10,-10 0,0"
                stroke="hsla(267, 37%, 44%, 0.3)"
                strokeWidth="1"
                strokeDasharray="2,6"
                fill="none"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.4
                }}
              />
              
              <motion.path
                d="M-70,50 C-40,30 -10,10 0,0"
                stroke="hsla(267, 37%, 44%, 0.3)"
                strokeWidth="1"
                strokeDasharray="2,6"
                fill="none"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.4
                }}
              />
              
              <motion.path
                d="M0,0 C10,10 40,30 70,50"
                stroke="hsla(267, 37%, 60%, 0.3)"
                strokeWidth="1"
                strokeDasharray="2,6"
                fill="none"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.4
                }}
              />
              
              <motion.path
                d="M0,0 C10,-10 40,-30 70,-50"
                stroke="hsla(267, 37%, 60%, 0.3)"
                strokeWidth="1"
                strokeDasharray="2,6"
                fill="none"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 3.3
                }}
              />
              
              {/* Data dots/packets animation */}
              <motion.circle
                cx="0"
                cy="0"
                r="5"
                fill="hsl(15, 80%, 50%)"
                initial={{ cx: -80, cy: -30 }}
                animate={{
                  cx: [-80, -40, 0],
                  cy: [-30, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="5"
                fill="hsl(32, 50%, 30%)"
                initial={{ cx: 0, cy: 0 }}
                animate={{
                  cx: [0, 40, 80],
                  cy: [0, -15, -30],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="5"
                fill="hsl(15, 80%, 50%)"
                initial={{ cx: -80, cy: 30 }}
                animate={{
                  cx: [-80, -40, 0],
                  cy: [30, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="5"
                fill="hsl(32, 50%, 30%)"
                initial={{ cx: 0, cy: 0 }}
                animate={{
                  cx: [0, 40, 80],
                  cy: [0, 15, 30],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5
                }}
              />
              
              {/* Additional smaller data packets */}
              <motion.circle
                cx="0"
                cy="0"
                r="3"
                fill="hsla(15, 80%, 50%, 0.7)"
                initial={{ cx: -90, cy: -20 }}
                animate={{
                  cx: [-90, -60, -30, 0],
                  cy: [-20, -15, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.7
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="3"
                fill="hsla(32, 50%, 30%, 0.7)"
                initial={{ cx: 0, cy: 0 }}
                animate={{
                  cx: [0, 30, 60, 90],
                  cy: [0, -10, -15, -20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.8
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="3"
                fill="hsla(15, 80%, 50%, 0.7)"
                initial={{ cx: -90, cy: 20 }}
                animate={{
                  cx: [-90, -60, -30, 0],
                  cy: [20, 15, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.2
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="3"
                fill="hsla(32, 50%, 30%, 0.7)"
                initial={{ cx: 0, cy: 0 }}
                animate={{
                  cx: [0, 30, 60, 90],
                  cy: [0, 10, 15, 20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.1
                }}
              />
            </svg>
          </motion.div>

          {/* Management Options - Right Side */}
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-10 lg:right-24 w-64"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                staggerChildren: 0.2 
              }}
            >
              {managementItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-md py-3 px-4 shadow-sm cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 } 
                  }}
                  onHoverStart={() => setIsHovered(item.id)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">{item.name}</h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating action circles */}
            {actionItems.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                animate={{ 
                  scale: [1, 1.03, 1],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">{item.name}</p>
                  <p className="text-[10px] text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Features Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-all">
              Transparently Collect Data
            </h3>
            <p className="text-neutral-dark text-opacity-80 font-light">
              Empower your teams to collect data with privacy-by-design principles at every touchpoint.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-all">
              Consent Management
            </h3>
            <p className="text-neutral-dark text-opacity-80 font-light">
              Implement robust consent frameworks complying with Digital Personal Data Protection (DPDP) Act 2023 requirements.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-all">
              Manage Risk Holistically
            </h3>
            <p className="text-neutral-dark text-opacity-80 font-light">
              Safeguard your data from risks, including unauthorized access and security threats with advanced controls.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-all">
              Enforce Policies & Controls
            </h3>
            <p className="text-neutral-dark text-opacity-80 font-light">
              Maximize data value while maintaining responsible governance and regulatory compliance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataManagementSection;