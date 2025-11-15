'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'

export default function NewsCard({ post, index = 0 }) {
  const excerpt = stripHtml(post.excerpt).substring(0, 150) + '...'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20"
    >
      <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-800">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="mb-2 text-xs text-gray-400">{formatDate(post.date)}</div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm text-gray-400">{excerpt}</p>

          {/* Read More */}
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
      </Link>
    </motion.div>
  )
}

