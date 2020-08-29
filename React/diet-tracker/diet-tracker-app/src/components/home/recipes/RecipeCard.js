import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./RecipeCard.css";

import RecipeModal from "./RecipeModal";
import { logRecipeActions } from "../../../actions";

export class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isLogged: false,
    };
  }

  handleModalOpen = () => {
    this.setState({
      showModal: true,
    });
  };
  handleModalClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleLog = () => {
    // console.log("Addd", this.props);
    this.setState({
      isLogged: true,
    });
    this.props.addRecipie(this.props.info);
  };

  showToast = () => {
    console.log("Already Added To Diary!!!");
  };

  render() {
    const { id, title, image, nutrition } = this.props.info;
    const { showModal, isLogged } = this.state;
    // console.log("*** inside card ,this.props", this.props, id);

    return (
      <Fragment>
        {showModal ? (
          <RecipeModal
            handleClose={this.handleModalClose}
            show={this.state.showModal}
            recipeId={id}
          />
        ) : null}
        <div className="recipe__card row">
          <div className="col-sm-4 img__container">
            <img
              src={image}
              style={{ width: "100%", height: "100%," }}
              alt={` recipie: ${title}`}
            />
          </div>
          <div className="col-sm-8 recipe__info">
            <div className="recipe__title">{title}</div>
            <div className="nutrient__content">
              <div className="nutrition__r1">
                <span className="nutrition__summary">
                  <span>{nutrition[1].title}: </span>
                  <span>{parseFloat(nutrition[1].amount).toFixed(2)}</span>
                  <span> {nutrition[1].unit}: </span>
                </span>
                <span className="nutrition__summary">
                  <span>{nutrition[2].title}</span>
                  <span>{parseFloat(nutrition[2].amount).toFixed(2)}</span>
                  <span> {nutrition[2].unit}</span>
                </span>
                <span className="nutrition__summary">
                  <span>{nutrition[3].title}: </span>
                  <span>{parseFloat(nutrition[3].amount).toFixed(3)}</span>
                  <span> {nutrition[3].unit}</span>
                </span>
              </div>
              <div className="nutrition__r2">
                <span>
                  Total Calorie:{" "}
                  <span style={{ backgroundColor: "yellow" }}>
                    {" "}
                    {`${nutrition[0].amount} ${nutrition[0].unit}`}
                  </span>
                </span>
              </div>
              <div className="more-info">
                <div className="modal-link" onClick={this.handleModalOpen}>
                  {" "}
                  read nutrients <i className="fas fa-arrow-right"></i>
                </div>
                <button
                  className="btn-log"
                  onClick={isLogged ? this.showToast : this.handleLog}
                >
                  {isLogged ? "Added log" : "Log Food"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...logRecipeActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(RecipeCard);
