import React from 'react';
import s from '../../Content.module.css';

function ProjectAttic({ title, text }) {
  return (
    <a className={s.atticProjBox} href="#s">
      <div className={s.atticProjectTextContainer}>
        <h3 className={s.atticProjectTitle}>{title}</h3>
        <p className={s.atticProjectText}>{text}</p>
      </div>
    </a>
  );
}

export default ProjectAttic;
