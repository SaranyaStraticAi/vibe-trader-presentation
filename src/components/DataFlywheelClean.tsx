'use client';

import { Database, Brain, Target, Zap } from 'lucide-react';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';

export default function DataFlywheelClean() {
  return (
    <div className="relative h-[500px] w-[500px] mx-auto overflow-hidden flex items-center justify-center">
      {/* First orbit - main components */}
      <OrbitingCircles 
        radius={180} 
        duration={30}
        iconSize={70}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-lg border-2 border-blue-500">
            <Database className="w-6 h-6 text-blue-500" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-lg border-2 border-purple-500">
            <Brain className="w-6 h-6 text-purple-500" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-lg border-2 border-green-500">
            <Target className="w-6 h-6 text-green-500" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-lg border-2 border-orange-500">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </OrbitingCircles>

      {/* Second orbit - smaller decorative elements */}
      <OrbitingCircles 
        radius={120} 
        duration={20}
        reverse
        iconSize={10}
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full" />
        <div className="w-2 h-2 bg-purple-400 rounded-full" />
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        <div className="w-2 h-2 bg-orange-400 rounded-full" />
      </OrbitingCircles>

      {/* Center content - simple text */}
      <div className="relative z-10">
        <div className="text-center">
          <p className="text-2xl font-black text-black">Data</p>
          <p className="text-2xl font-black text-black">Flywheel</p>
        </div>
      </div>
    </div>
  );
}