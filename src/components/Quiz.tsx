'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const questions = [
  {
    q: '¿En qué etapa está tu presencia en redes ahora mismo?',
    opts: [
      { l: 'A', t: 'No tengo ninguna cuenta activa todavía', v: 0 },
      { l: 'B', t: 'Tengo cuentas pero no publico con frecuencia', v: 1 },
      { l: 'C', t: 'Publico regularmente pero no veo resultados', v: 2 },
      { l: 'D', t: 'Tengo comunidad activa y ya genero ventas', v: 3 },
    ],
  },
  {
    q: '¿Tienes claro quién es tu audiencia y qué mensaje quieres transmitir?',
    opts: [
      { l: 'A', t: 'Para nada, no sé por dónde empezar', v: 0 },
      { l: 'B', t: 'Tengo una idea vaga pero no está definido', v: 1 },
      { l: 'C', t: 'Lo sé pero no sé cómo comunicarlo bien', v: 2 },
      { l: 'D', t: 'Todo claro y lo ejecuto con consistencia', v: 3 },
    ],
  },
  {
    q: '¿Con qué frecuencia produces contenido para tu marca?',
    opts: [
      { l: 'A', t: 'No produzco nada todavía', v: 0 },
      { l: 'B', t: 'Muy esporádicamente, cuando se me ocurre algo', v: 1 },
      { l: 'C', t: '1-2 veces por semana pero sin un plan claro', v: 2 },
      { l: 'D', t: 'Diariamente con calendario y estrategia definida', v: 3 },
    ],
  },
  {
    q: '¿Tu marca ha generado ventas directas a través de redes sociales?',
    opts: [
      { l: 'A', t: 'Nunca, ni siquiera lo he intentado', v: 0 },
      { l: 'B', t: 'Una que otra vez, pero no de forma consistente', v: 1 },
      { l: 'C', t: 'Sí, pero quiero que sea mucho más', v: 2 },
      { l: 'D', t: 'Redes es mi principal canal de ventas', v: 3 },
    ],
  },
  {
    q: '¿Cuál es tu mayor obstáculo para crecer en redes ahora mismo?',
    opts: [
      { l: 'A', t: 'No sé por dónde empezar ni qué hacer', v: 0 },
      { l: 'B', t: 'Me falta tiempo y constancia para producir', v: 1 },
      { l: 'C', t: 'Produzco pero no llego a más gente', v: 2 },
      { l: 'D', t: 'Ya crezco, solo quiero escalar más rápido', v: 3 },
    ],
  },
]

const results = [
  { minScore: 0, maxScore: 4, level: 'COMENZANDO DESDE CERO', emoji: '🌱', text: 'Estás en el punto de partida — y eso es perfecto. Nos especializamos exactamente en esto: construir tu marca desde cero con una base sólida, estrategia clara y contenido que conecte desde el primer día.' },
  { minScore: 5, maxScore: 8, level: 'EN MODO CONSTRUCCIÓN', emoji: '🔨', text: 'Ya tienes presencia pero falta dirección y consistencia. Tienes el potencial, solo necesitas la estrategia y alguien que te ayude a ejecutarla con enfoque real.' },
  { minScore: 9, maxScore: 12, level: 'LISTO PARA ESCALAR', emoji: '📈', text: 'Tienes la base construida y estás generando resultados. Ahora es el momento de escalar. Con la estrategia correcta puedes multiplicar tu alcance y tus ventas en meses.' },
  { minScore: 13, maxScore: 15, level: 'NIVEL AVANZADO', emoji: '🚀', text: 'Tu marca ya tiene tracción real. Pero siempre hay un siguiente nivel. Podemos ayudarte a escalar más rápido, profesionalizar tu contenido y abrir nuevos canales.' },
]

type Answers = Record<number, { value: number; text: string }>

export default function Quiz() {
  const prefersReducedMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const progress = showResult ? 100 : ((step + (selected !== null ? 1 : 0)) / questions.length) * 100

  function selectOption(v: number, t: string) {
    setSelected(v)
    setAnswers((prev) => ({ ...prev, [step]: { value: v, text: t } }))
  }

  function nextStep() {
    if (selected === null) return
    if (step < questions.length - 1) {
      setStep((s) => s + 1)
      setSelected(answers[step + 1]?.value ?? null)
    } else {
      setShowResult(true)
    }
  }

  function prevStep() {
    if (step === 0) return
    setStep((s) => s - 1)
    setSelected(answers[step - 1]?.value ?? null)
  }

  const total = Object.values(answers).reduce((acc, a) => acc + a.value, 0)
  const result = results.find((r) => total >= r.minScore && total <= r.maxScore) ?? results[0]

  const waMsg = encodeURIComponent(
    `¡Hola Meraki! Hice el test en su web y este es mi diagnóstico:\n\n📊 *Nivel: ${result.level}*\n\n📝 Mis respuestas:\n1. Presencia: ${answers[0]?.text ?? '-'}\n2. Audiencia: ${answers[1]?.text ?? '-'}\n3. Contenido: ${answers[2]?.text ?? '-'}\n4. Ventas: ${answers[3]?.text ?? '-'}\n5. Obstáculo: ${answers[4]?.text ?? '-'}\n\nQuisiera saber cómo pueden ayudarme. 🙌`
  )

  const stepVariants = {
    enter: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -10, transition: { duration: 0.2 } },
  }

  return (
    <section id="quiz" className="py-24 bg-[#06060a] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,47,224,0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-4 inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-[#7c2fe0]" />
            Test de diagnóstico
            <span className="w-6 h-px bg-[#7c2fe0]" />
          </div>
          <h2 className="font-bebas text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[1px]">
            ¿DÓNDE ESTÁ
            <br />
            <span className="bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] bg-clip-text text-transparent">
              TU MARCA?
            </span>
          </h2>
          <p className="mt-4 text-[16px] text-[#888899] max-w-[480px] mx-auto font-light leading-[1.8]">
            5 preguntas y te decimos exactamente en qué punto está tu negocio — y qué necesitas para despegar.
          </p>
        </motion.div>

        {/* Quiz box */}
        <div className="max-w-[680px] mx-auto">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#111118] border border-[rgba(124,47,224,0.2)] p-8 sm:p-10"
          >
            {/* Progress bar */}
            <div
              className="w-full h-[3px] bg-[rgba(124,47,224,0.15)] mb-8 rounded-full overflow-hidden"
              role="progressbar"
              aria-label="Progreso del test"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#7c2fe0] to-[#c084fc] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="font-syne text-[11px] font-bold tracking-[2px] uppercase text-[#7c2fe0] mb-3">
                    Pregunta {step + 1} de {questions.length}
                  </div>
                  <p className="font-syne text-[17px] font-bold text-[#f2eeff] leading-snug mb-7">
                    {questions[step].q}
                  </p>

                  <div className="flex flex-col gap-3 mb-8">
                    {questions[step].opts.map((opt, i) => (
                      <motion.button
                        key={opt.l}
                        initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.35 }}
                        onClick={() => selectOption(opt.v, opt.t)}
                        className={[
                          'flex items-center gap-4 px-5 py-4 text-left border transition-all duration-250 group',
                          selected === opt.v
                            ? 'border-[#7c2fe0] bg-[rgba(124,47,224,0.12)] text-[#f2eeff]'
                            : 'border-[rgba(124,47,224,0.15)] bg-transparent text-[#888899] hover:border-[rgba(124,47,224,0.4)] hover:text-[#f2eeff]',
                        ].join(' ')}
                        aria-pressed={selected === opt.v}
                        type="button"
                      >
                        <span
                          className={[
                            'w-7 h-7 rounded-full border flex items-center justify-center font-syne text-[11px] font-bold flex-shrink-0 transition-all duration-250',
                            selected === opt.v
                              ? 'border-[#7c2fe0] bg-[#7c2fe0] text-white'
                              : 'border-[rgba(124,47,224,0.3)] text-[#7c2fe0]',
                          ].join(' ')}
                        >
                          {selected === opt.v ? '✓' : opt.l}
                        </span>
                        <span className="text-[14px] font-light leading-snug">{opt.t}</span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {step > 0 ? (
                      <button
                        onClick={prevStep}
                        className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-[#888899] hover:text-[#f2eeff] transition-colors"
                        type="button"
                      >
                        ← Atrás
                      </button>
                    ) : (
                      <span />
                    )}
                    <motion.button
                      onClick={nextStep}
                      disabled={selected === null}
                      whileHover={selected !== null && !prefersReducedMotion ? { scale: 1.04, boxShadow: '0 0 20px rgba(124,47,224,0.5)' } : {}}
                      whileTap={selected !== null ? { scale: 0.97 } : {}}
                      className={[
                        'font-syne text-[12px] font-bold tracking-[2px] uppercase px-8 py-3 transition-all duration-250',
                        selected !== null
                          ? 'bg-[#7c2fe0] text-[#f2eeff] cursor-pointer'
                          : 'bg-[rgba(124,47,224,0.2)] text-[#888899] cursor-not-allowed',
                      ].join(' ')}
                      type="button"
                    >
                      {step === questions.length - 1 ? 'Ver mi resultado →' : 'Siguiente →'}
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-center"
                  aria-live="polite"
                >
                  <div className="text-[56px] mb-4">{result.emoji}</div>
                  <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-2">
                    Tu diagnóstico
                  </div>
                  <div className="font-bebas text-[36px] sm:text-[44px] leading-none text-[#f2eeff] mb-5">
                    {result.level}
                  </div>
                  <p className="text-[15px] text-[#aaaabb] font-light leading-[1.8] max-w-[480px] mx-auto mb-8">
                    {result.text}
                  </p>

                  {/* Summary */}
                  <div className="bg-[rgba(124,47,224,0.06)] border border-[rgba(124,47,224,0.15)] p-5 text-left mb-8 space-y-2">
                    {[
                      ['Presencia', answers[0]?.text],
                      ['Audiencia', answers[1]?.text],
                      ['Contenido', answers[2]?.text],
                      ['Ventas', answers[3]?.text],
                      ['Obstáculo', answers[4]?.text],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3 text-[13px]">
                        <span className="font-syne font-bold text-[#888899] w-20 flex-shrink-0">{label}</span>
                        <span className="text-[#aaaabb] font-light">{val}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={`https://wa.me/5363284262?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.04, boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 bg-[#25d366] text-white font-syne text-[13px] font-bold tracking-[1.5px] uppercase px-8 py-4 w-full justify-center mb-3"
                  >
                    <WaIcon />
                    Hablar con Meraki en WhatsApp
                  </motion.a>
                  <p className="text-[12px] text-[#888899]">
                    Tu diagnóstico se enviará para que te demos una solución personalizada
                  </p>

                  <button
                    onClick={() => { setStep(0); setAnswers({}); setSelected(null); setShowResult(false) }}
                    className="mt-5 font-syne text-[11px] tracking-[1.5px] uppercase text-[#888899] hover:text-[#f2eeff] transition-colors"
                    type="button"
                  >
                    Repetir test
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
