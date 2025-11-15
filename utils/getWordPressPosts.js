/**
 * WordPress REST API'den haberleri çeker
 * @param {number} categoryId - Kategori ID (opsiyonel)
 * @param {number} perPage - Sayfa başına haber sayısı
 * @param {number} page - Sayfa numarası
 * @returns {Promise<Array>} Haberler dizisi
 */
export async function getWordPressPosts(categoryId = null, perPage = 10, page = 1) {
  try {
    let url = `https://latestgamenews.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`
    
    if (categoryId) {
      url += `&categories=${categoryId}`
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1 saat cache
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const posts = await response.json()

    // Featured image ve diğer bilgileri düzenle
    return posts.map((post) => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
      let featuredImage = null
      
      if (featuredMedia) {
        // Önce source_url'i dene, yoksa media_details'den al
        featuredImage = featuredMedia.source_url || 
                       featuredMedia.media_details?.sizes?.full?.source_url ||
                       featuredMedia.media_details?.sizes?.large?.source_url ||
                       featuredMedia.media_details?.sizes?.medium_large?.source_url ||
                       null
      }

      return {
        id: post.id,
        title: post.title?.rendered || '',
        excerpt: post.excerpt?.rendered || '',
        content: post.content?.rendered || '',
        date: post.date,
        modified: post.modified,
        link: post.link,
        slug: post.slug,
        featuredImage,
        featuredImageAlt: featuredMedia?.alt_text || post.title?.rendered || '',
        categories: post.categories || [],
        author: post._embedded?.author?.[0]?.name || 'Unknown',
      }
    })
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

/**
 * WordPress kategorilerini çeker
 * @returns {Promise<Array>} Kategoriler dizisi
 */
export async function getWordPressCategories() {
  try {
    const response = await fetch('https://latestgamenews.com/wp-json/wp/v2/categories?per_page=100', {
      next: { revalidate: 86400 }, // 24 saat cache
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const categories = await response.json()
    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
    }))
  } catch (error) {
    console.error('Error fetching WordPress categories:', error)
    return []
  }
}

/**
 * HTML string'den plain text çıkarır
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
export function stripHtml(html) {
  if (!html) return ''
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

/**
 * Tarihi formatlar
 * @param {string} dateString - ISO date string
 * @returns {string} Formatlanmış tarih
 */
export function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

