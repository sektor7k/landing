'use client'
import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { AnimatedModalDemo } from '../AnimatedModal/AnimatedButton'

/**
 * HeroContent Bileşeni
 */
const HeroContent = () => {
  return (
    <div className="relative">
      <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
        {/* Sol Bölüm (Metinler) */}
        <div className="col-span-12 md:col-span-6">
          <p className="mb-7 text-base font-medium uppercase max-lg:mb-3">
            Welcome to the Future of Innovation
          </p>
          <h1 className="mb-10 text-4xl font-extrabold text-gray-800 dark:text-white max-md:mb-7 md:text-5xl">
            Discover how{' '}
            <span className="text-6xl text-red-500">
              Castrum Legions
            </span>{' '}
            transforms your digital experiences.
          </h1>
          <p className="mb-9 max-w-[590px] text-lg text-gray-600 dark:text-gray-300 max-md:mb-7">
            Explore groundbreaking features designed to revolutionize the
            way you interact with technology. Seamlessly bridging innovation
            with accessibility, we bring you tools that empower and inspire.
          </p>

          {/* Buton veya Modal */}
          <div className="flex">
            <AnimatedModalDemo />
          </div>
        </div>

        {/* Sağ Bölüm (Görsel/Animasyon Alanı) */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative min-h-[530px] w-full max-md:min-h-[400px] lg:ml-15">
            {/* İleride resim veya animasyon eklemek için placeholder alan */}
          </div>
        </div>
      </FadeUpAnimation>
    </div>
  )
}

export default HeroContent
