import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const categories = ['Todos', 'Web', 'Mobile', 'Diseño'];

const projects = [
  {
    id: 1,
    title: 'Modelo Digital - Sensor RPD-PT100 con filtro Kalman',
    description: 'Desarrollé un modelo digital de un sensor de temperatura (RTD-PT100) mediante un simulador interactivo en 3D, incorporando un Filtro de Kalman para mejorar la estimación de datos en presencia de ruido. El sistema permite visualizar en tiempo real el comportamiento del sensor, comparar mediciones y exportar resultados para análisis.',
    category: 'Web',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1775653665/Imagen_ii00co.png',
    tags: ['Javascript'],
    demoUrl: 'https://ariasqz.github.io/Gemelo_digital_GIBD-SI/',
    githubUrl: 'https://github.com/ariasqz/Gemelo_digital_GIBD-SI/',
    featured: true,
  },
  {
    id: 2,
    title: 'SVI (Sistema de registro y violencia intrafamiliar)',
    description: 'Desarrollo de plataforma web para el registro y monitoreo de casos de violencia intrafamiliar, orientada a la recolección y análisis de datos mediante visualización en mapas de calor por zonas. Implementé funcionalidades de registro de incidentes utilizando tecnologías como JavaScript, Node.js y Python, integrando herramientas de visualización geoespacial con ArcGIS.',
    category: 'Web',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1775654765/Imagen_hith7c.png',
    tags: ['Javascript', 'React', 'Bootstrap', 'MySql', 'Php', 'Node.js', 'Python'],
    demoUrl: 'https://ariasqz.github.io/proyecto-SVI/',
    githubUrl: 'https://github.com/ariasqz/proyecto-SVI/',
    featured: true,
  },
  {
    id: 3,
    title: 'WeatherView',
    description: 'Dashboard responsive a partir de un diseño elegante seleccionado.',
    category: 'Diseño',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1775832567/Imagen_fftazz.png',
    tags: ['CSS3', 'Html'],
    demoUrl: null,
    githubUrl: 'https://github.com/ariasqz/WeatherView',
    featured: false,
  },
  {
    id: 4,
    title: 'Dashboard',
    description: 'Dashboard de clima que consume una APIs externas para mostrar información meteorológica y noticias en tiempo real.',
    category: 'Web',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1775792077/Imagen_yuuybx.png',
    tags: ['JavaScript', 'API REST', 'CSS3', 'Javascript'],
    demoUrl: 'https://ariasqz.github.io/DashBoard_Interactivo-/',
    githubUrl: 'https://github.com/ariasqz/DashBoard_Interactivo-',
    featured: false,
  },
  {
    id: 5,
    title: 'Landing Page',
    description: 'Landing page para un restaurante, enfocada en mejorar su presencia digital y atraer clientes. La página presenta información clave como el menú, ubicación y contacto, mediante un diseño atractivo, responsive y fácil de navegar. Se optimizó la experiencia del usuario para facilitar el acceso a la información y promover la interacción con el negocio..',
    category: 'Diseño',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1775829542/Imagen_cussjk.png',
    tags: ['Javascript', 'UI/UX', 'CSS3'],
    demoUrl: 'https://ariasqz.github.io/Restaurante_MaizTostao_page/',
    githubUrl: 'https://github.com/ariasqz/Restaurante_MaizTostao_page',
    featured: false,
  },
  {
    id: 6,
    title: 'Btc-Whatchdog',
    description: 'Bot que monitorea el precio de Bitcoin en tiempo real y envía alertas a Telegram cuando hay cambios significativos. ',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1776127855/Imagen_unynw2.png',
    tags: ['Javascript'],
    demoUrl: null,
    githubUrl: 'https://github.com',
    featured: false,
  },
    {
    id: 7,
    title: 'RPG por turnos ',
    description: 'RPG por turnos en el navegador desarrollado con JavaScript vanilla practicando POO. ',
    category: 'Web',
    image: 'https://res.cloudinary.com/dwhbqktyy/image/upload/v1776128127/Imagen_sl0ux0.png',
    tags: ['Javascript'],
    demoUrl: null,
    githubUrl: 'https://github.com/ariasqz/RPG_por_turnos',
    featured: false,
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Mi <span className="text-gradient">trabajo</span> reciente
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Proyectos que he desarrollado para practicar y mejorar mis habilidades como desarrollador.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-gradient-primary" />
            Proyectos Destacados
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-500/10">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-2 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-sky-500/20 text-sky-400 border-sky-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                    </div>
                    <div className="p-6 group-hover:opacity-0 transition-opacity">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-sky-500/20 text-sky-400 border-sky-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                    <DialogDescription className="text-white/50">{project.category}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl"
                    />
                    <p className="text-white/70">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-sky-500/20 text-sky-400 border-sky-500/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-gradient-primary text-black font-semibold hover:opacity-90">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </Button>
                      {project.githubUrl && (
                        <Button variant="outline" className="border-sky-500/30 text-white hover:bg-sky-500/10">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* All Projects Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'bg-gradient-primary text-black font-semibold'
                  : 'border-sky-500/30 text-white hover:bg-sky-500/10'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer p-6 rounded-2xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <ArrowUpRight className="h-6 w-6 text-black" />
                    </div>
                    <Badge variant="outline" className="border-sky-500/30 text-sky-400">{project.category}</Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-white/50 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-sky-400/70">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-white">{project.title}</DialogTitle>
                  <DialogDescription className="text-white/50">{project.category}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl"
                  />
                  <p className="text-white/70">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-sky-500/20 text-sky-400 border-sky-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-primary text-black font-semibold hover:opacity-90"
                      onClick={() => window.open(project.demoUrl || '', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>

                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        className="border-sky-500/30 text-white hover:bg-sky-500/10"
                        onClick={() => window.open(project.githubUrl!, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
