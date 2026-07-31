'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 12;

const ceo = [
  { text: 'Product strategy, partnerships, and fundraising', style: { paddingBottom: '20px' } },
  { text: 'Built broker and academy partnerships', style: { paddingBottom: '20px' } },
  { text: '1,800+ traders · 2 live B2B pilots', style: { paddingBottom: '0px' } },
];

const cto = [
  { text: 'Former Amazon engineer', style: { paddingBottom: '20px' } },
  { text: '15+ years in AI and cloud infrastructure', style: { paddingBottom: '20px' } },
  { text: 'Built VibeTrader\'s AI platform and MT4/MT5 integrations', style: { paddingBottom: '0px' } },
];

const advisor = [
  { text: '50+ years combined Forex experience', style: { paddingBottom: '20px' } },
  { text: 'Built alongside active retail traders', style: { paddingBottom: '20px' } },
  { text: 'Continuous real-market validation', style: { paddingBottom: '0px' } },
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
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1450px] mb-2">
            {/* CEO Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Photo Placeholder */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '50%', alignSelf: 'center' }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-black">Photo Placeholder</span>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Saranya Amirthalingam
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Co-Founder & CEO</p>
              <ul className="w-full mt-2">
                {ceo.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTO Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              {/* Photo Placeholder */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '50%', alignSelf: 'center' }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-black">Photo Placeholder</span>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Nithyakumaran Gnanasekar
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Co-Founder & CTO</p>
              <ul className="w-full mt-2">
                {cto.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Advisor / Domain Expert Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* Visual Placeholder */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '50%', alignSelf: 'center' }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-black">Market Validation</span>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Trading Expertise
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Forex & Market Validation</p>
              <ul className="w-full mt-2">
                {advisor.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Simplified Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px] mt-6 mb-6"
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
