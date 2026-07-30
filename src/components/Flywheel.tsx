'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, Target, Zap, TrendingUp, Sliders, Sparkles, LucideIcon } from 'lucide-react';

interface FlywheelStage {
  n: string;
  title: string;
  body: string;
  icon?: LucideIcon;
}

interface FlywheelProps {
  stages: FlywheelStage[];
  centerLabel: string;
  centerSub?: string;
  delay?: number;
  size?: number;
  rotationDuration?: number; // total seconds for a full 360deg loop
}

function getStageIcon(title: string, index: number, total: number): LucideIcon {
  const lower = title.toLowerCase();
  if (lower.includes('input') || lower.includes('trade')) return TrendingUp;
  if (lower.includes('intelligence') || lower.includes('learn')) return Brain;
  if (lower.includes('decision') || lower.includes('adapt')) return Target;
  if (lower.includes('decide') || lower.includes('execute')) return Zap;

  const defaults = [Database, Brain, Sliders, Sparkles];
  return defaults[index % defaults.length];
}

export function Flywheel({
  stages,
  centerLabel,
  centerSub = 'VibeTrader Engine',
  delay = 0.4,
  size = 520,
  rotationDuration = 8,
}: FlywheelProps) {
  const count = stages.length;
  const stageStepDuration = (rotationDuration * 1000) / count;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Synchronized continuous step timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, stageStepDuration);

    return () => clearInterval(timer);
  }, [count, isPaused, stageStepDuration]);

  const cx = size / 2;
  const cy = size / 2;
  const ringR = size * 0.32;
  const labelR = size * (count === 3 ? 0.53 : 0.48);
  const circumference = 2 * Math.PI * ringR;

  // Angles in degrees (-90deg is top)
  const anglesDeg = stages.map((_, i) => -90 + (360 / count) * i);

  const ringPoints = anglesDeg.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + ringR * Math.cos(rad), y: cy + ringR * Math.sin(rad) };
  });

  const labelPoints = anglesDeg.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + labelR * Math.cos(rad), y: cy + labelR * Math.sin(rad) };
  });

  const arcPaths = ringPoints.map((p, i) => {
    const next = ringPoints[(i + 1) % count];
    return `M ${p.x} ${p.y} A ${ringR} ${ringR} 0 0 1 ${next.x} ${next.y}`;
  });

  const cardWidth = count === 3 ? 220 : 210;
  const activeStage = stages[activeIndex];

  return (
    <div
      className="relative mx-auto flex items-center justify-center select-none"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Gradient Glow */}
      <div
        className="absolute rounded-full bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-50 opacity-60 blur-2xl pointer-events-none"
        style={{ width: ringR * 2.8, height: ringR * 2.8 }}
      />

      {/* SVG Canvas for Continuous Rotating Stream & Arcs */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 z-0">
        <defs>
          <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="60%" stopColor="#4b5563" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0" />
          </linearGradient>

          <marker
            id="stream-arrow-active"
            markerWidth="10"
            markerHeight="10"
            refX="7"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 8 3.5, 0 7" fill="#000000" />
          </marker>

          <marker
            id="stream-arrow-inactive"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 7 3, 0 6" fill="#9ca3af" />
          </marker>
        </defs>

        {/* Base Track Guide Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={ringR}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="3"
          strokeDasharray="6 6"
        />

        {/* Continuous Animated Energy Stream Arc (No Extra Dots, Single Stream Flow) */}
        <motion.g
          animate={
            isPaused
              ? { rotate: (activeIndex * 360) / count }
              : { rotate: [0, 360] }
          }
          transition={
            isPaused
              ? { duration: 0.4 }
              : { rotate: { duration: rotationDuration, repeat: Infinity, ease: 'linear' } }
          }
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={ringR}
            fill="none"
            stroke="url(#streamGradient)"
            strokeWidth="5"
            strokeDasharray={`${circumference * 0.4} ${circumference * 0.6}`}
            strokeLinecap="round"
          />
        </motion.g>


      </svg>

      {/* Central Core Hub */}
      <div className="relative z-20 flex items-center justify-center">
        {/* Continuous Rotating Hub Aura Ring */}
        <motion.div
          className="absolute rounded-full bg-black/10"
          style={{ width: ringR * 1.18, height: ringR * 1.18 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Core Center Badge */}
        <motion.div
          className="relative flex flex-col items-center justify-center text-center bg-black text-white rounded-full border-4 border-white shadow-2xl cursor-pointer"
          style={{
            width: ringR * 1.05,
            height: ringR * 1.05,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-4 flex flex-col items-center justify-center">
            <Sparkles className="w-5 h-5 text-gray-300 mx-auto mb-1 animate-pulse shrink-0" />
            <p className="text-base xl:text-lg font-black tracking-tight leading-tight uppercase text-white px-2">
              {centerLabel}
            </p>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-xs uppercase tracking-widest text-gray-300 font-semibold mt-1.5 px-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                Step {activeIndex + 1} of {count}: {activeStage.title}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Numbered Orbit Nodes */}
      {ringPoints.map((p, i) => {
        const isActive = i === activeIndex;

        return (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`absolute z-30 flex h-9 w-9 items-center justify-center rounded-full text-sm font-black border-2 cursor-pointer transition-all duration-300 ${
              isActive
                ? 'bg-black text-white border-white scale-125 ring-4 ring-black/20 shadow-xl'
                : 'bg-white text-black border-gray-400 hover:scale-110 hover:border-black'
            }`}
            style={{ left: p.x - 18, top: p.y - 18 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + i * 0.15 + 0.1, duration: 0.4, type: 'spring' }}
          >
            {stages[i].n}
          </motion.div>
        );
      })}

      {/* Outer Stage Cards */}
      {stages.map((s, i) => {
        const p = labelPoints[i];
        const IconComponent = s.icon || getStageIcon(s.title, i, count);
        const isActive = i === activeIndex;

        return (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`absolute z-30 flex flex-col rounded-xl p-4 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
              isActive
                ? 'bg-black text-white border-black scale-105 shadow-2xl z-40'
                : 'bg-white text-black border-gray-200 opacity-85 hover:opacity-100 hover:border-black hover:scale-102'
            }`}
            style={{
              width: cardWidth,
              left: p.x - cardWidth / 2,
              top: p.y - 45,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + i * 0.15 + 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div
                className={`p-1.5 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-white text-black' : 'bg-gray-100 text-black'
                }`}
              >
                <IconComponent className="w-5 h-5 shrink-0" />
              </div>
              <p className={`text-lg xl:text-xl font-bold leading-tight tracking-tight ${isActive ? 'text-white' : 'text-black'}`}>
                {s.title}
              </p>
            </div>
            {s.body && (
              <p className={`text-sm xl:text-base font-light leading-relaxed pl-0.5 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                {s.body}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
