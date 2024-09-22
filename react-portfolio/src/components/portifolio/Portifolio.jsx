import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/wheater-app.jpg'

/*import  IM1 from */


const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Weather-app-in-react',
      github: 'https://github.com/GuilhermeSavan/Weather-app-in-react',
      
    }
]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Meus projetos</h5>
      <h2>Portifolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image, title, github, demo}) => {
            return (
        <article key={id} className="portfolio__item">
          <div className="portfolio__iten-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <a href={github} className="btn">Github</a>
          <a href={demo} className="btn btn-primary">Live Demo</a>
          </article>
            )
          })
        }
      </div>      
    </section>
  )

}

export default Portifolio