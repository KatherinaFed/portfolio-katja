'use client'
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb703] to-[#219ebc]">
              Hello, I'm {''}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Katja',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Frontend developer',
                1000,
                'Web developer',
                1000,
                // 'We produce food for Chinchillas',
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#8ecae6] text-base sm:text-lg  mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            eveniet corporis pariatur beatae amet maxime esse est architecto
            reiciendis, officia distinctio, commodi laboriosam magnam
            necessitatibus minima accusantium fugiat nisi. Voluptatibus!
          </p>
          <div className="mb-10">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#ffb703] to-[#219ebc] hover:bg-[#219ebc] text-black">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#ffb703] to-[#219ebc] hover:bg-[#fb8500] text-white mt-3">
              <span className="block bg-[#023047] hover:bg-slate-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl shadow-avatar"
              src={'/images/avatar.png'}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
