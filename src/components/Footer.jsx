import React from 'react';
import './Footer.css'; 
import 'ionicons/dist/ionicons/ionicons.esm.js';
import 'ionicons/dist/ionicons/ionicons.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.tiktok.com/@corleone277">
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="linkedin.com/in/yahya-mounadi-5740b12a8/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com/yahya_dyl/?hl=fr">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="/">Home</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/projects">Projects</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/about">About me</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/contact">Contact</a>
        </li>
      </ul>
      <p>&copy;2021 Yahya Mounadi | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
