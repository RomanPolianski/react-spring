import ProjectItem from "./ProjectItem/ProjectItem";
import s from "../Content.module.css";

const ProjectsRender = ({ projects }) => {
  const projItem = [...projects].map((i) => {
    return <ProjectItem image={i.imageUrl} title={i.title} text={i.text} />;
  });
  return <div className={s.projects}>{projItem}</div>;
};

export default ProjectsRender;
