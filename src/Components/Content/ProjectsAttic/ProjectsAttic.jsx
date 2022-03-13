import classNames from "classnames";
import s from "../Content.module.css"
import ProjectAttic from "./ProjectAttic/ProjectAttic";

const ProjectsAttic = ({ projectsAttic }) => {
  const projectAttic = [...projectsAttic].map((i) => {
    return <ProjectAttic title={i.title} text={i.text} key={i.id} />;
  });
  return (
    <div className={classNames(s.atticProjContent, s.bgGrey) }>
      <h2 className={s.atticProjTitle}>Projects in the Attic</h2>
      <div className={s.atticProjBoxContainer}>{projectAttic}</div>
    </div>
  );
};

export default ProjectsAttic;
