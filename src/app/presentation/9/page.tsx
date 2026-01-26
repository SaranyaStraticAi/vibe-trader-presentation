'use client';

import { motion } from 'framer-motion';
import { Calendar, Target, Rocket, CheckCircle } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function Slide9() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const timeline = [
    {
      quarter: 'Q1 2025',
      title: 'Foundation',
      tasks: [
        'Complete core platform',
        'Onboard first broker partner',
        '500 active users'
      ],
      kpis: { users: 500, brokers: 1, arr: '$1.5M' }
    },
    {
      quarter: 'Q2 2025',
      title: 'Scale',
      tasks: [
        'Launch AI trading assistant',
        '2 additional broker partners',
        'Mobile app beta'
      ],
      kpis: { users: 1000, brokers: 3, arr: '$3M' }
    },
    {
      quarter: 'Q3 2025',
      title: 'Expand',
      tasks: [
        'Data monetization pilot',
        'International expansion',
        'Advanced analytics suite'
      ],
      kpis: { users: 1800, brokers: 5, arr: '$5.4M' }
    },
    {
      quarter: 'Q4 2025',
      title: 'Dominate',
      tasks: [
        'D2C channel launch',
        'Bitcoin trading integration',
        'Series A preparation'
      ],
      kpis: { users: 2500, brokers: 8, arr: '$7.5M' }
    }
  ];

  const monthlyBurn = [
    { category: 'Engineering', amount: 40 },
    { category: 'Sales & Marketing', amount: 25 },
    { category: 'Operations', amount: 15 },
    { category: 'Infrastructure', amount: 10 },
    { category: 'Other', amount: 10 },
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
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-gray-300 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-gray-300 rotate-45 opacity-10"></div>

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
            Clear path to market dominance in 12 months
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
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
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
              <h3 className="text-lg font-bold text-black mb-4">Monthly Burn Rate: $83K</h3>
              <div className="space-y-2">
                {monthlyBurn.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-bold">${item.amount}K ({item.amount * 100 / 83}%)</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-black mb-4">Key Transitions</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-black">B2B2C → D2C</p>
                  <p className="text-sm text-gray-600">Q4: Launch direct consumer channel</p>
                </div>
                <div>
                  <p className="font-bold text-black">Data Monetization</p>
                  <p className="text-sm text-gray-600">Q3: Begin selling market insights</p>
                </div>
                <div>
                  <p className="font-bold text-black">Geographic Expansion</p>
                  <p className="text-sm text-gray-600">Q3: Enter Asian markets</p>
                </div>
              </div>
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
              i === 8
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