import React, { useState } from 'react';
import './Navigationbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navigation">
      <Navbar  light expand="md" className="Navbar ml-auto">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{alignItems:"revert"}} navbar className="justify-content-end" style={{ width: "100%" }}>
            <NavItem>
              <NavLink className="Navlink" style={{color:"white" }} href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:"white" }} href="/howItWorks">How It Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:"white" }} href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:"white" }} href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:"white" }} href="/login">Login</NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;