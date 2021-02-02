import React, { Component } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
// core components
import { connect } from 'react-redux';

import UserHeader from './UserHeader.js';

class Profile extends Component {
  state = {
    auth: this.props.auth,
  };

  render() {
    return (
      <div className='wrapper'>
        <UserHeader />
        {/* Page content */}
        <Container className='mt--7' fluid>
          <Row>
            <Col className='order-xl-2 mb-5 mb-xl-0' xl='4'>
              <Card className='card-profile shadow'>
                <Row className='justify-content-center'>
                  <Col className='order-lg-2' lg='3'>
                    <div className='card-profile-image'>
                      <a href='#pablo' onClick={(e) => e.preventDefault()}>
                        <img
                          alt='...'
                          className='rounded-circle'
                          src={require('../images/team-4-800x800.jpg').default}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className='text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4'></CardHeader>
                <CardBody className='pt-0 pt-md-4'>
                  <div className='mt-6 text-center'>
                    <h3>
                      {this.state.auth.user.name}
                    </h3>
                    <div className='h5 font-weight-300'>
                      <i className='ni location_pin mr-2' />
                      User location 
                    </div>
                    <hr className='my-4' />

                    <div className="mt-4">
                      <i className='ni education_hat mr-2' />
                      <b>User university / college </b>
                    </div>
                    {/* <p>
                      user description
                    </p> */}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col className='order-xl-1 ml-4 mr-3' xl='7'>
              <Card className='bg-secondary shadow'>
                <CardHeader className='bg-white border-0'>
                  <Row className='align-items-center'>
                    <Col xs='8'>
                      <h3 className='mb-0'>My account</h3>
                    </Col>
                    
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className='heading-small text-muted mb-4'>
                      User information
                    </h6>
                    <div className='pl-lg-4'>
                      <Row>
                        <Col lg='6'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-username'
                            >
                              Name
                            </label>
                            <Input
                              className='form-control-alternative'
                              defaultValue={this.state.auth.user.name}
                              id='input-username'
                              placeholder='Username'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col lg='6'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-email'
                            >
                              Email address
                            </label>
                            <Input
                              className='form-control-alternative'
                              id='input-email'
                              defaultValue={this.state.auth.user.email}
                              type='email'
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg='6'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-first-name'
                            >
                              University/College
                            </label>
                            <Input
                              className='form-control-alternative'
                              id='input-first-name'
                              defaultValue={this.state.auth.user.college}
                              placeholder='Your University/College'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                    </div>
                    <hr className='my-4' />
                    {/* Address */}
                    <h6 className='heading-small text-muted mb-4'>
                      Contact information
                    </h6>
                    <div className='pl-lg-4'>
                      <Row>
                        <Col md='10'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-address'
                            >
                              Address
                            </label>
                            <Input
                              className='form-control-alternative'
                              id='input-address'
                              defaultValue={this.state.auth.user.address}
                              placeholder='Home Address'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg='4'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-city'
                            >
                              City
                            </label>
                            <Input
                              className='form-control-alternative'
                              defaultValue={this.state.auth.user.city}
                              id='input-city'
                              placeholder='City'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col lg='4'>
                          <FormGroup>
                            <label
                              className='form-control-label'
                              htmlFor='input-country'
                            >
                              Country
                            </label>
                            <Input
                              className='form-control-alternative'
                              defaultValue='India'
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                    </div>
                    {/* <hr className='my-4' /> */}
                    {/* Description */}
                    {/* <h6 className='heading-small text-muted mb-4'>About me</h6>
                    <div className='pl-lg-4'>
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className='form-control-alternative'
                          placeholder='A few words about you ...'
                          defaultValue={this.state.auth.user.description}
                          rows='4'
                          type='textarea'
                        />
                      </FormGroup>
                    </div> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    complaints: state.complaint.complaints,
  };
}

export default connect(mapStateToProps)(Profile);
