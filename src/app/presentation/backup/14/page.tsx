'use client';

import { motion } from 'framer-motion';
import { Sparkles, Brain, TrendingUp, MessageSquare, BarChart3, Zap, CheckCircle, Star } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide13() {
  const { prevSlide, goToFirst } = useSlideNavigation();

  const features = [
    {
      icon: Brain,
      title: 'AI Strategy Builder',
      description: 'Create strategies in plain English',
      screenshot: 'Strategy: "Buy when RSI < 30 and MACD crosses up"',
      time: '30 seconds'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Trading',
      description: 'Talk to your portfolio like a copilot',
      screenshot: 'You: "What\'s my risk exposure on EUR/USD?"',
      time: 'Real-time'
    },
    {
      icon: BarChart3,
      title: 'One-Click Backtesting',
      description: 'Test strategies across 10 years of data',
      screenshot: 'Backtest complete: 73% win rate, 2.3 Sharpe ratio',
      time: '5 seconds'
    },
    {
      icon: Sparkles,
      title: 'Automated Journaling',
      description: 'AI captures every trade decision',
      screenshot: 'Trade #1247: Entered due to support bounce pattern',
      time: 'Automatic'
    }
  ];

  const testimonials = [
    {
      quote: "Completely transformed my trading. Strategy Builder helps me structure strategies with clarity. The Telegram notifications ensure I never miss important updates.",
      author: "Farida Haruna, Nigeria",
      metric: "Professional Trader"
    },
    {
      quote: "Before Vibe, my trading felt scattered. Now I'm more patient, selective, and less reactive emotionally. Feels built by people who understand real traders.",
      author: "Experienced Trader, India",
      metric: "4+ years experience"
    },
    {
      quote: "Strategy Builder is extremely powerful and well-designed. It's genuinely useful for improving trading decisions.",
      author: "King Dave, South Africa",
      metric: "Twitter Trading Community"
    },
    {
      quote: "Helped me stay disciplined and avoid overtrading by keeping focus on high quality setups only. The simplicity is what stood out.",
      author: "Mukunth, India",
      metric: "2+ years experience"
    }
  ];

  const metrics = [
    { label: 'Avg Strategy Creation', value: '2 min', comparison: 'vs 2 hours traditional' },
    { label: 'AI Response Time', value: '<1 sec', comparison: 'Real-time insights' },
    { label: 'Historical Data', value: '10 years', comparison: 'Tick-level accuracy' },
    { label: 'User Satisfaction', value: '94%', comparison: 'Would recommend' }
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

      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
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
            className="text-5xl md:text-6xl font-black text-black mb-2 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            See It In Action
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Real product, real users, real results
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            {/* Left side - Feature Screenshots */}
            <div className="space-y-3">
              <motion.h3
                className="font-bold text-black mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Core Features Live Now
              </motion.h3>
              
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="border border-gray-200 p-3 hover:border-black transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-black text-sm">{feature.title}</p>
                          <span className="text-xs text-green-600 font-bold">{feature.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{feature.description}</p>
                        <div className="bg-gray-50 p-2 rounded border border-gray-200">
                          <code className="text-xs text-gray-700">{feature.screenshot}</code>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right side - Testimonials & Metrics */}
            <div className="space-y-4">
              {/* User Testimonials */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="font-bold text-black mb-3">What Real Users Say</h3>
                <div className="space-y-2">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-2.5 border-l-4 border-black">
                      <div className="flex items-start gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-700 italic mb-1.5 leading-tight">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold text-black">- {testimonial.author}</p>
                        <span className="text-[10px] text-green-600 font-bold">{testimonial.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Performance Metrics */}
              <motion.div
                className="border-2 border-black p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <h3 className="font-bold text-black mb-3">Platform Performance</h3>
                <div className="space-y-2">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">{metric.label}</span>
                      <div className="text-right">
                        <span className="font-bold text-black text-sm">{metric.value}</span>
                        <p className="text-xs text-gray-500">{metric.comparison}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA section */}
          <motion.div
            className="mt-8 bg-black text-white p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-black">312</p>
                <p className="text-xs opacity-80">Active Beta Users</p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-black">4</p>
                <p className="text-xs opacity-80">Enterprise Demos</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-black">94%</p>
                <p className="text-xs opacity-80">Would Recommend</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-bold">Live Demo Available Upon Request</p>
              <p className="text-xs opacity-70 mt-1">See the full platform in action with real trading data</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(13)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 12
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
        onClick={goToFirst}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Back to start"
      >
        ↺
      </button>
    </div>
  );
}