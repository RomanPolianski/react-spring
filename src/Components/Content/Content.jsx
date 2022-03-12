import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import SearchProj from "./Search/SearchProj";
import s from "./Content.module.css"

const Content = ({ projects }) => {
  return (
    <>
      <Hero />
      <SearchProj />
      <div className={s.bgGrey}>
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Content;
