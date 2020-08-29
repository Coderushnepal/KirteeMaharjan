import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import "./NutritionTable.css";

import { withObjConverter } from "../../hoc";

import { Modal, Loader } from "../../commons";
import { fetchRecipieNutritionWidgetByid } from "../../../services/recipieServices";
import { sampleNutrientData } from "../../../constants/sampleNurientsData";

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      nutrients: {},
    };
  }

  fetchNuritionDetails = async () => {
    console.log(
      `* * fetching nutrition data of recipie id ${this.props.recipeId}*** `
    );

    try {
      const data = await fetchRecipieNutritionWidgetByid(this.props.recipeId);
      this.setState({
        nutrients: data,
        isLoading: false,
      });

      // console.log("the returned nutrient object is ", data);
    } catch (error) {
      this.setState({
        // nutrients: sampleNutrientData,
        isLoading: false,
      });

      // console.log(
      //   "something went wrong,",
      //   this.state.nutrients,
      //   sampleNutrientData
      // );
    }
  };

  componentDidMount() {
    console.log("did  mount:", fetchRecipieNutritionWidgetByid);
    this.fetchNuritionDetails();
    // this.setState({
    //   nutrients: sampleNutrientData,
    //   isLoading: false,
    // });
  }

  render() {
    const { show, handleClose } = this.props;
    const { isLoading, nutrients } = this.state;
    const { calories, good } = nutrients;
    let bad = nutrients.bad;
    let Protein = null;

    // console.log(nutrients, this.props, good);

    if (!(Object.keys(nutrients).length === 0)) {
      bad = this.props.Converter(nutrients.bad);
      console.log("** This is converted bad **", nutrients.bad, bad);
      Protein = good.find((item) => item.title === "Protein");
    }

    return (
      <Fragment>
        <Modal show={show} handleClose={handleClose}>
          {isLoading ? (
            <Loader />
          ) : (
            <Fragment>
              {!(Object.keys(nutrients).length === 0) ? (
                <div className="nutrition">
                  <section className="nutrition-chart">
                    <div className="nutrition-chart__header">
                      <h1 className="nutrition-chart__title">
                        Nutrition Facts
                      </h1>
                      <p>Serving Size : 1 </p>
                      <p>Serving Per Container </p>
                    </div>
                    <table className="nutrition-chart__table">
                      <thead>
                        <tr>
                          <th colSpan="3" className="small-info">
                            Amount Per Serving
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th colSpan="2">
                            <b>calories</b>
                            {` ${calories}g`}
                          </th>
                          <td></td>
                        </tr>
                        <tr className="thick-row">
                          <td colSpan="3" className="small-info">
                            <b>% Daily Value covered*</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan="2">
                            <b>Total Fat:</b>
                            {` ${bad.Fat.amount}`}
                          </th>
                          <td>
                            <b> {`${bad.Fat.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>
                        <tr>
                          <td className="blank-cell"></td>
                          <th>Saturated Fat {` ${bad.Saturated.amount}`} </th>
                          <td>
                            <b>{` ${bad.Saturated.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan="2">
                            <b>Cholesterol</b>
                            {` ${bad.Cholesterol.amount}`}
                          </th>
                          <td>
                            <b>{` ${bad.Cholesterol.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan="2">
                            <b>Sodium</b>
                            {` ${bad.Sodium.amount}`}
                          </th>
                          <td>
                            <b>{` ${bad.Sodium.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan="2">
                            <b>Total Carbohydrate</b>
                            {` ${bad.Carbohydrates.amount}`}
                          </th>
                          <td>
                            <b>{` ${bad.Carbohydrates.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>

                        <tr>
                          <td className="blank-cell"></td>
                          <th>Sugars {` ${bad.Sugar.amount}`}</th>
                          <td>
                            {" "}
                            <b>{` ${bad.Sugar.percentOfDailyNeeds}`}</b>
                          </td>
                        </tr>
                        <tr className="thick-end">
                          <th colSpan="2">
                            <b>Protein</b>
                            {!!Protein ? `${Protein.amount}` : null}
                          </th>
                          <td>
                            <b>
                              {!!Protein
                                ? `${Protein.percentOfDailyNeeds}`
                                : null}
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table
                      className="nutrition-chart__table"
                      style={{ borderBottom: "2px solid black" }}
                    >
                      <thead>
                        <tr>
                          <th colSpan="3" className="small-info">
                            More-info
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {good.map((item, index) => (
                          <tr key={index}>
                            <td className="blank-cell"></td>
                            <th>{`${item.title} ${item.amount}`}</th>
                            <td>
                              <b>{`${item.percentOfDailyNeeds}`}</b>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="small-info">
                      * Percent Daily Values are based on a 2,000 calorie diet.
                      Your daily values may be higher or lower depending on your
                      calorie needs:
                    </p>
                  </section>
                </div>
              ) : (
                <h2> OOps Something went wrong </h2>
              )}
            </Fragment>
          )}
        </Modal>
      </Fragment>
    );
  }
}

RecipeModal.propTypes = {
  recipeId: PropTypes.number,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default withObjConverter(RecipeModal);
