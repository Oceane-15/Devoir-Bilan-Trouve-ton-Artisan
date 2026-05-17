import React from 'react';
import './footer.css';
import logo from '../assets/img/Logo.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* On a maintenant 3 blocs séparés en haut */}
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>

          <div className="footer-address-section">
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 Lyon Cedex 02</p>
            <p>France</p>
            <p>+33 (0)4 26 73 40 00</p>
          </div>

          <div className="footer-spacer"></div>
        </div>

        <div className="footer-bottom">
          <div className="construction-tag">Page en construction</div>
          <div className="footer-links">
            <span>Mentions légales</span>
            <span>Données personnelles</span>
            <span>Accessibilité</span>
            <span>Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;