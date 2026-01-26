"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  label?: string;
}

interface DottedMapProps {
  className?: string;
  points?: Point[];
  connections?: [Point, Point][];
}

export function DottedMap({ className, points = [], connections = [] }: DottedMapProps) {
  return (
    <div className={`relative w-full aspect-[2/1] bg-slate-950 rounded-xl overflow-hidden ${className}`}>
      {/* Abstract World Map Dots Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" className="text-white fill-current" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* World Map Shape (Simplified for aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
         <svg viewBox="0 0 1008 456" className="w-full h-full fill-white/20">
            {/* North America */}
            <path d="M185,100 Q220,100 250,150 T200,200 Z" />
            {/* South America */}
             <path d="M220,220 Q280,220 250,350 T220,220 Z" />
             {/* Europe/Asia/Africa block for effect */}
             <path d="M450,80 Q600,60 700,100 T800,200 T700,300 T550,250 T500,150 Z" />
             {/* Australia */}
             <path d="M800,300 Q850,300 840,350 T800,300 Z" />
         </svg>
      </div>


      {/* Active Points */}
      {points.map((point, i) => (
        <div
          key={i}
          className="absolute z-10 flex flex-col items-center"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          {point.label && (
            <span className="mt-2 text-[10px] font-bold text-white tracking-wider uppercase bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
              {point.label}
            </span>
          )}
        </div>
      ))}

      {/* Connections (Beams) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            {connections.map(([start, end], i) => (
                <g key={i}>
                    {/* Static Line */}
                    <path 
                        d={`M${start.x},${start.y} Q${(start.x + end.x)/2},${Math.min(start.y, end.y) - 10} ${end.x},${end.y}`}
                        fill="none"
                        stroke="rgba(14, 165, 233, 0.2)"
                        strokeWidth="0.5"
                    />
                     {/* Moving Particle */}
                     <circle r="1" fill="#38bdf8">
                        <animateMotion 
                            dur="2s"
                            repeatCount="indefinite"
                            path={`M${start.x},${start.y} Q${(start.x + end.x)/2},${Math.min(start.y, end.y) - 10} ${end.x},${end.y}`}
                        />
                    </circle>
                </g>
            ))}
         </svg>
       </div>

    </div>
  );
}
