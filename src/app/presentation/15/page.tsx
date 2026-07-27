'use client';

import { motion } from 'framer-motion';
import { Users, Handshake, Cpu } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 14;

const deployment = [
  {
    icon: Users,
    title: 'Build the Team',
    body: 'Expand engineering, product, customer success, and go-to-market.',
  },
  {
    icon: Handshake,
    title: 'Grow the Business',
    body: 'Expand broker partnerships, trading academies, affiliates, and customer acquisition.',
  },
  {
    icon: Cpu,
    title: 'Advance the Platform',
    body: 'Enhance AI capabilities, infrastructure, security, compliance, and mobile applications.',
  },
];

const outcomes = [
  '5,000+ active users',
  'Commercial broker partnerships',
  'Strong recurring subscription revenue',
  'Expansion beyond Forex',
  'Seed-round readiness',
];

export default function Slide15() {
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
            Funding the Next Stage
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            $1M Pre-Seed
          </motion.p>

          <motion.p
            className="text-xl uppercase tracking-[0.3em] text-gray-500 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Where we&apos;ll invest
          </motion.p>

          <div className="grid grid-cols-3 gap-10 mb-8">
            {deployment.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-10 rounded-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-4 rounded-lg">
                    <Icon className="w-9 h-9" />
                  </div>
                  <p className="text-3xl font-bold text-black mb-3 leading-tight">{d.title}</p>
                  <p className="text-xl text-gray-700 font-light leading-relaxed">{d.body}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-8 w-full mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-2xl font-light leading-snug">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="inline-block h-2.5 w-2.5 shrink-0 bg-white" />
                  <span>{o}</span>
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
