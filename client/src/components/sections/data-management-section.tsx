import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const DataManagementSection = () => {
  // Animation controls
  const controls = useAnimation();
  const circleControls = useAnimation();
  const flowControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Initial animation on mount
  useEffect(() => {
    const animationSequence = async () => {
      // Start main circle animations
      await controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut" 
        }
      });

      // Start small circle animations
      await circleControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      });

      // Start data flow animations
      flowControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse"
        }
      });

      setIsVisible(true);
    };

    animationSequence();
  }, [controls, circleControls, flowControls]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 } 
    }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    pulse: {
      scale: [1, 1.03, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "reverse"
      }
    }
  };

  const flowVariants = {
    initial: { opacity: 0.4, scale: 0.95 },
    animate: { 
      opacity: [0.4, 0.8, 0.4], 
      scale: [0.95, 1, 0.95],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };

  const dataFlowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: [0.5, 1, 0.5], 
      x: [-5, 5, -5],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <section id="data-management" className="py-20 bg-gray-50">
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

        {/* Interactive Visualization Area */}
        <div className="relative mx-auto w-full max-w-6xl h-[400px] md:h-[500px] mb-16">
          
          {/* Data Source - Left Side */}
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-24"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
          >
            <motion.div
              className="bg-white rounded-full w-60 h-60 md:w-72 md:h-72 flex flex-col items-center justify-center shadow-md"
              variants={circleVariants}
              animate="pulse"
            >
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Data</h3>
              <p className="text-xs text-gray-500 mb-4">Structured | Semi-Structured | Unstructured</p>
              
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(74, 222, 128, 0.4)",
                  "0 0 20px rgba(74, 222, 128, 0.6)",
                  "0 0 0 rgba(74, 222, 128, 0.4)"
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
              {/* Path from Data to AI */}
              <motion.path
                d="M-130,0 C-100,-50 -70,-20 0,0"
                stroke="#4ADE80"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Path from AI to Categories */}
              <motion.path
                d="M0,0 C70,-20 100,-50 130,0"
                stroke="#0EA5E9"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Bottom paths */}
              <motion.path
                d="M-130,0 C-100,50 -70,20 0,0"
                stroke="#4ADE80"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />

              <motion.path
                d="M0,0 C70,20 100,50 130,0"
                stroke="#0EA5E9"
                strokeWidth="3"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Animated data packets */}
              {isVisible && (
                <>
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#4ADE80"
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
                    fill="#0EA5E9"
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
                    fill="#4ADE80"
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
                    fill="#0EA5E9"
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
                </>
              )}
            </svg>
          </motion.div>

          {/* Management Options - Right Side */}
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-10 lg:right-24 w-64"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
          >
            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {managementItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-md py-3 px-4 shadow-sm cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                  custom={index}
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
                variants={circleVariants}
                initial="hidden"
                animate="pulse"
                whileHover={{ scale: 1.1 }}
                custom={index}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">{item.name}</p>
                  <p className="text-[10px] text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Transparently collect data
            </h3>
            <p className="text-neutral-dark">
              Empower your teams to collect data with clear consent management and privacy-by-design principles.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Manage risk holistically
            </h3>
            <p className="text-neutral-dark">
              Safeguard your data from risks, including unauthorized access and security threats.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Enforce policies and controls
            </h3>
            <p className="text-neutral-dark">
              Maximize the value of your data and AI by applying responsible and compliant governance rules.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataManagementSection;