'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Building2, CheckCircle } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide8() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const growthData = [
    { month: 'Today', users: 456, brokers: 1 },
    { month: 'Q1 2026', users: 1000, brokers: 5 },
    { month: 'Q2 2026', users: 2500, brokers: 10 },
    { month: 'Q3 2026', users: 5000, brokers: 15 },
    { month: 'Q4 2026', users: 10000, brokers: 25 },
    { month: '2027', users: 25000, brokers: 40 },
  ];

  const milestones = [
    { value: '456', label: 'Beta Users', status: 'achieved', icon: Users },
    { value: '20', label: 'Brokers in Pipeline', status: 'achieved', icon: Building2 },
    { value: '17', label: 'Demos Complete', status: 'achieved', icon: CheckCircle },
    { value: '1', label: 'Active Pilot', status: 'achieved', icon: Rocket },
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
            Current Traction & Projections
          </motion.h1>

          {/* Milestones - Primary Focus */}
          <motion.div
            className="grid grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 border-2 border-black bg-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Icon className="w-10 h-10 mx-auto mb-3 text-black" />
                  <p className="text-4xl font-black text-black">{milestone.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{milestone.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Broker Pipeline Status */}
          <motion.div
            className="bg-black text-white p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 opacity-70">Pipeline Progression</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-green-400 text-sm font-bold uppercase tracking-wide">Pilot Live</p>
                <p className="text-xl font-black mt-1">Trading Latam</p>
                <p className="text-sm opacity-60">Contract signed, launched</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-blue-400 text-sm font-bold uppercase tracking-wide">Entering Pilot</p>
                <p className="text-xl font-black mt-1">NAGA, Blueberry, HFM</p>
                <p className="text-sm opacity-60">High interest, scheduling kickoff</p>
              </div>
              <div className="border-l-4 border-gray-400 pl-4">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wide">In Pipeline</p>
                <p className="text-xl font-black mt-1">12 Brokers + 8 Partners</p>
                <p className="text-sm opacity-60">Active demos & conversations</p>
              </div>
            </div>
          </motion.div>

          {/* Growth Projections */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="bg-gray-50 p-4 border border-gray-300">
              <h3 className="text-sm font-bold text-gray-700 mb-2">Projected User Growth</h3>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={growthData}>
                  <XAxis dataKey="month" tick={{ fontSize: 9 }} stroke="#6b7280" />
                  <YAxis tick={{ fontSize: 9 }} stroke="#6b7280" />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gray-50 p-4 border border-gray-300">
              <h3 className="text-sm font-bold text-gray-700 mb-2">Projected Broker Partners</h3>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={growthData}>
                  <XAxis dataKey="month" tick={{ fontSize: 9 }} stroke="#6b7280" />
                  <YAxis tick={{ fontSize: 9 }} stroke="#6b7280" />
                  <Line
                    type="monotone"
                    dataKey="brokers"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 7
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