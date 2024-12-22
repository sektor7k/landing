'use client'
import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { AnimatedModalDemo } from '../AnimatedModal/AnimatedButton'

/**
 * HeroContent Bileşeni
 */
const HeroContent = () => {
  return (
    <FadeUpAnimation className="grid grid-cols-12 items-center gap-y-10">
      {/* Sol Bölüm (Metinler) */}
      <div className="col-span-12 md:col-span-6">
        <p
          className="
            mb-4 
            text-base 
            font-medium 
            uppercase
            text-gray-600
            dark:text-gray-300
            sm:mb-5 
            md:mb-6
          ">
          Welcome to the Future of Innovation
        </p>

        <h1
          className="
            /* 
            Mobil
            */ 
            /*
            >=640px     */ /* >=768px
            */  /* >=1024px */
            mb-6  text-3xl font-extrabold text-gray-800
            dark:text-white  sm:text-4xl md:text-5xl lg:text-6xl
          ">
          Discover how <span className="text-red-500">Castrum Legions</span> transforms your digital experiences.
        </h1>

        <p
          className="
            mb-6 
            max-w-2xl 
            text-base 
            leading-relaxed 
            text-gray-600
            dark:text-gray-300
            sm:text-lg 
            md:mb-8
          ">
          Explore groundbreaking features designed to revolutionize the way you interact with technology. Seamlessly
          bridging innovation with accessibility, we bring you tools that empower and inspire.
        </p>

        {/* Buton veya Modal */}
        <div>
          <AnimatedModalDemo />
        </div>
      </div>

      {/* Sağ Bölüm (Görsel/Animasyon Alanı) */}
      <div className="col-span-12 md:col-span-6">
        <div
          className="
            /* 
            Küçük  ekranlar için yükseklik */ relative min-h-[300px]
            w-full
            sm:min-h-[400px]
            md:min-h-[500px]
            lg:min-h-[550px]
          ">
          {/* Buraya resmi veya animasyonu koyabilirsiniz */}
        </div>
      </div>
    </FadeUpAnimation>
  )
}

export default HeroContent
