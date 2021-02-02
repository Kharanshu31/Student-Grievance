import React, { Component } from "react";
import pic from "../images/8576.jpg";
import {Redirect} from 'react-router-dom' ;
import { connect } from "react-redux";
import { login } from "../actions/auth";
import "../css/login.css";

// import axios from "axios";
import swal from "sweetalert";

class Login extends Component {
  state = {
    formData: {
      email: "",
      password: "",
    },
  };

  onChange = (e) => {
    // console.log(e.target.name , e.target.value , this.state)
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: { ...prevState.formData, [e.target.name]: e.target.value },
      };
    });
  };

  onSubmit = async (e) => {
    const { email, password } = this.state.formData;

    e.preventDefault();

    await this.props.dispatch(login(email, password));
  };

  render() {
    const { email, password } = this.state.formData;

    const { isAuthenticated } = this.props.auth ;

    // Redirect if logged in

    if(isAuthenticated){
      return <Redirect to="/dashboard" />
    }

    return (
      <div className="signIn">
        <div className="photo2">
          <img src={pic} alt="" />
        </div>
        <div className="signInForm">
          <h1>
            {" "}
            Hello, <br />
            Welcome Back
          </h1>

          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                this.onChange(e);
              }}
              //  onChange={this.handleChangeEmail}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                this.onChange(e);
              }}
              // onChange={this.handleChangePassword}
              required
            />

            <button type="submit">Log In</button>
          </form>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
