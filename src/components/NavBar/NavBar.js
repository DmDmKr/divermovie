import React from "react";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="/">О фильме</a>
        </li>
        <li>
          <a href="/authors">Авторы</a>
        </li>
        <li>
          <a href="/reviews">Критика</a>
        </li>
        <li>
          <a href="/photos">Фото</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
