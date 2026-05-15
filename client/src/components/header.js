import React from 'react';
import './header.css';
import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="Logo-img" />
      </div>
      
      <div className='right section'>
        <div className='search-bar'>
          <input type="text" placeholder="Rechercher" />
          <button className="search-btn">🔍</button>
        </div> 

        <nav className='center-nav'>
          <ul>
            <li>Bâtiment</li>
            <li>Services</li>
            <li>Fabrication</li>
            <li>Alimentation</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;