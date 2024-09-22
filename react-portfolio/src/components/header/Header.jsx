import React from 'react'
import './header.css'


const Header = () => {
  return (
    <header>

      <div className="container header_container">
        <h5>Olá</h5>
        <h1>Guilherme Savan</h1>
        <h5>Desenvolvedor Front-end</h5>
      </div>

     
      <div>
        <a href="#">Linkedin</a>
        <a href="#">Download</a>
      </div>
    </header>
  )
}

export default Header