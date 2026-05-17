import React from 'react';
import '../assets/css/home.css';

const Home = () => {
  return (
    <main className="home-content">
      <section className="how-it-works">
        <h2>Comment trouver mon artisan ?</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">Etape 1</div>
            <p>Choisir la catégorie d'artisanat dans le menu.</p>
          </div>
          <div className="step-card">
            <div className="step-number">Etape 2</div>
            <p>Choisir un artisan.</p>
          </div>
          <div className="step-card">
            <div className="step-number">Etape 3</div>
            <p>Le contacter via le formulaire de contact.</p>
          </div>
          <div className="step-card">
            <div className="step-number">Etape 4</div>
            <p>Une réponse sera apportée sous 48h.</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Les artisans du mois</h2>
        {/* On s'occupera des fiches après */}
      </section>
    </main>
  );
};

export default Home;