import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Lightbulb, Rocket, ShoppingCart, Layout, Database, Sparkles } from 'lucide-react';
import developerWorkingVideo from '@/assets/developer-working.mp4';
import rocketFlightVideo from '@/assets/rocket-flight.mp4';
import { Reveal } from '@/components/Reveal';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const services = [
  { icon: Layout, title: 'Páginas web', description: 'Sitios modernos, rápidos y adaptados a celulares para presentar tu negocio o proyecto.' },
  { icon: ShoppingCart, title: 'Tiendas online', description: 'E-commerce pensado para mostrar tus productos y facilitar el proceso de compra.' },
  { icon: Code2, title: 'Aplicaciones web', description: 'Sistemas y herramientas personalizadas para resolver procesos y necesidades concretas.' },
  { icon: Lightbulb, title: 'Asesoría tecnológica', description: 'Te ayudo a convertir una idea en una solución clara, viable y lista para desarrollar.' },
];

const capabilities = [
  { icon: Rocket, value: 'Ideas → productos', label: 'Transformo conceptos en soluciones funcionales' },
  { icon: Palette, value: 'Diseño + código', label: 'Cuido la experiencia y la implementación' },
  { icon: Database, value: 'Full Stack', label: 'Frontend, backend y datos según el proyecto' },
  { icon: Sparkles, value: 'A medida', label: 'La tecnología se adapta a la necesidad' },
];

export function About() {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { ref: shipRef, isVisible: isShipVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVideoVisible(true);
        videoRef.current?.play().catch(() => {});
      } else {
        videoRef.current?.pause();
      }
    }, { threshold: 0.3 });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">Qué puedo hacer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Soluciones pensadas para <span className="text-gradient">tu proyecto</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            No se trata solo de hacer una página. Primero entiendo lo que necesitas y después construyo una solución que tenga sentido para tu negocio, proyecto o idea.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          {capabilities.map((item, index) => (
            <Reveal key={item.value} variant="up" delay={index * 100} className="h-full">
              <div className="group h-full flex flex-col p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-black" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-white/50">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <Reveal variant="left" className="relative">
            <div ref={videoWrapperRef} className="aspect-square rounded-3xl overflow-hidden">
              <video ref={videoRef} src={developerWorkingVideo} loop muted playsInline className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${isVideoVisible ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl" />
          </Reveal>

          <Reveal variant="right" className="space-y-6">
            <span className="text-sky-400 font-medium">De la idea a una solución real</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">¿Tienes una idea, pero no sabes por dónde empezar?</h3>
            <p className="text-white/60 leading-relaxed">
              Puedo ayudarte a definir qué necesitas, elegir una tecnología adecuada y convertir esa idea en una página web, tienda online o aplicación funcional.
            </p>
            <p className="text-white/60 leading-relaxed">
              Mi objetivo es que la tecnología resuelva un problema real: atraer clientes, mostrar tus servicios, vender productos, automatizar tareas o facilitar la gestión de información.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'PostgreSQL', 'Git'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors">{tech}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal variant="up">
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">¿En qué puedo ayudarte?</h3>
            <p className="text-white/50 text-center max-w-2xl mx-auto mb-12">Algunas de las soluciones que puedo desarrollar contigo.</p>
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
          <div ref={shipRef} className="relative h-14 sm:h-24 mt-4">
            {isShipVisible && <div className="absolute top-1/2 left-0 -translate-y-1/2 animate-rocket-fly" aria-hidden="true"><video src={rocketFlightVideo} autoPlay loop muted playsInline className="w-24 h-11 sm:w-44 sm:h-20 object-contain" style={{ mixBlendMode: 'screen' }} /></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
