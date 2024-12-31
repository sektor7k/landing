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
          className="hidden h-full w-full object-cover md:block">
          <source src="/videos/bet.mp4" type="video/mp4" />
        </video>
        <video
          id="background-video-mobile"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover md:hidden">
          <source src="/videos/bet-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobil İçerik */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white sm:hidden">
        <div className="mt-6 text-center">
          <h2 style={titleStyle} className="mb-4 text-2xl font-bold uppercase">
            Betting Features for True Enthusiasts
          </h2>
          <p className="mb-6 text-sm">
            With the betting system, Legions members can take the excitement of gaming to the next level.
          </p>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Fair and Transparent Betting
              </h3>
              <p className="text-xs text-gray-300">
                Our betting system is built on transparency and fair play.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Accessible Betting for All
              </h3>
              <p className="text-xs text-gray-300">
                Experience the thrill with any amount you choose.
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
            Betting
          </h2>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Betting Features for True Enthusiasts:{' '}
            With the betting system, Legions members can take the excitement of gaming to the next level. Support your favorite player or team and showcase the power of your predictions!
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
            Fair and Transparent Betting:{' '}
            Our betting system is built on transparency and fair play. Results are supported by verification mechanisms accessible to everyone.
          </p>
        </div>

        <div className="h-screen w-[400px] bg-white/0"></div>

        {/* Sağ İçerik */}
        <div className="h-full pl-6 pt-[19%] text-left sm:max-w-[200px] md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[450px]">
          <span className="mt-4 inline-block text-xl font-semibold  sm:text-[12px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
            Achieve excellence by mastering calculated risks.
          </span>
        </div>
        <div className="h-screen w-64 bg-white/0  "></div>
      </div>
    </div>
  )
}
