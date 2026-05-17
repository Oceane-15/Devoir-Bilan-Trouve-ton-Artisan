import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/erreur.css'; 
import robotError from '../assets/img/Erreur 404.jpg'; 

const Erreur = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-visual">
          <img src={robotError} alt="Robot en panne" className="robot-img" />
        </div>
        
        <h2 className="error-title">Page non trouvée</h2>
        
        <Link to="/" className="btn-back-home">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Erreur;