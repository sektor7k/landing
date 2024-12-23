'use client'

import React from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'

export function Teams() {
  return (
    <div id='teams' className=" w-full bg-black text-white">
      {/* Üstteki Başlık ve Slogan */}
      <div className="py-10 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-wide text-[#FF4500]">Meet the Visionaries</h1>
        <p className="text-lg text-gray-300">The talented minds shaping the future of Web3.</p>
      </div>

      {/* İçerik */}
      <div className="flex items-center justify-center gap-6">
        {/* Birinci Üye */}
        <PinContainer title="x.com/sektor7k" href="https://x.com/sektor7k">
          <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
            {/* Resim */}
            <img src="/images/avatar.png" alt="Ömer Aydın" className="h-full w-full object-cover" />
            {/* Bilgiler */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
              <h3 className="mb-1 text-lg font-bold text-white">Ömer Aydın</h3>
              <p className="mb-2 text-sm text-gray-300">Full-Stack developer</p>
              <a
                href="https://x.com/sektor7k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline">
                @ömeraydin
              </a>
            </div>
          </div>
        </PinContainer>

        {/* İkinci Üye */}
        <PinContainer title="x.com/emretas1459" href="https://x.com/emretas1459">
          <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
            {/* Resim */}
            <img src="/images/avatar.png" alt="Emre Taş" className="h-full w-full object-cover" />
            {/* Bilgiler */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
              <h3 className="mb-1 text-lg font-bold text-white">Emre Taş</h3>
              <p className="mb-2 text-sm text-gray-300">Full-Stack developer</p>
              <a
                href="https://x.com/emretas1459"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline">
                @emretas
              </a>
            </div>
          </div>
        </PinContainer>


        {/* üçüncü Üye */}
        <PinContainer title="x.com/BerkayFall" href="https://x.com/BerkayFall">
          <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
            {/* Resim */}
            <img src="/images/avatar.png" alt="Berkay Bayram" className="h-full w-full object-cover" />
            {/* Bilgiler */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/70 p-4">
              <h3 className="mb-1 text-lg font-bold text-white">Berkay Bayram</h3>
              <p className="mb-2 text-sm text-gray-300">UI/UX Designer</p>
              <a
                href="https://x.com/BerkayFall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline">
                @Berkaybayram
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
