import React from "react";
import { Route, Switch } from "react-router-dom";

import { Foods } from "./Foods";
import Home from "./Main/Home";
import { DailyLog } from "./Main";
import { Account, Stats } from "./User";
import * as routes from "../constants/routes";

function userRoutes() {
  return (
    <Switch>
      <Route exact path={routes.PROFILE} component={Account} />
      <Route exact path={routes.ADD_FOODS} component={Foods} />
      <Route exact path={routes.TODAY_LOG} component={DailyLog} />
      <Route exact path={routes.STATS} component={Stats} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  );
}

export default userRoutes;
