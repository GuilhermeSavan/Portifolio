import React from 'react'
import './footer.css'
import {BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">Guilherme</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about"></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Guilherme Savan. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer