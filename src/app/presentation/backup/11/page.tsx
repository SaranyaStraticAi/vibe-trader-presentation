'use client';

import { motion } from 'framer-motion';
import { DollarSign, Rocket, Trophy, Clock } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide10() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  const useOfFunds = [
    { name: 'Engineering & Product', value: 40, color: '#10b981' },
    { name: 'Sales & Marketing', value: 30, color: '#3b82f6' },
    { name: 'Operations', value: 20, color: '#f59e0b' },
    { name: 'Legal & Compliance', value: 10, color: '#8b5cf6' },
  ];

  const investmentTerms = [
    { label: 'Raise Amount', value: '$1M' },
    { label: 'Valuation', value: '$10M' },
    { label: 'Equity', value: '10%' },
    { label: 'Type', value: 'SAFE' },
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
            className="w-12 h-1 bg-black mb-8"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-7xl md:text-8xl font-black text-black mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Ask
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join us at the ground floor of a revolutionary opportunity
          </motion.p>

          <div className="grid grid-cols-2 gap-12">
            {/* Investment Terms */}
            <div>
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.1 }}
              >
                {investmentTerms.map((term, index) => (
                  <motion.div
                    key={index}
                    className="bg-black text-white p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <p className="text-3xl font-black mb-2">{term.value}</p>
                    <p className="text-sm opacity-80">{term.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Special callout */}
              <motion.div
                className="bg-gray-50 border-2 border-black text-black p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Trophy className="w-8 h-8 mb-3 text-black" />
                <p className="text-2xl font-black mb-2">
                  Early Stage Opportunity
                </p>
                <p className="text-sm">
                  200 validated beta users with strong engagement.
                  Pre-revenue valuation based on market opportunity.
                </p>
              </motion.div>
            </div>

            {/* Use of Funds Chart */}
            <div>
              <motion.h3
                className="text-lg font-bold text-black mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Use of Funds
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={useOfFunds}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, value}) => `${value}%`}
                      labelLine={true}
                    >
                      {useOfFunds.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => `${value}%`}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '2px solid black',
                        borderRadius: 0 
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Timeline */}
              <motion.div
                className="mt-6 bg-gray-50 p-4 border-2 border-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <p className="font-bold text-black">50-Month Runway</p>
                </div>
                <p className="text-sm text-gray-600">
                  4+ years to reach profitability or Series A metrics
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 bg-black text-white p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <p className="text-3xl font-black mb-1">10x</p>
                <p className="text-sm opacity-80">Return Potential</p>
              </div>
              <div>
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <p className="text-3xl font-black mb-1">$100B</p>
                <p className="text-sm opacity-80">Market Opportunity</p>
              </div>
              <div>
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <p className="text-3xl font-black mb-1">2026</p>
                <p className="text-sm opacity-80">Exit Timeline</p>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <p className="text-lg font-bold text-black">Let's Build the Future Together</p>
            <p className="text-gray-600">invest@vibetrader.com</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 9
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