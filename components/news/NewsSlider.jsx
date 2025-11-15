'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NewsSlider({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Slider'ı otomatik oynat
  useEffect(() => {
    if (!isAutoPlaying || posts.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length)
    }, 5000) // 5 saniyede bir değiş

    return () => clearInterval(interval)
  }, [isAutoPlaying, posts.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // 10 saniye sonra tekrar başlat
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (!posts || posts.length === 0) {
    return null
  }

  const currentPost = posts[currentIndex]
  const excerpt = stripHtml(currentPost.excerpt).substring(0, 200) + '...'

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black md:h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {currentPost.featuredImage ? (
              <Image
                src={currentPost.featuredImage}
                alt={currentPost.featuredImageAlt || currentPost.title}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="100vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg
                  className="h-32 w-32 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
            <div className="max-w-3xl">
              {/* Date */}
              <div className="mb-3 text-sm text-gray-300">{formatDate(currentPost.date)}</div>

              {/* Title */}
              <Link href={currentPost.link} target="_blank" rel="noopener noreferrer">
                <h2 className="mb-4 text-3xl font-bold text-white transition-colors hover:text-red-500 md:text-5xl">
                  {currentPost.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="mb-6 line-clamp-3 text-base text-gray-300 md:text-lg">{excerpt}</p>

              {/* Read More Button */}
              <Link
                href={currentPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50"
              >
                <span className="font-semibold">Read Full Article</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:text-red-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:text-red-500"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {posts.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'w-8 bg-red-500'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

