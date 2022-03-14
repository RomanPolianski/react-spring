import React from 'react';
import classNames from 'classnames';
import s from '../../Content.module.css';

function ProjectItem({
  image, title, text,
}) {
  return (
    <div className={classNames(s.project, s.bgWhite)}>
      <div>
        <img className={s.projectIconHeader} src={image} alt="Project Icon" />
        <div className={s.projectHeader}>
          <h3 className={s.bold}>{title}</h3>
        </div>
      </div>
      <div className={s.projectDescription}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
