import React from 'react';
import './footer.scss';
import logo from '../assets/img/Logo.png';

const Footer = () => {
  return (
    <footer className="main-footer bs-container-fluid">
      <div className="footer-container bs-container">
        
        <div className="footer-top bs-row">
          <div className="footer-logo-section bs-col">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>

          <div className="footer-address-section bs-col">
            <div className="footer-address">
              <p>101 cours Charlemagne</p>
              <p>CS 20033</p>
              <p>69269 Lyon Cedex 02</p>
              <p>France</p>
              <p className="phone">+33 (0)4 26 73 40 00</p>
            </div>
          </div>

          <div className="footer-spacer bs-col"></div>
        </div>

        <div className="footer-bottom bs-row">
          <div className="construction-tag">Page en construction</div>
          <div className="footer-links bs-d-flex">
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