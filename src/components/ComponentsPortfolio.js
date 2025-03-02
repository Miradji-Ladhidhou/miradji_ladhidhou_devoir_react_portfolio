import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ title, text, icon, footerText }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="card-icon mb-3">
          {icon}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className= "BtnPortfolio"><Button variant="primary">Voir le site</Button></div>
      </Card.Body>
      <Card.Footer className="text-muted">
        {footerText}
      </Card.Footer>
    </Card>
  );
};

export default Cards;
