'use client';

import { motion } from 'framer-motion';
import { Globe2, TrendingUp, Users, BarChart3, CheckCircle, Activity, Shield, Sparkles } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide4() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

  const keyMetrics = [
    {
      icon: TrendingUp,
      label: 'Volume Increase',
      value: '40-100%',
      description: 'Conservative promise',
      subtext: '(10-15x in tests)',
    },
    {
      icon: Users,
      label: 'Trader Retention',
      value: '2x+',
      description: 'Guaranteed minimum',
      subtext: '(3x achieved)',
    },
    {
      icon: BarChart3,
      label: 'Win Rate',
      value: '+45%',
      description: 'Proven improvement',
      subtext: '(Control group)',
    },
  ];

  const platformFeatures = [
    {
      icon: Activity,
      title: 'Real-Time AI Analysis',
      description: 'Instant market insights powered by millions of daily trades',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Automated position sizing and exposure tracking',
    },
    {
      icon: Sparkles,
      title: 'Performance Analytics',
      description: 'AI-powered journal tracking patterns across our network',
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        }}
      />

      {/* Globe watermark */}
      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        {/* Header with Scale Proof */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 text-center"
        >
          {/* Live indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50 border border-green-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-700">LIVE WITH 5000+ BROKERS WORLDWIDE</span>
          </motion.div>

          <h1 className="text-6xl font-black text-black mb-3 tracking-tighter">
            The Solution
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            AI Trading Intelligence Already Transforming the Industry
          </p>
        </motion.div>

        {/* Global Network Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-10 relative"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            {/* World map representation with dots */}
            <div className="relative h-48 flex items-center justify-center">
              <Globe2 className="w-32 h-32 text-gray-300" />
              {/* Animated connection lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-20 bg-gradient-to-t from-green-500 to-transparent"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              {/* Center dot */}
              <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </div>
            
            <div className="text-center mt-6">
              <h3 className="text-3xl font-black text-black mb-2">
                One Platform. Global Scale.
              </h3>
              <p className="text-lg text-gray-600">
                AI-powered trading intelligence embedded directly in broker platforms
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {keyMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-3xl font-black text-black">{metric.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xs text-gray-600 mt-1">{metric.description}</div>
                    {metric.subtext && (
                      <div className="text-xs text-gray-400 mt-0.5">{metric.subtext}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-black mb-4 text-center">
            Proven Technology Stack
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 p-4 hover:border-green-500 transition-all hover:shadow-md group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-green-500 mb-3 group-hover:text-green-600 transition-colors" />
                  <h4 className="font-bold text-black mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-8 text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-xl font-bold">
            5000 Brokers. Millions of Traders. One Unstoppable Network.
          </p>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 3
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
          { number: 1, text: 'Conservative promises based on control group testing showing 10-15x volume increase' },
          { number: 2, text: 'Actual results may exceed guaranteed minimums based on trader engagement' },
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