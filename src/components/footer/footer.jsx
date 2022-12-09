import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/marco-ferreira-a3662616a//" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MarcoFerreira07" target='_blank'><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>Carefully made by Marco Sa Ferreira</small>
      </div>
    </footer>
  )
}

export default footer