import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  return (
    <div className="nav_header">
      <nav className="header">
        <Link className="brand" to="/">
          <i className="bx bx-color"></i>Gallery
        </Link>
        <ul className={active}>
          <li className="nav_item">
            <Link className="nav_link" to="/">
              首頁
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/about">
              關於我們
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/forus">
              網站規劃
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
