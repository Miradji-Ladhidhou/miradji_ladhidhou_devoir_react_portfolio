import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>

          <Col md={4} className="mb-4">
            <h5>John Doe</h5>
            <p className='dev'>40 rue Laure Diebold</p>
            <p className='dev'>690009 Lyon, France</p>
            <p className='dev'>10 20 30 40 50</p>
            <p className='dev'>john.doe@gmail.com</p>
            <div>
              <a className='icone'  href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>

              <a className='icone'  href="https://x.com/?lang=fr" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </a>

              <a className='icone'  href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Liens Utiles</h5>
            <ul className="list-unstyled">
              <li className='footerlink'><a href="../pages/Home.js" className="text-white">Home</a></li>
              <li className='footerlink'><a href="../pages/Services.js" className="text-white">Services</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">portfolio</a></li>
              <li className='footerlink'><a href="../pages/Contact.js" className="text-white">Me contacter</a></li>
              <li className='footerlink'><a href="../pages/MentionsLégales.js" className="text-white">Mentions légales</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">Fresh Food</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">Restaurant Akira</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">Espace bien-etre</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">SEO</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">Création d'une API</a></li>
              <li className='footerlink'><a href="../pages/Portfolio.js" className="text-white">Maquette d'un site</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      </div>
    </footer>
  );
}

export default Footer;
