import React from 'react'
import './portfolio.css'
import DIET from '../../assets/dietlyUsage.jpg'
import NGG from '../../assets/notgeoguessr.png'
import STOCK from '../../assets/stock.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={DIET} alt="Dietly" />
        </div>
        <h3>Dietly </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/MarcoFerreira07/FitnessApp" className='btn' target='_blank'>Github</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={STOCK} alt="Stock" />
        </div>
        <h3>Stock Tracker </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/MarcoFerreira07/projectTwo" className='btn' target='_blank'>Github</a>
          <a href="https://polar-coast-60965.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={NGG} alt="Not Geo Guesser" />
        </div>
        <h3>Not Geo Guesser </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/MarcoFerreira07/definitely-not-geoguessr" className='btn' target='_blank'>Github</a>
          <a href="https://notgeoguessr.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      </div>
    </section>
  )
}

export default Portfolio