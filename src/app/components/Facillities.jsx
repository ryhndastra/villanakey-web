'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSwimmingPool, FaWifi, FaUtensils, FaTree, FaCamera, FaChair } from 'react-icons/fa'

const facilities = [
  {
    icon: FaSwimmingPool,
    title: 'Kolam Renang Pribadi',
    desc: 'Nikmati kolam renang eksklusif yang bersih dan nyaman.'
  },
  {
    icon: FaWifi,
    title: 'Wi-Fi Cepat',
    desc: 'Tetap terhubung dengan internet cepat di seluruh area villa.'
  },
  {
    icon: FaUtensils,
    title: 'Dapur Lengkap',
    desc: 'Tersedia peralatan dapur modern untuk memasak bersama keluarga.'
  },
  {
    icon: FaTree,
    title: 'Taman yang Luas',
    desc: 'Area hijau yang rindang cocok untuk bersantai atau bermain.'
  },
  {
    icon: FaCamera,
    title: 'Spot Foto Estetik',
    desc: 'Setiap sudut villa instagrammable, cocok untuk dokumentasi liburanmu.'
  },
  {
    icon: FaChair,
    title: 'Area Santai Outdoor',
    desc: 'Nikmati suasana sejuk dengan duduk di teras atau gazebo sambil menyeruput kopi.'
  }
]

export default function FasilitasSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <section id="fasilitas" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Fasilitas di <span className="text-emerald-500">Villa Na Key</span>
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="flex justify-center items-center mb-4 text-emerald-500">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
