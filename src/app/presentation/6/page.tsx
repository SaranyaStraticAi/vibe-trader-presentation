'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 5;

const steps = [
  {
    n: '1',
    title: 'Build or connect a strategy',
    body: 'Create strategies natively or connect existing workflows via MT4 / MT5 integrations.',
  },
  {
    n: '2',
    title: 'Analyze trading behavior',
    body: 'Track strategy performance, market conditions, behavioral patterns, and risk exposure.',
  },
  {
    n: '3',
    title: 'Generate real-time insights',
    body: 'AI surfaces weaknesses, optimization paths, and adaptations to changing conditions.',
  },
  {
    n: '4',
    title: 'Learn continuously',
    body: 'Every trade, strategy, and outcome feeds the system. It compounds with use.',
  },
];

const modules = [
  'Strategy Builder',
  'AI Trading Journal',
  'AI Insights',
  'MT4 / MT5 integrations',
];

export default function Slide6() {
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
            Live product workflow
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From strategy creation to continuous optimization.
          </motion.p>

          <div className="grid grid-cols-4 gap-5 mb-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="border-2 border-gray-200 hover:border-black transition-colors p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-7xl font-black text-black mb-3 leading-none">{s.n}</div>
                <h3 className="text-2xl font-bold text-black mb-2 leading-tight">{s.title}</h3>
                <p className="text-lg text-gray-700 font-light leading-snug">{s.body}</p>
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
              Product modules live today
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {modules.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-xl text-gray-800 font-light">
                  <span className="inline-block h-2 w-2 shrink-0 bg-black" />
                  <span>{m}</span>
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
