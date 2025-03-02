import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from '../components/ComponentsPortfolio';  // Import du composant de carte
import banner from '../images/banner.jpg';
import freshFood from '../images/freshFood.jpg';
import restaurantJaponais from '../images/restaurantJaponais.jpg';
import espaceBienEtre from '../images/espaceBienEtre.jpg';
import seo from '../images/seo.jpg';
import coder from '../images/coder.jpg';
import screens from '../images/screens.jpg';

function Portfolio() {
  const cardData = [
    {
      title: 'Fresh Food',
      text: "Site de vente de produits frais en ligne",
      icon: (
        <img src= {freshFood} alt='Fresh food'/>
      ),
      footer: "Site réalisé avec PHP et MySQL",
    },
    {
      title: 'Restaurant Akira',
      text: "site de vente de produits frais en ligne",
      icon: (
        <img src= {restaurantJaponais} alt='Restaurant japonais'/>
      ),
      footer: "Site réalisé avec WordPress",
    },
    {
      title: 'Espace bien-être',
      text: "Espace e bien-être",
      icon: (
        <img src= {espaceBienEtre} alt='Espace bien etre'/>
      ),
      footer: "Site réalisé par LARAVEL",
    },
    {
      title: 'SEO',
      text: "Améliration du référencement d'un site e-commerce",
      icon: (
        <img src= {seo} alt='seo'/>
      ),
      footer: "Utilisation des outils SEO",
    },
    {
      title: "Création d'une API",
      text: "Création d'une API RESTFULL publique",
      icon: (
        <img src= {coder} alt='Création API'/>
      ),
      footer: "Découvrez l'importance d'une ",
    },
    {
      title: "Maquette d'un site web",
      text: "Création du prototyoe d'un site",
      icon: (
        <img src= {screens} alt='Maquette site web'/>
      ),
      footer: "Réalisé avec FIGMA",
    },
  ];

  return (
    <div>
      <div className='imgBanner'>
        <img src={banner} alt="banner" className="img-fluid" />
      </div>

      <div className='offre'>
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations. </p>
      </div>

      <Row xs={1} md={3} className="g-4 mt-4">
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Card 
              title={card.title} 
              text={card.text} 
              icon={card.icon} 
              footerText={card.footer}
            />
          </Col>
        ))}
      </Row>
      
    </div>
  );
}

export default Portfolio;
