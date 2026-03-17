'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { Map, MapMarker, MapTileLayer } from '@/components/ui/map';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Slide10() {
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
      name: 'Mike Sotello',
      title: 'CFO',
      background: [
        'Serial Business Owner',
        'Financial Operations',
        'Strategic Finance'
      ]
    }
  ];

  const advisors = [
    {
      name: 'Anders Brown',
      title: 'President, Tegria',
      achievement: '$300M+ Deployed'
    },
    {
      name: 'Gregory Brown',
      title: 'Co-CEO Caprock',
      achievement: 'Columbia & Berkeley MBA'
    }
  ];

  const keyPersonnel = [
    { name: 'Tony Sotello', role: 'Expert Trader & Product Specialist' },
    { name: 'Steve Lauver', role: 'Head of GTM & Partnerships' },
    { name: 'Affiliate Manager', role: 'Partner Growth (15+ affiliates)' },
    { name: 'Trading Influencer', role: 'Content & Community' }
  ];

  const teamStats = {
    total: 14,
    burn: '$20K/month'
  };

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full pt-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10"
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <h1 className="text-6xl font-black text-black mb-3 tracking-tighter">
            The Team
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            Experienced operators building the future of trading
          </p>
        </motion.div>

        {/* Leadership Grid (3 Columns) */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 bg-white p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center mb-4">
                <span className="text-lg font-bold">{leader.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="font-bold text-black text-xl mb-1">{leader.name}</h3>
              <p className="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">{leader.title}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {leader.background.map((item, i) => (
                  <li key={i} className="flex items-start">
                      <span className="mr-2 text-gray-400">•</span>
                      {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section: Advisors & Operations */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Advisors & Personnel (2 Columns taken up by nested layout) */}
          <motion.div 
            className="col-span-2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Key Personnel */}
            <div className="border border-gray-200 bg-gray-50 p-6">
               <h3 className="font-bold text-black mb-4 text-lg">Key Team Members</h3>
               <div className="space-y-4">
                  {keyPersonnel.map((person, i) => (
                      <div key={i}>
                          <p className="font-bold text-sm text-black">{person.name}</p>
                          <p className="text-xs text-gray-600">{person.role}</p>
                      </div>
                  ))}
               </div>
            </div>

            {/* Advisors & Core Stats */}
            <div className="border border-gray-200 bg-gray-50 p-6 flex flex-col justify-between">
               <div>
                 <h3 className="font-bold text-black mb-4 text-lg">Board of Advisors</h3>
                 <div className="space-y-4">
                    {advisors.map((advisor, i) => (
                        <div key={i}>
                            <p className="font-bold text-sm text-black">{advisor.name}</p>
                            <p className="text-xs text-gray-600">{advisor.title}</p>
                        </div>
                    ))}
                 </div>
               </div>
               
               <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-black text-black">{teamStats.total}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Total Team</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-red-500">{teamStats.burn}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Burn Rate*</div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Dotted Map / Global Footprint */}
          <motion.div
             className="col-span-1 border border-gray-200 bg-gray-900 relative flex flex-col overflow-hidden min-h-[250px]"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.9, duration: 0.6 }}
          >
             {/* Map at top */}
             <div className="flex-1 relative">
                <Map center={[35, -20] as LatLngExpression} zoom={1} minZoom={1} maxZoom={3} scrollWheelZoom={false} className="w-full h-full !bg-gray-900 !min-h-0">
                    <MapTileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" opacity={0.6} />

                    <MapMarker
                      position={[47.6062, -122.3321] as LatLngExpression}
                      iconSize={null as any}
                      className="bg-transparent border-none outline-none overflow-visible"
                      icon={
                         <div className="relative w-max -translate-x-1/2 -translate-y-1/2">
                             <div className="bg-black/90 text-white text-[7px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                 <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                 Seattle
                             </div>
                         </div>
                      }
                    />
                    <MapMarker
                      position={[20.5937, 78.9629] as LatLngExpression}
                      iconSize={null as any}
                      className="bg-transparent border-none outline-none overflow-visible"
                      icon={
                         <div className="relative w-max -translate-x-1/2 -translate-y-1/2">
                             <div className="bg-black/90 text-white text-[7px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                 India
                             </div>
                         </div>
                      }
                    />
                </Map>
             </div>

             {/* Text at bottom */}
             <div className="relative z-10 w-full bg-gray-800/50 py-3 px-4">
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="font-bold text-white text-sm">Global Operations</h3>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">24/7 Development Cycle</p>
                   </div>
                   <div className="flex gap-4">
                      <div className="text-right">
                         <div className="text-lg font-black text-green-400">4</div>
                         <div className="text-[9px] text-gray-500 uppercase tracking-wider">Seattle</div>
                      </div>
                      <div className="text-right">
                         <div className="text-lg font-black text-blue-400">10</div>
                         <div className="text-[9px] text-gray-500 uppercase tracking-wider">India</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>

      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 9
                ? 'w-8 bg-black'
                : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0 + i * 0.05 }}
          />
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}