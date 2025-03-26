import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const CornerLogo = () => {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  
  // Soft beige background color
  const softBeige = "#f5f2e8";

  useEffect(() => {
    // Only show on homepage
    setIsVisible(location === '/');

    // Hide logo on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowLogo(scrollPosition < 100); // Only show when near the top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  if (!isVisible || !showLogo) return null;

  return (
    <motion.div 
      className="absolute top-20 right-8 z-40 md:top-24 md:right-12 lg:top-28 lg:right-16 rounded-2xl p-4"
      style={{ backgroundColor: softBeige }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/images/privacy-weave-logo.png" 
        alt="PrivacyWeave Logo" 
        className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mix-blend-multiply" 
        style={{ filter: 'brightness(1.05) contrast(1.05)' }}
      />
    </motion.div>
  );
};

export default CornerLogo;