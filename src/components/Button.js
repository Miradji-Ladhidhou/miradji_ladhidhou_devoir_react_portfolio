// Importation de React et useState pour gérer l'état du composant
import React, { useState } from 'react';
// Importation du composant Modale
import Modale from './Modale';

function Button() {
  // Déclaration de l'état 'showModal' pour contrôler l'affichage de la modale
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher la modale lorsqu'on clique sur le bouton
  const handleButtonClick = () => {
    setShowModal(true); // Change l'état pour afficher la modale
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setShowModal(false); // Change l'état pour cacher la modale
  };

  return (
    <>
      {/* Le bouton qui, lorsqu'on clique dessus, affiche la modale */}
      <button
        type="button"
        className="btn btn-danger" // Classe Bootstrap pour styliser le bouton (couleur rouge)
        onClick={handleButtonClick} // Lors du clic sur le bouton, on appelle handleButtonClick
      >
        En savoir plus
      </button>

      {/* Si 'showModal' est vrai, on affiche le composant Modale */}
      {showModal && <Modale onClose={closeModal} />} {/* Le composant Modale reçoit la fonction 'closeModal' comme prop */}
    </>
  );
}

// Exportation du composant Button pour qu'il puisse être utilisé ailleurs dans l'application
export default Button;
