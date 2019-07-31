import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isNavTop: null
    };
    this.onScroll = this.onScroll.bind(this);
  };
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };
  componentDidUpdate() {
    this.fixNavTop();
    console.log('updated')
    console.log(this.state.isNavTop)
  };
  onScroll() {
    const nav = document.getElementById('Nav');
    const navHeight = nav.offsetHeight;
    let isNavTop = document.documentElement.scrollTop < window.innerHeight + navHeight ? false : true;
    if (isNavTop) {
      this.setState(() => ({ isNavTop : true }));
    } else {
      this.setState(() => ({ isNavTop : false }));
    };
  };
  fixNavTop() {
    if (this.state.isNavTop) {
      document.getElementById('Nav').classList.add('fixed');
    } else {
      document.getElementById('Nav').classList.remove('fixed');
    }
  }
  handleNavItemClick(e) {
    const navItems = [...e.target.parentElement.children];
    navItems.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
  }
  render() {
    return(
      <nav id="Nav" className="Nav">
        <div className="Nav-link active" onClick={this.handleNavItemClick}>
          <a href="#hero">home</a>
        </div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>
          <a href="#about">about</a>
        </div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>
          <a href="#projects">projects</a>
        </div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>
          <a href="#blog">blog</a>
        </div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>
          <a href="#contact">contact</a>
        </div>
      </nav>
    );
  };
};