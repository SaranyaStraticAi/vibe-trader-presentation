'use client';

import { motion } from 'framer-motion';
import { UserX, Search, Copy, TrendingDown, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide3() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

  const retentionData = [
    { month: 'Month 1', retention: 100 },
    { month: 'Month 2', retention: 50 },
    { month: 'Month 3', retention: 35 },
    { month: 'Month 6', retention: 25 },
    { month: 'Month 12', retention: 15 },
  ];

  const costData = [
    { year: '2020', cost: 200 },
    { year: '2021', cost: 500 },
    { year: '2022', cost: 900 },
    { year: '2023', cost: 1400 },
    { year: '2024', cost: 2000 },
  ];

  const problems = [
    {
      icon: UserX,
      title: 'Catastrophic Retention',
      stat: '<25%',
      description: '1-year trader retention rate',
      highlight: true,
      ref: 1,
    },
    {
      icon: Search,
      title: 'Acquisition Nightmare',
      stat: '10x',
      description: 'Cost increase since 2020',
      ref: 2,
    },
    {
      icon: Copy,
      title: 'Zero Differentiation',
      stat: '95%',
      description: 'Brokers offer identical features',
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

      {/* Globe watermark */}
      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10"
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-orange-500 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-6xl font-black text-black mb-3 tracking-tighter">
            The Crisis
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            Brokers Face an Existential Threat
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left side - Key Problems */}
          <div>
            <div className="space-y-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    className={`border ${problem.highlight ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} p-6 hover:shadow-lg transition-all`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${problem.highlight ? 'bg-orange-500' : 'bg-gray-800'} text-white flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-black text-xl mb-1">
                          {problem.title}
                        </h3>
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-black text-black">
                            {problem.stat}
                            {problem.ref && <SuperScript number={problem.ref} />}
                          </span>
                          <span className="text-gray-600">
                            {problem.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Cost breakdown */}
            <motion.div
              className="mt-6 p-6 bg-gray-50 border border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="font-bold text-black mb-3">The Churn & Burn Model is Dead</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">New customer acquisition cost:</span>
                  <span className="font-bold text-black">$200 → $2,000<SuperScript number={3} /></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost to retain existing trader:</span>
                  <span className="font-bold text-green-600">7x cheaper<SuperScript number={4} /></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Broker failure rate (Year 1):</span>
                  <span className="font-bold text-red-600">25%<SuperScript number={5} /></span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Charts */}
          <div className="space-y-6">
            {/* Retention Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-black mb-4">Trader Retention Cliff</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: 0 
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="retention" 
                    stroke="#ef4444" 
                    fill="#fee2e2"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Acquisition Cost Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-white border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-black mb-4">Acquisition Cost Explosion</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip 
                    formatter={(value) => `$${value}`}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: 0 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="#f97316" 
                    strokeWidth={3}
                    dot={{ fill: '#f97316', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>

        {/* Bottom insight */}
        <motion.div
          className="mt-8 text-center p-4 bg-black text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg">
            <span className="font-bold">The Verdict:</span> Brokers must innovate or face extinction in a commoditized market
          </p>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 2
                ? 'w-8 bg-black'
                : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
          />
        ))}
      </div>

      {/* References */}
      <Footnote 
        references={[
          { number: 1, text: 'Industry Average Retention Rates, Finance Magnates 2024' },
          { number: 2, text: 'Digital Acquisition Cost Analysis, Google & Meta Ads Data' },
          { number: 3, text: 'CAC Growth Study - Bloomberg, Investopedia Ad Networks' },
          { number: 4, text: 'Customer Retention Economics Research 2024' },
          { number: 5, text: 'New Broker Failure Rate Analysis 2023-2024' },
        ]}
      />

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