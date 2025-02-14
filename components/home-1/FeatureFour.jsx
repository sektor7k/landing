'use client'
import React, { useRef, useState } from 'react';

export default function FeatureTwo() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('/videos/gamestudio.mp4'); // Varsayılan video

  const titleStyle = {
    background: 'linear-gradient(90deg, #FF4500, #FFFFFF)', // Red to white gradient
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
  };

  // Videoya tıklanınca belirli koordinatı kontrol et
  const handleVideoClick = (event) => {
    if (!videoRef.current) return;

    const rect = videoRef.current.getBoundingClientRect(); // Video'nun ekran konumunu al
    const clickX = event.clientX - rect.left; // Videoya göre X koordinatı
    const clickY = event.clientY - rect.top;  // Videoya göre Y koordinatı

    console.log(`Clicked at: X=${clickX}, Y=${clickY}`); // Test için koordinatları ekrana yaz

    // 📌 Eğer X=982, Y=667 noktasının 50 piksel çevresine tıklanırsa videoyu değiştir
    if (Math.abs(clickX - 982) < 100 && Math.abs(clickY - 667) < 100) { 
      setVideoSrc('/videos/game2.mp4'); // Yeni video
    }
  };

  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="hidden h-full w-full object-cover md:block cursor-pointer"
          onClick={handleVideoClick} // 📌 Tıklama eventini ekledik
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <video
          id="background-video-mobile"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover md:hidden cursor-pointer"
          onClick={handleVideoClick}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Mobile Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start p-4 text-white sm:hidden">
        <div className="mt-6 text-center">
          <h2 style={titleStyle} className="mb-4 text-2xl font-bold uppercase">
            Innovation in Game Development
          </h2>
          <p className="mb-6 text-sm">
            At our **Game Studio**, we craft immersive experiences that push the boundaries of interactive entertainment.
          </p>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Cutting-Edge Game Technology
              </h3>
              <p className="text-xs text-gray-300">
                We leverage the latest tools and engines to create high-performance, visually stunning games.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-base font-semibold text-[#FFA500]">
                Immersive and Engaging Worlds
              </h3>
              <p className="text-xs text-gray-300">
                Every project is designed to captivate players with deep storytelling and seamless gameplay mechanics.
              </p>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
}
