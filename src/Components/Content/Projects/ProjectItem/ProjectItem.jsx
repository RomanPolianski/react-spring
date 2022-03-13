import classNames from "classnames";
import s from "../../Content.module.css";

const ProjectItem = ({ image, title, text, id }) => {
  return (
    <div className={classNames(s.project, s.bgWhite)}>
      <div>
        <img className={s.projectIconHeader} src={image} />
        <div className={s.projectHeader}>
          <h3 className={s.bold}>{title}</h3>
        </div>
      </div>
      <div className={s.projectDescription}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
