import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss'; 
import logo from '../assets/img/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      {/* 1. Logo (à GAUCHE) - Cliquable */}
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="Logo-img" />
        </Link>
      </div>

      {/* 2. Barre de recherche (au CENTRE) */}
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Rechercher" />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      {/* 3. Bouton Burger (à DROITE) - Reprend sa place exacte */}
      <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Menu de navigation (Mobile / Tablettes / Ordinateur) */}
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