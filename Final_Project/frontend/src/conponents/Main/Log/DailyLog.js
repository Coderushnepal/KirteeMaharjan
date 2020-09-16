import React, { Fragment } from "react";

import StatusBoard from "./StatusBoard";
import MealLog from "./MealLog";
import { Header } from "../../commons/index";

function DailyLog() {
  return (
    <Fragment>
      <Header />
      {/* <Calender/> */}
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

export default DailyLog;
