import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const DataManagementSection = () => {
  // Animation controls
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsCenter = useAnimation();
  const controlsConnectors = useAnimation();
  const controlsFlowTop = useAnimation();
  const controlsFlowBottom = useAnimation();
  
  // Ref for visibility detection
  const sectionRef = useRef(null);
  
  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      await controlsLeft.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
      });
      
      await controlsRight.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
      });
      
      await controlsCenter.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, type: "spring", stiffness: 100 }
      });
      
      await controlsConnectors.start({
        opacity: 1,
        pathLength: 1,
        transition: { duration: 1.2, ease: "easeInOut" }
      });
      
      // Start continuous flow animations
      controlsFlowTop.start({
        opacity: [0.7, 1, 0.7],
        x: [0, 210, 0],
        y: [0, -70, 0],
        transition: { 
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop" 
        }
      });
      
      controlsFlowBottom.start({
        opacity: [0.7, 1, 0.7],
        x: [0, -210, 0],
        y: [0, 70, 0],
        transition: { 
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: 3
        }
      });
    };
    
    sequence();
  }, [controlsLeft, controlsRight, controlsCenter, controlsConnectors, controlsFlowTop, controlsFlowBottom]);
  
  // Element animation properties
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Menu item hover effect
  const menuHoverVariants = {
    hover: { scale: 1.02, backgroundColor: "#f0f9ff", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
  };
  
  // Circle movement effect
  const circleVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 3 }
    }
  };
  
  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
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

        <div className="relative max-w-5xl h-[550px] mx-auto">
          {/* Left side - Data Sources */}
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={controlsLeft}
          >
            <motion.div 
              className="relative w-[280px] h-[280px] rounded-full bg-white shadow-sm flex flex-col items-center justify-center"
              variants={circleVariants}
              animate="pulse"
            >
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Data</h3>
              <p className="text-xs text-gray-500 mb-4">Structured | Semi-Structured | Unstructured</p>
              
              <div className="grid grid-cols-2 gap-3">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                >
                  <span className="text-xs font-medium">CRM</span>
                </motion.div>
                
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                >
                  <span className="text-xs font-medium">IoT</span>
                </motion.div>
                
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                >
                  <span className="text-xs font-medium">Cloud</span>
                </motion.div>
                
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
                >
                  <span className="text-xs font-medium">ERP</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Connecting paths and elements */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] z-10">
            {/* Top flow path */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 300 200" fill="none">
              <motion.path
                d="M10,100 C60,40 240,40 290,100"
                stroke="#0EA5E9"
                strokeWidth="3"
                fill="none"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={controlsConnectors}
              />
              <motion.path
                d="M10,100 C60,160 240,160 290,100"
                stroke="#0EA5E9"
                strokeWidth="3"
                fill="none"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={controlsConnectors}
              />
            </svg>
            
            {/* Flow elements */}
            <motion.div 
              className="absolute top-[-15px] left-[10px] w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shadow-sm z-20"
              initial={{ opacity: 0 }}
              animate={controlsFlowTop}
            >
              <span className="text-blue-600 text-lg">🔍</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[-15px] right-[10px] w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shadow-sm z-20"
              initial={{ opacity: 0 }}
              animate={controlsFlowBottom}
            >
              <span className="text-blue-600 text-lg">🔒</span>
            </motion.div>
            
            {/* Connection dots */}
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={controlsConnectors}
            />
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={controlsConnectors}
            />
            <motion.div
              className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={controlsConnectors}
            />
            <motion.div
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={controlsConnectors}
            />
            
            {/* AI at center */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={controlsCenter}
              whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
            >
              <span className="text-xl font-bold text-primary-dark">AI</span>
            </motion.div>
          </div>
          
          {/* Right side - Privacy Management */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[320px]"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsRight}
          >
            <div className="relative">
              {/* Governance menu items */}
              <motion.div
                className="mb-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <motion.div
                  className="bg-white p-3 rounded-md shadow-sm cursor-pointer"
                  whileHover="hover"
                  variants={menuHoverVariants}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">Privacy Automation</h4>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="mb-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <motion.div
                  className="bg-white p-3 rounded-md shadow-sm cursor-pointer"
                  whileHover="hover"
                  variants={menuHoverVariants}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">Consent & Preferences</h4>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="mb-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <motion.div
                  className="bg-white p-3 rounded-md shadow-sm cursor-pointer"
                  whileHover="hover"
                  variants={menuHoverVariants}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">Data & AI Governance</h4>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="mb-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                <motion.div
                  className="bg-white p-3 rounded-md shadow-sm cursor-pointer"
                  whileHover="hover"
                  variants={menuHoverVariants}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">Tech Risk & Compliance</h4>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="mb-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
              >
                <motion.div
                  className="bg-white p-3 rounded-md shadow-sm cursor-pointer"
                  whileHover="hover"
                  variants={menuHoverVariants}
                >
                  <h4 className="text-sm font-medium text-center text-primary-dark">Third-Party Management</h4>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Process Bubbles */}
            <div className="absolute -top-20 -right-20 flex flex-wrap justify-end">
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center"
                variants={circleVariants}
                animate="pulse"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">Enforce</p>
                  <p className="text-[10px] text-gray-500">policies</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute -top-10 right-20 flex flex-wrap justify-end">
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center"
                variants={circleVariants}
                animate="pulse"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">Mitigate</p>
                  <p className="text-[10px] text-gray-500">risk</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute top-0 -right-10 flex flex-wrap justify-end">
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center"
                variants={circleVariants}
                animate="pulse"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">Collect</p>
                  <p className="text-[10px] text-gray-500">evidence</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute bottom-0 -right-10 flex flex-wrap justify-end">
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center"
                variants={circleVariants}
                animate="pulse"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">Monitor</p>
                  <p className="text-[10px] text-gray-500">compliance</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 flex flex-wrap justify-end">
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center"
                variants={circleVariants}
                animate="pulse"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-xs font-semibold">Resolve</p>
                  <p className="text-[10px] text-gray-500">issues</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

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