import React from 'react'
import './about.css'
import ME from '../../assets/bodyshot.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>4+ Months Learning</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Contact me to become one!</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>26+ Completed Projects</small>
            </article>
          </div>

          <p>
          I am a new bootcamp grad from SMU Full Stack Web Development where we primarily focused on building apps using HTML5, CSS, JS, JQUERY,SQL,and REACT.
          I am currently teaching myself Python while furthering my knowledge on REACT.JS and JS. My previous roles in the workforce were primarily in Mortgage Loan origination
          in that role I was able to handle the pressure of sales where there isnt a month to month income guarantee you have to go out and get it. Which I have spent the last 6 years in that role.
          My decision to switch into the programming world is primarily my love for seeing how apps were created etc. I spent nights teaching myself HTML CSS because I loved the visual aspect of the app until 
          I started at SMU and realized i scratched maybe 1% of the surface to which I decided to take a leap and pay to learn faster and give it 100% its been an awesome journey and I am eager to continue! 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

