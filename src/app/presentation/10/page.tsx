'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { Map, MapMarker, MapTileLayer, MapZoomControl, MapPopup } from '@/components/ui/map';
import type { LatLngExpression } from 'leaflet';
import { Building2, Users, Globe2, Handshake } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import 'leaflet/dist/leaflet.css';

// Approximate coordinates for the regions mentioned in the CSV
const BROKERS = [
  { name: 'Trading Latam', region: 'LatAm', coordinates: [-10.2350, -55.9253] satisfies LatLngExpression, status: 'Entering Pilot', traders: '15K' },
  { name: 'Blueberry Markets', region: 'Australia/Vanuatu', coordinates: [-18.2744, 125.7751] satisfies LatLngExpression, status: 'Pilot Interested', traders: '50K' },
  { name: 'HFM Markets', region: 'Global', coordinates: [35.1264, 33.4299] satisfies LatLngExpression, status: 'Pilot Testing', traders: '2.5M+' },
  { name: 'NAGA Group', region: 'Europe', coordinates: [48.1657, 14.4515] satisfies LatLngExpression, status: 'Partner Interested', traders: '500K+' },
  { name: 'GSS', region: 'Global', coordinates: [25.2048, 55.2708] satisfies LatLngExpression, status: 'Demo / PKO', traders: '1.2M' },
  { name: 'Dupoin', region: 'Global', coordinates: [22.3193, 114.1694] satisfies LatLngExpression, status: 'PKO', traders: '250K' },
  { name: 'Kira Financial', region: 'Global', coordinates: [1.3521, 103.8198] satisfies LatLngExpression, status: 'PKO', traders: '85K' },
  { name: 'Lirunex', region: 'Malaysia/Africa', coordinates: [15.8700, 100.9925] satisfies LatLngExpression, status: 'PKO', traders: '100K+' },
  { name: 'Empowex', region: 'Affiliate', coordinates: [-28.4793, 24.6727] satisfies LatLngExpression, status: 'Partner', traders: '40K' },
  { name: 'Bright Wave Academy', region: 'Education', coordinates: [26.8206, 30.8025] satisfies LatLngExpression, status: 'PKO', traders: '12K' },
  { name: 'GTCFX', region: 'Global', coordinates: [23.8859, 45.0792] satisfies LatLngExpression, status: 'PKO', traders: '300K' },
  { name: 'PU Prime', region: 'Mauritius', coordinates: [-20.3484, 57.5522] satisfies LatLngExpression, status: 'Entering Pilot', traders: '71K' },
  { name: 'Vantage Markets', region: 'Global', coordinates: [-30.8688, 145.2093] satisfies LatLngExpression, status: 'Disco / Demo', traders: '1.8M' },
  { name: 'Spark FX Academy', region: 'Academy', coordinates: [9.0820, 8.6753] satisfies LatLngExpression, status: 'Demo', traders: '8K' },
  { name: 'Ultima Markets', region: 'Partnership', coordinates: [35.6762, 139.6503] satisfies LatLngExpression, status: 'Demo', traders: '150K' },
  { name: 'One Royal', region: 'BDM', coordinates: [38.9637, 35.2433] satisfies LatLngExpression, status: 'PKO', traders: '95K' },
  { name: 'Doo Prime', region: 'Broker', coordinates: [54.5074, -2.1278] satisfies LatLngExpression, status: 'PKO', traders: '2M' },
  { name: 'OrderGlo', region: 'Broker', coordinates: [60.1282, 18.2361] satisfies LatLngExpression, status: 'Demo', traders: '22K' },
  { name: 'EBC', region: 'Broker', coordinates: [43.8153, 8.2245] satisfies LatLngExpression, status: 'Demo', traders: '450K' },
  { name: 'EC Markets', region: 'UAE', coordinates: [18.4241, 65.8478] satisfies LatLngExpression, status: 'Demo Complete', traders: '118K' },
];

export default function Slide9() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  const metrics = [
    { icon: Building2, value: '20+', label: 'In Sales Pipeline' },
    { icon: Users, value: '5.2M+', label: 'Total Traders' },
    { icon: Handshake, value: '6', label: 'Entering Pilot' },
    { icon: Globe2, value: 'Global', label: 'Coverage' }
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
         <Map center={[20, 0]} zoom={3} minZoom={2} maxZoom={5} scrollWheelZoom={false} className="h-full w-full bg-[#f8fafc]">
            <MapTileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
            
            {BROKERS.map((broker) => (
              <MapMarker 
                key={broker.name} 
                position={broker.coordinates}
                iconAnchor={[0, 0]}
                iconSize={null as any}
                className="bg-transparent border-none outline-none overflow-visible"
                icon={
                  <div className="relative -translate-x-1/2 -translate-y-full pb-1 hover:scale-110 transition-transform duration-200 cursor-pointer origin-bottom w-max z-50">
                    <div className="bg-gray-900 rounded-full pl-2.5 pr-1.5 py-1 shadow-2xl border border-gray-800 flex items-center gap-2 whitespace-nowrap hover:bg-black transition-colors">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                       <span className="font-extrabold text-[12px] text-white tracking-tight">{broker.name}</span>
                       <span className="bg-gray-800 text-gray-300 text-[10px] px-1.5 py-0.5 rounded-full font-bold tracking-wide">{broker.traders}</span>
                    </div>
                    {/* Tooltip pointer */}
                    <div className="absolute left-1/2 bottom-[1px] w-2 h-2 bg-gray-900 rotate-45 -translate-x-1/2" />
                  </div>
                }
              >
                <MapPopup className="rounded-xl border-none shadow-2xl p-0 overflow-hidden">
                  <div className="bg-white p-4 min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{broker.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                       <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 uppercase text-[10px] tracking-wider font-bold">
                         {broker.status}
                       </Badge>
                       <span className="text-xs text-gray-500">{broker.region}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                       <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Traders</span>
                       <span className="font-black text-gray-900">{broker.traders}</span>
                    </div>
                  </div>
                </MapPopup>
              </MapMarker>
            ))}
        </Map>
      </div>

      {/* Glassmorphism gradient overlays to fade the map edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-20 w-full h-full px-20 py-16 flex flex-col justify-between pointer-events-none">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: 'easeOut' }}
           className="w-full"
        >
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="flex items-center gap-3 text-gray-500 mb-2">
                <Globe2 className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-widest uppercase">Global Reach</span>
              </div>
              <h1 className="text-6xl font-black text-gray-900 tracking-tighter shadow-sm">
                Broker Pipeline
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Floating Metric Cards */}
        <div className="w-full flex justify-between items-end pb-8">
           
           {/* Left Metrics */}
           <div className="space-y-6 pointer-events-auto">
              {metrics.slice(0, 2).map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-6 w-64 items-center gap-4 flex hover:bg-white/100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{metric.label}</h4>
                    <p className="text-3xl font-black text-gray-900">{metric.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>

           {/* Right Metrics */}
           <div className="space-y-6 pointer-events-auto">
              {metrics.slice(2, 4).map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-6 w-64 items-center gap-4 flex hover:bg-white/100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{metric.label}</h4>
                    <p className="text-3xl font-black text-gray-900">{metric.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>

        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-30">
        {[...Array(17)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === 8
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
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-800 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-lg transition-all z-30"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-800 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-lg transition-all z-30"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}