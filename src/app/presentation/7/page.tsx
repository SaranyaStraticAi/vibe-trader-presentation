'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const streams = [
  {
    n: '1',
    title: 'Strategic Investment',
    body:
      'MarketGauge as a strategic investor in our next round. Terms shaped by partnership scope.',
  },
  {
    n: '2',
    title: 'Engineering Engagement',
    body:
      'The migration, in phases. Phase 1 proves value in 60–90 days with defined deliverables.',
  },
  {
    n: '3',
    title: 'Customer Relationship',
    body:
      'Once running, MarketGauge as a platform customer — MGAM, MG Pro, or both.',
  },
];

const plus = [
  'MG Pro strategies as templates (rev share)',
  "Co-marketing via Mish's media",
  'Advisory roles — Keith and Geoff',
  'Ben joining in a defined capacity',
];

export default function Slide7() {
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
            A possible structure
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Three connected — but separate — commercial conversations.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {streams.map((s, i) => (
              <motion.div
                key={i}
                className="border-2 border-gray-200 hover:border-black transition-colors p-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              >
                <div className="text-8xl font-black text-black mb-4 leading-none">{s.n}</div>
                <h3 className="text-3xl font-bold text-black mb-3 leading-tight">{s.title}</h3>
                <p className="text-xl text-gray-700 font-light leading-snug">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-50 border-2 border-gray-200 p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-xl uppercase tracking-[0.3em] text-gray-500 mb-5">Plus</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {plus.map((p, i) => (
                <div key={i} className="flex items-start gap-4 text-2xl text-gray-800 font-light">
                  <span className="mt-3 inline-block h-2 w-2 shrink-0 bg-black" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 6 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
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
