import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sai-karthik-625102253/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Sodinapalli-Karthik" target="_blank"><BsGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=9573240137" target="_blank"><FaWhatsapp/></a>

    </div>
  )
}

export default HeaderSocials