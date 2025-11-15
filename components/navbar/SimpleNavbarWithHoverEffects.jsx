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
    { name: "Ecosystem", link: "/#ecosystem" },
    { name: "Features", link: "/#features" },
    { name: "Roadmap", link: "/#roadmap" },
    { name: "News", link: "/news" },
    { name: "Community", subMenu: true },
    { name: "Resources", subMenu: true, isResources: true },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [clickedIdx, setClickedIdx] = useState(null)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  useEffect(() => {
    // Mobile için click outside handler
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item') && window.innerWidth < 1024) {
        setClickedIdx(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 text-white lg:bg-opacity-50">
      <DesktopNav navItems={navItems} hoveredIdx={hoveredIdx} setHoveredIdx={setHoveredIdx} />
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

const DesktopNav = ({ navItems, hoveredIdx, setHoveredIdx }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null)

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const handleMouseEnter = (idx, hasSubMenu) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    if (hasSubMenu) {
      setHoveredIdx(idx)
    }
  }

  const handleMouseLeave = (idx, hasSubMenu) => {
    if (hasSubMenu) {
      const timeout = setTimeout(() => {
        // Only close if still hovering outside
        setHoveredIdx(null)
      }, 250) // Longer delay to allow movement to submenu
      setHoverTimeout(timeout)
    } else {
      setHoveredIdx(null)
    }
  }

  return (
    <motion.div className="hidden w-full items-center justify-between px-8 py-4 lg:flex">
      <Link href="/" className="inline-block">
        <Image src="/images/legionslogored.png" alt="Logo" width={200} height={50} />
      </Link>
      
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {navItems.map((item, idx) => (
          <div 
            key={idx} 
            className="menu-item relative group"
            onMouseEnter={() => handleMouseEnter(idx, item.subMenu)}
            onMouseLeave={() => handleMouseLeave(idx, item.subMenu)}
            style={{ paddingBottom: item.subMenu ? '0.75rem' : '0' }}
          >
          {item.link ? (
            <Link
              href={item.link}
              className={`inline-flex items-center px-4 py-2 text-white transition-colors hover:text-red-500 ${
                hoveredIdx === idx ? 'text-red-500' : ''
              }`}>
              {item.name}
              {item.subMenu && (
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${hoveredIdx === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ) : (
            <button
              className={`inline-flex items-center px-4 py-2 text-white transition-colors hover:text-red-500 ${
                hoveredIdx === idx ? 'text-red-500' : ''
              }`}>
              {item.name}
              {item.subMenu && (
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${hoveredIdx === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          )}
          {/* Invisible bridge to prevent gap */}
          {item.subMenu && hoveredIdx === idx && (
            <div 
              className="absolute left-0 top-full z-40 hidden h-2 w-full lg:block"
              onMouseEnter={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout)
                  setHoverTimeout(null)
                }
                setHoveredIdx(idx)
              }}
            />
          )}
          {item.subMenu && hoveredIdx === idx && (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                onMouseEnter={() => {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout)
                    setHoverTimeout(null)
                  }
                  setHoveredIdx(idx)
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setHoveredIdx(null)
                  }, 200)
                  setHoverTimeout(timeout)
                }}
                className="pointer-events-auto left-0 z-50 w-full rounded-lg border border-gray-700 bg-black shadow-xl lg:absolute lg:w-48"
                style={{ 
                  top: 'calc(100% + 0.5rem)',
                  left: '0',
                }}
              >
                <ul className="flex flex-col space-y-2 p-4">
                  {item.isResources ? (
                    <>
                      <li>
                        <Link
                          href="/branding"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                          <span>Brand Kit</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                          <span>Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                          <span>Terms & Conditions</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          href="https://twitter.com/Castrumlegion"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                          <FaXTwitter />
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/zYDmmQvSTB"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                          <FaDiscord />
                          <span>Discord</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/Castrumlegions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
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
                    </>
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      ))}
      </div>
      <Button
        borderRadius="1rem"
        className="border-neutral-200 bg-white font-semibold tracking-wide text-black dark:border-red-950 dark:bg-black dark:text-white"
        onClick={() => window.open('https://beta.castrumlegions.com/', '_blank')}>
        Launch App
      </Button>
    </motion.div>
  )
}

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
                  className={`block py-2 text-white hover:text-red-500 transition-colors ${
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
                    className={`w-full text-left py-2 text-white hover:text-red-500 transition-colors ${
                      clickedIdx === idx ? 'font-bold text-red-500' : ''
                    }`}
                    onClick={() => setClickedIdx(clickedIdx === idx ? null : idx)}>
                    {item.name}
                  </button>
                  {item.subMenu && clickedIdx === idx && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.isResources ? (
                        <>
                          <Link 
                            href="/branding"
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            <span>Brand Kit</span>
                          </Link>
                          <Link 
                            href="/privacy-policy"
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <span>Privacy Policy</span>
                          </Link>
                          <Link 
                            href="/terms"
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <span>Terms & Conditions</span>
                          </Link>
                        </>
                      ) : (
                        <>
                          <a 
                            href="https://x.com/Castrumlegion"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <FaXTwitter />
                            <span>Twitter</span>
                          </a>
                          <a 
                            href="https://discord.gg/zYDmmQvSTB" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <FaDiscord />
                            <span>Discord</span>
                          </a>
                          <a 
                            href="https://t.me/Castrumlegions" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 py-2 text-white hover:text-red-500 transition-colors">
                            <Image
                              src="/images/social-media-logos/telegram.png"
                              className="rounded-full bg-white"
                              alt="Telegram"
                              width={20}
                              height={20}
                            />
                            <span>Telegram</span>
                          </a>
                        </>
                      )}
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
