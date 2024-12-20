"use client";

import React from "react";
import { PinContainer } from "@/components/home-1/3d-pin";

export function Teams() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      {/* PinContainer */}
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
        </div>
      </PinContainer>
    </div>
  );
}
