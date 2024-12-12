"use client";
import React, { useRef, useState, useEffect } from "react";
import FeatureOne from "@/components/home-1/FeatureOne";
import FeatureTwo from "@/components/home-1/FeatureTwo";
import FeatureThree from "@/components/home-1/FeatureThree";

const Features = () => {
  const sectionRef = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0); // Aktif Feature
  const [scrolling, setScrolling] = useState(false);

  const features = [<FeatureOne />, <FeatureTwo />, <FeatureThree />];

  // Section'ın scroll işlemini yönet
  useEffect(() => {
    const handleScroll = (event) => {
      if (scrolling) return; // Scroll işlemi devam ediyorsa başka işlem yapılmaz
      const deltaY = event.deltaY;

      if (deltaY > 0 && currentFeature < features.length - 1) {
        // Scroll aşağı
        setScrolling(true);
        setCurrentFeature((prev) => prev + 1);
        setTimeout(() => setScrolling(false), 700); // Geçiş süresi
        event.preventDefault();
      } else if (deltaY < 0 && currentFeature > 0) {
        // Scroll yukarı
        setScrolling(true);
        setCurrentFeature((prev) => prev - 1);
        setTimeout(() => setScrolling(false), 700); // Geçiş süresi
        event.preventDefault();
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (section) section.removeEventListener("wheel", handleScroll);
    };
  }, [currentFeature, scrolling, features.length]);

  return (
    <section
      className="relative bg-black min-h-screen overflow-hidden"
      ref={sectionRef}
    >
      {/* Sağ ve Sol Kolonlar */}
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

      {/* Dinamik Geçişler */}
      <div className="sticky top-0 h-screen">
        {features.map((Feature, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ${
              currentFeature === index ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {Feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
