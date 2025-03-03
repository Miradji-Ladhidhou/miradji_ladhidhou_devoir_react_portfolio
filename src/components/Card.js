// Importation de React et du composant Card de la bibliothèque react-bootstrap
import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ title, text, icon }) => {
  return (
    // Le composant Card de Bootstrap avec une ombre légère
    <Card className="shadow-sm">
      <Card.Body>
        {/* Affichage de l'icône dans la carte, avec un espace en bas */}
        <div className="card-icon mb-3">
          {icon} {/* L'icône est passée en tant que prop et affichée ici */}
        </div>
        
        {/* Affichage du titre de la carte */}
        <Card.Title>{title}</Card.Title>

        {/* Affichage du texte de la carte */}
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Exportation du composant Cards pour l'utiliser dans d'autres parties de l'application
export default Cards;
