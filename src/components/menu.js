import React from "react"
import { Link } from "gatsby"

import menuStyles from "./menu.module.scss"

const Menu = props => {
  return (
    <nav className={menuStyles.menu}>
      {/* <ul className={menuStyles.navList}>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/faq"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/book-a-service"
          >
            Book a Service
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul> */}
    </nav>
  )
}

export default Menu
