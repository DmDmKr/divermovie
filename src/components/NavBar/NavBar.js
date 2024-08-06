import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-links">
        <li>
          <Link to="/authors">Авторы</Link>
        </li>
        <li>
          <Link to="/about">О фильмах</Link>
        </li>
        <li>
          <Link to="/reviews">Критика</Link>
        </li>
        <li>
          <Link to="/image-gallery">Фото</Link>
        </li>
        <li>
          <Link to="/videos">Видео</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
