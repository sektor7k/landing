'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'
import ShareButtons from './ShareButtons'
import { Clock, User, Calendar } from 'lucide-react'

export default function NewsCard({ post, index = 0 }) {
  const excerpt = stripHtml(post.excerpt).substring(0, 150) + '...'
  
  // Reading time estimation (average 200 words per minute)
  const wordCount = stripHtml(post.content || post.excerpt).split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200) || 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full overflow-hidden rounded-xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
    >
      {/* Logo Watermark */}
      <div className="absolute right-2 top-2 z-10 opacity-5 transition-opacity group-hover:opacity-10">
        <Image
          src="/images/legionslogored.png"
          alt="Castrum Legions"
          width={60}
          height={20}
          className="object-contain"
        />
      </div>

      <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-800">
          {post.featuredImage ? (
            <>
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-gradient-to-t group-hover:from-red-500/20 group-hover:via-black/40 group-hover:to-transparent" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <svg
                className="h-16 w-16 text-gray-600"
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
          
          {/* Category Badge */}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute left-3 top-3 z-10">
              <span className="rounded-full bg-red-500/95 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-red-500/50 backdrop-blur-sm">
                News
              </span>
            </div>
          )}

          {/* Reading Time Badge */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white backdrop-blur-sm">
            <Clock className="h-3 w-3" />
            <span>{readingTime} min</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date and Author */}
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.date)}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-red-400 md:text-xl">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm text-gray-400">{excerpt}</p>

          {/* Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm font-semibold text-red-500 transition-transform duration-300 group-hover:translate-x-2">
              <span>Read More</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </Link>

      {/* Share Buttons - Show on hover */}
      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <ShareButtons url={post.link} title={post.title} />
      </div>

      {/* Red accent line on hover */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  )
}
