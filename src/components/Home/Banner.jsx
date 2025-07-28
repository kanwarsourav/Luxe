import React from 'react';
import banner from '../../assets/images/banner.svg';
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {
  const fixedText = 'Elevate Your Living Space';

  return (
    <div className="bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-10 flex flex-col justify-center items-center leading-none">
        <div className="flex flex-col justify-center items-center leading-none">

          {/* Responsive Heading with typewriter */}
          <h1
            className="relative text-[42px] sm:text-[42px] md:text-[48px] font-black px-6 text-[#0F141A] text-center leading-tight sm:leading-snug"
            style={{
              minHeight: '3.4em', // Reserve vertical space for 2 lines
            }}
          >
            {/* Invisible block to reserve space */}
            <span className="invisible block ">{fixedText}</span>

            {/* Typewriter text absolutely positioned and responsive shift */}
            <span
              className="absolute left-0 right-0 w-full text-center px-8"
              style={{
                top: '-0.4em', // Fine-tuned upward shift (~text height)
              }}
            >
              <Typewriter
                words={[fixedText + '       ']} // spaces to prevent jump
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </span>
          </h1>

          {/* Description & Button */}
          <p className="lg:w-[60%] text-center text-[#0F141A] pt-3 pb-7 text-[14px] sm:text-[16px]">
            Discover curated collections of furniture and decor to create your dream home.
          </p>
          <button className="px-6 bg-black text-white py-2 text-[12px] sm:text-[14px] rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="relative py-10 overflow-hidden">
        {/* Yellow background bar */}
        <div className="absolute top-[42.5%] md:top-[39.5%] left-0 w-full h-10 md:h-24 lg:h-34 bg-[#FFC600] translate-y-[-40%] z-0"></div>

        {/* Banner Image */}
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <img src={banner} alt="Sofa banner" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
