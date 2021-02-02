import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../css/Navigationbar.css';

class Navigationbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState.isOpen,
      };
    });
  };

  handleScroll = () => {
    if (window.scrollY > 20) {
      this.setState({
        isScrolled: true,
      });
    } else {
      this.setState({
        isScrolled: false,
      });
    }
  };

  render() {
    const { isOpen, isScrolled } = this.state;
    return (
      <div
        className={isScrolled || isOpen ? 'Navigation scrolled' : 'Navigation'}
      >
        <Navbar light expand='md' className='Navbar ml-auto'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              style={{ alignItems: 'revert', width: '100%' }}
              navbar
              className='justify-content-end'
            >
              <NavItem>
                <NavLink
                  className={
                    isScrolled || isOpen ? 'Navlink scrolledNavlink' : 'Navlink'
                  }
                  tag={Link}
                  to='/'
                  href='/home'
                >
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to='/register'
                  className='Navlink'
                  href='/register'
                >
                  <ButtonToggle
                    className={
                      isScrolled || isOpen ? 'auth scrolledAuth' : 'auth'
                    }
                  >
                    Register
                  </ButtonToggle>{' '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to='/login'
                  className='Navlink'
                  href='/login'
                >
                  <ButtonToggle
                    className={
                      isScrolled || isOpen ? 'auth scrolledAuth' : 'auth'
                    }
                  >
                    Login
                  </ButtonToggle>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigationbar;
