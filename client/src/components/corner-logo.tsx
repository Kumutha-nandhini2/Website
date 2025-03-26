import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const CornerLogo = () => {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only show on homepage
    setIsVisible(location === '/');
  }, [location]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 md:top-8 md:right-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/images/privacy-weave-logo.png" 
        alt="PrivacyWeave Logo" 
        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
      />
    </motion.div>
  );
};

export default CornerLogo;