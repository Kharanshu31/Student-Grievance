import React, { Component } from "react";
import {connect} from 'react-redux';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends Component {
  state={
    name:""
  };

  componentDidMount(){
    this.setState({name:this.props.auth.user.name});
  }

  render(){
    

    
  
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../images/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" style={{paddingLeft:"3.5%"}} fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {this.state.name}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
    
  };
}

export default connect(mapStateToProps)(UserHeader);