// Unified theme configuration for consistent presentation - Black & White design with colored charts
export const THEME_CONFIG = {
  // Grayscale palette for sophisticated, minimalist design
  colors: {
    black: '#000000',
    darkGray: '#1f2937',    // Gray-800
    mediumGray: '#6b7280',  // Gray-500
    lightGray: '#9ca3af',   // Gray-400
    paleGray: '#e5e7eb',    // Gray-200
    offWhite: '#f9fafb',    // Gray-50
    white: '#ffffff',
  },
  
  // Chart colors - keeping colors for data visualization clarity
  chartColors: {
    primary: '#10b981',     // Emerald-500
    secondary: '#3b82f6',   // Blue-500
    tertiary: '#f59e0b',    // Amber-500
    negative: '#ef4444',    // Red-500
    neutral: '#6b7280',     // Gray-500
  },
  
  // Status colors in grayscale
  statusColors: {
    achieved: '#000000',     // Black - strong/complete
    inProgress: '#6b7280',   // Gray-500 - working
    upcoming: '#9ca3af',     // Gray-400 - future
    future: '#d1d5db',       // Gray-300 - distant
  },
  
  // Background classes
  backgrounds: {
    accent: 'bg-gray-50',
    border: 'border-black',
    hover: 'hover:bg-gray-100',
    text: 'text-black',
  },
  
  // Chart patterns for accessibility and differentiation
  patterns: {
    solid: 'solid',
    dots: 'dots',
    lines: 'lines',
    crosshatch: 'crosshatch',
  }
};