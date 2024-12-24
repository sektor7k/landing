'use client'

import React from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'

export function Teams() {
  return (
    <div id="teams" className="relative h-full w-full bg-black py-20 text-white">
      {/* Üstteki Başlık ve Slogan */}
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-wide md:text-5xl">Meet the Visionaries</h1>
        <p className="text-lg text-gray-300 md:text-xl">The talented minds shaping the future of Web3.</p>
      </div>

      {/* Takım Üyeleri */}
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {/* Birinci Üye */}
        <PinContainer title="x.com/sektor7k" href="https://x.com/sektor7k">
          <div className="flex w-[18rem] flex-col items-center space-y-6 md:w-[22rem]">
            {/* Resim */}
            <img src="/images/team/omer.jpg" alt="Ömer Aydın" className="h-56 w-56 rounded-full object-cover" />
            {/* Bilgiler */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Ömer Aydın</h3>
              <p className="text-lg text-gray-300">Full-Stack Developer</p>
              <a
                href="https://x.com/sektor7k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline">
                @sektor7k
              </a>
            </div>
          </div>
        </PinContainer>

        {/* İkinci Üye */}
        <PinContainer title="x.com/emretas1459" href="https://x.com/emretas1459">
          <div className="flex w-[18rem] flex-col items-center space-y-6 md:w-[22rem]">
            {/* Resim */}
            <img src="/images/team/emre.jpg" alt="Emre Taş" className="h-56 w-56 rounded-full object-cover" />
            {/* Bilgiler */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Emre Taş</h3>
              <p className="text-lg text-gray-300">Full-Stack Developer</p>
              <a
                href="https://x.com/emretas1459"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline">
                @emretas
              </a>
            </div>
          </div>
        </PinContainer>

        {/* Üçüncü Üye */}
        <PinContainer title="x.com/BerkayFall" href="https://x.com/BerkayFall">
          <div className="flex w-[18rem] flex-col items-center space-y-6 md:w-[22rem]">
            {/* Resim */}
            <img src="/images/team/berkay.jpg" alt="Berkay Bayram" className="h-56 w-56 rounded-full object-cover" />
            {/* Bilgiler */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Berkay Bayram</h3>
              <p className="text-lg text-gray-300">UI/UX Designer</p>
              <a
                href="https://x.com/BerkayFall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline">
                @Berkaybayram
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
