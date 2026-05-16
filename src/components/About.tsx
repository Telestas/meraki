'use client'

import { motion, useReducedMotion } from 'framer-motion'

const values = [
  { name: 'Autenticidad', desc: 'Tu voz, tu esencia. Nada copiado.', icon: '✦' },
  { name: 'Comunidad', desc: 'Audiencias que confían y compran.', icon: '◆' },
  { name: 'Estrategia', desc: 'Cada pieza tiene un propósito claro.', icon: '▲' },
  { name: 'Impacto', desc: 'Resultados que se miden de verdad.', icon: '●' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const valVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="sobre"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1b0035 0%, #0c0c14 60%, #06060a 100%)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(124,47,224,0.25) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(124,47,224,0.2)]" />
              {/* Mid ring */}
              <div className="absolute inset-6 rounded-full border border-[rgba(124,47,224,0.15)]" />
              {/* Inner fill */}
              <div
                className="absolute inset-12 rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(ellipse, rgba(124,47,224,0.18) 0%, rgba(12,12,18,0.9) 70%)' }}
              >
                <div className="text-center">
                  <div className="font-bebas text-[80px] sm:text-[96px] leading-none bg-gradient-to-b from-[#c084fc] to-[#7c2fe0] bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="font-syne text-[11px] font-bold tracking-[4px] uppercase text-[#888899] mt-1">
                    AÑOS
                  </div>
                </div>
              </div>
              {/* Rotating accent */}
              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-8px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(124,47,224,0.6) 85%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#7c2fe0]" />
              Quiénes somos
            </div>
            <h2 className="font-bebas text-[clamp(48px,6vw,86px)] leading-[0.9] tracking-[1px] mb-7">
              MARKETING
              <br />
              CON{' '}
              <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
                ALMA
              </span>
            </h2>
            <p className="text-[15px] text-[#aaaabb] leading-[1.8] font-light mb-4">
              Meraki Acreativa nació de una idea simple: el marketing merece algo diferente. Nada
              genérico. Nada robótico. Solo comunicación real que conecta con personas reales.
            </p>
            <p className="text-[15px] text-[#aaaabb] leading-[1.8] font-light mb-10">
              Somos creadores, estrategas y contadores de historias. Nos especializamos en marcas
              personales porque detrás de cada marca hay una persona — y esa historia vale la pena
              contarla bien.
            </p>

            {/* Values */}
            <motion.div
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((v) => (
                <motion.div
                  key={v.name}
                  variants={prefersReducedMotion ? {} : valVariants}
                  className="bg-[rgba(124,47,224,0.06)] border border-[rgba(124,47,224,0.15)] p-4 group hover:border-[rgba(124,47,224,0.35)] transition-colors duration-300"
                >
                  <div className="text-[#7c2fe0] text-[18px] mb-2 group-hover:text-[#c084fc] transition-colors duration-300">
                    {v.icon}
                  </div>
                  <div className="font-syne text-[13px] font-bold text-[#f2eeff] mb-1">{v.name}</div>
                  <div className="text-[12px] text-[#888899] font-light leading-snug">{v.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
