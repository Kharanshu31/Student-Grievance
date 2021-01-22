import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import "../css/HowItWorks.css";

const Workingg = () => {
  return (
    <Jumbotron>
      <h1>How It Works?</h1>
      <p> </p>
      <div className="left-card">
        <Card body>1. You Login/Signup</Card>
      </div>
      <div className="right-card">
        <Card body>2. We authenticate</Card>
      </div>
      <div className="left-card">
        <Card body>3. You submit a complaint</Card>
      </div>
      <div className="right-card">
        <Card body>4. We Resolve 😎😎 </Card>
      </div>
    </Jumbotron>
  );
};

export default Workingg;
