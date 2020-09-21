import React, { Fragment } from "react";

import "react-day-picker/lib/style.css";
import { dummyLogs } from "./logDummyData";

import { Loader } from "../../commons";
import MealLog from "./Meal/MealLog";
import DateSelect from "./DateSelect";
import StatusBoard from "./StatusBoard";
import { Header } from "../../commons/index";

class DailyLog extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      selectedDay: new Date(),
      logs: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      },
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

  componentDidMount() {
    // you call api here
    console.log(this.state.isLoading);
    setTimeout(() => {
      this.setState({
        logs: {
          breakfast: dummyLogs.breakfast,
          lunch: dummyLogs.lunch,
          dinner: dummyLogs.dinner,
          snacks: dummyLogs.snacks,
        },
        isLoading: false,
      });
    }, 2000);
    console.log(this.state.isLoading);
  }

  render() {
    const { selectedDay, logs, isLoading } = this.state;
    // console.log(dummyLogs);
    // console.log(logs, isLoading);
    return (
      <Fragment>
        <Header />
        <DateSelect
          handleDayChange={this.handleDayChange}
          selectedDay={selectedDay}
        />
        <main className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <MealLog mealType="Breakfast" mealList={logs.breakfast} />
              <MealLog mealType="Launch" mealList={logs.lunch} />
              <MealLog mealType="Snacks" mealList={logs.dinner} />
              <MealLog mealType="Dinner" mealList={logs.snacks} />
            </>
          )}
        </main>
        <StatusBoard />
      </Fragment>
    );
  }
}

export default DailyLog;
