'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'

const reviews = [
  {
    name: 'Muhamad Nasir',
    subtitle: 'Local Guide · 50 reviews · 84 photos',
    rating: 5,
    comment: 'Secara umum saya dan keluarga puas menginap di villa ini pada Hari : Rabu, 25-Dec-2024 dan merekomendasikan buat sahabat petualang untuk menginap disini.',
    response: 'Terimakasih kaka.. untuk saran nya akan kami perhatikan, ditunggu kunjungan berikut nya 🙏',
    avatar: '/images/user1.png',
  },
  {
    name: 'ZidanZendol',
    subtitle: 'Local Guide · 30 reviews · 20 photos',
    rating: 5,
    comment: 'Villa nya cocok banget buat kumpul" sama sahabat/keluarga, banyak tempat nongkrong nya, ada kamar mandi 2, plus ada mushola lengkap, wifi, kolam renang, Playground.',
    response: 'Terimakasih kak.. ditunggu kunjungan berikutnya 🙏',
    avatar: '/images/user2.png',
  },
  {
    name: 'Slamet Jemet',
    subtitle: 'Local Guide · 9 reviews · 56 photos',
    rating: 5,
    comment: 'Sejuk nyaman ..cocok buat keluarga. Dari parkiran jalan ke villa juga menyenangkan meskipun nanjak, nggak lama sih 5 menitan saja.',
    response: 'Terimakasih kaka , ditunggu kunjungan berikutnya 🙏',
    avatar: '/images/user3.png',
  },
]

export default function ReviewSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <section id="reviews" ref={ref} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence>
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-emerald-600 mb-4"
              >
                Ulasan Pengunjung
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center text-gray-600 mb-12"
              >
                Apa kata tamu setelah menginap di Villa Na Key?
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((rev, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-14 h-14 rounded-full object-cover border border-emerald-200"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-gray-800">{rev.name}</p>
                        <p className="text-xs text-gray-500">{rev.subtitle}</p>
                        <div className="flex text-yellow-400 mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} className={i < rev.rating ? '' : 'opacity-30'} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 italic mb-4">"{rev.comment}"</p>

                    <div className="bg-emerald-50 text-sm p-3 rounded-lg border-l-4 border-emerald-400">
                      <p className="text-emerald-700 font-semibold mb-1">Respon Pemilik:</p>
                      <p className="text-gray-600">{rev.response}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
