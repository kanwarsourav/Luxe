import React from 'react';
import banner from '../../assets/images/banner.svg';
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {
  return (
    <>
      <div className='bg-[#FFFDF8]'>
        <div className='max-w-7xl mx-auto px-4 md:px-12 pt-10 flex flex-col justify-center items-center leading-none'>
          <div className='flex flex-col justify-center items-center leading-none'>
            <h1 className='text-[48px] text-[#0F141A] font-black text-center heading'>
              <Typewriter
                words={['Elevate Your Living Space']}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle=''
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </h1>
            <p className='lg:w-[72%] text-center text-[#0F141A] pt-3 pb-7'>
              Discover curated collections of furniture and decor to create your dream home.
            </p>
            <button className='px-6 bg-black text-white py-2 text-[12px] rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative py-10 overflow-hidden">
          {/* Yellow background bar */}
          <div className="absolute top-[42.5%] md:top-[39.5%] left-0 w-full h-10 md:h-24 lg:h-34 bg-[#FFC600] translate-y-[-40%] z-0"></div>

          {/* Image */}
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <img src={banner} alt="Sofa banner" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}
