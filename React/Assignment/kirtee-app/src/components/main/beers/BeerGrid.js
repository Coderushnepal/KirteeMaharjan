import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Header, Spinner } from "../../common";
import Beer from "./Beer";
import { fetchBeers } from "../../../services/beerService";

import * as toast from "../../../utils/toast";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      pageInfo: { page: 1, size: 25 },
      hasMore: true,
      searchFor: "",
      hasFilter: false,
    };
  }

  scrollParentRef = null;

  setSearchText = (searchText) => {
    this.setState(
      {
        searchFor: searchText,
        hasFilter: true,
      },
      () => {
        this.fetchBeers();
      }
    );
  };

  fetchBeers = async () => {
    try {
      const { beers, searchFor, hasFilter } = this.state;
      let pageInfo = this.state.pageInfo;

      console.log(searchFor);
      if (hasFilter) {
        pageInfo.page = 1;
      }

      const data = await fetchBeers(pageInfo, searchFor);

      this.setState({
        beers: hasFilter ? data : [...beers, ...data],
        pageInfo: {
          ...pageInfo,
          page: data.length ? pageInfo.page + 1 : pageInfo.page,
        },
        hasMore: !!data.length,
        hasFilter: false,
      });
    } catch (error) {
      const errorMsg = error.response.data.message;
      toast.error({
        title: "Error!",
        message: errorMsg,
      });
    }
  };

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { beers, hasMore } = this.state;
    return (
      <div>
        <Header setSearchText={this.setSearchText} />
        <main>
          <div className="container" ref={(r) => (this.scrolParentRef = r)}>
            {/* {!beers.length ? (
              <h3 style={{ textAlign: "center" }}>No beers found</h3>
            ) : ( */}
            <InfiniteScroll
              dataLength={beers.length}
              next={this.fetchBeers}
              hasMore={hasMore}
              loader={hasMore ? <Spinner /> : null}
            >
              {this.state.beers.map((beer) => (
                <Beer key={beer.id} info={beer} />
              ))}
            </InfiniteScroll>
            {/* )} */}
          </div>
        </main>
      </div>
    );
  }
}

export default BeerGrid;
