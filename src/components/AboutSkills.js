// src/components/AboutAndSkills.js
import React from 'react';
import '../css/home.css';
import JohnDoeAbout from '../images/john-doe-about.jpg';

// Composant de barre de progression
const ProgressBar = ({ skill, percentage, color }) => {
  return (
    <div className="progress-container mb-3">
      <label>{skill}</label>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const AboutSkills = () => {
  // Définir les pourcentages et les couleurs pour chaque compétence
  const htmlSkill = 90;
  const cssSkill = 80;
  const jsSkill = 70;
  const phpSkill = 60;
  const reactSkill = 50;



  const htmlColor = '#dc3545';
  const cssColor = '#0dcaf0';
  const jsColor = '#ffc107';
  const phpColor = '#198754';
  const reactColor = '#0d6efd';

  return (
    <div className="AboutAndSkills py-5">
      <div className="row">
        {/* Section À propos */}
        <div className="col-12 col-md-6">
          <h3 className='borderBottom'>A propos</h3>
          <div className="photos mb-3">
            <img
              src={JohnDoeAbout}
              alt="john doe about"
              style={{ maxWidth: '100%' }}
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
          <h3 className='borderBottom'>Mes Compétences</h3>
          <ProgressBar skill="HTML 5 90%" percentage={htmlSkill} color={htmlColor} />
          <ProgressBar skill="CSS 80%" percentage={cssSkill} color={cssColor} />
          <ProgressBar skill="JavaScript 70%" percentage={jsSkill} color={jsColor} />
          <ProgressBar skill="PHP 60%" percentage={phpSkill} color={phpColor} />
          <ProgressBar skill="React 50%" percentage={reactSkill} color={reactColor} />
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
