'use client'

import { motion, useReducedMotion } from 'framer-motion'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
)

const clients = [
  {
    name: 'Rey Stone',
    handle: '@reystone_oficial',
    igUrl: 'https://www.instagram.com/reystone_oficial/',
    followers: '10K+',
    reach: '180K',
    type: 'Marca Personal',
    quote: 'Meraki transformó mi imagen. Ahora mi marca habla sola.',
    gradient: 'linear-gradient(135deg, #1d003c 0%, #2b0055 50%, #09000f 100%)',
  },
  {
    name: 'Stylos Boutique',
    handle: '@stylos.boutique_',
    igUrl: 'https://www.instagram.com/stylos.boutique_/',
    followers: '15K+',
    reach: '250K',
    type: 'Social Media',
    quote: 'El contenido que crean es el más viral que hemos tenido. La gente lo espera cada semana.',
    gradient: 'linear-gradient(135deg, #110020 0%, #1e0035 100%)',
  },
  {
    name: 'Kairos Lab',
    handle: '@kairos.lab_',
    igUrl: 'https://www.instagram.com/kairos.lab_/',
    followers: '5K+',
    reach: '60K',
    type: 'Branding',
    quote: 'Construyeron nuestra identidad desde cero. El resultado superó todo lo que esperábamos.',
    gradient: 'linear-gradient(135deg, #180028 0%, #0f0016 100%)',
  },
]

export default function Clients() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="clientes" className="py-24 bg-[#0c0c12]">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#7c2fe0]" />
            Marcas que han confiado en nosotros
          </div>
          <h2 className="font-bebas text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[1px]">
            ALGUNOS DE
            <br />
            <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
              NUESTROS CLIENTES
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clients.map((c, i) => (
            <motion.a
              key={c.handle}
              href={c.igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver perfil de Instagram de ${c.name}`}
              initial={prefersReducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group flex flex-col bg-[#111118] border border-[rgba(124,47,224,0.15)] overflow-hidden hover:border-[rgba(124,47,224,0.4)] transition-all duration-400 cursor-pointer"
            >
              {/* Video placeholder */}
              <div
                className="relative aspect-video flex items-center justify-center overflow-hidden"
                style={{ background: c.gradient }}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[22px] text-[#f2eeff] backdrop-blur-sm"
                >
                  ▶
                </motion.div>
                <div className="absolute bottom-3 left-4 font-syne text-[10px] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                  {c.name} — Testimonio
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <div className="font-syne text-[15px] font-bold text-[#f2eeff] mb-1">{c.name}</div>
                  <div className="flex items-center gap-1.5 font-syne text-[11px] tracking-[1px] text-[#c084fc]">
                    <IgIcon />
                    {c.handle}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                  <div>
                    <div className="font-bebas text-[28px] leading-none text-[#f2eeff]">{c.followers}</div>
                    <div className="font-syne text-[10px] tracking-[1px] uppercase text-[#888899] mt-0.5">Seguidores</div>
                  </div>
                  <div>
                    <div className="font-bebas text-[28px] leading-none text-[#f2eeff]">{c.reach}</div>
                    <div className="font-syne text-[10px] tracking-[1px] uppercase text-[#888899] mt-0.5">Alcance/mes</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[13px] text-[#aaaabb] leading-[1.7] font-light italic flex-1">
                  &ldquo;{c.quote}&rdquo;
                </p>

                {/* IG link */}
                <div className="flex items-center gap-1.5 font-syne text-[11px] font-bold tracking-[1.5px] uppercase text-[#7c2fe0] group-hover:text-[#c084fc] transition-colors duration-300 mt-auto">
                  <IgIcon />
                  <span className="relative">
                    Ver en Instagram
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
