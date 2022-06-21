import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AlgofanLogo from '../../assets/images/algofan-logo.svg'
import Goal from '../../assets/images/goal-bg.jpg'
import Player from '../../assets/images/player-circle.png'
import Logo from '../../assets/images/algorand-logo.svg'
import Intersport from '../../assets/images/intersport-logo.svg'
import Navy from '../../assets/images/nevy-gold.png'
import crypto from '../../assets/images/crypto.png'
import Telly from '../../assets/images/Telly-Awards.jpeg'
import Emmy from '../../assets/images/emmy.png'
import Weby from '../../assets/images/Webby-Awards-Logo.jpg'
const Header = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div className="global-styles"></div>
      <div className="html w-embed"></div>
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="/" aria-current="page" className="w-inline-block w--current"><img src={AlgofanLogo} loading="lazy" alt="" className="home-logo" /></Link>
          <div className="nav-links-wrapper" style={{height: toggler ? 'auto' : '0px'}}>
            <div className="nav-links">
              <Link to="#" className="nav-link">Marketplace</Link>
              <Link to="/#about-us" className="nav-link">About us</Link>
              <Link to="/#mission" className="nav-link">Mission</Link>
              <Link to="/news" className="nav-link">News</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>
          </div>
          <a data-w-id="7ced627e-3ab6-9674-1eb8-4ba46af274ad" href="#" className="hamburger w-inline-block" onClick={() => setToggler(!toggler)}>
            <div className="hamburger-line-1" style={{transform: `translate3d(0px, ${toggler ? '0.5em' : '0em'}, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${toggler ? '45deg' : '0deg'}) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}} />
            <div className="hamburger-line-2" style={{transform: `translate3d(0px, ${toggler ? '-0.8em' : '0em'}, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${toggler ? '-45deg' : '0deg'}) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}} />
          </a>
        </div>
      </nav>
    </>

  )
}
export default Header
