'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function LocationMap() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  return (
    <section id="location" className="py-16 bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Lokasi <span className="text-emerald-500">Villa Na Key</span>
        </h2>
        <p className="mb-6 text-gray-600">
          Villa Na Key terletak di RT.05/RW.02, Cihanjawar, Kec. Bojong, Kabupaten Purwakarta, Jawa Barat 41164
        </p>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63376.25970953375!2d107.5013196!3d-6.7287069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e691d1bdc864b1b%3A0x2232903dbba4c8da!2sVilla%20Na%20Key!5e0!3m2!1sen!2sid!4v1721965479820!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  )
}
