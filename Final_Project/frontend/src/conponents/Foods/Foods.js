import React, { Fragment, Component } from "react";

import * as toast from "../../utils/toast";
import SearchResult from "./SearchResult";
import { Header, SearchBar } from "../commons";
import { searchFood } from "../../Services/foodServices";

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResult: null,
      pageParams: {
        offset: 0,
        limit: 15,
      },
    };
  }

  setSearchText = (searchText) => {
    this.setState(
      {
        ...this.state,
        searchText,
      },
      this.fetchSearchedFood
    );
  };

  fetchSearchedFood = async () => {
    const { searchText, pageParams } = this.state;

    try {
      const { data } = await searchFood(pageParams, searchText);
      this.setState({
        ...this.state,
        searchResult: data.data,
      });
    } catch (err) {
      toast.error({
        title: "Oops!!",
        message: "something went wrong",
      });
    }
  };

  render() {
    const { searchResult } = this.state;
    // console.log( searchResult);
    return (
      <Fragment>
        <Header />
        <div className="container">
          <SearchBar setSearchText={this.setSearchText} />
        </div>
        {!!searchResult && (
          <div className="container search-result">
            {searchResult.map((item) => (
              <SearchResult key={item.id + item.title} item={item} />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Foods;
