import React from "react";
import PropTypes from "prop-types";

class MealItem extends React.Component {
  render() {
    console.log(this.props, "**********");
    const { meal } = this.props;
    return (
      <div className="meal-header meal grid-container g-c-border g-c-padding">
        <div className=" meal-title col-6fr">
          <div className="title">{meal.title}</div>
          <div className="measure">
            <span>
              measurement : <span className="amt">{meal.measurement}</span>
            </span>
            <span>
              grams : <span className="amt">{meal.grams}</span>
            </span>
          </div>
        </div>
        <div className="col-sm size-sm">{meal.calories}</div>
        <div className="col-sm size-sm">{meal.protein}g</div>
        <div className="col-sm size-sm">{meal.fat}g</div>
        <div className="col-sm size-sm">{meal.totalCarbs}g</div>
      </div>
    );
  }
}

MealItem.propTypes = {
  meal: PropTypes.object,
};

export default MealItem;
