import React, { Component } from "react";
import pic from "../images/8576.jpg";
import "../css/login.css";
import axios from "axios";
import swal from "sweetalert";

class Login extends Component {

  state={
    email:"",
    password:""
  }

  handleChangeEmail=(e)=>{
    const n=e.target.value;
    this.setState({email:n});
  }

  handleChangePassword=(e)=>{
    const n=e.target.value;
    this.setState({password:n});
  }

  loginUser=(e)=>{
      e.preventDefault();

      const item={
        email:this.state.email,
        password:this.state.password
      }

      console.log(item);

      axios.post("http://localhost:5000/users/find",item)
        .then(response=>{
          console.log(response.data);
          if(response.data==="Email does not exist")
          {
            swal("Email not found! Please Register").then(()=>window.location.href="/register");
          }
          else if(response.data==="Password does not match")
          {
            swal("Password does not match");
          }
          else
          {
            swal("Successfully logged in").then(()=>window.location.href="/");
            window.localStorage.setItem("_id",response.data._id);
          }
        })
  }

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

          <form onSubmit={this.loginUser}>
            <input type="email" name="email" placeholder="email" onChange={this.handleChangeEmail} required />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChangePassword}
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
