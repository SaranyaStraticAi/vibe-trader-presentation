'use client';

import { KeyboardHandler } from '@/components/navigation/KeyboardHandler';
import { SlideControls } from '@/components/navigation/SlideControls';
import { ProgressIndicator } from '@/components/navigation/ProgressIndicator';
import { PresentationScaleWrapper } from '@/components/PresentationScaleWrapper';

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PresentationScaleWrapper>
      <div className="relative h-full w-full overflow-hidden">
        <KeyboardHandler />
        
        <main className="h-full w-full">
          {children}
        </main>
        
        <SlideControls />
        <ProgressIndicator />
      </div>
    </PresentationScaleWrapper>
  );
}