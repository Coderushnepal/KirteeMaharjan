import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DayPicker from "react-day-picker";

import { dateActions } from "../../../actions";
class DateSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      showCalender: false,
    };
  }

  toggleCalenderOpen = () => {
    this.setState({
      showCalender: !this.state.showCalender,
    });
  };

  handleDayClick = (day) => {
    this.props.handleDayChange(day);
  };

  handleChangeToYesterday = () => {
    let newDay = this.props.selectedDay;
    newDay.setDate(newDay.getDate() - 1);
    this.props.handleDayChange(newDay);
  };

  handleChangeToTomorrow = () => {
    let newDay = this.props.selectedDay;
    newDay.setDate(newDay.getDate() + 1);
    this.props.handleDayChange(newDay);
  };

  handleClickToday = () => {
    console.log("hoo");
    this.props.ResetDate();
    this.props.handleDayChange();
  };

  // not working
  // trying to close calander when clicked outside of it

  handleClick(e) {
    if (document.querySelector(".DayPicker")) {
      if (!document.querySelector(".DayPicker").contains(e.target)) {
        document.body.removeEventListener(
          "click",
          this.handleClick.bind(this),
          true
        );
        console.log("inside");
        this.setState({ showCalender: false });
      }
    }
  }

  conponentDidMount() {
    if (this.state.showCalender) {
      document.body.addEventListener(
        "click",
        this.handleClick.bind(this),
        true
      );
    }
  }

  render() {
    const { showCalender } = this.state;
    // console.log(this.props.displayDateSelect);
    return (
      <div className="day container">
        <div>
          <i
            className="fa fa-angle-left"
            aria-hidden="true"
            onClick={this.handleChangeToYesterday}
          ></i>{" "}
        </div>
        <div className="day--display">
          {this.props.selectedDay.toLocaleDateString()}
        </div>

        <div>
          <i
            className="fa fa-angle-right"
            aria-hidden="true"
            onClick={this.handleChangeToTomorrow}
          ></i>{" "}
        </div>
        <div style={{ position: "relative" }}>
          <i
            className="fa fa-calendar"
            aria-hidden="true"
            onClick={this.toggleCalenderOpen}
          ></i>
          <div
            className="calender"
            style={{ display: `${showCalender ? "block" : "none"}` }}
          >
            <DayPicker
              onDayClick={this.handleDayClick}
              selectedDays={this.props.selectedDay}
            />
          </div>
        </div>
        <div>
          <button className="today" onClick={this.handleClickToday}>
            Today
          </button>
        </div>
      </div>
    );
  }
}

DateSelect.propTypes = {
  handleDayChange: PropTypes.func.isRequired,
  selectedDay: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...dateActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(DateSelect);
