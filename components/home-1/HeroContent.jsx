'use client'
import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { AnimatedModalDemo } from '../AnimatedModal/AnimatedButton'

/**
 * HeroContent Bileşeni
 * - Solda metin ve buton,
 * - Sağda görsel/animasyon alanı (opsiyonel)
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
THE NEXT EVOLUTION OF COMPETITIVE GAMING        </p>

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
          <span className="text-red-500">Castrum Legions</span> is revolutionizing the future of esports.

        </h1>

        <p
          className="
            /* 
            >=640px 
            */ 
            mb-6 
            max-w-2xl
            text-base
            leading-relaxed     text-gray-600 dark:text-gray-300 sm:text-lg
            md:mb-8
          ">
         Castrum Legions is an innovative platform at the heart of the esports ecosystem, where everyone can easily access tournaments, large-scale events are organized with extensive bracket systems, and competitive gaming reaches its full potential. By providing in-depth data analytics for teams and players, we are shaping the future of competition.
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
            Küçük   ekran */ relative min-h-[300px]
            w-full
            sm:min-h-[400px]
            md:min-h-[500px]
            lg:min-h-[550px]
          ">
          {/* Buraya bir resim, 3D animasyon, lottie dosyası vs. koyabilirsiniz. */}
        </div>
      </div>
    </FadeUpAnimation>
  )
}

export default HeroContent
