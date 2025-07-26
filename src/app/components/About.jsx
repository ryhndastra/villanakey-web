'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 text-gray-800 bg-white">
      <div className="container flex flex-col items-center gap-12 px-6 mx-auto md:px-12 lg:px-20 md:flex-row">
        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/villa4.jpg"
            alt="Villa Na Key"
            width={600}
            height={400}
            className="object-cover w-full shadow-xl rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Tentang <span className="text-emerald-500">Villa Na Key</span>
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            Villa Na Key adalah tempat terbaik buat kamu yang pengin kabur sejenak dari hiruk-pikuk kota. Di tengah suasana tropis yang damai dan jauh dari keramaian, villa ini siap jadi tempat kamu beristirahat dan menikmati ketenangan alam
          </p>
          <p className="text-gray-500 text-md">
            Villa Na Key punya semua yang kamu butuhin buat liburan seru — mulai dari kolam renang pribadi, dapur lengkap, sampai pemandangan alam yang bikin betah. Cocok banget buat liburan bareng keluarga, pasangan, atau bahkan solo trip santai.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
