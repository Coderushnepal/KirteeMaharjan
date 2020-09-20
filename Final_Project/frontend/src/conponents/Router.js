import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DailyLog } from "./Main";
import { AddMeal } from "./AddMeal";
import { Account, Stats } from "./User";
import { Login } from "./commons";
import * as routes from "../constants/routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.PROFILE} component={Account} />
        <Route exact path={routes.ADD_FOODS} component={AddMeal} />
        <Route exact path={routes.TODAY_LOG} component={DailyLog} />
        <Route exact path={routes.STATS} component={Stats} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route path={routes.HOME} component={DailyLog} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
