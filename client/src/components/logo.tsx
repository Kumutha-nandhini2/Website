import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 280, height = 100 }) => {
  // Using a deep blue for text
  const primaryDeepBlue = "#0F2167";
  // Soft beige background color
  const softBeige = "#f5f2e8";
  
  return (
    <div 
      className={`flex items-center justify-center rounded-lg px-4 ${className}`} 
      style={{ width, height, backgroundColor: softBeige }}
    >
      <span 
        className="text-5xl font-bold tracking-tight"
        style={{ color: primaryDeepBlue }}
      >
        Privacy<span className="text-primary">Weave</span>
      </span>
    </div>
  );
};

export default Logo;