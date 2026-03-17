'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Target } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide13() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const marketSegments = [
    { name: 'Legacy Platforms', value: 75, color: '#6b7280' },
    { name: 'Other Platforms', value: 20, color: '#f59e0b' },
    { name: 'Modern AI', value: 5, color: '#10b981' }
  ];

  const marketStats = [
    {
      icon: Users,
      metric: '10M+',
      label: 'Global Traders',
      description: 'Active retail forex traders'
    },
    {
      icon: DollarSign,
      metric: '$9.6T',
      label: 'Daily Volume',
      description: 'Global forex turnover'
    },
    {
      icon: TrendingUp,
      metric: '11%',
      label: 'Platform CAGR',
      description: 'Market growth rate'
    }
  ];

  return (
    <div
      className="min-h-screen bg-white relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={nextSlide}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex={0}
    >
      <GlobeWatermark opacity={0.03} />

      <div className="max-w-7xl mx-auto px-8 pt-8 pb-16 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl font-bold text-black mb-4">
            Market Opportunity
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            AI decision intelligence can become the standard analytics layer
          </p>
        </motion.div>

        {/* Hero Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-black text-white p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <stat.icon className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-5xl font-black mb-1">{stat.metric}</div>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content: Pie Chart + Insight */}
        <div className="grid grid-cols-5 gap-8">
          {/* Pie Chart - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-3 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-black mb-2">Current Market Penetration</h3>
            <p className="text-sm text-gray-500 mb-6">How traders currently access analytics tools</p>

            <div className="flex items-center gap-8">
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={marketSegments}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={95}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {marketSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Vertical Legend */}
              <div className="space-y-4 pr-4">
                {marketSegments.map((segment, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: segment.color }}
                    />
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-black">{segment.value}%</span>
                      </div>
                      <span className="text-sm text-gray-600">{segment.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Insight - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-2 flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-green-700 uppercase tracking-wider">The Opportunity</span>
              </div>

              <div className="mb-4">
                <span className="text-6xl font-black text-green-600">75%</span>
                <p className="text-lg text-gray-700 mt-2">
                  of traders are stuck on <strong>legacy platforms</strong> without modern AI capabilities
                </p>
              </div>

              <div className="pt-4 border-t border-green-200">
                <p className="text-sm text-gray-600">
                  Only <strong className="text-green-600">5%</strong> currently use AI-powered tools — massive room for disruption
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(17)].map((_, i) => (
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
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
