'use client'

import { motion } from 'framer-motion'

const galleryImages = [
  '/images/villa1.jpg',
  '/images/villa2.jpg',
  '/images/villa3.jpg',
  '/images/villa4.jpg',
  '/images/villa5.jpg',
  '/images/hero1.jpg',
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-600">Galeri Villa</h2>
          <p className="text-gray-500 mt-2">Keindahan dan kenyamanan dalam setiap sudut villa kami</p>
        </motion.div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
