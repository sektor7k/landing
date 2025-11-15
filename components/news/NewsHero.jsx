'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function NewsHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/legionslogored.png')] bg-repeat opacity-5" style={{ backgroundSize: '200px' }} />
      </div>

      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20" />

      {/* Animated Red Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-red-500"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [null, Math.random() * 1080],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/images/legionslogored.png"
              alt="Castrum Legions Logo"
              width={300}
              height={80}
              className="mx-auto drop-shadow-[0_0_30px_rgba(255,0,36,0.5)]"
              priority
            />
            <motion.div
              className="absolute -inset-4 rounded-full bg-red-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          Latest <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Gaming News</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          Stay updated with the latest gaming news, updates, and announcements from the world of gaming
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <Sparkles className="h-6 w-6 text-red-500" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}

