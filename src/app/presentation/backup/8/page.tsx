'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, TrendingUp, Building2, CheckCircle, Globe } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide8() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const growthData = [
    { month: 'Today', users: 312, brokers: 0 },
    { month: 'Q1 2026', users: 1000, brokers: 2 },
    { month: 'Q2 2026', users: 2500, brokers: 4 },
    { month: 'Q3 2026', users: 5000, brokers: 8 },
    { month: 'Q4 2026', users: 10000, brokers: 15 },
    { month: '2027', users: 25000, brokers: 30 },
  ];

  const milestones = [
    { value: '312', label: 'Beta Users', status: 'achieved', icon: Users },
    { value: '8', label: 'Brokers in Pipeline', status: 'achieved', icon: Building2 },
    { value: '5', label: 'Demos Complete', status: 'achieved', icon: CheckCircle },
    { value: '2', label: 'Pilots Ready', status: 'in-progress', icon: Rocket },
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
            className="text-6xl md:text-7xl font-black text-black mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Current Traction & Projections
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            312 beta users • 8 brokers engaged • 5.25M trader reach
          </motion.p>

          {/* Growth Charts */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-4">B2B2C User Growth (via Brokers)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={growthData}>
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
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.6}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-4">Broker Partner Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={growthData}>
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
                  <Line 
                    type="monotone" 
                    dataKey="brokers" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Milestones */}
          <motion.div
            className="grid grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, staggerChildren: 0.1 }}
          >
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-4 border-2 text-center ${
                    milestone.status === 'achieved' 
                      ? 'border-black bg-gray-50'
                      : milestone.status === 'in-progress'
                      ? 'border-gray-600 bg-gray-50'
                      : milestone.status === 'upcoming'
                      ? 'border-gray-400 bg-gray-50'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${
                    milestone.status === 'achieved' 
                      ? 'text-black'
                      : milestone.status === 'in-progress'
                      ? 'text-gray-600'
                      : milestone.status === 'upcoming'
                      ? 'text-gray-500'
                      : 'text-gray-400'
                  }`} />
                  <p className="text-2xl font-black text-black">{milestone.value}</p>
                  <p className="text-sm text-gray-600">{milestone.label}</p>
                  {milestone.status === 'achieved' && (
                    <span className="inline-block mt-2 px-2 py-1 bg-black text-white text-xs font-bold">
                      ACHIEVED
                    </span>
                  )}
                  {milestone.status === 'in-progress' && (
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-600 text-white text-xs font-bold">
                      IN PROGRESS
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Broker Traction */}
          <motion.div
            className="mt-8 bg-gray-50 p-6 border-2 border-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-xl font-bold text-black">Blueberry + D Prime</p>
                <p className="text-sm text-gray-600">Pilots starting Q1 2026</p>
                <p className="text-2xl font-black text-green-600 mt-2">2.05M</p>
                <p className="text-xs text-gray-600">Combined traders</p>
              </div>
              <div>
                <p className="text-xl font-bold text-black">Libertex</p>
                <p className="text-sm text-gray-600">Multilingual expansion</p>
                <p className="text-2xl font-black text-blue-600 mt-2">2.9M</p>
                <p className="text-xs text-gray-600">European traders</p>
              </div>
              <div>
                <p className="text-xl font-bold text-black">Total Pipeline</p>
                <p className="text-sm text-gray-600">8 brokers engaged</p>
                <p className="text-2xl font-black text-black mt-2">5.25M+</p>
                <p className="text-xs text-gray-600">Total trader reach</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(14)].map((_, i) => (
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