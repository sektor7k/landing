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
        <div className='w-64 h-screen bg-white/0 '>

        </div>
        <div className="xl:max-w-[600px] md:max-w-[450px] sm:max-w-[300px]  text-base text-neutral-400 pt-[14%]">
          <h2
            style={titleStyle}
            className="mb-6 text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold uppercase">
            Experience the Future
          </h2>
          <p className="mb-4 text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs">
            Discover{' '}
            <LinkPreview
              url="https://castrumlegions.com"
              className="font-bold text-[#FF6347] transition-colors hover:text-[#FF4500]">
              Castrum Legions
            </LinkPreview>{' '}
            and unleash the power of Web3 innovation.
          </p>
          <p className="mb-4 text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>
          <p className="text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs mb-4">
            Join{' '}
            <LinkPreview
              url="https://castrumlegions.com/community"
              className="bg-gradient-to-br bg-clip-text font-bold text-transparent">
              our growing community
            </LinkPreview>{' '}
            and shape tomorrow with Castrum Legions.
          </p>
          <p className="mb-4 text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>
          <p className="text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs">
            Build your future with{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              decentralized technology
            </LinkPreview>{' '}
            that leads the next revolution.
          </p>

        </div>

        <div className='w-[400px] h-screen bg-white/0  '>

        </div>

        {/* Sağ İçerik */}
        <div className="2xl:max-w-[450px] xl:max-w-[300px] md:max-w-[300px] sm:max-w-[200px] text-left h-full pl-6 pt-[14%]">
          <h3 className="mb-4 text-4xl 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-bold text-[#FFA500] drop-shadow-[0_0_8px_rgba(255,165,0,0.7)]">
            Leading the Innovation
          </h3>

          <LinkPreview
            url="https://castrumlegions.com"
            className="mt-4 inline-block text-xl 2xl:text-xl xl:text-lg lg:text-sm md:text-xs sm:text-[12px] font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
            Take the first step in exploring groundbreaking blockchain benefits tailored to your needs.
          </LinkPreview>

        </div>
        <div className='w-64 h-screen bg-white/0  '>

        </div>
      </div>
    </div>
  )
}
