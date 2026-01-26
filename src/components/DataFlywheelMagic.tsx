'use client';

import { Database, Brain, Target, Zap } from 'lucide-react';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { motion } from 'framer-motion';

export default function DataFlywheelMagic() {
  return (
    <div className="relative h-[600px] w-[600px] mx-auto overflow-hidden flex items-center justify-center">
      {/* Center Hub - The Core Value */}
      <motion.div 
        className="relative z-10 w-40 h-40 bg-black rounded-full flex items-center justify-center shadow-2xl border border-gray-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 rounded-full animate-pulse" />
        <div className="text-center z-20">
          <p className="text-white font-black text-2xl tracking-tight">VIBE</p>
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase mt-1">Flywheel</p>
        </div>
      </motion.div>

      {/* Inner Orbit - The Processing Layer */}
      <OrbitingCircles 
        radius={120} 
        duration={25}
        path={true}
        className="border-none [&>svg]:stroke-gray-200/20"
        iconSize={40}
      >
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-sm border border-gray-100">
          <Database className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-sm border border-gray-100">
          <Brain className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-sm border border-gray-100">
          <Target className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-sm border border-gray-100">
          <Zap className="w-5 h-5 text-gray-600" />
        </div>
      </OrbitingCircles>

      {/* Outer Orbit - The Value Creation Layer */}
      <OrbitingCircles 
        radius={220} 
        duration={40}
        reverse
        path={true}
        className="border-none [&>svg]:stroke-gray-200/20"
        iconSize={60}
      >
        {/* Trading Data Node */}
        <div className="group relative flex items-center justify-center">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Database className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-8 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Trading Data
            </div>
        </div>

        {/* AI Models Node */}
        <div className="group relative flex items-center justify-center">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-500 to-purple-500 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-8 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                AI Models
            </div>
        </div>

        {/* User Insights Node */}
        <div className="group relative flex items-center justify-center">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Target className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-8 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                User Insights
            </div>
        </div>

        {/* Platform Value Node */}
        <div className="group relative flex items-center justify-center">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-8 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Platform Value
            </div>
        </div>
      </OrbitingCircles>
    </div>
  );
}