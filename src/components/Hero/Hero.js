import React from 'react';
import './Hero.css';
import Nav from '../Nav/Nav'

const Hero = () => (
  <section className="Hero">
    <h1>Hey there, I'm Kevin Grant <br /> I'm a front-end web developer</h1>
    <button>Check out my work</button>
    <Nav />
  </section>
);

export default Hero;