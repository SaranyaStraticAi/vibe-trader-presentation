'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 13;

const cards = [
  {
    category: 'PRODUCT',
    title: 'Built & Live',
    points: ['AI decision intelligence', 'Live trading infrastructure'],
  },
  {
    category: 'MARKET',
    title: 'Early Validation',
    points: ['Trader adoption', 'Live partner pilots'],
  },
  {
    category: 'EFFICIENCY',
    title: '~$25K Monthly Burn',
    points: ['Lean execution', 'Capital efficient'],
  },
  {
    category: 'DISTRIBUTION',
    title: 'Ready to Scale',
    points: ['Direct acquisition', 'Broker & academy channels'],
  },
];

export default function Slide14() {
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
            Why Invest Now
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From Validation to Scale
          </motion.p>

          <div className="grid grid-cols-4 gap-6 mb-8 w-full max-w-[1500px]">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                className="border-2 border-gray-200 hover:border-black transition-colors p-8 rounded-lg group bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-8xl font-black text-black mb-3 leading-none">{i + 1}</div>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-3">{c.category}</p>
                <h3 className="text-2xl font-black text-black leading-tight mb-4 min-h-[40px] flex items-center">
                  {c.title}
                </h3>
                <ul className="space-y-3">
                  {c.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-xl text-gray-700 font-light leading-relaxed"
                    >
                      <span className="mt-3 inline-block h-2 w-2 shrink-0 bg-black" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Built lean. Validated in market. Ready to scale.
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
