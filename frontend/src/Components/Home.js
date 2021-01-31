import React, { Component } from "react";
import "../css/Home.css";
import HowItWorks from "./HowItWorks";
import ContactUs from "./ContactUs";
import backgroundImg from "../images/background.svg";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

 class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth ;

    // Redirect if logged in

    if(isAuthenticated){
      return <Redirect to="/dashboard" />
    }

    return (
      <section style={{ minHeight: "100vh" }}>
        <div className="Home">
          <div className="Home-svg">
            <img src={backgroundImg} alt="" />
          </div>
          <div className="Home-desc">
            <h1 className="Home-title">
              {" "}
              <span className="student">Students</span> <br /> Grievance
              Redressal
            </h1>
            <p className="Home-info">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>

        <HowItWorks />
        <ContactUs />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Home) ;