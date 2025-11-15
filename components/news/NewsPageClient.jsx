'use client'

import { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import { getWordPressPosts } from '@/utils/getWordPressPosts'

export default function NewsPageClient({ initialPosts, categories }) {
  const [posts, setPosts] = useState(initialPosts)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // Kategori değiştiğinde haberleri yükle
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      try {
        const newPosts = await getWordPressPosts(selectedCategory, 20, 1)
        setPosts(newPosts)
        setPage(1)
        setHasMore(newPosts.length === 20)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [selectedCategory])

  // Daha fazla haber yükle
  const loadMore = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const nextPage = page + 1
      const newPosts = await getWordPressPosts(selectedCategory, 20, nextPage)
      
      if (newPosts.length > 0) {
        setPosts((prev) => [...prev, ...newPosts])
        setPage(nextPage)
        setHasMore(newPosts.length === 20)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Error loading more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-semibold text-white">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-red-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All News
          </button>
          {categories
            .filter((cat) => cat.count > 0)
            .map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && posts.length === 0 && (
        <div className="flex items-center justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-red-500"></div>
        </div>
      )}

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <NewsCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="rounded-lg bg-gray-800 px-8 py-3 font-semibold text-white transition-all hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  'Load More'
                )}
              </button>
            </div>
          )}
        </>
      ) : (
        !loading && (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-400">No posts found in this category.</p>
          </div>
        )
      )}
    </div>
  )
}

