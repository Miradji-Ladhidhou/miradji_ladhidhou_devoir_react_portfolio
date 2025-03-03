// Importation de React et des composants Card et Button de react-bootstrap
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ title, text, icon, footerText }) => {
  return (
    // Le composant Card de Bootstrap avec une ombre légère
    <Card className="shadow-sm">
      {/* Corps de la carte avec une classe CSS personnalisée */}
      <Card.Body className='cardsPortfolio'>
        
        {/* Affichage de l'icône dans la carte, avec une marge en bas */}
        <div className="card-icon mb-3">
          {icon} {/* L'icône est passée en prop et affichée ici */}
        </div>
        
        {/* Affichage du titre de la carte */}
        <Card.Title>{title}</Card.Title>

        {/* Affichage du texte de la carte */}
        <Card.Text>{text}</Card.Text>
        
        {/* Section avec un bouton pour afficher un lien vers le site */}
        <div>
          <Button className="btn-hover" variant="primary">Voir le site</Button> {/* Bouton stylisé avec une classe CSS personnalisée */}
        </div>
        
        {/* Pied de page de la carte contenant le texte du bas */}
        <Card.Footer className="cardsFooter">
          {footerText} {/* Affichage du texte du pied de page, passé en prop */}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

// Exportation du composant Cards pour l'utiliser dans d'autres parties de l'application
export default Cards;
