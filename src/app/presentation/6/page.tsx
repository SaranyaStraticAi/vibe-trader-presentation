'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 5;

const revenueEngines = [
  'Trader subscriptions ($25 / $99 / $200 mo)',
  'Broker B2B2C partnerships & volume share',
  'Enterprise white-label & API licensing',
];

const financialOutlook = [
  '$15M+ Year 5 projected ARR',
  '~$25K capital-efficient monthly burn',
  'High-margin software unit economics',
  'Break-even targeted as recurring revenue scales',
];

export default function Slide6() {
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
            Recurring Revenue Business
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-10 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A high-margin SaaS model built for predictable growth and capital efficiency.
          </motion.p>

          {/* 50/50 Split Grid */}
          <div className="grid grid-cols-2 gap-10 w-full max-w-[1450px] mb-10">
            {/* Left: REVENUE ENGINES */}
            <motion.div
              className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-xs font-mono font-black tracking-[0.2em] bg-black text-white px-3 py-1 uppercase mb-6 inline-block">
                REVENUE ENGINES
              </span>
              <h3 className="text-3xl font-black text-black mb-6">Diversified Monetization</h3>
              <ul className="space-y-4 text-2xl text-gray-700 font-light">
                {revenueEngines.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: FINANCIAL OUTLOOK */}
            <motion.div
              className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-xs font-mono font-black tracking-[0.2em] bg-gray-200 text-black px-3 py-1 uppercase mb-6 inline-block">
                FINANCIAL OUTLOOK
              </span>
              <h3 className="text-3xl font-black text-black mb-6">Capital-Efficient Scale</h3>
              <ul className="space-y-4 text-2xl text-gray-700 font-light">
                {financialOutlook.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Multiple recurring revenue streams. Capital-efficient execution.
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

