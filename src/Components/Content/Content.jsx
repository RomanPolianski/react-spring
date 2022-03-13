import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import ProjectsAttic from "./ProjectsAttic/ProjectsAttic";

const Content = ({ projects, projectsAttic }) => {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <ProjectsAttic projectsAttic={projectsAttic}/>
    </>
  );
};

export default Content;
