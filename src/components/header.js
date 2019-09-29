import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-139x36.png"
import "./header.scss"

const Header = ({ siteTitle }) => (
  // <header>
  <div className="navbar is-dark is-spaced is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <img src={logo} alt="klakson logo" />
        </a>
      </div>
      <div className="navbar-menu"></div>
    </div>
  </div>
  //</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
