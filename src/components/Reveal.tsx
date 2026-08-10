import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  /** Tipo de animación de entrada */
  variant?: RevealVariant;
  /** Retraso en milisegundos, útil para escalonar (stagger) varios elementos */
  delay?: number;
  /** Duración de la transición en milisegundos */
  duration?: number;
  /** Si es true, la animación se repite cada vez que el elemento entra/sale de pantalla */
  repeat?: boolean;
  /** Umbral de visibilidad (0 a 1) para disparar la animación */
  threshold?: number;
  className?: string;
  as?: 'div' | 'span';
}

const hiddenStateByVariant: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-10',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  scale: 'opacity-0 scale-95',
  fade: 'opacity-0',
};

const visibleState = 'opacity-100 translate-y-0 translate-x-0 scale-100';

/**
 * Envuelve contenido para que aparezca (y opcionalmente desaparezca) de forma
 * animada a medida que el usuario hace scroll y el elemento entra/sale del viewport.
 *
 * Ejemplo:
 *   <Reveal variant="up" delay={100}>
 *     <div>Contenido...</div>
 *   </Reveal>
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 700,
  repeat = false,
  threshold = 0.15,
  className = '',
  as = 'div',
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    once: !repeat,
  });

  const Tag = as;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>}
      className={`transition-all ease-out ${
        isVisible ? visibleState : hiddenStateByVariant[variant]
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}
