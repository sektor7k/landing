import Footer from '@/components/footer/Footer'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import CompactHero from '@/components/news/CompactHero'
import SliderWithSidebar from '@/components/news/SliderWithSidebar'
import FeaturedPosts from '@/components/news/FeaturedPosts'
import NewsletterSignup from '@/components/news/NewsletterSignup'
import { getWordPressPosts, getWordPressCategories } from '@/utils/getWordPressPosts'
import NewsPageClient from '@/components/news/NewsPageClient'

export const metadata = {
  title: 'Latest Gaming News - Castrum Legions | Stay Updated with Gaming Updates',
  description: 'Get the latest gaming news, updates, and announcements from the world of gaming. Stay informed with Castrum Legions gaming news portal.',
  keywords: 'gaming news, latest game updates, gaming announcements, esports news, game releases, gaming industry news',
  openGraph: {
    title: 'Latest Gaming News - Castrum Legions',
    description: 'Stay updated with the latest gaming news, updates, and announcements from the world of gaming',
    type: 'website',
    url: 'https://castrumlegions.com/news',
    images: [
      {
        url: '/images/legionslogored.png',
        width: 1200,
        height: 630,
        alt: 'Castrum Legions Gaming News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Gaming News - Castrum Legions',
    description: 'Stay updated with the latest gaming news, updates, and announcements',
    images: ['/images/legionslogored.png'],
  },
  alternates: {
    canonical: 'https://castrumlegions.com/news',
  },
}

// Structured Data for SEO
function generateStructuredData(posts) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'Castrum Legions',
    url: 'https://castrumlegions.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://castrumlegions.com/images/legionslogored.png',
    },
    sameAs: [
      'https://twitter.com/Castrumlegion',
      'https://discord.gg/zYDmmQvSTB',
    ],
    description: 'Latest gaming news, updates, and announcements from the world of gaming',
  }

  const articles = posts.slice(0, 10).map((post) => ({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 200) || '',
    image: post.featuredImage ? [post.featuredImage] : ['https://castrumlegions.com/images/legionslogored.png'],
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Organization',
      name: 'Castrum Legions',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Castrum Legions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://castrumlegions.com/images/legionslogored.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.link,
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      ...articles,
      {
        '@type': 'ItemList',
        itemListElement: articles.map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@id': article.mainEntityOfPage['@id'],
            '@type': 'NewsArticle',
            headline: article.headline,
          },
        })),
      },
    ],
  }
}

export default async function NewsPage() {
  // İlk 5 haberi slider için al
  const sliderPosts = await getWordPressPosts(null, 5, 1)
  
  // Sidebar için haberler (slider'dan sonraki 5 haber)
  const sidebarPosts = await getWordPressPosts(null, 10, 1)
  
  // Featured posts için al (ilk 4)
  const featuredPosts = await getWordPressPosts(null, 4, 1)
  
  // Tüm haberleri listeleme için al
  const allPosts = await getWordPressPosts(null, 20, 1)
  
  // Kategorileri al
  const categories = await getWordPressCategories()

  // Generate structured data
  const structuredData = generateStructuredData(allPosts)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SimpleNavbarWithHoverEffects />
      <main className="min-h-screen bg-black">
        {/* Compact Hero - Fixed spacing */}
        <div className="pt-0">
          <CompactHero />
        </div>

        {/* Main Slider with Sidebar - No gap, full width */}
        {sliderPosts.length > 0 && (
          <div className="w-full">
            <SliderWithSidebar sliderPosts={sliderPosts} sidebarPosts={sidebarPosts} />
          </div>
        )}

        {/* Featured Posts */}
        {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}

        {/* All News with Category Filter */}
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              All <span className="text-red-500">Articles</span>
            </h2>
          </div>
          <NewsPageClient initialPosts={allPosts} categories={categories} />
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}
