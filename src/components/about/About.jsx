import React from 'react'
import './about.css'
import ME from '../../assets/About-me-2.png'
import { FaAward, FaFolderOpen } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image 2' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Months</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hello! My name is Michael Kubesheski, and I am a beginner Full-Stack Developer! I enjoy working on front-end related projects the most.
            Recently, I have found a passion working with the React JavaScript library.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about