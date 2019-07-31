import React from 'react';
import './Hero.css';
import Nav from '../Nav/Nav';
import logo from '../../logo-abstract.png';
import HeroButton from './HeroButton/HeroButton';
import ZenCircle from './ZenCircle/ZenCircle';

const Hero = () => (
  <section className="Hero" id="hero">
    <ZenCircle />
    <img src={logo} className="Hero-logo" alt=""/>
    <h1>Hello, I'm Kevin Grant</h1>
    <h2>I'm a human & a front-end <span>web developer</span></h2>
    <HeroButton />
    <Nav />
  </section>
);

export default Hero;