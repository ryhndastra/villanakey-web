'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/20"></div>

      <div className="relative z-10 max-w-7xl h-full mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow"
          >
            Welcome to <span className="text-emerald-400">Villa Na Key</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed"
          >
            Sebuah villa pribadi mewah yang tersembunyi di tengah alam tropis — ideal untuk pelarian romantis atau liburan tenang bersama keluarga.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mt-8 px-6 py-3 border border-white/80 text-white hover:bg-white hover:text-gray-900 transition rounded-full"
          >
            Booking Sekarang
          </motion.a>
        </div>
      </div>
    </section>
  )
}
