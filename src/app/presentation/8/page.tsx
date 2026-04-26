'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const outcomes = [
  'Project shape — A, B, or C — and Phase 1 scope',
  'Investment range and closing timeline',
  'Customer relationship outline',
  "Ben's role and day-to-day rhythm",
  'Your decision process and timeline',
];

export default function Slide8() {
  const { prevSlide, goToFirst } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
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
            className="w-16 h-1.5 bg-black mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-7xl font-black text-black mb-4 tracking-tighter leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What we&apos;d love<br />to leave with
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-12 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            By end of day, ideally we&apos;d be aligned on:
          </motion.p>

          <ul className="space-y-5 mb-14 max-w-5xl">
            {outcomes.map((o, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-5 text-2xl text-gray-800 font-light leading-snug"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <span className="mt-3 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                <span>{o}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="bg-black text-white p-10 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="text-3xl font-light leading-snug">
              We&apos;ll send a written summary{' '}
              <span className="font-bold">within 48 hours</span> and propose a follow-up call on
              specific terms.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 7 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={goToFirst}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Back to start"
      >
        ↺
      </button>
    </div>
  );
}
