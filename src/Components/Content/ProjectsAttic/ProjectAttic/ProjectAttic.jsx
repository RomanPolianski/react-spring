import s from "../../Content.module.css"

const ProjectAttic = ({ title, text, id }) => {
  return (
    <a className={s.atticProjBox} href="#">
      <div className={s.atticProjectTextContainer}>
        <h3 className={s.atticProjectTitle}>{title}</h3>
        <p className={s.atticProjectText}>{text}</p>
      </div>
    </a>
  );
};

export default ProjectAttic;