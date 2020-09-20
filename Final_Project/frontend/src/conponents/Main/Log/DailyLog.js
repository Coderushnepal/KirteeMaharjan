import React, { Fragment } from "react";

import "react-day-picker/lib/style.css";

import DateSelect from "./DateSelect";
import MealLog from "./MealLog";
import StatusBoard from "./StatusBoard";
import { Header } from "../../commons/index";

class DailyLog extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDay: new Date(),
    };
  }

  getTodaysDate = () => {
    let date = new Date();
    return date.toLocaleDateString();
  };

  handleDayChange = (day) => {
    this.setState({
      selectedDay: day,
    });
  };

  render() {
    const { selectedDay } = this.state;

    return (
      <Fragment>
        <Header />
        <DateSelect
          handleDayChange={this.handleDayChange}
          selectedDay={selectedDay}
        />

        <main className="container">
          <MealLog mealType="Breakfast" />
          <MealLog mealType="Launch" />
          <MealLog mealType="Snacks" />
          <MealLog mealType="Dinner" />
        </main>
        <StatusBoard />
      </Fragment>
    );
  }
}

export default DailyLog;
