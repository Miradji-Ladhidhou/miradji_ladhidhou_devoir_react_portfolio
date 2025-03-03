import React from 'react';
import '../css/home.css';
import JohnDoeAbout from '../images/john-doe-about.jpg';
import { ProgressBar } from 'react-bootstrap';  // Importer la ProgressBar de Bootstrap

const AboutSkills = () => {
  // Définir les pourcentages pour chaque compétence
  const htmlSkill = 90;
  const cssSkill = 80;
  const jsSkill = 70;
  const phpSkill = 60;
  const reactSkill = 50;

  return (
    <div className="AboutAndSkills py-5">
      <div className="row">
        {/* Section À propos */}
        <div className="col-12 col-md-6">
          <h3 className="borderBottom">A propos</h3>
          <div className="photos mb-3">
            <img
              src={JohnDoeAbout}
              alt="john doe about"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
            consecretur remoore venerenos nostum. ex celectus recencs moect aut lure
            enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
            consecretur remoore venerenos nostum. ex celectus recencs moect aut lure
            enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
            consecretur remoore venerenos nostum. ex celectus recencs moect aut lure
            enim placeat? Natus, neque at?
          </p>
        </div>

        {/* Section Compétences */}
        <div className="col-12 col-md-6">
          <h3 className="borderBottom">Mes Compétences</h3>
          
          {/* Compétence HTML */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">HTML 5</label>
              <span>{htmlSkill}%</span>
            </div>
            <ProgressBar now={htmlSkill} variant="danger" />
          </div>

          {/* Compétence CSS */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">CSS 3</label>
              <span>{cssSkill}%</span>
            </div>
            <ProgressBar now={cssSkill} variant="info" />
          </div>

          {/* Compétence JavaScript */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">JavaScript</label>
              <span>{jsSkill}%</span>
            </div>
            <ProgressBar now={jsSkill} variant="warning" />
          </div>

          {/* Compétence PHP */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">PHP</label>
              <span>{phpSkill}%</span>
            </div>
            <ProgressBar now={phpSkill} variant="success" />
          </div>

          {/* Compétence React */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">React</label>
              <span>{reactSkill}%</span>
            </div>
            <ProgressBar now={reactSkill} variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
