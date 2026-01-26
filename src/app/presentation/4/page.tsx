'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, BarChart3, Target, Shield } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Slide4() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const revenueGrowth = [
    { month: 'Jan', revenue: 100, volume: 50 },
    { month: 'Feb', revenue: 120, volume: 65 },
    { month: 'Mar', revenue: 145, volume: 80 },
    { month: 'Apr', revenue: 180, volume: 95 },
    { month: 'May', revenue: 220, volume: 120 },
    { month: 'Jun', revenue: 280, volume: 150 },
  ];

  const customerInsights = [
    { name: 'Winners', value: 30, color: '#10b981' },
    { name: 'Losers', value: 20, color: '#ef4444' },
    { name: 'Active', value: 35, color: '#3b82f6' },
    { name: 'Dormant', value: 15, color: '#9ca3af' },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Increase Revenue', desc: '3x trading volume' },
    { icon: TrendingUp, title: 'Cut Costs', desc: '50% operational savings' },
    { icon: Users, title: 'Higher Retention', desc: '80% user retention' },
    { icon: BarChart3, title: 'Customer Analytics', desc: 'Real-time insights' },
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
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-blue-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-blue-500 mb-8"
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
            Drive revenue, cut costs, and finally understand your customers
          </motion.p>

          {/* Main content grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black">{benefit.title}</p>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Revenue & Volume Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-sm font-bold text-black mb-3">Revenue & Volume Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid black',
                      borderRadius: 0 
                    }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Revenue" />
                  <Area type="monotone" dataKey="volume" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Volume" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Customer Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-sm font-bold text-black mb-3">Customer Segmentation</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={customerInsights}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {customerInsights.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Bottom highlight */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 bg-blue-50 p-6 border-2 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div>
              <p className="text-3xl font-black text-blue-500">3x</p>
              <p className="text-sm text-gray-600">Trading Volume</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-500">50%</p>
              <p className="text-sm text-gray-600">Cost Reduction</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-500">80%</p>
              <p className="text-sm text-gray-600">User Retention</p>
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
              i === 3
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