import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ title, text, icon, footerText }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body className='cardsPortfolio'>
        <div className="card-icon mb-3">
          {icon}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div>
          <Button className="btn-hover" variant="primary">Voir le site</Button>
        </div>
        <Card.Footer className="cardsFooter">
          {footerText}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Cards;
