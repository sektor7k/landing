'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import FeatureOne from '@/components/home-1/FeatureOne'
import FeatureTwo from '@/components/home-1/FeatureTwo'
import FeatureThree from '@/components/home-1/FeatureThree'

const Features = () => {
  const sectionRef = useRef(null)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [scrollLocked, setScrollLocked] = useState(false)
  const features = [
    { component: <FeatureOne />, key: 'feature1' },
    { component: <FeatureTwo />, key: 'feature2' },
    { component: <FeatureThree />, key: 'feature3' },
  ]

  useEffect(() => {
    const sectionRefCurrent = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollLocked(true)
          document.body.style.overflow = 'hidden'
        } else {
          setScrollLocked(false)
          document.body.style.overflow = 'auto'
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRefCurrent) observer.observe(sectionRefCurrent)

    return () => {
      if (sectionRefCurrent) observer.unobserve(sectionRefCurrent)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleWheel = useCallback(
    (event) => {
      if (!scrollLocked) return

      const deltaY = event.deltaY

      if (deltaY > 0 && currentFeature < features.length - 1) {
        setCurrentFeature((prev) => prev + 1)
        event.preventDefault()
      } else if (deltaY < 0 && currentFeature > 0) {
        setCurrentFeature((prev) => prev - 1)
        event.preventDefault()
      }

      if (currentFeature === features.length - 1 && deltaY > 0) {
        setScrollLocked(false)
        document.body.style.overflow = 'auto'
      }
      if (currentFeature === 0 && deltaY < 0) {
        setScrollLocked(false)
        document.body.style.overflow = 'auto'
      }
    },
    [scrollLocked, currentFeature, features.length],
  )

  useEffect(() => {
    const el = sectionRef.current
    if (el) el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el && el.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  useEffect(() => {
    if (!scrollLocked) return
    const section = sectionRef.current
    const children = section?.querySelectorAll('.feature-slide')
    if (children && children[currentFeature]) {
      children[currentFeature].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [currentFeature, scrollLocked])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-screen overflow-hidden bg-black">
      <div className="absolute left-0 top-[-10%] z-50">
        <img
          src="/images/kolon1.png"
          alt="Sol Kolon"
          className="h-[600px] w-[200px] object-cover md:h-[700px] md:w-[300px]"
        />
      </div>
      <div className="absolute right-0 top-[-10%] z-50">
        <img
          src="/images/kolon2.png"
          alt="Sağ Kolon"
          className="h-[600px] w-[200px] object-cover md:h-[700px] md:w-[300px]"
        />
      </div>

      <div className="h-screen w-full snap-y snap-mandatory overflow-hidden" style={{ scrollSnapType: 'y mandatory' }}>
        {features.map((Feature) => (
          <div key={Feature.key} className="feature-slide relative h-screen w-full snap-start">
            {Feature.component}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
