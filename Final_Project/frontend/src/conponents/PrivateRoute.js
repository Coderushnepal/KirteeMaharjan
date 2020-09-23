import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as routes from "../constants/routes";
import { Login } from "../conponents/commons";

export default function PrivateRoute(props) {
  const isLoggedIn = !!localStorage.getItem("j-t");

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Redirect to={routes.LOGIN} component={Login} />;
  }
}
