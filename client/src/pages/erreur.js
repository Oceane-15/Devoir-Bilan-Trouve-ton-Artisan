import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/erreur.scss'; 
import robotError from '../assets/img/Erreur 404.jpg'; 

const Erreur = () => {
  return (
    <div className="container error-page my-5">
      <div className="row justify-content-center align-items-center error-container">
        
        <div className="col-12 text-center error-visual mb-4">
          <img src={robotError} alt="Robot en panne" className="robot-img img-fluid" />
        </div>
        
        <div className="col-12 text-center error-details">
          <h2 className="error-title">Page non trouvée</h2>
          
          <div className="btn-wrapper mt-4">
            <Link to="/" className="btn btn-back-home px-5 py-3">
              Retour à l'accueil
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Erreur;