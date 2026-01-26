import React from 'react';

type Position = 'center' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'right';

interface GlobeWatermarkProps {
  position?: Position;
  size?: number;
  opacity?: number;
  rotate?: number;
}

export const GlobeWatermark: React.FC<GlobeWatermarkProps> = ({ 
  position = 'center',
  size = 700,
  opacity = 0.07,
  rotate = 5
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'center':
        return 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'bottom-right':
        return 'absolute bottom-10 right-10';
      case 'bottom-left':
        return 'absolute bottom-10 left-10';
      case 'top-right':
        return 'absolute top-10 right-10';
      case 'top-left':
        return 'absolute top-10 left-10';
      case 'right':
        return 'absolute top-1/2 right-20 -translate-y-1/2';
      default:
        return 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  // Adjust size based on position
  const adjustedSize = position === 'center' ? size : size * 0.4;
  const adjustedOpacity = position === 'center' ? opacity : opacity * 2.5;

  return (
    <div 
      className={`${getPositionClasses()} pointer-events-none`}
      style={{ 
        opacity: adjustedOpacity,
        transform: position === 'center' 
          ? `translate(-50%, -50%) rotate(${rotate}deg)` 
          : position === 'right'
          ? `translateY(-50%) rotate(${rotate}deg)`
          : `rotate(${rotate}deg)`
      }}
    >
      <svg
        width={adjustedSize}
        height={adjustedSize}
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
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Longitude lines */}
        <ellipse
          cx="100"
          cy="100"
          rx="30"
          ry="80"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="55"
          ry="80"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Latitude lines */}
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="55"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Equator */}
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="black"
          strokeWidth="0.5"
        />
        
        {/* Prime meridian */}
        <line
          x1="100"
          y1="20"
          x2="100"
          y2="180"
          stroke="black"
          strokeWidth="0.5"
        />
        
        {/* Add some dots for major cities (subtle detail) */}
        <circle cx="100" cy="45" r="2" fill="black" opacity="0.3" />
        <circle cx="75" cy="60" r="2" fill="black" opacity="0.3" />
        <circle cx="125" cy="70" r="2" fill="black" opacity="0.3" />
        <circle cx="90" cy="110" r="2" fill="black" opacity="0.3" />
        <circle cx="110" cy="130" r="2" fill="black" opacity="0.3" />
      </svg>
    </div>
  );
};