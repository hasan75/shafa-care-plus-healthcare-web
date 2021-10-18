import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import logo from "./../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="70px" src={logo} alt="Logo" />{" "}
            <span className="title"> ShafaCare Plus</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/appointment" className="text-white">
                Appointment
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#feature" className="text-white">
                Emergency Services
              </Nav.Link>

              <Nav.Link as={NavLink} to="/cart" className="text-white">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faShoppingCart}
                />
                <Badge>2</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
