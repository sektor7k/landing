'use client'

import React from 'react'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <section
      id="scene"
      className="
        relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40
      ">
      {/* Arkaplan Video */}
      <div className="absolute inset-0 -z-10">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-top">
          {/* Mobil ve masaüstü için farklı videolar */}
          <source src="/videos/hero-background.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/videos/hero-background-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* İçerik Konteyneri */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
