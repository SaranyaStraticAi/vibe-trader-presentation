'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { Building2, GraduationCap, Users } from 'lucide-react';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 3;

const customerSegments = [
  {
    icon: Building2,
    badge: 'BROKERAGES',
    benefit: 'Increase engagement and trader retention',
  },
  {
    icon: GraduationCap,
    badge: 'TRADING ACADEMIES',
    benefit: 'Scale education with AI-powered tools',
  },
  {
    icon: Users,
    badge: 'RETAIL TRADERS',
    benefit: 'Make better, more disciplined decisions',
  },
];

const metrics = [
  { value: '1,800+', label: 'REGISTERED TRADERS' },
  { value: '2 LIVE', label: 'B2B PILOTS' },
  { value: '7+', label: 'BROKER PIPELINE' },
];

export default function Slide4() {
  const { nextSlide, prevSlide } = useSlideNavigation();

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

          <motion.h1
            className="text-6xl font-black text-black mb-4 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Customers & Validation
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 mb-8 font-light max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Serving retail traders, broker partners, and trading academies worldwide.
          </motion.p>

          {/* 3 Customer Cards */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1450px] mb-8">
            {customerSegments.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.badge}
                  className="border-2 border-gray-200 p-8 rounded-lg bg-white group hover:border-black transition-colors flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-black text-white rounded-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-black tracking-[0.2em] text-gray-400 uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-3xl font-black text-black leading-snug">
                      {item.benefit}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Validation Metrics Banner */}
          <motion.div
            className="border-2 border-gray-100 bg-gray-50 p-8 rounded-lg w-full max-w-[1450px] mb-8 grid grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-5xl font-black text-black tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-mono tracking-widest text-gray-500 font-bold uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 w-full max-w-[1450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Validated with traders, brokers, and education partners.
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

