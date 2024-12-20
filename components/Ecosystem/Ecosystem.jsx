"use client";

import { FlipWords } from "../ui/flip-words";

export function Ecosystem() {
  const words = ["Powerful", "Seamless", "Innovative", "Secure"];

  return (
    <div className="relative flex flex-col items-center justify-center h-[50rem] w-full">
      {/* Yazı Kısmı */}
      <div className="z-10 text-center mb-8">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Explore the
          <FlipWords words={words} /> <br />
          Castrum Legions Ecosystem
        </div>
      </div>

      {/* Video Kısmı */}
      <div className="relative z-0 flex items-center justify-center w-[90%] max-w-[1400px] h-[70%] bg-black/10 rounded-lg overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-lg"
        >
          <source src="/videos/features2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
