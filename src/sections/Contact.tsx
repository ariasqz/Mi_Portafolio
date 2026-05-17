import { Mail, MapPin, Phone, Linkedin, Github} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ariasqz13canal@gmail.com',
    href: 'mailto:ariasqz13canal@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 304619791',
    href: 'tel:+573046194791',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'San Gil, Santander',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ariasqz' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulgane-ruiz-arias-561276389/' }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Trabajemos <span className="text-gradient">juntos</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
            Contáctame por cualquiera de estos medios.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Sígueme</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/10 transition-all hover:-translate-y-1 text-white/70 hover:text-sky-400"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-gradient-primary text-black">
              <h3 className="text-lg font-semibold mb-2">Disponibilidad</h3>
              <p className="text-black/70 text-sm mb-4">
                Actualmente estoy buscando oportunidades como desarrollador junior
                o para colaborar en proyectos interesantes.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Abierto a propuestas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
