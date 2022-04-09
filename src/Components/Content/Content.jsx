import React, { lazy, Suspense } from 'react';
import Hero from './Hero/Hero';
import ProjectsAttic from './ProjectsAttic/ProjectsAttic';

const Projects = lazy(() => import('./Projects/Projects'));

function Content() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading</div>}>
        <Projects />
      </Suspense>
      <ProjectsAttic />
    </>
  );
}

export default Content;
