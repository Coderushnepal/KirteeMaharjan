import React, { Fragment, Component } from "react";

import { Header, SearchBar } from "../commons";

class AddMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  setSearchText = (searchText) => {
    this.setState({
      searchText,
    });
  };

  render() {
    const { searchText } = this.state;
    console.log(searchText);
    return (
      <Fragment>
        <Header />
        <div className="container">
          <SearchBar setSearchText={this.setSearchText} />
        </div>
      </Fragment>
    );
  }
}

export default AddMeal;
