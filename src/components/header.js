import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-303x70.png"
import "./header.scss"

//const burger = document.querySelector(".burger")
const onBurgerClick = () => {
  const menu = document.querySelector(".menu")
  menu.classList.toggle("menu-active")
  //console.log(menu)
  const links = document.querySelectorAll(".menu li")
  console.log(links)
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ""
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`
    }
    console.log(link)
  })
}

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/" className="logo">
        {/* <a href="" className="logo"> */}
        <img src={logo} alt="klakson logo" />
        {/* </a> */}
      </Link>

      <ul className="menu">
        <li className="m-item">
          <Link className="link-menu" to="/">
            Главная
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/services">
            Услуги
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/parts">
            Запчасти
          </Link>
        </li>
        <li className="m-item">
          <Link className="link-menu" to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
      <div className="burger" onClick={onBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
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
