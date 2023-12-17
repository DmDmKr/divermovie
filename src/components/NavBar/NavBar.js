import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/about">О фильме</Link>
        </li>
        <li>
          <Link to="/authors">Авторы</Link>
        </li>
        <li>
          <Link to="/reviews">Критика</Link>
        </li>
        <li>
          <Link to="/image-gallery">Фото</Link>
        </li>
        <li>
          <Link to="/movie">Видео</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
