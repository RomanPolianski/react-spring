import React from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import ProjectsAttic from './ProjectsAttic/ProjectsAttic';

function Content({ projects, projectsAttic }) {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <ProjectsAttic projectsAttic={projectsAttic} />
    </>
  );
}

export default Content;
