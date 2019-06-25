import React from 'react';
import './Nav.css';

function handleNavChange(e) {
  const navItems = [...e.target.parentElement.children];
  navItems.forEach(item => item.classList.remove('active'));
  e.target.classList.add('active');
}

function checkScroll() {
  
}

const Nav = () => (
  <nav className="Nav">
    <div className="Nav-link active" onClick={handleNavChange}>home</div>
    <div className="Nav-link" onClick={handleNavChange}>about</div>
    <div className="Nav-link" onClick={handleNavChange}>projects</div>
    <div className="Nav-link" onClick={handleNavChange}>blog</div>
    <div className="Nav-link" onClick={handleNavChange}>contact</div>
  </nav>
);

export default Nav;