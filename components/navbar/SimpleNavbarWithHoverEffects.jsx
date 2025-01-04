'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { RiMenu4Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { Button } from '../ui/moving-border'

export default function SimpleNavbarWithHoverEffects() {
  const navItems = [
    { name: "Ecosystem", link: "#ecosystem" },
    { name: "Features", link: "#features" },
    { name: "Roadmap", link: "#roadmap" },
    { name: "Community", subMenu: true },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [clickedIdx, setClickedIdx] = useState(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item')) {
        setClickedIdx(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 text-white lg:bg-opacity-50">
      <DesktopNav navItems={navItems} clickedIdx={clickedIdx} setClickedIdx={setClickedIdx} />
      <MobileNav 
        navItems={navItems} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        clickedIdx={clickedIdx}
        setClickedIdx={setClickedIdx}
      />
    </div>
  )
}

const DesktopNav = ({ navItems, clickedIdx, setClickedIdx }) => (
  <motion.div className="hidden w-full items-center justify-between px-8 py-4 lg:flex">
    <Link href="/" className="inline-block">
      <Image src="/images/legionslogored.png" alt="Logo" width={200} height={50} />
    </Link>
    
    <div className="flex flex-col lg:flex-row lg:space-x-6">
      {navItems.map((item, idx) => (
        <div key={idx} className="menu-item relative">
          {item.link ? (
            <Link
              href={item.link}
              className={`inline-block px-4 py-2 text-white hover:text-gray-400 ${
                clickedIdx === idx ? 'font-bold text-red-500' : ''
              }`}
              onClick={() => setClickedIdx(clickedIdx === idx ? null : idx)}>
              {item.name}
            </Link>
          ) : (
            <button
              className={`inline-block px-4 py-2 text-white hover:text-gray-400 ${
                clickedIdx === idx ? 'font-bold text-red-500' : ''
              }`}
              onClick={() => setClickedIdx(clickedIdx === idx ? null : idx)}>
              {item.name}
            </button>
          )}
          {item.subMenu && clickedIdx === idx && (
            <AnimatePresence>
              <div className="pointer-events-auto left-0 z-50 mt-4 w-full rounded-lg border border-gray-700 bg-black shadow-lg lg:absolute lg:w-48">
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <a
                      href="https://twitter.com/Castrumlegion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <FaXTwitter />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/zYDmmQvSTB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <FaDiscord />
                      <span>Discord</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/Castrumlegions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <Image
                        src="/images/social-media-logos/telegram.png"
                        className="rounded-full bg-white"
                        alt="Telegram"
                        width={20}
                        height={20}
                      />
                      <span>Telegram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
    <Button
      borderRadius="1rem"
      className="border-neutral-200 bg-white font-semibold tracking-wide text-black dark:border-red-950 dark:bg-black dark:text-white">
      Launch App
    </Button>
  </motion.div>
)

const MobileNav = ({ navItems, isMobileMenuOpen, setIsMobileMenuOpen, clickedIdx, setClickedIdx }) => (
  <div className="lg:hidden bg-black">
    <div className="flex items-center justify-between px-3 py-2">
      <Link href="/" className="inline-block">
        <Image 
          src="/images/legionslogored.png" 
          alt="Logo" 
          width={150}
          height={40}
          className="object-contain"
        />
      </Link>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-2xl text-white">
        {isMobileMenuOpen ? <IoClose /> : <RiMenu4Line />}
      </button>
    </div>
    
    {isMobileMenuOpen && (
      <div className="border-t border-gray-800 px-3 py-2 bg-black">
        <div className="flex flex-col space-y-2">
          {navItems.map((item, idx) => (
            <div key={idx} className="menu-item">
              {item.link ? (
                <Link
                  href={item.link}
                  className={`block py-2 text-white hover:text-gray-400 ${
                    clickedIdx === idx ? 'font-bold text-red-500' : ''
                  }`}
                  onClick={() => {
                    setClickedIdx(clickedIdx === idx ? null : idx)
                    setIsMobileMenuOpen(false)
                  }}>
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    className={`w-full text-left py-2 text-white hover:text-gray-400 ${
                      clickedIdx === idx ? 'font-bold text-red-500' : ''
                    }`}
                    onClick={() => setClickedIdx(clickedIdx === idx ? null : idx)}>
                    {item.name}
                  </button>
                  {item.subMenu && clickedIdx === idx && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a 
                        href="https://x.com/Castrumlegion"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 py-2 text-white hover:text-red-500">
                        <FaXTwitter />
                        <span>Twitter</span>
                      </a>
                      <a 
                        href="https://discord.gg/zYDmmQvSTB" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 py-2 text-white hover:text-red-500">
                        <FaDiscord />
                        <span>Discord</span>
                      </a>
                      <a 
                        href="https://t.me/Castrumlegions" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 py-2 text-white hover:text-red-500">
                        <Image
                          src="/images/social-media-logos/telegram.png"
                          className="rounded-full bg-white"
                          alt="Telegram"
                          width={20}
                          height={20}
                        />
                        <span>Telegram</span>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)
