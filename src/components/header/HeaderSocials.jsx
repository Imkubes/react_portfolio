import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mike-kubesheski-466b15230/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Imkubes' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials