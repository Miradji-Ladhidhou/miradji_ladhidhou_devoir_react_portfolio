// Importation de React et des composants nécessaires de 'react-bootstrap' (Navbar, Nav, Container)
// Importation de 'NavLink' depuis 'react-router-dom' pour la gestion des liens internes
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  // Navbar Bootstrap avec un fond sombre (bg="dark") et un texte clair (variant="dark")
  <Navbar bg="dark" variant="dark" expand="lg">
    {/* Conteneur Bootstrap pour centrer le contenu et le rendre responsive */}
    <Container>
      {/* Marque du site avec un lien vers la page d'accueil */}
      <Navbar.Brand as={NavLink} to="/">john doe</Navbar.Brand>
      {/* Toggle pour les petits écrans, permettant d'afficher ou cacher le menu */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      {/* Section collapsée contenant les liens de navigation */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          {/* Lien vers la page d'accueil */}
          <Nav.Link as={NavLink} to="/" activeClassName="active-link">home</Nav.Link>
          
          {/* Lien vers la page des services */}
          <Nav.Link as={NavLink} to="/Services" activeClassName="active-link">services</Nav.Link>
          
          {/* Lien vers le portfolio */}
          <Nav.Link as={NavLink} to="/Portfolio" activeClassName="active-link">portfolio</Nav.Link>
          
          {/* Lien vers la page de contact */}
          <Nav.Link as={NavLink} to="/Contact" activeClassName="active-link">contact</Nav.Link>
          
          {/* Lien vers la page des mentions légales */}
          <Nav.Link as={NavLink} to="/Mentions" activeClassName="active-link">mentions légales</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
