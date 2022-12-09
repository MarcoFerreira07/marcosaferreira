import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/marco-ferreira-a3662616a/' targets='_blank'><BsLinkedin/></a>
        <a href='https://github.com/MarcoFerreira07' targets='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials