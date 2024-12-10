"use client"
import React, { useRef, useState } from "react";
import FeatureOne from '@/components/home-1/FeatureOne';

import FeatureTwo from '@/components/home-1/FeatureTwo';
import FeatureThree from '@/components/home-1/FeatureThree';
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
    
    <div className="absolute top-0 left-0 z-50">
  <img
    src="/images/kolon2.png"
    alt="Kolon 1"
    className="w-[200px] h-[600px] md:w-[300px] md:h-[700px] object-cover"
  />
</div>
<div className="absolute top-0 right-0 z-50">
  <img
    src="/images/kolon1.png"
    alt="Kolon 2"
    className="w-[200px] h-[600px] md:w-[300px] md:h-[700px] object-cover"
  />
</div>



      {/* Scrollable Features */}
      <div
        className="snap-y snap-mandatory overflow-hidden h-screen w-screen relative"
        ref={featuresRef}
      >
        <div className="snap-start relative h-screen">
          <FeatureOne />
        
        
        
        </div>
        <div className="snap-start relative h-screen">
          <FeatureTwo />
       
         
        </div>
        <div className="snap-start relative h-screen">
          <FeatureThree />
   
         
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
