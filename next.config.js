/** @type {import('next').NextConfig} */
const nextConfig = {
  // Görseller için izin verilen uzak kaynaklar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'latestgamenews.com',
      },
    ],
  },

  // Webpack yapılandırması
  webpack(config) {
    // Medya dosyaları için kurallar
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Desteklenen medya türleri
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[name].[hash][ext]', // Çıktı dosya yolu
      },
    })

    return config
  },
}

module.exports = nextConfig
