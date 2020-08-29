import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withObjConverter } from "../hoc";
import { TwoDecimal } from "../../utils/numberOperations";
import { logRecipeActions } from "../../actions";

import "./LoggedRecipes.css";

class LoggedRecipe extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       servings: 1,
  //     };
  //   }
  handleRemove = () => {
    const { info, removeRecipie } = this.props;

    removeRecipie(info);
  };

  render() {
    const { info } = this.props;

    const { title, image, nutrition } = info;
    console.log("*diary*", nutrition, info, this.props);
    return (
      <div className="w-100">
        <div
          className="row p-2 justify-content-space-betweem"
          style={{ margin: "0px", borderBottom: "2px solid black" }}
        >
          <div className="col-md-5 row p-0 ">
            <div className="food__title col">{title}</div>
            <div className="food__img col text-center">
              <img src={image} alt={title} style={{ objectFit: "cover" }} />
            </div>
            {/* <div className="food__servings col-sm-2">{this.state.serving}</div> */}
          </div>
          <div className="col-md-6 d-flex justify-content-between nutrition-row">
            {nutrition.map((nutrition) => (
              <div className="nutrition__board d-flex flex-column align-items-center justify-content-center">
                <div className="text-center n-r-1">
                  {nutrition.title === "Carbohydrates"
                    ? "Carbs"
                    : nutrition.title}
                </div>
                <div className="text-center n-r-2">
                  {`${TwoDecimal(nutrition.amount)}`}
                  <small>{nutrition.unit}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="food__edit col-md-1 d-flex flex-column justify-content-around">
            <i
              className="fas fa-trash-alt delete-icon"
              onClick={this.handleRemove}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

const enhanced = withObjConverter(LoggedRecipe);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...logRecipeActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(enhanced);
