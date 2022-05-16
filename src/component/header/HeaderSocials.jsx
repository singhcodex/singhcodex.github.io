import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {ImXing} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href="http://github.com" target="_blank" rel="noreferrer">
            <BsGithub/>
        </a>
        <a href="http://xing.com" target="_blank" rel="noreferrer">
            <ImXing/>
        </a>
    </div>
  )
}

export default HeaderSocials