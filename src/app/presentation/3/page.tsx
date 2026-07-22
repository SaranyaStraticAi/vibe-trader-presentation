'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 2;

const story = [
  'Built an auto-trading system',
  'Strong early results',
  'Markets evolved',
  'Strategies lost their edge',
];

const insight = [
  'Volatility changes constantly',
  'Macro events shift behavior',
  'Strategies decay over time',
  'Yet most platforms treat strategies as static',
];

export default function Slide3() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white"
      onClick={nextSlide}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What we learned
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-6 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            &ldquo;There is no permanent winning strategy.&rdquo;
          </motion.p>

          {/* SVG Trajectory Peak-and-Decline Curve Graphic */}
          <motion.div
            className="relative w-full max-w-7xl mt-12 mb-4 py-2 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative w-full h-[340px]">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300">
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="35%" stopColor="#10b981" />
                    <stop offset="65%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>

                  <marker
                    id="arrowhead"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 4, 0 8" fill="#d1d5db" />
                  </marker>
                </defs>

                {/* Y-Axis Label: Performance over time */}
                <text
                  x="80"
                  y="20"
                  fill="#9ca3af"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  PERFORMANCE OVER TIME
                </text>

                {/* Baseline Time Axis */}
                <line
                  x1="80"
                  y1="255"
                  x2="920"
                  y2="255"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* X-Axis Label: TIME */}
                <text
                  x="500"
                  y="285"
                  fill="#9ca3af"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="2"
                  textAnchor="middle"
                >
                  TIME
                </text>

                {/* Trajectory Curve */}
                <motion.path
                  d="M 120 175 C 200 135, 270 70, 360 70 C 480 70, 560 145, 640 145 C 730 145, 810 195, 870 210"
                  fill="none"
                  stroke="url(#curveGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.5 }}
                />

                {/* Point 1: Built the system */}
                <g>
                  <motion.circle
                    cx="120"
                    cy="175"
                    r="8"
                    fill="#10b981"
                    className="drop-shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                  />
                  <text x="120" y="203" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="16">
                    Built the system
                  </text>
                  <text x="120" y="221" textAnchor="middle" fill="#6b7280" fontWeight="300" fontSize="13">
                    Internal auto-trading
                  </text>
                </g>

                {/* Point 2: Strong early results */}
                <g>
                  <motion.circle
                    cx="360"
                    cy="70"
                    r="8"
                    fill="#10b981"
                    className="drop-shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: 'spring' }}
                  />
                  <text x="360" y="48" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="17">
                    Strong early results
                  </text>
                </g>

                {/* Point 3: Markets shifted */}
                <g>
                  <motion.circle
                    cx="640"
                    cy="145"
                    r="8"
                    fill="#f97316"
                    className="drop-shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring' }}
                  />
                  <text x="655" y="127" textAnchor="start" fill="#000" fontWeight="bold" fontSize="17">
                    Markets shifted
                  </text>
                </g>

                {/* Point 4: Performance broke down */}
                <g>
                  <motion.circle
                    cx="870"
                    cy="210"
                    r="8"
                    fill="#ea580c"
                    className="drop-shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: 'spring' }}
                  />
                  <text x="850" y="236" textAnchor="end" fill="#000" fontWeight="bold" fontSize="17">
                    Performance broke down
                  </text>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Bottom Takeaway Box */}
          <motion.div
            className="bg-black text-white p-8 max-w-7xl mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Static strategies <span className="font-bold">cannot adapt to dynamic markets.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
              } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
