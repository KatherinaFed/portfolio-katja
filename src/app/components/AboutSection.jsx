'use client';
import Image from 'next/image';
import React, { useTransition, useState, startTransition } from 'react';
import TabButton from './TabButton';
import { motion, AnimatePresence } from 'framer-motion';
import { EDUCATION, SKILLS } from '../const';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <AnimatePresence>
          {SKILLS.map((skill, index) => (
            <motion.li
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              key={index}
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

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
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
              I have expirience with tools such as{' '}
              <span className="font-semibold text-[#ffb703]">
                {' '}
                JavaScript, React, HTML/CSS, Redux, TypeScript, REST Api, Axios,
                Bootstrap, Ant Design, Material UI, styled components,
                tailwindCSS, Git, FSD architecture
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
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
