import React from 'react';
import './Skills.css';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: 80,
      css: 80,
      javascript: 60,
      react: 70,
      ui: 70,
      illustrator: 80,
      photoshop: 70
    };
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
  };
  onScroll = () => {
    const skills = document.getElementById('skills');
    const skillsHeight = skills.offsetHeight;
    if (document.documentElement.scrollTop > (skills.offsetTop - skillsHeight)) {
      skills.classList.add('animated')
    }; 
  };
  render() {
    return (
      <ul className="Skills" id="skills">
        <li className="Skills-skill" id="html">
          <div className="Skills-skill__header">
            <p className="name">HTML</p>
            <p className="percent">
              {this.state.html}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="css">
          <div className="Skills-skill__header">
            <p className="name">CSS</p>
            <p className="percent">
              {this.state.css}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="javascript">
          <div className="Skills-skill__header">
            <p className="name">JavaScript</p>
            <p className="percent">
              {this.state.javascript}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="react">
          <div className="Skills-skill__header">
            <p className="name">React</p>
            <p className="percent">
              {this.state.react}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="design">
          <div className="Skills-skill__header">
            <p className="name">UI Design</p>
            <p className="percent">
              {this.state.ui}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="illustrator">
          <div className="Skills-skill__header">
            <p className="name">Illustrator</p>
            <p className="percent">
              {this.state.illustrator}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
        <li className="Skills-skill" id="photoshop">
          <div className="Skills-skill__header">
            <p className="name">Photoshop</p>
            <p className="percent">
              {this.state.photoshop}%
            </p>
          </div>
          <div className="Skills-skill__progress-bar">
            <div className="Skills-skill__progress-amount"></div>
          </div>
        </li>
      </ul>
    );
  };
}