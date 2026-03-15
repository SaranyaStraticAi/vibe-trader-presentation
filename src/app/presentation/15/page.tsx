'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Activity, Zap } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

export default function Slide15() {
  const { prevSlide, goToFirst } = useSlideNavigation();

  const visionComparison = [
    { 
      company: 'Bloomberg',
      role: 'Intelligence layer for institutional finance',
      icon: Activity,
      color: 'from-orange-500 to-amber-600'
    },
    { 
      company: 'VibeTrader',
      role: 'AI intelligence layer for global trading',
      icon: Sparkles,
      color: 'from-blue-500 to-green-500'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={goToFirst}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') goToFirst();
        if (e.key === 'ArrowLeft') prevSlide();
      }}
      tabIndex={0}
    >
      <GlobeWatermark opacity={0.03} />
      
      <div className="max-w-7xl mx-auto px-8 py-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-bold text-black mb-4">
            Our Vision
          </h1>
          <p className="text-2xl text-gray-600">
            Creating the category. Defining the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {visionComparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-3">{item.company}</h3>
                <p className="text-lg text-gray-600">{item.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <Zap className="w-8 h-8 text-gray-400" />
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12 text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Just as <span className="font-bold text-orange-600">Bloomberg</span> became the 
            intelligence layer for finance,
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mt-4">
            <span className="font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              VibeTrader
            </span> aims to become the AI intelligence layer 
            for global trading
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[Globe, Activity, Sparkles].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-black rounded-full flex items-center justify-center"
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-500 italic">
            "The standard analytics layer for trading platforms"
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-8 right-8 flex items-center gap-2 text-gray-400"
      >
        <span className="text-sm">Slide 15 of 16</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-8 left-8"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToFirst();
          }}
          className="text-gray-400 hover:text-black transition-colors flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span className="text-sm">Back to start</span>
        </button>
      </motion.div>
    </div>
  );
}