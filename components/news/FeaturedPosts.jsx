'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { formatDate, stripHtml } from '@/utils/getWordPressPosts'
import { Clock, TrendingUp } from 'lucide-react'

export default function FeaturedPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1, 4)

  const excerpt = stripHtml(featuredPost.excerpt).substring(0, 200) + '...'

  return (
    <div className="relative py-16 md:py-24">
      {/* Background with Logo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-[url('/images/legionslogored.png')] bg-repeat"
          style={{ backgroundSize: '300px' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent" />
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-2.5 backdrop-blur-sm">
              <TrendingUp className="h-5 w-5 text-red-500 md:h-6 md:w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Featured <span className="text-red-500">Posts</span>
              </h2>
              <p className="mt-1 text-sm text-gray-400">Top stories you shouldn&apos;t miss</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Featured Post */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group lg:col-span-2"
          >
            <Link
              href={featuredPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-2xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden md:h-80">
                {featuredPost.featuredImage ? (
                  <>
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.featuredImageAlt || featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <svg className="h-24 w-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Badge */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="rounded-full bg-red-500/95 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-500/50 backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="mb-3 text-sm text-gray-400">{formatDate(featuredPost.date)}</div>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-red-400 md:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-300 md:text-lg">{excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-500 transition-all group-hover:bg-red-500/20">
                    <span>Read Article</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Posts */}
          <div className="space-y-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <div className="flex gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.featuredImageAlt || post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="96px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-800">
                          <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 py-2">
                      <div className="mb-1 text-xs text-gray-400">{formatDate(post.date)}</div>
                      <h4 className="line-clamp-2 text-sm font-bold text-white transition-colors group-hover:text-red-500">
                        {post.title}
                      </h4>
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

