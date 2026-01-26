'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import dynamic from 'next/dynamic';

// Dynamically import the DataFlywheel component to avoid SSR issues
// Dynamically import the DataFlywheel component to avoid SSR issues
const DataFlywheel = dynamic(() => import('@/components/DataFlywheelMagic'), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading flywheel...</div>
    </div>
  ),
});

export default function Slide5() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-screen w-screen items-center overflow-hidden bg-white">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-black mb-8"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-6xl md:text-7xl font-black text-black mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Moat:<br />Why Every Trade<br />Makes Us Smarter
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-16 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Self-reinforcing data advantage that compounds over time
          </motion.p>

          {/* Data Flywheel Visualization */}
          <div className="relative">
            <DataFlywheel />

            {/* Data usage points */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="bg-gray-50 p-4 border-2 border-gray-300">
                <p className="font-bold text-black mb-1">Marketing & Sales</p>
                <p className="text-sm text-gray-600">Target right customers</p>
              </div>
              <div className="bg-gray-50 p-4 border-2 border-gray-300">
                <p className="font-bold text-black mb-1">Data as a Service</p>
                <p className="text-sm text-gray-600">Monetize insights</p>
              </div>
              <div className="bg-gray-50 p-4 border-2 border-gray-300">
                <p className="font-bold text-black mb-1">New Technologies</p>
                <p className="text-sm text-gray-600">Build better products</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 4
                ? 'w-8 bg-black'
                : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
          />
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}