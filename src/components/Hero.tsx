'use client'

import { motion, useReducedMotion } from 'framer-motion'

const snippets = [
  {
    label: 'Rey Stone — Marca Personal',
    title: '+180K ALCANCE/MES',
    sub: 'De 0 a marca reconocida en meses',
    offset: '0px',
  },
  {
    label: 'Stylos Boutique — Social Media',
    title: 'CONTENIDO VIRAL SEMANAL',
    sub: 'Comunidad que espera cada pieza',
    offset: '20px',
  },
  {
    label: 'Kairos Lab — Branding',
    title: 'IDENTIDAD DESDE CERO',
    sub: 'Posicionamiento premium en su sector',
    offset: '36px',
  },
]

const titleWords = ['CONSTRUIMOS', 'TU MARCA.', 'CREAMOS', 'RESULTADOS.']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden pt-[120px] pb-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(6,6,10,0.65)] to-[#06060a] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,6,10,0.7)] to-transparent z-0" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 75% 45%, rgba(124,47,224,0.22) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 85% 20%, rgba(155,77,232,0.14) 0%, transparent 50%), radial-gradient(ellipse 40% 50% at 60% 80%, rgba(100,30,180,0.1) 0%, transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,47,224,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124,47,224,0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 70% 50%, black 20%, transparent 80%)',
        }}
      />

      {/* Client snippets — desktop only */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[max(28px,calc((100vw_-_1180px)/2_+_28px))] w-[min(36vw,430px)] hidden lg:flex flex-col gap-[14px] z-[1] pointer-events-none">
        {snippets.map((s, i) => (
          <motion.div
            key={s.label}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
            style={{ marginLeft: s.offset, perspective: 800 }}
            className="bg-[rgba(12,12,18,0.78)] border border-[rgba(124,47,224,0.2)] border-l-[3px] border-l-[#7c2fe0] px-5 py-4 backdrop-blur-[8px] pointer-events-auto"
          >
            <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#c084fc] mb-1">
              {s.label}
            </div>
            <div className="font-bebas text-[22px] tracking-[1px] text-[#f2eeff]">{s.title}</div>
            <div className="text-[12px] text-[#888899] mt-[3px]">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-[1180px] mx-auto px-7 relative z-[2] w-full">
        <div className="max-w-[min(620px,52vw)] lg:max-w-[620px] max-[1024px]:max-w-[680px] max-[600px]:max-w-full">
          {/* Pill */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-[rgba(124,47,224,0.12)] border border-[rgba(124,47,224,0.2)] px-[14px] py-[5px] rounded-full font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#c084fc] mb-6"
          >
            <span className="w-[6px] h-[6px] bg-[#c084fc] rounded-full" />
            Agencia de Marcas Personales
          </motion.div>

          {/* Title stagger */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-bebas text-[clamp(64px,8.2vw,116px)] leading-[0.88] tracking-[1px]"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={[
                  'block',
                  i === 1
                    ? 'bg-gradient-to-br from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent'
                    : i === 2
                    ? '[WebkitTextStroke:1.4px_rgba(192,132,252,0.28)] text-transparent'
                    : 'text-[#f2eeff]',
                ].join(' ')}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={1.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[640px] mt-5 text-[16px] text-[#aaaabb] leading-[1.8] font-light"
          >
            Nos especializamos en{' '}
            <strong className="text-[#f2eeff] font-medium">marcas personales desde cero</strong>,
            construir comunidades reales y generar{' '}
            <strong className="text-[#f2eeff] font-medium">resultados con impacto.</strong> Sin
            fórmulas. Con estrategia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-3 flex-wrap mt-9"
          >
            <motion.a
              href="#quiz"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 30px rgba(124,47,224,0.8)' }
              }
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="font-syne text-[12px] font-bold tracking-[2px] uppercase bg-[#7c2fe0] text-[#f2eeff] px-[34px] py-[15px] inline-block max-[600px]:w-full max-[600px]:text-center"
            >
              Descubre tu nivel
            </motion.a>
            <motion.a
              href="#clientes"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="font-syne text-[12px] font-bold tracking-[2px] uppercase bg-transparent text-[#f2eeff] border border-[rgba(124,47,224,0.2)] px-[34px] py-[15px] inline-block hover:border-[rgba(124,47,224,0.5)] transition-colors max-[600px]:w-full max-[600px]:text-center"
            >
              Ver clientes
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        custom={2.2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-[max(28px,calc((100vw_-_1180px)/2_+_28px))] hidden sm:flex items-center gap-[10px] font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#888899]"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { scaleX: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-9 h-px bg-[#7c2fe0] origin-left"
        />
        Scroll
      </motion.div>
    </section>
  )
}
