import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const experiences = [
    {
    type: 'Universitario',
    title: 'Modelo Digital de Sensor RTD PT-100 con filtro kalman',
    company: 'Semillero GIBSI - UNISANGIL ',
    location: 'San Gil, Santander',
    period: '2026',
    description:
      'Modelo digital de un sensor de temperatura (RTD-PT100) mediante un simulador interactivo en 3D, incorporando un Filtro de Kalman para mejorar la estimación de datos en presencia de ruido. El sistema permite visualizar en tiempo real el comportamiento del sensor, comparar mediciones y exportar resultados para análisis.',
    achievements: [
      'Desarrollé un simulador interactivo en 3D de un sensor RTD-PT100 utilizando JavaScript.',
      'Implementé un Filtro de Kalman para mejorar la estimación de temperatura a partir de datos con ruido.',
      'Integré visualización en tiempo real mediante gráficas y tablas de cálculo.',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'Git',],
  },
  {
    type: 'work',
    title: 'Desarrollador Web Freelance',
    company: 'Maiz tostao Restaurante',
    location: 'Remoto',
    period: '2024 - 2025',
    description:
      'Desarrollé una landing page para un restaurante, enfocada en mejorar su presencia digital y atraer clientes. La página presenta información clave como el menú, ubicación y contacto, mediante un diseño atractivo, responsive y fácil de navegar.',
    achievements: [
      'Diseñé y desarrollé la página web del restaurante, enfocada en mejorar su presencia digital.',
      'Implementé interfaz atractiva y responsive utilizando HTML, CSS y JavaScript.',
      'Optimicé la experiencia del usuario para facilitar la navegación y visualización del menú.',
    ],
    technologies: ['React', 'Javascript', 'Git'],
  },

];

const education = [
  {
    type: 'education',
    title: 'Grado en Ingeniería de Sistemas',
    institution: 'UNISANGIL (En curso)',
    period: '2023 - Presente',
    description: 'Formación en inteligencia artificial, algoritmos, estructuras de datos y desarrollo de software.',
  },
];

const certifications = [
  {
    title: 'IA sin límites',
    issuer: 'AWS Entrena Colombia (Tidwit)',
    year: '2026',
  },
  {
    title: 'Coursera & IBM',
    issuer: 'Python for Data Science, AI & Development',
    year: '2025',
  },
  {
    title: 'Ciencia de Datos',
    issuer: 'Generacion TIC',
    year: '2024',
  },
  {
    title: 'Ciberseguridad',
    issuer: 'Generacion TIC',
    year: '2024',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal variant="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">
            Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Mi <span className="text-gradient">trayectoria</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Mi camino en el desarrollo web, desde los primeros pasos hasta donde estoy ahora.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-black" />
              </div>
              Experiencia Laboral
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Reveal key={index} variant="left" delay={index * 120}>
                  <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-transparent">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background" />

                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                          <p className="text-white/60">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-sky-400">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-white/60 mb-4">{exp.description}</p>

                      <div className="space-y-3">
                        <p className="text-sm font-medium text-white">Logros principales:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-white/50"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-sky-500/30 text-sky-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-black" />
                </div>
                Educación
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Reveal key={index} variant="right" delay={index * 120}>
                    <div className="p-5 rounded-xl bg-card border border-border hover:border-sky-500/50 transition-all">
                      <h4 className="font-semibold text-white mb-1">{edu.title}</h4>
                      <p className="text-sm text-white/60 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-sky-400">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <p className="text-sm text-white/50 mt-3">
                        {edu.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Award className="h-5 w-5 text-black" />
                </div>
                Certificaciones
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Reveal key={index} variant="right" delay={index * 100}>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-sky-500/50 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-sky-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-white truncate">{cert.title}</h4>
                        <p className="text-xs text-white/50">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
