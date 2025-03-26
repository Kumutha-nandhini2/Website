import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  // Using a deep blue for text
  const primaryDeepBlue = "#0F2167";
  
  return (
    <div 
      className={`flex items-center justify-center ${className}`} 
      style={{ width, height }}
    >
      <span 
        className="text-3xl font-bold tracking-tight"
        style={{ color: primaryDeepBlue }}
      >
        Privacy<span className="text-primary">Weave</span>
      </span>
    </div>
  );
};

export default Logo;