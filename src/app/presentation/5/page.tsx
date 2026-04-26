'use client';

import { motion } from 'framer-motion';
import { Workflow, Brain, TestTube2, Plug, Library } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const capabilities = [
  {
    icon: Workflow,
    title: 'Strategy execution & optimization',
    body: 'Already running for forex. Built to extend.',
  },
  {
    icon: Brain,
    title: 'AI strategy analyzer',
    body: 'Context-fit, regime detection, parameter sensitivity.',
  },
  {
    icon: TestTube2,
    title: 'Backtesting framework',
    body: 'Bar-based, multi-timeframe, sandboxed Python.',
  },
  {
    icon: Plug,
    title: 'Broker integration layer',
    body: 'MetaAPI today; TradeStation, SnapTrade, direct integrations next.',
  },
  {
    icon: Library,
    title: 'Strategy library & marketplace',
    body: 'Versioning, templates, community patterns.',
  },
];

export default function Slide5() {
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
            Where our platform fits
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Infrastructure that maps directly to this project.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-2xl font-bold text-black mb-2 leading-tight">{c.title}</p>
                  <p className="text-xl text-gray-600 font-light leading-snug">{c.body}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-10 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-400 mb-2">What this means</p>
            <p className="text-3xl font-light leading-snug">
              The migration is an extension of what we&apos;re already doing —{' '}
              <span className="font-bold">not a rebuild.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 4 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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
