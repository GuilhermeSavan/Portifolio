import React from "react";
import './experience.css'


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
     infraestrutura tecnológica.`
      
  ], 
    start_date:"02/2021", final_date:"02/2023"}

]


const Experience = () => {
  return (
    <section>
      <h3>Experiencias</h3>
        {experiences.map((experiences, index) => (
      <div key={index} className="experience_container">
        <h4>{experiences.title}</h4>
          <div className="div_date">
            <p>{experiences.start_date}</p>
            <p>{experiences.final_date}</p>
          </div>
          <div className="descript_exp">
            {experiences.description.map((desc, i) =>(
              <p key={i}>{desc}</p>
            ))}
          </div>

      </div>
        ))}
    </section>
  );
};

export default Experience