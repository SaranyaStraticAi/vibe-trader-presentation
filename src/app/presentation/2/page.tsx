'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingDown, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function OriginSlide() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const journeySteps = [
    {
      icon: Bot,
      title: 'Built an AI Algo Trader',
      description: 'We wanted to build an AI system that could trade forex autonomously',
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Needed User Data',
      description: 'Realized we needed traders on the platform to collect market behavior data',
      color: 'bg-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Discovered a Problem',
      description: 'Connected with a broker and uncovered a massive industry pain point',
      color: 'bg-amber-500'
    },
    {
      icon: TrendingDown,
      title: 'The Pivot',
      description: 'The tool we built for ourselves could solve their retention crisis',
      color: 'bg-green-500'
    }
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
            className="w-12 h-1 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-7xl font-bold text-black mb-4">
            Our Story
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            How a chance meeting revealed a billion-dollar problem
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline row with icons and arrows */}
          <div className="flex items-center justify-between mb-6">
            {journeySteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Icon circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                  className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Arrow between icons */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="flex-1 flex items-center justify-center px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                  >
                    <div className="h-0.5 flex-1 bg-gray-200" />
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-1" />
                    <div className="h-0.5 flex-1 bg-gray-200" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Content cards grid */}
          <div className="grid grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                className="text-center"
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black transition-colors h-full">
                  <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 bg-black text-white rounded-2xl p-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">The Insight</h3>
              <p className="text-lg text-gray-300">
                Brokers spend <span className="text-white font-bold">$2,000+ to acquire each trader</span>, then lose 75% within a year.
                Our AI platform <span className="text-green-400 font-bold">keeps traders engaged and profitable</span> — solving their #1 problem.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Forex callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-6 flex justify-center gap-8 text-center"
        >
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4">
            <p className="text-3xl font-black text-black">24/5</p>
            <p className="text-sm text-gray-600">Market Hours</p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4">
            <p className="text-3xl font-black text-black">$9.6T</p>
            <p className="text-sm text-gray-600">Daily Volume</p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4">
            <p className="text-3xl font-black text-black">∞</p>
            <p className="text-sm text-gray-600">Data Points</p>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(17)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 1
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
