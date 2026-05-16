'use client'

import { motion, useReducedMotion } from 'framer-motion'

const cases = [
  {
    badge: 'Marca Personal',
    name: 'REY STONE',
    desc: 'Estrategia completa de marca personal',
    gradient: 'linear-gradient(135deg, #1d003c 0%, #2b0055 50%, #09000f 100%)',
    igUrl: 'https://www.instagram.com/reystone_oficial/',
  },
  {
    badge: 'Social Media',
    name: 'STYLOS BOUTIQUE',
    desc: 'Contenido viral de moda y lifestyle',
    gradient: 'linear-gradient(135deg, #110020 0%, #1e0035 100%)',
    igUrl: 'https://www.instagram.com/stylos.boutique_/',
  },
  {
    badge: 'Branding',
    name: 'KAIROS LAB',
    desc: 'Identidad y posicionamiento premium',
    gradient: 'linear-gradient(135deg, #180028 0%, #0f0016 100%)',
    igUrl: 'https://www.instagram.com/kairos.lab_/',
  },
]

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="portafolio" className="py-24 bg-[#06060a]">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#7c2fe0]" />
              Nuestro trabajo
            </div>
            <h2 className="font-bebas text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[1px]">
              CASOS DE
              <br />
              <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
                ÉXITO
              </span>
            </h2>
          </div>
          <motion.a
            href="https://wa.me/5363284262"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-[#f2eeff] border border-[rgba(124,47,224,0.2)] px-[28px] py-[13px] hover:border-[rgba(124,47,224,0.5)] transition-colors duration-300 self-start sm:self-auto whitespace-nowrap group"
          >
            Hablar con nosotros{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver caso ${c.name} en Instagram`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: c.gradient }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(6,0,15,0.95)] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out flex flex-col justify-end p-7">
                <span className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-2">
                  {c.badge}
                </span>
                <div className="font-bebas text-[32px] leading-none text-[#f2eeff] mb-2">{c.name}</div>
                <p className="text-[13px] text-[#888899] mb-5 font-light">{c.desc}</p>
                <span className="font-syne text-[11px] font-bold tracking-[2px] uppercase text-[#c084fc] group flex items-center gap-2">
                  Ver en Instagram
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>

              {/* Default badge */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[rgba(6,0,15,0.9)] to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-1 block">
                  {c.badge}
                </span>
                <div className="font-bebas text-[24px] leading-none text-[#f2eeff]">{c.name}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
