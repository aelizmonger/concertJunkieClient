import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  Nav,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar dark expand="md">
      <NavbarBrand href="/">Concert Junkie</NavbarBrand>
      {/* <NavbarToggler onClick={toggle} /> */}
      {/* <Collapse isOpen={isOpen} navbar> */}
      <Nav className="ml-auto">
        {props.token ? (
          <>
            <NavItem>
              <a
                className="nav-button"
                onClick={() => props.changeView("saved")}
              >
                Saved Features
              </a>
            </NavItem>
            <NavItem>
              <a
                className="nav-button"
                onClick={(e) => props.deleteSessionToken()}
              >
                Logout
              </a>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              {props.isLogin ? (
                <a className="nav-button" onClick={props.toggleLogin}>
                  Register
                </a>
              ) : (
                <a className="nav-button" onClick={props.toggleLogin}>
                  Login
                </a>
              )}
            </NavItem>
          </>
        )}
      </Nav>
      {/* </Collapse> */}
    </Navbar>
  );
};

export default NavbarComponent;