'use client';

import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  className?: string;
}

export function ProgressIndicator({ className }: ProgressIndicatorProps) {
  const { currentSlide, goToSlide, totalSlides } = useSlideNavigation();

  return (
    <div className={cn('fixed bottom-8 right-8 z-50 flex gap-2', className)}>
      {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNumber) => (
        <button
          key={slideNumber}
          onClick={() => goToSlide(slideNumber)}
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-300',
            slideNumber === currentSlide
              ? 'w-8 bg-white'
              : 'bg-white/40 hover:bg-white/60'
          )}
          aria-label={`Go to slide ${slideNumber}`}
        />
      ))}
    </div>
  );
}