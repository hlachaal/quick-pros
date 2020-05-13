import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYelp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import Popup from "reactjs-popup" /* 
import logo from "../images/logo.svg" */

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header>
      <div className={headerStyles.logo}>
        <Link to="/" className={headerStyles.logoWrapper}>
          {/* <img alt="Home services" src={logo} /> */}
          <span>Automatic </span>
          <span>Appliance </span>
          <span className={headerStyles.turquoise}>Tech</span>
        </Link>
      </div>
      <div className={headerStyles.nav}>
        <nav>
          <ul className={headerStyles.navList}>
            {/* <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/book-a-service"
              >
                Book a Service
              </Link>
            </li> */}
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyles.social}>
        <ul>
          <li>
            <a href="https://yelp.com">
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="htts://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div className={headerStyles.hamburger}>
        <Popup trigger={<button className="button">&#9776;</button>} modal>
          {close => (
            <div className={headerStyles.modal}>
              <div className={headerStyles.content}>
                <ul>
                  <li>
                    <Link
                      className={headerStyles.navItem}
                      activeClassName={headerStyles.activeNavItem}
                      to="/book-a-service"
                    >
                      Book a Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.navItem}
                      activeClassName={headerStyles.activeNavItem}
                      to="/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.navItem}
                      activeClassName={headerStyles.activeNavItem}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
