import React, { Component } from "react";
import pic from "../images/contact.jpg";
import {Redirect} from 'react-router-dom' ;
import "../css/register.css";
import { connect } from "react-redux";
import { register } from "../actions/auth";
// import axios from "axios";
import swal from "sweetalert";

class Register extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  };

  onChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: { ...prevState.formData, [e.target.name]: e.target.value },
      };
    });
  };

  onSubmit = (e) => {
    const { name, email, password, confirm_password } = this.state.formData;

    e.preventDefault();

    if (password !== confirm_password) {
      console.log("Password doesn't match");
    } else {
      this.props.dispatch(register({ name, email, password }));
    }
  };
  // handleChangeName = (e) => {
  //   const n = e.target.value;
  //   this.setState({ name: n });
  // };

  // handleChangeEmail = (e) => {
  //   const n = e.target.value;
  //   this.setState({ email: n });
  // };

  // handleChangePassword = (e) => {
  //   const n = e.target.value;
  //   this.setState({ password: n });
  // };

  // handleChangeConfirmPassword = (e) => {
  //   const n = e.target.value;
  //   this.setState({ confirm_password: n });
  // };

  // addUser=(e)=>{
  //   e.preventDefault();
  //   if(this.state.name==="" || this.state.email==="" || this.state.password==="" || this.state.confirm_password==="")
  //   {
  //     swal("Please enter all the fields");
  //   }
  //   else if(this.state.password!==this.state.confirm_password)
  //   {
  //     swal("Please enter all the fields");
  //   }
  //   else{

  //     const item={
  //       name:this.state.name,
  //       email:this.state.email,
  //       password:this.state.password
  //     }

  //     console.log(item);

  //     axios.post("http://localhost:5000/users/add",item)
  //       .then(response=>{
  //         console.log(response.data);
  //         window.localStorage.setItem("_id",response.data._id);
  //         swal("Successfully Registered").then(()=>window.location.href="/");
  //       }).catch(err=>console.log(err))
  //   }
  // }

  render() {
    const { name, email, password, confirm_password } = this.state.formData;
    const { isAuthenticated } = this.props.auth ;

    // Redirect if logged in

    if(isAuthenticated){
      return <Redirect to="/login" />
    }
    return (
      <div className="signUp">
        <div className="signUpForm">
          <h1>Sign Up </h1>

          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                this.onChange(e);
              }}
              // onChange={this.handleChangeName}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              // onChange={this.handleChangeEmail}
              onChange={(e) => this.onChange(e)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              minLength="6"
              value={password}
              // onChange={this.handleChangePassword}
              onChange={(e) => this.onChange(e)}
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={confirm_password}
              // onChange={this.handleChangeConfirmPassword}
              onChange={(e) => this.onChange(e)}
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

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Register);
