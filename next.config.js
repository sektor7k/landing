/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Medya dosyalarını işle
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
          name: '[name].[hash].[ext]',
        },
      },
    })

    return config
  },
}

module.exports = nextConfig
