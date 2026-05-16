'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#sobre', label: 'Nosotros' },
  { href: '#quiz', label: 'Test' },
]

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setStuck(window.scrollY > 40)
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Navegación principal"
      className={cn(
        'fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-7 py-5 transition-all duration-400 border-b border-transparent',
        stuck && 'bg-[rgba(6,6,10,0.93)] border-[rgba(124,47,224,0.2)] backdrop-blur-[14px]'
      )}
    >
      {/* Logo */}
      <a
        href="#hero"
        aria-label="Ir al inicio de Meraki"
        className="font-bebas text-[26px] tracking-[4px] bg-gradient-to-br from-[#c084fc] to-[#f2eeff] bg-clip-text text-transparent"
      >
        MERAKI
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-[30px] list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-[#888899] hover:text-[#f2eeff] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#7c2fe0] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <motion.a
            href="https://wa.me/5363284262"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,47,224,0.5)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="font-syne text-[12px] font-bold tracking-[2px] uppercase bg-[#7c2fe0] text-[#f2eeff] px-[22px] py-[9px] inline-block"
          >
            Hablemos
          </motion.a>
        </li>
      </ul>

      {/* Burger */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 rounded-full border border-[rgba(124,47,224,0.2)] bg-[rgba(124,47,224,0.08)] z-[201]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        type="button"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-[22px] h-[2px] bg-[#f2eeff]"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-[22px] h-[2px] bg-[#f2eeff]"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-[22px] h-[2px] bg-[#f2eeff]"
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[rgba(6,6,10,0.97)] flex flex-col items-center justify-center gap-9 z-[199]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="font-syne text-[14px] font-bold tracking-[3px] uppercase text-[#888899] hover:text-[#f2eeff] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5363284262"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="font-syne text-[12px] font-bold tracking-[2px] uppercase bg-[#7c2fe0] text-[#f2eeff] px-8 py-3 mt-2"
            >
              Hablemos
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
