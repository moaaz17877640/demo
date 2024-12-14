import React from 'react'
import classes from "./footer.module.scss"
import { logo } from '../../assets'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className={classes.footer}>
        <footer>
        <div className={classes.logo}>
                <img src={logo} alt=''/>
                <h3><span>©</span> SPIDER</h3>
            </div>
            <div className={classes.icons}>
            <a href="https://www.youtube.com/@SPIDERS5667" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={21} color='#fff'/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552356623053&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={21} color='#fff'/>
            </a>
            <a href="https://www.linkedin.com/company/spiders-for-cyber-security/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={21} color='#fff'/>
            </a>
            <a href="https://wa.me/201061440936" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={21} color='#fff'/>
            </a>
          </div>
          
        </footer>
    </div>
  )
}

export default Footer