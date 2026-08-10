import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  /** Porcentaje del elemento visible para disparar la animación (0 a 1) */
  threshold?: number;
  /** Margen extra alrededor del viewport, útil para adelantar/atrasar el disparo */
  rootMargin?: string;
  /** Si es true, la animación solo ocurre una vez y no se revierte al salir de pantalla */
  once?: boolean;
}

/**
 * Hook que detecta cuándo un elemento entra (o sale) del viewport mediante
 * IntersectionObserver, para disparar animaciones de aparición/desaparición
 * a medida que el usuario hace scroll.
 *
 * Uso:
 *   const { ref, isVisible } = useScrollReveal();
 *   <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
