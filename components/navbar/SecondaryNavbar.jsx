'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCommunityMenu, setShowCommunityMenu] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="flex items-center justify-between bg-gray-900/50 px-6 py-4 backdrop-blur-lg">
        {/* Logo */}
        <div className="absolute left-0 pl-6">
          <Link href="/">
            <Image
              src="/images/legionslogo.png" // Logo yolu
              alt="Castrum Legions"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navbar Menü */}
        <ul className="ml-[180px] hidden items-center space-x-8 lg:flex">
          {' '}
          {/* Logo ve Menü Arası Boşluk */}
          <li>
            <Link href="#features" className="text-white transition-colors hover:text-red-500">
              Features
            </Link>
          </li>
          <li>
            <Link href="#ecosystem" className="text-white transition-colors hover:text-red-500">
              Ecosystem
            </Link>
          </li>
          <li>
            <Link href="#roadmap" className="text-white transition-colors hover:text-red-500">
              Roadmap
            </Link>
          </li>
          {/* Community Dropdown */}
          <li className="group relative">
            <button
              onClick={() => setShowCommunityMenu(!showCommunityMenu)}
              className="flex items-center text-white transition-colors hover:text-red-500">
              Community <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-sm" />
            </button>
            {/* Submenu */}
            {showCommunityMenu && (
              <ul className="absolute left-0 mt-2 w-44 rounded-lg bg-gray-800 shadow-lg">
                <li>
                  <Link
                    href="https://twitter.com/castrumlegions"
                    target="_blank"
                    className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/castrumlegions"
                    target="_blank"
                    className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                    <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/castrumlegions"
                    target="_blank"
                    className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                    <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/castrumlegions"
                    target="_blank"
                    className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                    <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                    Discord
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Launch DAPP */}
        <div className="absolute right-0 pr-6">
          <Link
            href="#launch-dapp"
            className="rounded-lg border border-red-500 bg-transparent px-4 py-2 text-red-500 transition-all hover:bg-red-500 hover:text-white">
            Launch DAPP
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-white focus:outline-none lg:hidden">
          ☰
        </button>
      </nav>

      {/* Mobil Menü */}
      {showMobileMenu && (
        <div className="absolute left-0 top-16 w-full bg-gray-900 text-white lg:hidden">
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <Link href="#features" onClick={() => setShowMobileMenu(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#ecosystem" onClick={() => setShowMobileMenu(false)}>
                Ecosystem
              </Link>
            </li>
            <li>
              <Link href="#roadmap" onClick={() => setShowMobileMenu(false)}>
                Roadmap
              </Link>
            </li>
            <li>
              <button onClick={() => setShowCommunityMenu(!showCommunityMenu)} className="flex items-center">
                Community
                <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </button>
              {/* Submenu */}
              {showCommunityMenu && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href="https://twitter.com" className="flex items-center">
                      <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://t.me" className="flex items-center">
                      <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                      Telegram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtube.com" className="flex items-center">
                      <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.gg" className="flex items-center">
                      <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                      Discord
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
