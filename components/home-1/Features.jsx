'use client'
import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThree from './FeatureThree'

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0) // İlk slayttan başla

  // Slayt listesi
  const slides = [
    { component: <FeatureOne />, key: 'featureOne' },
    { component: <FeatureTwo />, key: 'featureTwo' },
    { component: <FeatureThree />, key: 'featureThree' },
  ]

  // Yukarı / Aşağı buton tıklanınca
  const goUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }
  const goDown = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <section id='features' className="relative h-screen overflow-hidden bg-black text-white">
      {/* Sol ve Sağ Kolonlar (sadece büyük ekranlar için görünür) */}
      <div className="hidden md:block">
        {/* Sol Kolon */}
        <div className="absolute left-0 top-[-10%] z-10">
          <img
            src="/images/kolon1.png"
            alt="Sol Kolon"
            className="h-[600px] w-[200px] object-cover md:h-[700px] 2xl:w-[300px] xl:w-[250px] md:w-[200px] sm:w-[150px]"
          />
        </div>

        {/* Sağ Kolon */}
        <div className="absolute right-0 top-[-10%] z-10">
          <img
            src="/images/kolon2.png"
            alt="Sağ Kolon"
            className="h-[600px] w-[200px] object-cover md:h-[700px] 2xl:w-[300px] xl:w-[250px] md:w-[200px] sm:w-[150px]"
          />
        </div>
      </div>

      {/* Slaytlar */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute left-0 top-0 h-full w-full">
            {slides[currentIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sol alttaki Up / Down butonları */}
      <div className="absolute bottom-16 left-8 z-50 flex flex-col space-y-4 sm:bottom-12 sm:left-5 lg:bottom-20 lg:left-10">
        {/* Yukarı Button */}
        <button
          onClick={goUp}
          className="
            rounded-full 
            bg-white/20 
            p-3 
            text-white 
            shadow-md 
            transition
            hover:bg-white/40
          ">
          <FaChevronUp className="h-6 w-6" />
        </button>

        {/* Aşağı Button */}
        <button
          onClick={goDown}
          className="
            rounded-full 
            bg-white/20 
            p-3 
            text-white 
            shadow-md 
            transition
            hover:bg-white/40
          ">
          <FaChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
