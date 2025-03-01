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
            <Nav.Link href="../pages/Home.js" eventKey="../pages/Home.js">home</Nav.Link>
            <Nav.Link href="../pages/Services.js" eventKey="../pages/Services.js">services</Nav.Link>
            <Nav.Link href="../pages/Portfolio.js" eventKey="../pages/Portfolio.js">portfolio</Nav.Link>
            <Nav.Link href="../pages/Contact.js" eventKey="../pages/Contact.js">contact</Nav.Link>
            <Nav.Link href="../pages/MentionsLégales.js" eventKey="../pages/MentionsLégales.jsÒ">mentions légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
