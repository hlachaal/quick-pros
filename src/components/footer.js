import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYelp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
/* import { Link } from "gatsby" */

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.socialMedia}>
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
        <div className={footerStyles.copyright}>
          <p>© 2020 Quick Pros™. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
