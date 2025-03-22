import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 80 }) => {
  // Purple and beige color scheme
  const primaryDark = "hsl(267, 37%, 44%)"; // 563A9C - Purple for text and knot lines
  const primaryMedium = "hsl(267, 37%, 55%)"; // Medium purple
  const primaryLight = "hsl(37, 100%, 93%)"; // FFF2DB - Light beige background
  const accentColor = "hsl(267, 37%, 60%)"; // Lighter purple accent

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded Square Background */}
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
        
        {/* Celtic Knot Design with P&W shapes */}
        <g transform="translate(100, 35) scale(0.8)">
          {/* Main knot outline */}
          <path
            d="M-25,0 A25,25 0 1,1 25,0 A25,25 0 1,1 -25,0"
            stroke={primaryDark}
            strokeWidth="3"
            fill="none"
          />
          
          {/* P and W formation - horizontal cross lines */}
          <path
            d="M-20,-5 C-15,-5 -10,5 0,5 C10,5 15,-5 20,-5"
            stroke={primaryDark}
            strokeWidth="3"
            fill="none"
          />
          
          <path
            d="M-20,5 C-15,5 -10,-5 0,-5 C10,-5 15,5 20,5"
            stroke={primaryDark}
            strokeWidth="3"
            fill="none"
          />
          
          {/* P formation */}
          <path
            d="M-15,-10 C-15,-5 -10,0 -15,5 C-20,10 -15,15 -10,15"
            stroke={primaryDark}
            strokeWidth="2.5"
            fill="none"
          />
          
          {/* W formation */}
          <path
            d="M0,10 L5,0 L10,10 L15,0"
            stroke={primaryDark}
            strokeWidth="2.5"
            fill="none"
          />
          
          {/* Cyan highlights on upper portions */}
          <path
            d="M-20,-5 C-15,-15 -5,-15 0,-5"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
          />
          
          <path
            d="M0,-5 C5,-15 15,-15 20,-5"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
          />
          
          {/* Additional decorative elements */}
          <path
            d="M-10,-15 C-5,-10 5,-10 10,-15"
            stroke={accentColor}
            strokeWidth="1.5"
            fill="none"
          />
          
          <path
            d="M-15,0 C-10,-5 -5,0 0,5"
            stroke={primaryDark}
            strokeWidth="2"
            fill="none"
          />
          
          <path
            d="M0,5 C5,0 10,-5 15,0"
            stroke={primaryDark}
            strokeWidth="2"
            fill="none"
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