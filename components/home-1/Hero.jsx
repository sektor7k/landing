'use client'
import React from 'react'
import HeroContent from './HeroContent'

/**
 * Hero Bileşeni
 */
const Hero = () => {
  return (
    <section
      id="scene"
      className="
        hero 
        relative 
        overflow-hidden 
        pb-[300px] 
        pt-[230px] 
        max-lg:pb-[100px] 
        max-lg:pt-[160px]
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
          className="h-full w-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Eğer tarayıcı video etiketini desteklemiyorsa */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* İçerik Konteyneri */}
      <div className="container relative z-10 mx-auto px-4">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
