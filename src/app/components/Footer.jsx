'use client'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Villa Na Key</h3>
          <p className="text-sm text-gray-500 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-gray-900 transition">Beranda</a>
          <a href="#about" className="hover:text-gray-900 transition">Tentang</a>
          <a href="#gallery" className="hover:text-gray-900 transition">Galeri</a>
          <a href="#location" className="hover:text-gray-900 transition">Lokasi</a>
          <a href="#contact" className="hover:text-gray-900 transition">Kontak</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://wa.me/6281909333132"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/villanakey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
