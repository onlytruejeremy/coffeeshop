import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const setActive = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <div className={`nav__container ${isActive ? "active" : null}`}>
      <div className={`nav__inner ${isActive ? "active" : null}`}>
        <Link className="nav__logo" to="/">
          BreakTimeCoffee
        </Link>
        <div className="bars__container" onClick={setActive}>
          <div className={`bars ${isActive ? "active" : null}`} />
        </div>
        <ul className={`nav__items ${isActive ? "active" : null}`}>
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav__item">
            <Link to="#">Events</Link>
          </li>
          <li className="nav__item">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
