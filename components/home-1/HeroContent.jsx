import Image from 'next/image'
import heroChartDark from '../../public/images/untitled.png'
import heroChartLight from '../../public/images/hero/hero-chart.png'
import FadeUpAnimation from '../animations/FadeUpAnimation'

const HeroContent = () => {
  return (
    <div className="relative">
      {/* MKV Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-background.mkv" type="video/webm" />
          <p>Your browser does not support MKV format. Please update your browser or use a compatible format.</p>
        </video>
      </div>

      {/* Content Section */}
      <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
        <div className="col-span-12 md:col-span-6">
          <p className="mb-8 font-medium uppercase max-lg:mb-4">
            50k+ Trusted Businesses
          </p>
          <h1 className="mb-12 max-md:mb-8">
            Make your{' '}
            <span className="inline-block rounded-[88px] border-2 border-paragraph bg-[#D9D9D900] px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-[#F0F3EA]">
              Finance
            </span>{' '}
            more efficient.
          </h1>
          <p className="mb-12 max-w-[590px] max-md:mb-8">
            Until recently, the prevailing view assumed lorem ipsum was born as a
            nonsense text. It&rsquo;s not Latin, though it looks like it.
          </p>
          <form>
            <div className="border-borderColour grid w-full max-w-[520px] grid-cols-12 items-center rounded-[60px] border bg-white pb-1 pe-1 pl-4 pt-1 dark:border-[#31332F] dark:bg-dark-200 sm:pl-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="placeholder:text-light text-light col-span-8 bg-transparent leading-[1.75] text-[#A1A49D] outline-none transition-all duration-300 focus:border-primary focus:outline-none dark:placeholder:text-[#A1A49D] xs:col-span-8"
              />
              <button className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4">
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="relative min-h-[530px] w-full max-md:min-h-[400px] lg:ml-15">
            <div className="lg:!not-sr-only-bottom-[45px] absolute !-bottom-0 !-right-5 max-lg:w-[196px] max-md:!-bottom-5 max-md:!-right-5 lg:right-0 xl:right-[30px]">
              <Image
                src={heroChartLight}
                alt="hero Image"
                className="inline-block dark:hidden"
              />
              <Image
                src={heroChartDark}
                alt="hero Image"
                className="hidden dark:inline-block"
              />
            </div>
          </div>
        </div>
      </FadeUpAnimation>
    </div>
  )
}

export default HeroContent
