import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  // Our beige and brown color scheme
  const primaryDark = "#8D6E63"; // Dark brown 
  const primaryMedium = "#A1887F"; // Medium brown
  const primaryLight = "#F8F3E5"; // Light beige
  const accentColor = "#D7CCC8"; // Light brownish-gray

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded Rectangle Background */}
        <rect
          x="40"
          y="10"
          width="120"
          height="50"
          rx="10"
          fill={primaryLight}
          stroke={primaryDark}
          strokeWidth="2"
        />
        
        {/* The Knot Design - Celtic-inspired privacy knot */}
        <g transform="translate(100, 35) scale(0.8)">
          {/* Outer loop - left */}
          <path
            d="M-30,0 C-30,-20 -10,-30 0,-20 C10,-30 30,-20 30,0 C30,20 10,30 0,20 C-10,30 -30,20 -30,0 Z"
            stroke={primaryDark}
            strokeWidth="4"
            fill="none"
          />
          
          {/* Inner horizontal crossing lines */}
          <path
            d="M-20,-5 C-10,-5 -10,5 0,5 C10,5 10,-5 20,-5"
            stroke={primaryDark}
            strokeWidth="4"
            fill="none"
          />
          
          <path
            d="M-20,5 C-10,5 -10,-5 0,-5 C10,-5 10,5 20,5"
            stroke={primaryDark}
            strokeWidth="4"
            fill="none"
          />
          
          {/* Weaving elements that form P & W */}
          <path
            d="M-15,-10 C-15,-5 -10,0 -15,5 C-20,10 -15,15 -10,15"
            stroke={primaryMedium}
            strokeWidth="3"
            fill="none"
          />
          
          <path
            d="M5,-10 C5,-5 0,0 5,5 C10,10 15,5 15,0 C15,-5 10,-10 5,-10"
            stroke={primaryMedium}
            strokeWidth="3"
            fill="none"
          />
          
          {/* Decorative accents - representing data flow */}
          <path
            d="M-25,-5 C-20,-15 -10,-15 -5,-5"
            stroke={accentColor}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="1,1"
          />
          
          <path
            d="M5,-5 C10,-15 20,-15 25,-5"
            stroke={accentColor}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="1,1"
          />
          
          <path
            d="M-25,5 C-20,15 -10,15 -5,5"
            stroke={accentColor}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="1,1"
          />
          
          <path
            d="M5,5 C10,15 20,15 25,5"
            stroke={accentColor}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="1,1"
          />
        </g>
        
        {/* Company Name */}
        <text
          x="100"
          y="75"
          fontFamily="Montserrat, sans-serif"
          fontSize="16"
          fontWeight="500"
          fill={primaryDark}
          textAnchor="middle"
        >
          PrivacyWeave
        </text>
      </svg>
    </div>
  );
};

export default Logo;