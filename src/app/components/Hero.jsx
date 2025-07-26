'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/20"></div>

      <div className="relative z-10 flex items-center h-full px-6 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-6xl drop-shadow"
          >
            Welcome to <span className="text-emerald-400">Villa Na Key</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Sebuah villa pribadi mewah yang tersembunyi di tengah alam tropis — ideal untuk pelarian romantis atau liburan tenang bersama keluarga.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-6 py-3 mt-8 text-white transition border rounded-full border-white/80 hover:bg-white hover:text-gray-900"
          >
            Booking Sekarang
          </motion.a>
        </div>
      </div>
    </section>
  )
}
