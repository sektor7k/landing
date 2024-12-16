'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { title: 'Our Solutions', href: '#' },
    { title: 'Features', href: '#' },
    { title: 'Staking', href: '#' },
    { title: '$SDM', href: '#' },
    { title: 'Community', href: '#' },
    // Sağda buton gibi gözüken eleman
    { title: 'Launch DAPP', href: '#', isButton: true },
  ]

  return (
    <header className="w-full text-white bg-[#0f0f0f] border-b border-[#222] relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16 justify-between">
        {/* Sol kısım: Logo */}
        <div className="flex items-center gap-4">
          <Link href="#">
            <Image
              src="/images/legionslogo.png"
              alt="Legions Logo"
              width={200}
              height={50}
              className="object-contain"
            />
          </Link>
        
        </div>

        {/* Orta Kısım: Menü */}
        <nav className="hidden md:flex items-center gap-8 ml-10">
          {menuItems.slice(0, 5).map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-3 py-1 flex items-center hover:text-red-400 transition-colors"
            >
              {item.title}
              {idx < 4 && (
                <span className="mx-3 text-[#333]">/</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Sağ Kısım: Son buton */}
        <div className="hidden md:flex">
          {menuItems[5].isButton && (
            <Link
              href={menuItems[5].href}
              className="px-4 py-2 border border-[#333] rounded-lg hover:border-red-500 hover:text-red-400 transition-colors"
            >
              {menuItems[5].title}
            </Link>
          )}
        </div>

        {/* Mobil Menüyü Açma Butonu */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 border border-[#333] rounded-lg hover:border-red-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-[#333]">
            <Link href="#">
              <Image
                src="/legionslogo.png"
                alt="Legions Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center border border-[#333] rounded-lg hover:border-red-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 p-6">
            {menuItems.map((item, idx) =>
              !item.isButton ? (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-lg hover:text-red-400 transition-colors border-b border-[#333] pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="mt-4 px-4 py-2 text-center border border-[#333] rounded-lg hover:border-red-500 hover:text-red-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
        </div>
      )}

      {/* Kırmızı animasyon çizgisi (isteğe bağlı) */}
      {/* Bu çizgiyi örnek olarak ekliyoruz, tamamen görsel efekt amacıyla */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
    </header>
  )
}
