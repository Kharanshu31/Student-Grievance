import React, { Component } from "react";
import pic from "../images/8576.jpg";
import {Redirect} from 'react-router-dom' ;
import "../css/login.css";
import { connect } from "react-redux";
import { login } from "../actions/auth";
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

    this.props.dispatch(login(email, password));
  };

  // handleChangeEmail=(e)=>{
  //   const n=e.target.value;
  //   this.setState({email:n});
  // }

  // handleChangePassword=(e)=>{
  //   const n=e.target.value;
  //   this.setState({password:n});
  // }

  // loginUser=(e)=>{
  //     e.preventDefault();

  //     const item={
  //       email:this.state.email,
  //       password:this.state.password
  //     }

  //     console.log(item);

  //     axios.post("http://localhost:5000/users/find",item)
  //       .then(response=>{
  //         console.log(response.data);
  //         if(response.data==="Email does not exist")
  //         {
  //           swal("Email not found! Please Register").then(()=>window.location.href="/register");
  //         }
  //         else if(response.data==="Password does not match")
  //         {
  //           swal("Password does not match");
  //         }
  //         else
  //         {
  //           swal("Successfully logged in").then(()=>window.location.href="/");
  //           window.localStorage.setItem("_id",response.data._id);
  //         }
  //       })
  // }

  render() {
    const { email, password } = this.state.formData;

    const { isAuthenticated } = this.props.auth ;

    // Redirect if logged in

    if(isAuthenticated){
      return <Redirect to="/dashboard" />
    }
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

          <p className="p">or</p>

          <button className="google">
            <a>Google</a>
          </button>
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
