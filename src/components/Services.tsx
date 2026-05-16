'use client'

import { motion, useReducedMotion } from 'framer-motion'

const services = [
  {
    n: '01',
    name: 'Marca Personal desde Cero',
    desc: 'Identidad, voz y posicionamiento para que tu nombre se convierta en una marca que la gente recuerde y siga.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /><path d="M18 2l.5 1.5 1.5.5-1.5.5L18 6l-.5-1.5L16 4l1.5-.5z" />
      </svg>
    ),
  },
  {
    n: '02',
    name: 'Producción de Contenido',
    desc: 'Scripts virales, reels y piezas visuales con alma propia que conectan, generan comunidad y mueven ventas.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8.5l-6 3.5 6 3.5V8.5z" />
      </svg>
    ),
  },
  {
    n: '03',
    name: 'Social Media Management',
    desc: 'Gestión integral de tus redes. Planificamos, creamos, publicamos y medimos para que crezcas de forma orgánica.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 11l8-4M8 13l8 4" />
      </svg>
    ),
  },
  {
    n: '04',
    name: 'Estrategia de Comunidad',
    desc: 'No solo seguidores. Audiencias que confían, interactúan y se convierten en clientes reales de tu negocio.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="7" r="2.5" /><path d="M21 20c0-3-2-5-4.5-5" />
      </svg>
    ),
  },
  {
    n: '05',
    name: 'Copywriting Creativo',
    desc: 'Hooks, captions y guiones que impactan desde la primera línea y generan conversión real.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    n: '06',
    name: 'Consultoría Estratégica',
    desc: 'Análisis real de tu negocio, tu competencia y tu audiencia. Plan de acción concreto con métricas que importan.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" /><path d="M7 16l4-6 4 4 4-8" />
      </svg>
    ),
  },
  {
    n: '07',
    name: 'Diseño & Creación de Páginas Web',
    desc: 'Diseñamos y desarrollamos tu sitio web desde cero. Moderno, responsive y optimizado para convertir visitas en clientes reales.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 8h20M8 13l-2 2 2 2M16 13l2 2-2 2" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, rotateY: 45, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.09, ease: 'easeOut' },
  }),
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="servicios" className="py-24 bg-[#0c0c12]">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#7c2fe0]" />
              Lo que hacemos
            </div>
            <h2 className="font-bebas text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[1px]">
              NUESTROS
              <br />
              <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
                SERVICIOS
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-5 text-[16px] text-[#888899] max-w-[540px] font-light leading-[1.8]"
          >
            Desde construir tu marca desde cero hasta escalarla con contenido y estrategia. Todo lo
            que necesitas para crecer en un solo lugar.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              custom={i}
              variants={prefersReducedMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { scale: 1.03, boxShadow: '0 0 32px rgba(124,47,224,0.32)' }
              }
              transition={{ duration: 0.25 }}
              style={{ perspective: 1200 }}
              className="bg-[#111118] border border-[rgba(124,47,224,0.18)] p-7 group cursor-default hover:border-[rgba(124,47,224,0.5)] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="font-bebas text-[42px] leading-none bg-gradient-to-b from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
                  {s.n}
                </div>
                <div className="text-[#7c2fe0] group-hover:text-[#c084fc] transition-colors duration-300">
                  {s.icon}
                </div>
              </div>
              <div className="font-syne text-[14px] font-bold tracking-[0.5px] text-[#f2eeff] mb-3 leading-snug">
                {s.name}
              </div>
              <p className="text-[13px] text-[#888899] leading-[1.75] font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
