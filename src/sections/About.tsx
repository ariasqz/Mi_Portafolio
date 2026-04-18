import { Code2, Palette, Lightbulb, Rocket, Sparkles, Target, Zap, BookOpen } from 'lucide-react';

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
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-sky-400 font-medium mb-1">{item.label}</div>
              <div className="text-xs text-white/50">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500/20 to-transparent border border-sky-500/30 p-1">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center animate-glow">
                    <Code2 className="h-16 w-16 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Desarrollador Junior</h3>
                  <p className="text-sky-400">React • TypeScript • Node.js</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
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
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            ¿Qué puedo hacer por ti?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-white/50">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
