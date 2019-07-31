import React from 'react';
import './About.css';
import { ReactComponent as Shape } from './shape-yellow.svg';
import Bio from './Bio/Bio';
import Features from './Features/Features';
import Skills from './Skills/Skills';

const About = () => (
  <section className="About" id="about">
    <div className="About-header header">
      <Shape className="About-shape" />
      <h1>About</h1>
    </div>
    <Features />
    <div className="About-child-wrap">
      <Bio />
      <Skills />
    </div>
  </section>
);

export default About;