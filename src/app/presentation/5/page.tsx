'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, BarChart3, AlertTriangle, Languages, Brain, Zap } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide4() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const retentionComparison = [
    { month: 'Month 1', current: 100, target: 100, potential: 100 },
    { month: 'Month 2', current: 70, target: 85, potential: 90 },
    { month: 'Month 3', current: 50, target: 70, potential: 80 },
    { month: 'Month 6', current: 30, target: 55, potential: 70 },
    { month: 'Month 9', current: 25, target: 50, potential: 65 },
    { month: 'Month 12', current: 20, target: 50, potential: 60 },
  ];

  const valueProps = [
    { name: 'Volume Increase', value: 45, color: '#10b981' },
    { name: 'Retention Lift', value: 35, color: '#3b82f6' },
    { name: 'CAC Reduction', value: 20, color: '#f59e0b' },
  ];

  const brokerPains = [
    { 
      icon: AlertTriangle, 
      title: '70-80% Churn Rate', 
      desc: 'Most traders quit in 90 days',
      solution: '→ Target: 50%+ retention'
    },
    { 
      icon: TrendingUp, 
      title: 'Low Trading Volume', 
      desc: 'Slow analysis = fewer trades',
      solution: '→ 1.5-2x volume (seen 10-15x)'
    },
    { 
      icon: DollarSign, 
      title: '$2,000-4,000 CAC', 
      desc: 'Massive acquisition costs',
      solution: '→ Better LTV/CAC ratio'
    },
    { 
      icon: Languages, 
      title: 'English-Only Tools', 
      desc: 'Losing global traders',
      solution: '→ Multilingual AI platform'
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
            Why Brokers Want In
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            AI speeds up analysis → More trades → Better retention → Higher revenue
          </motion.p>

          {/* Main content grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Broker Pain Points */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-black mb-3">Broker Pain Points</h3>
              {brokerPains.map((pain, index) => {
                const Icon = pain.icon;
                return (
                  <motion.div
                    key={index}
                    className="border border-gray-200 p-3 hover:border-black transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-black text-sm">{pain.title}</p>
                        <p className="text-xs text-gray-600">{pain.desc}</p>
                        <p className="text-xs text-green-600 font-bold mt-1">{pain.solution}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Retention Comparison Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-sm font-bold text-black mb-3">Retention Improvement Opportunity</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={retentionComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid black',
                      borderRadius: 0 
                    }}
                  />
                  <Line type="monotone" dataKey="current" stroke="#ef4444" strokeWidth={2} name="Current State" />
                  <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" name="Pilot Target" />
                  <Line type="monotone" dataKey="potential" stroke="#10b981" strokeWidth={2} strokeDasharray="3 3" name="Future Potential" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 text-xs text-center text-gray-600">
                <span className="text-red-500">● Current: 20%</span>
                <span className="mx-2">→</span>
                <span className="text-orange-500">● Target: 50%</span>
                <span className="mx-2">→</span>
                <span className="text-green-600">● Potential: 60%+</span>
              </div>
            </motion.div>

            {/* Value Creation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-sm font-bold text-black mb-3">Expected Pilot Outcomes</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={valueProps}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    dataKey="value"
                    label={({name, value}) => `${value}%`}
                    labelLine={false}
                  >
                    {valueProps.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-3">
                {valueProps.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-bold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Revenue Model & ROI */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Revenue Model */}
            <motion.div
              className="bg-gray-50 border-2 border-black p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-sm font-bold text-black mb-3">Revenue Model</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Per Active Trader</span>
                  <span className="font-bold">$100-150/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Paid by Broker</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">No upfront cost</span>
                  <span className="font-bold">$0</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-300">
                <p className="text-xs text-gray-600">Example: 1,000 traders</p>
                <p className="text-lg font-black text-black">$1.5M ARR</p>
                <p className="text-xs text-gray-600">@ $125/trader/month</p>
              </div>
            </motion.div>

            {/* ROI Metrics */}
            <motion.div
              className="bg-black text-white p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-sm font-bold mb-3">Pilot Results Expected</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-2xl font-black text-green-400">1.5-2x</p>
                  <p className="text-xs opacity-80">Volume increase</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-green-400">2.5x</p>
                  <p className="text-xs opacity-80">Retention lift</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-green-400">8</p>
                  <p className="text-xs opacity-80">Brokers ready</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-yellow-400">Q2 '26</p>
                  <p className="text-xs opacity-80">Market launch</p>
                </div>
              </div>
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
              i === 4
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