'use client';

import { motion } from 'framer-motion';
import { Users, Award, DollarSign, Shield } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide7() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const deRiskingFactors = [
    {
      icon: Users,
      title: '8 Brokers in Pipeline',
      desc: '5.25M+ trader reach, demos complete',
      highlight: 'B2B2C validated'
    },
    {
      icon: Award,
      title: '312 Beta Users',
      desc: '96% retention, 94% would recommend',
      highlight: 'Product-market fit'
    },
    {
      icon: DollarSign,
      title: '$20K/mo Burn Rate',
      desc: '21 team members (some founders no salary)',
      highlight: 'Ultra-efficient'
    },
    {
      icon: Shield,
      title: 'Multilingual + AI',
      desc: 'Only platform with GPT-4, Claude, Gemini',
      highlight: 'Unique moat'
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
            De-Risking the<br />Opportunity
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            High-efficiency model that significantly reduces investor risk
          </motion.p>

          <div className="grid grid-cols-2 gap-12">
            {/* De-risking factors */}
            <div className="space-y-4">
              {deRiskingFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 p-4 border-2 border-gray-200 hover:border-black transition-colors group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-black">{factor.title}</p>
                      <p className="text-sm text-gray-600 mb-2">{factor.desc}</p>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold">
                        {factor.highlight}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Concrete Validation */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-4">Market Validation</h3>
              
              <div className="bg-gray-50 border-2 border-black p-4">
                <p className="font-bold text-black mb-2">Broker Interest Confirmed</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blueberry Markets</span>
                    <span className="font-bold">Pilot Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LIRUNEX</span>
                    <span className="font-bold">Demo Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Libertex</span>
                    <span className="font-bold">In Discussion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EC Markets</span>
                    <span className="font-bold">Demo Complete</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 p-4">
                <p className="font-bold text-black mb-2">Traction Metrics</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">• 312 active beta users</p>
                  <p className="text-gray-700">• 8 brokers in pipeline</p>
                  <p className="text-gray-700">• 5.25M+ trader reach</p>
                  <p className="text-gray-700">• 5 demos completed</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-200 p-4">
                <p className="font-bold text-black mb-2">Efficiency Metrics</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">• $20K/month burn rate</p>
                  <p className="text-gray-700">• 21 team members globally</p>
                  <p className="text-gray-700">• 50 months runway with $1M</p>
                  <p className="text-gray-700">• Some founders no salary</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom valuation highlight */}
          <motion.div
            className="mt-12 bg-gray-50 p-6 border-2 border-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-black text-black">$10M</p>
                <p className="text-sm text-gray-600">Pre-money Valuation</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">50mo</p>
                <p className="text-sm text-gray-600">Runway with $1M</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">2026</p>
                <p className="text-sm text-gray-600">Target Exit/Series A</p>
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
              i === 6
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