'use client';

import { KeyboardHandler } from '@/components/navigation/KeyboardHandler';
import { SlideControls } from '@/components/navigation/SlideControls';
import { ProgressIndicator } from '@/components/navigation/ProgressIndicator';

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <KeyboardHandler />
      
      <main className="h-full w-full">
        {children}
      </main>
      
      <SlideControls />
      <ProgressIndicator />
    </div>
  );
}