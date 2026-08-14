import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Lightbulb, Rocket, Sparkles, Target, Zap, BookOpen } from 'lucide-react';
import developerWorkingVideo from '@/assets/developer-working.mp4';
import rocketFlightVideo from '@/assets/rocket-flight.mp4';
import { Reveal } from '@/components/Reveal';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
const highlights = [
  {
    icon: BookOpen,
    label: 'Formación',
    value: 'Autodidacta',
    description: 'Aprendizaje continuo',
  },
  {
    icon: Target,
    label: 'Enfoque',
    value: 'Full Stack',
    description: 'Frontend & Backend',
  },
  {
    icon: Zap,
    label: 'Metodología',
    value: 'Ágil',
    description: 'Scrum & Kanban',
  },
  {
    icon: Sparkles,
    label: 'Pasión',
    value: '100%',
    description: 'Por la tecnología',
  },
];

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y responsivos con las últimas tecnologías.',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces atractivas y funcionales centradas en la experiencia del usuario.',
  },
  {
    icon: Lightbulb,
    title: 'Soluciones Creativas',
    description: 'Resolución de problemas con enfoques innovadores y eficientes.',
  },
  {
    icon: Rocket,
    title: 'Optimización',
    description: 'Mejora del rendimiento y la velocidad de aplicaciones web.',
  },
];

export function About() {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { ref: shipRef, isVisible: isShipVisible } = useScrollReveal<HTMLDivElement>({threshold: 0.3,});

  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal variant="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">
            Sobre Mí
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Conoce mi <span className="text-gradient">historia</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Como desarrollador junior, cada día es una oportunidad para aprender algo nuevo 
            y superar desafíos. Me apasiona crear soluciones que marquen la diferencia.
          </p>
        </Reveal>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          {highlights.map((item, index) => (
            <Reveal key={item.label} variant="up" delay={index * 100} className="h-full">
              <div className="group h-full flex flex-col p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-sky-400 font-medium mb-1">{item.label}</div>
                <div className="text-xs text-white/50">{item.description}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <Reveal variant="left" className="relative">
            <div
              ref={videoWrapperRef}
              className="aspect-square rounded-3xl overflow-hidden"
            >
              <video
                ref={videoRef}
                src={developerWorkingVideo}
                loop
                muted
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  isVideoVisible ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl" />
          </Reveal>

          {/* Text Content */}
          <Reveal variant="right" className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Siempre aprendiendo, siempre creciendo
            </h3>
            <p className="text-white/60 leading-relaxed">
              Mi viaje en el desarrollo web comenzó con una curiosidad insaciable por entender 
              cómo funcionan las cosas en internet. Como desarrollador junior, aprovecho cada 
              proyecto como una oportunidad para mejorar mis habilidades y aprender nuevas tecnologías.
            </p>
            <p className="text-white/60 leading-relaxed">
              Me enfoco en escribir código limpio, bien estructurado y mantenible. 
              Disfruto trabajando en equipo y colaborando en proyectos desafiantes que 
              me permiten crecer profesionalmente.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        {/* Services */}
        <div>
          <Reveal variant="up">
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
              ¿Qué puedo hacer por ti?
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((service, index) => (
              <Reveal key={service.title} variant="up" delay={index * 100} className="h-full">
                <div className="group h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-500/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-white/50">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Spaceship flying across on scroll (straight line, full viewport width via vw units) */}
          <div
            ref={shipRef}
            className="relative h-14 sm:h-24 mt-4"
          >
            {isShipVisible && (
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 animate-rocket-fly"
                aria-hidden="true"
              >
                <video
                  src={rocketFlightVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-24 h-11 sm:w-44 sm:h-20 object-contain"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
