'use client';

import { motion } from 'framer-motion';
import { Clock, Brain, Zap, AlertTriangle, ChartLine } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide2() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

  const problems = [
    {
      icon: Clock,
      title: 'Time-Consuming Analysis',
      description: 'Traders spend hours analyzing multiple timeframes before making decisions',
      stat: '3-4 hours',
      subtext: 'Average analysis time per trade',
      ref: 1,
    },
    {
      icon: Brain,
      title: 'Emotional Trading',
      description: 'Fear and greed drive 70% of trading decisions, leading to losses',
      stat: '62%',
      subtext: 'Retail accounts lose money',
      ref: 2,
    },
    {
      icon: Zap,
      title: 'Market Speed',
      description: 'Markets move in milliseconds while humans react in seconds',
      stat: '2-3ms',
      subtext: 'HFT execution vs 100-400ms human reaction',
      ref: 3,
    },
    {
      icon: AlertTriangle,
      title: 'Scams & Fake Signals',
      description: 'Traders lose billions to fraudulent signals and fake strategies',
      stat: '$12.5B',
      subtext: 'Lost to trading scams in 2024',
      ref: 4,
    },
    {
      icon: ChartLine,
      title: 'No Performance Feedback',
      description: 'Traders lack tools to analyze and improve their strategies',
      stat: '70%',
      subtext: 'Fail without proper analytics',
      ref: 5,
    },
  ];

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

      {/* Globe watermark */}
      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-red-500 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-6xl font-black text-black mb-3 tracking-tighter">
            The Problem
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            Retail Traders Face Insurmountable Challenges
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-5 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-white border border-gray-200 p-6 h-full hover:border-black transition-all hover:shadow-lg">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-black mb-2 text-lg">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-3xl font-black text-black">
                      {problem.stat}
                      {problem.ref && <SuperScript number={problem.ref} />}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {problem.subtext}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-xl text-gray-600">
            <span className="font-bold text-black">Result:</span> 70-90% of retail traders lose money consistently<SuperScript number={6} />
          </p>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(16)].map((_, i) => (
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

      {/* References */}
      <Footnote 
        references={[
          { number: 1, text: 'Multiple Timeframe Analysis Requirements Study 2024' },
          { number: 2, text: 'Behavioral Finance Research, MIT 2024' },
          { number: 3, text: 'High-Frequency Trading Speed Analysis, BIS 2024' },
          { number: 4, text: 'FTC Fraud Report 2024 - Investment Scams' },
          { number: 5, text: 'Retail Trading Performance Analytics Study' },
          { number: 6, text: 'ESMA & NFA Trader Success Rate Data 2024' },
        ]}
      />

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