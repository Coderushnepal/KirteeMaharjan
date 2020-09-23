import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: "",
    };
  }

  handleSubmit = (e) => {
    const { setSearchText } = this.props;
    e.preventDefault();
    if (!!this.state.searchFor) {
      setSearchText(this.state.searchFor);
    }
  };

  handleChange = (e) => {
    this.setState({
      searchFor: e.target.value,
    });
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="search food here"
          onChange={this.handleChange}
          value={this.state.searchFor}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func,
};
export default SearchBar;
