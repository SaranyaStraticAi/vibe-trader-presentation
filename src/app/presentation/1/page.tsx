'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;

export default function Slide1() {
  const { nextSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white cursor-pointer"
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

          <div className="flex items-center justify-between max-w-[1450px] mb-8">
            <motion.h1
              className="text-6xl font-black text-black tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              The Decision Gap
            </motion.h1>
            <span className="text-xl font-mono text-gray-400 font-bold uppercase tracking-widest">
              VibeTrader · AI Decision Intelligence
            </span>
          </div>

          {/* Lead Statement */}
          <motion.p
            className="text-3xl text-gray-800 font-light max-w-4xl leading-snug mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Trading platforms help traders execute trades. <br />
            <span className="font-bold text-black">They do not help traders consistently make better decisions.</span>
          </motion.p>

          {/* 2 Columns: TRADERS vs BROKERS */}
          <div className="grid grid-cols-2 gap-10 w-full max-w-[1450px] mb-10">
            {/* TRADERS CARD */}
            <motion.div
              className="border-2 border-gray-200 p-10 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono font-black tracking-[0.2em] bg-black text-white px-3 py-1 uppercase">
                  TRADERS
                </span>
                <h3 className="text-3xl font-black text-black">The Retail Struggle</h3>
              </div>
              <ul className="space-y-4 text-2xl text-gray-700 font-light">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>Markets change dynamically</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>Strategies stop working without notice</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>Emotion & bias drive poor decision quality</span>
                </li>
              </ul>
            </motion.div>

            {/* BROKERS CARD */}
            <motion.div
              className="border-2 border-gray-200 p-10 rounded-lg bg-white group hover:border-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono font-black tracking-[0.2em] bg-gray-200 text-black px-3 py-1 uppercase">
                  BROKERS
                </span>
                <h3 className="text-3xl font-black text-black">The Institutional Gap</h3>
              </div>
              <ul className="space-y-4 text-2xl text-gray-700 font-light">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>High trader churn & account burn</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>Low long-term trader engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black shrink-0" />
                  <span>Limited real-time trader behavioral insight</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              VibeTrader closes the gap between trade execution and decision quality.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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
          nextSlide();
        }}
        className="absolute right-12 bottom-6 text-xl font-bold text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}

