import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MealItem from "./MealItem";
import PropTypes from "prop-types";

import * as routes from "../../../../constants/routes";

function MealLog({ mealType, mealList }) {
  const setMealTypeState = () => {
    //pass mealType of food to be added in onto state
    // logic here
    console.log(mealType);
  };

  // console.log(mealList, !!mealList);
  return (
    <section className="box">
      {/* Header */}
      <div className="box-header grid-container">
        <div className="box-header__name col-6fr">{mealType}</div>
        <div className="col-sm">Cals</div>
        <div className="col-sm">Protein</div>
        <div className="col-sm">Fat</div>
        <div className="col-sm">Carbs</div>
      </div>
      {/* Content */}
      <div className="box-content">
        <div className="meal-box">
          {!!mealList.length && (
            <Fragment>
              {mealList.map((meal) => {
                // console.log("meal", meal);
                return <MealItem key={meal.title} meal={meal} />;
              })}
            </Fragment>
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="box-footer grid-container">
        <div className="col-6fr flex-between">
          <span className="box-footer-item__left">
            <Link
              className="add"
              to={routes.ADD_FOODS}
              onClick={setMealTypeState}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              Add to {mealType}
            </Link>
            <span className="edit">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit Food
            </span>
          </span>

          <span className="box-footer-item__right">total:</span>
        </div>
        <div className="col-sm">calTot</div>
        <div className="col-sm">TProt</div>
        <div className="col-sm">TFat</div>
        <div className="col-sm">TCarbs</div>
      </div>
    </section>
  );
}

MealLog.propTypes = {
  mealType: PropTypes.string.isRequired,
  mealList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MealLog;
