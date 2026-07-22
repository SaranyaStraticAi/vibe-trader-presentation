'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 10;

const traditional = [
  'Execute Trades (MT4 / MT5 • Robinhood)',
  'Analyze Markets (TradingView)',
  'Copy Strategies (eToro • DupliTrade)',
  'Track Performance (Myfxbook)',
  'General AI (OpenAI • Claude)',
];

const vibeTrader = [
  'Learn Decisions',
  'Personalized Intelligence',
  'Adaptive Decision Support',
  'Continuous Optimization',
  'Trader Decision Memory',
];

const moat = [
  { title: 'Decision Memory', body: 'Learns from every interaction.' },
  { title: 'Personalized Intelligence', body: 'Adapts to every trader.' },
  { title: 'Unified Workflow', body: 'One connected platform.' },
  { title: 'Network Intelligence', body: 'Improves with every user.' },
];

export default function Slide11() {
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
            Competitive Advantage
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The decision intelligence layer for modern trading.
          </motion.p>

          <div className="grid grid-cols-2 gap-10 max-w-7xl mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-4">
                Traditional Platforms
              </p>
              <ul className="space-y-3">
                {traditional.map((t, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-xl text-gray-700 font-light leading-snug border-b border-gray-200 pb-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-2.5 inline-block h-2 w-2 shrink-0 bg-gray-400" />
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
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-4">
                VibeTrader
              </p>
              <ul className="space-y-3">
                {vibeTrader.map((v, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-xl text-black font-bold leading-snug border-b border-black pb-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-2.5 inline-block h-2 w-2 shrink-0 bg-black" />
                    <span>{v}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-4">Why we win</p>
            <div className="grid grid-cols-4 gap-4 max-w-7xl">
              {moat.map((m, i) => (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.08, duration: 0.4 }}
                >
                  <p className="text-lg font-bold text-black mb-1 leading-tight">{m.title}</p>
                  <p className="text-sm text-gray-600 font-light leading-snug">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              AI models evolve.{' '}
              <span className="font-bold">Decision intelligence compounds.</span>
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
