import React from "react";
import './header.css'

const Header = () => {
    return (
        <header className="container">
            <div className="header_container">
                <h1>Guilherme Savan</h1>
                <h2>Desenvolvedor Front-end</h2>
            </div>
            <div className="btn_links">
                <a href="https://www.linkedin.com/in/guilherme-savan/">Linkedin</a>
                <a href="#">Download</a>
            </div>
        </header>
    )
}

export default Header