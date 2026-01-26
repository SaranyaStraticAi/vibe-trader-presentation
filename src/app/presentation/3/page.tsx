'use client';

import { motion } from 'framer-motion';
import { Bot, Cloud, BarChart3, Library, Brain, Sparkles } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Footnote } from '@/components/Footnote';

export default function Slide3() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const features = [
    { 
      icon: Bot,
      title: 'AI-Native OS', 
      desc: 'Latest AI models for trading & analysis',
    },
    { 
      icon: Cloud,
      title: 'Cloud Backtesting', 
      desc: 'Test strategies with historical data',
    },
    { 
      icon: BarChart3,
      title: 'Portfolio Analytics', 
      desc: 'Behavioral insights on one platform',
    },
    { 
      icon: Library,
      title: 'Strategy Library', 
      desc: 'Access proven trading strategies',
    },
  ];

  const confidenceData = [
    { metric: 'Trading Confidence', before: 30, after: 85 },
    { metric: 'Trade Volume', before: 40, after: 90 },
    { metric: 'Win Rate', before: 10, after: 65 },
    { metric: 'User Retention', before: 25, after: 80 },
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
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-green-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-green-500 mb-8"
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
            Why Traders Care<br />and Keep Coming Back
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            AI-powered tools that actually deliver results
          </motion.p>

          <div className="grid grid-cols-2 gap-12">
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="border-2 border-gray-200 p-6 hover:border-black transition-colors h-full">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-lg font-bold text-black mb-4">Projected Impact on Performance*</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={confidenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="metric" 
                    tick={{ fontSize: 12 }}
                    angle={-20}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Score (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid black',
                      borderRadius: 0 
                    }}
                  />
                  <Bar dataKey="before" fill="#ef4444" name="Before VibeTrader" />
                  <Bar dataKey="after" fill="#10b981" name="With VibeTrader" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Bottom highlight */}
          <motion.div
            className="mt-12 flex items-center gap-4 bg-green-50 p-6 border-2 border-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-xl text-black font-bold">
                Transform your trading with AI-powered intelligence
              </p>
              <p className="text-gray-600 mt-1">
                Join thousands of traders already winning with VibeTrader
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 2
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
          { number: 1, text: '*Based on backtesting and simulated projections' },
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