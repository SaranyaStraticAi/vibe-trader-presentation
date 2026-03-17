'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, Activity, Shield, Sparkles } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide4() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

  const keyMetrics = [
    {
      icon: TrendingUp,
      label: 'Volume Guarantee',
      value: '40-100%',
      description: 'Promise to brokers (actual: 10-15x)',
    },
    {
      icon: Users,
      label: 'Trader Retention',
      value: '2x+',
      description: 'Guaranteed improvement',
    },
    {
      icon: BarChart3,
      label: 'Broker Compatible',
      value: '1,000+',
      description: 'Any MT4/MT5 broker supported',
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
          className="mb-10"
        >
          {/* Small accent line */}
          <motion.div
            className="w-12 h-1 bg-green-500 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-6xl font-black text-black mb-3 tracking-tighter">
            The Solution
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            AI Trading Intelligence Already Transforming the Industry
          </p>
        </motion.div>

        {/* Key Metrics - 3 column grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="border border-gray-200 bg-white p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-black text-xl mb-3">
                  {metric.label}
                </h3>
                <div className="text-5xl font-black text-black mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack - full width */}
        <motion.div
          className="p-6 bg-gray-50 border border-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="font-bold text-black mb-4 text-lg">Proven Technology Stack</h3>
          <div className="grid grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          className="p-4 bg-green-500 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-lg font-bold">
            Compatible with 1,000+ MT4/MT5 Brokers via MetaAPI
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
          { number: 1, text: 'Broker count based on MetaQuotes/Finance Magnates industry data 2024' },
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