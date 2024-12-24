'use client'
import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

export default function FeatureTwo() {
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
    <div className="relative flex h-full w-full flex-row items-center justify-center">
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white sm:hidden">
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
      <div className="z-20 hidden w-full justify-between   text-white md:flex">
        {/* Sol İçerik */}
        <div className="bg-white/ h-screen w-64"></div>
        <div className="pt-[14%] text-base text-neutral-400  sm:max-w-[300px] md:max-w-[350px] xl:max-w-[600px]">
          <h2
            style={titleStyle}
            className="sm:text-md mb-6 text-3xl font-extrabold uppercase md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Experience the Future
          </h2>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Discover{' '}
            <LinkPreview
              url="https://castrumlegions.com"
              className="font-bold text-[#FF6347] transition-colors hover:text-[#FF4500]">
              Castrum Legions
            </LinkPreview>{' '}
            and unleash the power of Web3 innovation.
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Join{' '}
            <LinkPreview
              url="https://castrumlegions.com/community"
              className="bg-gradient-to-br bg-clip-text font-bold text-transparent">
              our growing community
            </LinkPreview>{' '}
            and shape tomorrow with Castrum Legions.
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>
          <p className="xl:text-md text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>
        </div>

        <div className="bg-white/ h-screen w-[600px] "></div>

        {/* Sağ İçerik */}
        <div className="h-full pl-6 pt-[19%] text-left sm:max-w-[200px] md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[450px]">
          <LinkPreview
            url="https://castrumlegions.com"
            className="mt-4 inline-block text-xl font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00] sm:text-[12px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
            Take the first step in exploring groundbreaking blockchain benefits tailored to your needs.
          </LinkPreview>
        </div>
        <div className="h-screen w-64 bg-white/0  "></div>
      </div>
    </div>
  )
}
