'use client';

import { motion } from 'framer-motion';
import { Globe, Bitcoin, TrendingUp, Shield } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Footnote, SuperScript } from '@/components/Footnote';

export default function Slide6() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const marketComparison = [
    { market: 'FOREX', value: 7500, color: '#10b981' },
    { market: 'Crypto', value: 2000, color: '#3b82f6' },
    { market: 'NYSE', value: 100, color: '#6b7280' },
    { market: 'Options', value: 500, color: '#f59e0b' },
  ];

  const expansionRoadmap = [
    { phase: 'Phase 1', market: 'FOREX', status: 'active' },
    { phase: 'Phase 2', market: 'Bitcoin', status: 'planned' },
    { phase: 'Phase 3', market: 'Options/Futures', status: 'future' },
    { phase: 'Phase 4', market: 'Global Expansion', status: 'future' },
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
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-gray-300 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-gray-300 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-black mb-8"
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
            Scale: FOREX as<br />a Starting Point
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Massive market with minimal regulation and infinite expansion potential
          </motion.p>

          <div className="grid grid-cols-2 gap-12">
            {/* Market Size Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-4">Daily Trading Volume ($B)<SuperScript number={1} /></h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="market" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => `$${value}B`}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid black',
                      borderRadius: 0 
                    }}
                  />
                  <Bar dataKey="value">
                    {marketComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              
              <motion.div
                className="mt-6 bg-gray-50 p-4 border-2 border-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-4xl font-black text-black">75x</p>
                <p className="text-sm text-gray-600">Larger than NYSE</p>
              </motion.div>
            </motion.div>

            {/* Expansion Roadmap */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-6">Expansion Roadmap</h3>
              <div className="space-y-4">
                {expansionRoadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 p-4 border-2 ${
                      phase.status === 'active' 
                        ? 'border-black bg-gray-50' 
                        : phase.status === 'planned'
                        ? 'border-gray-400 bg-gray-50'
                        : 'border-gray-300 bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.status === 'active' 
                        ? 'bg-black text-white' 
                        : phase.status === 'planned'
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {phase.phase === 'Phase 1' && <Globe className="w-6 h-6" />}
                      {phase.phase === 'Phase 2' && <Bitcoin className="w-6 h-6" />}
                      {phase.phase === 'Phase 3' && <TrendingUp className="w-6 h-6" />}
                      {phase.phase === 'Phase 4' && <Shield className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="font-bold text-black">{phase.phase}</p>
                      <p className="text-gray-600">{phase.market}</p>
                    </div>
                    {phase.status === 'active' && (
                      <span className="ml-auto px-3 py-1 bg-black text-white text-sm font-bold">
                        LIVE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Key advantages */}
              <motion.div
                className="mt-6 grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-black text-black">Low</p>
                  <p className="text-sm text-gray-600">Regulation</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-black">High</p>
                  <p className="text-sm text-gray-600">Scalability</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 5
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
          { number: 1, text: 'BIS 2024, NYSE Market Data 2024' },
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