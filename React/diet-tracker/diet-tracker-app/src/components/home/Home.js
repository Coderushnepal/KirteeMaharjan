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
      searchFor: "",
    };
  }

  fetchFoods = () => {};

  fetchFoodsByTag = (tagName) => {};

  tagClickHandler = (tagName) => {
    console.log(tagName);
  };

  setSearchText = (searchFor) => {
    this.setState({
      searchFor,
    });
  };

  render() {
    console.log();
    return (
      <div>
        <Header setSearchText={this.setSearchText} />
        <div className="container tags__container">
          <div className="gp_title-head">
            {" "}
            Logging you daily calories made easy{" "}
          </div>
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
