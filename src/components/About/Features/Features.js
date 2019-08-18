import React from 'react';
import './Features.css';

const Features = () => (
  <ul className="Features">
    <li>
      <i className="fas fa-gamepad"></i>
      <h3>Creative</h3>
      <p>Applications need to look<br/>as good as they work</p>
    </li>
    <li>
    <i className="fas fa-puzzle-piece"></i>
      <h3>Dynamic</h3>
      <p>User engagement is <br/>my top priority</p>
    </li>
    <li>
      <i className="fas fa-code"></i>
      <h3>Responsive</h3>
      <p>Forgot your desktop at home? <br/>No problem!</p>
    </li>
    <li>
      <i className="fas fa-ghost"></i>
      <h3>Agile</h3>
      <p>Lightweight <br/>& high performance</p>
    </li>
  </ul>
);

export default Features;