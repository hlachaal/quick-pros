import PropTypes from "prop-types"
import React from "react"
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
          <span>Quick </span>
          <span className={headerStyles.turquoise}>Pros</span>
        </Link>
      </div>
      <div className={headerStyles.nav}>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/#"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/#"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/#"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyles.social}>
        {/* <span>Call (619) 359-7532</span> */}
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
                      to="/#"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.navItem}
                      activeClassName={headerStyles.activeNavItem}
                      to="/#"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.navItem}
                      activeClassName={headerStyles.activeNavItem}
                      to="/#"
                    >
                      FAQ
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
