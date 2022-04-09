/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Content.module.css';
import ProjectsRender from './ProjectsRender';
import { fetchSearchProjects } from '../../../Redux/itemsRenderSlice';

function Projects() {
  const [value, setValue] = useState('');
  const projects = useSelector((state) => state.renderItems.projects);
  const filteredProjects = [...projects];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchProjects(value));
  }, [value]);

  return (
    <div className={classNames(s.content, s.bgGrey)}>
      <div className={s.container}>
        <section>
          <input
            placeholder="Find your project"
            type="text"
            className={s.projInput}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={s.projContent}>
            <div className={s.bgGrey}>
              {filteredProjects.length > 0 ? (
                <ProjectsRender projects={filteredProjects} />
              ) : (
                <div className={s.projNoResult}>No Results</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
