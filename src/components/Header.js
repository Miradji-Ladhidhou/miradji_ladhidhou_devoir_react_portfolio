import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">john doe</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" activeClassName="active-link">home</Nav.Link>
          <Nav.Link as={NavLink} to="/Services" activeClassName="active-link">services</Nav.Link>
          <Nav.Link as={NavLink} to="/Portfolio" activeClassName="active-link">portfolio</Nav.Link>
          <Nav.Link as={NavLink} to="/Contact" activeClassName="active-link">contact</Nav.Link>
          <Nav.Link as={NavLink} to="/MentionsLégales" activeClassName="active-link">mentions légales</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
