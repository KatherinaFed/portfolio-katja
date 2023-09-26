'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

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
    title: 'Todo Application',
    description: 'Application that simplify your daily task management.',
    image: '/images/projectsImg/2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/KatherinaFed/todo_list_fsd',
    deployUrl: 'https://react-todo-json-server-f736b2fe9507.herokuapp.com/',
  },
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

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={'All'}
          onClick={handleTagChange}
          isSelected={tag === 'All'}
        />
        <ProjectTag
          name={'Web'}
          onClick={handleTagChange}
          isSelected={tag === 'Web'}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            deployUrl={project.deployUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;