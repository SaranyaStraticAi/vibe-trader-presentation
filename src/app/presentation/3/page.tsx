'use client';

import { motion } from 'framer-motion';
import { UserX, Search, Copy } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Footnote, SuperScript } from '@/components/Footnote';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide3() {
  const { nextSlide, prevSlide, currentSlide } = useSlideNavigation();

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

        {/* Problem cards - 3 column grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                className={`border ${problem.highlight ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} p-6 hover:shadow-lg transition-all`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className={`w-12 h-12 ${problem.highlight ? 'bg-orange-500' : 'bg-gray-800'} text-white flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-black text-xl mb-3">
                  {problem.title}
                </h3>
                <div className="text-5xl font-black text-black mb-2">
                  {problem.stat}
                  {problem.ref && <SuperScript number={problem.ref} />}
                </div>
                <p className="text-gray-600 text-sm">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Cost breakdown - full width */}
        <motion.div
          className="p-6 bg-gray-50 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="font-bold text-black mb-4 text-lg">The Churn & Burn Model is Dead</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-1">New customer acquisition cost</div>
              <div className="font-bold text-black text-xl">$200 → $2,000<SuperScript number={3} /></div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-1">Cost to retain existing trader</div>
              <div className="font-bold text-green-600 text-xl">7x cheaper<SuperScript number={4} /></div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-1">Broker failure rate (Year 1)</div>
              <div className="font-bold text-red-600 text-xl">25%<SuperScript number={5} /></div>
            </div>
          </div>
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