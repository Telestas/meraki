'use client'

import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos tu negocio, audiencia y objetivo antes de cualquier acción.',
  },
  {
    n: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan de contenido alineado a tus metas reales, no a modas.',
  },
  {
    n: '03',
    title: 'Creación',
    desc: 'Producimos contenido con calidad, creatividad y precisión estratégica.',
  },
  {
    n: '04',
    title: 'Resultados',
    desc: 'Medimos, optimizamos y seguimos creciendo contigo sin parar.',
  },
]

export default function Process() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="proceso" className="py-24 relative overflow-hidden bg-[#06060a]">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,47,224,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-[#7c2fe0]" />
            Cómo trabajamos
            <span className="w-6 h-px bg-[#7c2fe0]" />
          </div>
          <h2 className="font-bebas text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[1px]">
            NUESTRO
            <br />
            <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
              PROCESO
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector line — desktop */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] hidden lg:block h-px bg-[rgba(124,47,224,0.15)] z-0">
            <motion.div
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col items-center text-center px-6 py-8 relative z-10 group"
            >
              {/* Number circle */}
              <motion.div
                whileInView={prefersReducedMotion ? {} : { scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                viewport={{ once: true }}
                className="w-[104px] h-[104px] rounded-full border-2 border-[rgba(124,47,224,0.3)] bg-[#0c0c12] flex items-center justify-center mb-8 relative group-hover:border-[#7c2fe0] transition-colors duration-400"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'radial-gradient(ellipse, rgba(124,47,224,0.2) 0%, transparent 70%)' }}
                />
                <span className="font-bebas text-[40px] leading-none bg-gradient-to-b from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
                  {step.n}
                </span>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.4 }}
                viewport={{ once: true }}
              >
                <div className="font-syne text-[16px] font-bold tracking-[1px] text-[#f2eeff] mb-3">
                  {step.title}
                </div>
                <p className="text-[13px] text-[#888899] leading-[1.75] font-light max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
