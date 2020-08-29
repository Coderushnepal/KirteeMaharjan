import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as routes from "../constants/routes";
import history from "../utils/history";

import Home from "./home";
import Recipes from "./home/recipes";
import Login from "./commons/login";
import Diary from "./diary";

export default function Router() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={routes.RECIPIES} component={Recipes} />
        <Route exact path={routes.DIARY} component={Diary} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route path={routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
