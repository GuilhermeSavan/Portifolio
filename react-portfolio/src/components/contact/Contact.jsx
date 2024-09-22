import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section  id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contato</h2>

      <div className='container contact_container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>guilherme.savan@gmail.com</h5>
            <a href="mailto:guilherme.savan@gmail.com" target='_blank'>Me envie uma mensagen</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>(15) 99149-5952</h5>
            <a href="https://api.whatsapp.com/send?phone=15991495952" target='_blank'> Me envie uma mensagen</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact