'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Globe2, TrendingUp, Mail, CheckCircle, Video } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide9() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const brokers = [
    {
      name: 'Blueberry Markets',
      region: 'Australia/Vanuatu',
      traders: '50,000',
      status: 'Pilot Ready',
      highlight: true,
      note: 'Director confirmed interest'
    },
    {
      name: 'LIRUNEX',
      region: 'Africa/Global',
      traders: '100,000+',
      status: 'Demo Complete',
      highlight: true,
      note: 'African expansion partner'
    },
    {
      name: 'Libertex',
      region: 'Europe',
      traders: '2,900,000',
      status: 'Discovery',
      highlight: true,
      note: 'Multilingual focus'
    },
    {
      name: 'EC Markets',
      region: 'UAE',
      traders: '118,000',
      status: 'Demo Complete',
      highlight: false,
      note: 'Liverpool FC Partner'
    },
    {
      name: 'D Prime',
      region: 'London',
      traders: '2,000,000',
      status: 'Discovery',
      highlight: false,
      note: 'Largest opportunity'
    },
    {
      name: 'PU Prime',
      region: 'Mauritius',
      traders: '71,000',
      status: 'Discovery',
      highlight: false,
      note: 'Growing rapidly'
    },
    {
      name: 'Global Gold & Currency',
      region: 'UAE',
      traders: '15,000',
      status: 'Demo Complete',
      highlight: false,
      note: 'GGCC'
    }
  ];

  const stats = [
    { icon: Building2, value: '8', label: 'Brokers in Pipeline' },
    { icon: Users, value: '5.25M+', label: 'Total Trader Reach' },
    { icon: CheckCircle, value: '5', label: 'Demos Complete' },
    { icon: Globe2, value: '20+', label: 'Countries' }
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
            className="w-12 h-1 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-5xl md:text-6xl font-black text-black mb-2 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Broker Pipeline
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            B2B2C distribution already in motion
          </motion.p>

          {/* Achievement banner */}
          <motion.div
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">
              1 SDR • 1 Month • 4 Enterprise Demos
            </span>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {/* Left side - Broker list */}
            <div className="col-span-2">
              <div className="space-y-3">
                {brokers.map((broker, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between p-4 border-2 ${
                      broker.highlight 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-black'
                    } transition-all`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-black text-lg">{broker.name}</h3>
                        {broker.highlight && (
                          <Mail className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">{broker.region}</span>
                        <span className="text-gray-400">•</span>
                        <span className="font-bold text-black">{broker.traders} traders</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 italic">{broker.note}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      broker.status === 'Pilot Ready' 
                        ? 'bg-green-600 text-white'
                        : broker.status === 'Demo Complete'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {broker.status}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Validation proof */}
              <motion.div
                className="mt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="p-4 bg-gray-50 border-2 border-gray-200">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-black mb-1">Blueberry Markets - Director Confirmation</p>
                      <p className="text-xs text-gray-600 italic">
                        "You and I can resume working this out and I would love to look at running a pilot."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-black mb-1">Recent Demos Complete</p>
                      <p className="text-xs text-gray-600 mb-1">
                        <strong>LIRUNEX:</strong> African expansion • MT4/MT5 integration • Behavioral analytics
                      </p>
                      <p className="text-xs text-gray-600">
                        <strong>Libertex:</strong> European market • Multilingual capabilities • 2.9M traders
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Stats */}
            <div className="space-y-4">
              <motion.h3
                className="font-bold text-black mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Pipeline Metrics
              </motion.h3>

              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-black">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Conversion potential */}
              <motion.div
                className="mt-6 p-4 bg-black text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <p className="text-xs uppercase tracking-wide opacity-70 mb-2">Conservative Conversion</p>
                <p className="text-3xl font-black">52,500</p>
                <p className="text-xs opacity-70">Traders at 1% adoption</p>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-xl font-bold text-green-400">$157M ARR</p>
                  <p className="text-xs opacity-70">at $250/mo pricing</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator - Updated for 14 slides */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(14)].map((_, i) => (
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