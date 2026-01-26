"use client";

import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  label?: string;
}

interface WorldMapProps {
  className?: string;
  points?: Point[];
  connections?: [Point, Point][];
}

export function WorldMap({ className, points = [], connections = [] }: WorldMapProps) {
  return (
    <div className={`relative w-full aspect-[2/1] bg-slate-950 rounded-xl overflow-hidden ${className}`}>
      {/* SVG World Map */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.2 }}
      >
        {/* Simplified world map paths - focusing on major continents */}
        <g fill="currentColor" className="text-slate-600">
          {/* North America */}
          <path d="M 150 150 Q 180 120 220 130 L 250 140 L 280 160 L 290 180 L 280 200 L 260 210 L 240 220 L 220 210 L 200 200 L 180 180 L 160 170 Z" />
          
          {/* South America */}
          <path d="M 230 250 L 240 260 L 250 280 L 255 300 L 250 330 L 240 350 L 230 360 L 220 350 L 215 330 L 220 300 L 225 280 L 230 260 Z" />
          
          {/* Europe */}
          <path d="M 480 140 L 500 135 L 520 140 L 530 150 L 525 160 L 510 165 L 495 160 L 485 150 Z" />
          
          {/* Africa */}
          <path d="M 480 200 L 500 190 L 520 195 L 530 210 L 535 230 L 530 250 L 520 270 L 510 280 L 500 285 L 490 280 L 480 270 L 475 250 L 475 230 L 480 210 Z" />
          
          {/* Asia */}
          <path d="M 550 140 L 600 135 L 650 140 L 700 150 L 730 160 L 750 170 L 740 180 L 720 185 L 680 180 L 640 175 L 600 170 L 560 165 L 545 155 Z" />
          
          {/* India */}
          <path d="M 620 200 L 640 195 L 650 205 L 655 220 L 650 235 L 640 240 L 630 235 L 625 220 L 620 205 Z" />
          
          {/* Australia */}
          <path d="M 750 300 L 780 295 L 800 305 L 805 320 L 795 330 L 780 335 L 760 330 L 750 315 Z" />
        </g>

        {/* Dot grid overlay for texture */}
        <defs>
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="currentColor" className="text-slate-700" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#dots)" />
      </svg>

      {/* Connections */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {connections.map(([start, end], i) => (
          <g key={i}>
            {/* Arc path */}
            <path 
              d={`M${start.x},${start.y} Q${(start.x + end.x)/2},${Math.min(start.y, end.y) - 15} ${end.x},${end.y}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.3"
              opacity="0.6"
            />
            {/* Animated particle */}
            <circle r="0.5" fill="#38bdf8">
              <animateMotion 
                dur="3s"
                repeatCount="indefinite"
                path={`M${start.x},${start.y} Q${(start.x + end.x)/2},${Math.min(start.y, end.y) - 15} ${end.x},${end.y}`}
              />
            </circle>
          </g>
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Location Points */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="absolute z-20 flex flex-col items-center"
          style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-slate-900"></span>
          </span>
          {point.label && (
            <motion.span 
              className="mt-2 text-[10px] font-black text-white tracking-wider uppercase bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm border border-cyan-500/30 whitespace-nowrap"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              {point.label}
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}