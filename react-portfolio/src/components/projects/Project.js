import React , {useState} from "react";
import './projects.css';
//import { CiCirclePlus } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";


const projects = [
  {title:'Weather app react', 
   url:'https://github.com/GuilhermeSavan/Weather-app-in-react.git',
   description:'Aplicação para verificar a previsão do tempo em tempo real usando React e APIs externas.',
   stack:'javascript, React, CSS'
  },
  {title:'Weather app react 2', 
   url:'https://github.com/GuilhermeSavan/Weather-app-in-react.git',
   description:'Aplicação para verificar a previsão do tempo em tempo real usando React e APIs externas.',
   stack:'javascript, React, CSS'
  }
];


const Project = () => {
  const [Index, setIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  const nextProject  = () =>  {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  const Project = projects[Index];

  return (
    <section className="container" id="projects">
      <h3>Projetos</h3>
      <div className="slider-container">
        <div id="project_card">
          <h4>{Project.title}</h4>
        </div>
        <div className="project-controls">
          <button onClick={prevProject}>
            <FaArrowLeft />
          </button>
            <p>{Index + 1} / {projects.length}</p>
          <button onClick={nextProject}>
            <FaArrowRight />
          </button>
        </div>
      </div>

    </section>

  )
}

export default Project 

/*projectArray.map((projectArray, i) =>(
      <div id="project_card" key={i}>
        <div className="project_name">
          <h4>{projectArray.title}</h4>
        </div>
        <div className="project_desc">
        <div className="link_project">
          <a href={projectArray.url}><FaGithubSquare /></a>
          <a><RxVercelLogo /></a>
        </div>
          <div className="buttons">
            <button>Anterior</button>
            <button>Proximo</button>
          </div>
        </div>

      </div> 
      ))*/