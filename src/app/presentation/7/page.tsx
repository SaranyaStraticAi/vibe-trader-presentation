'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 6;

const competitors = [
  {
    badge: 'TRADITIONAL PLATFORMS',
    title: 'Execution & Charts',
    points: ['Basic charting & indicators', 'Order execution only', 'No behavioral or risk guidance'],
    accent: 'border-gray-200 bg-white text-gray-700',
  },
  {
    badge: 'AUTOMATION TOOLS',
    title: 'Static Rules & Bots',
    points: ['Rigid expert advisors', 'Fail when market regimes shift', 'No adaptive learning loop'],
    accent: 'border-gray-200 bg-white text-gray-700',
  },
  {
    badge: 'VIBETRADER',
    title: 'Adaptive Decision Intelligence',
    points: [
      'Real-time adaptive market guidance',
      'Personalized risk & behavioral AI',
      'Strategy + risk + behavior in one platform',
    ],
    accent: 'border-black bg-black text-white',
  },
];

export default function Slide7() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white cursor-pointer"
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
            Competitive Advantage
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-10 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Moving from passive charting tools to active AI decision intelligence.
          </motion.p>

          {/* 3 Column Matrix */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1450px] mb-10">
            {competitors.map((comp, i) => (
              <motion.div
                key={comp.badge}
                className={`border-2 p-8 rounded-lg transition-colors flex flex-col justify-between ${comp.accent}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div>
                  <span
                    className={`text-xs font-mono font-black tracking-[0.2em] px-3 py-1 uppercase mb-4 inline-block ${
                      comp.badge === 'VIBETRADER'
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    }`}
                  >
                    {comp.badge}
                  </span>
                  <h3 className="text-3xl font-black mb-6">{comp.title}</h3>
                  <ul className="space-y-4 text-2xl font-light">
                    {comp.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 shrink-0 ${
                            comp.badge === 'VIBETRADER' ? 'bg-white' : 'bg-black'
                          }`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Every interaction strengthens VibeTrader&apos;s intelligence layer.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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

