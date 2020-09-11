import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as routes from "../../constants/routes";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  search = (event) => {
    event.preventDefault();
    this.props.setSearchText(this.state.searchText);
  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__top">
            <ul className="nav">
              <li>
                <Link to={routes.HOME} title="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to={routes.FAVOURITES} title="favourites">
                  Favourites
                </Link>
              </li>
              <li>
                <Link to={routes.LOGIN} title="login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__bottom">
            <h1>The Beer Bank</h1>
            <span>Find your favourite beer</span>
            <form onSubmit={this.search}>
              <input
                type="search"
                placeholder="Search beer name"
                onChange={this.handleTextChange}
                value={this.state.searchText}
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setSearchText: PropTypes.func,
};

export default Header;
