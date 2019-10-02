import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-303x70.png"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <a href="" className="logo">
        <img src={logo} alt="klakson logo" />
      </a>
      <ul className="menu">
        <li className="m-item">
          <Link className="link-menu" to="/">
            Главная
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/">
            Услуги
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/">
            Цены
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
