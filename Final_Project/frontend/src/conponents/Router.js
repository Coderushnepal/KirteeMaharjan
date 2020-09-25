import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login } from "./commons";
import userRoutes from "./userRoutes";
import history from "../utils/history";
import PrivateRoute from "./PrivateRoute";
import * as routes from "../constants/routes";

const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.HOME} component={userRoutes} />
        <PrivateRoute path={routes.HOME} component={userRoutes} />
        {/* <Route path={"*"} component={FourOhFour} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
