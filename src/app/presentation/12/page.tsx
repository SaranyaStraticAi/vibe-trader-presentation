'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 11;

const competitors = [
  { name: 'MetaTrader 4 / 5', focus: 'Trade execution infrastructure', signal: 'Millions of traders globally' },
  { name: 'TradingView', focus: 'Charting & indicators', signal: '100M+ users' },
  { name: 'eToro', focus: 'Social investing & copy trading', signal: '40M+ registered users' },
  { name: 'Myfxbook', focus: 'Forex analytics & tracking', signal: 'Large forex retail base' },
  { name: 'NinjaTrader', focus: 'Futures trading platform', signal: '1.9M+ users' },
];

const moat = [
  { title: 'Integrated workflow', body: 'Strategy, journaling, analytics, optimization — one platform.' },
  { title: 'Proprietary behavioral dataset', body: 'Trader behavior + strategy-performance mapping that compounds.' },
  { title: 'Broker & academy distribution', body: 'Embedded relationships create scalable acquisition channels.' },
  { title: 'Compounding data advantage', body: 'The system improves as trading activity grows.' },
];

export default function Slide12() {
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
            Competition & moat
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 mb-6 font-light max-w-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Existing platforms optimize execution, charting, and copy trading. Our position: the
            <span className="font-bold text-black"> intelligence infrastructure layer</span>.
          </motion.p>

          <div className="grid grid-cols-2 gap-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-4">
                Existing landscape
              </p>
              <div className="space-y-2">
                {competitors.map((c, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-[1.4fr_1.6fr_1fr] gap-3 items-center border-b border-gray-200 py-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <p className="text-lg font-bold text-black leading-tight">{c.name}</p>
                    <p className="text-sm text-gray-600 font-light leading-snug">{c.focus}</p>
                    <p className="text-sm text-gray-500 font-light italic leading-snug">{c.signal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.25em] text-gray-500 mb-4">
                Why we&apos;re hard to replicate
              </p>
              <div className="grid grid-cols-2 gap-3">
                {moat.map((m, i) => (
                  <motion.div
                    key={i}
                    className="border-2 border-gray-200 hover:border-black transition-colors p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                  >
                    <p className="text-lg font-bold text-black mb-1 leading-tight">{m.title}</p>
                    <p className="text-sm text-gray-600 font-light leading-snug">{m.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-2xl text-gray-600 italic font-light mt-8 max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Not an AI feature — a continuously improving trading intelligence system.
          </motion.p>
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
