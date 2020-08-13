import React, { Component, Fragment } from "react";

import { Header, Spinner } from "../../common";
import Beer from "./Beer";
import { fetchBeers } from "../../../services/beerService";

import * as toast from "../../../utils/toast";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      beers: [],
    };
  }

  scrollParentRef = null;

  fetchBeers = async () => {
    try {
      const data = await fetchBeers();
      this.setState({
        beers: data,
        isLoading: false,
      });
    } catch (error) {
      const errorMsg = error.response.data.message;
      toast.error({
        title: "Error!",
        message: errorMsg,
      });
      this.setState({
        isLoading: false,
      });
    }
  };
  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { isLoading, beers } = this.state;
    return (
      <div>
        <Header />

        {isLoading ? (
          <Spinner />
        ) : (
          <main>
            <div className="container" ref={(r) => (this.scrolParentRef = r)}>
              {!beers.length ? (
                <h3 style={{ textAlign: "center" }}>No beers found</h3>
              ) : (
                <Fragment>
                  {this.state.beers.map((beer) => (
                    <Beer key={beer.id} info={beer} />
                  ))}
                </Fragment>
              )}
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default BeerGrid;
