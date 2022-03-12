import ProjectItem from "./ProjectItem/ProjectItem";
import s from "../Content.module.css";
import classNames from "classnames";

const Projects = ({ projects }) => {
  const projItem = [...projects].map((i) => {
    return <ProjectItem image={i.imageUrl} title={i.title} text={i.text} />;
  });
  return <div className={s.projects}>{projItem}</div>;
};

export default Projects;
