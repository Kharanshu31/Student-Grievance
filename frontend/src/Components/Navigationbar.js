import React, { useState } from 'react';
import './Navigationbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle
} from 'reactstrap';

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navigation">
      <Navbar  light expand="md" className="Navbar ml-auto " style={{fontSize:"24px", fontWeight: "bolder"}} >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{alignItems:"revert"}} navbar className="justify-content-end" style={{ width: "100%" }}>
            <NavItem>
              <NavLink className="Navlink" style={{color:'#586DA5'}} href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:'#586DA5'}} href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink" style={{color:'#586DA5'}} href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlink"  style={{color:'#586DA5'}} href="/register"><ButtonToggle color="primary" style={{fontSize:"18px", fontWeight: "bolder", background: "#1C468A"}}>Register</ButtonToggle>{' '}</NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink  className="Navlink" href="/login"><ButtonToggle color="primary" style={{fontSize:"18px", fontWeight: "bolder", background: "#1C468A"}}>Login</ButtonToggle></NavLink> 
              
              
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;