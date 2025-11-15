'use client'

import { motion } from 'framer-motion'
import { Newspaper, Users, TrendingUp, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NewsStats({ totalPosts = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('news-stats')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const stats = [
    {
      icon: Newspaper,
      value: totalPosts || 0,
      label: 'Total Articles',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: TrendingUp,
      value: '24/7',
      label: 'Updated Daily',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Readers',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Clock,
      value: '< 5min',
      label: 'Avg Read Time',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ]

  return (
    <div id="news-stats" className="relative py-16 md:py-24">
      {/* Background with Logo Watermark */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-[url('/images/legionslogored.png')] bg-repeat"
          style={{ backgroundSize: '300px' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 text-center transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20"
              >
                {/* Red glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 transition-all group-hover:from-red-500/10 group-hover:to-transparent" />

                <div className={`relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor} transition-all group-hover:scale-110`}>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative z-10"
                >
                  <div className={`mb-2 text-3xl font-bold ${stat.color} md:text-4xl`}>
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  </div>
                  <div className="text-sm text-gray-400 md:text-base">{stat.label}</div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

