'use client'

import React from 'react'
import { PinContainer } from '@/components/home-1/3d-pin'

export function Teams() {
  return (
<<<<<<< HEAD
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
=======
    <div className="h-screen w-full bg-black text-white">
      {/* Üstteki Başlık ve Slogan */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-[#FF4500] mb-4">
          Meet the Visionaries
        </h1>
        <p className="text-lg text-gray-300">
          The talented minds shaping the future of Web3.
        </p>
      </div>

      {/* PinContainer */}
      <div className="flex justify-center items-center gap-6">
        <PinContainer title="Michael Brown" href="https://www.x.com">
          <div
            className="w-[18rem] h-[22rem] border border-gray-700 rounded-lg shadow-lg overflow-hidden relative"
          >
            {/* Resim */}
            <img
              src="/images/avatar.png"
              alt="Michael Brown"
              className="w-full h-full object-cover"
            />

            {/* İçerik */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-end p-4">
              {/* İsim */}
              <h3 className="text-lg font-bold text-white mb-1">
                Michael Brown
              </h3>

              {/* Meslek */}
              <p className="text-sm text-gray-300 mb-2">
                Blockchain Engineer
              </p>

              {/* X (Twitter) Linki */}
              <a
                href="https://twitter.com/michaelbrown"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                @michaelbrown
              </a>
            </div>
>>>>>>> 4ebaea7324ad60dd318633a6bb1747de0013275f
          </div>
        </PinContainer>

        {/* İkinci Üye */}
        <PinContainer title="Jane Smith" href="https://www.x.com">
          <div
            className="w-[18rem] h-[22rem] border border-gray-700 rounded-lg shadow-lg overflow-hidden relative"
          >
            {/* Resim */}
            <img
              src="/images/avatar.png"
              alt="Jane Smith"
              className="w-full h-full object-cover"
            />

            {/* İçerik */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-end p-4">
              {/* İsim */}
              <h3 className="text-lg font-bold text-white mb-1">
                Jane Smith
              </h3>

              {/* Meslek */}
              <p className="text-sm text-gray-300 mb-2">
                UI/UX Designer
              </p>

              {/* X (Twitter) Linki */}
              <a
                href="https://twitter.com/janesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                @janesmith
              </a>
            </div>
          </div>
        </PinContainer>
       
          <PinContainer title="Jane Smith" href="https://www.x.com">
          <div
            className="w-[18rem] h-[22rem] border border-gray-700 rounded-lg shadow-lg overflow-hidden relative"
          >
            {/* Resim */}
            <img
              src="/images/avatar.png"
              alt="Jane Smith"
              className="w-full h-full object-cover"
            />

            {/* İçerik */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-end p-4">
              {/* İsim */}
              <h3 className="text-lg font-bold text-white mb-1">
                Jane Smith
              </h3>

              {/* Meslek */}
              <p className="text-sm text-gray-300 mb-2">
                UI/UX Designer
              </p>

              {/* X (Twitter) Linki */}
              <a
                href="https://twitter.com/janesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                @janesmith
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
