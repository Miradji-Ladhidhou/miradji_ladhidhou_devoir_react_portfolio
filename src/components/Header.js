import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  // Définir l'état du lien actif
  const [activeKey, setActiveKey] = useState('#home');

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">john doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={activeKey} // Appliquer l'état actif aux liens
            onSelect={(selectedKey) => setActiveKey(selectedKey)} // Mettre à jour l'état lors du clic sur un lien
          >
            <Nav.Link href="#home" eventKey="#home">home</Nav.Link>
            <Nav.Link href="../pages/Service.js" eventKey="../pages/Service.js">services</Nav.Link>
            <Nav.Link href="#portfolio" eventKey="#portfolio">portfolio</Nav.Link>
            <Nav.Link href="#contact" eventKey="#contact">contact</Nav.Link>
            <Nav.Link href="#mentions légales" eventKey="#mentions légales">mentions légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
