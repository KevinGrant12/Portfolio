import React from 'react';
import { ReactComponent as HeroButtonSVG } from './HeroButtonSVG.svg';
import './HeroButton.css';

export default class HeroButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translate: "translateX(100%)",
      opacity: 1,
      initial: true
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
    this.updatePolygons(e)
    this.setState({
      translate: "translateX(-100%)",
      opacity: 0
    });
  };
  handleMouseLeave = (e, prevState) => {
    this.updatePolygons(e)
    this.setState(prevState => ({
      translate: "translateX(100%)",
      initial: !prevState.initial
    }))
  };
  updatePolygons = (e) => {
    const polygons = [...e.target.children];
    polygons.forEach(child => {
      child.style.transform = this.state.translate;
      child.style.opacity = this.state.opacity;
    });
    console.log({polygons})
  };
  render() {
    return(
      <button>
        <HeroButtonSVG
          id="HeroButton"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
        <span>Check out my work<i className="fas fa-chevron-right"></i></span>
      </button>
    );
  };
};