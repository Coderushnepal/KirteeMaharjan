import React, { Component } from "react";

import { Header } from "../common";
import Beer from "../main/beers/Beer";
import { dummyBeersData } from "../../constants/dummyData";

// import { dummyBeersData as favourites } from "../../constants/dummyData";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: "",
    };
  }

  setSearchText = (searchFor) => {
    this.setState({
      searchFor,
    });
  };

  render() {
    let favourites = dummyBeersData;
    if (!!this.state.searchFor) {
      favourites = favourites.filter((beer) =>
        beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
      );
    }
    return (
      <div className="wrapper">
        <Header setSearchText={this.setSearchText} />
        <main>
          <div className="container">
            {!!favourites.length &&
              favourites.map((beer) => <Beer key={beer.id} info={beer} />)}
          </div>
        </main>
      </div>
    );
  }
}

export default Favourites;
