"use client";
import FadeUpAnimation from '../animations/FadeUpAnimation';

const HeroContent = () => {
  return (
    <div className="relative">
      {/* Content Section */}
      <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
        <div className="col-span-12 md:col-span-6">
          <p className="mb-8 font-medium uppercase max-lg:mb-4">
            Welcome to the Future of Innovation
          </p>
          <h1 className="mb-12 max-md:mb-8 text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white">
            Discover how{' '}
            <span className="text-red-500">Castrum Legions</span> transforms your digital experiences.
          </h1>
          <p className="mb-12 max-w-[590px] max-md:mb-8 text-lg text-gray-600 dark:text-gray-300">
            Explore groundbreaking features designed to revolutionize the way you interact with technology. Seamlessly bridging innovation with accessibility, we bring you tools that empower and inspire.
          </p>
          <button
            onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
            className="relative group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
            <span className="relative z-10">Explore Features</span>
            <svg
              className="w-6 h-6 ml-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
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
