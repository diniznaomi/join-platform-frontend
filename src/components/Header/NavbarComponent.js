import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './NavbarComponent.css';

function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={require('../../assets/shape/logo4.png')}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle"
            alt="Logo Achei Aqui"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="d-lg-none" href="#home">Home</Nav.Link>
            <Nav.Link className="d-lg-none" href="#about">About</Nav.Link>
            <NavDropdown className="d-lg-none" title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated Link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="d-lg-none" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
