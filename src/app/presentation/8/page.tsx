'use client';

import { motion } from 'framer-motion';
import { Users, Activity, Handshake } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 7;

const stats = [
  {
    icon: Users,
    metric: '782',
    label: 'Total users onboarded',
    detail: '38 new sign-ups last week · 22 weekly active sign-ins · consistent upward trend.',
  },
  {
    icon: Activity,
    metric: '3 modules',
    label: 'Strongest engagement',
    detail:
      'Strategy Builder, AI Insights, Trading Journal — users actively creating, testing, iterating.',
  },
  {
    icon: Handshake,
    metric: '7+ brokers',
    label: 'Partnership pipeline',
    detail:
      'Doo Prime · Exness · TMGM · Tickmill · PU Prime · AvaTrade · Libertex. Acuity Trading revenue-share signed.',
  },
];

const infra = [
  'MT4 / MT5 integrations live',
  'Multi-language: English · Spanish · Arabic',
  'Real-time processing infrastructure deployed',
  'Trading LATAM academies partnership progressing',
];

export default function Slide8() {
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
            Early traction
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Engagement and ecosystem demand, validated.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-5xl font-black text-black mb-2 leading-none tracking-tighter">
                    {s.metric}
                  </p>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-3">{s.label}</p>
                  <p className="text-lg text-gray-700 font-light leading-snug">{s.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-lg uppercase tracking-widest text-gray-400 mb-4">
              Product & infrastructure ready
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {infra.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-xl font-light">
                  <span className="inline-block h-2 w-2 shrink-0 bg-white" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-300 italic mt-5">
              Transitioning from engagement → monetization → scale.
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
