import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`} 
      style={{ width, height }}
    >
      <img 
        src="/images/privacy-weave-logo.png" 
        alt="PrivacyWeave Logo" 
        className="object-contain" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Logo;