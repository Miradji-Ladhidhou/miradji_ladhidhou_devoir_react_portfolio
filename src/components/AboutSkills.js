// Importation de React et des fichiers nécessaires
import React from 'react';
import '../css/home.css'; // Import du fichier CSS pour le style
import JohnDoeAbout from '../images/john-doe-about.jpg'; // Import de l'image pour la section "A propos"
import { ProgressBar } from 'react-bootstrap';  // Importer la ProgressBar de Bootstrap pour afficher des barres de progression

// Définition du composant AboutSkills
const AboutSkills = () => {
  // Déclaration des niveaux de compétence pour chaque technologie (en pourcentage)
  const htmlSkill = 90;
  const cssSkill = 80;
  const jsSkill = 70;
  const phpSkill = 60;
  const reactSkill = 50;

  return (
    // Section principale contenant les informations "A propos" et les compétences
    <div className="AboutAndSkills py-5">
      <div className="row">
        
        {/* Colonne "A propos" */}
        <div className="col-12 col-md-6">
          <h3 className="borderBottom">A propos</h3> {/* Titre "A propos" avec une bordure en bas */}
          
          {/* Section photo avec l'image de John Doe */}
          <div className="photos mb-3">
            <img
              src={JohnDoeAbout} // L'image à afficher
              alt="john doe about" // Texte alternatif pour l'image
              style={{ maxWidth: '100%', height: 'auto' }} // Style pour garantir que l'image s'adapte correctement
            />
          </div>
          
          {/* Paragraphe d'exemple avec du texte générique */}
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

        {/* Colonne "Mes compétences" */}
        <div className="col-12 col-md-6">
          <h3 className="borderBottom">Mes Compétences</h3> {/* Titre "Mes Compétences" avec une bordure en bas */}
          
          {/* Compétence HTML */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">HTML 5</label> {/* Libellé de la compétence */}
              <span>{htmlSkill}%</span> {/* Affichage du pourcentage de compétence HTML */}
            </div>
            {/* ProgressBar pour afficher la barre de progression */}
            <ProgressBar now={htmlSkill} variant="danger" /> {/* Bar de progression avec couleur "danger" */}
          </div>

          {/* Compétence CSS */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">CSS 3</label> {/* Libellé de la compétence */}
              <span>{cssSkill}%</span> {/* Affichage du pourcentage de compétence CSS */}
            </div>
            {/* ProgressBar pour afficher la barre de progression */}
            <ProgressBar now={cssSkill} variant="info" /> {/* Bar de progression avec couleur "info" */}
          </div>

          {/* Compétence JavaScript */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">JavaScript</label> {/* Libellé de la compétence */}
              <span>{jsSkill}%</span> {/* Affichage du pourcentage de compétence JavaScript */}
            </div>
            {/* ProgressBar pour afficher la barre de progression */}
            <ProgressBar now={jsSkill} variant="warning" /> {/* Bar de progression avec couleur "warning" */}
          </div>

          {/* Compétence PHP */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">PHP</label> {/* Libellé de la compétence */}
              <span>{phpSkill}%</span> {/* Affichage du pourcentage de compétence PHP */}
            </div>
            {/* ProgressBar pour afficher la barre de progression */}
            <ProgressBar now={phpSkill} variant="success" /> {/* Bar de progression avec couleur "success" */}
          </div>

          {/* Compétence React */}
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <label className="me-2">React</label> {/* Libellé de la compétence */}
              <span>{reactSkill}%</span> {/* Affichage du pourcentage de compétence React */}
            </div>
            {/* ProgressBar pour afficher la barre de progression */}
            <ProgressBar now={reactSkill} variant="primary" /> {/* Bar de progression avec couleur "primary" */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres parties de l'application
export default AboutSkills;
