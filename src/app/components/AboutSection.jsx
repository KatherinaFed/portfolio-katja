'use client';
import Image from 'next/image';
import React, { useTransition, useState, useRef } from 'react';
import TabButton from './TabButton';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { EDUCATION, SKILLS } from '../const';

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const TAB_DATA = (ref, isInView) => [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul ref={ref} className="list-disc pl-2">
        <AnimatePresence>
          {SKILLS.map((skill, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              {skill}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        {EDUCATION.map((edu, index) => (
          <motion.li
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={index}
          >
            {edu}
          </motion.li>
        ))}
      </ul>
    ),
  },
  // {
  //   title: 'Expirience',
  //   id: 'expirience',
  //   constent: (
  //     <ul className='list-disc pl-2'>
  //       <li>Hexlte.io</li>
  //       <li>HTML Academy</li>
  //       <li>Moscow Power Engineering Institute (Technical University)</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white pt-24 -mt-24">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-2 xl:gap-16 sm:py-4 xl:px-16">
        <Image
          src={'/images/avatar.png'}
          width={500}
          height={500}
          alt="aboutImage"
          className="rounded-xl mx-auto"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About me</h2>
          <div className="text-[#8ecae6] lg:text-lg">
            <p>Hi 👋 !</p> I&apos;m a self-taught and spirited frontend
            developer with a passion for creating interactive and user-friendly
            applications.{' '}
            <p>
              I have experience with tools such as{' '}
              <span className="font-semibold text-[#ffb703]">
                {' '}
                JavaScript, React, HTML/CSS, Redux, TypeScript, REST Api, Axios,
                tailwindCSS, Sass, Bootstrap, Ant Design, Material UI, styled
                components, Git, FSD architecture
              </span>
              .
            </p>{' '}
            <p>
              I&apos;m quick learner and I&apos;m always looking to expand my
              knowledge and skill set.
            </p>
            <p>
              I&apos;m a team player and I&apos;m excited to work with others to
              create amazing applications.
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange('expirience')}
              active={tab === 'expirience'}
            >
              Expirience
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA(ref, isInView).find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
