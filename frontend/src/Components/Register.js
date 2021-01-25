import React, { Component } from "react";
import pic from "../images/contact.jpg";
import "../css/register.css";

class Register extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="signUpForm">
          <h1>Sign Up </h1>

          <form>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>

          <p className="p">or</p>

          <button className="google">
            <a href="">Google</a>
          </button>
        </div>
        <div className="photo">
          <img src={pic} alt="" />
        </div>
      </div>
    );
  }
}

export default Register;
