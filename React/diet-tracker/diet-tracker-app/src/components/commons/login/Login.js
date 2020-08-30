import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";

import * as routes from "../../../constants/routes";
import history from "../../../utils/history";

export function Login() {
  const isLoggedIn = () => {
    console.log("log xa ki xaina?!!", localStorage.getItem("token"));
    return !!localStorage.getItem("token");
    // return false;
  };

  const LogIn = () => {
    localStorage.setItem("token", "12zx34xc56vb");
    history.push(routes.HOME);
  };

  return isLoggedIn() ? (
    <Redirect to={routes.HOME} />
  ) : (
    <div className="login__pg d-flex flex-column justify-content-center align-items-center ">
      <form className="form__login">
        <div className="form-group">
          <label for="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-default btn__login"
          onClick={LogIn}
        >
          Login
        </button>
        <div className="create__acc mt-2 text-center"> Create an account </div>
      </form>
    </div>
  );
}

export default Login;
