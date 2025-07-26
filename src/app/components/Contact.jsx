'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f9f9f9] text-gray-900 py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ingin Booking Villa?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Kami siap membantu Anda untuk reservasi dan informasi lebih lanjut. Hubungi kami langsung di:
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://wa.me/6281909333132"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white bg-green-600 hover:bg-green-700 transition text-lg shadow-md"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/villanakey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white bg-pink-500 hover:bg-pink-600 transition text-lg shadow-md"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
