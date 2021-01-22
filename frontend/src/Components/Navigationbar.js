import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
} from "reactstrap";

import "../css/Navigationbar.css";

class Navigationbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState,
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
      <div className={isScrolled ? "Navigation scrolled" : "Navigation"}>
        <Navbar light expand="md" className="Navbar ml-auto">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              style={{ alignItems: "revert" }}
              navbar
              className="justify-content-end"
              style={{ width: "100%" }}
            >
              <NavItem>
                <NavLink
                  className={isScrolled ? "Navlink scrolledNavlink" : "Navlink"}
                  href="/home"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={isScrolled ? "Navlink scrolledNavlink" : "Navlink"}
                  href="/About"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={isScrolled ? "Navlink scrolledNavlink" : "Navlink"}
                  href="/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Navlink" href="/register">
                  <ButtonToggle
                    className={isScrolled ? "auth scrolledAuth" : "auth"}
                  >
                    Register
                  </ButtonToggle>{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Navlink" href="/login">
                  <ButtonToggle
                    className={isScrolled ? "auth scrolledAuth" : "auth"}
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
