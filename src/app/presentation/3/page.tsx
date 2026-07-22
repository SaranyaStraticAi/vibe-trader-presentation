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
      className="relative flex h-full w-full items-start pt-20 overflow-hidden bg-white"
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
            What we learned?
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            &ldquo;There is no permanent winning strategy.&rdquo;
          </motion.p>

          <motion.div
            className="mb-10 max-w-7xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-xl uppercase tracking-[0.25em] text-gray-500 mb-6">
              Our story
            </p>
            <div className="relative flex items-start justify-between">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300" />
              {story.map((s, i) => (
                <motion.div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center px-2"
                  style={{ width: `${100 / story.length}%` }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  <span
                    className={`mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${i === story.length - 1
                      ? 'bg-black text-white'
                      : 'bg-white border-2 border-black text-black'
                      }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xl text-gray-800 font-light leading-snug">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="max-w-7xl mb-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-xl uppercase tracking-[0.25em] text-gray-500 mb-5">
                A new category: decision intelligence
              </p>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                {insight.map((u, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4 text-2xl text-gray-800 font-light leading-snug"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="mt-3 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{u}</span>
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
            <p className="text-lg uppercase tracking-widest text-gray-400 mb-2">
              Bottom takeaway
            </p>
            <p className="text-2xl font-light leading-snug">
              Static strategies cannot adapt to dynamic markets.
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
