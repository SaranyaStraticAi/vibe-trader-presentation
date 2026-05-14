'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 13;

const ceo = [
  '5+ years managing operations, financial planning, logistics, and strategic execution',
  'Built and ran operational systems in dynamic, decision-heavy environments',
  'Leads product vision, partnerships, GTM, fundraising, and ecosystem development',
  'Grew the platform to 800+ trader participants and seeded broker / academy relationships',
];

const cto = [
  'Former Amazon engineer with ~6 years building large-scale software systems',
  '15+ years of software engineering across backend systems and infrastructure',
  'Built VibeTrader’s core trading stack, MT4 / MT5 integrations, and real-time processing',
  'Leads AI systems, strategy workflows, and the scalable intelligence layer',
];

const traderFeedback = [
  'Veteran traders with decades of market exposure',
  'Gen-Z traders with 2+ years of active trading behavior',
  'Strategy-focused traders running workflows inside the platform',
];

export default function Slide14() {
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
            className="text-6xl font-black text-black mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Team
          </motion.h1>

          <div className="grid grid-cols-2 gap-10 mb-8 max-w-7xl">
            <motion.div
              className="border-2 border-gray-200 p-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-2">CEO</p>
              <h3 className="text-3xl font-bold text-black mb-5 leading-tight">
                Saranya Amirthalingam
              </h3>
              <ul className="space-y-3">
                {ceo.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-lg text-gray-700 font-light leading-snug"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
                  >
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-black" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="border-2 border-gray-200 p-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-2">CTO</p>
              <h3 className="text-3xl font-bold text-black mb-5 leading-tight">Nithyakumaran</h3>
              <ul className="space-y-3">
                {cto.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-lg text-gray-700 font-light leading-snug"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
                  >
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-black" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 border-2 border-gray-200 p-6 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-lg uppercase tracking-[0.3em] text-gray-500 mb-4">
              Built with feedback from
            </p>
            <div className="grid grid-cols-3 gap-x-10 gap-y-3">
              {traderFeedback.map((t, i) => (
                <div key={i} className="flex items-start gap-3 text-lg text-gray-800 font-light">
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
