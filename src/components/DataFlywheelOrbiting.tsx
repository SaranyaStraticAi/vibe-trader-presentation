'use client';

import { Database, Brain, Target, Zap } from 'lucide-react';
import { OrbitingCircles } from './OrbitingCircles';
import { motion } from 'framer-motion';

export default function DataFlywheelOrbiting() {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
      {/* Center hub */}
      <motion.div 
        className="relative z-10 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
      >
        <div className="text-center">
          <p className="text-white font-black text-lg">Data</p>
          <p className="text-white font-black text-lg">Flywheel</p>
        </div>
      </motion.div>

      {/* Animated pulse on center */}
      <motion.div 
        className="absolute w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Outer orbit with 4 items */}
      <OrbitingCircles
        radius={180}
        duration={30}
        path={true}
        iconSize={80}
      >
        {/* Trading Data */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white rounded-2xl p-3 shadow-lg border-2"
          style={{ borderColor: '#3b82f6' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Database className="w-8 h-8 mb-1" style={{ color: '#3b82f6' }} />
          <p className="text-xs font-bold text-black">Trading Data</p>
          <p className="text-[10px] text-gray-600">Chats, trades</p>
        </motion.div>

        {/* AI Analysis */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white rounded-2xl p-3 shadow-lg border-2"
          style={{ borderColor: '#8b5cf6' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Brain className="w-8 h-8 mb-1" style={{ color: '#8b5cf6' }} />
          <p className="text-xs font-bold text-black">AI Analysis</p>
          <p className="text-[10px] text-gray-600">Insights</p>
        </motion.div>

        {/* Customer Data */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white rounded-2xl p-3 shadow-lg border-2"
          style={{ borderColor: '#10b981' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Target className="w-8 h-8 mb-1" style={{ color: '#10b981' }} />
          <p className="text-xs font-bold text-black">Customer</p>
          <p className="text-[10px] text-gray-600">Segment</p>
        </motion.div>

        {/* Product Improvement */}
        <motion.div
          className="flex flex-col items-center justify-center bg-white rounded-2xl p-3 shadow-lg border-2"
          style={{ borderColor: '#f59e0b' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Zap className="w-8 h-8 mb-1" style={{ color: '#f59e0b' }} />
          <p className="text-xs font-bold text-black">Product</p>
          <p className="text-[10px] text-gray-600">Features</p>
        </motion.div>
      </OrbitingCircles>

      {/* Middle orbit with connecting arrows */}
      <OrbitingCircles
        radius={120}
        duration={40}
        reverse
        path={true}
        iconSize={30}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50" />
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-green-400 rounded-full opacity-50" />
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-orange-400 rounded-full opacity-50" />
        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-50" />
      </OrbitingCircles>
    </div>
  );
}