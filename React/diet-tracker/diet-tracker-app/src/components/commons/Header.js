import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import * as routes from "../../constants/routes";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setSearchText(this.state.searchedText);
  };

  handleTextChange = (event) => {
    this.setState({
      searchedText: event.target.value,
    });
  };

  render() {
    // console.log(this.props);
    return (
      <header>
        <div className="header__top container">
          <div className="logo">Diet Tracker</div>
        </div>
        <div>
          <div className="header__bottom-wrapper">
            <div className="header__bottom container">
              <div className="header__bottom_flex">
                <Link to={routes.HOME}>
                  <img
                    className="nav__icon"
                    src={require("../../assets/icons/home.svg")}
                    alt="home"
                  />
                </Link>

                <div className="header__search">
                  <form className="sm-form" onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search food here"
                      value={this.state.searchedText}
                      onChange={this.handleTextChange}
                    />
                  </form>
                </div>

                <nav>
                  <ul className="nav jus">
                    <li className="nav-item">
                      <Link to={routes.RECIPIES}>
                        <img
                          className="nav__icon"
                          src={require("../../assets/icons/cooking.svg")}
                          alt="home"
                        />
                        <span className="">Recipie</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.DIARY}>
                        <img
                          className="nav__icon"
                          src={require("../../assets/icons/diary.svg")}
                          alt="home"
                        />
                        <span className="">Diary</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.LOGIN}>
                        <img
                          className="nav__icon"
                          src={require("../../assets/icons/user.svg")}
                          alt="home"
                        />
                        <span className="">Login</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
