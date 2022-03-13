import classNames from "classnames";
import { useState } from "react";
import s from "../Content.module.css";
import ProjectsRender from "./ProjectsRender";

const Projects = ({ projects }) => {
  const [value, setValue] = useState("");
  let v = value.toLowerCase();
  const filteredProjects = [...projects].filter((project) => {
    return (
      project.title.toLowerCase().includes(v) ||
      project.text.toLowerCase().includes(v)
    );
  });

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
};

export default Projects;
