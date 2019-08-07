import React from 'react';
import { ReactComponent as HeroButtonSVG } from './HeroButtonSVG.svg';
import './HeroButton.css';

export default class HeroButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translate: "translateX(100%)",
      opacity: 1,
      first: true
    }
  };
  componentDidMount() {
    const polygons = Array.from(document.getElementById('HeroButton').children);
    polygons.forEach(child => {
      child.style.transform = this.state.translate;
      child.style.opacity = this.state.opacity;
    });
    this.setState({
      translate: "none"
    });
  };
  handleMouseEnter = (e) => {
    const polygons = [...e.target.children];
    polygons.forEach(child => {
      child.style.transform = this.state.translate;
      child.style.opacity = this.state.opacity;
    });
    this.setState({
      translate: "translateX(-100%)",
      opacity: 0
    }, () => {
    });
  };
  handleMouseLeave = (e) => {
    const polygons = [...e.target.children];
    this.updatePolygons(e, polygons) 
    setTimeout(() => {
      this.setState({
        translate: "translateX(100%)"
      }, () => {
        this.updatePolygons(e, polygons);
      });
    }, 750)
  };
  updatePolygons = (e, polygons) => {
    if (this.state.first) {
      polygons.forEach(child => {
        child.style.transform = this.state.translate;
        child.style.opacity = this.state.opacity;
      });
      this.setState({ first: false })
    } else {
      polygons.forEach(child => {
        child.style.transform = this.state.translate;
      });
      this.setState({
        first: true,
        translate: "none",
        opacity: 1
      });
    };
  };
  render() {
    return(
      <button>
        <a href="#about">
          <HeroButtonSVG
            id="HeroButton"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <span>Check out my work<i className="fas fa-chevron-right"></i></span>
        </a>
      </button>
    );
  };
};