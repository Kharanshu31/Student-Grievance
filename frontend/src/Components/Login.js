import React, { Component } from "react";
import pic from "../images/8576.jpg";
import "../css/login.css";

class Login extends Component {
  render() {
    return (
      <div className="signIn">
        <div className="photo">
          <img src={pic} alt="" />
        </div>
        <div className="signInForm">
          <h1>
            {" "}
            Hello, <br />
            Welcome Back
          </h1>

          <form>
            <input type="email" name="email" placeholder="email" required />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />

            <button type="submit">Log In</button>
          </form>

          <p className="p">or</p>

          <button className="google">
            <a>Google</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
