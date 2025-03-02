import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ title, text, icon }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="card-icon mb-3">
          {icon}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
