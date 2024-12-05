"use client"
import React, { useRef, useState } from "react";
import FeatureOne from '@/components/home-1/FeaturesOne';

import FeatureTwo from '@/components/home-1/FeaturesTwo';
import FeatureThree from '@/components/home-1/FeaturesThree';
import { MoveUp,MoveDown } from 'lucide-react';
const Features = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuresRef = useRef(null); // Tür anotasyonu kaldırıldı
  
    const scrollToFeature = (index) => {
      if (!featuresRef.current) return;
      const section = featuresRef.current.children[index]; // TypeScript özellikleri kaldırıldı
      section.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
    };
  
    const handleNext = () => {
      if (currentIndex < 2) {
        scrollToFeature(currentIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        scrollToFeature(currentIndex - 1);
      }
    }

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Sabit Kolonlar */}
      <div className="absolute top-0 left-0 z-50 flex flex-col items-center h-screen pointer-events-none">
        <img
          src="/kolon1.png"
          alt="Kolon 1"
          className="w-32 h-32 md:w-48 md:h-48"
        />
      </div>
      <div className="absolute top-0 right-0 z-50 flex flex-col items-center h-screen pointer-events-none">
        <img
          src="/kolon2.png"
          alt="Kolon 2"
          className="w-32 h-32 md:w-48 md:h-48"
        />
      </div>

      {/* Scrollable Features */}
      <div
        className="snap-y snap-mandatory overflow-hidden h-screen w-screen relative"
        ref={featuresRef}
      >
        <div className="snap-start relative h-screen">
          <FeatureOne />
          {/* Çizgiler */}
          <div className="absolute top-0 left-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sol"
              className="w-10 h-[3600px]"
            />
          </div>
          <div className="absolute top-0 right-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sağ"
              className="w-10 h-[3600px]"
            />
          </div>
        </div>
        <div className="snap-start relative h-screen">
          <FeatureTwo />
          {/* Çizgiler */}
          <div className="absolute top-0 left-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sol"
              className="w-10 h-[3600px]"
            />
          </div>
          <div className="absolute top-0 right-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sağ"
              className="w-10 h-[3600px]"
            />
          </div>
        </div>
        <div className="snap-start relative h-screen">
          <FeatureThree />
          {/* Çizgiler */}
          <div className="absolute top-0 left-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sol"
              className="w-10 h-[3600px]"
            />
          </div>
          <div className="absolute top-0 right-20 flex items-start h-full">
            <img
              src="/cizgi.png"
              alt="Çizgi Sağ"
              className="w-10 h-[3600px]"
            />
          </div>
        </div>
      </div>

      {/* Geçiş Okları */}
      <div className="absolute bottom-10 left-10 z-50 flex flex-col items-center space-y-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full disabled:opacity-50"
          disabled={currentIndex === 0}
        >
            <MoveUp />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full disabled:opacity-50"
          disabled={currentIndex === 2}
        >
          <MoveDown />
        </button>
      </div>
    </section>
  );
};

export default Features;
