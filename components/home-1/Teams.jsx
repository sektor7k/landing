'use client'

import React, { useState, useEffect } from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'
import { motion } from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export function Teams() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const teamMembers = [
    {
      name: 'sektor7k',
      role: 'Full-Stack Developer',
      image: '/images/team/omer.jpg',
      twitter: 'sektor7k'
    },
    {
      name: 'Emre Taş',
      role: 'Full-Stack Developer',
      image: '/images/team/emre.jpg',
      twitter: 'emretas1459'
    },
    {
      name: 'Berkay Bayram',
      role: 'Founder & CEO',
      image: '/images/team/berkay.jpg',
      twitter: 'BerkayFall'
    },
    {
      name: 'nerciy',
      role: 'UI/UX Designer',
      image: '/images/team/nerciy.jpg',
      twitter: 'nerciy'
    }


  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <div id="teams" className="relative h-full w-full bg-black py-20 text-white overflow-hidden">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-wide md:text-5xl">Meet the Visionaries</h1>
        <p className="text-lg text-gray-300 md:text-xl">The talented minds shaping the future of Web3.</p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {isMobile ? (
          // Mobil görünüm
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `${-currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {teamMembers.map((member) => (
                  <div
                    key={member.twitter}
                    className="w-full flex-shrink-0 px-4"
                    onClick={() => window.open(`https://x.com/${member.twitter}`, '_blank')}
                  >
                    <div className="flex flex-col items-center space-y-6 cursor-pointer">
                      <div className="relative h-56 w-56 overflow-hidden rounded-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-lg text-gray-300">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigasyon butonları */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white"
              aria-label="Previous slide"
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white"
              aria-label="Next slide"
            >
              <IoIosArrowForward size={24} />
            </button>

            {/* Nokta göstergeleri */}
            <div className="mt-4 flex justify-center gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop görünüm
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {teamMembers.map((member) => (
              <PinContainer 
                key={member.twitter}
                title={`x.com/${member.twitter}`} 
                href={`https://x.com/${member.twitter}`}
              >
                <div className="flex w-full flex-col items-center space-y-6">
                  <div className="relative h-52 w-52 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-lg text-gray-300">{member.role}</p>
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
