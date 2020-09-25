import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "react-day-picker/lib/style.css";

import { dateActions } from "../../../actions";
import { Loader } from "../../commons";
import MealLog from "./Meal/MealLog";
import DateSelect from "./DateSelect";
// import StatusBoard from "./StatusBoard";
import { Header } from "../../commons/index";
import { fetchLogs } from "../../../Services/userServices";
class DailyLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedDay: this.props.date,
      logs: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      },
    };
  }

  getTodaysDate = () => {
    let newdate = new Date();
    return newdate.toLocaleDateString();
  };

  handleDayChange = (day) => {
    console.log(day, this.selectedDay);
    this.setState(
      {
        selectedDay: day ? day.toLocaleDateString() : this.getTodaysDate(),
      },
      () => {
        this.fetchAfterChange();
      }
    );
  };

  fetchAfterChange = () => {
    const { selectedDay } = this.state;
    this.fetchAllLogs(selectedDay);
    this.props.SetDate(selectedDay);
    this.setState({
      ...this.state,
      isLoading: false,
    });
  };

  fetchAllLogs = (date) => {
    this.fetchDailyLogs(date, 1);
    this.fetchDailyLogs(date, 2);
    this.fetchDailyLogs(date, 3);
    this.fetchDailyLogs(date, 4);
    this.setState({
      ...this.state,
      isLoading: false,
    });
  };

  fetchDailyLogs = async (date, mealType) => {
    const mealTypes = ["breakfast", "lunch", "dinner", "snacks"];
    const type = mealTypes[mealType - 1];
    try {
      const data = await fetchLogs(date, mealType);
      this.setState({
        ...this.state,
        logs: {
          ...this.state.logs,
          [type]: data.data,
        },
      });
      // console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    // you call api here

    this.fetchAfterChange();
    // const TodaysDate = this.getTodaysDate();
    // this.fetchAllLogs(TodaysDate);
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
          selectedDay={new Date(selectedDay)}
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
        {/* <StatusBoard /> */}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ dateReducer }) => {
  return {
    date: dateReducer.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...dateActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyLog);
