import React from "react";
import "../css/Work.css";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from "react-bootstrap/Card";
import img1 from "../images/login.png";
import img2 from  "../images/complaint.png"
import img3 from  "../images/wait.png"

const Workingg = () => {
  return (
    <section className="Working" style={{ minHeight: "100vh" }}>
      <div>
      <h1>How It Works?</h1>
      </div>
      <p></p>
      <p></p>
   

      <CardDeck className="Working-cards">
        <Card>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              Just Login! If you don't have an account Register in a few clicks!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Register a complaint</Card.Title>
            <Card.Text>Choose the appropriate department and submit your complaint.</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Wait</Card.Title>
            <Card.Text>We will look into your complaint and would try to resolve it at the earliest.</Card.Text>
          </Card.Body>
        </Card>        
      </CardDeck>

    </section>


  );
};

export default Workingg;


