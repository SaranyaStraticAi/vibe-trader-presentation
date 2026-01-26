'use client';

import { motion } from 'framer-motion';
import { Users, Award, DollarSign, Target, Shield, Zap } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export default function Slide7() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const riskFactors = [
    { factor: 'Team', score: 95, fullMark: 100 },
    { factor: 'Market', score: 90, fullMark: 100 },
    { factor: 'Product', score: 85, fullMark: 100 },
    { factor: 'Distribution', score: 92, fullMark: 100 },
    { factor: 'Unit Economics', score: 88, fullMark: 100 },
    { factor: 'Scalability', score: 94, fullMark: 100 },
  ];

  const deRiskingFactors = [
    {
      icon: Users,
      title: 'High-Pedigree Team',
      desc: 'Ex-Amazon, Fortune 500 consulting, SaaS leaders',
      highlight: 'Proven execution'
    },
    {
      icon: DollarSign,
      title: '$250/mo ARPU',
      desc: 'Triples standard SaaS unit economics',
      highlight: '3x industry standard'
    },
    {
      icon: Target,
      title: 'B2B2C Strategy',
      desc: 'Broker partnerships reduce CAC',
      highlight: 'Low acquisition cost'
    },
    {
      icon: Shield,
      title: 'Pilot Program',
      desc: '2,500 users → $7.5M ARR',
      highlight: 'Clear path to revenue'
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

      {/* Geometric accent shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-indigo-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-indigo-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-indigo-500 mb-8"
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
                    className="flex gap-4 p-4 border-2 border-gray-200 hover:border-indigo-500 transition-colors group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-black">{factor.title}</p>
                      <p className="text-sm text-gray-600 mb-2">{factor.desc}</p>
                      <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold">
                        {factor.highlight}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Risk Score Radar Chart */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-black mb-4">Risk Mitigation Score</h3>
              <ResponsiveContainer width={400} height={350}>
                <RadarChart data={riskFactors}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="factor" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar 
                    name="Score" 
                    dataKey="score" 
                    stroke="#6366f1" 
                    fill="#6366f1" 
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-5xl font-black text-indigo-500">91%</p>
                <p className="text-sm text-gray-600">Overall De-Risk Score</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom valuation highlight */}
          <motion.div
            className="mt-12 bg-indigo-50 p-6 border-2 border-indigo-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-black text-indigo-500">$10M</p>
                <p className="text-sm text-gray-600">Internal Valuation</p>
              </div>
              <div>
                <p className="text-3xl font-black text-indigo-500">12mo</p>
                <p className="text-sm text-gray-600">Runway with $1M</p>
              </div>
              <div>
                <p className="text-3xl font-black text-indigo-500">M&A</p>
                <p className="text-sm text-gray-600">Clear Exit Strategy</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(10)].map((_, i) => (
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