import React, { Component } from "react";
import pic from "../images/contact.jpg";
import "../css/register.css";
import axios from "axios";
import swal from "sweetalert";

class Register extends Component {

  state={
    name:"",
    email:"",
    password:"",
    confirm_password:""
  }

  handleChangeName=(e)=>{
    const n=e.target.value;
    this.setState({name:n});
  }

  handleChangeEmail=(e)=>{
    const n=e.target.value;
    this.setState({email:n});
  }

  handleChangePassword=(e)=>{
    const n=e.target.value;
    this.setState({password:n});
  }

  handleChangeConfirmPassword=(e)=>{
    const n=e.target.value;
    this.setState({confirm_password:n});
  }

  addUser=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email==="" || this.state.password==="" || this.state.confirm_password==="")
    {
      swal("Please enter all the fields");
    }
    else if(this.state.password!==this.state.confirm_password)
    {
      swal("Please enter all the fields");
    }
    else{

      const item={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      }

      console.log(item);

      axios.post("http://localhost:5000/users/add",item)
        .then(response=>{
          console.log(response.data);
          window.localStorage.setItem("_id",response.data._id);
          swal("Successfully Registered").then(()=>window.location.href="/");
        }).catch(err=>console.log(err))
    }
  }


  render() {
    return (
      <div className="signUp">
        <div className="signUpForm">
          <h1>Sign Up </h1>

          <form>
            <input type="text" name="name" placeholder="Your name" onChange={this.handleChangeName} required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={this.handleChangeEmail}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              onChange={this.handleChangePassword}
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              onChange={this.handleChangeConfirmPassword}
              required
            />
            <button type="submit" onClick={this.addUser}>Sign Up</button>
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
