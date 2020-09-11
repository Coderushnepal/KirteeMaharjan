import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
// import history from "../../utils/history";

import * as routes from "../../constants/routes";

export default function Login(props) {
  const setToken = () => {
    localStorage.setItem("access_token", "tokenSet");
    props.history.push(routes.HOME);
    console.log(props.history);
  };

  const isLoggedIn = () => {
    return !!localStorage.getItem("access_token");
  };

  return isLoggedIn() ? (
    <Fragment>
      <Redirect to={routes.HOME} />
    </Fragment>
  ) : (
    <div>
      <h2>
        <button onClick={setToken}>Log in</button>
      </h2>
    </div>
  );
}
