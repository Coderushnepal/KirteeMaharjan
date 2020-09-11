import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import Counter from "../../common/Counter";
import BeerModal from "./BeerModal";
// import { dummyBeersData as favourites } from "../../../constants/dummyData";
import { favouriteBeersActions } from "../../../actions";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isFavourite: false,
      showModal: false,
    };
  }

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  toggleFavourites = () => {
    const {
      favouriteBeers,
      AddFavourites,
      RemoveFavourites,
      info,
    } = this.props;
    let beerIndex = favouriteBeers.findIndex((beer) => beer.id === info.id);
    if (beerIndex > -1) {
      RemoveFavourites(info.id);
    } else {
      AddFavourites(info);
    }
  };

  render() {
    const { showModal } = this.state;
    const { id, name, description, image_url } = this.props.info;

    const beerIndex = this.props.favouriteBeers.findIndex(
      (beer) => beer.id === id
    );
    //  //id: this.props.info.id : jun beer ko card ho tei beer ko id

    return (
      <Fragment>
        {/* <Counter /> */}
        {showModal ? (
          <BeerModal
            show={showModal}
            handleClose={this.handleModalClose}
            beerId={id}
          />
        ) : null}
        <div className="card">
          <span className={`favourite ${beerIndex > -1 ? "active" : ""}`}>
            <i
              className={`${beerIndex > -1 ? "fas" : "far"} fa-star`}
              onClick={this.toggleFavourites}
            />
          </span>
          <div
            className="card__imgcontainer"
            style={{ backgroundImage: `url(${image_url})` }}
          />
          <h2 onClick={this.handleModalOpen}>{name}</h2>
          <span className="card__description">{description}</span>
        </div>
      </Fragment>
    );
  }
}

Beer.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

// Beer.defaultProp = {
//     abc = 'abscjdk'
// }

const mapStateToProps = ({ favouriteBeersReducer }) => {
  return {
    favouriteBeers: favouriteBeersReducer.favouriteBeers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // action: bindActionCreators({ ...favouriteBeersActions }, dispatch),
    ...bindActionCreators({ ...favouriteBeersActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
