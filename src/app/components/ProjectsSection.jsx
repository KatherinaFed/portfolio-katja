'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Google Books Search Website',
    description:
      'The Google Books Search App is a user-friendly app that allows you to search for books and discover detailed information about them.',
    image: '/images/projectsImg/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/KatherinaFed/book-search',
    deployUrl: 'https://book-search-steel.vercel.app/',
  },
  {
    id: 2,
    title: 'Slack (clone) chat',
    description: 'Slack chat is a straightforward messaging platform that simplifies communication with real-time messaging and channels.',
    image: '/images/projectsImg/chat.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/KatherinaFed/frontend-project-lvl4',
    deployUrl: 'https://slack-chat-react-0e50481335ce.herokuapp.com/',
  },
  // {
  //   id: 2,
  //   title: 'Todo Application',
  //   description: 'Application that simplify your daily task management.',
  //   image: '/images/projectsImg/2.png',
  //   tag: ['All', 'Web'],
  //   gitUrl: 'https://github.com/KatherinaFed/todo_list_fsd',
  //   deployUrl: 'https://react-todo-json-server-f736b2fe9507.herokuapp.com/',
  // },
  {
    id: 3,
    title: 'Social media Website',
    description:
      'Social media platform lets you connect with friends, share updates, photos, and posts. Customize your profile, follow others, and enjoy.',
    image: '/images/projectsImg/3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/KatherinaFed/social-media',
    deployUrl: 'https://katherinafed.github.io/social-media/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' className='pt-24 -mt-24'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              deployUrl={project.deployUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
