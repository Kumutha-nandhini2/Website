import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  // Using our new color scheme
  const primaryDeepBlue = "#0F2167"; // Deep blue for text
  const accentDarkBlue = "#004D73"; // Dark blue accent

  return (
    <div 
      className={`flex items-center justify-center ${className}`} 
      style={{ width, height }}
    >
      <div className="font-bold text-[1.8rem] text-deep-blue tracking-tight">
        Privacy<span className="text-dark-blue">Weave</span>
      </div>
    </div>
  );
};

export default Logo;