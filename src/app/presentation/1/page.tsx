'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 1;

const forTraders = [
  'Strategies stop working as markets change',
  'No clarity on what works in current conditions',
  'Emotional decision-making'
];

const forBrokers = [
  'High trader churn',
  'Limited visibility into trader behavior',
  'Difficult to sustain engagement',
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

          <div className="flex items-center justify-between max-w-7xl mb-3">
            <motion.h1
              className="text-6xl font-black text-black tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              The Decision Gap
            </motion.h1>

            <motion.span
              className="text-xl font-mono text-gray-400 font-bold uppercase tracking-widest"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              VibeTrader · AI Decision Intelligence
            </motion.span>
          </div>

          <motion.p
            className="text-3xl text-gray-600 mb-16 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Trading has never had more tools — yet most traders still lose. Execution is solved. Decision-making is not.
          </motion.p>

          <div className="grid grid-cols-2 gap-24 max-w-7xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-xl uppercase tracking-[0.25em] text-gray-500 mb-8">
                For Traders
              </p>
              <ul className="space-y-8">
                {forTraders.map((t, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 text-2xl text-gray-800 font-light leading-snug"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-xl uppercase tracking-[0.25em] text-gray-500 mb-8">
                For Brokers
              </p>
              <ul className="space-y-8">
                {forBrokers.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 text-2xl text-gray-800 font-light leading-snug"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Better decisions ={' '}
              <span className="font-bold">better trader retention + higher trading activity</span>
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