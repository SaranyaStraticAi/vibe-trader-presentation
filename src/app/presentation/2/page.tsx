'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { Activity, Cpu, ShieldCheck, UserCheck } from 'lucide-react';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 1;

const pillars = [
  {
    icon: Activity,
    category: 'MARKET INTELLIGENCE',
    description: 'Real-time market context ',
  },
  {
    icon: Cpu,
    category: 'STRATEGY INTELLIGENCE',
    description: 'Build, test, and adapt strategies',
  },
  {
    icon: ShieldCheck,
    category: 'RISK INTELLIGENCE',
    description: 'Personalized risk guidance',
  },
  {
    icon: UserCheck,
    category: 'TRADER INTELLIGENCE',
    description: 'Behavioral insights and AI journal',
  },
];

export default function Slide2() {
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
            className="text-6xl font-black text-black mb-4 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            AI Decision Intelligence
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-10 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            VibeTrader continuously learns from markets, strategies, and trader behavior.
          </motion.p>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-[1450px] mb-10">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.category}
                  className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-black text-white rounded-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-black tracking-[0.2em] text-gray-400 uppercase">
                        {pillar.category}
                      </span>
                    </div>
                    <p className="text-3xl font-black text-black leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Built. Live. Used by traders today.
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
        className="absolute left-12 bottom-6 text-xl font-bold text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-12 bottom-6 text-xl font-bold text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}

