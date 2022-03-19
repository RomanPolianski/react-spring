import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import s from '../Content.module.css';
import ProjectAttic from './ProjectAttic/ProjectAttic';

function ProjectsAttic() {
  const projectsAttic = useSelector((state) => state.renderItems.projectsAttic);
  const projectAttic = [...projectsAttic].map((i) => (
    <ProjectAttic title={i.title} text={i.text} key={i.id} />
  ));
  return (
    <div className={classNames(s.atticProjContent, s.bgGrey)}>
      <h2 className={s.atticProjTitle}>Projects in the Attic</h2>
      <div className={s.atticProjBoxContainer}>{projectAttic}</div>
    </div>
  );
}

export default ProjectsAttic;
