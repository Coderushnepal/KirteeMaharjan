import React, { Fragment } from "react";
import PropTypes from "prop-types";

import FoodModal from "./FoodModal";

class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
    };
  }

  handleModalOpen = () => {
    this.setState({
      openModal: true,
    });
    console.log("clicked", this.state);
  };

  handleModalClose = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    const {
      title,
      measurement,
      calories,
      grams,
      protein,
      fat,
      total_carbs,
    } = this.props.item;
    return (
      <Fragment>
        {this.state.openModal ? (
          <FoodModal
            openModal={this.state.openModal}
            handleModalClose={this.handleModalClose}
            food={this.props.item}
          />
        ) : null}

        <div className="search-result-item">
          <div
            className="search-result-item__title"
            onClick={this.handleModalOpen}
          >
            {title}
          </div>
          <div className="search-result-item__measure">
            <span>measurement: {measurement} </span>
            <span>grams: {grams}</span>
          </div>
          <div className="search-result-item__nutrition">
            <span>Calories : {calories}</span>
            <span>Fat : {!fat ? "-" : fat + "g"} </span>
            <span>Protein : {!protein ? "-" : protein + "g"}</span>
            <span>Carbs :{total_carbs + "g"} </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

SearchResult.propTypes = {
  item: PropTypes.object,
};

export default SearchResult;
