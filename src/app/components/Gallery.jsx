'use client'

import { motion } from 'framer-motion'

const galleryImages = [
  '/images/villa1.jpg',
  '/images/villa2.jpg',
  '/images/villa3.jpg',
  '/images/villa6.jpg',
  '/images/villa5.jpg',
  '/images/villa7.jpg',
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-black">Galeri <span className='text-emerald-600'>Villa</span></h2>
          <p className="mt-2 text-gray-500">Keindahan dan kenyamanan dalam setiap sudut villa kami</p>
        </motion.div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              className="overflow-hidden shadow-lg rounded-xl group"
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
