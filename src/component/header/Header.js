import React, { useState } from 'react'
import classes from "./header.module.scss"
import { NavLink } from 'react-router-dom'
import { logo } from '../../assets'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
const Header = () => {
    const [scrollPage , setScrollPage] = useState(false)
    const [showMenu, setShowMenu] = useState(false)


    const fixNavbar = () => {
        if (window.scrollY > 50) {
          setScrollPage(true);
        } else {
          setScrollPage(false);
        }
      };
      window.addEventListener("scroll", fixNavbar);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    const hideMenu = ()=>{
        setShowMenu(false)
    }

  const activeLink = ({ isActive }) => (isActive ? `${classes.active}` : "");

  return (
    <>
        <header className={scrollPage ? `${classes.fixed}` : null}>
            <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt=''/>
                <h3>SPIDER</h3>
            </div>
            <nav className={showMenu ? `${classes["show-nav"]}` : `${classes["hide-nav"]}`}>
            <div
              className={
                showMenu
                  ? `${classes["nav-wrapper"]} ${classes["show-nav-wrapper"]}`
                  : `${classes["nav-wrapper"]}`
              }
              onClick={hideMenu}

            ></div>
            <div className={classes.links}>
                <ul onClick={hideMenu}>
                    <li className={classes["logo-mobile"]}>
                        <div className={classes.logo}>
                            <img src={logo} alt=''/>
                            <h3>SPIDER</h3>
                        </div>
                        <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                    </li>
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/contact" className={activeLink}>Contact Us</NavLink></li>
                </ul>
            </div>
            </nav>
            <div className={classes["menu-icon"]}>
            <HiOutlineMenuAlt3 size={28} color='#f1f1f1' onClick={toggleMenu} />
          </div>
          </div>
        </header>
    </>
  )
}

export default Header