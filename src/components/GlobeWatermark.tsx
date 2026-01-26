import React from 'react';

export const GlobeWatermark: React.FC = () => {
  return (
    <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-[0.03] pointer-events-none">
      <svg
        width="400"
        height="400"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Globe circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Longitude lines */}
        <ellipse
          cx="100"
          cy="100"
          rx="30"
          ry="80"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="55"
          ry="80"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Latitude lines */}
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="55"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Equator */}
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="black"
          strokeWidth="1"
        />
        
        {/* Prime meridian */}
        <line
          x1="100"
          y1="20"
          x2="100"
          y2="180"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};