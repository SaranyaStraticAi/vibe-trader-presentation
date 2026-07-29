'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 12;

const ceo = [
  'Leads product strategy, go-to-market, partnerships, and fundraising',
  '5+ years leading business operations, strategy, finance, and growth',
  'Built VibeTrader\'s early trader community and broker/academy relationships',
];

const cto = [
  'Former Amazon engineer',
  '15+ years building software, cloud infrastructure, and AI systems',
  'Architected VibeTrader\'s AI platform, MT4/MT5 integrations, and real-time trading infrastructure',
];

const advisor = [
  'Tony Sotelo — 39+ years of Forex market experience',
  'Built and refined alongside a community of active retail traders',
  'Provides direct access and deep insight into target market needs',
];

export default function Slide13() {
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
            className="text-6xl font-black text-black mb-10 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Leadership Team
          </motion.h1>

          {/* 3 Columns Grid for Team Cards */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1450px] mb-8">
            {/* CEO Card */}
            <motion.div
              className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-3xl font-black text-black leading-tight mb-2">
                Saranya Amirthalingam
              </h3>
              <p className="text-2xl text-gray-500 font-bold mb-6">Co-Founder & CEO</p>
              <ul className="space-y-3">
                {ceo.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTO Card */}
            <motion.div
              className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <h3 className="text-3xl font-black text-black leading-tight mb-2">
                Nithyakumaran Gnanasekar
              </h3>
              <p className="text-2xl text-gray-500 font-bold mb-6">Co-Founder & CTO</p>
              <ul className="space-y-3">
                {cto.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Advisor / Domain Expert Card */}
            <motion.div
              className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-3xl font-black text-black leading-tight mb-2">
                Active Traders
              </h3>
              <p className="text-2xl text-gray-500 font-bold mb-6">Forex & Market Expertise</p>
              <ul className="space-y-3">
                {advisor.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Simplified Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px] mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Deep AI engineering + real trading experience.
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
