'use client'
import React from 'react'

export default function FeatureThree() {
  return (
    <section className="relative flex min-h-screen items-center bg-black">
      {/* Video Arka Plan */}
      <div className="absolute inset-0">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover">
          <source src="/videos/tournament.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sol Alt Yazılar */}
      <div className="absolute bottom-20 left-10 max-w-sm space-y-2 font-sans text-white">
        <h2 className="text-3xl font-bold">Zafer Yolculuğu</h2>
        <ul className="list-disc space-y-1 pl-5 text-lg">
          <li>Zafer için gereken her şey burada.</li>
          <li>Sınırlarını aş ve gücünü kanıtla.</li>
          <li>Topluluk lideri ol ve miras bırak.</li>
        </ul>
      </div>

      {/* Sağ Alt Yazılar */}
      <div className="absolute bottom-20 right-10 max-w-sm space-y-2 text-right font-sans text-white">
        <h2 className="text-3xl font-bold">Katıl ve Kazan</h2>
        <ul className="list-disc space-y-1 pl-5 text-lg">
          <li>Zaferi paylaş ve ödülleri al.</li>
          <li>Topluluğun bir parçası ol.</li>
          <li>Geleceği sen şekillendir.</li>
        </ul>
      </div>
    </section>
  )
}
