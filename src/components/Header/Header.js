import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import logo from "./../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { AllContexts,selectedService } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white " to="/home">
            <img width="70px" src={logo} alt="Logo" />{" "}
            <span className="title"> ShafaCare Plus</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white header-button">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white header-button">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white header-button">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white header-button">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/appointment" className="text-white header-button">
                Appointment
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctors" className="text-white header-button">
                Doctors
              </Nav.Link>

              <Nav.Link as={NavLink} to="/cart" className="text-white header-button">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faClinicMedical}
                />
                <Badge>{selectedService.length}</Badge>
              </Nav.Link>
              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
