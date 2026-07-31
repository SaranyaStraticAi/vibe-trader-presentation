'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 9;

export default function Slide10() {
  const { prevSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white">
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
            className="text-6xl font-black text-black mb-4 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Offer & Long-Term Opportunity
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-10 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join us in building the intelligence layer for global retail trading.
          </motion.p>

          {/* Offer & Long Term Path Split Grid */}
          <div className="grid grid-cols-2 gap-10 w-full max-w-[1450px] mb-8">
            {/* OFFER CARD */}
            <motion.div
              className="border-2 border-black p-10 rounded-lg bg-black text-white flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div>
                <span className="text-xs font-mono font-black tracking-[0.2em] bg-white/20 text-white px-3 py-1 uppercase mb-6 inline-block">
                  INVESTMENT OFFER
                </span>
                <div className="text-6xl font-black tracking-tight mb-4">
                  $1M SAFE
                </div>
                <div className="text-3xl font-light text-gray-300 mb-8">
                  $10M Valuation Cap
                </div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-xl text-gray-300 font-light">
                  Capital allocates directly to product scaling, broker integrations, and trader acquisition.
                </p>
              </div>
            </motion.div>

            {/* LONG TERM PATH CARD */}
            <motion.div
              className="border-2 border-gray-200 p-10 rounded-lg bg-white flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div>
                <span className="text-xs font-mono font-black tracking-[0.2em] bg-black text-white px-3 py-1 uppercase mb-6 inline-block">
                  LONG-TERM PATH
                </span>
                <h3 className="text-3xl font-black text-black mb-4">Strategic Exit & Growth</h3>
                <ul className="space-y-4 text-2xl text-gray-700 font-light">
                  <li className="flex items-start gap-3">
                    <span className="h-2.5 w-2.5 bg-black shrink-0 mt-3" />
                    <span>Build the global decision intelligence platform for retail trading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2.5 w-2.5 bg-black shrink-0 mt-3" />
                    <span>Potential strategic acquisition by major brokers, trading platforms, or fintech leaders</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-sm font-mono tracking-widest text-gray-400 font-bold uppercase mb-1">
                  VISION STATEMENT
                </p>
                <p className="text-2xl font-bold text-black">
                  Bring institutional-grade intelligence to every trader.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Banner */}
          <motion.div
            className="border-2 border-gray-200 bg-gray-50 p-6 rounded-lg w-full max-w-[1450px] mb-8 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div>
              <span className="text-2xl font-black text-black">Saranya Amirthalingam</span>
              <span className="text-xl text-gray-500 font-light ml-3">· CEO, VibeTrader</span>
            </div>
            <a
              href="https://vibetrader.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-mono font-bold text-black hover:underline"
            >
              vibetrader.com
            </a>
          </motion.div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Join us in building the intelligence layer for modern trading.
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
        className="absolute left-12 bottom-6 text-xl font-bold text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
    </div>
  );
}

