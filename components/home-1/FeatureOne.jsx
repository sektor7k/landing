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

      {/* Mobil İçerik */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white sm:hidden">
        <div className="mt-6 text-center">
          <h2 style={titleStyle} className="mb-4 text-2xl font-bold uppercase">
            Community Sale
          </h2>
          <p className="mb-6 text-sm">
            Distribute tokens to a loyal and engaged community of supporters, our Legions.
          </p>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Early Access of Gaming Tokens
              </h3>
              <p className="text-xs text-gray-300">
                Distribute tokens to a loyal and engaged community of supporters, our Legions.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Empowers the Community
              </h3>
              <p className="text-xs text-gray-300">
                Legions have an opportunity to participate in early token sales.
              </p>
            </div>

           
          </div>
        </div>
      </div>

      {/* Masaüstü İçerik */}
      <div className="z-20 hidden w-full justify-between text-white md:flex">
        {/* Sol İçerik */}
        <div className="h-screen w-64 bg-white/0"></div>
        <div className="pt-[14%] text-base text-neutral-400 sm:max-w-[250px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[350px]">
          <h2
            style={titleStyle}
            className="sm:text-md mb-6 text-3xl font-extrabold uppercase md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Community Sale
          </h2>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Early Access of Gaming Tokens:{' '}
            <LinkPreview
              url="https://castrumlegions.com"
              className="font-bold text-[#FF6347] transition-colors hover:text-[#FF4500]">
              Distribute tokens to a loyal and engaged community of supporters, our Legions, before public exchanges.
            </LinkPreview>
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Empowers the Community:{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              Legions have an opportunity to participate in early token sales, not just institutional investors.
            </LinkPreview>
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Lower Entry Barriers:{' '}
            <LinkPreview
              url="https://castrumlegions.com/community"
              className="bg-gradient-to-br bg-clip-text font-bold text-transparent">
              Supporting grassroots adoption by allowing more participants to join.
            </LinkPreview>
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Community-Driven:{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              Early sales focused on Legions Members who will be part of our community.
            </LinkPreview>
          </p>
        </div>

        <div className="h-screen w-[400px] bg-white/0  "></div>

        {/* Sağ İçerik */}
        <div className="h-full pl-6 pt-[19%] text-left sm:max-w-[200px] md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[450px]">
          <LinkPreview
            url="https://x.com/castrumlegion"
            className="mt-4 inline-block text-xl font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00] sm:text-[12px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
Empowered by the community, shaping the future together.
           </LinkPreview>
        </div>
        <div className="h-screen w-64 bg-white/0  "></div>
      </div>
    </div>
  )
}
