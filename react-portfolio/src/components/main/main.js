import React from "react";
import './main.css'
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Project";

const Main = () => {
  return (
      <section className="container">
        <About />
        <Experience />
        <Projects />
      </section>
  )
}

export default Main