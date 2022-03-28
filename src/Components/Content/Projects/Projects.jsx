/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Content.module.css';
import ProjectsRender from './ProjectsRender';
import { fetchProjects } from '../../../Redux/itemsRenderSlice';

function Projects() {
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects(value));
  }, [value]);

  const projects = useSelector((state) => state.renderItems.projects);
  const filteredProjects = [...projects];

  return (
    <div className={classNames(s.content, s.bgGrey)}>
      <div className={s.container}>
        <section>
          <input
            placeholder="Find your project"
            type="text"
            className={s.projInput}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button onClick={() => setValue(textValue)}>Find</button>
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
