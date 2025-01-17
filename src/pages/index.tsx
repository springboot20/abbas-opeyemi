import { Fragment } from "react";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

export const Pages = () => {
  return (
    <Fragment>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};
