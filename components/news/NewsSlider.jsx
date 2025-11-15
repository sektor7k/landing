'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'

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
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-red-500/10 md:h-[600px]">
      {/* Logo Watermark */}
      <div className="absolute right-8 top-8 z-10 opacity-10">
        <Image
          src="/images/legionslogored.png"
          alt="Castrum Legions"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

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
            {/* Red Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-red-500/20 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="mb-4 inline-block rounded-full bg-red-500/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                Latest News
              </div>

              {/* Date and Reading Time */}
              <div className="mb-3 flex items-center gap-4 text-sm text-gray-300">
                <span>{formatDate(currentPost.date)}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Title */}
              <Link href={currentPost.link} target="_blank" rel="noopener noreferrer">
                <h2 className="mb-4 text-3xl font-bold text-white transition-colors hover:text-red-500 md:text-5xl lg:text-6xl">
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
                className="group inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 text-white transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-2xl hover:shadow-red-500/50"
              >
                <span className="font-bold">Read Full Article</span>
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-red-500/30 bg-black/70 p-3 text-white backdrop-blur-sm transition-all hover:bg-red-500/20 hover:border-red-500 hover:text-red-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-red-500/30 bg-black/70 p-3 text-white backdrop-blur-sm transition-all hover:bg-red-500/20 hover:border-red-500 hover:text-red-500"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {posts.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'w-8 bg-red-500 shadow-lg shadow-red-500/50'
                : 'w-2 bg-white/50 hover:bg-red-500/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

