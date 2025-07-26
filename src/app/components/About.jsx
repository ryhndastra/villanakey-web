'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
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
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tentang <span className="text-emerald-500">Villa Na Key</span>
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Villa Na Key adalah tempat pelarian sempurna untuk Anda yang
            mendambakan ketenangan dan keindahan alam tropis. Terletak di lokasi eksotis,
            villa ini menyajikan suasana tenang dan nyaman jauh dari hiruk-pikuk kota.
          </p>
          <p className="text-md text-gray-500">
            Dilengkapi dengan kolam renang pribadi, dapur lengkap, dan pemandangan alam yang
            memukau, Villa Na Key dirancang untuk menciptakan pengalaman
            menginap yang tak terlupakan — baik untuk liburan keluarga, pasangan, atau solo trip.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
