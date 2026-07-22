'use client';

import { motion } from 'framer-motion';
import { CreditCard, Handshake, Server, BarChart3 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 7;

const nowStreams = [
  {
    icon: CreditCard,
    title: 'Trader subscriptions',
    body: 'Trader $25 / Pro $99 / Elite $200 per month. Pro is the core monetization layer.',
  },
  {
    icon: Handshake,
    title: 'Broker partnerships',
    body: 'Piloting with Dupoin — CPA, revenue-share, and distribution agreements.',
  },
];

const nextStreams = [
  {
    icon: Server,
    title: 'Software licensing',
    body: 'Decision intelligence for brokers, academies, and trading communities.',
  },
  {
    icon: BarChart3,
    title: 'Market intelligence',
    body: 'Anonymous behavioral insights and institutional analytics.',
  },
];

export default function Slide8() {
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
            Business Model
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Multiple recurring revenue streams.
          </motion.p>

          <div className="grid grid-cols-2 gap-12 max-w-7xl mb-8">
            <div>
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                Now
              </motion.p>
              <div className="flex flex-col gap-6">
                {nowStreams.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      className="border-2 border-gray-200 hover:border-black transition-colors p-7 group h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    >
                      <div className="flex gap-5 h-full">
                        <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-gray-700 transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-black mb-2 leading-tight">{s.title}</h3>
                          <p className="text-lg text-gray-600 font-light leading-snug">{s.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                Next
              </motion.p>
              <div className="flex flex-col gap-6">
                {nextStreams.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      className="border-2 border-gray-200 hover:border-black transition-colors p-7 group h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    >
                      <div className="flex gap-5 h-full">
                        <div className="w-14 h-14 bg-white text-black border-2 border-black flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-black mb-2 leading-tight">{s.title}</h3>
                          <p className="text-lg text-gray-600 font-light leading-snug">{s.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Existing platforms help traders execute.{' '}
              <span className="font-bold">VibeTrader helps them make better decisions.</span>
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
