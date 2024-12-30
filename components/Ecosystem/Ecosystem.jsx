'use client'

import { useEffect, useState } from 'react'
import { FlipWords } from '../ui/flip-words'
import { motion } from 'framer-motion'

export function Ecosystem() {
  const [isMobile, setIsMobile] = useState(false)
  const [videoSource, setVideoSource] = useState('/videos/ecosystem.mp4')
  const words = ['Powerful', 'Seamless', 'Innovative', 'Secure']

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth <= 768
      setIsMobile(isMobileDevice)
      setVideoSource(isMobileDevice ? '/videos/ecosystem-mobile.mp4' : '/videos/ecosystem.mp4')
    }
    
    // İlk yüklemede kontrol et
    checkIfMobile()
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      id="ecosystem"
      className="relative flex min-h-[35rem] w-full flex-col items-center justify-center overflow-hidden bg-black py-8 md:h-[50rem] md:py-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Başlık Kısmı */}
      <motion.div 
        className="z-10 mb-8 px-4 text-center"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.3 }
          }
        }}
      >
        <h2 className="text-xl font-normal text-white dark:text-white md:text-4xl">
          Explore the
          <FlipWords words={words} /> <br />
          Castrum Legions Ecosystem
        </h2>
      </motion.div>

      {/* Video Kısmı */}
      <motion.div 
        className={`relative z-0 overflow-hidden rounded-lg bg-black shadow-lg
          ${isMobile 
            ? 'mx-4 h-[48vh] w-[92%] md:h-[60vh]'
            : 'h-[70%] w-[90%] max-w-[1400px]'
          }`}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              delay: 0.5,
              duration: 0.8,
              ease: 'easeOut'
            }
          }
        }}
      >
        <video
          key={videoSource}
          autoPlay
          loop
          muted
          playsInline
          className={`h-full w-full ${isMobile ? 'object-contain' : 'object-cover'}`}
        >
          <source 
            src={videoSource}
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Efekti */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
      </motion.div>

      {/* Dekoratif Arka Plan Efektleri */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute right-0 top-3/4 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
    </motion.div>
  )
}
