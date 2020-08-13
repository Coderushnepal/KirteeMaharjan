import React, { Component } from "react";
import { Header } from "../common";
class Favourites extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <h3 style={{ textAlign: "center" }}>Inside Fav</h3>
      </div>
    );
  }
}

export default Favourites;
