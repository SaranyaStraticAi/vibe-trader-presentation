'use client';

import { motion } from 'framer-motion';
import { Globe, Bitcoin, TrendingUp, Shield, AlertTriangle, DollarSign, Languages, Users } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide6() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const marketComparison = [
    { market: 'FOREX', value: 7500, color: '#10b981' },
    { market: 'Crypto', value: 2000, color: '#3b82f6' },
    { market: 'NYSE', value: 100, color: '#6b7280' },
    { market: 'Options', value: 500, color: '#f59e0b' },
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

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
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
            Why FOREX First?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            $7.5T daily volume trapped in 20-year-old tools with 70-80% trader churn
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

            {/* Market Problems */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-6">Why FOREX is Perfect Entry</h3>
              
              <div className="space-y-3">
                <motion.div
                  className="flex items-start gap-3 p-3 border-2 border-red-200 bg-red-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">70-80% Trader Churn</p>
                    <p className="text-sm text-gray-600">Brokers lose most traders in first 90 days</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 border-2 border-orange-200 bg-orange-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <DollarSign className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">$2,000-4,000 CAC</p>
                    <p className="text-sm text-gray-600">Brokers spend massively to acquire traders</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 border-2 border-gray-300 bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <Globe className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">20-Year-Old Tools</p>
                    <p className="text-sm text-gray-600">MT4 (2005), MT5 (2010) - no innovation</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 border-2 border-purple-200 bg-purple-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Languages className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">English-Only Platforms</p>
                    <p className="text-sm text-gray-600">Global traders forced to use English tools</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 border-2 border-blue-200 bg-blue-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">No Behavioral Analytics</p>
                    <p className="text-sm text-gray-600">Brokers blind to why traders fail</p>
                  </div>
                </motion.div>
              </div>

              {/* Our Solution */}
              <motion.div
                className="mt-6 bg-black text-white p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <p className="font-bold mb-2">Vibe Trader Solves All This</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>✓ Multilingual AI</div>
                  <div>✓ Behavioral insights</div>
                  <div>✓ Modern tools</div>
                  <div>✓ Reduce churn to &lt;20%</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(14)].map((_, i) => (
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