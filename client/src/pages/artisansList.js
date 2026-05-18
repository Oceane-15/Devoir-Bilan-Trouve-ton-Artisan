import React from "react";
import "../assets/scss/artisansList.scss";
import imageOrville from "../assets/img/Chauffagiste.jpg";
import imagePain from "../assets/img/boulanger.webp";
import imageChoco from "../assets/img/chocolatier.jpg";
import imageBoucher from "../assets/img/boucher.jpg";
import imageToiletteur from "../assets/img/Toiletteur.jpg";
import imageCouture from "../assets/img/Couture.webp";

const DonneeTest = [
  {
    id: 1,
    nom: "Orville Salmons",
    specialite: "Chauffagiste",
    ville: "Evian",
    note: 5,
    image: imageOrville,
  },
  {
    id: 2,
    nom: "Au pain chaud",
    specialite: "Boulanger",
    ville: "Montélimar",
    note: 4.8,
    image: imagePain,
  },
  {
    id: 3,
    nom: "Chocolaterie Labbé",
    specialite: "Chocolatier",
    ville: "Lyon",
    note: 4.8,
    image: imageChoco,
  },
  {
    id: 4,
    nom: "Boucherie Dumont",
    specialite: "Boucher",
    ville: "Lyon",
    note: 4.5,
    image: imageBoucher,
  },
  {
    id: 5,
    nom: "Valérie Laderoute",
    specialite: "Toiletteur",
    ville: "Valence",
    note: 4.5,
    image: imageToiletteur,
  },
  {
    id: 6,
    nom: "Amitee Lécuyer",
    specialite: "Couturier",
    ville: "Annecy",
    note: 4.5,
    image: imageCouture,
  },
];

const ArtisansList = ({ artisans }) => {
  const listeAafficher =
    artisans && artisans.length > 0 ? artisans : DonneeTest;

  return (
    <main className="artisan-list-page">
      <h1 className="list-title">Résultats de recherche</h1>

      <div className="artisans-grid">
        {listeAafficher.map((artisan) => (
          <div className="artisan-item" key={artisan.id}>
            <div className="artisan-card">
              <img src={artisan.image} alt={artisan.nom} className="card-img" />
              <div className="card-content">
                <h5 className="name">{artisan.nom}</h5>
                <p className="spec">{artisan.specialite}</p>
                <p className="city">{artisan.ville}</p>
                <div className="stars">
                  <span className="star-icon">
                    {[1, 2, 3, 4, 5].map((index) => {
                      const fill =
                        Math.max(0, Math.min(1, artisan.note - (index - 1))) *
                        100;

                      return (
                        <span
                          key={index}
                          className="star"
                          style={{ "--rating": `${fill}%` }}
                        >
                          ★
                        </span>
                      );
                    })}
                  </span>
                  <span className="note-text">{artisan.note}/5</span>
                </div>
                <button className="btn-profile">Voir profil</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArtisansList;
