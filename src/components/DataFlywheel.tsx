'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Target, Zap } from 'lucide-react';
import gsap from 'gsap';

const dataFlywheelSteps = [
  { 
    icon: Database, 
    title: 'Trading Data', 
    desc: 'Chats, trades, behavior',
    angle: 45,
    delay: 0,
    color: '#3b82f6' // Blue
  },
  { 
    icon: Brain, 
    title: 'AI Analysis', 
    desc: 'Predictive insights',
    angle: 135,
    delay: 0.1,
    color: '#8b5cf6' // Purple
  },
  { 
    icon: Target, 
    title: 'Customer Data', 
    desc: 'Segment & target',
    angle: 225,
    delay: 0.2,
    color: '#10b981' // Green
  },
  { 
    icon: Zap, 
    title: 'Product Improvement', 
    desc: 'Better features',
    angle: 315,
    delay: 0.3,
    color: '#f59e0b' // Orange
  },
];

export default function DataFlywheel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<(SVGElement | null)[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline for one-time animation on load
      const tl = gsap.timeline({ 
        defaults: { ease: "power2.inOut" }
      });

      // Initial state
      gsap.set(itemsRef.current, { scale: 0, opacity: 0 });
      gsap.set(ringsRef.current, { scale: 0.8, opacity: 0 });

      // Animation sequence - just fade in without rotation
      tl.to(ringsRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1
      })
      .to(itemsRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5");

      // Hover animations for items
      itemsRef.current.forEach((item) => {
        if (item) {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.1, duration: 0.3 });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, duration: 0.3 });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-[500px] h-[500px] mx-auto"
    >
      {/* SVG Rings */}
      <svg 
        width="500" 
        height="500" 
        viewBox="0 0 500 500" 
        className="absolute inset-0"
      >
        {/* Outer ring */}
        <g ref={el => { if (el) ringsRef.current[0] = el; }}>
          <circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeDasharray="10 5"
            opacity="0.7"
          />
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M 250 30 L 255 40 L 250 50 L 245 40 Z"
                fill="#9ca3af"
              />
            </g>
          ))}
        </g>

        {/* Middle ring */}
        <g ref={el => { if (el) ringsRef.current[1] = el; }}>
          <circle
            cx="250"
            cy="250"
            r="170"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeDasharray="8 4"
            opacity="0.6"
          />
        </g>

        {/* Inner ring */}
        <g ref={el => { if (el) ringsRef.current[2] = el; }}>
          <circle
            cx="250"
            cy="250"
            r="120"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeDasharray="6 3"
            opacity="0.5"
          />
        </g>

        {/* Arrow paths showing flow */}
        {[0, 90, 180, 270].map((rotation, i) => (
          <g key={i} transform={`rotate(${rotation} 250 250)`}>
            <path
              d="M 250 80 Q 350 100, 370 200"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center hub */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center z-20 shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
      >
        <div className="text-center">
          <p className="text-white font-black text-lg">Data</p>
          <p className="text-white font-black text-lg">Flywheel</p>
        </div>
      </motion.div>

      {/* Flywheel items */}
      {dataFlywheelSteps.map((step, index) => {
        const Icon = step.icon;
        const angleRad = (step.angle * Math.PI) / 180;
        const radius = 190;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);
        
        return (
          <div
            key={index}
            ref={el => { if (el) itemsRef.current[index] = el; }}
            className="absolute flex flex-col items-center cursor-pointer"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="group">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-black/10 rounded-2xl blur-xl scale-150 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Icon container */}
                <div 
                  className="relative w-16 h-16 bg-white border-2 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                  style={{ borderColor: step.color }}
                >
                  <Icon className="w-8 h-8 transition-colors" style={{ color: step.color }} />
                </div>
              </div>
              
              {/* Text */}
              <div className="text-center mt-3 max-w-[100px]">
                <p className="font-bold text-sm text-black">{step.title}</p>
                <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Animated pulse on center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}