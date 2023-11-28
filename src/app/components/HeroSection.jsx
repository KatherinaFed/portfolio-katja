'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="lg:py-12 ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col items-center place-self-center text-center sm:text-left justify-self-start"
      >
        <h1 className="text-white mb-4 text-4xl h-28 sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb703] to-[#219ebc]">
            Hello, I&apos;m {''}
          </span>

          <TypeAnimation
            sequence={[
              'Katja',
              1000,
              'Frontend developer',
              1000,
              'Web developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="text-[#8ecae6] text-center text-base sm:text-lg mb-6 lg:text-xl">
          <p>Welcome to my page!</p>{' '}
          <p>
            Here, you can discover more about me, explore my projects, and find
            my contact information.
          </p>{' '}
          <p>I&apos;m excited to work together!</p>
        </div>
        <div className="mb-10">
          <a href={process.env.LINKEDIN_LINK}>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#ffb703] to-[#219ebc] text-black">
              Hire me
            </button>
          </a>
          <a
            href={
              'https://drive.google.com/file/d/1X4k8iyzhBaXCZ_nZM7ynsitfVB_rlNvY/view?usp=sharing'
            }
          >
            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#ffb703] to-[#219ebc] hover:bg-[#fb8500] text-white mt-3">
              <span className="block bg-black hover:bg-[#023047] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </a>
        </div>
      </motion.div>
      {/* <div className="col-span-4 place-self-center mt-10">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl shadow-avatar"
              src={'/images/avatar.png'}
              width={300}
              height={300}
            />
          </div>
        </div> */}
    </section>
  );
};

export default HeroSection;
