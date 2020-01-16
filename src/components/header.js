import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYelp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className={headerStyles.logo}>
        <Link to="/">
          <img alt="Home services" src={logo} />
        </Link>
      </div>
      <div className={headerStyles.nav}>
        <nav>
          <input type="checkbox" id="toggle" />
          <ul className={headerStyles.navList}>
            {/* <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/pricing"
              >
                Pricing
              </Link>
            </li> */}
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/book-a-service"
              >
                Book a Service
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </nav>
      </div>
      <div className={headerStyles.hamburger}>
        <label htmlFor="toggle">&#9776;</label>
      </div>
      <div className={headerStyles.social}>
        <ul>
          <li>
            <a href="https://yelp.com">
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </li>
          <li>
            <a href="htts://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
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
