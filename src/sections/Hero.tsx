import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ['#00d4ff', '#0099cc', '#ffffff', '#66e5ff', '#33dbff'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Conectar partículas cercanas
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #001a1a 100%)' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium animate-fade-in border border-sky-500/30">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Disponible para proyectos
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Hola, soy{' '}
            <span className="text-gradient">Abdulgane</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">
            Ruiz Arias
          </h2>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-sky-400 font-light max-w-3xl mx-auto">
            Desarrollador Junior
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Apasionado por la tecnología y en constante aprendizaje. 
            Especializado en desarrollo web moderno con ganas de crecer y aportar valor a cada proyecto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-black font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-sky-500/25 transition-all hover:-translate-y-1"
              onClick={() => scrollToSection('#projects')}
            >
              Ver Proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <a href="/Hoja de vida.docx.pdf" download="Hoja de vida - Abdulgane Ruiz Arias.pdf">
              <Button
                variant="outline"
                size="lg"
                className="border-sky-500/50 text-white hover:bg-sky-500/10 px-8 py-6 text-lg rounded-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/ariasqz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-dark text-white/80 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulgane-ruiz-arias-561276389/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-dark text-white/80 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="abdulganeruiz223@unisangil.edu.co."
              className="p-3 rounded-full glass-dark text-white/80 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-sky-500/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-sky-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
