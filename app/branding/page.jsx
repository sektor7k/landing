'use client'

import { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/footer/Footer'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import { motion } from 'framer-motion'
import { Download, FileText, Palette, Type, Sparkles } from 'lucide-react'

const BrandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('logos')

  const logos = [
    {
      name: 'Logo - White',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Logo_White.png',
      variant: 'white',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Logo - Black',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Logo_Black.png',
      variant: 'black',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Logo - Brand Red',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Logo_ff0024.png',
      variant: 'red',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Logo - SVG',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Logo_SVG.svg',
      variant: 'svg',
      formats: ['SVG'],
    },
  ]

  const icons = [
    {
      name: 'Icon - White',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Icon_White.png',
      variant: 'white',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Icon - Black',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Icon_Black.png',
      variant: 'black',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Icon - Brand Red',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Icon_ff0024.png',
      variant: 'red',
      formats: ['PNG', 'SVG'],
    },
    {
      name: 'Icon - SVG',
      path: '/CastrumLegions_Brandkit/LOGO-ICONS/Castrum_Legions_Icon_SVG.svg',
      variant: 'svg',
      formats: ['SVG'],
    },
  ]

  const brandColors = [
    {
      name: 'MAIN COLOR',
      hex: '#FF0024',
      rgb: 'RGB(255, 0, 36)',
      cmyk: 'C-0, M-100, Y-86, K-0',
      usage: 'Primary brand color - the vibrant red that symbolizes strength, passion, and timeless power',
      className: 'bg-[#FF0024]',
    },
    {
      name: 'LIGHT COLOR',
      hex: '#FF2C63',
      rgb: 'RGB(255, 44, 99)',
      cmyk: 'C-0, M-83, Y-61, K-0',
      usage: 'Light variation of our main red, used for highlights and accents',
      className: 'bg-[#FF2C63]',
    },
    {
      name: 'DARK COLOR',
      hex: '#AE0000',
      rgb: 'RGB(174, 0, 0)',
      cmyk: 'C-0, M-100, Y-100, K-32',
      usage: 'Dark variation of our main red, used for depth and contrast',
      className: 'bg-[#AE0000]',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  const downloadAsset = (path, name) => {
    const link = document.createElement('a')
    link.href = path
    link.download = name
    link.click()
  }

  const getBackgroundClass = (variant) => {
    switch (variant) {
      case 'white':
        return 'bg-gray-900'
      case 'black':
        return 'bg-white'
      case 'red':
        return 'bg-white'
      case 'svg':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-[120px] pb-20 md:pt-[150px] md:pb-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[120px]" />
          </div>
          
          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-500"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Brand Assets</span>
              </motion.div>
              
              <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                Castrum Legions
                <span className="block text-red-500">Brand Kit</span>
              </h1>
              
              <p className="mb-8 text-lg text-gray-400 md:text-xl">
                Download our complete brand assets including logos, icons, colors, and guidelines.
                Maintain consistency across all your materials.
              </p>

              <motion.a
                href="/CastrumLegions_Brandkit/BrandKit/CastrumLegion_BrandKit.pdf"
                download="CastrumLegion_BrandKit.pdf"
                className="group inline-flex items-center gap-3 rounded-lg bg-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-600 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                Download Full Brand Kit PDF
              </motion.a>

              {/* PDF Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 w-full"
              >
                <div className="mx-auto max-w-5xl rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 via-red-500/5 to-black p-6 backdrop-blur-sm shadow-2xl shadow-red-500/20">
                  <div className="mb-4 flex items-center justify-between rounded-lg bg-red-500/20 px-4 py-3 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">Brand Kit Preview</h3>
                    <a
                      href="/CastrumLegions_Brandkit/BrandKit/CastrumLegion_BrandKit.pdf"
                      download="CastrumLegion_BrandKit.pdf"
                      className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-red-600"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-black">
                    <iframe
                      src="/CastrumLegions_Brandkit/BrandKit/CastrumLegion_BrandKit.pdf#view=FitH"
                      className="h-[800px] w-full md:h-[900px]"
                      title="Castrum Legions Brand Kit PDF Preview"
                      style={{
                        border: 'none',
                      }}
                    />
                    
                    {/* Overlay gradient for better integration */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
                  </div>
                  
                  <p className="mt-4 text-center text-sm text-gray-400">
                    Preview our complete Brand Kit. Scroll to view all pages or download the full PDF above.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-[80px] z-40 border-b border-gray-800 bg-black/80 backdrop-blur-md">
          <div className="container">
            <div className="flex gap-4 overflow-x-auto py-4">
              {[
                { id: 'logos', label: 'Logos', icon: FileText },
                { id: 'icons', label: 'Icons', icon: Sparkles },
                { id: 'colors', label: 'Colors', icon: Palette },
                { id: 'typography', label: 'Typography', icon: Type },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 font-medium transition-all ${
                    selectedCategory === id
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container">
            {/* Logos Section */}
            {selectedCategory === 'logos' && (
              <motion.div
                key="logos"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold">Logos</h2>
                  <p className="text-gray-400">
                    Our complete logo suite in multiple formats and variations
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {logos.map((logo, index) => (
                    <motion.div
                      key={logo.name}
                      custom={index}
                      variants={fadeUp}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 transition-all duration-300 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                      
                      {/* Preview container with better styling */}
                      <div className={`relative mb-6 flex h-56 items-center justify-center rounded-xl overflow-hidden ${getBackgroundClass(logo.variant)} transition-all duration-300 group-hover:scale-[1.02]`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src={logo.path}
                          alt={logo.name}
                          width={200}
                          height={80}
                          className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                          priority={index < 2}
                        />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="mb-3 text-xl font-bold text-white">{logo.name}</h3>
                        
                        <div className="mb-6 flex flex-wrap gap-2">
                          {logo.formats.map((format) => (
                            <span
                              key={format}
                              className="rounded-full bg-gray-800/80 px-4 py-1.5 text-xs font-semibold text-gray-300 backdrop-blur-sm transition-colors group-hover:bg-red-500/20 group-hover:text-red-400"
                            >
                              {format}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => downloadAsset(logo.path, logo.name)}
                          className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Asset
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Icons Section */}
            {selectedCategory === 'icons' && (
              <motion.div
                key="icons"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold">Icons</h2>
                  <p className="text-gray-400">
                    App icons and favicon variations in all formats
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {icons.map((icon, index) => (
                    <motion.div
                      key={icon.name}
                      custom={index}
                      variants={fadeUp}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 transition-all duration-300 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                      
                      {/* Preview container with better styling */}
                      <div className={`relative mb-6 flex h-56 items-center justify-center rounded-xl overflow-hidden ${getBackgroundClass(icon.variant)} transition-all duration-300 group-hover:scale-[1.02]`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src={icon.path}
                          alt={icon.name}
                          width={120}
                          height={120}
                          className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                          priority={index < 2}
                        />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="mb-3 text-xl font-bold text-white">{icon.name}</h3>
                        
                        <div className="mb-6 flex flex-wrap gap-2">
                          {icon.formats.map((format) => (
                            <span
                              key={format}
                              className="rounded-full bg-gray-800/80 px-4 py-1.5 text-xs font-semibold text-gray-300 backdrop-blur-sm transition-colors group-hover:bg-red-500/20 group-hover:text-red-400"
                            >
                              {format}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => downloadAsset(icon.path, icon.name)}
                          className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Asset
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Colors Section */}
            {selectedCategory === 'colors' && (
              <motion.div
                key="colors"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold">COLOR</h2>
                  <p className="mx-auto max-w-2xl text-gray-400">
                    Our palette draws inspiration from the majestic shades of red found in the Castrum Legions, symbolizing strength, passion, and timeless power.
                  </p>
                </div>

                {/* Gradient Bar */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-12 h-8 w-full rounded-lg bg-gradient-to-r from-[#AE0000] via-[#FF0024] to-[#FF2C63] shadow-lg"
                />

                <div className="grid gap-6 md:grid-cols-3">
                  {brandColors.map((color, index) => (
                    <motion.div
                      key={color.name}
                      custom={index}
                      variants={fadeUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 transition-all duration-300 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                      
                      <div className="relative z-10">
                        <div className="mb-6 flex items-center gap-6">
                          <div className={`relative h-28 w-28 rounded-xl ${color.className} shadow-2xl ring-4 ring-gray-800 transition-all duration-300 group-hover:ring-red-500/30 group-hover:scale-110 flex items-center justify-center`}>
                            {color.hex === '#FFFFFF' && (
                              <div className="absolute inset-0 rounded-xl border-2 border-gray-300" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-3 text-2xl font-bold text-white">{color.name}</h3>
                            <div className="space-y-2">
                              <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">HEX</p>
                                <p className="text-base font-semibold text-gray-300">{color.hex}</p>
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">RGB</p>
                                <p className="text-sm text-gray-400">{color.rgb}</p>
                              </div>
                              {color.cmyk && (
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500">CMYK</p>
                                  <p className="text-sm text-gray-400">{color.cmyk}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="rounded-xl bg-gray-800/50 p-4 backdrop-blur-sm">
                          <p className="text-sm leading-relaxed text-gray-300">{color.usage}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Typography Section */}
            {selectedCategory === 'typography' && (
              <motion.div
                key="typography"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold">Typography</h2>
                  <p className="text-gray-400">
                    Font families and typographic guidelines for Castrum Legions
                  </p>
                </div>

                <div className="mb-8 text-center">
                  <p className="mx-auto max-w-3xl text-gray-400">
                    The fonts chosen for Castrum Legions embody the spirit of strength, unity, and timeless power. Each letter marches with precision - bold, sharp, and forged for legends.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-1">
                  {[
                    {
                      name: 'NEXT ART',
                      family: 'AFTIKA BOLD',
                      weights: [
                        { name: 'LIGHT', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                        { name: 'BOLD', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                        { name: 'REGULAR', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                      ],
                    },
                    {
                      name: 'PURISTA BOLD',
                      family: 'PURISTA BOLD',
                      weights: [
                        { name: 'BOLD', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                        { name: 'HEAVY', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                      ],
                    },
                    {
                      name: 'KLAVIKA',
                      family: 'KLAVIKA',
                      weights: [
                        { name: 'LIGHT', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                        { name: 'REGULAR ITALIC', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210', italic: true },
                        { name: 'MEDIUM', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                        { name: 'BOLD', sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n109876543210' },
                      ],
                    },
                  ].map((fontGroup, groupIndex) => (
                    <motion.div
                      key={fontGroup.name}
                      custom={groupIndex}
                      variants={fadeUp}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 transition-all duration-300 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                      
                      <div className="relative z-10">
                        <h3 className="mb-2 text-3xl font-bold text-white">{fontGroup.name}</h3>
                        <p className="mb-6 text-sm uppercase tracking-wider text-red-500">{fontGroup.family}</p>
                        
                        <div className="space-y-6">
                          {fontGroup.weights.map((weight, weightIndex) => (
                            <div key={weightIndex} className="rounded-xl bg-black/50 p-6 backdrop-blur-sm">
                              <p className="mb-4 text-lg font-semibold text-gray-300">{weight.name}</p>
                              <pre className={`whitespace-pre-wrap text-2xl font-bold text-white ${weight.italic ? 'italic' : ''}`} style={{ fontFamily: 'monospace' }}>
                                {weight.sample}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-800 bg-gray-900/50 py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Need More Brand Assets?
              </h2>
              <p className="mb-8 text-gray-400">
                Download our complete Brand Kit PDF with detailed guidelines, usage examples, and all assets in one package.
              </p>
              <motion.a
                href="/CastrumLegions_Brandkit/BrandKit/CastrumLegion_BrandKit.pdf"
                download="CastrumLegion_BrandKit.pdf"
                className="group inline-flex items-center gap-3 rounded-lg bg-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-600 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-5 w-5" />
                Download Complete Brand Kit PDF
              </motion.a>
              
              <p className="mt-4 text-sm text-gray-400">
                Or scroll up to view the full preview above
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BrandingPage

