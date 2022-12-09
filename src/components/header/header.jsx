import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <section className="container header_container">
        <h5>Hey I'm</h5>
        <h1>Marco Sa Ferreira
        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header