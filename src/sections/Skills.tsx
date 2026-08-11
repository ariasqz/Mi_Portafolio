import { useState } from 'react';
import {
  Code2,
  Database,
  Wrench,
  Terminal,
  Star,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 'intermedio', experience: '5 meses' },
      { name: 'TypeScript', level: 'intermedio', experience: '6 meses' },
      { name: 'JavaScript', level: 'avanzado', experience: '1.5+ años' },
      { name: 'HTML5 / CSS3', level: 'avanzado', experience: '2+ años' },
      { name: 'Tailwind CSS', level: 'intermedio', experience: '5 meses' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 'intermedio', experience: '6 meses' },
      { name: 'Express.js', level: 'intermedio', experience: '6 meses' },
      { name: 'Python', level: 'avanzado', experience: '2+ años' },
      { name: 'REST APIs', level: 'intermedio', experience: '8 meses' },
    ],
  },
  {
    id: 'database',
    label: 'Base de Datos',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 'intermedio', experience: '6 meses' },
      { name: 'Supabase', level: 'basico', experience: '4 meses' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 'intermedio', experience: '1.5+ año' },
      { name: 'VS Code', level: 'avanzado', experience: '2+ años' },
      { name: 'Figma', level: 'intermedio', experience: '6 meses' },
      { name: 'Docker', level: 'basico', experience: 'Aprendiendo' },
      { name: 'Linux', level: 'intermedio', experience: '1 año' },
    ],
  },
];

const levelConfig = {
  avanzado: {
    label: 'Avanzado',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/20',
    borderColor: 'border-sky-500/50',
    dots: 3,
  },
  intermedio: {
    label: 'Intermedio',
    color: 'text-white',
    bgColor: 'bg-white/10',
    borderColor: 'border-white/30',
    dots: 2,
  },
  basico: {
    label: 'Básico',
    color: 'text-white/60',
    bgColor: 'bg-white/5',
    borderColor: 'border-white/20',
    dots: 1,
  },
};

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'java',
  'PostgreSQL',
  'Python',
  'Git',
  'Tailwind CSS',
  'Firebase',
  'Docker',
  'Linux',
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal variant="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Mi stack <span className="text-gradient">tecnológico</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tecnologías que domino y en las que sigo profundizando cada día.
          </p>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Category Tabs */}
          <Reveal variant="left" className="lg:col-span-1">
            <div className="space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all border ${
                    activeCategory === category.id
                      ? 'bg-gradient-primary text-black border-sky-400 shadow-lg shadow-sky-500/20'
                      : 'bg-card border-border hover:border-sky-500/30 text-white'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.label}</span>
                  {activeCategory === category.id && (
                    <Star className="h-4 w-4 ml-auto fill-black" />
                  )}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-400" />
                Niveles de dominio
              </h4>
              <div className="space-y-3">
                {Object.entries(levelConfig).map(([key, config]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= config.dots ? 'bg-sky-400' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-sm ${config.color}`}>{config.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Skills Display */}
          <Reveal variant="right" className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                {currentCategory && (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <currentCategory.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{currentCategory.label}</h3>
                      <p className="text-sm text-white/50 flex items-center gap-1">
                        <Layers className="h-4 w-4" />
                        {currentCategory.skills.length} habilidades
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentCategory?.skills.map((skill) => {
                  const config = levelConfig[skill.level as keyof typeof levelConfig];
                  return (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl border ${config.borderColor} ${config.bgColor} transition-all hover:-translate-y-1`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`w-1.5 h-1.5 rounded-full ${
                                dot <= config.dots ? 'bg-sky-400' : 'bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${config.color}`}>{config.label}</span>
                        <span className="text-xs text-white/40">{skill.experience}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tech Cloud */}
        <Reveal variant="up" className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Tecnologías que uso</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 rounded-full bg-card border border-border hover:border-sky-500/50 hover:bg-sky-500/10 transition-all hover:-translate-y-1 cursor-default text-sm font-medium text-white/80 hover:text-sky-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
