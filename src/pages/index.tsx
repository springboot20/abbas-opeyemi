import { Fragment } from "react";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Skills from "../components/skills/skills";

export const Pages = () => {
  return (
    <Fragment>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};
