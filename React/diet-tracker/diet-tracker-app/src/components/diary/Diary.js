import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header } from "../commons";

import "./Diary.css";

import LoggedRecipe from "./LoggedRecipe";
export class Diary extends Component {
  render() {
    const { TotalCalorieIntake, loggedRecipes } = this.props;
    // console.log(loggedRecipes);
    return (
      <Fragment>
        <Header />
        <div className="container diary__container">
          <section className="diary__status d-flex justify-content-between align-items-center">
            <div className="diary__heading">Your Diary</div>
            <div className="calorie-board">
              <span className="calorie-amt">
                {" "}
                {parseFloat(TotalCalorieIntake).toFixed(2)}
              </span>
              <span className="calorie-label">Calories</span>
            </div>
          </section>
          <section className="log-List">
            {loggedRecipes.map((item) => (
              <LoggedRecipe info={item} />
            ))}
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ logRecipesReducer }) => {
  return {
    loggedRecipes: logRecipesReducer.loggedRecipes,
    TotalCalorieIntake: logRecipesReducer.recipeCalorieCount,
  };
};

export default connect(mapStateToProps)(Diary);
