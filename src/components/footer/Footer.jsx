import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>ImKubes</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100009054966576' target='_blank'><BsFacebook /></a>
        <a href='https://www.instagram.com/imkubes1/' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/mike_kubes' target='_blank'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; ImKubes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer