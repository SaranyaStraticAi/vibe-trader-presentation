'use client';

import { motion } from 'framer-motion';
import { Brain, Layers, Network, Sparkles, X, Check, ArrowRight } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 10;

const traditionalStack = [
  { action: 'Execute Trades', tools: 'MT4 / MT5 · Robinhood' },
  { action: 'Analyze Markets', tools: 'TradingView' },
  { action: 'Copy Strategies', tools: 'eToro · DupliTrade' },
  { action: 'Track Performance', tools: 'Myfxbook' },
  { action: 'General AI Prompting', tools: 'OpenAI · Claude' },
];

const vibeTraderStack = [
  { title: 'Trader Decision Memory', desc: 'Captures & remembers every trade decision context' },
  { title: 'Personalized Intelligence', desc: 'Adapts dynamically to individual trader habits' },
  { title: 'Adaptive Decision Support', desc: 'Real-time guidance before execution' },
  { title: 'Continuous Optimization', desc: 'Refines strategy rules and risk parameters' },
  { title: 'Network Intelligence', desc: 'Compounding insights across active traders' },
];

const moats = [
  { icon: Brain, title: 'Decision Memory', body: 'Learns & remembers every interaction' },
  { icon: Sparkles, title: 'Personalized AI', body: 'Tailored to individual trader DNA' },
  { icon: Layers, title: 'Unified Workflow', body: 'Replaces 5+ fragmented apps' },
  { icon: Network, title: 'Network Engine', body: 'Compounds value with community scale' },
];

export default function Slide11() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden bg-white"
      onClick={nextSlide}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Header Line */}
          <motion.div
            className="w-16 h-1.5 bg-black mb-4"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-6xl font-black text-black mb-2 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Competitive Advantage
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 mb-6 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The decision intelligence layer for modern trading.
          </motion.p>

          {/* Side-by-Side Comparison Cards */}
          <div className="grid grid-cols-2 gap-6 max-w-7xl mb-6">
            {/* Legacy Fragmented Stack */}
            <motion.div
              className="border-2 border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 bg-gray-200 px-3 py-1">
                    Status Quo
                  </span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Fragmented Tools
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional Fragmented Stack</h3>
                <div className="space-y-2.5">
                  {traditionalStack.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 bg-white border border-gray-200 text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <X className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="font-semibold text-gray-700">{item.action}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5">
                        {item.tools}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 italic mt-4 pt-3 border-t border-gray-200">
                High friction, zero shared context, manual copy-pasting between platforms.
              </p>
            </motion.div>

            {/* VibeTrader Decision Layer */}
            <motion.div
              className="bg-black text-white p-6 flex flex-col justify-between relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-black bg-white px-3 py-1">
                    VibeTrader
                  </span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center gap-1">
                    Unified Engine <Sparkles className="w-3 h-3 text-white" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Integrated Decision Layer</h3>
                <div className="space-y-2.5">
                  {vibeTraderStack.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 bg-white/10 border border-white/15 text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-white shrink-0" />
                        <span className="font-bold text-white">{item.title}</span>
                      </div>
                      <span className="text-xs text-gray-300 font-light truncate max-w-[220px]">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 font-light mt-4 pt-3 border-t border-white/20">
                Unified workflow with compounding intelligence across every trading session.
              </p>
            </motion.div>
          </div>

          {/* Moat / Why We Win Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="grid grid-cols-4 gap-4 max-w-7xl mb-4">
              {moats.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={i}
                    className="border-2 border-gray-200 hover:border-black transition-colors p-4 group bg-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="w-9 h-9 bg-black text-white flex items-center justify-center mb-2.5 group-hover:bg-gray-800 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-base font-bold text-black mb-1 leading-tight">{m.title}</p>
                    <p className="text-xs text-gray-600 font-light leading-snug">{m.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom High-Impact Banner */}
          <motion.div
            className="bg-gray-900 text-white px-6 py-3.5 max-w-7xl flex items-center justify-between"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <p className="text-lg font-light">
                AI models evolve.{' '}
                <span className="font-bold text-white">Decision intelligence compounds.</span>
              </p>
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
              Defensive Moat
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
