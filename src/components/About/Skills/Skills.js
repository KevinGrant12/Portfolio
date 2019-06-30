import React from 'react';
import './Skills.css';

const Skills = () => (
  <ul className="Skills">
    <li className="Skills-skill" id="html">
      <div className="Skills-skill__header">
        <p className="name">HTML</p>
        <p className="percent">80%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="css">
      <div className="Skills-skill__header">
        <p className="name">CSS</p>
        <p className="percent">80%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="javascript">
      <div className="Skills-skill__header">
        <p className="name">JavaScript</p>
        <p className="percent">60%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="react">
      <div className="Skills-skill__header">
        <p className="name">React</p>
        <p className="percent">50%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="design">
      <div className="Skills-skill__header">
        <p className="name">UI Design</p>
        <p className="percent">50%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="illustrator">
      <div className="Skills-skill__header">
        <p className="name">Illustrator</p>
        <p className="percent">80%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
    <li className="Skills-skill" id="photoshop">
      <div className="Skills-skill__header">
        <p className="name">Photoshop</p>
        <p className="percent">70%</p>
      </div>
      <div className="Skills-skill__progress-bar">
        <div className="Skills-skill__progress-amount"></div>
      </div>
    </li>
  </ul>
);

export default Skills;