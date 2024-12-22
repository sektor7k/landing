'use client'

import { FlipWords } from '../ui/flip-words'

export function Ecosystem() {
  const words = ['Powerful', 'Seamless', 'Innovative', 'Secure']

  return (
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center">
      {/* Yazı Kısmı */}
      <div className="z-10 mb-8 text-center">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Explore the
          <FlipWords words={words} /> <br />
          Castrum Legions Ecosystem
        </div>
      </div>

      {/* Video Kısmı */}
      <div className="relative z-0 flex h-[70%] w-[90%] max-w-[1400px] items-center justify-center overflow-hidden rounded-lg bg-black/10 shadow-lg">
        <video autoPlay loop muted className="h-full w-full rounded-lg object-cover">
          <source src="/videos/features2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
