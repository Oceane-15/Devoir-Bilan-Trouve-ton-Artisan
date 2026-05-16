import React, { useState } from 'react';
import './header.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      {/* 1. Logo (à GAUCHE) */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="Logo-img" />
      </div>

      {/* 2. Barre de recherche (au CENTRE) */}
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Rechercher" />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      {/* 3. Bouton Burger (à DROITE) */}
      <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Menu de navigation (Mobile : sous le header / Ordi : centré) */}
      <nav className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <ul>
          <li>Bâtiment</li>
          <li>Services</li>
          <li>Fabrication</li>
          <li>Alimentation</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;