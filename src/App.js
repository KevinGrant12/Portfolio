import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Development from './components/Development/Development';
import Design from './components/Design/Design';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <Hero/>
      <About />
      <Development />
      <Design />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;