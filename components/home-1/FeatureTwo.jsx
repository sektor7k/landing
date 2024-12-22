'use client'
import React from 'react'

import { LinkPreview } from '@/components/ui/link-preview'

export default function FeatureTwo() {
  // Title style
  const titleStyle = {
    background: 'linear-gradient(90deg, #FF4500, #FFFFFF)', // Red to white gradient
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
  }

  

  // List items for mobile
  const mobileItems = [
    'Secure and decentralized investments.',
    'Exclusive NFT rewards.',
    'Community-first approach.',
    'Sustainable Web3 solutions.',
  ]

  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover">
          {/* Farklı videolar için media sorgusu */}
          <source
            src="/videos/bet.mp4"
            type="video/mp4"
            media="(min-width: 768px)" // Masaüstü
          />
          <source
            src="/videos/bet-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)" // Mobil
          />
        </video>
      </div>

      {/* Mobil İçerik (En Üste Taşındı) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white md:hidden">
        <div className="mt-6 text-center">
          <h2 style={titleStyle} className="mb-4 text-2xl font-bold uppercase">
            Welcome to Castrum Legions
          </h2>
          <p className="mb-4 text-sm">
            Embark on a journey of innovation with <span className="font-bold text-[#FFA500]">Web3 technology</span>.
          </p>
          <ul className="space-y-2 text-xs text-gray-300">
            {mobileItems.map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="mr-2 text-[#FF4500]">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Masaüstü İçerik */}
      <div className="hidden md:block">
        <div className="absolute left-[15%] top-[30%] z-10">
          <div className="max-w-xs text-base text-neutral-400">
            <h2 style={titleStyle} className="mb-6 text-3xl font-extrabold uppercase">
              Experience the Future
            </h2>
            <p className="mb-4">
              Discover{' '}
              <LinkPreview
                url="https://castrumlegions.com"
                className="font-bold text-[#FF6347] transition-colors hover:text-[#FF4500]">
                Castrum Legions
              </LinkPreview>{' '}
              and unleash the power of Web3 innovation.
            </p>
            <p className="mb-4">
              Build your future with{' '}
              <LinkPreview
                url="https://castrumlegions.com/features"
                className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
                decentralized technology
              </LinkPreview>{' '}
              that leads the next revolution.
            </p>
            <p>
              Join{' '}
              <LinkPreview
                url="https://castrumlegions.com/community"
                className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent hover:from-purple-700 hover:to-pink-700">
                our growing community
              </LinkPreview>{' '}
              and shape tomorrow with Castrum Legions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
