'use client';

import { motion } from 'framer-motion';
import { Database, Brain, Target, Zap } from 'lucide-react';
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

export default function Slide6() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Small accent line */}
            <motion.div
              className="w-12 h-1 bg-black mb-6"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />

            <motion.h1
              className="text-5xl font-black text-black mb-3 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Moat:<br />Why Every Trade<br />Makes Us Smarter
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              More users → More data → Smarter AI → Better outcomes → Repeat
            </motion.p>

            {/* Flywheel pillars - stacked vertically with matching icons */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border-2 border-black">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black">Cross-Broker Data</p>
                  <p className="text-sm text-gray-600">Trades, intent & strategies across all brokers - patterns no single broker sees</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-violet-50 to-purple-50 p-4 border-2 border-black">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black">We Own The Data</p>
                  <p className="text-sm text-gray-600">Users pick ChatGPT, Claude, Gemini - but none of them have our data</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-rose-50 p-4 border-2 border-black">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black">AI Gets Smarter</p>
                  <p className="text-sm text-gray-600">More data = better predictions. Models keep learning and improving</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 border-2 border-black">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-black">Better Outcomes</p>
                  <p className="text-sm text-gray-600">Traders win more → attracts more users → cycle repeats</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Flywheel Graphic */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <DataFlywheel />
          </motion.div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 5
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