import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Just Another Text Editor (JATE)',
    github: 'https://github.com/Imkubes/JATE',
    demo: 'https://intense-ocean-64070.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Book Finder',
    github: 'https://github.com/powe0186/project1',
    demo: 'https://powe0186.github.io/project1/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tech Blog',
    github: 'https://github.com/Imkubes/techblog',
    demo: 'https://serene-plains-16316.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio