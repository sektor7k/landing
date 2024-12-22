import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <section
      className="hero relative overflow-hidden  pb-[300px] pt-[230px]  max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <div className="absolute inset-0 -z-10">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-10">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
