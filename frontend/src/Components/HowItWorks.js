import React from "react";
import "../css/Work.css";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from "react-bootstrap/Card";
import "../css/HowItWorks.css";

const Workingg = () => {
  return (
    <div className="Working">
      <h1>How It Works?</h1>


      <CardDeck className="Working-cards">
        <Card>
          <Card.Img variant="top" src="../images/login.png" />
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              Just Login! If you don't have an account Register in a few clicks!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="../images/complaint.png" />
          <Card.Body>
            <Card.Title>Register a complaint</Card.Title>
            <Card.Text>Choose the appropriate department and submit your complaint.</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="../images/wait.png" />
          <Card.Body>
            <Card.Title>Wait</Card.Title>
            <Card.Text>We will look into your complaint and would try to resolve it at the earliest.</Card.Text>
          </Card.Body>
        </Card>        
      </CardDeck>

    </div>


  );
};

export default Workingg;


