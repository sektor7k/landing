'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react'

export default function SliderWithSidebar({ sliderPosts, sidebarPosts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || sliderPosts.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderPosts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, sliderPosts.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderPosts.length) % sliderPosts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderPosts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (!sliderPosts || sliderPosts.length === 0) {
    return null
  }

  const currentPost = sliderPosts[currentIndex]
  const excerpt = stripHtml(currentPost.excerpt).substring(0, 150) + '...'

  return (
    <div className="w-full py-8">
      <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-12 lg:px-8">
        {/* Main Slider - Left Side (9/12 = 3/4) */}
        <div className="lg:col-span-9">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-red-500/20 md:h-[600px] lg:h-[650px]">
            {/* Logo Watermark */}
            <div className="absolute right-6 top-6 z-10 opacity-5">
              <Image
                src="/images/legionslogored.png"
                alt="Castrum Legions"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Red Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
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
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                      <svg className="h-32 w-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-red-500/20 to-black/70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10 lg:p-12">
                  <div className="max-w-3xl">
                    {/* Badge and Meta */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <div className="rounded-full bg-red-500/95 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm shadow-lg shadow-red-500/50">
                        Latest News
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(currentPost.date)}
                        </span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden items-center gap-1 md:flex">
                          <Clock className="h-3 w-3" />
                          5 min
                        </span>
                      </div>
                    </div>

                    {/* Title - Smaller */}
                    <Link href={currentPost.link} target="_blank" rel="noopener noreferrer" className="block group">
                      <h2 className="mb-3 text-xl font-bold leading-tight text-white transition-colors hover:text-red-400 md:text-2xl lg:text-3xl">
                        {currentPost.title}
                      </h2>
                    </Link>

                    {/* Excerpt - Smaller */}
                    <p className="mb-5 line-clamp-2 text-xs leading-relaxed text-gray-200 md:text-sm">
                      {excerpt}
                    </p>

                    {/* Read More Button - Smaller */}
                    <Link
                      href={currentPost.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/50 md:px-6 md:py-3 md:text-sm"
                    >
                      <span className="relative z-10">Read Full Article</span>
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Smaller */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-red-500/40 bg-black/80 p-2 text-white backdrop-blur-md transition-all hover:border-red-500 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/50 md:left-4"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-red-500/40 bg-black/80 p-2 text-white backdrop-blur-md transition-all hover:border-red-500 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/50 md:right-4"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Dots Indicator - Enhanced */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2 md:bottom-6">
              {sliderPosts.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'w-8 bg-red-500 shadow-lg shadow-red-500/70'
                      : 'w-2 bg-white/60 hover:bg-red-500/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side (3/12 = 1/4) */}
        <div className="lg:col-span-3 lg:pl-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-8 bg-gradient-to-r from-red-500 to-transparent" />
            <h3 className="text-lg font-bold text-white md:text-xl">
              Trending <span className="text-red-500">Now</span>
            </h3>
          </div>
          <div className="space-y-4">
            {sidebarPosts.slice(0, 5).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <div className="flex gap-3 p-3">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                      {post.featuredImage ? (
                        <>
                          <Image
                            src={post.featuredImage}
                            alt={post.featuredImageAlt || post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="96px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-800">
                          <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div className="min-w-0">
                        <div className="mb-1 text-xs text-gray-400">{formatDate(post.date)}</div>
                        <h4 className="line-clamp-2 text-xs font-bold leading-tight text-white transition-colors group-hover:text-red-400 md:text-sm">
                          {post.title}
                        </h4>
                      </div>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>5 min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
