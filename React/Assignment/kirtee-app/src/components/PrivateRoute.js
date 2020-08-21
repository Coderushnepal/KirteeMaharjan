import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as routes from "../constants/routes";
import Login from "./login/Login";

export default function PrivateRoute(props) {
  const isLoggedIn = !!localStorage.getItem("access_token");
  console.log(localStorage.getItem("access_token"));

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Redirect to={routes.LOGIN} component={Login} />;
  }
}
