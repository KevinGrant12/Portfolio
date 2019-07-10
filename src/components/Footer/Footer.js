import React from 'react';
import './Footer.css';
import logo from '../../logo-abstract.png';

const Footer = () => (
  <section className="Footer">
    <img src={logo} className="Footer-logo" alt=""/>
    <ul>
      <li>
        <a href="https://github.com/KevinGrant12" target="_blank">
          <span>
          </span>
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kevywevypoo/" target="_blank">
        <span>
        </span>
        <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/kevin-grant-54221291/" target="_blank">
        <span>
        </span>
        <i className="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
    <p>Handcrafted by Kevin Grant &copy;2019</p>
  </section>
);

export default Footer;