'use client';

import { Database, Brain, Target, Zap, TrendingUp, Users, BarChart, Shield } from 'lucide-react';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';

export default function DataFlywheelTest() {
  return (
    <div className="relative h-[500px] w-[500px] mx-auto flex items-center justify-center">
      {/* Inner Circles */}
      <OrbitingCircles radius={100} duration={20} delay={0}>
        <Database className="w-8 h-8 text-blue-500" />
        <Brain className="w-8 h-8 text-purple-500" />
        <Target className="w-8 h-8 text-green-500" />
        <Zap className="w-8 h-8 text-orange-500" />
      </OrbitingCircles>

      {/* Outer Circles - reverse direction */}
      <OrbitingCircles radius={180} duration={30} delay={10} reverse>
        <TrendingUp className="w-6 h-6 text-blue-400" />
        <Users className="w-6 h-6 text-purple-400" />
        <BarChart className="w-6 h-6 text-green-400" />
        <Shield className="w-6 h-6 text-orange-400" />
      </OrbitingCircles>

      {/* Center text */}
      <div className="pointer-events-none">
        <h3 className="text-center text-xl font-bold">Data Flywheel</h3>
      </div>
    </div>
  );
}