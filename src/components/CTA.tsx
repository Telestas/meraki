'use client'

import { motion, useReducedMotion } from 'framer-motion'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CTA() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="cta" className="py-28 relative overflow-hidden bg-[#0c0c12]">
      {/* Animated background glow */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,47,224,0.14) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-10 text-center">
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-5 inline-flex items-center gap-2 justify-center"
          >
            <span className="w-6 h-px bg-[#7c2fe0]" />
            ¿Listo para el siguiente nivel?
            <span className="w-6 h-px bg-[#7c2fe0]" />
          </motion.div>

          <motion.h2
            variants={prefersReducedMotion ? {} : itemVariants}
            className="font-bebas text-[clamp(64px,10vw,130px)] leading-[0.88] tracking-[1px] mb-6"
          >
            EMPIEZA
            <br />
            <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
              HOY
            </span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? {} : itemVariants}
            className="text-[16px] text-[#888899] font-light max-w-[380px] mx-auto mb-10 leading-[1.8]"
          >
            Tu marca personal merece más. Un mensaje puede cambiarlo todo.
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/5363284262"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 30px rgba(124,47,224,0.8)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center justify-center gap-3 font-syne text-[12px] font-bold tracking-[2px] uppercase bg-[#7c2fe0] text-[#f2eeff] px-9 py-4"
            >
              <WaIcon />
              Escríbenos por WhatsApp
            </motion.a>
            <motion.a
              href="#quiz"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-[#f2eeff] border border-[rgba(124,47,224,0.2)] px-9 py-4 hover:border-[rgba(124,47,224,0.5)] transition-colors"
            >
              Hacer el test primero
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
