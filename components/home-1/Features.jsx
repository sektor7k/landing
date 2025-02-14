'use client'
import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThree from './FeatureThree'
import FeatureFour from './FeatureFour'

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0) 


  const slides = [
    { component: <FeatureOne />, key: 'featureOne' },
    { component: <FeatureTwo />, key: 'featureTwo' },
    { component: <FeatureThree />, key: 'featureThree' },
    { component: <FeatureFour />, key: 'featureFour' },
  ]


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
    <section id="features" className="relative h-screen overflow-hidden bg-black text-white">

      <div className="hidden md:block">

        <div className="absolute left-0 top-[-10%] z-10">
          <img
            src="/images/kolon1.png"
            alt="Sol Kolon"
            className="h-[600px] w-[200px] object-cover sm:w-[150px] md:h-[700px] md:w-[200px] xl:w-[200px] 2xl:w-[200px]"
          />
        </div>


        <div className="absolute right-0 top-[-10%] z-10">
          <img
            src="/images/kolon2.png"
            alt="Sağ Kolon"
            className="h-[600px] w-[200px] object-cover sm:w-[150px] md:h-[700px] md:w-[200px] xl:w-[200px] 2xl:w-[200px]"
          />
        </div>
      </div>


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


      <div className="absolute bottom-16 left-8 z-50 flex flex-col space-y-4 sm:bottom-12 sm:left-5 lg:bottom-20 lg:left-10">

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
