import React , {useState} from "react";
import './projects.css';
//import { CiCirclePlus } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";


const projects = [
  {title:'Weather app react',
   section: [ 
   { type:'url', content :'https://github.com/GuilhermeSavan/Weather-app-in-react.git'},
   { type: 'description', content:'Aplicação para verificar a previsão do tempo em tempo real usando React e APIs externas.'},
   { type: 'stack', content: ['javascript', 'React', 'CSS']}
  ]
  },
  {title:'Weather app react',
   section: [ 
   { type:'url', content :'https://github.com/GuilhermeSavan/Weather-app-in-react.git'},
   { type: 'description', content:'Aplicação para verificar a previsão do tempo em tempo real usando React e APIs externas.'},
   { type: 'stack', content: [ 'javascript', 'React', 'CSS']}]
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
  
  const nextSection = () => {
     setSectionIndex(prevIndex => (prevIndex + 1 ) % projects[Index].section.length)
    }
  const prevSection = () => {
    setSectionIndex(prevIndex => 
    (prevIndex - 1 + projects[Index].section.length ) % projects[Index].section.length);
  }
  
  const project = projects[Index];
  const currentSection = project.section[sectionIndex];

  return (
    <section className="container" id="projects">
      <h3>Projetos</h3>
      <div className="slider-container">
        <div id="project_card">
          <h4>{project.title}</h4>
          {currentSection.type === 'description' && (
            <p>{currentSection.content}</p>
          )}

          {currentSection.type === 'stack' && (
            <ul>
              {currentSection.content.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}

          {currentSection.type === 'url' && (
            <div>
              <a href={currentSection.content}>
                <FaGithubSquare />
              </a>
              <a href="#">
                <RxVercelLogo />
              </a>
            </div>
          )}
           <div className="slider-controls">
            <button onClick={prevSection}><FaArrowLeft /></button>
            <span>{sectionIndex + 1} / {project.section.length}</span>
            <button onClick={nextSection}><FaArrowRight /></button>
          </div>
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