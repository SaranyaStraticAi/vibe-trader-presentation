'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 8;

const fundsAllocation = [
  { percent: '40%', category: 'PRODUCT & AI', detail: 'Decision intelligence & core algorithms' },
  { percent: '30%', category: 'SALES & PARTNERSHIPS', detail: 'Broker & academy channel expansion' },
  { percent: '20%', category: 'ENGINEERING', detail: 'Infrastructure, MT4/MT5 & mobile scale' },
  { percent: '10%', category: 'OPERATIONS', detail: 'Legal, compliance & administration' },
];

const milestones = [
  'Commercial broker partnerships',
  'Recurring revenue growth',
  'Mobile app launch',
  'Enterprise licensing',
];

export default function Slide9() {
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
            Funding the Next Stage
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-10 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Raising <span className="font-bold text-black">$1M Pre-Seed</span> to accelerate commercialization.
          </motion.p>

          {/* 4 Allocation Pillars Grid */}
          <div className="grid grid-cols-4 gap-6 w-full max-w-[1450px] mb-8">
            {fundsAllocation.map((item, i) => (
              <motion.div
                key={item.category}
                className="border-2 border-gray-200 p-6 rounded-lg bg-white group hover:border-black transition-colors flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div>
                  <div className="text-5xl font-black text-black mb-2 tracking-tight">
                    {item.percent}
                  </div>
                  <span className="text-[10px] font-mono font-black tracking-[0.2em] bg-black text-white px-2.5 py-1 uppercase mb-4 inline-block">
                    {item.category}
                  </span>
                  <p className="text-xl text-gray-600 font-light leading-snug">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 18-Month Milestones Line */}
          <motion.div
            className="border-2 border-gray-100 bg-gray-50 p-6 rounded-lg w-full max-w-[1450px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="text-xs font-mono font-black tracking-[0.2em] text-gray-400 uppercase mb-3">
              18-MONTH MILESTONES
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-black">
              {milestones.map((ms, j) => (
                <div key={j} className="flex items-center gap-3">
                  {j > 0 && <span className="text-gray-300">·</span>}
                  <span>{ms}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Capital converts early validation into commercial scale.
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

