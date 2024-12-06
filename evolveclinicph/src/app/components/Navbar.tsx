'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image src="/logo-dark.png" alt="Evolve Clinic PH Logo" width={120} height={120} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/services" className="py-4 px-4 text-black text-3xl font-semibold hover:text-turq transition duration-300">Services</Link>
            <Link href="/bookings" className="py-4 px-4 text-black text-3xl font-semibold hover:text-turq transition duration-300">Bookings</Link>
            <Link href="/about" className="py-4 px-4 text-black text-3xl font-semibold hover:text-turq transition duration-300">About Us</Link>
            <Link href="/contact" className="py-4 px-4 text-black text-3xl font-semibold hover:text-turq transition duration-300">Contact Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-10 h-10 text-black hover:text-turq"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="services" className="block py-2 px-5 text-xl hover:bg-turq hover:text-white transition duration-300" onClick={closeMenu}>Services</Link>
        <Link href="bookings" className="block py-2 px-5 text-xl hover:bg-turq hover:text-white transition duration-300" onClick={closeMenu}>Bookings</Link>
        <Link href="about" className="block py-2 px-5 text-xl hover:bg-turq hover:text-white transition duration-300" onClick={closeMenu}>About Us</Link>
        <Link href="contact" className="block py-2 px-5 text-xl hover:bg-turq hover:text-white transition duration-300" onClick={closeMenu}>Contact Us</Link>
      </div>
    </nav>
  )
}