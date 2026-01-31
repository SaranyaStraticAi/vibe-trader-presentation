'use client';

import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef<any>(null);
  const [dots, setDots] = useState<any[]>([]);
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        return !!gl;
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebGLSupported(false);
      return;
    }
    // Auto-rotate and disable interactions
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      globeEl.current.controls().enableRotate = false;
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
    }

    // Create a much denser grid of dots for world map
    const generateDots = () => {
      const dots = [];
      // Create a grid of dots with better continent approximation
      for (let lat = -80; lat <= 80; lat += 3) {
        for (let lng = -180; lng <= 180; lng += 3) {
          // Better land approximation
          const isLand = 
            // Europe
            (lng > -10 && lng < 40 && lat > 35 && lat < 70) ||
            // Africa
            (lng > -20 && lng < 50 && lat > -35 && lat < 35) ||
            // Asia
            (lng > 40 && lng < 150 && lat > 0 && lat < 75) ||
            // North America
            (lng > -170 && lng < -50 && lat > 25 && lat < 70) ||
            // South America
            (lng > -85 && lng < -35 && lat > -55 && lat < 12) ||
            // Australia
            (lng > 110 && lng < 155 && lat > -45 && lat < -10) ||
            // India
            (lng > 68 && lng < 97 && lat > 8 && lat < 35) ||
            // Middle East
            (lng > 35 && lng < 65 && lat > 15 && lat < 40) ||
            // Central America
            (lng > -120 && lng < -60 && lat > 7 && lat < 30) ||
            // Indonesia
            (lng > 95 && lng < 140 && lat > -10 && lat < 6) ||
            // Japan
            (lng > 130 && lng < 145 && lat > 30 && lat < 45);
          
          if (isLand) {
            dots.push({
              lat,
              lng,
              size: 0.08,
              color: '#d1d5db' // Light gray color for dots
            });
          }
        }
      }
      return dots;
    };

    setDots(generateDots());

    // Create arcs for forex trading connections with subtle blue
    const tradingConnections = [
      { startLat: 51.5074, startLng: -0.1278, endLat: 40.7128, endLng: -74.0060 }, // London to NYC
      { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503 }, // London to Tokyo
      { startLat: 40.7128, startLng: -74.0060, endLat: 35.6762, endLng: 139.6503 }, // NYC to Tokyo
      { startLat: 51.5074, startLng: -0.1278, endLat: 22.3193, endLng: 114.1694 }, // London to Hong Kong
      { startLat: 51.5074, startLng: -0.1278, endLat: -33.8688, endLng: 151.2093 }, // London to Sydney
      { startLat: 40.7128, startLng: -74.0060, endLat: 50.1109, endLng: 8.6821 }, // NYC to Frankfurt
      { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198 }, // Tokyo to Singapore
    ];
    setArcsData(tradingConnections);
  }, []);

  // Fallback UI when WebGL is not supported
  if (!webGLSupported) {
    return (
      <div className="w-[600px] h-[600px] flex items-center justify-center bg-gray-50 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <circle cx="300" cy="300" r="290" fill="none" stroke="#000" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="5,5" />
            <circle cx="300" cy="300" r="100" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="5,5" />
          </svg>
        </div>
        <div className="text-center z-10">
          <div className="text-6xl mb-4">🌍</div>
          <p className="text-gray-600 text-sm">Global Markets</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ pointerEvents: 'none' }}>
    <Globe
      ref={globeEl}
      width={600}
      height={600}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png" // Light water background
      showAtmosphere={true}
      atmosphereColor="#f3f4f6"
      atmosphereAltitude={0.1}
      
      // Dots for landmass
      pointsData={dots}
      pointAltitude={0.005}
      pointRadius="size"
      pointColor="color"
      pointsMerge={false}
      
      // Trading connections - subtle blue arcs
      arcsData={arcsData}
      arcColor={() => '#3b82f6'}
      arcDashLength={0.5}
      arcDashGap={0.3}
      arcDashAnimateTime={3000}
      arcStroke={0.5}
      arcAltitudeAutoScale={0.3}
      arcsTransitionDuration={0}
      
      // Major forex centers with bigger dots
      labelsData={[
        { lat: 51.5074, lng: -0.1278, text: 'London', size: 0.5 },
        { lat: 40.7128, lng: -74.0060, text: 'New York', size: 0.5 },
        { lat: 35.6762, lng: 139.6503, text: 'Tokyo', size: 0.5 },
        { lat: 22.3193, lng: 114.1694, text: 'Hong Kong', size: 0.4 },
        { lat: -33.8688, lng: 151.2093, text: 'Sydney', size: 0.4 },
        { lat: 50.1109, lng: 8.6821, text: 'Frankfurt', size: 0.4 },
        { lat: 1.3521, lng: 103.8198, text: 'Singapore', size: 0.4 },
      ]}
      labelText="text"
      labelSize={0.8}
      labelColor={() => '#4b5563'}
      labelAltitude={0.01}
      labelIncludeDot={true}
      labelDotRadius="size"
      labelDotOrientation={() => 'bottom'}
    />
    </div>
  );
};

export default GlobeComponent;