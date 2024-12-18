"use client";
import FadeUpAnimation from '../animations/FadeUpAnimation';
import { AnimatedModalDemo } from '../AnimatedModal/AnimatedButton';

const HeroContent = () => {
  return (
    <div className="relative ml-[-10%]"> {/* Further shifted the entire content to the left */}
      {/* Content Section */}
      <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
        <div className="col-span-12 md:col-span-6">
          <p className="mb-7 font-medium uppercase max-lg:mb-3 text-base">
            Welcome to the Future of Innovation
          </p>
          <h1 className="mb-10 max-md:mb-7 text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            Discover how{' '}
            <span className="text-red-500 text-6xl">Castrum Legions</span> transforms your digital experiences.
          </h1>
          <p className="mb-9 max-w-[590px] max-md:mb-7 text-lg text-gray-600 dark:text-gray-300">
            Explore groundbreaking features designed to revolutionize the way you interact with technology. Seamlessly bridging innovation with accessibility, we bring you tools that empower and inspire.
          </p>
          <div className="flex">
            <AnimatedModalDemo />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="relative min-h-[530px] w-full max-md:min-h-[400px] lg:ml-15">
            {/* You can add a decorative or animated element here */}
          </div>
        </div>
      </FadeUpAnimation>
    </div>
  );
};

export default HeroContent;
