'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 14;

const streams = [
  {
    n: '1',
    label: 'Achieved',
    items: [
      'Product built and live',
      'MT4 / MT5 integrations complete',
      '782+ users onboarded',
      'Trading LATAM partnership progressing',
      'Acuity Trading revenue-share signed',
    ],
  },
  {
    n: '2',
    label: 'Current financial profile',
    items: [
      'Burn: ~$15K / month',
      'Lean, founder-led execution',
      'Infrastructure built efficiently pre-funding',
    ],
  },
  {
    n: '3',
    label: 'Post-funding operating plan',
    items: [
      'Initial burn: ~$55K / month',
      'Infrastructure & trading integrations',
      'GTM validation, engineering, broker partnerships',
    ],
  },
];

const targets = [
  '5,000+ active users',
  'Monetization rollout at scale',
  'Expanded broker integrations',
  'Multi-market expansion',
  'Strong recurring subscription revenue',
];

export default function Slide15() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden bg-white"
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
            className="text-6xl font-black text-black mb-3 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Milestones & financials
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            What we&apos;ve already built, and how we&apos;ll operate with the next round.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {streams.map((s, i) => (
              <motion.div
                key={i}
                className="border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              >
                <div className="text-7xl font-black text-black mb-2 leading-none">{s.n}</div>
                <p className="text-lg uppercase tracking-widest text-gray-500 mb-4">{s.label}</p>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-lg text-gray-700 font-light leading-snug"
                    >
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-black" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-50 border-2 border-gray-200 p-6 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-lg uppercase tracking-[0.3em] text-gray-500 mb-4">
              18–24 month targets
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {targets.map((t, i) => (
                <div key={i} className="flex items-start gap-3 text-xl text-gray-800 font-light">
                  <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-black" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
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
