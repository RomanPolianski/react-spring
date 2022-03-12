import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

const Content = ({ projects }) => {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
    </>
  );
};

export default Content;
