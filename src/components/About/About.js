import React from 'react';
import './About.css';
import { ReactComponent as Shape } from './shape-yellow.svg';

const About = () => (
  <section className="About">
    <div className="About-header header">
      <Shape className="About-shape" />
      <h1>About</h1>
    </div>
    <ul className="About-features">
      <li>
        <h3>Creative</h3>
        <p>Like a T-Rex, I use my <br/>big head to snack on problems</p>
      </li>
      <li>
        <h3>Dynamic</h3>
        <p>Shapes, Colors, and <br/>Transitions...Oh My!</p>
      </li>
      <li>
        <h3>Responsive</h3>
        <p>Forgot your desktop at home? <br/>No problem!</p>
      </li>
      <li>
        <h3>Agile</h3>
        <p>Whipping up layouts quicker <br/>than your favorite barista</p>
      </li>
    </ul>
    <div className="About-main">
      <div className="About-bio">
      
      </div>
      <ul className="About-skills">
      
      </ul>
    </div>
  </section>
);

export default About;