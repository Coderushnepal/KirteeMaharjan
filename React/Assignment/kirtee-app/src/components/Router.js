import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as routes from "../constants/routes";
import history from "../utils/history";

import Main from "./main";
import Favourite from "./favourites";

const RouterApp = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.FAVOURITES} component={Favourite} />
      <Route path={routes.HOME} component={Main} />
    </Switch>
  </BrowserRouter>
);

export default RouterApp;
