'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Building2, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide12() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Performance-Based CPA',
      description: '$X per lot',
      detail: 'Scaled by performance increase',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Share',
      description: 'Success-aligned partnership',
      detail: 'Grow together with brokers',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Building2,
      title: 'Enterprise Licensing',
      description: 'White-label platform',
      detail: 'Full integration solutions',
      color: 'from-purple-500 to-pink-600'
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
      <GlobeWatermark opacity={0.03} />
      
      <div className="max-w-7xl mx-auto px-8 py-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl font-bold text-black mb-4">
            Business Model
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Creating the AI Intelligence Category for Trading
          </p>
          <p className="text-xl text-gray-500 mb-12">
            Partner with brokers globally • 10-15x trading volume increase
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-br ${stream.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <stream.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{stream.title}</h3>
              <p className="text-3xl font-bold text-black mb-2">{stream.description}</p>
              <p className="text-gray-600">{stream.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-semibold text-black mb-8 text-center">Partnership Flow</h3>
          <div className="flex items-center justify-between">
            {partnershipFlow.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                    <step.icon className="w-10 h-10 text-black" />
                  </div>
                  <span className="text-sm font-medium text-black text-center max-w-[100px]">
                    {step.label}
                  </span>
                </motion.div>
                {index < partnershipFlow.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-500 italic">
            "Performance-based pricing aligned with broker success"
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute bottom-8 right-8 flex items-center gap-2 text-gray-400"
      >
        <span className="text-sm">Slide 12 of 16</span>
      </motion.div>
    </div>
  );
}