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
    <section id="reviews" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
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
                className="mb-4 text-4xl font-bold text-center text-black"
              >
                Ulasan <span className='text-emerald-600'>Pengunjung</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-12 text-center text-gray-600"
              >
                Apa kata tamu setelah menginap di Villa Na Key?
              </motion.p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {reviews.map((rev, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.2 }}
                    className="p-6 transition-all bg-white border border-gray-100 shadow-md rounded-3xl hover:shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="object-cover border rounded-full w-14 h-14 border-emerald-200"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-gray-800">{rev.name}</p>
                        <p className="text-xs text-gray-500">{rev.subtitle}</p>
                        <div className="flex mt-1 text-yellow-400">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} className={i < rev.rating ? '' : 'opacity-30'} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 italic text-gray-700">"{rev.comment}"</p>

                    <div className="p-3 text-sm border-l-4 rounded-lg bg-emerald-50 border-emerald-400">
                      <p className="mb-1 font-semibold text-emerald-700">Respon Pemilik:</p>
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
