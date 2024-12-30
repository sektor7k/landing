'use client'
import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

export default function FeatureThree() {
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
            src="/videos/tournament.mp4"
            type="video/mp4"
            media="(min-width: 768px)" // Masaüstü
          />
          <source
            src="/videos/tournament-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)" // Mobil
          />
        </video>
      </div>

      {/* Mobil İçerik */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white sm:hidden">
        <div className="mt-6 text-center">
          <h2 style={titleStyle} className="mb-4 text-2xl font-bold uppercase">
            Tournament
          </h2>
          <p className="mb-6 text-sm">
            Plan, manage, and track your tournaments like never before.
          </p>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Full Control Over Tournament Processes
              </h3>
              <p className="text-xs text-gray-300">
                Say goodbye to complex processes and handle your entire tournament experience in one place.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Easy Access and Dynamic Design
              </h3>
              <p className="text-xs text-gray-300">
                With its user-friendly interface and dynamic infrastructure, everything you need is at your fingertips.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Complete Tournament Platform
              </h3>
              <p className="text-xs text-gray-300">
                Whether you{"'"}re a player or an organizer, it{"'"}s built to meet all your needs.
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
            Tournament
          </h2>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
          Full Control Over Tournament Processes:{' '}
            <LinkPreview
              url="https://castrumlegions.com"
              className="font-bold text-[#FF6347] transition-colors hover:text-[#FF4500]">
          lan, manage, and track your tournaments like never before. Say goodbye to complex processes and handle your entire tournament experience in one place.      
                </LinkPreview>
          </p>
          <p className="xl:text-md mb-4 text-lg sm:text-xs md:text-base lg:text-sm 2xl:text-lg">
          Easy Access and Dynamic Design:{' '}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] transition-colors hover:text-[#FF8C00]">
              If you{"'"}re looking for a comprehensive tournament platform, you{"'"}re in the right place. With its user-friendly interface and dynamic infrastructure, everything you need is at your fingertips. Whether you{"'"}re a player or an organizer, it{"'"}s built to meet all your needs.
            </LinkPreview>
          </p>
          
        
        </div>

        <div className="h-screen w-[400px] bg-white/0  "></div>

        {/* Sağ İçerik */}
        <div className="h-full pl-6 pt-[19%] text-left sm:max-w-[200px] md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[450px]">
          <LinkPreview
            url="https://x.com/castrumlegion"
            className="mt-4 inline-block text-xl font-semibold text-[#FFA500] transition-colors hover:text-[#FF8C00] sm:text-[12px] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
            Take the first step in exploring groundbreaking blockchain benefits tailored to your needs.
          </LinkPreview>
        </div>
        <div className="h-screen w-64 bg-white/0  "></div>
      </div>
    </div>
  )
}
 