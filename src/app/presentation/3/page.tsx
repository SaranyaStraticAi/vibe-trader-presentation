'use client';

import { motion } from 'framer-motion';
import { Calendar, BarChart3, Megaphone, GitBranch, Network } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const observations = [
  {
    icon: Calendar,
    title: '40+ years of methodology',
    body: 'A working framework, currently on TradeStation.',
  },
  {
    icon: BarChart3,
    title: 'Floor-tested statistical models',
    body: 'AI optimization is the natural next layer.',
  },
  {
    icon: Megaphone,
    title: 'Distribution and credibility',
    body: "Mish's media, MG Pro's RIA channel, decades of relationships.",
  },
  {
    icon: GitBranch,
    title: 'A specific project Keith named',
    body: 'Migrate the framework off TradeStation; AI optimization across timeframes.',
  },
  {
    icon: Network,
    title: 'Multiple venues for collaboration',
    body: 'Beyond the migration itself.',
  },
];

export default function Slide3() {
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
            How we see MarketGauge
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From conversations with Jack, Ben, and your team.
          </motion.p>

          <div className="space-y-4 max-w-7xl">
            {observations.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={i}
                  className="flex gap-6 p-6 border-2 border-gray-200 hover:border-black transition-colors group items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-gray-700 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-black text-3xl leading-tight">{o.title}</p>
                    <p className="text-xl text-gray-600 font-light mt-2">{o.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 2 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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
