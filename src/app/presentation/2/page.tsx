'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Zap, DollarSign, Users, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function Slide2() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

  const marketData = [
    { name: 'MetaTrader', value: 70, color: '#ef4444' },
    { name: 'Other Legacy', value: 25, color: '#f87171' },
    { name: 'Modern Platforms', value: 5, color: '#10b981' },
  ];

  const problems = [
    {
      icon: DollarSign,
      text: '$9.6 Trillion traded on legacy platforms',
    },
    {
      icon: Zap,
      text: 'Platforms are analogue and inefficient',
    },
    {
      icon: TrendingDown,
      text: '90% of retail traders lose money',
    },
    {
      icon: Users,
      text: 'Traders need better tools for confidence',
    },
    {
      icon: Activity,
      text: 'Brokers want increased volume & retention',
    },
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
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-red-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-red-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Small accent line */}
            <motion.div 
              className="w-12 h-1 bg-red-500 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />

            <motion.h1
              className="text-7xl md:text-8xl font-black text-black mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              The<br />Opportunity
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              A massive market dominated by outdated technology
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
            >
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-none bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-gray-700">{problem.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right side - Chart */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-black mb-4">Market Dominance</h3>
            <ResponsiveContainer width={400} height={400}>
              <PieChart>
                <Pie
                  data={marketData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {marketData.map((entry, index) => (
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
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="square"
                />
              </PieChart>
            </ResponsiveContainer>
            
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-5xl font-black text-red-500">95%</p>
              <p className="text-sm text-gray-500 mt-2">on legacy platforms</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 1
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