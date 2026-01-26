'use client';

import { motion } from 'framer-motion';
import { Database, Brain, Target, Zap, ArrowRight } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function Slide5() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const dataFlywheelSteps = [
    { icon: Database, title: 'Trading Data', desc: 'Chats, trades, behavior' },
    { icon: Brain, title: 'AI Analysis', desc: 'Predictive insights' },
    { icon: Target, title: 'Customer Data', desc: 'Segment & target' },
    { icon: Zap, title: 'Product Improvement', desc: 'Better features' },
  ];

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

      {/* Geometric accent shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-purple-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-purple-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-purple-500 mb-8"
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
            <motion.div 
              className="relative w-[600px] h-[600px] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full flex items-center justify-center z-10">
                <p className="text-white font-bold text-center">Data<br />Flywheel</p>
              </div>

              {/* Flywheel items */}
              {dataFlywheelSteps.map((step, index) => {
                const Icon = step.icon;
                const angle = (index * 90) - 90;
                const radius = 220;
                const x = radius * Math.cos(angle * Math.PI / 180);
                const y = radius * Math.sin(angle * Math.PI / 180);
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                  >
                    <div className="group cursor-pointer">
                      <div className="w-24 h-24 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-500 group-hover:border-black transition-colors">
                        <Icon className="w-10 h-10 text-purple-500 group-hover:text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm">{step.title}</p>
                        <p className="text-xs text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting arrows */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(45deg)' }}>
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="220"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 0.6, duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </svg>
            </motion.div>

            {/* Data usage points */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="bg-purple-50 p-4 border-2 border-purple-200">
                <p className="font-bold text-black mb-1">Marketing & Sales</p>
                <p className="text-sm text-gray-600">Target right customers</p>
              </div>
              <div className="bg-purple-50 p-4 border-2 border-purple-200">
                <p className="font-bold text-black mb-1">Data as a Service</p>
                <p className="text-sm text-gray-600">Monetize insights</p>
              </div>
              <div className="bg-purple-50 p-4 border-2 border-purple-200">
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