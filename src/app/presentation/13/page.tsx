'use client';

import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Activity, DollarSign, BarChart3 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide13() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const marketSegments = [
    { name: 'Untapped', value: 75, color: '#10b981' },
    { name: 'Legacy Platforms', value: 20, color: '#6b7280' },
    { name: 'Modern AI', value: 5, color: '#3b82f6' }
  ];

  const growthProjection = [
    { year: '2024', tam: 100, sam: 30, som: 5 },
    { year: '2025', tam: 120, sam: 45, som: 12 },
    { year: '2026', tam: 150, sam: 65, som: 25 },
    { year: '2027', tam: 200, sam: 90, som: 45 },
    { year: '2028', tam: 250, sam: 120, som: 70 }
  ];

  const marketStats = [
    {
      icon: Users,
      metric: '100M+',
      label: 'Global Traders',
      description: 'Active retail forex traders worldwide'
    },
    {
      icon: DollarSign,
      metric: '$2T+',
      label: 'Daily Volume',
      description: 'Forex market trading volume'
    },
    {
      icon: TrendingUp,
      metric: '15x',
      label: 'Growth Potential',
      description: 'Trading volume increase with AI'
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
      
      <div className="max-w-7xl mx-auto px-8 py-16 z-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Market Size</h3>
            <div className="space-y-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                >
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-black">{stat.metric}</span>
                      <span className="text-lg font-medium text-gray-600">{stat.label}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Market Penetration</h3>
            <div className="bg-gray-50 rounded-2xl p-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {marketSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-around mt-4">
                {marketSegments.map((segment, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: segment.color }}></div>
                      <span className="text-sm font-medium text-gray-700">{segment.name}</span>
                    </div>
                    <span className="text-xl font-bold text-black">{segment.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-black mb-6">TAM • SAM • SOM Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={growthProjection}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Area type="monotone" dataKey="tam" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="sam" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Area type="monotone" dataKey="som" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.7} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">TAM: Total Market</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">SAM: Serviceable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">SOM: Obtainable</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-gray-500 italic">
            "The opportunity to become the standard intelligence layer for global trading"
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 right-8 flex items-center gap-2 text-gray-400"
      >
        <span className="text-sm">Slide 13 of 16</span>
      </motion.div>
    </div>
  );
}