import React, { useState } from 'react';
import '../assets/scss/artisanFiche.scss';
import imageOrville from "../assets/img/Chauffagiste.jpg";

const ArtisanFiche = () => {
  const artisan = {
    nom: "Orville Salmons",
    specialite: "Chauffagiste",
    ville: "Evian",
    note: 4.8,
    image: imageOrville,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "o-salmons@live.com"
  };

  const [formData, setFormData] = useState({ prenom: '', nom: '', objet: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé !");
  };

  return (
    <main className="artisan-fiche-container">
      
      {/* SECTION DU HAUT : BLOC INFOS */}
      <section className="artisan-hero-block">
        <div className="artisan-img-box">
          <img src={artisan.image} alt={artisan.nom} className="profile-img" />
        </div>
        
        <div className="artisan-text-details">
          <h2 className="artisan-name">{artisan.nom}</h2>
          <h3 className="artisan-spec">{artisan.specialite}</h3>
          <h4 className="artisan-city">{artisan.ville}</h4>
          
          <div className="artisan-stars">
            <div className="star-icon">
              {[1, 2, 3, 4, 5].map((index) => {
                const fill = Math.max(0, Math.min(1, artisan.note - (index - 1))) * 100;
                return (
                  <span key={index} className="star" style={{ '--rating': `${fill}%` }}>★</span>
                );
              })}
            </div>
            <span className="note-text">{artisan.note}/5</span>
          </div>
        </div>
      </section>

      {/* DESCRIPTION TEXTUELLE */}
      <section className="artisan-bio-block">
        <p className="description-text">{artisan.description}</p>
        <a href={`mailto:${artisan.email}`} className="artisan-email">{artisan.email}</a>
      </section>

      <hr className="custom-divider" />

      {/* FORMULAIRE DE CONTACT */}
      <section className="contact-form-container">
        <h2 className="contact-title">Contacter l’artisan</h2>
        
        <form onSubmit={handleSubmit} className="custom-contact-form">
          <div className="form-name-row">
            <input 
              type="text" 
              placeholder="Votre prénom" 
              required 
              onChange={(e) => setFormData({...formData, prenom: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Votre nom" 
              required 
              onChange={(e) => setFormData({...formData, nom: e.target.value})}
            />
          </div>
          
          <input 
            type="text" 
            placeholder="Objet du message" 
            required 
            className="full-width"
            onChange={(e) => setFormData({...formData, objet: e.target.value})}
          />
          
          <textarea 
            placeholder="Votre message..." 
            rows="6" 
            required
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          
          <div className="btn-wrapper">
            <button type="submit" className="btn-send">Envoyer</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ArtisanFiche;