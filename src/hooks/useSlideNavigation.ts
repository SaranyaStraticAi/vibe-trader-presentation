'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { PRESENTATION_CONFIG } from '@/config/presentation';

export function useSlideNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  
  const currentSlide = useMemo(() => {
    const match = pathname.match(/\/presentation\/(\d+)/);
    return match ? parseInt(match[1]) : PRESENTATION_CONFIG.firstSlide;
  }, [pathname]);

  const goToSlide = useCallback((id: number) => {
    // Only check if slide exists (no upper bound check needed)
    if (id >= PRESENTATION_CONFIG.firstSlide) {
      router.push(`/presentation/${id}`);
    }
  }, [router]);

  const nextSlide = useCallback(() => {
    // Don't go past the last slide
    if (currentSlide < PRESENTATION_CONFIG.lastSlide) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > PRESENTATION_CONFIG.firstSlide) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const goToFirst = useCallback(() => {
    goToSlide(PRESENTATION_CONFIG.firstSlide);
  }, [goToSlide]);

  const goToLast = useCallback(() => {
    goToSlide(PRESENTATION_CONFIG.lastSlide);
  }, [goToSlide]);

  return {
    currentSlide,
    totalSlides: PRESENTATION_CONFIG.lastSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    goToFirst,
    goToLast,
    isFirst: currentSlide === PRESENTATION_CONFIG.firstSlide,
    isLast: currentSlide === PRESENTATION_CONFIG.lastSlide,
  };
}