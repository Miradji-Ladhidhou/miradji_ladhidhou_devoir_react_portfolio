import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send to an API)
    alert('Form submitted!');
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Form Section */}
        <Col md={6}>
          <h3>Formulaire de Contact</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Votre Adresse Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Votre Numéro de Téléphone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Votre Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="float-end">
              Envoyer
            </Button>
          </Form>
        </Col>

        {/* Contact Info Section */}
        <Col md={6}>
          <h3>Mes Coordonnées</h3>
          <p><strong>John Doe</strong></p>
          <p>Adresse: 123 Rue Exemple, Paris, France</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <p>Email: johndoe@example.com</p>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

