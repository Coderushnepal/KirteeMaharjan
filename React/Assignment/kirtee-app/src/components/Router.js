import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import * as routes from "../constants/routes";
import history from "../utils/history";

import Main from "./main";
import Favourite from "./favourites";
import Login from "./login/Login";

const RouterApp = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PrivateRoute path={routes.FAVOURITES} component={Favourite} />
      <Route path={routes.LOGIN} component={Login} />
      <Route path={routes.HOME} component={Main} />
    </Switch>
  </BrowserRouter>
);

export default RouterApp;
