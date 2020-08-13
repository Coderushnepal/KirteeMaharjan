import React, { Component } from "react";
import PropTypes from "prop-types";

// import http from "../../../utils/http";

import * as toast from "../../../utils/toast";
import { Modal, Spinner } from "../../common";
import { fetchBeerById } from "../../../services/beerService";

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      beer: {},
    };
  }

  fetchBeer = async () => {
    // http
    //   .get("/beers/1")
    //   .then(function (response) {
    //     this.setState({
    //       beer: response.data,
    //       isLoading: false,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log("###", error);
    //     const errorMsg = error.response.data.message || "Unsuccessful";
    //     toast.error({
    //       title: "Oh no!",
    //       message: errorMsg,
    //     });
    //   });
    // .finally(() => {
    //   this.setState({ isLoading: true });
    // });
    try {
      const data = await fetchBeerById(this.props.beerId);
      this.setState({
        beer: data,
        isLoading: false,
      });
      // toast.success({
      //   title: "YAY!!",
      //   message: "Beers fetch successfull!",
      // });
    } catch (error) {
      const errorMsg = error.response.data.message || "Error occured!!";
      toast.error({
        title: "Oh no!",
        message: errorMsg,
      });
    }
  };

  componentDidMount() {
    this.fetchBeer();
  }

  render() {
    const { isLoading, beer } = this.state;
    const { handleClose, show } = this.props;
    const { description, name, tagline, ibu, abv, ebc, food_pairing } = beer;
    // console.log(handleClose);

    return (
      <Modal show={show} handleClose={handleClose}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="DescriptionModal clearfix">
            <div>
              <div className="DescriptionModal__left">
                <div
                  className="DescriptionModal__left__imgcontainer"
                  style={{ backgroundImage: `url(${beer.image_url})` }}
                />
              </div>
              <div className="DescriptionModal__right">
                <div>
                  <h2>{name}</h2>
                  <span className="DescriptionModal__right__title">
                    {tagline}
                  </span>
                  <ul>
                    <li>
                      <span className="bold">IBU: {ibu}</span>
                    </li>
                    <li>
                      <span className="bold">IBU: {abv}</span>
                    </li>
                    <li>
                      <span className="bold">IBU: {ebc}</span>
                    </li>
                  </ul>
                  <p>{description}</p>
                  {!!food_pairing.length && (
                    <div className="DescriptionModal__right__list">
                      <span>Best served with: </span>
                      <ul>
                        {food_pairing.map((food, index) => (
                          <li key={food}> {food} </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

BeerModal.propTypes = {
  beerId: PropTypes.number,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default BeerModal;
