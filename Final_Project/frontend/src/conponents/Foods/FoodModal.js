import React, { Component } from "react";
import { connect } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import * as toast from "../../utils/toast";
import { addLogs } from "../../Services/userServices";
import withToDecimalConverter from "../Hoc/withToDecimalConverter";

const modal = { minWidth: "200px" };

class FoodModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      mealTypeValue: "1",
      servings: this.props.food.servings || 1,
      measurement: 0,
      unit: "",
      grams: 0,
      cf: {
        cf_m: 0,
        cf_g: 0,
      },
    };
  }

  handleMealTypeSelect = (e) => {
    console.log(e.target.value, typeof e.target.value);
    this.setState({ mealTypeValue: e.target.value });
  };

  // handleChange = (e) => {
  //   let { measurement, grams, c } = this.state;
  //   let m, g;

  //   if (e.target.name === "measurement") {
  //     m = e.target.value;
  //     g = c.cf_m * m;
  //   }

  //   if (e.target.value === "grams") {
  //     g = e.target.value;
  //     m = c.cf_g * g;
  //   }
  //   console.log(m, g);
  //   this.setState({
  //     ...this.state,
  //     measurement: m,
  //     grams: g,
  //   });
  //   console.log(this.state);
  // };

  handleAddLog = async () => {
    const { id, measurement } = this.props.food;
    console.log(this.state, id);
    const { servings, grams, mealTypeValue } = this.state;

    const loggedDate = this.props.date;
    try {
      const data = await addLogs({
        foodId: id,
        servings,
        measurement,
        loggedDate,
        mealType: mealTypeValue,
        grams,
      });
      console.log(data);
      toast.success({ title: "Success", message: "Food added to log" });
    } catch (err) {
      console.log(err);
      const msg = "something went wrong";
      toast.error({
        title: "",
        message: err.response ? err.response.data || msg : msg,
      });
    }
  };

  handlePlus = () => {
    this.setState({
      ...this.state,
      servings: this.state.servings + 1,
    });
  };

  handleMinus = () => {
    if (!!(this.state.servings - 1)) {
      this.setState({
        ...this.state,
        servings: this.state.servings - 1,
      });
    }
  };

  componentDidMount() {
    const { measurement, grams } = this.props.food;
    let measure = this.props.Converter(measurement);
    this.setState({
      ...this.state,
      measurement: measure.qty,
      unit: measure.unit,
      grams,
      cf: {
        cf_m: measure.qty / grams,
        cf_g: grams / measure.qty,
      },
    });
    console.log(this.state);
  }

  render() {
    const { openModal, handleModalClose, food } = this.props;
    const { mealTypeValue, servings, measurement, grams, unit } = this.state;

    return (
      <div>
        <Modal
          open={openModal}
          onClose={handleModalClose}
          center
          styles={modal}
        >
          <div className="modal">
            <header>
              <label>
                <span>Add to: </span>
                <select
                  name="mealTypes"
                  value={mealTypeValue}
                  onChange={this.handleMealTypeSelect}
                >
                  <option value="1">Breakfast</option>
                  <option value="2">Lunch</option>
                  <option value="3">Dinner</option>
                  <option value="4">Snacks</option>
                </select>
              </label>
            </header>
            <div className="modal-main">
              <div className="foodInfo">{food.title}</div>
              <div>
                Servings : {`${servings}`}
                <button
                  style={{ marginLeft: "5px", padding: "10px" }}
                  onClick={this.handlePlus}
                >
                  +
                </button>
                <button
                  style={{ marginLeft: "5px", padding: "10px" }}
                  onClick={this.handleMinus}
                >
                  -
                </button>
              </div>
              {/* <div>
                Measurement :{" "}
                <input
                  type="text"
                  value={measurement}
                  onChange={this.handleChange}
                  name="measurement"
                />
                {unit ? unit : null}
              </div>
              <div>
                Grams :{" "}
                <input
                  type="text"
                  value={grams}
                  onChange={this.handleChange}
                  name="grams"
                />
              </div> */}
            </div>
            <div className="modal-btn__add">
              <button className="btn--orange" onClick={this.handleAddLog}>
                Add Log
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ dateReducer }) => {
  return {
    date: dateReducer.date,
  };
};

export default connect(mapStateToProps)(withToDecimalConverter(FoodModal));
