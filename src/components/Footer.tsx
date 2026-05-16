'use client'

import { motion, useReducedMotion } from 'framer-motion'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const WaFloatIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" aria-hidden="true" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <footer className="bg-[#06060a] border-t border-[rgba(124,47,224,0.12)]">
        <div className="max-w-[1180px] mx-auto px-7 py-14">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            {/* Brand */}
            <div className="max-w-[280px]">
              <div className="font-bebas text-[28px] tracking-[4px] bg-gradient-to-br from-[#c084fc] to-[#f2eeff] bg-clip-text text-transparent mb-2">
                MERAKI ACREATIVA
              </div>
              <p className="text-[13px] text-[#888899] font-light leading-[1.7]">
                Marcas personales con alma. Resultados con impacto.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-1">
                Navegación
              </div>
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#clientes', label: 'Clientes' },
                { href: '#sobre', label: 'Nosotros' },
                { href: '#quiz', label: 'Test de diagnóstico' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#888899] font-light hover:text-[#f2eeff] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <div className="font-syne text-[10px] font-bold tracking-[3px] uppercase text-[#7c2fe0] mb-1">
                Contacto
              </div>
              <div className="flex gap-3">
                <span
                  className="w-10 h-10 rounded-full border border-[rgba(124,47,224,0.15)] flex items-center justify-center text-[#888899] opacity-40 cursor-not-allowed"
                  role="img"
                  aria-label="Instagram de Meraki — próximamente"
                  title="Instagram — próximamente"
                >
                  <IgIcon />
                </span>
                <span
                  className="w-10 h-10 rounded-full border border-[rgba(124,47,224,0.15)] flex items-center justify-center text-[#888899] opacity-40 cursor-not-allowed"
                  role="img"
                  aria-label="TikTok de Meraki — próximamente"
                  title="TikTok — próximamente"
                >
                  <TikTokIcon />
                </span>
                <a
                  href="https://wa.me/5363284262"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Meraki"
                  className="w-10 h-10 rounded-full border border-[rgba(124,47,224,0.2)] flex items-center justify-center text-[#888899] hover:text-[#25d366] hover:border-[#25d366] transition-colors duration-300"
                >
                  <WaIcon />
                </a>
              </div>
              <a
                href="https://wa.me/5363284262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#888899] font-light hover:text-[#f2eeff] transition-colors"
              >
                +53 63284262
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[rgba(124,47,224,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-[#888899] font-light">
              © 2025 Meraki Acreativa — Todos los derechos reservados
            </p>
            <p className="text-[11px] text-[rgba(136,136,153,0.5)]">Cuba · +53 63284262</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/5363284262"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Meraki por WhatsApp"
        initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 200 }}
        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[300] w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] group"
      >
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#111118] text-[#f2eeff] font-syne text-[11px] font-bold tracking-[1px] px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[rgba(124,47,224,0.2)]">
          ¡Escríbenos!
        </span>
        <WaFloatIcon />
      </motion.a>
    </>
  )
}
