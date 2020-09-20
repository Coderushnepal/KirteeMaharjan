import React from "react";
import { Link } from "react-router-dom";

import * as routers from "../../constants/routes";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <span className="logo-text">Count Cals</span>
            </Link>
          </div>
          <div className="login">
            <button>Login</button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="menu-btn">
            <span className="menu-btn__burger"></span>
          </div>
          <nav className="nav">
            <ul className="menu-nav">
              <li className="menu-nav__item">
                <Link to={routers.TODAY_LOG}>Today's Log</Link>
              </li>
              <li className="menu-nav__item">
                <Link to={routers.ADD_FOODS}>Foods</Link>
              </li>
              <li className="menu-nav__item">
                <Link to={routers.STATS}>Stats</Link>
              </li>
              <li className="menu-nav__item" id="nav__item-acc">
                <Link to={routers.PROFILE}>Account</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
