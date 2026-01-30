'use client';

import { ReactNode, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

interface PresentationScaleWrapperProps {
  children: ReactNode;
  baseWidth?: number;
  baseHeight?: number;
}

export function PresentationScaleWrapper({ 
  children,
  baseWidth = 1920,
  baseHeight = 1080 
}: PresentationScaleWrapperProps) {
  const [containerRef, bounds] = useMeasure();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || bounds.width === 0 || bounds.height === 0) return;

    const scaleX = bounds.width / baseWidth;
    const scaleY = bounds.height / baseHeight;
    
    // Use different scaling strategy based on aspect ratio
    // For portrait orientations (mobile/tablet), fill width
    // For landscape, fit entire slide
    const isPortrait = bounds.height > bounds.width;
    const scale = isPortrait ? scaleX : Math.min(scaleX, scaleY);

    // Calculate centering offsets
    const scaledWidth = baseWidth * scale;
    const scaledHeight = baseHeight * scale;
    const offsetX = (bounds.width - scaledWidth) / 2;
    const offsetY = (bounds.height - scaledHeight) / 2;

    // Apply scaling using CSS variables to avoid direct transform conflicts
    contentRef.current.style.setProperty('--scale', scale.toString());
    contentRef.current.style.setProperty('--offset-x', `${offsetX}px`);
    contentRef.current.style.setProperty('--offset-y', `${offsetY}px`);
  }, [bounds.width, bounds.height, baseWidth, baseHeight]);

  return (
    <div 
      ref={containerRef}
      className="h-screen w-screen bg-black overflow-hidden relative"
    >
      <div
        ref={contentRef}
        className="absolute origin-top-left"
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          transform: `translate(var(--offset-x, 0), var(--offset-y, 0)) scale(var(--scale, 1))`,
          backgroundColor: 'white',
          // Use isolation to create a new stacking context
          // This helps prevent WebGL rendering issues
          isolation: 'isolate',
        }}
      >
        {children}
      </div>
    </div>
  );
}