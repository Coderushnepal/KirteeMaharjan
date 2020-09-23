import React, { Component } from "react";

import localStorageServices from "../../utils/localStorage";
import * as toast from "../../utils/toast";
import * as routes from "../../constants/routes";
import { login, signup } from "../../Services/userServices";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isStateLogin: true,
      username: "",
      email: "",
      password: "",
    };
  }

  toggleIsStateLogin = () => {
    this.setState({
      isStateLogin: !this.state.isStateLogin,
    });
  };

  handleLogin = async () => {
    const { email, password } = this.state;

    if (!email || !password) {
      toast.error({
        title: "Invalid Credentials",
        message: "Email and prassword must be provided",
      });
      console.log("Email and password cannot be blank");
      return;
    }

    console.log("Logging in ", email, password);
    try {
      const user = await login({ email, password });

      // console.log(user, user.message, user.data.token);
      localStorageServices.setToken(user.data.token);
      toast.success({
        title: "Successfully logged in",
        message: "",
      });
      this.props.history.push(routes.TODAY_LOG);
    } catch (err) {
      // console.log(err.response, err.response.data.message);
      let error = " something went wrong!";
      if (err.response) {
        if (err.response.data.message) error = err.response.data.message;
      }
      toast.error({
        title: "Oops!",
        message: error,
      });
      this.setState({
        password: "",
      });
    }
  };

  handleSignUp = async () => {
    const { username, email, password } = this.state;

    try {
      const user = await signup({ username, email, password });
      console.log(user);
      toast.success({
        title: `Welcome ${user.data.username}`,
        message: "Login to Start using app",
      });
      this.setState({
        isStateLogin: true,
        password: "",
      });
    } catch (err) {
      const error = err.response.data.message
        ? err.response.data.message
        : "Something went Wrong!";
      toast.error({
        title: "Oops!",
        message: error,
      });
      this.setState({
        password: "",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefult();
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { isStateLogin, username, email, password } = this.state;
    return (
      <div className="form-wrapper">
        <div className="form" onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h2> Count Cals</h2>
            <p>Login to start tracking calories</p>
          </div>
          <div className="form-inputs">
            {!isStateLogin && (
              <div className="form-input">
                <input
                  type="username"
                  placeholder=" username"
                  value={username}
                  onChange={this.handleChange}
                  name="username"
                  required
                />
              </div>
            )}
            <div className="form-input">
              <input
                type="email"
                placeholder="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-signup">
              {isStateLogin ? (
                <button onClick={this.handleLogin}>Log in</button>
              ) : (
                <button className="sign-up " onClick={this.handleSignUp}>
                  SignUp
                </button>
              )}
            </div>
          </div>
          <div className="login-signup">
            {isStateLogin ? "Dont have an account yet ? " : "Click to log in "}
            <span
              className="login-signup-toggle"
              onClick={this.toggleIsStateLogin}
            >
              {isStateLogin ? "Sign up " : "Login"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
