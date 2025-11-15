'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users } from 'lucide-react'

export default function CompactHero() {
  return (
    <div className="relative border-b border-gray-800/50 bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-6 md:pt-28 md:pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-[url('/images/legionslogored.png')] bg-repeat"
          style={{ backgroundSize: '150px' }}
        />
      </div>

      {/* Red Gradient Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left Side - Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6"
          >
            <div className="relative">
              <Image
                src="/images/legionslogored.png"
                alt="Castrum Legions Logo"
                width={200}
                height={55}
                className="h-10 w-auto drop-shadow-[0_0_20px_rgba(255,0,36,0.3)] md:h-12"
                priority
              />
              <motion.div
                className="absolute -inset-2 rounded-full bg-red-500/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
            <div className="hidden h-8 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent md:block" />
            <div className="text-center md:text-left">
              <h1 className="text-xl font-bold text-white md:text-2xl">
                Latest <span className="text-red-500">Gaming News</span>
              </h1>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">
                Stay updated with gaming updates & announcements
              </p>
            </div>
          </motion.div>

          {/* Right Side - Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-3 py-2 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <div className="text-xs md:text-sm">
                <div className="font-bold text-red-500">1.000+</div>
                <div className="text-xs text-gray-400">Articles</div>
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-3 py-2 backdrop-blur-sm md:flex">
              <Clock className="h-4 w-4 text-red-500" />
              <div className="text-xs md:text-sm">
                <div className="font-bold text-red-500">24/7</div>
                <div className="text-xs text-gray-400">Updated</div>
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-3 py-2 backdrop-blur-sm lg:flex">
              <Users className="h-4 w-4 text-red-500" />
              <div className="text-xs md:text-sm">
                <div className="font-bold text-red-500">10K+</div>
                <div className="text-xs text-gray-400">Readers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
