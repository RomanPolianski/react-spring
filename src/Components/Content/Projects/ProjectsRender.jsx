import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import s from '../Content.module.css';

function ProjectsRender({ projects }) {
  const projItem = [...projects].map((i) => (
    <ProjectItem image={i.imageUrl} title={i.title} text={i.text} key={i.id} />
  ));
  return <div className={s.projects}>{projItem}</div>;
}

export default ProjectsRender;
