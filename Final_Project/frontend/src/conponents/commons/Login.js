import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as routes from "../../constants/routes";
import { login, signup } from "../../Services/userServices";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    console.log("Logging in ");
    try {
      const data = await login({ email, password });
      console.log({ data });
      console.log(data.message);
      // localStorage.setItem("j-t", data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    try {
      const data = await signup({ username, email, password });
      console.log(data);
      history.push(routes.TODAY_LOG);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    console.log("Prevent!!");
    e.preventDefult();
  };

  return (
    <div className="form-wrapper">
      <div className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-header">
          <h2> Count Cals</h2>
          <p>Login to start tracking calories</p>
        </div>
        <div className="form-inputs">
          {!isLogin && (
            <div className="form-input">
              <input
                type="username"
                placeholder=" username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-input">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-signup">
            {isLogin ? (
              <button onClick={handleLogin}>Log in</button>
            ) : (
              <button className="sign-up " onClick={handleSignUp}>
                SignUp
              </button>
            )}
          </div>
        </div>
        <div className="login-signup">
          {isLogin ? "Dont have an account yet ? " : "Click to log in "}
          <span
            className="login-signup-toggle"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up " : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
