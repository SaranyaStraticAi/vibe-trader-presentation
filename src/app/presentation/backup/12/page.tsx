'use client';

import { motion } from 'framer-motion';
import { Users, Globe2, Award, Building2 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { DottedMap } from '@/components/ui/dotted-map';

export default function Slide11() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const leadership = [
    {
      name: 'Saranya A',
      title: 'CEO',
      background: [
        'MS Penn State University',
        'Serial Entrepreneur',
        'Business Strategy'
      ]
    },
    {
      name: 'Nithya G',
      title: 'CTO',
      background: [
        'MS Computer Science (AI/ML)',
        '15+ Years Engineering',
        'U Cincinnati'
      ]
    },
    {
      name: 'Alex Martinez',
      title: 'CSO',
      background: [
        'Professional Trader',
        'Product Design Expert',
        'Strategy Architect'
      ]
    },
    {
      name: 'Mike Sotello',
      title: 'CFO',
      background: [
        'Serial Business Owner',
        'Financial Operations',
        'Strategic Finance'
      ]
    }
  ];

  const keyPersonnel = [
    {
      name: 'Tony Sotello',
      role: 'Expert Trader & Product Specialist',
      detail: 'Multi-decade trading experience'
    },
    {
      name: 'Steve Lauver', 
      role: 'Head of GTM & Strategic Partnerships',
      detail: 'Enterprise sales, Finance background'
    }
  ];

  const additionalTeam = [
    {
      name: 'Affiliate Manager',
      role: 'Partner Growth',
      detail: '15 affiliates onboarded, 1K users/mo pipeline'
    },
    {
      name: 'Trading Influencer',
      role: 'Content & Community (Contractor)',
      detail: 'Professional trader with social following'
    }
  ];

  const teamStats = {
    engineering: 5,
    sales: 5,
    design: 3,
    affiliate: 2,
    leadership: 6,
    total: 21,
    burn: '$20K/month',
    burnPerPerson: '$0.71/day'
  };

  const advisors = [
    {
      name: 'Anders Brown',
      title: 'President, Tegria',
      achievement: '$300M+ Deployed'
    },
    {
      name: 'Edgar Martinez',
      title: 'MLB Hall of Fame',
      achievement: 'Co-Founder Plaza Bank'
    },
    {
      name: 'Gregory Brown',
      title: 'Co-CEO Caprock',
      achievement: 'Columbia & Berkeley MBA'
    }
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

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full h-[85vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex flex-col"
        >
            <div className="mb-4">
                <motion.div 
                    className="w-12 h-1 bg-black mb-4"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.h1
                    className="text-5xl font-black text-black mb-1 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    The Team
                </motion.h1>
                <p className="text-xl text-gray-600 font-light">experienced operators building the future of trading</p>
            </div>

          {/* Leadership Grid - Top Half */}
          <div className="grid grid-cols-4 gap-6 mb-8 mt-4">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="border-2 border-gray-200 p-5 hover:border-black transition-all group bg-white shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-gray-100 rounded-full mb-4 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <span className="text-xl font-bold">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-bold text-black text-lg">{leader.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wide">{leader.title}</p>
                <ul className="text-xs text-gray-600 space-y-1.5 leading-tight">
                  {leader.background.map((item, i) => (
                    <li key={i} className="flex items-start">
                        <span className="mr-1.5 text-gray-400">•</span>
                        {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Key Personnel & Additional Team */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Key Personnel */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Leadership</h3>
              <div className="space-y-2">
                {keyPersonnel.map((person, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">{person.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-black text-sm">{person.name}</p>
                      <p className="text-xs text-gray-600">{person.role}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{person.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Team & Stats */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Growth Team & Stats</h3>
              <div className="space-y-2">
                {additionalTeam.map((person, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">{index === 0 ? 'AM' : 'TI'}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-black text-sm">{person.name}</p>
                      <p className="text-xs text-gray-600">{person.role}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{person.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Split: Advisors & Map */}
          <div className="grid grid-cols-12 gap-8 h-48 border-t border-gray-100 pt-6">
            
            {/* Left: Advisors (Compact) */}
            <div className="col-span-5 flex flex-col justify-between">
                <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Board of Advisors</h3>
                    <div className="space-y-4">
                        {advisors.map((advisor, index) => (
                            <div key={index} className="flex justify-between items-baseline border-b border-dashed border-gray-200 pb-1">
                                <p className="font-bold text-sm text-black">{advisor.name}</p>
                                <p className="text-xs text-gray-500">{advisor.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">
                    Backed by industry leaders in finance & sports
                </div>
            </div>

            {/* Right: Operations Map */}
            <div className="col-span-7 relative h-full">
                 <DottedMap 
                    className="w-full h-full bg-gray-900 rounded-lg shadow-inner"
                    points={[
                      { x: 25, y: 40, label: "USA" },
                      { x: 70, y: 55, label: "India" }
                    ]}
                    connections={[
                      [{ x: 25, y: 40 }, { x: 70, y: 55 }]
                    ]}
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded p-3">
                      <div className="grid grid-cols-2 gap-3 text-white">
                          <div>
                              <p className="text-xl font-black">{teamStats.total}+</p>
                              <p className="text-[9px] uppercase tracking-wider opacity-70">Team Members</p>
                          </div>
                          <div>
                              <p className="text-xl font-black">{teamStats.burn}</p>
                              <p className="text-[9px] uppercase tracking-wider opacity-70">Monthly Burn*</p>
                              <p className="text-[8px] opacity-60 mt-0.5">*Some founders no salary</p>
                          </div>
                          <div>
                              <p className="text-xl font-black">24/7</p>
                              <p className="text-[9px] uppercase tracking-wider opacity-70">Dev Cycle</p>
                          </div>
                          <div>
                              <p className="text-xl font-black text-green-400">{teamStats.burnPerPerson}</p>
                              <p className="text-[9px] uppercase tracking-wider opacity-70">Per Person</p>
                          </div>
                      </div>
                  </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(13)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 10
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