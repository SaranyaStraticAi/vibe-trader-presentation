'use client';

import { motion } from 'framer-motion';
import { Calendar, Target, Rocket, CheckCircle } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide10() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const timeline = [
    {
      quarter: 'Now (Q1 2026)',
      title: 'Launch Pilots',
      tasks: [
        'Start Blueberry pilot',
        'Start D Prime pilot',
        'Measure retention lift'
      ],
      kpis: { users: 1000, brokers: 2, arr: '$0.3M' },
      status: 'current'
    },
    {
      quarter: 'Q2 2026',
      title: 'Validate & Scale',
      tasks: [
        'Pilot results analysis',
        'Onboard 3 more brokers',
        'Multilingual rollout'
      ],
      kpis: { users: 5000, brokers: 5, arr: '$1.5M' },
      status: 'next'
    },
    {
      quarter: 'Q3 2026',
      title: 'Accelerate',
      tasks: [
        'Full broker rollouts',
        'Launch affiliate program',
        'API marketplace'
      ],
      kpis: { users: 15000, brokers: 10, arr: '$4.5M' },
      status: 'future'
    },
    {
      quarter: 'Q4 2026',
      title: 'Series A',
      tasks: [
        'Proven unit economics',
        'International expansion',
        'Raise Series A'
      ],
      kpis: { users: 30000, brokers: 20, arr: '$9M' },
      status: 'future'
    }
  ];

  const monthlyBurn = [
    { category: 'Engineering', amount: 8 },
    { category: 'Sales & Marketing', amount: 5 },
    { category: 'Operations', amount: 4 },
    { category: 'Infrastructure', amount: 2 },
    { category: 'Other', amount: 1 },
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
            Our Timeline
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Product built, beta tested, now executing B2B2C go-to-market
          </motion.p>

          {/* Timeline */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {timeline.map((quarter, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
              >
                {/* Connection line */}
                {index < timeline.length - 1 && (
                  <div className="absolute top-6 left-full w-full h-0.5 bg-gray-300 z-0" />
                )}
                
                <div className="relative z-10">
                  {/* Quarter header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      quarter.status === 'current' 
                        ? 'bg-green-600 text-white'
                        : quarter.status === 'next'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-400 text-white'
                    }`}>
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-black">{quarter.quarter}</p>
                      <p className="text-sm text-gray-600">{quarter.title}</p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="bg-gray-50 p-4 border-2 border-gray-200 mb-4">
                    <ul className="space-y-2">
                      {quarter.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* KPIs */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Users:</span>
                      <span className="font-bold">{quarter.kpis.users}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Brokers:</span>
                      <span className="font-bold">{quarter.kpis.brokers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ARR:</span>
                      <span className="font-bold text-black">{quarter.kpis.arr}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Monthly burn breakdown */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="bg-gray-50 p-6 border-2 border-black">
              <h3 className="text-lg font-bold text-black mb-4">Monthly Burn Rate: $20K</h3>
              <p className="text-xs text-gray-600 mb-3 italic">*Some founders not taking salary</p>
              <div className="space-y-2">
                {monthlyBurn.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-bold">${item.amount}K ({Math.round(item.amount * 100 / 20)}%)</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-black mb-4">Current Status</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-black">✓ Product Complete</p>
                  <p className="text-sm text-gray-600">AI platform built and tested</p>
                </div>
                <div>
                  <p className="font-bold text-black">✓ Beta Testing Done</p>
                  <p className="text-sm text-gray-600">312 users, 96% retention</p>
                </div>
                <div>
                  <p className="font-bold text-black">→ Broker Pilots Starting</p>
                  <p className="text-sm text-gray-600">Blueberry & D Prime ready</p>
                </div>
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