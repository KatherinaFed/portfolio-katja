'use client';
import Image from 'next/image';
import React, { useTransition, useState, startTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux toolkit</li>
        <li>Styled components</li>
        <li>TailwindCSS</li>
        <li>Git</li>
        <li>FSD Architecture</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Hexlet.io</li>
        <li>HTML Academy</li>
        <li>Moscow Power Engineering Institute (Technical University)</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={'/images/avatar.png'}
          width={500}
          height={500}
          alt="aboutImage"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <div className="text-[#8ecae6] lg:text-lg">
            <p>Hi 👋 !</p> I'm a self-taught and spirited frontend developer
            with a passion for creating interactive and user-friendly
            applications.{' '}
            <p>
              I have expirience with tools such as JavaScript, React, HTML/CSS,
              Redux, TypeScript, REST Api, Axios, Bootstrap, Ant Design,
              Material UI, styled components, tailwindCSS, Git, FSD
              architecture.
            </p>{' '}
            <p>
              I'm quick learner and I'm always looking to expand my knowledge
              and skill set.
            </p>
            <p>
              I'm a team player and I'm excited to work with others to create
              amazing applications.
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
