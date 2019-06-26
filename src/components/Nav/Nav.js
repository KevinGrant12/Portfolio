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
    

    console.log(window.innerHeight)
    console.log('doc scrollTop ' + document.documentElement.scrollTop);
    console.log('calculation ' + (nav.offsetTop - document.documentElement.scrollTop + navHeight))
    console.log('nav offsetTop ' + nav.offsetTop)
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
      <nav id="Nav" className="Nav" onScroll={this.onScroll}>
        <div className="Nav-link active" onClick={this.handleNavItemClick}>home</div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>about</div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>projects</div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>blog</div>
        <div className="Nav-link" onClick={this.handleNavItemClick}>contact</div>
      </nav>
    );
  };
};