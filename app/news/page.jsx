import Footer from '@/components/footer/Footer'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import NewsSlider from '@/components/news/NewsSlider'
import { getWordPressPosts, getWordPressCategories } from '@/utils/getWordPressPosts'
import NewsPageClient from '@/components/news/NewsPageClient'

export const metadata = {
  title: 'News - Castrum Legions',
  description: 'Latest gaming news and updates from Castrum Legions',
}

export default async function NewsPage() {
  // İlk 5 haberi slider için al
  const sliderPosts = await getWordPressPosts(null, 5, 1)
  
  // Tüm haberleri listeleme için al
  const allPosts = await getWordPressPosts(null, 20, 1)
  
  // Kategorileri al
  const categories = await getWordPressCategories()

  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main className="min-h-screen bg-black pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Latest <span className="text-red-500">News</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Stay updated with the latest gaming news, updates, and announcements
            </p>
          </div>

          {/* News Slider - Son Haberler */}
          {sliderPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-white">Latest News</h2>
              <NewsSlider posts={sliderPosts} />
            </div>
          )}

          {/* Client Component for Category Filtering */}
          <NewsPageClient initialPosts={allPosts} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  )
}

