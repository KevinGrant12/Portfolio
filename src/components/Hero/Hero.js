import React from 'react';
import './Hero.css';
import Nav from '../Nav/Nav';
import logo from '../../logo-abstract.png';

const Hero = () => (
  <section className="Hero">
    <img src={logo} className="Hero-logo" alt=""/>
    <h1>Hello, I'm Kevin Grant</h1>
    <h2>I'm a human & a front-end <span>web developer</span></h2>
    <button>Check out my work</button>
    <Nav />
  </section>
);

export default Hero;