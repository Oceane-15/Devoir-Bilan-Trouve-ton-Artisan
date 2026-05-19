import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/scss/home.scss";
import imageOrville from "../assets/img/Chauffagiste.jpg";
import imagePain from "../assets/img/boulanger.webp";
import imageChoco from "../assets/img/chocolatier.jpg";

const Home = () => {
  const artisansDuMois = [
    {
      id: 1,
      name: "Orville Salmons",
      specialite: "Chauffagiste",
      lieu: "Evian",
      note: 5.0,
      image: imageOrville,
    },
    {
      id: 2,
      name: "Au pain chaud",
      specialite: "Boulanger",
      lieu: "Montélimar",
      note: 4.8,
      image: imagePain,
    },
    {
      id: 3,
      name: "Chocolaterie Labbé",
      specialite: "Chocolatier",
      lieu: "Lyon",
      note: 4.8,
      image: imageChoco,
    },
  ];

  return (
    <main className="container home-content my-5">
      
      {/* SECTION COMMENT ÇA MARCHE */}
      <section className="how-it-works text-center mb-5">
        <h2 className="mb-4">Comment trouver mon artisan ?</h2>
        
        <div className="row steps-container">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="step-card">
              <div className="step-number">Etape 1</div>
              <p>Choisir la catégorie d'artisanat dans le menu.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="step-card">
              <div className="step-number">Etape 2</div>
              <p>Choisir un artisan.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="step-card">
              <div className="step-number">Etape 3</div>
              <p>Le contacter via le formulaire de contact.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="step-card">
              <div className="step-number">Etape 4</div>
              <p>Une réponse sera apportée sous 48h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ARTISANS DU MOIS */}
      <section className="featured-section text-center">
        <h2 className="mb-4">Les artisans du mois</h2>
        
        <div className="row artisans-grid justify-content-center">
          {artisansDuMois.map((artisan) => (
            <div key={artisan.id} className="col-12 col-md-4 mb-4 artisan-item">
              
              <Link to="/artisan" className="artisan-card-link">
                <div className="artisan-card">
                  <div className="artisan-image-container">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="artisan-image img-fluid"
                    />
                  </div>
                  <div className="artisan-info">
                    <h3>{artisan.name}</h3>
                    <p className="specialite">{artisan.specialite}</p>
                    <p className="lieu">{artisan.lieu}</p>
                    <div className="rating-container">
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const fill = Math.max(
                            0,
                            Math.min(1, artisan.note - (star - 1)),
                          );
                          return (
                            <span
                              key={star}
                              className="star"
                              style={{ "--fill": `${fill * 100}%` }}
                            >
                              ★
                            </span>
                          );
                        })}
                      </div>
                      <span className="note-text">{artisan.note}/5</span>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
