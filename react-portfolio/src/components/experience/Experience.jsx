import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Minha stack</h5>
      <h2>Minha experincia</h2>

      <div className="container experine_container">
        <div className="experience__frontend">
          <h3>Front-end</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>       
                <h4>CSS</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-end</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience