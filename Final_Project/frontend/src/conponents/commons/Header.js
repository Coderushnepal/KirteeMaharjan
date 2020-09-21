import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as routes from "../../constants/routes";

function Header() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push(routes.LOGIN);
  };

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
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="menu-btn">
            <span className="menu-btn__burger"></span>
          </div>
          <nav className="nav">
            <ul className="menu-nav">
              <li className="menu-nav__item">
                <Link to={routes.TODAY_LOG}>Today's Log</Link>
              </li>
              <li className="menu-nav__item">
                <Link to={routes.ADD_FOODS}>Foods</Link>
              </li>
              <li className="menu-nav__item">
                <Link to={routes.STATS}>Stats</Link>
              </li>
              <li className="menu-nav__item" id="nav__item-acc">
                <Link to={routes.PROFILE}>Account</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
