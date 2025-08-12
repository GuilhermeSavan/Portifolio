import React, { useState } from 'react';
import './experience.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const experiences = [
  {title: "Estagio de suporte N1", description: [
    `Suporte técnico de nível 1 (N1), incluindo diagnóstico 
    e solução de problemas de hardware, software e periféricos.`,
    
    `Manutenção preventiva e corretiva de computadores e 
    dispositivos, com foco em garantir o funcionamento contínuo
     da infraestrutura de TI.`,

    `Instalação e configuração de sistemas operacionais, 
     softwares e dispositivos de rede, seguindo os padrões
      de segurança e eficiência.`,

     `Auxílio no levantamento de requisitos técnicos e 
      na conferência de lotes de equipamentos, assegurando
       a conformidade com as especificações técnicas.`,

     `Organização e atualização do inventário de equipamentos, 
     além de suporte na implementação de melhorias na 
     infraestrutura tecnológica.`,
     
      
  ], 
    start_date:"02/2021", final_date:"02/2023"}
  ,
   {title: "Estagio de suporte N12", description: [
    `Suporte técnico de nível 1 (N1), incluindo diagnóstico 
    e solução de problemas de hardware, software e periféricos.`,
    
    `Manutenção preventiva e corretiva de computadores e 
    dispositivos, com foco em garantir o funcionamento contínuo
     da infraestrutura de TI.`,

    `Instalação e configuração de sistemas operacionais, 
     softwares e dispositivos de rede, seguindo os padrões
      de segurança e eficiência.`,

     `Auxílio no levantamento de requisitos técnicos e 
      na conferência de lotes de equipamentos, assegurando
       a conformidade com as especificações técnicas.`,

     `Organização e atualização do inventário de equipamentos, 
     além de suporte na implementação de melhorias na 
     infraestrutura tecnológica.`,
     
      
  ], 
    start_date:"02/2021", final_date:"02/2023"}
]

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [descIndex, setDescIndex] = useState(0); 

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setDescIndex(0);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    setDescIndex(0); 
  };

  const nextDescription = () => {
    setDescIndex((prevIndex) => (prevIndex + 1) % experiences[currentIndex].description.length);
  };

  const prevDescription = () => {
    setDescIndex((prevIndex) => (prevIndex - 1 + experiences[currentIndex].description.length) % experiences[currentIndex].description.length);
  };

  const experience = experiences[currentIndex];

  return (
    <section className="container" id="experience">
      <h3>Experiências</h3>
      <div className="slider-container">
        <div className="experience-card">
          <h4>{experience.title}</h4>
          <div className="div_date">
            <p>{experience.start_date} - {experience.final_date}</p>
          </div>
          <div className="description-slider">
            <div className="slide-text">
              <p>{experience.description[descIndex]}</p>
            </div>
            <div className="slider-controls">
              <button onClick={prevDescription} aria-label="Descrição anterior">
                <FaArrowLeft />
              </button>
              <button onClick={nextDescription} aria-label="Próxima descrição">
                <FaArrowRight />
              </button>
            </div>
            <div className="slider-indicators">
              {experience.description.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === descIndex ? 'active' : ''}`}
                  onClick={() => setDescIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="experience-controls">
          <button onClick={prevExperience} aria-label="Experiência anterior">
            <FaArrowLeft />
          </button>
          <p>{currentIndex + 1} / {experiences.length}</p>
          <button onClick={nextExperience} aria-label="Próxima experiência">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;