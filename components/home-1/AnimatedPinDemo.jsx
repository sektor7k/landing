"use client";
import React from "react";
import { PinContainer } from "@/components/home-1/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center bg-black text-white relative z-10">
      {/* Üstteki yazılar */}
      <div className="text-center z-0 mb-150">
        {/* Yazılar ile bileşen arasında boşluk için mb-8 eklendi */}
        <h1 className="text-3xl font-bold mb-2">Our Team</h1>
        <p className="text-lg text-gray-300">
          Meet the people behind Castrum Legions
        </p>
      </div>

      {/* PinContainer Bölgesi */}
      <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
