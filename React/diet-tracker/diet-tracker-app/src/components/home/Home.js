import React, { Component } from "react";

import { tagNames } from "../../constants/tags";

import "./Home.css";

import Header from "../commons/Header";
import Tag from "./tag";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
    };
  }

  fetchFoods = () => {};

  fetchFoodsByTag = (tagName) => {};

  tagClickHandler = (tagName) => {
    console.log(tagName);
  };

  render() {
    console.log();
    return (
      <div>
        <Header />
        <div className="container tags__container">
          <div className="gp_title-head"> Tags : </div>
          Home
          {/* {tagNames.map((tag, index) => (
            <Tag
              key={tag + index}
              tagName={tag}
              tagClickHandler={this.tagClickHandler}
            />
          ))} */}
        </div>
      </div>
    );
  }
}
