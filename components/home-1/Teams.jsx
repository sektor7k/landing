'use client'

import React from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'

export function Teams() {
  return (
    <div id='teams' className="h-screen w-full bg-black text-white">
      {/* Üstteki Başlık ve Slogan */}
      <div className="py-10 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-wide text-[#FF4500]">Meet the Visionaries</h1>
        <p className="text-lg text-gray-300">The talented minds shaping the future of Web3.</p>
      </div>

      {/* İçerik */}
      <div className="flex items-center justify-center gap-6">
        {/* Birinci Üye */}
        <PinContainer title="Michael Brown" href="https://www.x.com">
          <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
            {/* Resim */}
            <img src="/images/avatar.png" alt="Michael Brown" className="h-full w-full object-cover" />
            {/* Bilgiler */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
              <h3 className="mb-1 text-lg font-bold text-white">Michael Brown</h3>
              <p className="mb-2 text-sm text-gray-300">Blockchain Engineer</p>
              <a
                href="https://twitter.com/michaelbrown"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline">
                @michaelbrown
              </a>
            </div>
          </div>
        </PinContainer>

        {/* İkinci Üye */}
        <PinContainer title="Jane Smith" href="https://www.x.com">
          <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
            {/* Resim */}
            <img src="/images/avatar.png" alt="Jane Smith" className="h-full w-full object-cover" />
            {/* Bilgiler */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
              <h3 className="mb-1 text-lg font-bold text-white">Jane Smith</h3>
              <p className="mb-2 text-sm text-gray-300">UI/UX Designer</p>
              <a
                href="https://twitter.com/janesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline">
                @janesmith
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
