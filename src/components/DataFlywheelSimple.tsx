'use client';

import { Database, Brain, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const dataFlywheelSteps = [
  { 
    icon: Database, 
    title: 'Trading Data', 
    desc: 'Chats, trades',
    color: '#3b82f6',
    angle: 0
  },
  { 
    icon: Brain, 
    title: 'AI Analysis', 
    desc: 'Insights',
    color: '#8b5cf6',
    angle: 90
  },
  { 
    icon: Target, 
    title: 'Customer', 
    desc: 'Segment',
    color: '#10b981',
    angle: 180
  },
  { 
    icon: Zap, 
    title: 'Product', 
    desc: 'Features',
    color: '#f59e0b',
    angle: 270
  },
];

export default function DataFlywheelSimple() {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
      {/* Orbit rings */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 500"
      >
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="5 5"
          opacity="0.3"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

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

      {/* Animated pulse */}
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

      {/* Items positioned around the circle */}
      {dataFlywheelSteps.map((step, index) => {
        const Icon = step.icon;
        const angleRad = (step.angle * Math.PI) / 180;
        const radius = 180;
        const x = 250 + radius * Math.cos(angleRad);
        const y = 250 + radius * Math.sin(angleRad);
        
        return (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col items-center">
              <div 
                className="bg-white rounded-full p-3 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl mb-2"
                style={{ borderColor: step.color }}
              >
                <Icon className="w-6 h-6" style={{ color: step.color }} />
              </div>
              <p className="text-xs font-bold text-black text-center">{step.title}</p>
              <p className="text-[10px] text-gray-600 text-center">{step.desc}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Connecting arrows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
      >
        {dataFlywheelSteps.map((_, index) => {
          const currentAngle = index * 90;
          const nextAngle = ((index + 1) % 4) * 90;
          const currentRad = (currentAngle * Math.PI) / 180;
          const nextRad = (nextAngle * Math.PI) / 180;
          const radius = 180;
          
          const x1 = 250 + radius * Math.cos(currentRad);
          const y1 = 250 + radius * Math.sin(currentRad);
          const x2 = 250 + radius * Math.cos(nextRad);
          const y2 = 250 + radius * Math.sin(nextRad);
          
          return (
            <motion.path
              key={`arrow-${index}`}
              d={`M ${x1} ${y1} Q 250 250, ${x2} ${y2}`}
              stroke={dataFlywheelSteps[index].color}
              strokeWidth="1"
              fill="none"
              strokeDasharray="2 2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + index * 0.2, duration: 1 }}
            />
          );
        })}
      </svg>
    </div>
  );
}