import React from "react";
import PropTypes from "prop-types";
import { withNutritionConvertor } from "../../../Hoc";

class MealItem extends React.Component {
  stripNull = (value) => {
    if (!value) return "-";
    else return value + "g";
  };

  render() {
    // console.log(this.props, "**********");
    const { meal, Converter } = this.props;
    const { originalFoodDatas } = meal;
    const ogFoodDatas = originalFoodDatas[0];
    // console.log(originalFoodDatas[0]);
    let convertedNutrients = Converter(
      ogFoodDatas.grams,
      meal.grams,
      ogFoodDatas.nutritionInfo
    );
    // console.log(convertedNutrients);
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
        <div className="col-sm size-sm">{convertedNutrients.calories}</div>
        <div className="col-sm size-sm">
          {this.stripNull(convertedNutrients.protein)}
        </div>
        <div className="col-sm size-sm">
          {this.stripNull(convertedNutrients.fat)}
        </div>
        <div className="col-sm size-sm">
          {this.stripNull(convertedNutrients.carbs)}
        </div>
      </div>
    );
  }
}

MealItem.propTypes = {
  meal: PropTypes.object,
  mealType: PropTypes.string,
};

export default withNutritionConvertor(MealItem);
