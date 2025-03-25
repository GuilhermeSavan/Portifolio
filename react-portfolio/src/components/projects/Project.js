import React from "react";
import './projects.css';

const projectArray = [
  {title:'Weather app react', url:'https://github.com/GuilhermeSavan/Weather-app-in-react.git'
    , description:'desc',stack:'javascrpit'}
]


const Projects = () => {
  return (
    <section className="container" id="projects">
      <h3>Projetos </h3>
      {projectArray.map((projectArray, index) =>(
      <div key={index}>
        <div className=""></div>
        <div className="project_link">
          <h4>{projectArray.title}</h4>
        </div>
      </div>
      ))}
    </section>
  )
}

export default Projects 