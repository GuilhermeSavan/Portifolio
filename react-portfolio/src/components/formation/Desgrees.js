import React from "react";
import './degrees.css'
 

const degrees = [{title: "Engenharia de Computação",
   start_date:"02/2020", end_date:"12/2024", status:"concluído"}]

const Degree = () => {
  return (
    <section className="container" id="formation">
      <h3>Formação</h3>
      {degrees.map((degrees, index) => (
      <div key={index} className="degree_container">
        <h4>{degrees.title}</h4>
        <div className="div_date">
          <p>{degrees.start_date}</p>
          <p>{degrees.end_date}</p>
        </div>
        <div className="status">
          <p>status:{degrees.status}</p>
        </div>
      </div>
      ))}
    </section>
  )
}

export default Degree