import React from 'react'
import './header.css'


const Header = () => {
  return (
    <header>

      <div className="container header_container">
        <h1>Guilherme Savan</h1>
        <h5>Desenvolvedor Front-end</h5>
      </div>

      <div className="btn-header">
        <a href="#">Linkedin</a>
        <a href="#">Download</a>
      </div>
    </header>
  )
}

export default Header