'use client'

import React from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'

export function Teams() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      {/* PinContainer */}
      <PinContainer title="Michael Brown" href="https://www.x.com">
        <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
          {/* Resim */}
          <img src="/images/avatar.png" alt="Michael Brown" className="h-full w-full object-cover" />

          {/* İçerik */}
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
            {/* İsim */}
            <h3 className="mb-1 text-lg font-bold text-white">Michael Brown</h3>

            {/* Meslek */}
            <p className="mb-2 text-sm text-gray-300">Blockchain Engineer</p>

            {/* X (Twitter) Linki */}
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
    </div>
  )
}
