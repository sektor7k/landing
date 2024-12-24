'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { Button } from '../ui/moving-border'

export default function SimpleNavbarWithHoverEffects() {
  const navItems = [
    { name: 'Ecosystem', link: '#ecosystem' },
    { name: 'Features', link: '#features' },
    { name: 'Roadmap', link: '#roadmap' },
    { name: 'Community', subMenu: true },
  ]

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
    <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 text-white">
      <DesktopNav navItems={navItems} clickedIdx={clickedIdx} setClickedIdx={setClickedIdx} />
    </div>
  )
}

const DesktopNav = ({ navItems, clickedIdx, setClickedIdx }) => (
  <motion.div className="hidden w-full items-center justify-between px-8 py-4 lg:flex">
    <Logo />
    <div className="flex flex-col lg:flex-row lg:space-x-6">
      {navItems.map((item, idx) => (
        <div key={idx} className="menu-item relative">
          <Link
            href={item.link || '#'}
            className={`relative px-4 py-2 text-white hover:text-gray-400 ${
              clickedIdx === idx ? 'font-bold text-red-500' : ''
            }`}
            onClick={() => {
              setClickedIdx(clickedIdx === idx ? null : idx)
            }}>
            {item.name}
          </Link>
          {item.subMenu && clickedIdx === idx && (
            <AnimatePresence>
              <div className="pointer-events-auto left-0 z-50 mt-4 w-full rounded-lg border border-gray-700 bg-black shadow-lg lg:absolute lg:w-48">
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <a
                      href="https://twitter.com/yourtwitterhandle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <FaXTwitter />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <FaDiscord />
                      <span>Discord</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500">
                      <Image
                        src="/images/social-media-logos/youtube.png"
                        className="rounded-full bg-white"
                        alt="YouTube"
                        width={20}
                        height={20}
                      />
                      <span>YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://telegram.org"
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

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image src="/images/legionslogored.jpg" alt="Logo" width={200} height={50} />
  </Link>
)
