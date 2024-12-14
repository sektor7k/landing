"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import FeatureOne from "@/components/home-1/FeatureOne";
import FeatureTwo from "@/components/home-1/FeatureTwo";
import FeatureThree from "@/components/home-1/FeatureThree";

const Features = () => {
  const sectionRef = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const features = [<FeatureOne />, <FeatureTwo />, <FeatureThree />];

  // IntersectionObserver ile Features section’a giriş/çıkış kontrolü
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollLocked(true);
          document.body.style.overflow = "hidden";
        } else {
          setScrollLocked(false);
          document.body.style.overflow = "auto";
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleWheel = useCallback((event) => {
    if (!scrollLocked) return;
    const deltaY = event.deltaY;

    if (deltaY > 0 && currentFeature < features.length - 1) {
      setCurrentFeature((prev) => prev + 1);
      event.preventDefault();
    } else if (deltaY < 0 && currentFeature > 0) {
      setCurrentFeature((prev) => prev - 1);
      event.preventDefault();
    }

    // Son feature'da aşağı gidilmeye çalışılırsa kilidi kaldır
    if (currentFeature === features.length - 1 && deltaY > 0) {
      setScrollLocked(false);
      document.body.style.overflow = "auto";
    }

    // İlk feature'da yukarı gidilmeye çalışılırsa kilidi kaldır
    if (currentFeature === 0 && deltaY < 0) {
      setScrollLocked(false);
      document.body.style.overflow = "auto";
    }
  }, [scrollLocked, currentFeature, features.length]);

  // Wheel eventini pasif olmayan olarak ekle
  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // scrollLocked true iken feature geçişlerinde scrollIntoView
  useEffect(() => {
    if (!scrollLocked) return;
    const section = sectionRef.current;
    const children = section?.querySelectorAll(".feature-slide");
    if (children && children[currentFeature]) {
      children[currentFeature].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentFeature, scrollLocked]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen h-screen overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
  
      

      <div
        className="h-screen w-full overflow-hidden snap-y snap-mandatory"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {features.map((Feature, index) => (
          <div
            key={index}
            className="feature-slide h-screen w-full snap-start relative"
          >
            {Feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
