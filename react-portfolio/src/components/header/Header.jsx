import React from 'react'
import './header.css'


const Header = () => {
  return (
    <header>

      <div className="container header_container">
        <h1>Guilherme Savan</h1>
        <h3>Desenvolvedor Front-end</h3>
      </div>

      <div className="btn-header">
        <a href="https://www.linkedin.com/in/guilherme-savan/">Linkedin</a>
        <a href="#">Download cv</a>
      </div>
    </header>
  )
}

export default Header