'use client'
import React from 'react'
import HeroContent from './HeroContent'

/**
 * Hero Bileşeni
 * - Video arkaplan
 * - Responsive padding (yukarı/aşağı)
 * - Container içinde HeroContent
 */
const Hero = () => {
  return (
    <section
      id="scene"
      className="
        /*
        Tailwind’in
        spacing ölçeklerini kullanarak her breakpoint’te esnek üst/alt boşluk sağlıyoruz. */ /* default:
        4rem              */ /* >=640px: 5rem
        */           /* >=768px: 6rem */
        /*           >=1024px: 8rem */ /*
        >=1280px:           10rem (daha büyük ekranlarda
        daha           ferah) */ relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40
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
          className="
            /*
            Videonun
            üst
            kısmını    göster, aşağısı kırpılabilir */ h-full w-full object-cover object-top
          ">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Eğer tarayıcı video etiketini desteklemiyorsa */}
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
