'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = ['About', 'Gallery', 'Location', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-800/40 backdrop-blur-lg shadow text-white'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
          Villa Na Key
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 font-medium text-sm">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative transition duration-300 hover:text-emerald-400"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 px-4"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-white hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
