'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Building2, TrendingUp, ArrowRight, Sparkles, BarChart3 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide12() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Performance-Based CPA',
      description: '$X per lot',
      detail: 'Scaled by performance increase'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Share',
      description: 'Success-aligned',
      detail: 'Grow together with brokers'
    },
    {
      icon: Building2,
      title: 'Enterprise Licensing',
      description: 'White-label',
      detail: 'Full integration solutions'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Trader Insights',
      detail: 'Broker & PE interest confirmed'
    }
  ];

  const partnershipFlow = [
    { label: 'Broker Partners', icon: Users },
    { label: 'AI Intelligence Layer', icon: Sparkles },
    { label: 'Increased Volume', icon: TrendingUp },
    { label: 'Shared Success', icon: DollarSign }
  ];

  return (
    <div 
      className="min-h-screen bg-white relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={nextSlide}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex={0}
    >
      <GlobeWatermark />
      
      <div className="max-w-7xl mx-auto px-8 py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Accent bar */}
          <motion.div
            className="w-12 h-1 bg-blue-600 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-7xl font-bold text-black mb-4">
            Business Model
          </h1>
          <p className="text-2xl text-gray-600 mb-10">
            Partner with brokers globally • 10-15x trading volume increase
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-6 mb-10"
        >
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-black transition-colors"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <stream.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-1">{stream.title}</h3>
              <p className="text-2xl font-black text-black mb-2">{stream.description}</p>
              <p className="text-sm text-gray-600">{stream.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-black mb-6 text-center">Partnership Flow</h3>
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {partnershipFlow.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-3">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black text-center max-w-[90px]">
                    {step.label}
                  </span>
                </motion.div>
                {index < partnershipFlow.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Data Analytics callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4"
        >
          <div className="flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-black">Future Revenue: Trader Intelligence Data</p>
              <p className="text-sm text-gray-600">Brokers & PE firms interested in trader behavior insights, strategies, and market sentiment data</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 11
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
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}