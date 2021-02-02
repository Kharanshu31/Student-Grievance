import React, { Component } from 'react';
import pic from '../images/contact.jpg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import '../css/register.css';

// import axios from "axios";
// import swal from 'sweetalert';

class Register extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      college: '',
      city: '',
      address: '',
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
    const {
      name,
      email,
      password,
      confirm_password,
      college,
      city,
      address,
    } = this.state.formData;

    e.preventDefault();

    if (password !== confirm_password) {
      console.log("Password doesn't match");
    } else {
      this.props.dispatch(
        register({ name, email, password, college, city, address })
      );
    }
  };

  render() {
    const {
      name,
      email,
      password,
      confirm_password,
      college,
      city,
      address,
    } = this.state.formData;
    const { isAuthenticated } = this.props.auth;

    // Redirect if logged in

    if (isAuthenticated) {
      return <Redirect to='/login' />;
    }
    return (
      <div className='signUp'>
        <div className='signUpForm'>
          <h1>Sign Up </h1>

          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              type='text'
              name='name'
              placeholder='Your name'
              value={name}
              onChange={(e) => {
                this.onChange(e);
              }}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              value={email}
              onChange={(e) => this.onChange(e)}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Your password'
              minLength='6'
              value={password}
              onChange={(e) => this.onChange(e)}
              required
            />
            <input
              type='password'
              name='confirm_password'
              placeholder='Confirm password'
              value={confirm_password}
              onChange={(e) => this.onChange(e)}
              required
            />
            <input
              type='text'
              name='college'
              placeholder='College/University'
              value={college}
              onChange={(e) => this.onChange(e)}
              // required
            />
            <input
              type='text'
              name='city'
              placeholder='Your City'
              value={city}
              onChange={(e) => this.onChange(e)}
              // required
            />

            <input
              type='text'
              name='address'
              placeholder='Your Address'
              value={address}
              onChange={(e) => this.onChange(e)}
            />

            <button type='submit'>Sign Up</button>
          </form>


        </div>
        <div className='photo'>
          <img src={pic} alt='' />
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
