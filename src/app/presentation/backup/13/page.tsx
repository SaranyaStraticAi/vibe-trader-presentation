'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MinusCircle, Shield, Zap, TrendingUp, Brain, Languages } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide12() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const competitors = [
    {
      name: 'MetaTrader',
      marketShare: '75-85%',
      strengths: 'Market dominance',
      weaknesses: [
        'MQL5 proprietary language',
        'English-only interface',
        'Steep learning curve',
        'Poor mobile experience'
      ]
    },
    {
      name: 'TradingView',
      marketShare: '10-15%',
      strengths: 'Great charting',
      weaknesses: [
        'Pine Script proprietary',
        'English-only platform',
        'No execution capability',
        'Feature-gated pricing'
      ]
    },
    {
      name: 'eToro',
      marketShare: '5-8%',
      strengths: 'Social features',
      weaknesses: [
        'Basic copy trading only',
        'Limited language support',
        'No strategy creation',
        'High spreads'
      ]
    },
    {
      name: 'Robinhood',
      marketShare: '2-3%',
      strengths: 'Simple UX',
      weaknesses: [
        'Equity focused',
        'No forex offering',
        'No advanced tools',
        'US only'
      ]
    }
  ];

  const featureComparison = [
    { feature: 'Multiple AI Models', vibe: true, mt: false, tv: false, etoro: false, rh: false },
    { feature: 'Multilingual Support', vibe: true, mt: false, tv: false, etoro: false, rh: false },
    { feature: 'Python-based strategies', vibe: true, mt: false, tv: false, etoro: false, rh: false },
    { feature: 'Natural Language → Code', vibe: true, mt: false, tv: false, etoro: false, rh: false },
    { feature: 'GPT-4/Claude/Gemini', vibe: true, mt: false, tv: false, etoro: false, rh: false },
    { feature: 'Strategy Builder', vibe: true, mt: true, tv: true, etoro: false, rh: false },
    { feature: 'One-Click Backtesting', vibe: true, mt: false, tv: false, etoro: true, rh: false },
    { feature: 'AI Code Completion', vibe: true, mt: false, tv: false, etoro: false, rh: false },
  ];

  const uniqueAdvantages = [
    {
      icon: Brain,
      title: 'Multi-Model AI',
      description: 'GPT-4, Claude, Gemini - all available',
      impact: 'Best model for each task'
    },
    {
      icon: Languages,
      title: 'Multilingual Platform',
      description: 'Global traders, any language',
      impact: 'Competitors English-only'
    },
    {
      icon: TrendingUp,
      title: 'Python > MQL5',
      description: 'LLMs understand Python perfectly',
      impact: 'Competitors locked in proprietary'
    },
    {
      icon: Zap,
      title: 'Cursor-like Experience',
      description: 'AI code completion for trading',
      impact: '10x faster strategy creation'
    }
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
            Competitive Advantage
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The "Cursor for Forex Trading" - AI-native from day one
          </motion.p>
          
          <motion.p
            className="text-sm text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Multilingual AI platform with GPT-4, Claude, Gemini - serving global traders in any language
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            {/* Left side - Feature Matrix */}
            <motion.div
              className="border-2 border-black"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="bg-black text-white p-3">
                <h3 className="font-bold">Feature Comparison Matrix</h3>
              </div>
              <div className="p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Feature</th>
                      <th className="w-12 text-center">Vibe</th>
                      <th className="w-12 text-center">MT</th>
                      <th className="w-12 text-center">TV</th>
                      <th className="w-12 text-center">eT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.slice(0, 8).map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 text-xs">{row.feature}</td>
                        <td className="text-center">
                          {row.vibe ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 inline" />
                          )}
                        </td>
                        <td className="text-center">
                          {row.mt ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 inline" />
                          )}
                        </td>
                        <td className="text-center">
                          {row.tv ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 inline" />
                          )}
                        </td>
                        <td className="text-center">
                          {row.etoro ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 inline" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-black">Key Insight:</span> Like Cursor/Lovable for trading - multiple AI models + Python while competitors stuck with MQL5/Pine Script
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <span className="font-bold text-black">Innovator's Dilemma:</span> MT4/MT5 can't add AI without breaking their entire strategy marketplace & MQL5 ecosystem
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Competitor Weaknesses */}
            <div className="space-y-3">
              <motion.h3
                className="font-bold text-black mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Why They Can't Respond
              </motion.h3>
              
              {competitors.map((comp, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 p-3 hover:border-black transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-black">{comp.name}</p>
                      <p className="text-xs text-gray-500">{comp.marketShare} market share</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {comp.weaknesses.map((weakness, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <MinusCircle className="w-3 h-3 text-red-400" />
                        <span className="text-gray-600">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom section - Unique Advantages */}
          <motion.div
            className="mt-8 bg-gray-50 border-2 border-black p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <h3 className="font-bold text-black mb-4">Our Unfair Advantages</h3>
            <div className="grid grid-cols-4 gap-4">
              {uniqueAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-black text-sm">{advantage.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{advantage.description}</p>
                    <p className="text-xs font-bold text-green-600 mt-2">{advantage.impact}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Key takeaway */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <p className="text-sm text-gray-600">
              <span className="font-black text-black text-lg">We're Building the Cursor/Lovable for Trading</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Multiple AI models + Multilingual support + Python = Global reach with perfect code generation
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Competitors trapped in English-only + MQL5/Pine Script that LLMs can't understand
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(14)].map((_, i) => (
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