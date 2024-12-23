'use client'
import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

export default function FeatureOne() {
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
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {/* Video Arkaplan */}
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
            src="/videos/comunitysale.mp4"
            type="video/mp4"
            media="(min-width: 768px)" // Masaüstü
          />
          <source
            src="/videos/comunitysale-mobile.mp4"
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
      <div className="z-20 hidden w-full justify-between px-[12%] py-[4%] text-white md:flex">
        {/* Sol İçerik */}
        <div className="max-w-md text-left">
          <h3 className="mb-4 text-2xl font-bold text-[#FFA500] drop-shadow-[0_0_8px_rgba(255,165,0,0.7)]">
            Discover the Future of Web3 Technology
          </h3>
          <p className="text-xs leading-relaxed text-gray-300">
            Dive into a world where blockchain innovation meets security and accessibility. Unlock unparalleled
            opportunities, protect your investments, and gain access to the next frontier of decentralized solutions.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-gray-300">
            From asset management to seamless integrations, Castrum Legions is your gateway to cutting-edge Web3
            applications.
          </p>
          <LinkPreview
            url="https://castrumlegions.com"
            className="mt-4 inline-block text-base font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
            Learn More
          </LinkPreview>
        </div>

        {/* Sağ İçerik */}
        <div className="max-w-md text-left">
          <h3 className="mb-4 text-2xl font-bold text-[#FFA500] drop-shadow-[0_0_8px_rgba(255,165,0,0.7)]">
            Leading the Innovation
          </h3>

          <LinkPreview
            url="https://castrumlegions.com"
            className="mt-4 inline-block text-base font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
            Take the first step in exploring groundbreaking blockchain benefits tailored to your needs.
          </LinkPreview>
        </div>
      </div>
    </div>
  )
}
